import noteOptions from './note-options.cmp.js'

export default {
  props: ['note'],
  template: `
			<section class="note-todos note-preview" :style="note.style">
				<note-options :note="note" />
				<div :contenteditable="note.isEdit" class="edit-area">
			  		<h2>{{note.info.label}}</h2>
			  		<ul>
						<li v-for="todo in note.info.todos" @click="isDone">{{todo}}</li>
			  		</ul>
				</div>
			</section>
		`,

  components: {
    noteOptions,
  },
}
