import { emailService } from "../services/emails-service.js";
import { eventBus } from "../../../services/eventBus-service.js";


export default {
    props: ["email"],
    template: `   
           <article class="email-preview-container" >
                <td title="starred email" class="hover-icon " @click="onStarMail"> <i :class="starred"></i> </td> 
                <td title=" read/unread" class="hover-icon" @click="onReadMail"><i :class="envelope"></i></td>
                <td title=" delete email" class="hover-icon" @click="toDraft(email)"><i class="fa-regular fa-trash-can trash"></i></td>
            
                 <td @click="onOpenMail">{{email.sender}}</td>
                 <td @click="onOpenMail" class="email-title">{{email.subject}}</td>
                 <td @click="onOpenMail"  class="email-date">{{dateFormat}}</td>
</article>

`,
    data() {
        return {
        };
    },
    created() {
    },
    methods: {
        onStarMail() {
            this.$emit('starMail', this.email)
        },
        onReadMail() {
            this.$emit('readMail', this.email)
        },
        onOpenMail() {
            this.$emit('readMail', this.email)
            this.$router.push(`/email/${this.email.id}`)
        },
        toDraft(email) {
            this.$emit('removeEmail', email)
        }

    },
    computed: {
        dateFormat() {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            const month = months[new Date(this.email.sentAt).getMonth()]
            const res = `${month} ${new Date(this.email.sentAt).getDay()} ${new Date(this.email.sentAt).getFullYear()}`
            return res
        },
        envelope() {
            return (this.email.isRead) ? "fa-regular fa-envelope-open" : "fa-regular fa-envelope"
        },
        starred() {
            return (this.email.isStar) ? "fa-solid fa-star star" : "fa-regular fa-star"
        },
    },
    unmounted() { },
};