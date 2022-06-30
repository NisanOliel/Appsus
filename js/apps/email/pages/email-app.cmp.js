import { emailService } from "../services/emails-service.js"
import emailList from "../cmps/emails-list.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailSide from "../cmps/email-side.cmp.js"



export default {
    template: `
    <email-filter v-if="emails" @filtered="setFilter" :emails="emails" @sort="sortEmails"></email-filter>
    <section class="email-app">
            <div class="email-list-side">
                <email-side @filtered="setFilter"  @newEmail="sendEmail" :unRead="unReadCount"></email-side>
            <email-list @readMail="readMail" @starMail="starMail" :emails="emailsToShow"></email-list>
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
            criteria: {
                status: null,
                txt: null,
                isRead: null,
                isStared: null,
            }


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
        },
        sortEmails(sortBy) {
            if (sortBy === 'date') {
                return this.emails.sort((e1, e2) => e2.sentAt - e1.sentAt);
            } else
                return this.emails.sort((e1, e2) => e1.subject.toLowerCase() > e2.subject.toLowerCase() ? 1 : -1);
        },
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
        unReadCount() {
            let count = 0;
            if (!this.emails) return;
            this.emails.filter((email) => {
                if (!email.isRead) {
                    count++;
                }
            });
            return count;
        },
    },
    unmounted() { },
};




