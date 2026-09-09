import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ScaledSlide } from "@/components/SlideFrame";
import { slides } from "@/components/slides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZEEXonchain — Base Batches 004 Investor Deck" },
      {
        name: "description",
        content:
          "ZEEXonchain investor deck: tokenizing equities, stocks, local currencies and SME invoices into liquid Real World Assets on Base L2.",
      },
      { property: "og:title", content: "ZEEXonchain — Base Batches 004 Investor Deck" },
      {
        property: "og:description",
        content:
          "Regulated securities & RWA operating system on Base. $5.7T SME funding gap, $16T RWA shift, $250K pre-seed SAFE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DeckPage,
});

function DeckPage() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (n: number) => setIndex((i) => Math.min(total - 1, Math.max(0, i + n))),
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) void document.exitFullscreen();
        else void document.documentElement.requestFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    document.title = `${index + 1}/${total} — ${slides[index].title} • ZEEXonchain`;
  }, [index, total]);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <h1 className="sr-only">ZEEXonchain investor pitch deck — Base Batches 004</h1>

      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            className="h-8 w-8 rounded-lg"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <div>
            <p className="font-display text-lg font-bold leading-tight tracking-tight">
              ZEEXonchain
            </p>
            <p className="text-xs text-muted-foreground">Base Batches 004 • Investor Deck</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/print"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
          >
            Download PDF (A4 landscape)
          </a>
        </div>
      </header>

      <section className="flex-1 px-4 py-6">
        <div className="mx-auto h-[min(76vh,860px)] w-full max-w-[1500px]">
          <ScaledSlide>{slides[index].render()}</ScaledSlide>
        </div>

        <div className="mx-auto mt-5 flex max-w-[1500px] items-center justify-between gap-4">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-40"
          >
            ← Previous
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className="h-2.5 rounded-full transition-all"
                style={{
                  width: i === index ? 34 : 10,
                  background: i === index ? "var(--primary)" : "var(--border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            disabled={index === total - 1}
            className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-40"
          >
            Next →
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Use ← → or space to navigate • press F for fullscreen
        </p>
      </section>
    </main>
  );
}
