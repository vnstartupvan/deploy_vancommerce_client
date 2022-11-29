import React from 'react';
import '../ProductSlider/ProductSlider.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useRef } from 'react';
import { isMobile, isDesktop, isTablet } from "react-device-detect";
import { useEffect } from 'react';



function ProductSlider() {
    const dummyData = [
        {
            "_id": "636c52eeb423693bdef33983",
            "title": "Simple Shirt",
            "price_min": 100,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.721Z",
            "updatedAt": "2022-11-10T01:25:02.721Z",
            "slug": "simple-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33985",
            "title": "Flip",
            "price_min": 300,
            "price_max": 0,
            "product_type": [
                "shoes"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4582/1920x2880kSY14QP9MPvj337tR7WSzwnB4ioBB4BLDv0oIM9y.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival",
                "foot wear"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.721Z",
            "updatedAt": "2022-11-10T01:25:02.721Z",
            "slug": "flip",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33984",
            "title": "Casual Tshirt",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.721Z",
            "updatedAt": "2022-11-10T01:25:02.721Z",
            "slug": "casual-tshirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33988",
            "title": "Grey Polo Shirt",
            "price_min": 100,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4907/1920x2880T9nnhvKR1ihkZuFsBNHe2QuESIhSHxOAUlQHuKvL.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "polo"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "grey-polo-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33989",
            "title": "Brown Polo Shirt",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4900/1920x2880jbWfy9co3QBo7ME9Ai8x50DjBQkUbGDrv6W0wWrX.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "polo"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "brown-polo-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3398a",
            "title": "White Polo Shirt",
            "price_min": 300,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4901/1920x28809ZskHoKpzOAGWk77HQIMaHkZ4s4STQQmrnbfb23S.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "polo"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "white-polo-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3398b",
            "title": "Slim Short",
            "price_min": 900,
            "price_max": 0,
            "product_type": [
                "trouser"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4890/1920x28800h6cLUNzhwf2bcYSW6x5y1zCDyiRTELhwwCVB8FI.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "jean",
                "short"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "slim-short",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3398c",
            "title": "Pink Polo Shirt",
            "price_min": 600,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4892/1920x2880ogp2YTsT2hqKDclxauwtYresPK2sPa2AIjqCpwXr.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "polo"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "pink-polo-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3398d",
            "title": "Formal Jacket",
            "price_min": 1100,
            "price_max": 0,
            "product_type": [
                "jacket"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4885/1920x2880vgKkuyaxYDOfySNSjyjqbeAvj8hNfbQD07x6pbN1.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "formal"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "formal-jacket",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3398e",
            "title": "Relaxed Fit Shirt",
            "price_min": 220,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4923/1920x2880789uzD6CxCs2uXlwP5YFw4eeNsaSyS8GfEFSuSSu.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "relaxed-fit-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3398f",
            "title": "Skinny Trouser",
            "price_min": 1300,
            "price_max": 0,
            "product_type": [
                "trouser"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4750/1920x2880jTjEvgGbrrgWp8HQjiDbN5UIcsWfrYiD9FI8zbGN.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival",
                "jean",
                "skinny"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "skinny-trouser",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33990",
            "title": "Boomber Jacket",
            "price_min": 4100,
            "price_max": 0,
            "product_type": [
                "jacket"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4889/1920x2880hoC1RIep6kjWoABtQw98yiYEnpxjdDfsMU7rnjjB.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "boomber-jacket",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33991",
            "title": "Premium Shirt",
            "price_min": 240,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4886/1920x2880ImrkENPt8IOfrfDmrAbdbJnuX7HhL9KCrO7ZYqdg.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "premium-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33992",
            "title": "Formal Trouser",
            "price_min": 500,
            "price_max": 0,
            "product_type": [
                "trouser"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4877/1920x2880mjcHpcpsSiZYulYq0p28SbdTUkngC3LhAaYCeSMH.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "formal-trouser",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33993",
            "title": "Casual shirt",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "casual-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33994",
            "title": "Relaxed Fit Cotton Tee",
            "price_min": 24.99,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/d3/9b/d39b6f1edeee91d53ac892d094c6b2bcef50c0e5.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival",
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "relaxed-fit-cotton-tee",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33995",
            "title": "Cotton Twill Bucket Hat",
            "price_min": 400,
            "price_max": 0,
            "product_type": [
                "hat"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/07/db/07db119cf3dbb031b914b02fc714bfa3931fdbce.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "cotton-twill-bucket-hat",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33996",
            "title": "Braided Belt",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "belt"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/6f/03/6f03aa85686e3cd755c289bbbb05be12a7e1f241.jpg],origin[dam],category[men_accessories],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "braided-belt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33997",
            "title": "Cargo Joggers",
            "price_min": 59.99,
            "price_max": 0,
            "product_type": [
                "trouser"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/54/8b/548bb7f5eb093f4154b47c11ad0780cff4c8324e.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "cargo-joggers",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33999",
            "title": "Slim Fit Jacket",
            "price_min": 300,
            "price_max": 0,
            "product_type": [
                "jacket"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/a2/a2/a2a223a3548fcdfbaf919de02a2d74371f4cc323.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "slim-fit-jacket",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3399a",
            "title": "Trouser",
            "price_min": 400,
            "price_max": 0,
            "product_type": [
                "trouser"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4754/1920x2880rzz9CYmhLLZSantC2X7gT72SavByczCIheppoDXw.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "trouser",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef33987",
            "title": "Jacket",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "jacket"
            ],
            "video": "",
            "image": "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4816/1920x2880x3DKGc37dmYdZzEcAB2kujrIYY2XGUrQYrfJZsQR.jpeg",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.722Z",
            "updatedAt": "2022-11-10T01:25:02.722Z",
            "slug": "jacket",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3399e",
            "title": "Relaxed Fit Linen Blend Shirt",
            "price_min": 340,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/1a/03/1a032c13b1efc3f451bac6657f020f612fd18fba.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival",
                "relaxed fit"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "relaxed-fit-linen-blend-shirt",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef339a0",
            "title": "7-pack Sneaker Socks",
            "price_min": 20,
            "price_max": 0,
            "product_type": [
                "shoes",
                "sock"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/e0/9b/e09bde62753ae8f8985987dbd398d70c2d438a0b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "simple",
                "foot wear"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "7-pack-sneaker-socks",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3399f",
            "title": "Loafers",
            "price_min": 400,
            "price_max": 0,
            "product_type": [
                "shoes"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/33/42/33423494dab6623592dc7287c3897a69646079d0.jpg],origin[dam],category[men_shoes_dressed],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "new arrival",
                "foot wear"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "loafers",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3399c",
            "title": "Hybrid Regular Tapered Joggers",
            "price_min": 100,
            "price_max": 0,
            "product_type": [
                "trouser"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/2f/5f/2f5f72a86fbaa5b72d0b8e5b8e0b8247cfc30222.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "hybrid-regular-tapered-joggers",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3399d",
            "title": "10-pack Regular Fit Round Neck Tees",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/70/0b/700b9a97be923b887f03541517f279f08fbe9154.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "simple",
                "relaxed fit"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "10-pack-regular-fit-round-neck-tees",
            "__v": 0
        },
        {
            "_id": "636c52eeb423693bdef3399b",
            "title": "Relaxed Fit Tee",
            "price_min": 20,
            "price_max": 0,
            "product_type": [
                "shirt"
            ],
            "video": "",
            "image": "https://lp2.hm.com/hmgoepprod?set=source[/00/5b/005b2a5841ef8917df2f8052679cd723c0b0877f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
            "images": [],
            "variants": [],
            "collections": [
                "simple"
            ],
            "tags": [],
            "createdAt": "2022-11-10T01:25:02.723Z",
            "updatedAt": "2022-11-10T01:25:02.723Z",
            "slug": "relaxed-fit-tee",
            "__v": 0
        },
        {
            "_id": "63725c864cac56d72adbb5fc",
            "title": "Performance Polo",
            "price_min": 200,
            "price_max": 0,
            "product_type": [
                "shirt",
                "polo"
            ],
            "video": "",
            "image": "https://cdn.shopify.com/s/files/1/0077/0432/products/094_CHU_0927_LS_7390.webp?v=1666732212",
            "images": [
                "https://cdn.shopify.com/s/files/1/0077/0432/products/094_CHU_0927_LS_7390.webp?v=1666732212",
                "https://cdn.shopify.com/s/files/1/0077/0432/products/093_CHU_0927_LS_7331.webp?v=1666732213"
            ],
            "variants": [
                {
                    "title": "Performance Polo (Abs Tract)",
                    "price_min": 200,
                    "product_type": [
                        "shirt",
                        "polo"
                    ],
                    "collections": [
                        "casual"
                    ],
                    "tag": [],
                    "images": [
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/094_CHU_0927_LS_7390.webp?v=1666732212",
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/093_CHU_0927_LS_7331.webp?v=1666732213"
                    ],
                    "option": []
                },
                {
                    "title": "Performance Polo (Beachcomber)",
                    "price_min": 200,
                    "product_type": [
                        "shirt",
                        "polo"
                    ],
                    "collections": [
                        "casual"
                    ],
                    "tag": [],
                    "images": [
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/117_CHU_0927_LS_8130.webp?v=1666386551",
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/144_CHU_0927_LS_8512.webp?v=1666386552"
                    ],
                    "option": []
                },
                {
                    "title": "PERFORMANCE POLO (GREAT GET AWAY)",
                    "price_min": 200,
                    "product_type": [
                        "shirt",
                        "polo"
                    ],
                    "collections": [
                        "casual"
                    ],
                    "tag": [],
                    "images": [
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/582223-07_GreatGetAway_5595.webp?v=1665609290",
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/175_CHU_0927_LS_9608_26f26592-5db6-4c97-a02f-e6d41333a546.webp?v=1666300152"
                    ],
                    "option": []
                },
                {
                    "title": "PERFORMANCE POLO (GRAND MIRAGE)",
                    "price_min": 200,
                    "product_type": [
                        "shirt",
                        "polo"
                    ],
                    "collections": [
                        "casual"
                    ],
                    "tag": [],
                    "images": [
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/608223-04_582223-06_778222-03_OF_6001.webp?v=1663621796",
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/608223-04_582223-06_778222-03_OF_5961_6e1475c7-f47d-4db0-a3c7-74905f3516ba.webp?v=1663621797"
                    ],
                    "option": []
                },
                {
                    "title": "PERFORMANCE POLO (CARNELIAN CHAMELEON)",
                    "price_min": 200,
                    "product_type": [
                        "shirt",
                        "polo"
                    ],
                    "collections": [
                        "casual"
                    ],
                    "tag": [],
                    "images": [
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/608223-06_582223-03_778222-05_OF_5723.webp?v=1663621791",
                        "https://cdn.shopify.com/s/files/1/0077/0432/products/608223-06_582223-03_778222-05_OF_5814.webp?v=1663621792"
                    ],
                    "option": []
                }
            ],
            "collections": [
                "casual"
            ],
            "tags": [],
            "createdAt": "2022-11-14T15:19:34.020Z",
            "updatedAt": "2022-11-14T15:19:34.020Z",
            "slug": "performance-polo",
            "__v": 0
        },
        {
            "_id": "638121953378ad58135fc876",
            "title": "THE 'MERICAS 5.5\" (100% COTTON)",
            "price_min": 45,
            "price_max": 50,
            "product_type": [
                "short"
            ],
            "video": "https://cdn.shopify.com/s/files/1/0077/0432/products/MERICAS_2.0_5.5_LS_001201-12_2982.webp?v=1665004245",
            "image": "https://cdn.shopify.com/s/files/1/0077/0432/products/MERICAS_2.0_5.5_SD_001201-12_3001.webp?v=1665004243",
            "images": [
                "https://cdn.shopify.com/s/files/1/0077/0432/products/MERICAS_2.0_5.5_SD_001201-12_3001.webp?v=1665004243",
                "https://cdn.shopify.com/s/files/1/0077/0432/products/MERICAS_2.0_5.5_LS_001201-12_2982.webp?v=1665004245"
            ],
            "variants": [],
            "collections": [
                "Casual"
            ],
            "tags": [],
            "createdAt": "2022-11-25T20:12:05.424Z",
            "updatedAt": "2022-11-25T20:12:05.424Z",
            "slug": "the-mericas-5-5-100-cotton-8I-gOts8I",
            "__v": 0
        }
    ]
    const slideRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentIndex = useRef(0);
    currentIndex.current = currentSlide;
    let slideWidth = slideRef ? slideRef.current?.clientWidth : 0;

    const slidePosition = ({
        transform: `translateX(${-currentIndex.current * slideWidth}px)`,
    })
    const bindEvent = (slideEvent) => {
        console.log(slideRef.current.clientWidth);
        const minSlide = currentSlide === 0;
        const maxSlide = currentSlide === dummyData.length - 4;
        if (slideEvent === 'prev' && !minSlide) {
            setCurrentSlide(currentSlide - 1);
        } else if (slideEvent === 'next' && !maxSlide) {
            setCurrentSlide(currentSlide + 1);
        }
    }
    const renderProducts = (products) => {
        return products.map((product, index) => {
            return <div ref={slideRef} key={index} className="product-slide">
                <div className="product-slide-image">
                    <img src={product.image} alt="" />
                </div>
                <div className="product-slide-detail">
                    <h3 className="product-slide-title">{product.title}</h3>
                    <p className="product-slide-price">${product.price_min}</p>
                </div>
            </div>
        })
    }
    return (
        <div className='product-slider-wrapper'>
            <div className="product-slider-dots">
                <button onClick={() => bindEvent('prev')} className="prev-btn">
                    <LeftOutlined />
                </button>
                <button onClick={() => bindEvent('next')} className="next-btn">
                    <RightOutlined />
                </button>
            </div>
            <div style={slidePosition} className="product-slider">
                {renderProducts(dummyData)}
            </div>
        </div>
    )
}

export default ProductSlider