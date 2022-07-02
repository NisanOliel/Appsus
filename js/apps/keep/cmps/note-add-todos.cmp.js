export default {
  template: `
			  <section class="note-add">	
					<form @submit.prevent="noteAdd">
					<input type="text" v-model="note.info.title" placeholder="Enter label" required/>
					<input type="text" v-model="note.info.todos" placeholder="Enter comma separated list..." required/>
          <button>Add Todos</button>
					</form>
			  </section>
		  `,

  data() {
    return {
      note: {
        id: null,
        type: 'noteTodos',
        isPinned: false,
        isEdit: false,
        info: {
          title: '',
          todos: '',
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
      this.note.info.todos = this.prepareTodos()
      this.$emit('note-add', this.note)
      this.inputClear()
    },
    prepareTodos() {
      const todos = this.note.info.todos.split(',')

      return todos.map((todo) => {
        return (todo = { txt: todo, isDone: false })
      })
    },
    inputClear() {
      setTimeout(() => {
        this.note.info.title = ''
        this.note.info.todos = ''
      }, 100)
    },
  },
}
