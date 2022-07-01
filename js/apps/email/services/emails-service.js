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
    {
        id: utilService.makeId(),
        sender: loggedinUser.fullname,
        senderEmail: loggedinUser.email,
        subject: 'אתגר הכניסה קודינג אקדמי',
        body: 'האתגר הועלה לחשבון גיטהאב',
        isRead: false,
        isStar: false,
        sentAt: Date.now(),
        to: "codingacademy@misterbit.co.il"
    },
    {
        id: utilService.makeId(),
        sender: 'Yonatan',
        senderEmail: 'Yonatan123@gmail.com',
        subject: 'Hey where are yo',
        body: 'come here! ',
        isRead: false,
        isStar: true,
        sentAt: 1612508560601,
        to: loggedinUser.email,
    },
    {
        id: utilService.makeId(),
        sender: 'Invisalign ',
        senderEmail: 'Invisalign@news.invisalign.eu',
        subject: 'View your Invisalign treatment plan',
        body: ' Congratulations on taking a step towards your new smile.Your doctor has shared your Invisalign ClinCheck treatment plan with you. Please visit My Invisalign and register an account to view your plan. Make sure to have your Invisalign ID (a 7 or 8-digit number) from your doctor handy.',
        isRead: false,
        isStar: false,
        sentAt: 1612538550601,
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
        sender: 'Cardo Systems',
        senderEmail: 'marketinginfo@cardosystems.com',
        subject: 'Please confirm that youre still happy to hear from us',
        body: 'To keep you updated with the latest firmware upgrades, new product features, special offerings, and other Cardo product and marketing information, we would like to reconfirm your consent to receive such communications from us via email.Click "OPT-IN NOW" below to continue receiving emails from Cardo Systems.A page will open in your browser confirming your choice and no further action will be require',
        isRead: false,
        isStar: false,
        sentAt: 1612508210601,
        to: loggedinUser.email,
    },
    {
        id: utilService.makeId(),
        sender: 'Israel Post ',
        senderEmail: 'NoReply@postil.com',
        subject: 'הודעה על דבר דואר שמספרו RS02781066Y',
        body: 'דבר דואר RS0278106076Y ג 179שנשלח מחו"ל ממתין במכולת אלדד ואירית (בית עסק) הבוטנים 73 פרדס חנה-כרכור.לצפייה בשעות הפעילות, זימון תור, אפשרויות משלוח עד אליך, הוראות צו יבוא אישי ועוד.',
        isRead: false,
        isStar: false,
        sentAt: 1612508551201,
        to: loggedinUser.email,
    },
    {
        id: utilService.makeId(),
        sender: 'AliExpress ',
        senderEmail: 'transaction@notice.aliexpress.com',
        subject: 'Leave a review for ORICO PHB-25 2.5" 2.5 Inch P',
        body: '  How was your shopping experience?Hi Nisan Oliel,Your order for "ORICO PHB-25 2.5" 2.5 Inch Protection Bag for External Portable HDD Box Case-Blue/Black/Pink" (order ID',
        isRead: false,
        isStar: true,
        sentAt: 1612512550601,
        to: loggedinUser.email,
    },
    {
        id: utilService.makeId(),
        sender: 'Nisan oliel',
        senderEmail: 'Nisan@gmail.com',
        subject: 'sprint!!',
        body: ' sprint sprint sprint!!!',
        isRead: false,
        isStar: false,
        sentAt: 1612508150601,
        to: loggedinUser.email,
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











