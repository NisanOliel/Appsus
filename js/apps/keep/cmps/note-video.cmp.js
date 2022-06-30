import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
		  <section class="note-video note-preview" :style="note.style">
			<note-options :note="note" />
			<div :contenteditable="note.isEdit" class="edit-area">
				<h2>{{note.info.title}}</h2>
				<iframe width="100%" height="80%" :src="note.info.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>

		  </section>
	  `,

  components: {
    noteOptions,
  },
}
