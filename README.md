# GeoDish-App

[Whimsical](https://whimsical.com/project-3-component-hierarchy-Qvc5mbw8iKjeV13Bk8zHPN) - password: project3
[FIGMA](https://www.figma.com/file/0tUVEUaPWNqgIZdrEpejoG/Team-Project-3?node-id=0%3A1)
[Netlify](Insert Link Here)

## Project Overview
An app featuring restaurants' famous dishes from around the globe. Viewers can explore dishes by cuisine regions and types of meals (breakfast,lunch, dinner, etc). Restaurant owners will be able to create a user login and have access to add and update their featured dishes on the app. As a PMVP, Consumers and visitors to the site can also login in to add dishes to cart or add dishes to their destination list (wishlist feature).

##Schema
```
const RestaurantUser = new Schema (
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)

const Dish = new Schema (
  {
    dishName: { type: String, required: true },
    restaurantName: { type: String, required: true },
    imgURL: { type: String, required: true },
    restaurantURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    keywords: { type: Array of Strings, required: true },
  },
  { timestamps: true }
)


PMVP - how differentiate users?
const ConsumerUser = new Schema (
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
```

##Team Expectations
[Google Doc](https://docs.google.com/document/d/1qymtHS9S8QNBLdO41zycTamGdUqOVIg1Odqpw_bscyk/edit)


## MVPs
- Full CRUD capacity backend (Express, Mongoose, MongoDb)
- Full CRUD capacity React frontend (detail screen, listing screen, create screen)
- Responsive Design (desktop, mobile)
- User Sign Up/In Authentication

## PMVPs
- Landing page with carosuel
- Shopping Cart and Wishlist Feature
- Hamburger menu
- User Interaction: Comments, Reviews
- Consumer User Account and Login
