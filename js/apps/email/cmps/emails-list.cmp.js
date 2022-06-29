import emailPreview from "../cmps/email-preview.cmp.js";


export default {
    props: ["emails"],

    template: `
    <section class="emails-list">
        <table>
            <tr v-for="email in emails" :key="email.id" :class="email.isRead ? 'read' : ''">
            <email-preview :email="email"/>

            </tr>

        </table>
    </section>
`,
    components: {
        emailPreview,
    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {

    },
    unmounted() { },
};