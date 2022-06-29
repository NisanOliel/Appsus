
import emailCompose from "../cmps/email-compose.cmp.js";

export default {
    template: `
    <section class="email-side">
        <button @click ="composeShow"  >+Compose</button>
        <email-compose  @newEmail="sendNewEmail" v-if="showCompose"/>

        <button >Inbox</button>
        <button >Starred</button>
        <button >Sent</button>
        <button >Drafts</button>
        <button >Trash</button>
    </section>
 
`,
    components: {
        emailCompose,
    },
    data() {
        return {
            showCompose: false,
            filterBy: {
                title: '',
                isRead: 'All',
            },
        };
    },
    created() { },
    methods: {
        composeShow() {
            this.showCompose = !this.showCompose
        },
        sendNewEmail(newEmail) {
            this.$emit('newEmail', newEmail)
            this.showCompose = false
        }
    },
    computed: {},
    unmounted() { },
};