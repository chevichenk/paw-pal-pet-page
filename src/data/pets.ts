import goldenRetriever from "@/assets/golden-retriever.jpg";
import orangeTabbyCat from "@/assets/orange-tabby-cat.jpg";
import beagle from "@/assets/beagle.jpg";
import greyCat from "@/assets/grey-cat.jpg";
import blackLab from "@/assets/black-lab.jpg";
import calicoCat from "@/assets/calico-cat.jpg";

export interface Pet {
  id: number;
  name: string;
  age: string;
  breed: string;
  personality: string[];
  image: string;
  gender: string;
  size: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Luna",
    age: "2 años",
    breed: "Golden Retriever",
    personality: ["Cariñosa", "Juguetona", "Leal"],
    image: goldenRetriever,
    gender: "Hembra",
    size: "Grande"
  },
  {
    id: 2,
    name: "Simba",
    age: "3 años",
    breed: "Gato Doméstico",
    personality: ["Independiente", "Curioso", "Tranquilo"],
    image: orangeTabbyCat,
    gender: "Macho",
    size: "Mediano"
  },
  {
    id: 3,
    name: "Max",
    age: "4 años",
    breed: "Beagle",
    personality: ["Energético", "Amigable", "Inteligente"],
    image: beagle,
    gender: "Macho",
    size: "Mediano"
  },
  {
    id: 4,
    name: "Mía",
    age: "1 año",
    breed: "Gato Doméstico",
    personality: ["Dulce", "Juguetona", "Sociable"],
    image: greyCat,
    gender: "Hembra",
    size: "Pequeño"
  },
  {
    id: 5,
    name: "Rocky",
    age: "6 meses",
    breed: "Labrador Mix",
    personality: ["Aventurero", "Cariñoso", "Activo"],
    image: blackLab,
    gender: "Macho",
    size: "Grande"
  },
  {
    id: 6,
    name: "Coco",
    age: "5 años",
    breed: "Gato Calicó",
    personality: ["Elegante", "Calmada", "Observadora"],
    image: calicoCat,
    gender: "Hembra",
    size: "Mediano"
  }
];