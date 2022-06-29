export default {
    props: ['emails'],

    template: `
 <section class = "email-filter" >
 <label>Filter :</label>
 <input type="search" placeholder="Search here.." v-model="filterBy.byName" @input="filter">
 </section>
`,
    data() {
        return {
            filterBy: {
                title: '',

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