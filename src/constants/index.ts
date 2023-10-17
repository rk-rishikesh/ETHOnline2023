import type {
  INavLink,
  IFooterSection,
  IProduct,
  IReview,
  IService,
  IShoe,
  ISocialMedia,
  IStatistic,
} from "../types";

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

import First from "../assets/images/First.png";
import Second from "../assets/images/Second.png";
import Third from "../assets/images/Third.png";
import Bee from "../assets/images/bee.png";

export const navLinks: INavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes: IShoe[] = [
  {
    thumbnail: Bee,
    bigShoe: Bee,
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/previews/028/587/293/original/turtle-3d-rendering-icon-illustration-free-png.png",
    bigShoe: "https://static.vecteezy.com/system/resources/previews/028/587/293/original/turtle-3d-rendering-icon-illustration-free-png.png",
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/028/801/128/small_2x/leopard-3d-rendering-icon-illustration-png.png",
    bigShoe: "https://static.vecteezy.com/system/resources/thumbnails/028/801/128/small_2x/leopard-3d-rendering-icon-illustration-png.png",
  },
];

export const statistics: IStatistic[] = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products: IProduct[] = [
  {
    imgUrl: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: 4.5,
  },
  {
    imgUrl: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: 4.2,
  },
  {
    imgUrl: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: 4.6,
  },
  {
    imgUrl: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: 4.7,
  },
];

export const services: IService[] = [
  {
    imgUrl: First,
    label: "Thums Up Coin - ICC Men's CWC 1983",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgUrl: Second,
    label: "Thums Up Coin - ICC Men's CWC 2011",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgUrl: Third,
    label: "Thums Up Coin - ICC Men's CWC 2023",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews: IReview[] = [
  {
    imgUrl: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgUrl: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks: IFooterSection[] = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia: ISocialMedia[] = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
