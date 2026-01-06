"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, PhoneCall } from "lucide-react"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-secondary/90 backdrop-blur-lg border-b border-border/70 ${
        isScrolled ? "shadow-lg shadow-primary/5" : "shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 ring-2 ring-accent/70 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-gradient-purple-gold">Serra Turismo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#destinos"
              className="font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Destinos
            </a>
            <a
              href="#servicos"
              className="font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Contato
            </a>
            <Button className="bg-[#5e1882] hover:bg-[#4c1369] text-primary-foreground font-semibold px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(93,24,130,0.25)]">
              Reserve Agora
            </Button>
            <Button asChild className="bg-[#d4af37] hover:bg-[#b88a1d] text-[#2f1b47] font-semibold rounded-full px-5 shadow-[0_12px_30px_rgba(212,175,55,0.25)]">
              <a href="https://wa.me/555189628983" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <PhoneCall size={18} />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden transition-colors text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4 bg-secondary/90 backdrop-blur-xl rounded-2xl p-6 border border-border/60 shadow-xl">
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
            <Button className="bg-[#5e1882] hover:bg-[#4c1369] text-primary-foreground w-full font-semibold rounded-full shadow-[0_10px_35px_rgba(93,24,130,0.25)]">
              Reserve Agora
            </Button>
            <Button asChild className="bg-[#d4af37] hover:bg-[#b88a1d] text-[#2f1b47] w-full font-semibold rounded-full flex items-center gap-2 shadow-[0_12px_30px_rgba(212,175,55,0.25)]">
              <a href="https://wa.me/555189628983" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                <PhoneCall size={18} />
                WhatsApp
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
