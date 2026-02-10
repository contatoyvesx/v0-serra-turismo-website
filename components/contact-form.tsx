"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram, Send } from "lucide-react"

const WHATSAPP_PHONE = "5551981699277"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedMessage) {
      return
    }

    setIsSending(true)

    const whatsappSummary = [
      "Olá, HA Turismo! ✨",
      "",
      "Recebi um pedido de contato pelo site:",
      `Nome: ${trimmedName}`,
      `Mensagem: ${trimmedMessage}`,
    ].join("\n")

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappSummary)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setIsSending(false)
  }

  return (
    <section id="contato" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Mail size={16} />
            <span className="text-sm font-semibold uppercase tracking-wide">Contato</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            Planeje Sua Próxima <span className="text-primary">Aventura</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Envie um resumo rápido e continue a conversa diretamente no WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-xl bg-card">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-serif font-bold text-primary">Solicitar no WhatsApp</CardTitle>
                <p className="text-muted-foreground mt-2">Preencha os campos e envie em um clique</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Nome</label>
                    <Input
                      required
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-2 focus:border-primary h-12 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Mensagem</label>
                    <Textarea
                      required
                      placeholder="Conte-nos sobre a viagem dos seus sonhos..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background resize-none border-2 focus:border-primary text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className="w-full py-6 text-lg font-bold text-primary-foreground rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-[0_16px_35px_rgba(93,24,130,0.35)] ring-1 ring-accent/60"
                  >
                    {isSending ? "Abrindo WhatsApp..." : "Enviar resumo para WhatsApp"}
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">Telefone</h3>
                    <p className="text-muted-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                      +55 51 98169-9277
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">E-mail</h3>
                    <p className="text-muted-foreground mb-1 hover:text-accent transition-colors cursor-pointer break-all">
                      haturismo2@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">Instagram</h3>
                    <a
                      href="https://www.instagram.com/ha.turismo?igsh=NDNnYW5zYnRhMGw0"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      @ha.turismo
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
