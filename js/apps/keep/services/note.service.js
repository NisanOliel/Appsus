import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notes'
_createNotes()

export const noteService = {
  query,
  get,
  save,
  remove,
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = [
      {
        id: 'n101',
        type: 'noteTxt',
        isPinned: true,
        info: {
          txt: 'Fullstack Me Baby!',
        },
        style: {
          backgroundColor: 'red',
        },
      },
      {
        id: 'n102',
        type: 'noteImg',
        info: {
          url: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png',
          title: 'Bobi and Me',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: 'n103',
        type: 'noteTodos',
        info: {
          label: 'Get my stuff together',
          todos: [
            { txt: 'Driving liscence', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
        style: {
          backgroundColor: 'yellow',
        },
      },
      {
        id: 'n104',
        type: 'noteVideo',
        info: {
          title: 'Video',
          url: 'https://www.youtube.com/embed/DXUAyRRkI6k',
        },
        style: {
          backgroundColor: 'green',
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

function save(note) {
  // if (note.id) return storageService.put(NOTES_KEY, note)
  return storageService.post(NOTES_KEY, note)
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId)
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
