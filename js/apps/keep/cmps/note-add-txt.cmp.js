export default {
  template: `
			<section class="note-add">	
		  		<form @submit.prevent="noteAdd">
				  <input type="text" v-model="note.info.txt" placeholder="What's on your mind..."/>
          <button>Add Text</button>
		  		</form>
			</section>
		`,

  data() {
    return {
      note: {
        id: null,
        type: 'noteTxt',
        isPinned: false,
        isEdit: false,
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
      this.note.id = Date.now() % 1000
      this.$emit('note-add', this.note)
      this.inputClear()
    },
    inputClear() {
      setTimeout(() => {
        this.note.info.txt = ''
      }, 200)
    },
  },
}
