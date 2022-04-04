import { v4 as uuid } from "uuid";

export const products = [
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806540/Ecom-products/punching-bag_flsk6t.jpg",
        imageAlt: "Punching bag",
        bestSeller: true,
        title: "Punching bag",
        description:
            "100 Kg classic punching bag, best suited for beginners as well as professionals!",
        rating: 4,
        price: 2000,
        percentDiscount: 20,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808043/Ecom-products/cricket-bat_v1eml9.jpg",
        imageAlt: "Cricket bat (season)",
        bestSeller: false,
        title: "Cricket bat",
        description:
            "Gray-Nicolls Nitro GN7, high quality English Willow Cricket Bat. Size SH, good for ages 16+",
        rating: 5,
        price: 20000,
        percentDiscount: 15,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806662/Ecom-products/cricket-ball_opu5az.jpg",
        imageAlt: "Leather cricket ball red",
        bestSeller: false,
        title: "Cricket leather ball(red)",
        description:
            "Kookaburra leather cricket ball (red), used in test cricket or club cricket. Ideal for school matches.",
        rating: 4,
        price: 600,
        percentDiscount: 20,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806662/Ecom-products/basketball_g1mfja.jpg",
        imageAlt: "Spalding basketball",
        bestSeller: true,
        title: "Basketball Spalding",
        description:
            "Spalding rubber basketball with a good grip, comes with an inflating pin. Suitable for cement courts as well.",
        rating: 5,
        price: 1200,
        percentDiscount: 10,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806663/Ecom-products/basketball-hoop_nqn2kn.jpg",
        imageAlt: "Basketball hoop",
        bestSeller: false,
        title: "Basketball hoop",
        description:
            "Standard basketball hoop, can be attached to a backboard in a court or even to a wall.",
        rating: 3,
        price: 1000,
        percentDiscount: 5,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806686/Ecom-products/football_tglyvh.jpg",
        imageAlt: "Football Puma",
        bestSeller: true,
        title: "Football Puma",
        description:
            "Puma classic football (soccer) ball, high quality. The Puma Accelerate makes you play and feel like a better player.",
        rating: 4,
        price: 4000,
        percentDiscount: 30,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806668/Ecom-products/football-cones_vt2mwm.jpg",
        imageAlt: "Football cones",
        bestSeller: false,
        title: "Football cones",
        description:
            "Football cones, sports equipment for football (soccer) training. Useful for basic drills, to develop better control of the ball.",
        rating: 2,
        price: 1600,
        percentDiscount: 10,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806691/Ecom-products/boxing-gloves_bgur0u.png",
        imageAlt: "Boxing gloves",
        bestSeller: false,
        title: "Boxing gloves",
        description:
            "Everlast amateur competition fight boxing gloves (red). High grade leather provides long-lasting durability and functionality.",
        rating: 4,
        price: 2200,
        percentDiscount: 15,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806670/Ecom-products/hockey-stick_v3b7vz.jpg",
        imageAlt: "Hockey stick",
        bestSeller: false,
        title: "Hockey stick",
        description:
            "Field hockey stick by Alfa, dual core performing technology and hybrid composite structure stick. Length 37 inches, comes with a stick bag.",
        rating: 3,
        price: 1350,
        percentDiscount: 30,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806672/Ecom-products/hockey-ball_nlvdeg.jpg",
        imageAlt: "Hockey ball",
        bestSeller: true,
        title: "Hockey ball",
        description:
            "An excellent quality dimpled ball molded in white color. Suitable for matches and training on all surfaces. Hockey game can be played with these balls, the dimple standard balls are ideal for league play.",
        rating: 5,
        price: 600,
        percentDiscount: 5,
    },
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806672/Ecom-products/javelin_aisnkq.jpg",
        imageAlt: "Javelin",
        bestSeller: false,
        title: "Javelin",
        description:
            "Nordic Competition Javelin, Comet Aluminium, 400gm. A soft shaft competition javelin designed in Sweden by Nordic Sport with a chromed steel tip.",
        rating: 5,
        price: 12000,
        percentDiscount: 20,
    },
    {
        _id: uuid(),
        categoryName: "apparel",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806683/Ecom-products/sweatshirt_euknao.jpg",
        imageAlt: "Asics sweatshirt",
        bestSeller: false,
        title: "Asics sweatshirt",
        description:
            "Regular Fit, Hand wash cold, 70% polyester, 26% viscose, 4% elastane, with Anti-Bacterial finish.",
        rating: 4,
        price: 5500,
        percentDiscount: 10,
    },
    {
        _id: uuid(),
        categoryName: "apparel",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806682/Ecom-products/sweatpants_zae1zb.jpg",
        imageAlt: "Adidas sweatpants",
        bestSeller: true,
        title: "Sweatpants Adidas",
        description:
            "Stretchable poly-cotton blend french terry fabric. Elasticated waist with adjustable drawstrings. Dual side slip-in pockets. 52% Cotton, 48% Polyester, recycled.",
        rating: 5,
        price: 3000,
        percentDiscount: 15,
    },
    {
        _id: uuid(),
        categoryName: "shoes",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806680/Ecom-products/stud-shoes_ekch4u.jpg",
        imageAlt: "Stud shoes (football)",
        bestSeller: false,
        title: "Stud (football) shoes",
        description:
            "Soft, thin synthetic leather upper for a great fit and ball feel, has textured pattern, printed detail, Nike Swoosh on the forefoot and backfoot, a reinforced heel collar. Agility traction pattern for faster release and maximum responsiveness",
        rating: 5,
        price: 10000,
        percentDiscount: 30,
    },
    {
        _id: uuid(),
        categoryName: "shoes",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806678/Ecom-products/running-shoes_qlzkil.jpg",
        imageAlt: "Sports (running) shoes",
        bestSeller: false,
        title: "Running (sports) shoes",
        description:
            "These shoes offer comfort and support for city running. They have a knit upper with a sock-like fit. The wide platform provides stability for quick changes in direction, and boost HD provides responsive cushioning with a firm feel.",
        rating: 4,
        price: 15000,
        percentDiscount: 25,
    },
    {
        _id: uuid(),
        categoryName: "shoes",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806681/Ecom-products/spikes-shoes_f4vvqd.jpg",
        imageAlt: "Spike shoes",
        bestSeller: true,
        title: "Spike shoes",
        description:
            "White in colour, these Domain 2 Ns cricket shoes by Nike will ensure better stability and flexibility for your feet. Featuring a synthetic upper with contrast coloured detailing, these lace-ups have a cushioned footbed for impact resistance.",
        rating: 4,
        price: 8000,
        percentDiscount: 20,
    },
    {
        _id: uuid(),
        categoryName: "jerseys",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806675/Ecom-products/cricket-jersey_j2pgjo.jpg",
        imageAlt: "Cricket India jersey",
        bestSeller: false,
        title: "Indian cricket jersey",
        description:
            "Original jersey of the Indian cricket team. Typography printed, Regular length, Polo collar, Short, regular sleeves, Knitted polyester fabric, machine wash.",
        rating: 4,
        price: 2000,
        percentDiscount: 10,
    },
    {
        _id: uuid(),
        categoryName: "jerseys",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806686/Ecom-products/football-jersey_xxox3e.jpg",
        imageAlt: "Football Argentina jersey",
        bestSeller: false,
        title: "Argentina football jersey",
        description:
            "Jersey of the Argentinian football team. Dry fit Jersey - Quick Dry, Ideal for Football. White - sky blue vertical stripe jersey for Argentina Soccer Fans. Flat Seams Reduce Chaffing, Serious Moisture absorption and micro pores for .",
        rating: 3,
        price: 4000,
        percentDiscount: 22,
    },
    {
        _id: uuid(),
        categoryName: "jerseys",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806664/Ecom-products/basketball-jersey_pcha07.jpg",
        imageAlt: "Basketball jersey",
        bestSeller: true,
        title: "Basketball jersey",
        description:
            "NBA Los Angeles Lakers Kobe Bryant Swingman Jersey, White.  Officially licensed NBA product. 100% Polyester - Machine Washable Dazzle and mesh jersey.",
        rating: 5,
        price: 5000,
        percentDiscount: 5,
    },
    {
        _id: uuid(),
        categoryName: "accessories",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648811626/Ecom-products/ball-keychain_qfxkss.jpg",
        imageAlt: "3D sports keychain",
        bestSeller: false,
        title: "3D sports keychain",
        description:
            "3D Sports, Basketball, Volleyball, Football, key chains. Can be given as a gift to sports' lovers.",
        rating: 2,
        price: 400,
        percentDiscount: 10,
    },
    {
        _id: uuid(),
        categoryName: "accessories",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806686/Ecom-products/tennis-keychain_f4jgjj.jpg",
        imageAlt: "Tennis keychain",
        bestSeller: true,
        title: "Tennis keychain",
        description:
            "This unique metal tennis racket and ball keyring is durable, lightweight and practical. Made from environmentally friendly materials, it has a good 3 dimensional effect and is light and easy to carry.",
        rating: 4,
        price: 600,
        percentDiscount: 20,
    },
    {
        _id: uuid(),
        categoryName: "trophies-medals",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806689/Ecom-products/trophy_i8w0nc.jpg",
        imageAlt: "Sports trophy",
        bestSeller: false,
        title: "Sports trophy",
        description:
            "These medium-sized and lightweight awards come packed in a sturdy box to facilitate storage. They have the perfect size and weight to be carried around by people of any age.",
        rating: 3,
        price: 1000,
        percentDiscount: 15,
    },
    {
        _id: uuid(),
        categoryName: "trophies-medals",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806691/Ecom-products/medals_dchhvo.jpg",
        imageAlt: "Sports medals",
        bestSeller: true,
        title: "Sports medals",
        description:
            "Metal award medals with neck ribbon - Gold, Silver, Bronze. Made of premium quality metal, zinc alloy, our medals can be preserved for a long time.",
        rating: 4,
        price: 600,
        percentDiscount: 5,
    },
];
