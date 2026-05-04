import React, { useState } from "react";
import { profile } from "../../mock/mock";
import { SectionLabel } from "./About";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Github, Instagram, Linkedin, Mail, Phone, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Completa todos los campos antes de enviar.");
      return;
    }

    setSending(true);

    const formData = {
      ...form,
      access_key: import.meta.env.VITE_ACCESS_KEY,
      from_name: "Portfolio",
      subject: `Nuevo mensaje de ${form.name}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("¡Mensaje enviado con éxito! Te responderé pronto.");
        setForm({ name: "", email: "", message: "" }); // Limpiar formulario
      } else {
        toast.error("Hubo un error al enviar. Inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error("Error de conexión. Revisa tu internet.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="06" label="Contacto" />

        <div className="mt-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              ¿Tienes una idea?
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-indigo-400 bg-clip-text text-transparent">
                Construyámosla.
              </span>
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              Siempre abierto a proyectos interesantes, colaboraciones y encargos de ilustración. Escríbeme y te respondo en menos de 48h.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={Phone} label="Teléfono" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactRow icon={MapPin} label="Ubicación" value={profile.location} />
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <SocialIcon href={profile.socials.github} Icon={Github} />
              <SocialIcon href={profile.socials.instagram} Icon={Instagram} />
              <SocialIcon href={profile.socials.linkedin} Icon={Linkedin} />
              <SocialIcon href={profile.socials.email} Icon={Mail} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 backdrop-blur"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" id="name">
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="bg-zinc-950/60 border-white/10 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-violet-500/40 focus-visible:border-violet-500/40"
                  />
                </Field>
                <Field label="Email" id="email">
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="bg-zinc-950/60 border-white/10 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-violet-500/40 focus-visible:border-violet-500/40"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Mensaje" id="message">
                  <Textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto…"
                    className="bg-zinc-950/60 border-white/10 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-violet-500/40 focus-visible:border-violet-500/40"
                  />
                </Field>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-zinc-500">
                  Respuesta en ~48h
                </span>
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-violet-600 hover:bg-violet-500 text-white border-0 h-11 px-6 shadow-lg shadow-violet-900/40"
                >
                  {sending ? "Enviando…" : (
                    <span className="inline-flex items-center gap-2">
                      Enviar mensaje <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs font-mono tracking-widest uppercase text-zinc-400">
        {label}
      </Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 group-hover:bg-violet-500/15 transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">{label}</div>
        <div className="text-zinc-200">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
}

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-zinc-300 hover:text-white hover:border-violet-400/50 hover:bg-white/5 transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}