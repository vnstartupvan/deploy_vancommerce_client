const utils = {
    updateLocalData: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalData: (key) => {
        const data = localStorage.getItem(key);
        if (!data) return '';
        return JSON.parse(data);
    },
    getProductUrl: (title) => {
        let slug = '';
        let titleArr = title.split(' ');
        titleArr.forEach((word, index) => {
            let lastWord = titleArr.length - 1;
            if (index === lastWord) {
                slug += word;
            } else {
                slug += word + '-';
            }
        })
        return slug.toLocaleLowerCase();
    },
    prepareOption: (products) => {
        if (!products) return [];
        let productTypeArr = [];
        let collectionArr = [];
        let priceMin = 0;
        let PriceMax = 0;

        products.forEach((product, index) => {
            let price = product.price_min;
            if (price > PriceMax) {
                PriceMax = price;
            }
            if (price < priceMin) {
                priceMin = price;
            }
            product.collections.forEach(option => {
                if (!collectionArr.includes(option)) {
                    collectionArr.push(option);
                };
            });
            product.product_type.forEach(option => {
                if (!productTypeArr.includes(option)) {
                    productTypeArr.push(option);
                };
            });
        })
        return {
            collection: collectionArr,
            type: productTypeArr,
            price: {
                price_min: priceMin,
                price_max: PriceMax
            }
        }
    },
    getCurrentPage: () => {
        let pathname = window.location.pathname.split('/');
        let page = pathname[1];

        switch (page) {
            case 'collections':
                return 'collection'
            case 'search':
                return 'search'
            default:
                return '';
        }
    },
    getClientDevice: () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    },
    getCartQty: (cartList) => {
        const totalProducts = cartList.reduce((sum, product) => {
            return sum += Number(product.qty);
        }, 0);
        return totalProducts;
    },
    getCartTotalPrice: (cartList) => {
        const totalPrice = cartList.reduce((sum, product) => {
            let productPrice = product.price_min * product.qty;
            return sum += productPrice;
        }, 0)
        return totalPrice;
    },
    refreshPage: () => {
        window.location.reload(false);
    },
    scrollTop: () => {
        window.scrollTo({top:0});
    }
}


export default utils;