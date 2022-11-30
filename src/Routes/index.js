import Templates from "../Templates";

const { HomeTemplate,
    CollectionTemplate,
    CollectionDetailTemplate,
    ProductTemplate,
    LoginTemplate,
    RegisterTemplate,
    SearchTemplate,
    CartTemplate,
    DashboardStore,
    DashboardReview,
    DashboardUser,
    DashboardTheme,
    DashboardStoreProduct,
    DashboardStoreCollection, } = Templates

const publicRoutes = [
    { path: '/', component: HomeTemplate },
    { path: '/collections/all', component: CollectionTemplate },
    { path: '/collections/:collectionId', component: CollectionDetailTemplate },
    { path: '/product/:productId', component: ProductTemplate },
    { path: '/login', component: LoginTemplate },
    { path: '/register', component: RegisterTemplate },
    { path: '/search', component: SearchTemplate },
    { path: '/cart', component: CartTemplate },
];

const privateRoutes = [
    { path: '/admin/store', component: DashboardStore },
    { path: '/admin/store/create-product', component: DashboardStoreProduct },
    { path: '/admin/store/create-collection', component: DashboardStoreCollection },
    { path: '/admin/user', component: DashboardUser },
    { path: '/admin/theme', component: DashboardTheme },
    { path: '/admin/review', component: DashboardReview },
];

export { publicRoutes, privateRoutes };