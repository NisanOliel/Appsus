export default {
    template: `
 <section class="home-page">
     <h1>WELCOME TO APSUS APP</h1>
     <h5>All you need in one app.</h5>

<div class="home-images">
        <p>Email</p>
        <router-link  to="/email"><img src="images/email.svg"></router-link>
    
        <p>Note</p>
        <router-link  to="/keep"> <img src="images/note.svg"></router-link>
        
        <p>Books</p>
        <router-link  to="/book"><img src="images/book.svg" ></router-link>
</div>
        
 </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
