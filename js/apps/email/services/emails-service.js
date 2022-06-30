import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gEmails = [
    {
        id: utilService.makeId(),
        sender: 'Yolia',
        senderEmail: 'Yolia@gmail.com',
        subject: ' Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        isStar: false,
        sentAt: 1650505550201,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        sender: 'Amit sharfi',
        senderEmail: 'Amitsharfi@gmail.com',
        subject: 'New commit',
        body: 'whatch the new commit i done in github',
        isRead: false,
        isStar: false,
        sentAt: 1600505550201,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        sender: 'GitGuardian ',
        senderEmail: 'GitGuardian@gmail.com',
        subject: 'Google API Key exposed on GitHub',
        body: 'GitGuardian has detected the following Google API Key exposed within your GitHub account',
        isRead: true,
        isStar: true,
        sentAt: 1601505550201,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        sender: 'Avocode',
        senderEmail: 'Avocode@gmail.com',
        subject: 'Your free trial is over',
        body: ' The free trial for Nisan team has ended. Please log in and purchase a subscription within 14 days to keep working on your design projects.',
        isRead: false,
        isStar: true,
        sentAt: 1612508550601,
        to: 'momo@momo.com'
    },
    {
        id: utilService.makeId(),
        sender: 'Font Awesome',
        senderEmail: 'FontAwesome@gmail.com',
        subject: 'Reset Your Font Awesome Password',
        body: 'It looks like someone submitted a request to reset your Font Awesome password. If it wasnt you theres nothing to do nor worry about. You can keep on keeping on.',
        isRead: false,
        isStar: false,
        sentAt: Date.now(),
        to: 'momo@momo.com'
    },


]

const EMAILS_KEY = 'EmailsDB';
_createEmails();

export const emailService = {
    query,
    remove,
    get,
    emailStar,
    readMail,
    save,
    // addReview,
    // removeReview,
    // getBooksList,
    // getNextbookId,


};

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
}

function query() {
    return storageService.query(EMAILS_KEY);
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function emailStar(email) {
    email.isStar = !email.isStar;
    return storageService.put(EMAILS_KEY, email);
}
function readMail(email) {
    email.isRead = !email.isRead;
    return storageService.put(EMAILS_KEY, email);
}


function save(email) {
    if (email.id) return storageService.put(EMAILS_KEY, email)
    else return storageService.post(EMAILS_KEY, email)
}
// function addReview(bookId, review) {
//     return storageService.get(EMAILS_KEY, bookId).then(book => {
//         if (!book.reviews || !book.reviews) book.reviews = []
//         book.reviews.push(review)
//         save(book)
//         return book
//     })
// }

// function removeReview(bookId, reviewId) {
//     return storageService.get(EMAILS_KEY, bookId).then(book => {
//         book.reviews.splice(reviewId, 1)
//         if (book.reviews.length === 0) book.reviews = null
//         save(book)
//     })
// }



function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        utilService.saveToStorage(EMAILS_KEY, gEmails);
    }
    return emails;
}

// function getNextbookId(emailId) {
//     return storageService.query(EMAILS_KEY)
//         .then(emails => {
//             const idx = emails.findIndex(book => book.id === emailId)
//             return (idx < emails.length - 1) ? emails[idx + 1].id : emails[0].id
//         })
// }


// function getBooksList(value) {
//     const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`
//     return axios.get(url)
//         .then(res => res.data.items)
//         .then(items => {
//             let newItems = items.map(loadBookInfo)
//             return Promise.all(newItems)
//                 .then(item => {
//                     return item
//                 })
//         })
// }

// function loadBookInfo(book) {
//     const info = book.volumeInfo
//     return {
//         bookId: book.id,
//         title: info.title,
//         subtitle: info.subtitle,
//         authors: info.authors,
//         thumbnail: info.imageLinks?.thumbnail,
//         description: info.description,
//         publishedDate: info.publishedDate,
//         pageCount: info.pageCount,
//         language: info.language,
//         categories: info.categories,
//         listPrice: {
//             amount: utilService.getRandomInt(0, 200),
//         }

//     }

// }










