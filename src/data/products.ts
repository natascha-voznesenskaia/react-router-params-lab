export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

import laptopImg from "../assets/laptop.jpg";
import headphonesImg from "../assets/top-view.jpg";
import keyboardImg from "../assets/keyboard.jpg";
import mouseImg from "../assets/computer-mouse.jpg";

export const products: Product[] = [
  {
    id: 1,
    title: "Laptop",
    description: "Лёгкий ноутбук для работы и учёбы.",
    price: 1200,
    image: laptopImg,
  },
  {
    id: 2,
    title: "Headphones",
    description: "Беспроводные наушники с шумоподавлением.",
    price: 180,
    image: headphonesImg,
  },
  {
    id: 3,
    title: "Keyboard",
    description: "Механическая клавиатура для комфортного набора.",
    price: 90,
    image: keyboardImg,
  },
  {
    id: 4,
    title: "Mouse",
    description: "Удобная мышь для игр и работы.",
    price: 45,
    image: mouseImg,
  },
];
