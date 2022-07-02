import noteImg from './note-img.cmp.js'
import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
  props: ['notes'],
  template: `
			<section class="note-list">
					<component :is="note.type" v-for="note in notes" :key="note.id" :note="note"></component>
			</section>
		`,

  components: {
    noteImg,
    noteTxt,
    noteTodos,
    noteVideo,
  },
}
