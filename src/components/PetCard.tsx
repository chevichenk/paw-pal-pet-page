import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, User } from "lucide-react";

interface Pet {
  id: number;
  name: string;
  age: string;
  breed: string;
  personality: string[];
  image: string;
  gender: string;
  size: string;
}

interface PetCardProps {
  pet: Pet;
}

export const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border/50">
      <div className="relative">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-primary">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground">{pet.name}</h3>
            <Badge variant="outline" className="text-xs">
              {pet.size}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{pet.age}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{pet.gender}</span>
            </div>
          </div>
          
          <p className="text-sm font-medium text-foreground">{pet.breed}</p>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Personalidad:</h4>
          <div className="flex flex-wrap gap-2">
            {pet.personality.map((trait, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs bg-soft-peach text-foreground"
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white font-medium">
          Conocer a {pet.name}
        </Button>
      </div>
    </Card>
  );
};