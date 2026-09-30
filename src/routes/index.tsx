import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Brain, Scale, Sparkles } from "lucide-react";
import heroPath from "@/assets/hero-path.jpg";
import { BookCover } from "@/components/book-cover";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Q.L. Levy — Chasing The Carrot On The Stick" },
      {
        name: "description",
        content:
          "Understand the origin. Protect your peace. Become your best self. The official home of Q.L. Levy, author of Chasing The Carrot On The Stick.",
      },
      { property: "og:title", content: "Q.L. Levy — Chasing The Carrot On The Stick" },
      {
        property: "og:description",
        content:
          "A logical synopsis of the origin of the mental health crisis of today. Protect your peace and grow in emotional intelligence.",
      },
    ],
  }),
  component: Home,
});

const themes = [
  {
    icon: Shield,
    title: "Protect Your Peace",
    body: "Recognize what threatens your mental space — and learn to guard it without apology.",
  },
  {
    icon: Brain,
    title: "Emotional Intelligence",
    body: "Tell the difference between healthy thoughts and destructive ones, then respond on purpose.",
  },
  {
    icon: Scale,
    title: "Accountability",
    body: "Own your part, hold others to theirs, and stop trading responsibility for a scapegoat.",
  },
  {
    icon: Sparkles,
    title: "First Thought Response",
    body: "Interrogate your FTR — the very first reaction — before it decides your day for you.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroPath}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--cream)_94%,transparent),color-mix(in_oklab,var(--cream)_72%,transparent)_55%,transparent)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="fade-up">
            <p className="eyebrow">A logical synopsis of the origin of the mental health crisis of today</p>
            <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
              Understand the Origin.{" "}
              <span className="text-[var(--crimson)]">Protect Your Peace.</span>{" "}
              Become Your Best Self.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Q.L. Levy writes from real rooms and real conversations — counseling groups,
              families, friendships. <em>Chasing The Carrot On The Stick</em> arms you with the
              knowledge to guard your mental health and grow in emotional intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Get the Book
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Meet the Author
              </Link>
            </div>
          </div>

          <div className="fade-up mx-auto w-full max-w-xs md:max-w-sm">
            <BookCover priority className="rotate-[1.5deg] transition-transform duration-500 hover:rotate-0" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="rule-ornament eyebrow">The Premise</p>
        <p className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-relaxed sm:text-[1.75rem]">
          “Most cases aren't due to irresponsibility, but to a lack of knowledge about how to
          protect their mental space.”
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          There is a billion-dollar industry supporting physical fitness, and almost nothing
          teaching us to protect our minds. This book names the created systems, inherited family
          dynamics, and social constructs quietly shaping how we think — and hands you the tools
          to choose differently.
        </p>
      </section>

      {/* Featured book */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <BookCover className="mx-auto w-full max-w-[16rem]" />
          <div>
            <p className="eyebrow">Featured Book</p>
            <h2 className="mt-3 text-4xl">Chasing The Carrot On The Stick</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Collingwood Press · ISBN 979-8-9912345-0-1 · Available now
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Learn how to guard your mental health through the obstacles and the people who
              threaten the peace of your mind. Day by day you grow the intellectual muscle to
              process other people's emotions and reactions without letting them disrupt you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-[var(--crimson)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Buy Now
              </a>
              <Link
                to="/book"
                className="rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key themes */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="rule-ornament eyebrow">Key Themes</p>
          <h2 className="mt-4 text-4xl">What this book builds in you</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((t) => (
            <article
              key={t.title}
              className="rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <t.icon className="h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-5 text-2xl">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5">
        <div className="rounded-xl bg-[color-mix(in_oklab,var(--forest-deep)_96%,black)] px-8 py-16 text-center text-[color-mix(in_oklab,var(--cream)_95%,transparent)]">
          <h2 className="text-4xl">Start protecting your mental space today.</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-85">
            You are the first line of defense when it comes to your mental health. Peace be with you.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-block rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-deep)] transition-transform hover:-translate-y-0.5"
          >
            Read the Book
          </Link>
        </div>
      </section>
    </>
  );
}
