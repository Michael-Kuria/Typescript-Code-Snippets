// [
//   {
//     "id": 1,
//     "name": "Kayak",
//     "category": "Watersports",
//     "description": "A boat for one person",
//     "price": 275
//   },
//   {
//     "id": 2,
//     "name": "Lifejacket",
//     "category": "Watersports",
//     "description": "Protective andfashionable",
//     "price": 48.95
//   }
// ]

module.exports = function () {
  return {
    products: [
      {
        id: 1,
        name: "Kayak",
        category: "Watersports",
        description: "A boat for one person",
        price: 275,
      },
      {
        id: 2,
        name: "Lifejacket",
        category: "Watersports",
        description: "Protective andfashionable",
        price: 48.95,
      },
      {
        id: 3,
        name: "Soccer Ball",
        category: "Soccer",
        description: "FIFA-approved size andweight",
        price: 19.5,
      },
      {
        id: 4,
        name: "Corner Flags",
        category: "Soccer",
        description: "Give your playing field a professional touch",
        price: 34.95,
      },
      {
        id: 5,
        name: "Stadium",
        category: "Soccer",
        description: "Flat-packed 35,000-seatstadium",
        price: 79500,
      },
      {
        id: 6,
        name: "Thinking Cap",
        category: "Chess",
        description: "Improve brain efficiency by 75%",
        price: 16,
      },
      {
        id: 7,
        name: "Unsteady Chair",
        category: "Chess",
        description: "Secretly give your opponent a disadvantage",
        price: 29.95,
      },
      {
        id: 8,
        name: "Human Chess Board",
        category: "Chess",
        description: "A fun game for the family",
        price: 75,
      },
      {
        id: 9,
        name: "Bling Bling King",
        category: "Chess",
        description: "Gold-plated, diamondstudded King",
        price: 1200,
      },
    ],
    orders: [],
  };
};
