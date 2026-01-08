import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "HA Serra Turismo transformou nossas férias em uma experiência mágica. Cada detalhe foi perfeito, desde a hospedagem até os passeios. Recomendo de olhos fechados!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Carlos Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Profissionalismo e atenção aos detalhes impecáveis. Os roteiros personalizados superaram todas as expectativas. Voltaremos com certeza!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ana Rodrigues",
    location: "Belo Horizonte, MG",
    text: "Que experiência incrível! A equipe da HA Serra Turismo nos proporcionou momentos únicos em Gramado. Tudo organizado com perfeição.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 bg-muted/35 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary/80 mb-6">
            <Star size={16} className="fill-primary" />
            <span className="text-sm font-semibold uppercase tracking-wide">Depoimentos</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            O Que Dizem <span className="text-primary">Nossos Clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Experiências reais de viajantes que confiaram em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card/95 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent drop-shadow-sm" />
                  ))}
                </div>

                <p className="text-foreground/90 mb-8 leading-relaxed text-lg italic relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 border-t-2 border-border pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
