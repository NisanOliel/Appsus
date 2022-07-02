import { eventBus } from "../../../services/eventBus-service.js";
import { utilService } from "../../../services/util-service.js";


export default {
    template: `
 <form class="compose-email">
     <h3>New Message</h3>
     <input type="email" placeholder="To:"  v-model="newEmail.to">
     <input type="text" v-model="newEmail.subject" placeholder="Subject:"/>
     <textarea placeholder="Text here.." v-model="newEmail.body" rows="38" cols="100">></textarea>
     <button @click.prevent="sendEmail">Send</button>
    </form>
    <button class="compose-exit-btn" @click.prevent="exitCompose">X</button>
`,
    data() {
        return {
            newEmail: {
                id: utilService.makeId(),
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
            if (this.newEmail.to === null || this.newEmail.body === null || this.newEmail.subject === null) {
                eventBus.emit('show-msg', { txt: 'Need to fill all the cells', type: 'error' });
                return
            }

            this.newEmail.sentAt = Date.now()
            this.newEmail.sender = 'Mahatma Appsus'
            this.$emit('newEmail', this.newEmail)
            eventBus.emit('show-msg', { txt: 'Email sent', type: 'success' });
        },

        exitCompose() {
            this.$emit('composeShow')
        }

    },
    computed: {},
    unmounted() { },
};