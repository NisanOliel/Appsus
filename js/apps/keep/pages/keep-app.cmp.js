import { noteService } from '../services/note.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
  template: `
    <section class="keep-app">
        <h1>My Notes</h1>
        <note-add/>
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
    noteService.query().then((notes) => (this.notes = notes))
  },

  components: {
    noteAdd,
    noteList,
  },
}
