export default {
  template: `
			  <section class="note-add">	
					<form @submit.prevent="noteAdd">
					<input type="text" v-model="note.info.label" placeholder="Enter label"/>
					<input type="text" v-model="note.info.txt" placeholder="Enter comma separated list..."/>
					</form>
			  </section>
		  `,

  data() {
    return {
      note: {
        id: Date.now() % 1000,
        type: 'noteTodos',
        isPinned: false,
        info: {
          label: '',
          txt: '',
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
