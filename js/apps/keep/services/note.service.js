import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notes'
_createNotes()

export const noteService = {
  query,
  get,
  addReview,
  removeReview,
  save,
  remove,
  getNextNoteId,
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = [
      // {
      //   id: 'n101',
      //   type: 'note-txt',
      //   isPinned: true,
      //   info: {
      //     txt: 'Fullstack Me Baby!',
      //     title: 'hey',
      //     url: 'https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png',
      //   },
      // },
      // {
      //   id: 'n102',
      //   type: 'note-img',
      //   info: {
      //     url: 'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
      //     txt: 'Bobi and Me',
      //   },
      //   style: {
      //     backgroundColor: '#00d',
      //   },
      // },
      {
        id: 'n103',
        type: 'note-todos',
        info: {
          title: 'Song',
          url: 'https://www.youtube.com/watch?v=AEpZbvtiQFs&t=1157s',
          label: 'Get my stuff together',
          todos: [
            { txt: 'Driving liscence', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
      },
    ]
    utilService.saveToStorage(NOTES_KEY, notes)
  }
  return notes
}

function get(noteId) {
  return storageService.get(NOTES_KEY, noteId)
}

function query() {
  return storageService.query(NOTES_KEY)
}

function addReview(noteId, review) {
  return storageService.get(NOTES_KEY, noteId).then((note) => {
    if (!note.reviews || !note.reviews) note.reviews = []
    note.reviews.push(review)
    save(note)
    return note
  })
}
function removeReview(noteId, reviewId) {
  return storageService.get(NOTES_KEY, noteId).then((note) => {
    note.reviews.splice(reviewId, 1)
    if (note.reviews.length === 0) note.reviews = null
    save(note)
  })
}

function save(note) {
  if (note.id) return storageService.put(NOTES_KEY, note)
  else return storageService.post(NOTES_KEY, note)
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId)
}

function getNextNoteId(noteId) {
  return storageService.query(NOTES_KEY).then((notes) => {
    const idx = notes.findIndex((note) => note.id === noteId)
    return idx < notes.length - 1 ? notes[idx + 1].id : notes[0].id
  })
}

// function getNotesList(value) {
//   const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`
//   return axios
//     .get(url)
//     .then((res) => res.data.items)
//     .then((items) => {
//       let newItems = items.map(loadBookInfo)
//       return Promise.all(newItems).then((item) => {
//         return item
//       })
//     })
// }

function loadNoteInfo(note) {
  const info = note.volumeInfo
  return {
    noteId: note.id,
    title: info.title,
    subtitle: info.subtitle,
    authors: info.authors,
    thumbnail: info.imageLinks?.thumbnail,
    description: info.description,
    publishedDate: info.publishedDate,
    pageCount: info.pageCount,
    language: info.language,
    categories: info.categories,
    listPrice: {
      amount: utilService.getRandomInt(0, 200),
    },
  }
}
