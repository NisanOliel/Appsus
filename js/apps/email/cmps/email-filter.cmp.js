export default {
    props: ['emails'],

    template: `
 <section class = "email-filter" >
 <label>Search: </label>
 <input type="search" placeholder="Search here.." v-model="filterBy.title" @input="filter">
 <label for="">Read/Unread </label>
 <select value="All" @change="filter" v-model="filterBy.isRead">
              <option value="All" >All</option>
              <option value="true" >Read</option>
              <option value="false" >Unread</option>
            </select>
            <label>Sort </label>
            <select @change="onSort" v-model="sort">
              <option value="date">Date</option>
              <option value="title">Title</option>
            </select>
 </section>
`,
    data() {
        return {
            filterBy: {
                title: '',
                isRead: 'All',
            },
            sort: 'date',


        };
    },
    created() { },
    methods: {
        filter() {
            this.$emit("filtered", this.filterBy);
        },
        onSort() {
            this.$emit('sort', this.sort);
        },
    },
    computed: {},
    unmounted() { },
};