export default {
  template: `
			  <section class="note-add">	
					<form @submit.prevent="noteAdd">
					<input type="text" v-model="note.info.url" placeholder="Enter video URL..."/>
          <button>Add Video</button>
					</form>
			  </section>
		  `,

  data() {
    return {
      note: {
        id: null,
        type: 'noteVideo',
        isPinned: false,
        isEdit: false,
        info: {
          url: '',
        },
        style: {
          backgroundColor: 'lightblue',
        },
      },
    }
  },

  methods: {
    noteAdd() {
      if (this.isYoutubeVideo()) {
        this.note.id = Date.now() % 1000
        const videoId = this.getYoutubeVideoId()
        this.note.info.url = `https://www.youtube.com/embed/${videoId}`
        this.$emit('note-add', this.note)
        this.inputClear()
      }
    },
    isYoutubeVideo() {
      return this.note.info.url.includes('youtube')
    },
    getYoutubeVideoId() {
      const url = this.note.info.url
      const videoIdIdx = url.indexOf('v=') + 2
      return url.substring(videoIdIdx)
    },
    inputClear() {
      setTimeout(() => {
        this.note.info.url = ''
      }, 200)
    },
  },
}
