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
      img_url:
        "https://media.lasvegasmagazine.com/media/img/photos/2020/10/12/Bavettes_Steakhouse_and_Bar_cr_Peter_Harasty_LD_t1024.jpg?b3f067808e872500b33dd7ef4ee517933144b05a",
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
    {
      name: "Fish and Chips",
      restaurant: "The Cod's Scallops",
      location: "Nottingham, London, UK",
      img_url: "https://i.imgur.com/dVfUSAD.jpg",
      restaurant_url: "https://www.codsscallops.com/",
      description:
        "Fish is deep fried in a non-hydrogenated vegetable oil, BBQ spiced or baked with garlic, lemon & herbs. Served with chips",
      price: "12",
      keywords: ["lunch", "english"],
    },
    {
      name: "House Special Ramen",
      restaurant: "Fu-Unji",
      location: "Shibuya, Tokyo, JP",
      img_url: "https://i.imgur.com/ku8XTKl.jpg",
      restaurant_url: "http://www.fu-unji.com/index.html",
      description:
        "The signature shouyu ramen is made from three types of soup stock – pork broth, wa-dashi (Japanese stock) and hamaguri clam dashi – and topped with truffle sauce as well as porcini oil and flakes for that bold umami punch. Enjoy with nori, tender pork, poached egg, topped with scallions.",
      price: "16",
      keywords: ["lunch", "dinner", "japanese"],
    },
    {
      name: "Samosa",
      restaurant: "Sindhu Sweets",
      location: "Khar, Mumbai, IN",
      img_url: "https://i.imgur.com/xxPaiPP.jpg",
      restaurant_url: "https://www.zomato.com/mumbai/sindhu-sweets-khar",
      description:
        "Fried, flakey pastry with a savory filling.  Spiced potatoes, onions, peas, and lentils. Served with mint and tamarind chutney.",
      price: "5",
      keywords: ["lunch", "indian"],
    },
    {
      name: "Soupe à l'oignon",
      restaurant: "Le Gabriel",
      location: "Paris, France",
      img_url:
        "https://www.expatica.com/app/uploads/sites/5/2020/03/French-onion-soup.jpg",
      restaurant_url:
        "https://www.lareserve-paris.com/en/restaurants-bars/restaurant-le-gabriel/",
      description:
        "French onion soup is nowadays regarded as one of the most prized dishes of French cuisine. The broth is simple, made merely with caramelized onions and meat stock. However, the soup is distinguished by croûtes–pieces of crispy baked bread that are placed on top of the soup and are then generously covered with cheese.",
      price: "40",
      keywords: ["beef", "cheese", "lunch", "french", "dinner", "soup"],
    },
    {
      name: "Seco de Cordero",
      restaurant: "El Bodegon",
      location: "Miraflores, Lima, Peru",
      img_url:
        "https://www.peruforless.com/blog/wp-content/uploads/2013/11/seco-de-carne.jpg",
      restaurant_url: "https://www.elbodegon.com.pe/",
      description:
        "Seco de Cordero is a delicious Peruvian lamb stew. Seasoned with aji peppers, cumin, and lots of cilantro, the lamb is braised in beer until its tender and flavorful. Yellow potatoes cook at the same time and soak up all the great flavor.",
      price: "60",
      keywords: ["beef", "lunch", "peruvian", "dinner"],
    },
    {
      name: "Anticuchos",
      restaurant: "Tanta",
      location: "San Isidro, Lima Peru",
      img_url:
        "https://www.peruforless.com/blog/wp-content/uploads/2013/11/anticuchos-1.jpg",
      restaurant_url: "http://tantaperu.com/",
      description:
        "The most traditional Peruvian anticuchos are made of beef heart, but marinated chicken (anticuchos de pollo) or steak anticuchos are also popular.",
      price: "40",
      keywords: ["beef", "lunch", "peruvian", "dinner"],
    },
    {
      name: "Hakata Ramen",
      restaurant: "Yataiya Hakatagekijo",
      location: "Bunyo, Tokyo, Japan",
      img_url:
        "https://cdn.tasteatlas.com/images/dishes/3d163d1d3eb042e3ba04f51022b09f2a.jpg?w=905&h=510",
      restaurant_url: "https://www.ikkadining.co.jp/",
      description:
        "Hailing from Fukuoka, hakata is one of the most famous ramen styles in Japan. The base of the ramen is tonkotsu, the creamy pork bone broth which gives the dish its incredibly rich and layered taste. It is often only seasoned with shio (salt), and occasionally with shoyu (soy sauce) and miso (fermented soybean) paste.",
      price: "30",
      keywords: ["soup", "lunch", "japanese", "dinner"],
    },
    {
      name: "Shio Ramen",
      restaurant: "Douzo",
      location: ", Tokyo, Japan",
      img_url:
        "https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2017/09/Ramen_0485a.jpg",
      restaurant_url: "https://douzosushi.com/",
      description:
        "Shio ramen is one of the four main flavor-based ramen categories. Like other ramen varieties, it combines three crucial elements: flavorful broth, noodles, and various toppings.",
      price: "30",
      keywords: ["soup", "lunch", "japanese", "dinner"],
    },
    {
      name: "Cannoli",
      restaurant: "D'Amato's Bakery",
      location: "Chicago, IL, USA",
      img_url:
        "https://damatoschicago.com/wp-content/uploads/2017/10/damatos-bakery-twocanolis.jpg",
      restaurant_url: "https://damatoschicago.com/",
      description:
        "Selling up to 1,000 of these a week, there is a reason we are one of the best in the U.S. A true staple of Sicilian cuisine, cannolis are freshly made shells of fried pastry dough and filled with sweet, creamy ricotta.",
      price: "3.50",
      keywords: ["italian", "dessert"],
    },
    {
      name: "Spaghetti",
      restaurant: "Aromi",
      location: "Prague, Czech Republic",
      img_url: "https://aromi.lacollezione.cz/files/aromijarnimenu43.jpg",
      restaurant_url: "https://aromi.lacollezione.cz/en",
      description:
        "A classic dish featuring our love for seafood, this spaghetti comes with clams and lightly smoked tomatoes.",
      price: "33.50",
      keywords: ["italian", "dinner"],
    },
    {
      name: "Bouillabaisse",
      restaurant: "Le Petit Nice",
      location: "Marseille, Provence, France",
      img_url:
        "https://cdn.tasteatlas.com/Images/DishRestaurants/4063ea8eeb6d4cffbd2e7b08f7366cc3.jpg?mw=1300",
      restaurant_url: "http://www.passedat.fr/en/#!le-petit-nice",
      description:
        "a traditional Provençal fish stew originating from the port city of Marseille. Rich and spicy with key flavors of floral saffron, fennel, and orange zest ",
      price: "12",
      keywords: ["french", "lunch"],
    },
    {
      name: "Full English Breakfast",
      restaurant: "The Churchill Tavern",
      location: "New York, NY, USA",
      img_url:
        "https://images.unsplash.com/photo-1563636247809-c76f873625ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1320&q=80",
      restaurant_url: "https://www.thechurchillny.com/",
      description:
        "the heartiest of breakfasts with bacon, sausage, baked beans, eggs, mushrooms, grilled tomatoes, and toast. ",
      price: "14",
      keywords: ["english", "breakfast"],
    },
    {
      name: "Crumpets",
      restaurant: "Holy Crumpets & Coffee",
      location: "Melbourne, Victoria, Australia",
      img_url:
        "https://culinaryginger.com/wp-content/uploads/English-crumpets-23-720x720.jpg",
      restaurant_url: "https://holycrumpets.com.au/",
      description:
        "Not quite a cake. Not quite a pancake, either. Not a slice of toast, and not an English muffin. It's sort of what you'd get if all those delightful breakfast foods birthed a hybrid: a beautiful, thick round that holds as much love in its tiny holes as it does melted butter. Made from as little as four ingredients, crumpets may just be the ultimate comfort food ",
      price: "5",
      keywords: ["english", "breakfast"],
    },
    {
      name: "Signature Nova",
      restaurant: "Ess-a-Bagel",
      location: "New York, NY, USA",
      img_url:
        "https://images.unsplash.com/photo-1492016775777-ed98c058f826?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
      restaurant_url: "https://www.ess-a-bagel.com/",
      description:
        "slices of nova on a bagel with scallion cream cheese, freshly-sliced tomato, lettuce, onions + capers",
      price: "15",
      keywords: ["american", "breakfast"],
    },
    {
      name: "Pain au Chocolat",
      restaurant: "Du Pain et Des Idées",
      location: "Paris, France",
      img_url:
        "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      restaurant_url: "http://www.dupainetdesidees.com/",
      description:
        "one of the best known French pastries, try a viennoiserie sweet roll consisting of  one or two pieces of dark chocolate in the center",
      price: "3",
      keywords: ["french", "breakfast"],
    },
    {
      name: "Mame daifuku",
      restaurant: "Demachi Futaba",
      location: "Kyoto, Japan",
      img_url:
        "https://cdn.tasteatlas.com/images/dishes/e94ffe0aee024aa58350eeb2cb1676b6.jpg?mw=1300",
      restaurant_url:
        "https://www.google.com/maps/place/Demachi+Futaba/@35.0301043,135.7674296,17z/data=!3m2!4b1!5s0x600108686df30c0d:0x7be636d4489e8ab7!4m5!3m4!1s0x6001086871ffa623:0x5b5854ee646ac567!8m2!3d35.0300999!4d135.7696183",
      description:
        "a wagashi consisting of sweet, pink-colored rice cake with a red bean paste center and wrapped in a pickled cherry blossom leaf.",
      price: "3",
      keywords: ["japanese", "dessert"],
    },
    {
      name: "Brownies",
      restaurant: "Baked",
      location: "New York, NY, USA",
      img_url:
        "https://images.unsplash.com/photo-1610611424854-5e07032143d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      restaurant_url: "https://bakednyc.com/",
      description:
        "Deliciously chewy, dense and fudgey with a rich chocolate flavor, the beloved brownies are one of the most popular American desserts.",
      price: "3",
      keywords: ["american", "dessert", "chocolate"],
    },
    {
      name: "Macarons",
      restaurant: "Ladurée",
      location: "Paris, France",
      img_url:
        "https://cdn.tasteatlas.com/images/dishes/bff77c0b5fe34398a03b9a436815fad2.jpg?mw=1300",
      restaurant_url: "https://www.laduree.fr/en/laduree-paris-royale.html",
      description:
        "a small, round, sweet meringue-based cookie sandwiches with filling in the middle are light and crunchy on the outside and chewy in the middle",
      price: "2",
      keywords: ["french", "dessert", "chocolate"],
    },
  ];

  // insert dishes into database
  await Dish.insertMany(dishes);
  console.log("Created users & dishes!");

  // close database connection. done.
  db.close();
};

insertData();
