import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
		  <section class="note-img note-preview" :style="note.style">
			<note-options :noteId="note.id"/>
			  <h2>{{note.info.title}}</h2>
			  <img :src="note.info.url"/>
		  </section>
	  `,

  components: {
    noteOptions,
  },
}
