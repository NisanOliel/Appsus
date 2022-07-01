import { emailService } from "../services/emails-service.js"
import emailList from "../cmps/emails-list.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailSide from "../cmps/email-side.cmp.js"
import { eventBus } from "../../../services/eventBus-service.js";


export default {
    template: `
    <email-filter v-if="emails" @filtered="setFilter" :emails="emails" @sort="sortEmails"></email-filter>
    <section class="email-app main-mail-layout">
            <div class="email-list-side">
                <email-side @setFolder="setFolder"  @newEmail="sendEmail" :unRead="unReadCount"></email-side>
            <email-list @readMail="readMail" @removeEmail="removeEmail" @starMail="starMail" :emails="emailsToShow"></email-list>
        </div>
    </section>
`,
    components: {
        emailList,
        emailFilter,
        emailSide,
    },
    data() {
        return {
            emails: null,
            filterBy: {
                title: '',
                folder: '',
                isRead: 'All'
            }
        };
    },
    created() {
        emailService.query().then(emails => this.emails = emails)
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy.title = filterBy.text;
            this.filterBy.isRead = filterBy.read;
        },
        setFolder(filterBy) {
            this.filterBy.folder = filterBy
        },

        starMail(email) {
            emailService.emailStar(email)
        },
        readMail(email) {
            emailService.readMail(email)
        },
        sendEmail(email) {
            emailService.save(email)
                .then(email => this.emails.push(email))
        },
        sortEmails(sortBy) {
            if (sortBy === 'date') {
                return this.emails.sort((email1, email2) => email2.sentAt - email1.sentAt);
            } else
                return this.emails.sort((email1, email2) => email1.sender.toLowerCase() > email2.sender.toLowerCase() ? 1 : -1);
        },
        removeEmail(email) {
            if (email.removedAt) {
                emailService.remove(email.id).then(() => {
                    emailService.query().then(emails => this.emails = emails)
                    eventBus.emit('show-msg', { txt: 'Email deleted permanently ', type: 'success' });
                })

            } else {
                email.removedAt = Date.now()
                emailService.save(email)
                eventBus.emit('show-msg', { txt: 'Email Draft', type: 'success' });
            }

        }
    },
    computed: {
        emailsToShow() {
            let filteredEmails = this.emails
            if (this.filterBy.isRead !== 'All')
                filteredEmails = this.emails.filter((email) => {
                    return email.isRead === this.filterBy.isRead
                });

            switch (this.filterBy.folder) {
                case "inbox":
                    filteredEmails = filteredEmails.filter((email) => email.to === "user@appsus.com" && !email.removedAt)
                    break;
                case "star":
                    filteredEmails = filteredEmails.filter((email) => email.isStar === true && !email.removedAt)
                    break;
                case "sent":
                    filteredEmails = filteredEmails.filter((email) => email.sender === "Mahatma Appsus" && !email.removedAt)
                    break;
                // case "draft":
                //     filteredEmails = filteredEmails.filter((email) => email.removedAt)
                //     break;
                case "trash":
                    filteredEmails = filteredEmails.filter((email) => email.removedAt)
                    break;
                default:
                    break;

            }
            const regex = new RegExp(this.filterBy.title, "i");
            if (filteredEmails) return filteredEmails.filter((email) => regex.test(email.subject));

        },
        unReadCount() {
            let count = 0;
            if (!this.emails) return;
            this.emails.filter((email) => {
                if (!email.isRead) {
                    count++;
                }
            });
            return count;
        },
    },
    unmounted() { },
};




