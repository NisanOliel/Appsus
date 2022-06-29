export default {
  props: ['note'],
  template: `
		<section class="note-txt note-preview" :style="note.style">
			<p>{{note.info.txt}}</p>
		</section>
	`,
}
