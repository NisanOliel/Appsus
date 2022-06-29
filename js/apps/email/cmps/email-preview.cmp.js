import { emailService } from "../services/emails-service.js";
import { eventBus } from "../../../services/eventBus-service.js";


export default {
    props: ["email"],
    template: `
           
           <tr class="email-preview-container" >
               <td @click="onStarMail"> <i :class="starred"></i> </td> 
               <router-link :to="'/email/'+email.id">
             <td>{{email.sender}}</td>
            <td>{{email.subject}}</td>
            <td>{{dateFormat}}</td>
        </router-link>  
            <td @click="onReadMail"><i :class="envelope"></i></td>
            <td @click="remove(email.id)"><i class="fa-regular fa-trash-can trash"></i></td>
            
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

    },
    computed: {
        dateFormat() {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            const month = months[new Date(this.email.sentAt).getMonth()]
            const res = `${month} ${new Date(this.email.sentAt).getDay()}`
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