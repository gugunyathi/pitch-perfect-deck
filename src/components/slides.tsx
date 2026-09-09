import type { ReactNode } from "react";

const DECK_FOOTER = "ZEEXonchain • Regulated Securities & RWA Operating System on Base";

/* ---------------- shared chrome ---------------- */

function SlideShell({
  index,
  kicker,
  title,
  lead,
  children,
  tone = "default",
}: {
  index: number;
  kicker: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  tone?: "default" | "hero";
}) {
  return (
    <div className="flex h-full w-full flex-col px-[76px] pb-[54px] pt-[56px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-70"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[6px]"
        style={{ background: "var(--gradient-primary)" }}
      />

      <header className="relative flex items-center justify-between">
        <span className="slide-kicker rounded-full border border-primary/40 bg-primary/12 px-5 py-2 text-accent">
          {kicker}
        </span>
        <span className="slide-chrome font-mono text-muted-foreground">
          {String(index).padStart(2, "0")} / 11
        </span>
      </header>

      <div className="relative mt-[34px]">
        <h2 className={tone === "hero" ? "slide-title-lg" : "slide-title"}>{title}</h2>
        {lead ? (
          <p className="slide-subtitle mt-[18px] max-w-[1020px] text-muted-foreground">{lead}</p>
        ) : null}
      </div>

      <div className="relative mt-[42px] flex-1">{children}</div>

      <footer className="relative mt-[26px] flex items-center justify-between border-t border-border pt-[18px]">
        <span className="slide-chrome text-muted-foreground">{DECK_FOOTER}</span>
        <span className="slide-chrome font-mono text-muted-foreground">
          github.com/2satoshy/zeexonchain
        </span>
      </footer>
    </div>
  );
}

const accents = ["primary", "accent", "mint", "amber", "violet", "teal"] as const;
type Accent = (typeof accents)[number];

function accentColor(a: Accent) {
  return `var(--${a === "primary" ? "primary" : a})`;
}

function Card({
  accent = "primary",
  eyebrow,
  heading,
  body,
  bullets,
  className = "",
}: {
  accent?: Accent;
  eyebrow?: string;
  heading: string;
  body?: string;
  bullets?: string[];
  className?: string;
}) {
  return (
    <div className={`panel relative flex flex-col overflow-hidden p-[34px] ${className}`}>
      <div
        className="absolute inset-x-0 top-0 h-[5px]"
        style={{ background: accentColor(accent) }}
      />
      {eyebrow ? (
        <span className="slide-chrome font-mono uppercase tracking-[0.18em]" style={{ color: accentColor(accent) }}>
          {eyebrow}
        </span>
      ) : null}
      <h3 className="mt-[14px] font-display text-[30px] font-semibold leading-[1.15] tracking-[-0.02em]">
        {heading}
      </h3>
      {body ? <p className="slide-body mt-[16px] text-muted-foreground">{body}</p> : null}
      {bullets ? (
        <ul className="mt-[18px] space-y-[13px]">
          {bullets.map((b) => (
            <li key={b} className="slide-caption flex gap-[12px] text-muted-foreground">
              <span
                className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ background: accentColor(accent) }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Metric({
  value,
  label,
  note,
  accent = "primary",
}: {
  value: string;
  label: string;
  note: string;
  accent?: Accent;
}) {
  return (
    <div className="panel flex flex-col justify-between p-[30px]">
      <span className="slide-metric" style={{ color: accentColor(accent) }}>
        {value}
      </span>
      <div className="mt-[22px]">
        <p className="font-display text-[23px] font-semibold tracking-[-0.01em]">{label}</p>
        <p className="slide-caption mt-[8px] text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

/* ---------------- slides ---------------- */

function Slide1() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between px-[76px] pb-[54px] pt-[64px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[6px]"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="slide-kicker rounded-full border border-primary/40 bg-primary/12 px-5 py-2 text-accent">
            Base Batches 004 • Pre-Seed Application
          </span>
          <span className="slide-chrome font-mono text-muted-foreground">01 / 11</span>
        </div>

        <h1 className="slide-title-lg mt-[52px]">
          ZEEX<span className="text-gradient">onchain</span>
        </h1>
        <p className="slide-subtitle mt-[22px] max-w-[1080px] text-muted-foreground">
          Transforming equities, stocks, local currencies &amp; SME invoices into liquid Real-World
          Assets on Base.
        </p>

        <div className="panel mt-[44px] p-[36px]">
          <h2 className="font-display text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-accent">
            Solving global SME working capital constraints with verifiable onchain collateral
          </h2>
          <p className="slide-body mt-[16px] max-w-[1120px] text-muted-foreground">
            ZEEXonchain turns traditional equities, stocks, local currencies and SME invoice
            receivables into liquid tokenized Real World Assets — a regulated securities and RWA
            operating system built natively on Base L2.
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-4 gap-[22px]">
        {[
          { a: "primary", e: "Network", h: "Base Sepolia → Mainnet", n: "Chain ID 84532 • Beryl upgrade" },
          { a: "mint", e: "Asset standards", h: "ERC-3643 / 721 → B20", n: "Testnet ERCs • Mainnet Base B20" },
          { a: "violet", e: "Onboarding UX", h: "Base Account Passkeys", n: "Biometric 1-tap SIWE & Base Pay" },
          { a: "amber", e: "Founder & repo", h: "Gugu Nyathi", n: "gugu@ribbonprotocol.org" },
        ].map((c) => (
          <div key={c.e} className="panel relative overflow-hidden p-[26px]">
            <div
              className="absolute inset-x-0 top-0 h-[5px]"
              style={{ background: accentColor(c.a as Accent) }}
            />
            <p className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {c.e}
            </p>
            <p className="mt-[12px] font-display text-[23px] font-semibold tracking-[-0.01em]">
              {c.h}
            </p>
            <p className="slide-caption mt-[10px] text-muted-foreground">{c.n}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <SlideShell
      index={2}
      kicker="The Problem"
      title="Global enterprise capital is broken, illiquid & trapped"
      lead="SMEs face acute working capital starvation while holding vast amounts of illiquid traditional assets."
    >
      <div className="grid h-full grid-cols-3 gap-[26px]">
        <Card
          accent="primary"
          eyebrow="$5.7T global deficit"
          heading="$5.7T SME funding gap"
          body="Global suppliers wait 60–90 days for corporate invoice payouts. Commercial banks demand 200% physical collateral or charge predatory 35%+ APRs."
        />
        <Card
          accent="amber"
          eyebrow="T+3 latency"
          heading="Illiquid stocks & equities"
          body="Stock registries and private equities stay trapped in paper filings, steep $500+ minimums and slow T+3 settlement cycles that lock up capital."
        />
        <Card
          accent="violet"
          eyebrow="FX friction"
          heading="Local currency friction"
          body="Businesses have no low-friction route to convert local currencies, trade receivables or corporate assets into instant, non-dilutive working capital."
        />
      </div>
    </SlideShell>
  );
}

function Slide3() {
  return (
    <SlideShell
      index={3}
      kicker="The Solution"
      title="The full-stack onchain financial OS for global business"
      lead="Transforming traditional equities, stocks, local currencies and SME receivables into liquid Real World Assets."
    >
      <div className="grid h-full grid-cols-3 gap-[26px]">
        <Card
          accent="primary"
          eyebrow="ERC-3643 → Base B20"
          heading="Tokenized equities & stocks"
          body="Compliant tokenization of traditional equities via ERC-3643 on testnet, upgrading to Base B20 precompiles on mainnet for native allowlists, batched issuance and $1 micro-shares."
        />
        <Card
          accent="mint"
          eyebrow="ERC-721 → Base B20"
          heading="SME invoice factoring vaults"
          body="Suppliers mint trade receivables into dynamic Invoice NFTs on testnet and Base B20 RWA tokens on mainnet, drawing instant liquidity from DeFi pools in minutes."
        />
        <Card
          accent="teal"
          eyebrow="Base B20 collateral"
          heading="Verifiable onchain collateral"
          body="Bridges local currencies, enterprise stocks and operational assets directly into verifiable onchain collateral on Base L2 with native Beryl B20 compliance precompiles."
        />
      </div>
    </SlideShell>
  );
}

function Slide4() {
  return (
    <SlideShell
      index={4}
      kicker="Why Base"
      title="Built from day one to maximize Base L2 superpowers"
      lead="Unlocking mass institutional and consumer adoption through passkey UX, sub-cent gas and Coinbase distribution."
    >
      <div className="grid h-full grid-cols-4 gap-[22px]">
        <Card
          accent="primary"
          eyebrow="Base Account passkeys"
          heading="Zero seed-phrase UX"
          body="Native biometric SIWE, 1-tap Base Pay and USDC checkout architecture."
        />
        <Card
          accent="accent"
          eyebrow="Sub-cent gas"
          heading="< 400ms finality"
          body="Enables hyper-efficient micro-investing and automated daily rebalancing."
        />
        <Card
          accent="violet"
          eyebrow="Coinbase CDP"
          heading="100M+ user pipeline"
          body="Embedded smart wallets via SMS/email with direct global fiat onramps."
        />
        <Card
          accent="mint"
          eyebrow="Real utility"
          heading="Real economic volume"
          body="Finances real corporate invoices and tokenizes tangible global assets onchain."
        />
      </div>
    </SlideShell>
  );
}

function Slide5() {
  return (
    <SlideShell
      index={5}
      kicker="Product & Tech Stack"
      title="Production-grade, live onchain tech stack"
      lead="Fully deployed and verified smart contracts with real-time indexing and cloud persistence."
    >
      <div className="grid h-full grid-cols-3 gap-[26px]">
        <Card
          accent="primary"
          eyebrow="Testnet & mainnet contracts"
          heading="Smart contract suite"
          bullets={[
            "BaseStockToken.sol (ERC-3643 → Base B20)",
            "InvoiceNFT.sol (ERC-721 collateral ledger)",
            "CreditVault.sol (lending pool & yields)",
            "BaseRWAFactory.sol (singleton B20 deployer)",
          ]}
        />
        <Card
          accent="violet"
          eyebrow="Multi-wallet layer"
          heading="Identity & authentication"
          bullets={[
            "Base Account SDK passkey auth",
            "Coinbase CDP embedded wallets",
            "Wagmi / Viem connectors",
            "Onchain KYC/AML compliance registry",
          ]}
        />
        <Card
          accent="mint"
          eyebrow="Data & indexing"
          heading="Backend & oracles"
          bullets={[
            "Express.js + TypeScript REST engine",
            "Live MongoDB cloud state",
            "Real-time asset FX oracle feeds",
            "Secure regulatory audit logging",
          ]}
        />
      </div>
    </SlideShell>
  );
}

function Slide6() {
  return (
    <SlideShell
      index={6}
      kicker="Traction & Velocity"
      title="Strong testnet velocity & early user engagement"
      lead="Operational milestones across simulated stock trades, invoice loans and platform testing."
    >
      <div className="grid h-full grid-cols-4 gap-[22px]">
        <Metric accent="primary" value="$4.8M+" label="Simulated volume" note="5 listed corporate test assets" />
        <Metric accent="accent" value="3,400+" label="Onchain transactions" note="Base Sepolia contract calls" />
        <Metric accent="mint" value="1,000" label="Onboarding airdrop units" note="First-sign-in user incentive" />
        <Metric accent="amber" value="<400ms" label="Settlement latency" note="Sub-second Base L2 blocks" />
      </div>
    </SlideShell>
  );
}

function Slide7() {
  return (
    <SlideShell
      index={7}
      kicker="Market Opportunity"
      title="$16T global RWA shift • $5.7T SME funding target"
      lead="Capturing the enterprise leapfrog directly into onchain liquidity rails."
    >
      <div className="grid h-full grid-cols-3 gap-[26px]">
        <div className="panel relative flex flex-col overflow-hidden p-[34px]">
          <div className="absolute inset-x-0 top-0 h-[5px]" style={{ background: "var(--primary)" }} />
          <span className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Global TAM (2030)
          </span>
          <span className="slide-metric mt-[16px] text-gradient">$16T</span>
          <p className="slide-body mt-[18px] text-muted-foreground">
            Total projected addressable market for tokenized real-world assets, public and private
            equities, debt and cash-flow funds (BCG / Citi GPS).
          </p>
        </div>
        <div className="panel relative flex flex-col overflow-hidden p-[34px]">
          <div className="absolute inset-x-0 top-0 h-[5px]" style={{ background: "var(--accent)" }} />
          <span className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Global SAM
          </span>
          <span className="slide-metric mt-[16px] text-accent">$5.7T</span>
          <p className="slide-body mt-[18px] text-muted-foreground">
            The unmet formal financing gap facing underserved small and medium enterprises globally
            (World Bank / IFC).
          </p>
        </div>
        <div className="panel relative flex flex-col overflow-hidden p-[34px]">
          <div className="absolute inset-x-0 top-0 h-[5px]" style={{ background: "var(--mint)" }} />
          <span className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
            ZEEXonchain SOM
          </span>
          <span className="slide-metric mt-[16px]" style={{ color: "var(--mint)" }}>
            $1.8B
          </span>
          <p className="slide-body mt-[18px] text-muted-foreground">
            Obtainable share across global invoice factoring, stock tokenization and cross-border
            liquidity settled on Base L2.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide8() {
  return (
    <SlideShell
      index={8}
      kicker="Business Model"
      title="Diversified, high-margin onchain revenue streams"
      lead="Monetizing secondary trading volume, primary asset tokenization and working capital credit spreads."
    >
      <div className="grid h-full grid-cols-4 gap-[22px]">
        <Metric accent="primary" value="0.25%" label="Secondary DEX swaps" note="Stock trades & automated rebalancing" />
        <Metric accent="accent" value="1.0–1.5%" label="RWA issuance fee" note="Enterprises tokenizing equities & debt" />
        <Metric accent="mint" value="2.0–3.5%" label="Factoring spread" note="Interest spread on SME capital draws" />
        <Metric accent="amber" value="$19/mo" label="AI broker pro tier" note="Cash-flow tracking & institutional API" />
      </div>
    </SlideShell>
  );
}

function Slide9() {
  return (
    <SlideShell
      index={9}
      kicker="Competitive Moat"
      title="Why competitors cannot easily replicate ZEEXonchain"
      lead="Interoperable compliance frameworks, native Base passkey UX and sticky B2B collateral pipelines."
    >
      <div className="grid h-full grid-cols-3 gap-[26px]">
        <Card
          accent="primary"
          eyebrow="Compliance & B20 moat"
          heading="Global regulatory rails"
          body="ERC-3643 compliance on testnet upgrading natively to Base B20 precompiles on mainnet, with built-in transfer policies, allowlists and role-based access control."
        />
        <Card
          accent="violet"
          eyebrow="Enterprise UX"
          heading="Frictionless onboarding"
          body="Base Account passkey biometrics remove every Web3 hurdle. Zero seed phrases and gas sponsorship make blockchain invisible to CFOs."
        />
        <Card
          accent="mint"
          eyebrow="Sticky B2B pipeline"
          heading="Proprietary asset pipeline"
          body="Origination architecture ready to plug into international logistics networks, manufacturing providers and cross-border supply chains."
        />
      </div>
    </SlideShell>
  );
}

function Slide10() {
  const quarters = [
    {
      a: "primary" as Accent,
      q: "Q1 2026 • Cohort",
      h: "Testnet & audits",
      items: [
        "Base Batches 004 cohort",
        "Smart contract security audits",
        "Base Account SDK polish",
        "5,000 active testnet wallets",
      ],
    },
    {
      a: "accent" as Accent,
      q: "Q2 2026",
      h: "Mainnet launch (B20)",
      items: [
        "Deploy on Base Mainnet (B20)",
        "Onboard first 5 real assets",
        "$2M working capital pool",
        "Direct fiat-to-USDC onramps",
      ],
    },
    {
      a: "mint" as Accent,
      q: "Q3 2026",
      h: "Scale & mobile",
      items: [
        "Native mobile PWA rollout",
        "Institutional API portal",
        "$10M+ active invoice draws",
        "Automated underwriting",
      ],
    },
    {
      a: "amber" as Accent,
      q: "Q4 2026",
      h: "Global expansion",
      items: [
        "Multi-corridor expansion",
        "Cross-border FX settlements",
        "50,000 active investors",
        "Series A growth round",
      ],
    },
  ];

  return (
    <SlideShell
      index={10}
      kicker="12-Month Roadmap"
      title="Milestone execution plan for Base Batches 004"
      lead="From Base Sepolia testnet to multi-corridor international mainnet expansion."
    >
      <div className="relative h-full">
        <div className="absolute left-0 right-0 top-[8px] h-[2px] bg-border" />
        <div className="grid h-full grid-cols-4 gap-[22px]">
          {quarters.map((q) => (
            <div key={q.q} className="flex flex-col">
              <span
                className="mb-[22px] h-[18px] w-[18px] rounded-full ring-4 ring-background"
                style={{ background: accentColor(q.a) }}
              />
              <Card accent={q.a} eyebrow={q.q} heading={q.h} bullets={q.items} className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide11() {
  return (
    <SlideShell
      index={11}
      kicker="The Ask • Base Batches 004"
      title="Applying for Base Batches 004 & a $250K pre-seed SAFE"
      lead="Partnering with Base to build the flagship global onchain financial rails for enterprise liquidity."
    >
      <div className="grid h-full grid-cols-[1.45fr_1fr] gap-[26px]">
        <div className="panel relative flex flex-col overflow-hidden p-[34px]">
          <div
            className="absolute inset-x-0 top-0 h-[5px]"
            style={{ background: "var(--gradient-primary)" }}
          />
          <span className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Accelerator & pre-seed
          </span>
          <h3 className="mt-[14px] font-display text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-gradient">
            $250,000 Pre-Seed SAFE
          </h3>
          <p className="slide-body mt-[16px] text-muted-foreground">
            Funding institutional smart contract security audits, bootstrapping liquidity for our
            Base SME working capital vaults and onboarding the first 50,000 retail and enterprise
            users to Base L2.
          </p>

          <p className="slide-chrome mt-[26px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Use of proceeds
          </p>
          <div className="mt-[16px] space-y-[16px]">
            {[
              { l: "Smart contract audits & security", v: "40% • $100k", w: "40%", c: "var(--primary)" },
              { l: "Base liquidity & credit vaults", v: "35% • $87.5k", w: "35%", c: "var(--accent)" },
              { l: "Global acquisition & dev tools", v: "25% • $62.5k", w: "25%", c: "var(--mint)" },
            ].map((r) => (
              <div key={r.l}>
                <div className="slide-caption flex items-baseline justify-between">
                  <span>{r.l}</span>
                  <span className="font-mono text-muted-foreground">{r.v}</span>
                </div>
                <div className="mt-[8px] h-[10px] w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full" style={{ width: r.w, background: r.c }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative flex flex-col justify-between overflow-hidden p-[34px]">
          <div className="absolute inset-x-0 top-0 h-[5px]" style={{ background: "var(--amber)" }} />
          <div>
            <span className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Founder & contact
            </span>
            <h3 className="mt-[14px] font-display text-[34px] font-bold tracking-[-0.02em]">
              Gugu Nyathi
            </h3>
            <p className="slide-caption mt-[6px] text-muted-foreground">
              CEO, Lead Architect &amp; Founder
            </p>
            <dl className="mt-[26px] space-y-[14px]">
              {[
                ["Email", "gugu@ribbonprotocol.org"],
                ["Demo", "zeexonchain.vercel.app"],
                ["GitHub", "2satoshy/zeexonchain"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-[12px]">
                  <dt className="slide-chrome font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="slide-caption mt-[6px]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="slide-caption rounded-xl border border-primary/40 bg-primary/12 px-[18px] py-[14px] text-accent">
            Ready for Base Batches 004 kickoff.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

export const slides: { id: string; title: string; render: () => ReactNode }[] = [
  { id: "cover", title: "ZEEXonchain", render: () => <Slide1 /> },
  { id: "problem", title: "The Problem", render: () => <Slide2 /> },
  { id: "solution", title: "The Solution", render: () => <Slide3 /> },
  { id: "why-base", title: "Why Base", render: () => <Slide4 /> },
  { id: "product", title: "Product & Tech Stack", render: () => <Slide5 /> },
  { id: "traction", title: "Traction", render: () => <Slide6 /> },
  { id: "market", title: "Market Opportunity", render: () => <Slide7 /> },
  { id: "model", title: "Business Model", render: () => <Slide8 /> },
  { id: "moat", title: "Competitive Moat", render: () => <Slide9 /> },
  { id: "roadmap", title: "Roadmap", render: () => <Slide10 /> },
  { id: "ask", title: "The Ask", render: () => <Slide11 /> },
];
