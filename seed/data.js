import db from "../db/connection.js";
import Dish from "../models/dish.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "paul123",
    email: "paul@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "alejandro456",
    email: "alejandro@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "rachel789",
    email: "rachel@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
  });
  await user3.save();

  // products data that we want inserted into database
  const dishes = [
    {
      name: "Escar-A-Go-Go",
      restaurant: "Bistronomic",
      location: "Chicago, IL, USA",
      img_url:
        "http://irepo.primecp.com/2016/03/266260/recipe-11539_Large400_ID-1494628.jpg?v=1494628",
      restaurant_url: "https://www.bistronomic.net/",
      description:
        "A classic dish with garlic butter, mushroom dexelle, and parsley breadcrumbs. Served only when in season.",
      price: "25",
      keywords: ["dinner", "french"],
    },
    {
      name: "Sikandari Raan (Marinated Whole Leg of Spring Lamb)",
      restaurant: "Bukhara",
      location: "New Dehli, India",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh01JQeOW9A8KSc7jIZOA3S2zTbdGw5UAREKtcwHDt7G9MmZIFYyJ4k0qy5Rd4S7LbBFw&usqp=CAU",
      restaurant_url: "https://www.bukharabistro.com/",
      description:
        "Whole leg of spring lamb, braised in a marinade of malt vinegar, cinnamon and black cumin braised in the marinade, skewered and then finished in the tandoor. To say the least, one of the greatest mouth-watering dishes you will ever have.",
      price: "80",
      keywords: ["dinner", "indian"],
    },
    {
      name: "Banchan Medley",
      restaurant: "Jiwhaja",
      location: "Seoul, Korea",
      img_url: "https://i.imgur.com/GvwfAPa.jpg",
      restaurant_url: "http://www.jihwajafood.co.kr/eng/",
      description:
        "Jihwaja as the best dining place in Seoul is willing to be a space where you can taste and feel the Korean food's essence and best food culture that royal food has.",
      price: "30",
      keywords: ["lunch", "dinner", "korean"],
    },
    {
      name: "Detroit Deep Dish Pizza",
      restaurant: "Buddy's Pizza",
      location: "Detroit, MI, USA",
      img_url: "https://i.imgur.com/EtqmA2U.jpg",
      restaurant_url: "https://www.buddyspizza.com/",
      description:
        "In 1946, a new style of pizza was born at Buddy's and it was different. Our one of a kind square pies are built by hand with the best ingredients.",
      price: "25",
      keywords: ["lunch", "dinner", "american"],
    },
    {
      name: "30 Day Dry Aged Ribeye",
      restaurant: "Bavette's Bar and Beouf",
      location: "Chicago, IL, USA",
      img_url: "https://unsplash.com/photos/NYBnDWeOX2c",
      restaurant_url: "https://bavettessteakhouse.com/chicago/",
      description:
        "A stylish departure from a traditional steakhouse, Bavette's embraces French flair without the formality, blending fine dining with unabashed fun.",
      price: "75",
      keywords: ["dinner", "american", "fine-dining"],
    },
    {
      name: "Ceviche",
      restaurant: "Huascaran",
      location: "Miraflores, Lima, Peru",
      img_url:
        "https://www.laylita.com/recipes/wp-content/uploads/2013/07/2-Peruvian-ceviche.jpg",
      restaurant_url: "https://www.huascaranperuviancuisine.com/",
      description:
        'This recipe for Peruvian fish ceviche is preparared with fresh fish, limes, onions, spicy peppers, and fresh cilantro. Ceviche, also known as cebiche or seviche, usually consists of seafood that is marinated with lime juice, the acidity of the lime juice actually "cooks" the seafood. Not all types of ceviches are made with seafood and not all seafood ceviches are made with raw seafood.',
      price: "60",
      keywords: ["seafood", "lunch", "peruvian"],
    },
    {
      name: "Lomo Saltado",
      restaurant: "Inti",
      location: "San Isidro, Lima, Peru",
      img_url:
        "https://www.journeymachupicchu.com/ezoimgfmt/769684.smushcdn.com/1585087/wp-content/uploads/2020/05/Peruvian-Lomo-Saltado-Recipe.jpg?lossy=1&strip=1&webp=1&ezimgfmt=ng:webp/ngcb1",
      restaurant_url: "http://xoma.pe/",
      description:
        "Lomo saltado is a popular, traditional Peruvian dish, a stir fry that typically combines marinated strips of sirloin (or other beef steak) with onions, tomatoes, french fries, and other ingredients; and is typically served with rice. The dish originated as part of the chifa tradition, the Chinese cuisine of Peru, though its popularity has made it part of the mainstream culture.",
      price: "70",
      keywords: ["beef", "lunch", "peruvian", "dinner"],
    },
  ];

  // insert dishes into database
  await Dish.insertMany(dishes);
  console.log("Created users & dishes!");

  // close database connection. done.
  db.close();
};

insertData();
