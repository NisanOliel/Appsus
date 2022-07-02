
import emailCompose from "../cmps/email-compose.cmp.js";

export default {
    props: ['unRead'],

    template: `
    <section class="email-side">
        <div class="compose-btn">
            <button title="send new email"  @click ="composeShow"> <img class="compose-img" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"> Compose</button>
        </div>
        <email-compose  @newEmail="sendNewEmail" @composeShow="composeShow" v-if="showCompose"/>
        
        <button class="side-btn" @click="inboxClick"><i class="fa-solid fa-inbox"></i> Inbox</button>
        <button class="side-btn" @click="starClick" ><i class="fa-regular fa-star"></i> Starred</button>
        <button class="side-btn" @click="sentClick" ><i class="fa-solid fa-paper-plane"></i>  Sent</button>
        <!-- <button class="side-btn" @click="draftClick" ><i class="fa-solid fa-file"></i> Drafts</button> -->
        <button class="side-btn" @click="trashClick" ><i class="fa-solid fa-trash-can"></i> Trash</button>
        <h3> <i class="fa-regular fa-envelope-open"></i> {{unRead}}</h3>

    </section>
 
`,
    components: {
        emailCompose,
    },
    data() {
        return {
            showCompose: false,
            folder: ''



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
        },
        setFolder() {
            this.$emit("setFolder", this.folder);
        },

        inboxClick() {
            this.folder = 'inbox'
            this.setFolder()
        },
        starClick() {
            this.folder = 'star'
            this.setFolder()
        },
        sentClick() {
            this.folder = 'sent'
            this.setFolder()
        },
        draftClick() {
            this.folder = 'draft'
            this.setFolder()
        },
        trashClick() {
            this.folder = 'trash'
            this.setFolder()
        },
    },
    computed: {},
    unmounted() { },
};