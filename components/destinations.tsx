import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    name: "Campos do Jordão",
    description: "A Suíça Brasileira oferece charme europeu e paisagens deslumbrantes",
    image: "/campos-do-jordao-mountain-town-european-architectu.jpg",
    rating: 4.9,
  },
  {
    name: "Gramado",
    description: "Destino romântico com arquitetura encantadora e gastronomia excepcional",
    image: "/gramado-charming-town-with-flowers-and-architectur.jpg",
    rating: 4.8,
  },
  {
    name: "Monte Verde",
    description: "Refúgio tranquilo nas montanhas com natureza preservada",
    image: "/monte-verde-peaceful-mountain-forest-retreat.jpg",
    rating: 4.9,
  },
  {
    name: "Visconde de Mauá",
    description: "Paraíso ecológico com cachoeiras, trilhas e muito verde",
    image: "/beautiful-waterfall-in-lush-green-mountains.jpg",
    rating: 4.7,
  },
]

export function Destinations() {
  return (
    <section
      id="destinos"
      className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary/80 mb-6">
            <MapPin size={16} />
            <span className="text-sm font-semibold uppercase tracking-wide">Destinos</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            Destinos <span className="text-gradient-purple-gold">Exclusivos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Explore os destinos mais encantadores das serras brasileiras com conforto e sofisticação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer bg-card/95"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />

                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-2 rounded-full bg-secondary/90 backdrop-blur-sm shadow-lg">
                  <Star size={16} className="fill-accent text-accent" />
                  <span className="font-bold text-sm">{destination.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fef6d8]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={24} className="text-accent flex-shrink-0" />
                      <h3 className="font-serif text-3xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                  <p className="text-[#f3d9a6] text-base leading-relaxed mb-3">{destination.description}</p>
                </div>
              </div>

              <CardContent className="p-6 bg-gradient-to-br from-card to-muted/25">
                <Button
                  className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-semibold group/btn shadow-md shadow-primary/10"
                  size="lg"
                >
                  Ver Pacotes
                  <MapPin className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent"
          >
            Ver Todos os Destinos
          </Button>
        </div>
      </div>
    </section>
  )
}
