import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
			<section class="note-todos note-preview" :style="note.style">
				<note-options :noteId="note.id" />
			  <h2>{{note.info.label}}</h2>
			  <ul>
				<li v-for="todo in note.info.todos">{{todo.txt}}</li>
			  </ul>
			</section>
		`,

  components: {
    noteOptions,
  },
}
