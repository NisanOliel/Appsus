
import emailCompose from "../cmps/email-compose.cmp.js";

export default {
    props: ['unRead'],

    template: `
    <section class="email-side">
        <button class="compose-btn"  @click ="composeShow"> <img class="compose-img" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"> Compose</button>
        <email-compose  @newEmail="sendNewEmail" v-if="showCompose"/>

        <button class="side-btn" @click="inboxClick"><i class="fa-solid fa-inbox"></i> Inbox</button>
        <button class="side-btn" @click="starClick" ><i class="fa-regular fa-star"></i> Starred</button>
        <button class="side-btn" @click="sendClick" ><i class="fa-solid fa-paper-plane"></i>  Sent</button>
        <button class="side-btn" ><i class="fa-solid fa-file"></i> Drafts</button>
        <button class="side-btn" ><i class="fa-solid fa-trash-can"></i> Trash</button>
        <h3> <i class="fa-regular fa-envelope-open"></i> {{unRead}}</h3>

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
                isRead: '',
                isStar: ''
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
        },
        filter() {
            this.$emit("filtered", this.filterBy);
        },
        filterCategory() {
            this.$emit("FilterCategory", this.filterCate);
        },
        inboxClick() {
            this.filterBy = {
                isRead: 'All',
            },
                this.filter()
        },
        starClick() {
            this.filterCate = {
                isStar: 'true',
            },
                this.filterCategory()
        },
        sendClick() {
            this.filterCate = {
                sender: 'You'
            },
                this.filterCategory()
        },
    },
    computed: {},
    unmounted() { },
};