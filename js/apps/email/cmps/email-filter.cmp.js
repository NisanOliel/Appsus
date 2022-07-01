export default {
    props: ['emails'],

    template: `
 <section class = "email-filter" >
 <label>Search: </label>
 <input type="search" placeholder="Search here.." v-model="filterBy.text" @input="filter">
 <label for="">Read/Unread </label>
 <select value="All" @change="filter" v-model="filterBy.read">
              <option value="All" >All</option>
              <option  v-bind:value="true" >Read</option>
              <option v-bind:value="false" >Unread</option>
            </select>
            <label>Sort </label>
            <select @change="onSort" v-model="sort">
              <option value="date">Date</option>
              <option value="name">Name</option>
            </select>
 </section>
`,
    data() {
        return {
            filterBy: {
                text: '',
                read: 'All',
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
    computed: {


    },
    unmounted() { },
};