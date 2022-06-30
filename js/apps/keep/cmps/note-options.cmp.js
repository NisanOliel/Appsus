import { eventBus } from '../../../services/eventBus-service.js'

export default {
  props: ['note'],
  template: `
			<section class="note-options">
				<i @click="notePin(note.id)" :class="isPinned" class="fa-solid fa-thumbtack" title="Pin"></i>
				<i @click="noteEdit(note.id)" :class="isEdit" class="fa-solid fa-pen-to-square" title="Edit"></i>
				<i @click="noteDelete(note.id)" class="fa-solid fa-trash-can" title="Delete"></i>
        <i class="fa-solid fa-palette" title="Background Color">
        </i>
        <input @input="setColor({noteId: note.id, color})" type="color" v-model="color" class="color-change"/>
        
			</section>
		`,

  data() {
    return {
      color: null,
    }
  },

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
    setColor(idColorObj) {
      eventBus.emit('color-change', idColorObj)
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
