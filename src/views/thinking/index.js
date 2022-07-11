export default [
    {
        name: 'weekend-see',
        path: '/weekend-see',
        component: () => import('./weekend-watch')
    },
    {
        name: 'thinking',
        path: '/thinking',
        component: () => import('./thinking')
    },
    {
        name: 'star-bg',
        path: '/star-bg',
        component: () => import('./star-bg')
    },
    {
        name: 'pwa-icon',
        path: '/pwa-icon',
        component: () => import('./pwa-icon')
    },
    {
        name: 'translate',
        path: '/translate',
        component: () => import('./translate')
    }
]
