import animeCatImage from "@/assets/tshirt-anime-cat.jpg";
import retroGamingImage from "@/assets/tshirt-retro-gaming.jpg";
import superheroImage from "@/assets/tshirt-superhero.jpg";
import cartoonImage from "@/assets/tshirt-cartoon.jpg";
import spaceImage from "@/assets/tshirt-space.jpg";
import memeImage from "@/assets/tshirt-meme.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Gato Kawaii Anime",
    price: 24.99,
    image: animeCatImage,
    category: "Anime",
    colors: ["#FFFFFF", "#000000", "#FFB6C1", "#87CEEB", "#DDA0DD"],
    description: "Adorable diseño de gato anime estilo kawaii"
  },
  {
    id: "2",
    name: "Retro Gaming 8-Bit",
    price: 26.99,
    image: retroGamingImage,
    category: "Gaming",
    colors: ["#FFFFFF", "#000000", "#FF6B6B", "#4ECDC4", "#45B7D1"],
    description: "Diseño nostálgico de videojuegos retro"
  },
  {
    id: "3",
    name: "Superhéroe Comic",
    price: 28.99,
    image: superheroImage,
    category: "Comics",
    colors: ["#FFFFFF", "#000000", "#FF4757", "#2F3542", "#FFA502"],
    description: "Estilo cómic de superhéroes clásicos"
  },
  {
    id: "4",
    name: "Cartoon Adventure",
    price: 22.99,
    image: cartoonImage,
    category: "Cartoon",
    colors: ["#FFFFFF", "#000000", "#00D2D3", "#FF9FF3", "#54A0FF"],
    description: "Divertidos personajes de dibujos animados"
  },
  {
    id: "5",
    name: "Space Explorer",
    price: 27.99,
    image: spaceImage,
    category: "Ciencia",
    colors: ["#FFFFFF", "#000000", "#5F27CD", "#00D2D3", "#FF9F43"],
    description: "Exploración espacial y ciencia ficción"
  },
  {
    id: "6",
    name: "Meme Legend",
    price: 23.99,
    image: memeImage,
    category: "Meme",
    colors: ["#FFFFFF", "#000000", "#2ED573", "#FF6348", "#A4B0BE"],
    description: "Los mejores memes de internet"
  }
];