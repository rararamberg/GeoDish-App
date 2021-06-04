# GeoDish-App

[Netlify](https://geodish.netlify.app/)

## Project Overview

An app featuring restaurants' famous dishes from around the globe. Viewers can explore dishes by cuisine regions and types of meals (breakfast, lunch, dinner, etc). Restaurant owners will be able to create a user login and have access to add and update their featured dishes on the app. As a PMVP, Consumers and visitors to the site can also login in to add dishes to the cart or add dishes to their destination list (wishlist feature).

![Whimsical Component Hierarchy](https://i.imgur.com/K7twiha.png)
[Whimsical](https://whimsical.com/project-3-component-hierarchy-Qvc5mbw8iKjeV13Bk8zHPN) - password: project3

![Desktop Dishes](https://i.imgur.com/BxKFwam.png)
![Desktop Dish Detail ](https://i.imgur.com/mWIkZaR.png)
![Desktop Sign Up ](https://i.imgur.com/x6JrYvJ.png)
![Desktop Login](https://i.imgur.com/5fcViI1.png)
![Desktop Add Dish ](https://i.imgur.com/Bbwu8ls.png)
![Mobile Dishes](https://i.imgur.com/OsrU1nI.png)
![Mobile Dish Detail](https://i.imgur.com/kKV2tGO.png)
![Mobile Sign Up](https://i.imgur.com/4WrfdAU.png)
![Mobile Login ](https://i.imgur.com/XT6yWHz.png)
![Mobile Add Dishes](https://i.imgur.com/VFKTQMa.png)
[FIGMA](https://www.figma.com/file/0tUVEUaPWNqgIZdrEpejoG/Team-Project-3?node-id=0%3A1)

##Schema

```
const User = new Schema (
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
    name: { type: String, required: true },
    restaurant: { type: String, required: true },
    img_url: { type: String, required: true },
    restaurant_url: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    keywords: { type: Array, required: true },
  },
  { timestamps: true }
)


PMVP - roles for consumer and restaraunt users
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
- Testing
