import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    name: "Gramado",
    description: "Destino romântico com arquitetura encantadora e gastronomia excepcional",
    image: "/gramado-charming-town-with-flowers-and-architectur.jpg",
    rating: 4.8,
  },
  {
    name: "Canela",
    description: "Cenários encantadores, parques naturais e o charme da Serra Gaúcha",
    image: "/canela.jpg",
    rating: 4.7,
  },
  {
    name: "Bento Gonçalves",
    description: "Capital do vinho com roteiros enoturísticos e paisagens de vinhedos",
    image: "/bento.jpg",
    rating: 4.8,
  },
]

const whatsappNumber = "5551981699277"

const getWhatsappLink = (destination: string) => {
  const message = `Olá! Tenho interesse em pacotes para ${destination}. Poderia me enviar mais detalhes?`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

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
            Destinos <span className="text-primary">Exclusivos</span>
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
                <div className="absolute inset-0 bg-primary/60" />

                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-2 rounded-full bg-secondary/90 backdrop-blur-sm shadow-lg">
                  <Star size={16} className="fill-accent text-accent" />
                  <span className="font-bold text-sm">{destination.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary/95">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={24} className="text-accent flex-shrink-0" />
                      <h3 className="font-serif text-3xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                  <p className="text-secondary/85 text-base leading-relaxed mb-3">{destination.description}</p>
                </div>
              </div>

              <CardContent className="p-6 bg-gradient-to-br from-card to-muted/25">
                <Button
                  asChild
                  className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-semibold group/btn shadow-md shadow-primary/10"
                  size="lg"
                >
                  <a
                    href={getWhatsappLink(destination.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                  >
                    Ver Pacotes
                    <MapPin className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-6 text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent"
          >
            <a href="#contato">Ver Todos os Destinos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
