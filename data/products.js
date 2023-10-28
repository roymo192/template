export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
      if (product.id === productId) {
          matchingProduct = product;
      }
  });

  return matchingProduct;
}




export const products = [

  {
    id:"a01",
    image: "image/img/cola.jpeg",
    name: "Coca-Cola",
    rating: {
      stars: 5,
      count:1000
    },
    priceCents: 8000,
  },
  {
    id:"a02",
    image: "image/img/sony.jpeg",
    name: "Sony TV",
    rating: {
      stars: 4,
      count:1000
    },
    priceCents: 800000,
  },
  {
    id:"a03",
    image: "image/img/spice.jpeg",
    name: "Lee Kam Kee",
    rating: {
      stars: 5,
      count:1000
    },
    priceCents: 7500,
  },
  {
    id:"a04",
    image: "image/img/rice.jpeg",
    name: "Golden Elephant Brand - Premium Jasmine Rice 8KG",
    rating: {
      stars: 5,
      count:1000
    },
    priceCents: 9900,
  },
  {
    id:"a05",
    image: "image/img/lego.jpeg",
    name: "LEGO - LEGO® Icons 10312 Jazz Club",
    rating: {
      stars: 5,
      count:1000
    },
    priceCents: 170000,
  },
];

