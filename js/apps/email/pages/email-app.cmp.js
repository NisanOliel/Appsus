import { emailService } from "../services/emails-service.js"
import emailList from "../cmps/emails-list.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailSide from "../cmps/email-side.cmp.js"



export default {
    template: `
    <email-filter v-if="emails" @filtered="setFilter" :emails="emails"></email-filter>
    <section class="email-app">
            <div class="email-list-side">
            <email-list @readMail="readMail" @starMail="starMail" :emails="emailsToShow"></email-list>
            <email-side @newEmail="sendEmail"></email-side>
        </div>


    </section>
`,
    components: {
        emailList,
        emailFilter,
        emailSide,
    },
    data() {
        return {
            emails: null,
            filterBy: null,

        };
    },
    created() {
        emailService.query().then(emails => this.emails = emails)



    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        starMail(email) {
            emailService.emailStar(email)
        },
        readMail(email) {
            emailService.readMail(email)
        },
        sendEmail(email) {
            emailService.save(email)
                .then(email => this.emails.push(email))
        }
    },
    computed: {
        emailsToShow() {
            var resTrue = null
            if (!this.filterBy) return this.emails;
            if (this.filterBy.isRead === "true") resTrue = this.emails.filter((email) => email.isRead === true)
            if (this.filterBy.isRead === "false") resTrue = this.emails.filter((email) => email.isRead === false)
            const regex = new RegExp(this.filterBy.title, "i");
            if (resTrue) return resTrue.filter((email) => regex.test(email.subject));
            return this.emails.filter((email) => regex.test(email.subject));
        },
    },
    unmounted() { },
};