export default {
  template: `
			  <section class="note-add">	
					<form @submit.prevent="noteAdd" class="note-add-todos">
					<input type="text" v-model="note.info.label" placeholder="Enter label" required/>
					<input type="text" v-model="note.info.todos" placeholder="Enter comma separated list..." required/>
          <button>Add Todos</button>
					</form>
			  </section>
		  `,

  data() {
    return {
      note: {
        id: Date.now() % 1000,
        type: 'noteTodos',
        isPinned: false,
        isEdit: false,
        info: {
          label: '',
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
      this.note.info.todos = this.prepareTodos()
      this.$emit('note-add', this.note)
    },
    prepareTodos() {
      const todos = this.note.info.todos.split(',')
      return todos
    },
  },
}
