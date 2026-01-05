import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Info, MapIcon, MoonStar, Shield, Sparkles, Train } from "lucide-react"

const services = [
  {
    icon: Train,
    title: "Tour Uva e Vinho + Maria Fumaça",
    description:
      "História, cultura e sabores em um passeio completo pela Serra Gaúcha, com degustações e experiências autênticas.",
    color: "from-purple-500/10 to-violet-500/10",
    highlights: [
      "Passeio de Maria Fumaça com degustações a bordo",
      "Visita à Epopeia Italiana",
      "Parada na Queijaria Fetina de Formaio",
      "Tour na Vinícola Aurora",
      "Almoço italiano no Cantina Dell Vale Ristorante",
    ],
    includes: ["Transporte", "Passeio de Maria Fumaça", "Degustações", "Almoço italiano"],
  },
  {
    icon: MoonStar,
    title: "Noite Alemã – Kerbfest",
    description:
      "Uma imersão na cultura alemã em Nova Petrópolis com gastronomia típica, música e danças tradicionais.",
    color: "from-amber-500/10 to-yellow-500/10",
    highlights: [
      "Restaurante Lindenhoff com jantar típico",
      "Café colonial completo",
      "Show com músicas e danças alemãs",
    ],
    includes: ["Transporte", "Jantar típico", "Show cultural"],
  },
  {
    icon: MapIcon,
    title: "City Tour Gramado e Canela - Coletivo",
    description:
      "Roteiro completo pelos principais pontos de Gramado e Canela, com saídas diárias e guias experientes.",
    color: "from-violet-500/10 to-purple-500/10",
    highlights: [
      "Gramado: Fábrica de Cristais, Lago Negro, Rua Torta, Mini Mundo e muito mais",
      "Canela: Bondinhos Aéreos/Cascata do Caracol, Catedral de Pedra, Mundo Gelado e pontos panorâmicos",
      "Saídas entre 7h40 e 8h30 com retorno até às 18h",
      "Embarque em hotéis e pousadas de Gramado e Canela (zona urbana)",
    ],
    includes: ["Transporte com motorista/guia"],
    exclusions: ["Almoço", "Bebidas", "Ingressos nos pontos de visitação"],
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
            Serviços <span className="text-primary">Incríveis</span>
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
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {service.highlights && (
                  <ul className="space-y-2 text-muted-foreground">
                    {service.highlights.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2 items-start">
                        <Check size={16} className="mt-0.5 text-primary" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.includes && (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Shield size={16} />
                      <span>Incluso</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.includes.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.exclusions && (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                      <Info size={16} />
                      <span>Não incluso</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.exclusions.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
