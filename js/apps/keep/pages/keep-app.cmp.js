import { noteService } from '../services/note.service.js'
import { eventBus } from '../../../services/eventBus-service.js'
import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'

export default {
  template: `
    <section class="keep-app">
        <h1>My Notes</h1>
        <note-add @note-add="noteAdd"/>
        <note-list :notes="notes"/>
    </section>
`,
  data() {
    return {
      notes: null,
      filterBy: null,
    }
  },

  created() {
    eventBus.on('note-delete', this.noteDelete)
    eventBus.on('note-edit', this.noteEdit)
    eventBus.on('note-pin', this.notePin)
    noteService.query().then((notes) => (this.notes = notes))
  },

  methods: {
    noteDelete(noteId) {
      noteService.remove(noteId).then(() => {
        noteService.query().then((notes) => (this.notes = notes))
      })
    },
    noteEdit(noteId) {
      noteService.get(noteId).then((note) => {
        note.isEdit = !note.isEdit
        noteService.update(note).then(() => {
          noteService.query().then((notes) => (this.notes = notes))
        })
      })
    },
    notePin(noteId) {
      noteService.get(noteId).then((note) => {
        note.isPinned = !note.isPinned
      })
    },
    noteAdd(note) {
      noteService.save(note).then(() => {
        noteService.query().then((notes) => (this.notes = notes))
      })
    },
  },

  components: {
    noteList,
    noteAdd,
  },
}

// https://www.npmjs.com/package/vue-contenteditable
