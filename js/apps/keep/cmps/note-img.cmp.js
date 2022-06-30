import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
		  <section class="note-img note-preview" :style="note.style">
			<note-options :note="note"/>
			<div :contenteditable="note.isEdit" class="edit-area">
			  <h2>{{note.info.title}}</h2>
			  <img :src="note.info.url"/>
			</div>
		  </section>
	  `,

  components: {
    noteOptions,
  },
}
