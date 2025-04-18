const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // 
const getNumberEntries = (object) => {
  let numberEntries = [];
  for (let key in object) {
    if (typeof object[key] === 'number') {
      numberEntries.push([key, object[key]]);
    }
  }
  return numberEntries;
};

// #2 // 
const addKeyValuePairs = (object, additions) => {
  Object.assign(object, Object.fromEntries(additions));
  return object;
};

// #3 //
const filterByPrice = (array, price) => {
  return array.filter(purchase => purchase.price > price);
};

// #4 //
const mapPurchases = (array) => {
  return array
  .map(purchase => 
       `${purchase .product.toUpperCase()} - Review: ${purchase.mostLikedReviews[purchase.mostLikedReviews.length -1].text}`);
};


// #5 //
const accumulateString = (array) => {
  return array.reduce((acc, purchase) => {
    let words = purchase.product.split(" ");
    acc += words[purchase.quantity - 1];
    return acc;
  },"");
};

// #6 //
const findProduct = (array, product) => {
  if (array.length === 0) {
      return [null, null];
  } 
  if (array[0].product === product) {
    return [array[0].product, array[0].category];
  } else {
    return findProduct(array.slice(1), product);
  }
};

// #7 //
const filterByReviewLength = (array) => {
  return array
    .filter(purchase => purchase.mostLikedReviews
            .some(review => review.text.length > 35));
};


