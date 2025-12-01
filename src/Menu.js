import biryani from "./assets/biryani.jpg";
import chaat from "./assets/chaat.jpg";
import kabab from "./assets/kabab.jpg";
import tikka from "./assets/tikka.jpg";

const MENU = [
  // =====================
  // APPETIZERS
  // =====================
  {
    id: 1,
    name: "Vegetable Pakoras",
    desc: "Assorted fresh vegetables batter dipped and deep fried.",
    price: 4.99,
    category: "Appetizers",
    image: chaat,
  },
  {
    id: 2,
    name: "Chicken Pakoras",
    desc: "Boneless chicken pieces deep fried with pakora batter, served with mint sauce.",
    price: 5.99,
    category: "Appetizers",
    image: tikka,
  },
  {
    id: 3,
    name: "Chili Chicken Wings",
    desc: "Chicken wings marinated with yogurt, garlic, and ginger paste – hot!",
    price: 9.5,
    category: "Appetizers",
    image: tikka,
  },
  {
    id: 4,
    name: "Vegetable Samosa",
    desc: "Two triangle shaped pastries stuffed with vegetables and potatoes.",
    price: 5.5,
    category: "Appetizers",
    image: chaat,
  },

  // =====================
  // SALADS & SOUP
  // =====================
  {
    id: 5,
    name: "Vegetable Salad",
    desc: "Traditional Indian salad with tomatoes, cucumber & bell peppers.",
    price: 7.5,
    category: "Salads",
    image: chaat,
  },
  {
    id: 6,
    name: "Lentil Soup",
    desc: "Traditional Indian soup of lentils and spices.",
    price: 5.95,
    category: "Soup",
    image: chaat,
  },

  // =====================
  // SIDE ORDERS
  // =====================
  {
    id: 7,
    name: "Raita",
    desc: "Yogurt dip with grated cucumbers and carrots.",
    price: 3.95,
    category: "Side Orders",
    image: chaat,
  },
  {
    id: 8,
    name: "Mango Chutney",
    desc: "Traditional Indian mango chutney.",
    price: 4.25,
    category: "Side Orders",
    image: chaat,
  },
  {
    id: 9,
    name: "Mixed Pickle",
    desc: "Fermented Indian mixed pickled vegetables.",
    price: 3.5,
    category: "Side Orders",
    image: chaat,
  },

  // =====================
  // CHICKEN SPECIALITIES (with Rice)
  // =====================
  {
    id: 10,
    name: "Chicken Tikka Masala",
    desc: "Boneless chicken marinated in ginger, yogurt & spices, cooked in tandoor & simmered in sauce.",
    price: 16.99,
    category: "Chicken Specialties",
    image: tikka,
  },
  {
    id: 11,
    name: "Butter Chicken",
    desc: "Boneless chicken in ginger, yogurt & spices, cooked in butter sauce.",
    price: 16.99,
    category: "Chicken Specialties",
    image: tikka,
  },
  {
    id: 12,
    name: "Creamy Coconut Chicken",
    desc: "Chicken cooked in creamy coconut sauce.",
    price: 16.99,
    category: "Chicken Specialties",
    image: tikka,
  },
  {
    id: 13,
    name: "Chicken Saag",
    desc: "Boneless chicken cooked with spinach and Indian spices.",
    price: 16.99,
    category: "Chicken Specialties",
    image: tikka,
  },
  {
    id: 14,
    name: "Chicken Jalfrazie",
    desc: "Chicken cooked with tomatoes, bell peppers and mushrooms.",
    price: 16.99,
    category: "Chicken Specialties",
    image: tikka,
  },

  // =====================
  // LAMB SPECIALITIES (with Rice)
  // =====================
  {
    id: 15,
    name: "Lamb Tikka Masala",
    desc: "Boneless lamb marinated in ginger, yogurt & spices, cooked in tandoor and sauce.",
    price: 17.99,
    category: "Lamb Specialties",
    image: kabab,
  },
  {
    id: 16,
    name: "Butter Lamb",
    desc: "Boneless lamb in butter sauce.",
    price: 17.99,
    category: "Lamb Specialties",
    image: kabab,
  },
  {
    id: 17,
    name: "Creamy Coconut Lamb",
    desc: "Lamb cooked in creamy coconut sauce.",
    price: 17.99,
    category: "Lamb Specialties",
    image: kabab,
  },
  {
    id: 18,
    name: "Lamb Saag",
    desc: "Boneless lamb cooked with spinach and Indian spices.",
    price: 17.99,
    category: "Lamb Specialties",
    image: kabab,
  },
  {
    id: 19,
    name: "Lamb Jalfrazie",
    desc: "Lamb with tomatoes, bell peppers and mushrooms.",
    price: 17.99,
    category: "Lamb Specialties",
    image: kabab,
  },

  // =====================
  // TANDOORI
  // =====================
  {
    id: 20,
    name: "Iranian Kebab",
    desc: "Chicken pieces marinated with yogurt and cashew nut paste.",
    price: 15.95,
    category: "Tandoori",
    image: kabab,
  },
  {
    id: 21,
    name: "Tandoori Mixed Combo",
    desc: "Combination of chicken, lamb, fish, rack of lamb and prawns.",
    price: 21.95,
    category: "Tandoori",
    image: kabab,
  },
  {
    id: 22,
    name: "Chicken Tandoori",
    desc: "Half spring chicken roasted in the tandoor.",
    price: 15.95,
    category: "Tandoori",
    image: tikka,
  },
  {
    id: 23,
    name: "Chicken Tikka",
    desc: "Boneless chicken pieces marinated in spicy yogurt sauce.",
    price: 15.95,
    category: "Tandoori",
    image: tikka,
  },
  {
    id: 24,
    name: "Lamb Boti Kebab",
    desc: "Tender lamb leg meat in spicy yogurt sauce.",
    price: 18.95,
    category: "Tandoori",
    image: kabab,
  },
  {
    id: 25,
    name: "Seekh Kebab",
    desc: "Minced lamb & chicken marinated in yogurt & spices.",
    price: 15.95,
    category: "Tandoori",
    image: kabab,
  },

  // =====================
  // SPECIALTY (Haleem & Nihari)
  // =====================
  {
    id: 26,
    name: "Chicken Haleem",
    desc: "Slow-cooked lentils, wheat & chicken with fried onions, lemon & ginger.",
    price: 16.99,
    category: "Specialty",
    image: biryani,
  },
  {
    id: 27,
    name: "Lamb Nihari",
    desc: "Slow-simmered lamb in signature nihari gravy.",
    price: 19.95,
    category: "Specialty",
    image: biryani,
  },
  {
    id: 28,
    name: "Beef Nihari",
    desc: "Slow-simmered beef in signature nihari gravy.",
    price: 17.95,
    category: "Specialty",
    image: biryani,
  },
];

export default MENU;