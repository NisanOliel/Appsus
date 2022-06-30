import { eventBus } from '../../../services/eventBus-service.js'

export default {
  props: ['note'],
  template: `
			<section class="note-options">
				<i @click="notePin(note.id)" :class="isPinned" class="fa-solid fa-thumbtack"></i>
				<i @click="noteEdit(note.id)" :class="isEdit" class="fa-solid fa-pen-to-square"></i>
				<i @click="noteDelete(note.id)" class="fa-solid fa-trash-can"></i>
			</section>
		`,

  methods: {
    noteDelete(noteId) {
      eventBus.emit('note-delete', noteId)
    },
    noteEdit(noteId) {
      eventBus.emit('note-edit', noteId)
    },
    notePin(noteId) {
      eventBus.emit('note-pin', noteId)
    },
  },

  computed: {
    isEdit() {
      return { orange: this.note.isEdit }
    },
    isPinned() {
      return { orange: this.note.isPinned }
    },
  },
}
