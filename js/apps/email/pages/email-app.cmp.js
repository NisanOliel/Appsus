import { emailService } from "../services/emails-service.js"
import emailList from "../cmps/emails-list.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";



export default {
    template: `
    <email-filter v-if="emails" @filtered="setFilter" :emails="emails"></email-filter>
    <section class="email-app">
        <email-list :emails="emailsToShow"></email-list>

    </section>
`,
    components: {
        emailList,
        emailFilter,
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
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const regex = new RegExp(this.filterBy.byName, "i");
            return this.emails.filter((email) => regex.test(email.title));
        },
    },
    unmounted() { },
};