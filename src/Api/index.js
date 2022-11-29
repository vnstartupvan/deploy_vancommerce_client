import { fetchCollectionData } from "./collection-management.api";
import { fetchProductData } from "./product-management.api";
import { fetchSearchData } from "./search-management.api";
import { fetchUserLogin } from "./user-management.api";
import { fetchAllCollections, fetchAllProducts, fetchAllUsers, patchProduct, deleteProduct, updatedProduct, patchCollection, deleteUser, updateUser } from "./dashboard-management";

const api = {
    dashboard: {
        products: fetchAllProducts,
        collections: fetchAllCollections,
        createCollection: patchCollection,
        users: fetchAllUsers,
        deleteUser: deleteUser,
        updateUser: updateUser,
        createProduct: patchProduct,
        deleteProduct: deleteProduct,
        updatedProduct: updatedProduct,
    } ,
    collection: fetchCollectionData,
    search: fetchSearchData,
    product: fetchProductData,
    user: fetchUserLogin,
}

export default api;