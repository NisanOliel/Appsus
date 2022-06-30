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
        to: "abab@appsus.com",
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
        to: loggedinUser.email,
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
        to: loggedinUser.email,
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
        to: loggedinUser.email,
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
        to: loggedinUser.email,
    },
    {
        id: utilService.makeId(),
        sender: 'AliExpress ',
        senderEmail: 'transaction@notice.aliexpress.com',
        subject: 'Your delivery has been confirmed',
        body: 'Hi Nisan Oliel Order 3016292804823202 has been confirmed as received. You can view the order details below. See order details If you still havent received the item or youve received it but are unhappy, you still have 15 days to submit a dispute request.',
        isRead: false,
        isStar: false,
        sentAt: Date.now(),
        to: "nisan@gmai.com"
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

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        utilService.saveToStorage(EMAILS_KEY, gEmails);
    }
    return emails;
}











