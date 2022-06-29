export default {
    template: `
        <header class="app-header">
            <div class="logo">
            <router-link to="/"><h1 >Apsus App</h1></router-link>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link>
                <router-link to="/book">Books</router-link>
                <router-link to="/email">Email</router-link>
                <router-link to="/keep">Keep</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    
    `
}