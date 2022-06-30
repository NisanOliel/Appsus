import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notes'
_createNotes()

export const noteService = {
  query,
  get,
  save,
  remove,
  update,
  updateUnshift,
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = [
      {
        id: 'n101',
        type: 'noteTxt',
        isPinned: false,
        isEdit: false,
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
        isPinned: false,
        isEdit: false,
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
        isPinned: false,
        isEdit: false,
        info: {
          label: 'Get my stuff together',
          todos: ['Driving liscence Coding power'],
        },
        style: {
          backgroundColor: 'yellow',
        },
      },
      {
        id: 'n104',
        type: 'noteVideo',
        isPinned: false,
        isEdit: false,
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

function update(updatedNote) {
  return storageService.put(NOTES_KEY, updatedNote)
}

function updateUnshift(updatedNote) {
  return storageService.putUnshift(NOTES_KEY, updatedNote)
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
