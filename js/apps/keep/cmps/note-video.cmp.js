import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
		  <section class="note-video note-preview" :style="note.style">
			<note-options :noteId="note.id" />
			<h2>{{note.info.title}}</h2>
			<iframe width="80%" height="80%" :src="note.info.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		  </section>
	  `,

  components: {
    noteOptions,
  },
}
