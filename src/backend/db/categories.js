import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    // {
    //   _id: uuid(),
    //   categoryName: "fiction",
    //   description:
    //     "literature in the form of prose, especially novels, that describes imaginary events and people",
    // },
    // {
    //   _id: uuid(),
    //   categoryName: "non-fiction",
    //   description:
    //     "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    // },
    // {
    //   _id: uuid(),
    //   categoryName: "horror",
    //   description:
    //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    // },
    {
        _id: uuid(),
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808768/Ecom-home-categories/equipment-banner_vj0wwq.jpg",
        imageAlt: "Sports equipment banner",
        text: "Sports equipment",
        subText: "Upto 30% off",
        categoryName: "equipment",
    },
    {
        _id: uuid(),
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808769/Ecom-home-categories/apparel-banner_xx6pat.jpg",
        imageAlt: "Sports apparel banner",
        text: "Sports apparel",
        subText: "Upto 40% off",
        categoryName: "apparel",
    },
    {
        _id: uuid(),
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808764/Ecom-home-categories/shoes-banner_pqvhrl.jpg",
        imageAlt: "Sports shoes banner",
        text: "Sports shoes",
        subText: "Upto 25% off",
        categoryName: "shoes",
    },
    {
        _id: uuid(),
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808774/Ecom-home-categories/jerseys-banner_sve0ue.jpg",
        imageAlt: "Original team jerseys banner",
        text: "Original team jerseys",
        subText: "Upto 20% off",
        categoryName: "jerseys",
    },
    {
        _id: uuid(),
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808772/Ecom-home-categories/accessories-banner_e2m846.jpg",
        imageAlt: "Sports accessories banner",
        text: "Sports accessories",
        subText: "Upto 50% off",
        categoryName: "accessories",
    },
    {
        _id: uuid(),
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808772/Ecom-home-categories/trophies-banner_ftpvph.jpg",
        imageAlt: "Sports trophies banner",
        text: "Trophies and medals",
        subText: "Upto 30% off",
        categoryName: "trophies-medals",
    },
];
