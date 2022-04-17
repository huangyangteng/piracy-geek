export default [
    {
        path: '/test-link',
        component: () => import('./test-other-link')
    },
    {
        path: '/test',
        component: () => import('./Test.vue')
    }
]
