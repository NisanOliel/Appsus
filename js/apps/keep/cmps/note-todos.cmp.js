export default {
  props: ['note'],
  template: `
			<section class="note-todos" style="note.style">
			  <h2>{{note.info.label}}</h2>
			  <ul>
				<li v-for="todo in note.info.todos">{{todo.txt}}</li>
			  </ul>
			</section>
		`,
}
