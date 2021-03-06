import bookPreview from "../cmps/book-preview.cmp.js";

export default {
    props: ["books"],
    template: `
    <section class="book-list">
        <ul>
            <li v-for="(book,idx) in books" :key ="book.id" class="book-preview-container">
            <book-preview :book="book"/>
            <router-link class="details" :to="'/book/'+book.id">Details</router-link>
                </li>
            </ul>
            </section>
            `,
    components: {
        bookPreview,
    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};