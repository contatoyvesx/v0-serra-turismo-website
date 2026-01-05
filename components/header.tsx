"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-accent/40 transition-all duration-300 group-hover:scale-110">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-gradient-purple-gold">Serra Turismo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#destinos"
              className={`font-medium transition-all duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Destinos
            </a>
            <a
              href="#servicos"
              className={`font-medium transition-all duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className={`font-medium transition-all duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className={`font-medium transition-all duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contato
            </a>
            <Button className="bg-gradient-to-r from-accent to-secondary hover:shadow-xl hover:shadow-accent/50 text-accent-foreground font-semibold px-6 rounded-full transition-all duration-300 hover:scale-105">
              Reserve Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4 bg-background/95 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-xl">
            <a
              href="#destinos"
              className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinos
            </a>
            <a
              href="#servicos"
              className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button className="bg-gradient-to-r from-accent to-secondary hover:shadow-lg text-accent-foreground w-full font-semibold rounded-full">
              Reserve Agora
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
