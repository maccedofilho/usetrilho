"use client";

import { FormEvent, useState } from "react";

const formEndpoint = "https://formspree.io/f/meajprja";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-form-shell">
      <p>
        Conte como funciona aí dentro — onde a operação mais perde tempo. A
        primeira conversa começa pelo seu trabalho, não pela tecnologia.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="Novo contato pelo site Trilho" />
        <div className="contact-form-grid">
          <label className="contact-field">
            Nome
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label className="contact-field">
            Empresa
            <input name="company" type="text" autoComplete="organization" required />
          </label>
          <label className="contact-field">
            E-mail
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="contact-field">
            Telefone
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label className="contact-field contact-field-full">
            Como podemos ajudar?
            <textarea name="message" rows={4} required />
          </label>
        </div>
        <button className="button-dark" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>
        <p className="contact-form-status" aria-live="polite">
          {status === "success" && "Mensagem enviada. A gente fala com você em breve."}
          {status === "error" && "Não foi possível enviar agora. Tente novamente ou use o e-mail acima."}
        </p>
      </form>
    </div>
  );
}
