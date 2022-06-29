import { emailService } from "../services/emails-service.js"
import emailList from "../cmps/emails-list.cmp.js";


export default {
    template: `
    <section class="email-app">
        <email-list :emails="emails"></email-list>

    </section>
`,
    components: {
        emailList,

    },
    data() {
        return {
            emails: null,
        };
    },
    created() {
        emailService.query().then(emails => this.emails = emails)


    },
    methods: {},
    computed: {},
    unmounted() { },
};