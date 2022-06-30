import { emailService } from "../services/emails-service.js";
import { eventBus } from "../../../services/eventBus-service.js";


export default {
    props: ["email"],
    template: `
           
           <tr class="email-preview-container" >
            <div class="icons">
                <td @click="onStarMail"> <i :class="starred"></i> </td> 
                <td @click="onReadMail"><i :class="envelope"></i></td>
                <td @click="toDraft(email)"><i class="fa-regular fa-trash-can trash"></i></td>
            </div>
            <div class="email-info">

                <router-link @click="onReadMail" :to="'/email/'+email.id">
                    <td>{{email.sender}}</td>
                    <td class="email-title">{{email.subject}}</td>
                    <td class="email-date">{{dateFormat}}</td>
                </router-link>  
            </div>
            
        </tr>
    
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
        }
    },
    unmounted() { },
};