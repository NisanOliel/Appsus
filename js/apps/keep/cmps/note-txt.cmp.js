import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
		<section class="note-txt note-preview" :style="note.style">
			<note-options :note="note" />
			<div :contenteditable="note.isEdit" class="edit-area">
				<p>{{note.info.txt}}</p>
			</div>
		</section>
	`,

  components: {
    noteOptions,
  },
}
