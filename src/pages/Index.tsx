import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { ShoppingBag, Shirt, Filter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shirt className="h-8 w-8 text-warm-orange" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-warm-orange to-primary bg-clip-text text-transparent">
              GeekWear
            </h1>
            <Shirt className="h-8 w-8 text-warm-orange" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Camisetas divertidas para geeks, otakus y amantes de la cultura pop. ¡Expresa tu personalidad!
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-xl p-8 shadow-lg border border-border/50">
          <ShoppingBag className="h-12 w-12 text-warm-orange mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            ¿Listo para comprar?
          </h2>
          <p className="text-muted-foreground mb-6">
            Descubre nuestra colección completa de camisetas geek y encuentra la tuya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-warm-orange hover:bg-warm-orange/90 text-white font-medium rounded-lg transition-colors">
              Ver catálogo completo
            </button>
            <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors">
              Ofertas especiales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
