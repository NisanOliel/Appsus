export default {
  props: ['note'],
  template: `
		<section class="note-txt" :style="note.style">
			<p>{{note.info.txt}}</p>
		</section>
	`,
}
