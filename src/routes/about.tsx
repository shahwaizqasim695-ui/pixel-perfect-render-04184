import { createFileRoute, Link } from "@tanstack/react-router";
import paper from "@/assets/paper-texture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Q.L. Levy — Author, Father, Counselor" },
      {
        name: "description",
        content:
          "Q.L. Levy is an author and counseling group leader writing from lived experience about protecting mental health, accountability, and emotional intelligence.",
      },
      { property: "og:title", content: "About Q.L. Levy" },
      {
        property: "og:description",
        content:
          "A father, family man, and counselor who writes from real experience about protecting your peace.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="rule-ornament eyebrow">About the Author</p>
          <h1 className="mt-5 text-5xl">Q.L. Levy</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Father. Family man. Counselor. Writing from the rooms where real people wrestle with
            real things.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div
            className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-border shadow-[var(--shadow-soft)]"
            style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="font-[family-name:var(--font-display)] text-6xl text-[var(--gold)]">
                QL
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Author photo coming soon
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Send a portrait and it will take this place.
          </p>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Q.L. Levy is the author of <em>Chasing The Carrot On The Stick</em>, a logical synopsis
            of the origin of the mental health crisis of today. His writing grew out of years of
            social interaction and leading counseling groups — sitting with people whose struggles
            came less from irresponsibility than from never being taught how to protect their
            mental space.
          </p>
          <p>
            He writes as a father first. The book carries the plain-spoken conviction of a man
            raising children in a generation where mental instability has quietly become the norm,
            and who refuses to hand that norm down.
          </p>
          <p>
            His approach is direct rather than clinical: challenge the thoughts that go against
            your peace, hold others accountable when their actions threaten it, and interrogate
            your First Thought Response before it speaks for you. Truth, as he puts it, isn't
            popular because it doesn't entertain — it educates and imposes accountability.
          </p>

          <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-[family-name:var(--font-display)] text-2xl italic leading-snug text-foreground">
            “Your mental health is your first child. It is your job to provide what it needs to
            develop successfully.”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-8">
        <div className="rounded-lg border border-border bg-card p-9 shadow-[var(--shadow-soft)]">
          <p className="eyebrow">In Memory</p>
          <h2 className="mt-3 text-3xl">The people he honors</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The book is written in memory of his father, <strong>Quilly Levy Sr.</strong>, whose
            presence is truly missed; his former father-in-law, <strong>Bobbie Johnson</strong>;{" "}
            <strong>Radu O'Connor</strong> and <strong>Kevin Gissendanner Jr.</strong>, taken far
            too soon; and his friend <strong>Francisco Holland</strong>. Each one played a
            significant role in shaping him into the best man and father he can be.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 text-center">
        <h2 className="text-3xl">Why he wrote it</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          “We have not been educated to make our mental health a priority. In this book, we address
          the origins and red flags that contribute to the decline of mental health today.”
        </p>
        <Link
          to="/book"
          className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Explore the Book
        </Link>
      </section>
    </>
  );
}
