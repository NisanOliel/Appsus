import noteAddOptions from './note-add-options.cmp.js'
import noteAddTxt from './note-add-txt.cmp.js'
import noteAddTodos from './note-add-todos.cmp.js'
import noteAddImg from './note-add-img.cmp.js'
import noteAddVideo from './note-add-video.cmp.js'

export default {
  template: `
		  <section class="note-add">
			  <note-add-options @set-type="setType"/>
        <!-- <note-add-txt /> -->
        <component :is="noteAddType" @note-add="noteAdd"></component>
		  </section>
	  `,

  data() {
    return {
      noteAddType: 'noteAddTxt',
    }
  },

  methods: {
    setType(noteType) {
      this.noteAddType = noteType
    },
    noteAdd(note) {
      this.$emit('note-add', note)
    },
  },

  components: {
    noteAddOptions,
    noteAddTxt,
    noteAddTodos,
    noteAddImg,
    noteAddVideo,
  },
}
