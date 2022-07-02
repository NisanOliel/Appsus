export default {
  template: `
		<section class="note-filter">
			<input type="text" v-model="filterBy.search" @input="notesFiltered" placeholder="Search..." />
			<select v-model="filterBy.type" @change="notesFiltered">
				<option value="">All</option>
				<option value="noteTxt">Text</option>
				<option value="noteTodos">Todos</option>
				<option value="noteImg">Image</option>
				<option value="noteVideo">Video</option>
			</select>		
		</section>
	`,

  data() {
    return {
      filterBy: {
        search: '',
        type: '',
      },
    }
  },

  methods: {
    notesFiltered() {
      this.$emit('notes-filtered', this.filterBy)
    },
  },
}
