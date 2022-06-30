import { eventBus } from "../../../services/eventBus-service.js";

export default {
    template: `
 <form class="compose-email">
            <h3>New Message</h3>
                <input type="email" id="email" placeholder="To:" required  v-model="newEmail.to">
                <input type="text" v-model="newEmail.subject" placeholder="Subject:" >
                <textarea v-model="newEmail.body" rows="30" cols="100">></textarea>
            <button @click.prevent="sendEmail">Send</button>
        </form>
`,
    data() {
        return {
            newEmail: {
                to: null,
                subject: null,
                body: null,
                sentAt: null,
                sender: null,
                isStar: false,
                isRead: false,

            },
        };
    },
    created() { },
    methods: {
        sendEmail() {
            if (this.newEmail.to === null && this.newEmail.body === null) return
            this.newEmail.sentAt = Date.now()
            this.newEmail.sender = "You"
            this.$emit('newEmail', this.newEmail)
            eventBus.emit('show-msg', { txt: 'Email sent', type: 'success' });

        },
    },
    computed: {},
    unmounted() { },
};