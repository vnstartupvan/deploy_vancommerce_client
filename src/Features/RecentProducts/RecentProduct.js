import utils from "../../Utils/utils";

const recentProduct = {
    saveProductList: function (productList) {
        utils.updateLocalData('recentlyViewList', productList);
    },
    updateProductList: function (product) {
        let productList = this.getProductList() || [];
        console.log(productList);
        let foundProduct = productList.findIndex(item => item._id == product._id && item.title == product.title);
        console.log(foundProduct);
        if (foundProduct === -1) productList.push(product);

        return productList;
    },
    getProductList: function () {
        return utils.getLocalData('recentlyViewList');
    },
    run: function (product) {
        const recentlyviewList = this.updateProductList(product);
        this.saveProductList(recentlyviewList);
    },
}

export default recentProduct;
