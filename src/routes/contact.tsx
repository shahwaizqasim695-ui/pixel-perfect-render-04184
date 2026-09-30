import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Mic, Users } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Q.L. Levy — Speaking & Counseling Inquiries" },
      {
        name: "description",
        content:
          "Reach Q.L. Levy for reader messages, speaking engagements, group counseling, and media inquiries.",
      },
      { property: "og:title", content: "Contact Q.L. Levy" },
      {
        property: "og:description",
        content: "Reader messages, speaking engagements, and counseling inquiries.",
      },
    ],
  }),
  component: Contact,
});

// Replace with the real address once confirmed.
const EMAIL = "hello@qllevy.com";

const socials = ["Instagram", "Facebook", "X", "LinkedIn"];

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);

    const subject = encodeURIComponent(
      `${data.get("topic") || "Message"} — from ${data.get("name") || "a reader"}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    toast.success("Opening your email app to send this message.");
    setSending(false);
    form.reset();
  };

  return (
    <>
      <section className="border-b border-border/60 bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="rule-ornament eyebrow">Contact</p>
          <h1 className="mt-5 text-5xl">Let's talk</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Reader notes, speaking engagements, and counseling group inquiries are all welcome.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium">
            Topic
            <select
              name="topic"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
            >
              <option>General message</option>
              <option>Speaking engagement</option>
              <option>Counseling group</option>
              <option>Media / interview</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Message
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="mt-7 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-7">
            <Mail className="h-6 w-6 text-[var(--gold)]" />
            <h2 className="mt-4 text-2xl">Email</h2>
            <a href={`mailto:${EMAIL}`} className="mt-1 block text-muted-foreground underline">
              {EMAIL}
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-7">
            <Mic className="h-6 w-6 text-[var(--gold)]" />
            <h2 className="mt-4 text-2xl">Speaking</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Q.L. Levy speaks to churches, schools, workplaces, and community groups on
              protecting mental health, accountability, and emotional intelligence.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-7">
            <Users className="h-6 w-6 text-[var(--gold)]" />
            <h2 className="mt-4 text-2xl">Counseling groups</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Inquiries about group sessions and facilitation are welcome — mention it in the
              topic field above.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Follow</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Social links are placeholders for now.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
