import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SLIDE_H, SLIDE_W } from "@/components/SlideFrame";
import { slides } from "@/components/slides";

// A4 landscape at 96dpi
const PAGE_W = 1110;
const PAGE_H = 780;
const SCALE = Math.min(PAGE_W / SLIDE_W, PAGE_H / SLIDE_H);

export const Route = createFileRoute("/print")({
  head: () => ({
    meta: [
      { title: "ZEEXonchain Deck — Print / PDF (A4 landscape)" },
      {
        name: "description",
        content:
          "Print-ready A4 landscape version of the ZEEXonchain Base Batches 004 investor deck.",
      },
      { property: "og:title", content: "ZEEXonchain Deck — A4 Landscape PDF" },
      {
        property: "og:description",
        content: "Print-ready A4 landscape export of the ZEEXonchain investor deck.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrintDeck,
});

function PrintDeck() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="print-hidden mx-auto flex max-w-[1122px] flex-wrap items-center justify-between gap-3 px-4 py-5">
        <p className="text-sm text-muted-foreground">
          A4 landscape, 11 pages. In the print dialog choose “Save as PDF”, landscape, margins none
          and enable background graphics.
        </p>
        <button
          onClick={() => window.print()}
          className="rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          Save as PDF
        </button>
      </div>

      <div className="mx-auto w-fit pb-10 print:pb-0">
        {slides.map((s) => (
          <div
            key={s.id}
            className="print-page relative mx-auto mb-4 overflow-hidden bg-background print:mb-0"
            style={{ width: PAGE_W, height: PAGE_H }}
          >
            <div
              className="slide-canvas absolute left-0 top-0"
              style={{
                transform: `scale(${SCALE}) translate(${(PAGE_W / SCALE - SLIDE_W) / 2}px, ${
                  (PAGE_H / SCALE - SLIDE_H) / 2
                }px)`,
                transformOrigin: "top left",
              }}
            >
              {s.render()}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
