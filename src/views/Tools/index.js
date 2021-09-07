export default [
    {
        path: '/taobao-data',
        name: 'taobao-data',
        component: () => import('./taobao-data.vue')
    },
    {
        path: '/upload',
        name: 'upload',
        component: () => import('./upload-img.vue')
    }
]
