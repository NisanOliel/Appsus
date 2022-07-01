export default {
  template: `
			  <section class="note-add">	
					<form @submit.prevent="noteAdd">
					<input type="text" v-model="note.info.url" placeholder="Enter image URL..." required/>
          <button>Add Image</button>
					</form>
			  </section>
		  `,

  data() {
    return {
      note: {
        id: null,
        type: 'noteImg',
        isPinned: false,
        isEdit: false,
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
      if (this.isImage()) {
        this.note.id = Date.now() % 1000
        this.$emit('note-add', this.note)
        this.inputClear()
      }
    },
    isImage() {
      return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(this.note.info.url)
    },
    inputClear() {
      setTimeout(() => {
        this.note.info.url = ''
      }, 200)
    },
  },
}
