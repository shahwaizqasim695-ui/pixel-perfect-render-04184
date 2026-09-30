import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BookCover } from "@/components/book-cover";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Chasing The Carrot On The Stick — The Book by Q.L. Levy" },
      {
        name: "description",
        content:
          "Full description, chapter preview, and buying options for Chasing The Carrot On The Stick by Q.L. Levy. Collingwood Press. Available now.",
      },
      { property: "og:title", content: "Chasing The Carrot On The Stick by Q.L. Levy" },
      {
        property: "og:description",
        content:
          "A logical synopsis of the origin of the mental health crisis of today. Available now from Collingwood Press.",
      },
    ],
  }),
  component: BookPage,
});

const takeaways = [
  "Recognize the created systems, family dynamics, and social constructs shaping your mind",
  "Tell the difference between healthy thoughts and destructive ones",
  "Interrogate your First Thought Response (FTR) before you act on it",
  "Hold yourself accountable first — and others when their actions threaten your peace",
  "Build healthy boundaries without isolating yourself",
  "Process other people's emotions and reactions without losing your own calm",
];

const contents = [
  "Introduction",
  "1. Santa Claus",
  "2. The Formulation of Insecurities",
  "3. The Church System",
  "4. Social Constructs",
  "5. The Educational System",
  "6. Parenting",
  "7. Creating Healthy Boundaries",
  "8. Marriages and Relationships",
  "9. Grief",
  "10. “Chasing” Closure",
  "Conclusion",
];

const retailers = ["Amazon", "Barnes & Noble", "Apple Books", "Collingwood Press"];

function BookPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/50 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 md:grid-cols-[0.75fr_1.25fr]">
          <BookCover priority className="mx-auto w-full max-w-[17rem]" />
          <div>
            <p className="eyebrow">The Book</p>
            <h1 className="mt-3 text-5xl leading-tight">Chasing The Carrot On The Stick</h1>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl italic text-[var(--crimson)]">
              A logical synopsis of the origin of the mental health crisis of today.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-muted-foreground">Author</dt>
                <dd className="font-semibold">Q.L. Levy</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Publisher</dt>
                <dd className="font-semibold">Collingwood Press</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">ISBN</dt>
                <dd className="font-semibold">979-8-9912345-0-1</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-semibold text-[var(--forest)]">Available now</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              {retailers.map((r, i) => (
                <a
                  key={r}
                  href="#"
                  className={
                    i === 0
                      ? "rounded-full bg-[var(--crimson)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                      : "rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                  }
                >
                  Buy on {r}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Retailer links are placeholders until the store pages are live.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="rule-ornament eyebrow">About the book</p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            This book brings awareness to the mental health crisis in our society and exposes the
            manipulative tactics used to hinder mental stability — tactics that have used our
            insecurities to create a false narrative of reality.
          </p>
          <p>
            The inspiration came from years of social interactions and leading counseling groups.
            People are struggling with issues that originate from not protecting their mental
            health. Most of it isn't irresponsibility; it's never having been taught. Left alone,
            that gap passes down generation after generation.
          </p>
          <p>
            One of the vices perpetuating the dilemma is the lack of accountability — for ourselves
            and for each other. Everyone looks for a scapegoat instead of accepting responsibility
            for the part they played. Changing that begins with challenging the thoughts that go
            against your peace, and refusing to entertain what threatens the tranquility of your
            environment.
          </p>
          <p>
            It also refuses the myth of total independence. “WE NEED EACH OTHER.” Be selective, but
            choose someone consistent and trustworthy to hold you accountable — and don't push away
            the gift because you dislike the wrapping paper.
          </p>
          <p className="font-[family-name:var(--font-display)] text-2xl italic text-foreground">
            These steps will prevent you from creating and “chasing” an image of superficial mental
            stability. Hence, chasing the carrot on the stick. Peace be with you.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">What you'll learn</h2>
            <ul className="mt-6 space-y-4">
              {takeaways.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--gold)]" />
                  <span className="leading-relaxed text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Inside the book</h2>
            <ol className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
              {contents.map((c) => (
                <li key={c} className="px-5 py-3 text-sm font-medium">
                  {c}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="rule-ornament eyebrow">Front, spine &amp; back</p>
        <h2 className="mt-4 text-3xl">The full wraparound cover</h2>
        <BookCover variant="full" className="mt-8" />
      </section>
    </>
  );
}
