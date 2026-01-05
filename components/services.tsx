import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Plane, Hotel, MapIcon, Utensils, Camera, Shield, Sparkles } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Transporte Premium",
    description: "Passagens aéreas e transfers exclusivos com todo conforto",
    color: "from-purple-500/10 to-violet-500/10",
  },
  {
    icon: Hotel,
    title: "Hospedagem Selecionada",
    description: "Hotéis e pousadas boutique cuidadosamente escolhidos",
    color: "from-amber-500/10 to-yellow-500/10",
  },
  {
    icon: MapIcon,
    title: "Roteiros Personalizados",
    description: "Itinerários sob medida para cada perfil de viajante",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Utensils,
    title: "Experiências Gastronômicas",
    description: "Restaurantes premiados e experiências culinárias únicas",
    color: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Camera,
    title: "Tours Exclusivos",
    description: "Passeios privativos com guias especializados",
    color: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Shield,
    title: "Seguro Viagem",
    description: "Proteção completa para sua tranquilidade",
    color: "from-yellow-500/10 to-amber-500/10",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-semibold uppercase tracking-wide">Serviços</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            Serviços <span className="text-gradient-purple-gold">Completos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Cuidamos de cada detalhe para que você aproveite momentos inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-2 overflow-hidden bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

              <CardHeader className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon className="text-primary relative z-10" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
