export default {
    template: `
  <header class="app-header">
            <div class="logo">
            <router-link to="/"><h1 >Appsus App</h1></router-link>
            </div>
            <nav :class="{ 'nav-bar': !isOpen, 'nav-bar open': isOpen }">
                <router-link @click="toggleHamburger" to="/">Home</router-link>
                <router-link @click="toggleHamburger" to="/book">Books</router-link>
                <router-link @click="toggleHamburger" to="/email">Email</router-link>
                <router-link @click="toggleHamburger" to="/keep">Keep</router-link>
                <router-link @click="toggleHamburger" to="/about">About</router-link>
            </nav>
        </header>
        <div>
            <button @click="toggleHamburger" class="hamburger-btn">{{getIcon}}</button>
        </div>
`,
    data() {
        return {
            isOpen: false,
        };
    },
    created() { },
    methods: {
        toggleHamburger() {
            this.isOpen = !this.isOpen
        },
    },
    computed: {
        getIcon() {
            return this.isOpen ? "X" : "☰"
        }
    },
    unmounted() { },
};