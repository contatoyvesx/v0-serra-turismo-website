import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/stunning-mountain-landscape-at-golden-hour-with-dr.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-primary/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-secondary/25 to-transparent" />
      </div>

      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/12 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/85 backdrop-blur-md border border-accent/50 text-primary mb-8 shadow-sm animate-fade-in">
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm font-medium">Experiências Premium desde 2010</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          <span className="text-secondary drop-shadow-2xl">Descubra o</span>
          <br />
          <span className="text-primary drop-shadow-2xl">Extraordinário</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            asChild
            className="group bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(93,24,130,0.25)]"
          >
            <a href="#destinos" className="flex items-center">
              Explorar Destinos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-primary text-lg px-10 py-7 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-[0_12px_30px_rgba(243,217,166,0.25)]"
          >
            <a href="https://wa.me/5551981699277" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <PhoneCall size={20} /> WhatsApp
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto bg-secondary/80 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-primary/5">
          {[
            { value: "15+", label: "Anos de Experiência" },
            { value: "50K+", label: "Viajantes Felizes" },
            { value: "200+", label: "Destinos Exclusivos" },
          ].map((stat, i) => (
            <div key={i} className="text-primary">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-7 h-12 border-2 border-accent/70 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-secondary/25">
          <div className="w-1.5 h-4 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
