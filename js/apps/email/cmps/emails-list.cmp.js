import emailPreview from "../cmps/email-preview.cmp.js";


export default {
    props: ["emails"],

    template: `
    <section class="emails-list ">
                 <email-preview 
                 @readMail="readMail" 
                 @removeEmail="removeEmail"  
                 @starMail="starMail" 
                 :email="email"
                 v-for="email in emails" 
                 :key="email.id" 
                 :class="email.isRead ? 'read' : ''"/>
    </section>
`,
    components: {
        emailPreview,
    },
    data() {
        return {};
    },
    created() { },
    methods: {
        starMail(email) {
            this.$emit('starMail', email)
        },
        readMail(email) {
            this.$emit('readMail', email)
        },
        removeEmail(email) {
            this.$emit('removeEmail', email)
        },
    },
    computed: {

    },
    unmounted() { },
};