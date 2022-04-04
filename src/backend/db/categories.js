import { v4 as uuid } from "uuid";

export const categories = [
    {
        _id: uuid(),
        categoryName: "equipment",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808768/Ecom-home-categories/equipment-banner_vj0wwq.jpg",
        imageAlt: "Sports equipment banner",
        text: "Sports equipment",
        subText: "Upto 30% off",
    },
    {
        _id: uuid(),
        categoryName: "apparel",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808769/Ecom-home-categories/apparel-banner_xx6pat.jpg",
        imageAlt: "Sports apparel banner",
        text: "Sports apparel",
        subText: "Upto 40% off",
    },
    {
        _id: uuid(),
        categoryName: "shoes",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808764/Ecom-home-categories/shoes-banner_pqvhrl.jpg",
        imageAlt: "Sports shoes banner",
        text: "Sports shoes",
        subText: "Upto 25% off",
    },
    {
        _id: uuid(),
        categoryName: "jerseys",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808774/Ecom-home-categories/jerseys-banner_sve0ue.jpg",
        imageAlt: "Original team jerseys banner",
        text: "Original team jerseys",
        subText: "Upto 20% off",
    },
    {
        _id: uuid(),
        categoryName: "accessories",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808772/Ecom-home-categories/accessories-banner_e2m846.jpg",
        imageAlt: "Sports accessories banner",
        text: "Sports accessories",
        subText: "Upto 50% off",
    },
    {
        _id: uuid(),
        categoryName: "trophies-medals",
        imageSrc:
            "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808772/Ecom-home-categories/trophies-banner_ftpvph.jpg",
        imageAlt: "Sports trophies banner",
        text: "Trophies and medals",
        subText: "Upto 30% off",
    },
];
