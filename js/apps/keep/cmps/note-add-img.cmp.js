export default {
  template: `
			  <section class="note-add">	
					<form @submit.prevent="noteAdd">
					<input type="text" v-model="note.info.url" placeholder="Enter image URL..."/>
					</form>
			  </section>
		  `,

  data() {
    return {
      note: {
        id: Date.now() % 1000,
        type: 'noteImg',
        isPinned: false,
        info: {
          url: '',
        },
        style: {
          backgroundColor: 'lightblue',
        },
      },
    }
  },

  methods: {
    noteAdd() {
      this.$emit('note-add', this.note)
    },
  },
}
