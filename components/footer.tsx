import { Facebook, Instagram, Twitter, Youtube, Sparkles, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="text-accent-foreground" size={24} />
              </div>
              <span className="font-serif text-2xl font-bold text-accent">Serra Turismo</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Transformando viagens em experiências memoráveis desde 2010. Sua jornada perfeita começa aqui.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <span>contato@serraturismo.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Destinos</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Campos do Jordão
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Gramado
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Monte Verde
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Visconde de Mauá
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Ver Todos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Empresa</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Conecte-se</h3>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Siga-nos nas redes sociais para dicas de viagem e ofertas exclusivas
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 backdrop-blur-sm"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 backdrop-blur-sm"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 backdrop-blur-sm"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 backdrop-blur-sm"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; 2026 Serra Turismo. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
