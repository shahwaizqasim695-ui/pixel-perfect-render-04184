import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-[color-mix(in_oklab,var(--forest-deep)_96%,black)] text-[color-mix(in_oklab,var(--cream)_92%,transparent)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl">Q.L. Levy</p>
          <p className="mt-3 max-w-xs text-sm opacity-80">
            Author of <em>Chasing The Carrot On The Stick</em> — a logical synopsis of the
            origin of the mental health crisis of today.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="opacity-85 hover:opacity-100">Home</Link></li>
            <li><Link to="/about" className="opacity-85 hover:opacity-100">About the Author</Link></li>
            <li><Link to="/book" className="opacity-85 hover:opacity-100">The Book</Link></li>
            <li><Link to="/resources" className="opacity-85 hover:opacity-100">Resources</Link></li>
            <li><Link to="/contact" className="opacity-85 hover:opacity-100">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
            Publisher
          </p>
          <p className="mt-4 text-sm opacity-85">Collingwood Press</p>
          <p className="mt-1 text-sm opacity-85">ISBN 979-8-9912345-0-1</p>
          <p className="mt-4 text-sm opacity-85">Available now</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Q.L. Levy. Published by Collingwood Press. All rights reserved.
      </div>
    </footer>
  );
}
