import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
		<section class="note-txt note-preview" :style="note.style">
			<note-options :noteId="note.id" />
			<p>{{note.info.txt}}</p>
		</section>
	`,

  components: {
    noteOptions,
  },
}
