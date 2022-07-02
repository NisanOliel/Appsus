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
          title: 'Txt',
          txt: 'Fullstack Me Baby!',
        },
        style: {
          backgroundColor: 'rgb(226, 152, 152);',
        },
      },
      {
        id: 'n102',
        type: 'noteImg',
        isPinned: false,
        isEdit: false,
        info: {
          title: 'Img',
          url: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80',
        },
        style: {
          backgroundColor: 'rgb(225, 122, 122)',
        },
      },
      {
        id: 'n103',
        type: 'noteTodos',
        isPinned: false,
        isEdit: false,
        info: {
          title: 'Get my stuff together',
          todos: [{ txt: 'Driving liscence Coding power', isDone: false }],
        },
        style: {
          backgroundColor: 'lightblue',
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
          backgroundColor: 'rgb(253, 255, 128)',
        },
      },
      {
        id: 'n105',
        type: 'noteImg',
        isPinned: false,
        isEdit: false,
        info: {
          title: 'Img',
          url: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        },
        style: {
          backgroundColor: 'rgb(225, 122, 122)',
        },
      },
      {
        id: 'n106',
        type: 'noteTodos',
        isPinned: false,
        isEdit: false,
        info: {
          title: 'Sunday',
          todos: [
            { txt: 'Learn Vue', isDone: false },
            { txt: 'Go to gym', isDone: false },
            { txt: 'Go to supermarket', isDone: false },
          ],
        },
        style: {
          backgroundColor: 'rgb(199, 202, 209)',
        },
      },
      {
        id: 'n107',
        type: 'noteTxt',
        isPinned: false,
        isEdit: false,
        info: {
          title: 'Thursday',
          txt: 'Inbar wedding',
        },
        style: {
          backgroundColor: 'rgb(96, 230, 154)',
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
