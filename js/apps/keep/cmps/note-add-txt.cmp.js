export default {
  template: `
			<section class="note-add">	
		  		<form @submit.prevent="noteAdd">
				  <input type="text" v-model="note.info.txt" placeholder="What's on your mind..."/>
		  		</form>
			</section>
		`,

  data() {
    return {
      note: {
        id: Date.now() % 1000,
        type: 'noteTxt',
        isPinned: false,
        info: {
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
