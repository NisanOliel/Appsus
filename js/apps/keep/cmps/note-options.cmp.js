import { eventBus } from '../../../services/eventBus-service.js'

export default {
  props: ['noteId'],
  template: `
			<section class="note-options">
				<i class="fa-solid fa-thumbtack"></i>
				<i class="fa-solid fa-pen-to-square"></i>
				<i @click="deletedNote(noteId)" class="fa-solid fa-trash-can"></i>
			</section>
		`,

  methods: {
    deletedNote(noteId) {
      eventBus.emit('delete-note', noteId)
    },
  },
}
