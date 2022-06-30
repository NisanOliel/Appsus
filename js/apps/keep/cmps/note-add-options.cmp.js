export default {
  template: `
		  <section class="note-add-options">
			<div class="add-option" @click="setType('noteAddTxt')">
			<i class="fa-solid fa-text-height"></i>
				<span>Text</span>
		  	</div>
			<div class="add-option" @click="setType('noteAddTodos')">
		  		<i class="fa-solid fa-circle-check" ></i>
				<span>Todos</span>
			</div>
			<div class="add-option" @click="setType('noteAddImg')">
				<i class="fa-solid fa-image" ></i>
				<span>Image</span>
			</div>
			<div class="add-option" @click="setType('noteAddVideo')">
				<i class="fa-solid fa-video" ></i>
				<span>Video</span>
			</div>
		  </section>
	  `,

  methods: {
    setType(type) {
      this.$emit('set-type', type)
    },
  },
}
