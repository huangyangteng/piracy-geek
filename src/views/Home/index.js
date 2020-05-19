export default [
    {
        path: '/',
        redirect: '/read'
    },
    {
        path: '/read',
        component: () => import('./Home.vue')
    },
    {
        path: '/read/:column/:article',
        name: 'read',
        component: () => import('./Read.vue')
    }
]
