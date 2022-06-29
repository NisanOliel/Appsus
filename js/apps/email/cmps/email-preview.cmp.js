export default {
    props: ["email"],
    template: `
   <td>{{email.sender}}</td>
   <td>{{email.subject}}</td>
   <td>{{dateFormat}}</td>
`,
    data() {
        return {
        };
    },
    created() { },
    methods: {},
    computed: {
        dateFormat() {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            const month = months[new Date(this.email.sentAt).getMonth()]
            const res = `${month} ${new Date(this.email.sentAt).getDay()}`
            return res

        },
    },
    unmounted() { },
};