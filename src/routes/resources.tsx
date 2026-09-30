import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Protecting Your Peace | Q.L. Levy" },
      {
        name: "description",
        content:
          "Short, practical notes from Q.L. Levy on First Thought Response, accountability, boundaries, and emotional intelligence.",
      },
      { property: "og:title", content: "Resources — Protecting Your Peace" },
      {
        property: "og:description",
        content:
          "Practical notes on FTR, accountability, boundaries, and emotional intelligence from Q.L. Levy.",
      },
    ],
  }),
  component: Resources,
});

const posts = [
  {
    tag: "First Thought Response",
    title: "Interrogate the first thought",
    body: "Your FTR is the reaction that arrives before you choose one. Ask it three questions: Is it true? Is it mine? Does it protect my peace? Most destructive thinking doesn't survive the second question.",
  },
  {
    tag: "Accountability",
    title: "Stop hiring scapegoats",
    body: "A scapegoat resolves nothing; it just delays the conversation you need to have with yourself. Naming your part is the fastest route to a resolution — and the only one that holds.",
  },
  {
    tag: "Boundaries",
    title: "Correction isn't the point — protection is",
    body: "Holding someone accountable for behavior that threatens your peace can look like correction. It isn't. You're guarding your sanity, and you don't owe anyone a debate about it.",
  },
  {
    tag: "Emotional Intelligence",
    title: "Healthy thoughts vs. destructive thoughts",
    body: "Discernment is a muscle. Once you can name which is which in the moment, you can challenge one and act on the other — instead of being carried by whichever shouts loudest.",
  },
  {
    tag: "Connection",
    title: "Independence was oversold",
    body: "Isolation feels safe and quietly stagnates you. Be selective, not sealed off: choose one person who has proven consistent and trustworthy, and let them hold you accountable.",
  },
  {
    tag: "Growth",
    title: "To obtain something you never had",
    body: "You must do something you never did. Challenge one anxiety this week in a small, survivable way. Repetition is what dissolves the awkwardness — the long-term reward is stability.",
  },
];

function Resources() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="rule-ornament eyebrow">Resources</p>
          <h1 className="mt-5 text-5xl">Notes on protecting your peace</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Short, practical reflections drawn from the book and the counseling room.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="eyebrow">{p.tag}</p>
              <h2 className="mt-3 text-2xl leading-snug">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            Want these in your inbox, or have a topic you'd like addressed?
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
