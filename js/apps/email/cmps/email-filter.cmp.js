export default {
    props: ['emails'],

    template: `
 <section class = "email-filter" >
 <label>Filter :</label>
 <input type="search" placeholder="Search here.." v-model="filterBy.title" @input="filter">
 <select value="All" @change="filter" v-model="filterBy.isRead">
              <option value="All" >All</option>
              <option value="true" >Read</option>
              <option value="false" >Unread</option>
            </select>
 </section>
`,
    data() {
        return {
            filterBy: {
                title: '',
                isRead: 'All',


            },

        };
    },
    created() { },
    methods: {
        filter() {
            this.$emit("filtered", this.filterBy);
        },
    },
    computed: {},
    unmounted() { },
};