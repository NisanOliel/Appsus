export default {
  props: ['note'],
  template: `
		  <section class="note-img" :style="note.style">
			  <h2>{{note.info.title}}</h2>
			  <img :src="note.info.url"/>
		  </section>
	  `,
}
