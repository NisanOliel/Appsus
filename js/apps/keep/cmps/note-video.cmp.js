export default {
  props: ['note'],
  template: `
		  <section class="note-video">
			<h2>{{note.info.title}}</h2>
			<iframe width="100" height="100"
			:src="note.info.url">
			</iframe>
		  </section>
	  `,
}
