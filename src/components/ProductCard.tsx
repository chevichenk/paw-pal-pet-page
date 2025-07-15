import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} en color ${selectedColor} se ha añadido al carrito.`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Eliminado de favoritos" : "Añadido a favoritos",
      description: `${product.name} ${isLiked ? "eliminado de" : "añadido a"} tu lista de favoritos.`,
    });
  };

  return (
    <div className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={`bg-background/80 backdrop-blur-sm hover:bg-background/90 ${
              isLiked ? "text-red-500" : "text-muted-foreground"
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
          </div>
        </div>

        {/* Selector de colores */}
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Color:</p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-primary scale-110 shadow-md"
                    : "border-border hover:border-primary/50"
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};