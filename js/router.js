import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookApp from './apps/books/pages/book-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import bookDetails from './apps/books/pages/book-details.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,

    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    },
    {
        path: '/keep',
        component: keepApp
    },

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})