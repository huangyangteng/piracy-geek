export default [
    {
        path: '/',
        redirect: '/read'
    },
    {
        path: '/read',
        redirect: '/read/chongxueqianduan/sj1T7fCTN4kPErNu'
    },
    {
        path: '/read/:column/:article',
        name: 'read',
        component: () => import('./Home.vue')
    }
]
