import { emailService } from "../services/emails-service.js";
import { eventBus } from "../../../services/eventBus-service.js";

export default {
    template: `
 <section v-if="email" class="email-details">
    <div class="sub-date">
        <h1>{{email.subject}}</h1>
        <h3>{{dateFormat}}</h3>
    </div>
    <h5>From : {{email.sender}} <span><{{email.senderEmail}}></span></h5>
    <p>{{email.body}}</p>
    <div class="btn-details">
        <router-link title="back to emails" :to="'/email/'">back</router-link>
    </div>
    <div class="delte-details">

        <td  title="Delete email" @click="remove(email.id)"><i class="fa-regular fa-trash-can trash"></i></td>
    </div>

 </section>
`,
    data() {
        return {
            email: null,
        };
    },
    created() {
        const id = this.$route.params.emailId
        emailService.get(id).then(email => this.email = email)

    },
    methods: {
        remove(idx) {
            emailService.remove(idx)
            this.$router.push('/email')
            eventBus.emit('show-msg', { txt: 'Book Removed successfully', type: 'success' });
        }
    },
    computed: {
        dateFormat() {
            return new Date(this.email.sentAt).toLocaleString()
        }
    },
    unmounted() { },
};