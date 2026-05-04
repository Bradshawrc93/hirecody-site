const F_W = 1280
const F_H = 800

const INK = '#0e1116'
const INK_3 = '#3a4250'
const PAPER = '#f4f1ea'
const PAPER_2 = '#ece7dc'
const ACCENT = '#c2410c'
const ACCENT_2 = '#1d4ed8'
const DANGER = '#b91c1c'
const GOOD = '#166534'

function FGrid({ idSuffix }: { idSuffix: string }) {
  const small = `fgrid-sm-${idSuffix}`
  const large = `fgrid-lg-${idSuffix}`
  return (
    <g opacity="0.5">
      <defs>
        <pattern id={small} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke={INK} strokeWidth="0.4" opacity="0.08" />
        </pattern>
        <pattern id={large} width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke={INK} strokeWidth="0.6" opacity="0.10" />
        </pattern>
      </defs>
      <rect width={F_W} height={F_H} fill={`url(#${small})`} />
      <rect width={F_W} height={F_H} fill={`url(#${large})`} />
    </g>
  )
}

function FCross({ cx, cy, size = 10 }: { cx: number; cy: number; size?: number }) {
  return (
    <g stroke={INK_3} strokeWidth="0.8">
      <line x1={cx - size} y1={cy} x2={cx + size} y2={cy} />
      <line x1={cx} y1={cy - size} x2={cx} y2={cy + size} />
    </g>
  )
}

function FPerson({ cx, cy, r = 12 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy - r * 0.35} r={r * 0.45} fill={PAPER} stroke={INK} strokeWidth="1" />
      <path
        d={`M ${cx - r * 0.85} ${cy + r * 0.9} a ${r * 0.85} ${r * 0.7} 0 0 1 ${r * 1.7} 0`}
        fill={PAPER}
        stroke={INK}
        strokeWidth="1"
      />
    </g>
  )
}

function FColHead({
  x,
  y,
  num,
  label,
  sub,
}: {
  x: number
  y: number
  num: string
  label: string
  sub?: string
}) {
  return (
    <g>
      <text x={x} y={y} className="font-mono" fontSize="9" letterSpacing="0.22em" fill={INK_3}>
        {num}
      </text>
      <text
        x={x}
        y={y + 18}
        className="font-mono"
        fontSize="11"
        letterSpacing="0.14em"
        fill={INK}
        fontWeight="600"
      >
        {label}
      </text>
      {sub && (
        <text x={x} y={y + 34} className="font-mono" fontSize="9" letterSpacing="0.1em" fill={INK_3}>
          {sub}
        </text>
      )}
    </g>
  )
}

function FFlow({
  d,
  color = INK,
  dash = '5 5',
  dur = 4,
  delay = 0,
  reverse = false,
  opacity = 1,
  width = 1.1,
}: {
  d: string
  color?: string
  dash?: string
  dur?: number
  delay?: number
  reverse?: boolean
  opacity?: number
  width?: number
}) {
  return (
    <g opacity={opacity}>
      <path d={d} fill="none" stroke={color} strokeWidth="0.6" opacity="0.25" />
      <path d={d} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round">
        <animate
          attributeName="stroke-dashoffset"
          from={reverse ? '0' : '20'}
          to={reverse ? '20' : '0'}
          dur={`${dur}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </path>
    </g>
  )
}

function FFrame({ eyebrow, title, sheet }: { eyebrow: string; title: string; sheet: string }) {
  return (
    <g>
      <FCross cx={32} cy={32} />
      <FCross cx={F_W - 32} cy={32} />
      <FCross cx={32} cy={F_H - 32} />
      <FCross cx={F_W - 32} cy={F_H - 32} />
      <text
        x={F_W / 2}
        y={54}
        textAnchor="middle"
        className="font-mono"
        fontSize="10"
        letterSpacing="0.26em"
        fill={INK_3}
      >
        {eyebrow}
      </text>
      <text x={F_W / 2} y={84} textAnchor="middle" fontSize="20" fontWeight="500" fill={INK}>
        {title}
      </text>
      <text x={60} y={F_H - 32} className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.14em">
        {sheet}
      </text>
      <text
        x={F_W - 60}
        y={F_H - 32}
        textAnchor="end"
        className="font-mono"
        fontSize="9"
        fill={INK_3}
        letterSpacing="0.14em"
      >
        REV 04 · 1:1
      </text>
    </g>
  )
}

// ============================================================
// Diagram A — Substrate bus diagram
// ============================================================

const ORBIT_TILES = [
  'SKILLS',
  'SUB-AGENTS',
  'ROLE CONTEXT',
  'MODELS',
  'BRAND VOICE',
  'POLICY',
  'MCP TOOLS',
  'MEMORY',
]

const A_ORG_ROWS = [
  { y: 240, n: 1 },
  { y: 400, n: 2 },
  { y: 580, n: 4 },
]

export function DiagramA() {
  const cx = F_W / 2
  const cy = F_H / 2 + 30
  const orgX = F_W - 200

  return (
    <svg viewBox={`0 0 ${F_W} ${F_H}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <FGrid idSuffix="a" />
      <FFrame
        eyebrow="FIG. A — SUBSTRATE TOPOLOGY"
        title="One central core. Every role, every skill, every model."
        sheet="SHEET A — SUBSTRATE / FINAL"
      />

      <FColHead x={80} y={140} num="01" label="AI OPS / LEADERSHIP" sub="OWNERSHIP + OBSERVABILITY" />
      <FColHead x={cx - 80} y={140} num="02" label="AI CORE — MCP" sub="SHARED SUBSTRATE" />
      <FColHead x={F_W - 360} y={140} num="03" label="CONSUMERS" sub="ROLES PULLING CAPABILITIES" />

      <line x1={F_W / 3} y1={130} x2={F_W / 3} y2={F_H - 90} stroke={INK} strokeWidth="0.5" strokeDasharray="2 8" opacity="0.25" />
      <line x1={(F_W / 3) * 2} y1={130} x2={(F_W / 3) * 2} y2={F_H - 90} stroke={INK} strokeWidth="0.5" strokeDasharray="2 8" opacity="0.25" />

      {/* LEFT — leadership / ai ops / observability */}
      <g transform="translate(80 200)">
        <rect width="240" height="68" fill={PAPER} stroke={INK} strokeWidth="1" />
        <text x="14" y="22" className="font-mono" fontSize="10" fontWeight="600" letterSpacing="0.14em" fill={INK}>
          LEADERSHIP
        </text>
        <line x1="14" y1="30" x2="226" y2="30" stroke={INK} strokeWidth="0.5" />
        <FPerson cx={32} cy={50} r={10} />
        <FPerson cx={62} cy={50} r={10} />
        <FPerson cx={92} cy={50} r={10} />
        <text x="120" y="54" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          OWNS THE CORE
        </text>
      </g>

      <g transform="translate(80 290)">
        <rect width="240" height="68" fill={PAPER} stroke={INK} strokeWidth="1" />
        <text x="14" y="22" className="font-mono" fontSize="10" fontWeight="600" letterSpacing="0.14em" fill={INK}>
          AI OPS
        </text>
        <line x1="14" y1="30" x2="226" y2="30" stroke={INK} strokeWidth="0.5" />
        <FPerson cx={32} cy={50} r={10} />
        <FPerson cx={62} cy={50} r={10} />
        <text x="86" y="54" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          OPERATES + EVOLVES
        </text>
      </g>

      <g transform="translate(80 380)">
        <rect width="240" height="280" fill={PAPER} stroke={INK} strokeWidth="1" />
        <text x="14" y="22" className="font-mono" fontSize="10" fontWeight="600" letterSpacing="0.14em" fill={INK}>
          OBSERVABILITY
        </text>
        <text x="226" y="22" textAnchor="end" className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.12em">
          LIVE
        </text>
        <circle cx="218" cy="18" r="2.5" fill={ACCENT}>
          <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <line x1="14" y1="32" x2="226" y2="32" stroke={INK} strokeWidth="0.5" />

        <text x="14" y="56" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.12em">
          USAGE / 24H
        </text>
        <text x="14" y="88" fontSize="26" fontWeight="500" fill={INK}>
          14,210
          <animate attributeName="opacity" values="1;0.65;1" dur="3s" repeatCount="indefinite" />
        </text>

        <text x="14" y="118" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.12em">
          AUTOMATION
        </text>
        <g transform="translate(14 130)">
          <rect width="212" height="6" fill="none" stroke={INK} strokeWidth="0.5" />
          <rect width="142" height="6" fill={INK}>
            <animate attributeName="width" values="138;148;142;144;138" dur="5s" repeatCount="indefinite" />
          </rect>
          <text x="0" y="22" className="font-mono" fontSize="9" fill={INK}>
            67%
          </text>
        </g>

        <text x="14" y="172" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.12em">
          MODEL MIX
        </text>
        <g transform="translate(14 180)">
          <rect width="100" height="14" fill={INK} />
          <rect x="100" width="62" height="14" fill={INK_3} />
          <rect x="162" width="34" height="14" fill="#9aa1ab" />
          <rect x="196" width="16" height="14" fill="#c8ccd2" />
          <text x="0" y="28" className="font-mono" fontSize="8" fill={INK_3}>
            SONNET
          </text>
          <text x="100" y="28" className="font-mono" fontSize="8" fill={INK_3}>
            HAIKU
          </text>
          <text x="162" y="28" className="font-mono" fontSize="8" fill={INK_3}>
            OPUS
          </text>
        </g>

        <text x="14" y="232" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.12em">
          SPEND / MTD
        </text>
        <text x="14" y="258" fontSize="20" fontWeight="500" fill={INK}>
          $3,840
        </text>
        <text x="226" y="258" textAnchor="end" className="font-mono" fontSize="9" fill={GOOD}>
          −12%
        </text>
      </g>

      {/* CENTER — Core module */}
      <g transform={`translate(${cx - 180} ${cy - 200})`}>
        <rect width="360" height="400" fill={PAPER} stroke={INK} strokeWidth="1.5" />
        {([[0, 0], [360, 0], [0, 400], [360, 400]] as [number, number][]).map(([x, y], i) => (
          <g key={i} stroke={INK} strokeWidth="1.5">
            <line x1={x - (x ? 12 : 0)} y1={y} x2={x + (x ? 0 : 12)} y2={y} />
            <line x1={x} y1={y - (y ? 12 : 0)} x2={x} y2={y + (y ? 0 : 12)} />
          </g>
        ))}

        <rect width="360" height="40" fill={INK} />
        <text x="14" y="26" className="font-mono" fontSize="11" fontWeight="600" letterSpacing="0.18em" fill={PAPER}>
          AI CORE
        </text>
        <text x="346" y="26" textAnchor="end" className="font-mono" fontSize="9" letterSpacing="0.18em" fill={ACCENT}>
          MCP · v2.4
        </text>

        <text x="14" y="62" className="font-mono" fontSize="9" letterSpacing="0.14em" fill={INK_3}>
          CAPABILITY REGISTRY
        </text>
        <line x1="14" y1="72" x2="346" y2="72" stroke={INK} strokeWidth="0.5" opacity="0.4" />

        {ORBIT_TILES.map((label, i) => {
          const col = i % 2
          const row = Math.floor(i / 2)
          const x = 14 + col * 170
          const y = 84 + row * 38
          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              <rect width="160" height="28" fill={PAPER} stroke={INK} strokeWidth="1">
                <animate
                  attributeName="fill"
                  values={`${PAPER};${INK};${PAPER}`}
                  keyTimes="0;0.1;1"
                  dur="6s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
              </rect>
              <text x="10" y="18" className="font-mono" fontSize="9" letterSpacing="0.12em" fill={INK}>
                <animate
                  attributeName="fill"
                  values={`${INK};${PAPER};${INK}`}
                  keyTimes="0;0.1;1"
                  dur="6s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
                <tspan>{String(i + 1).padStart(2, '0')}</tspan>
                <tspan dx="10">{label}</tspan>
              </text>
            </g>
          )
        })}

        <line x1="14" y1="262" x2="346" y2="262" stroke={INK} strokeWidth="0.5" opacity="0.4" />
        <text x="14" y="284" className="font-mono" fontSize="9" letterSpacing="0.14em" fill={INK_3}>
          MODEL ROUTER
        </text>
        <g transform="translate(14 296)">
          {['SONNET 4.5', 'HAIKU 4.5', 'OPUS 4', 'GPT-5'].map((m, i) => (
            <g key={m} transform={`translate(${i * 84} 0)`}>
              <rect width="80" height="22" fill={PAPER} stroke={INK} strokeWidth="0.8" />
              <text x="40" y="14" textAnchor="middle" className="font-mono" fontSize="8" letterSpacing="0.08em" fill={INK}>
                {m}
              </text>
              <circle cx="6" cy="6" r="1.5" fill={ACCENT}>
                <animate attributeName="opacity" values="1;0;1" dur={`${1 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        <text x="14" y="358" className="font-mono" fontSize="9" letterSpacing="0.14em" fill={INK_3}>
          POLICY · GUARDRAILS · AUDIT TRAIL
        </text>
        <g transform="translate(14 368)">
          <rect width="332" height="14" fill="none" stroke={INK} strokeWidth="0.5" />
          <rect width="332" height="14" fill={INK} opacity="0.06" />
          <text x="166" y="10" textAnchor="middle" className="font-mono" fontSize="8" fill={INK} letterSpacing="0.1em">
            SIGNED · LOGGED · REPLAYABLE
          </text>
        </g>
      </g>

      {/* RIGHT — org chart */}
      <g>
        {A_ORG_ROWS.map((row, ri) =>
          Array.from({ length: row.n }).map((_, i) => {
            const span = (row.n - 1) * 88
            const x = orgX - span / 2 + i * 88
            return (
              <g key={`${ri}-${i}`} transform={`translate(${x} ${row.y})`}>
                <rect x="-30" y="-30" width="60" height="60" fill={PAPER} stroke={INK} strokeWidth="1" />
                <FPerson cx={0} cy={-2} r={13} />
                <line x1="-22" y1="20" x2="22" y2="20" stroke={INK} strokeWidth="0.5" />
                <g transform="translate(34 -8)">
                  <rect width="64" height="14" fill={INK} stroke={INK} strokeWidth="1">
                    <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin={`${(ri + i) * 0.5}s`} repeatCount="indefinite" />
                  </rect>
                  <text x="32" y="10" textAnchor="middle" className="font-mono" fontSize="7" letterSpacing="0.12em" fill={PAPER}>
                    <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin={`${(ri + i) * 0.5}s`} repeatCount="indefinite" />
                    {ORBIT_TILES[(ri * 3 + i) % ORBIT_TILES.length]}
                  </text>
                </g>
              </g>
            )
          }),
        )}

        <g stroke={INK} strokeWidth="0.5" opacity="0.5">
          <line x1={orgX} y1={272} x2={orgX} y2={336} />
          <line x1={orgX - 44} y1={336} x2={orgX + 44} y2={336} />
          <line x1={orgX - 44} y1={336} x2={orgX - 44} y2={370} />
          <line x1={orgX + 44} y1={336} x2={orgX + 44} y2={370} />

          <line x1={orgX - 44} y1={432} x2={orgX - 44} y2={486} />
          <line x1={orgX + 44} y1={432} x2={orgX + 44} y2={486} />
          <line x1={orgX - 132} y1={486} x2={orgX + 132} y2={486} />
          <line x1={orgX - 132} y1={486} x2={orgX - 132} y2={550} />
          <line x1={orgX - 44} y1={486} x2={orgX - 44} y2={550} />
          <line x1={orgX + 44} y1={486} x2={orgX + 44} y2={550} />
          <line x1={orgX + 132} y1={486} x2={orgX + 132} y2={550} />
        </g>
      </g>

      {/* BUSES */}
      <FFlow d={`M 320 234 H ${cx - 200} V ${cy - 180} H ${cx - 180}`} dur={3} color={ACCENT_2} />
      <FFlow d={`M 320 324 H ${cx - 200} V ${cy - 100}`} dur={3.5} color={ACCENT_2} delay={0.5} />
      <FFlow d={`M ${cx - 180} ${cy + 100} H ${cx - 240} V 500 H 320`} dur={3.5} color={ACCENT} delay={0.8} reverse />

      {A_ORG_ROWS.map((row, ri) => (
        <FFlow
          key={`req-${ri}`}
          d={`M ${cx + 180} ${cy + (ri - 1) * 30} H ${cx + 280} V ${row.y} H ${orgX - 30}`}
          dur={3.5}
          delay={ri * 0.7}
          color={INK}
        />
      ))}

      {A_ORG_ROWS.map((row, ri) => (
        <FFlow
          key={`log-${ri}`}
          d={`M ${orgX - 30} ${row.y + 22} H ${cx + 320} V ${cy + 130 + ri * 12} H ${cx + 180}`}
          dur={4.5}
          delay={ri * 0.9 + 0.4}
          color={ACCENT}
          reverse
          opacity={0.7}
        />
      ))}

      <g transform={`translate(80 ${F_H - 64})`}>
        <line x1="0" y1="6" x2="22" y2="6" stroke={ACCENT_2} strokeWidth="1.2" strokeDasharray="5 5" />
        <text x="28" y="10" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          OWNERSHIP
        </text>
        <line x1="120" y1="6" x2="142" y2="6" stroke={INK} strokeWidth="1.2" strokeDasharray="5 5" />
        <text x="148" y="10" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          CAPABILITY REQUEST
        </text>
        <line x1="320" y1="6" x2="342" y2="6" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="5 5" />
        <text x="348" y="10" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          TELEMETRY / LOGS
        </text>
      </g>
    </svg>
  )
}

// ============================================================
// Diagram B — Visibility wall + leak tags
// ============================================================

const B_ORG_ROWS = [
  { y: 230, n: 1 },
  { y: 380, n: 2 },
  { y: 550, n: 4 },
]

const LEAK_TAGS = [
  'CUSTOMER DATA',
  'SOURCE CODE',
  'STRATEGY DECK',
  'PII',
  'FINANCIAL MODEL',
  'ROADMAP',
  'LEGAL DRAFT',
]

function FDesktop({ x, y, w = 100, h = 64, idx = 0 }: { x: number; y: number; w?: number; h?: number; idx?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} fill={PAPER} stroke={INK} strokeWidth="1" />
      <rect width={w} height="10" fill={PAPER_2} stroke={INK} strokeWidth="0.5" />
      <circle cx="6" cy="5" r="1.5" fill={ACCENT} />
      <circle cx="12" cy="5" r="1.5" fill="#9aa1ab" />
      <circle cx="18" cy="5" r="1.5" fill="#9aa1ab" />
      <text x={w - 4} y="7.5" textAnchor="end" className="font-mono" fontSize="6" fill={INK_3} letterSpacing="0.06em">
        claude.ai
      </text>
      <g fill={INK} opacity="0.7">
        <rect x="6" y="16" width={w * 0.6} height="2" />
        <rect x="6" y="22" width={w * 0.4} height="2" />
        <rect x="6" y="32" width={w * 0.5} height="2">
          <animate attributeName="width" values={`${w * 0.3};${w * 0.7};${w * 0.3}`} dur={`${3 + (idx % 3)}s`} repeatCount="indefinite" />
        </rect>
        <rect x="6" y="38" width={w * 0.3} height="2" />
        <rect x="6" y="48" width={w * 0.55} height="2">
          <animate attributeName="opacity" values="0.2;0.9;0.2" dur={`${2 + (idx % 4) * 0.5}s`} repeatCount="indefinite" />
        </rect>
      </g>
      <rect x="6" y={h - 8} width="4" height="3" fill={INK}>
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </g>
  )
}

export function DiagramB() {
  const xMid = F_W / 2
  const baseX = 200
  const deskOffsetX = 110

  return (
    <svg viewBox={`0 0 ${F_W} ${F_H}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <FGrid idSuffix="b" />
      <FFrame
        eyebrow="FIG. B — VISIBILITY GAP / SHADOW AI"
        title="A wall between AI work and the people accountable for it."
        sheet="SHEET B — SHADOW / FINAL"
      />

      <FColHead x={80} y={140} num="01" label="ORG / WHERE THE WORK HAPPENS" sub="UNMANAGED · UNLOGGED" />
      <FColHead x={F_W - 320} y={140} num="02" label="LEADERSHIP / AI OPS" sub="ACCOUNTABLE · BLIND" />

      {/* LEFT — org + desktops + floating leak tags */}
      {B_ORG_ROWS.map((row, ri) =>
        Array.from({ length: row.n }).map((_, i) => {
          const span = (row.n - 1) * 86
          const x = baseX - span / 2 + i * 86
          const idx = ri === 0 ? 0 : ri === 1 ? 1 + i : 3 + i
          const tag = LEAK_TAGS[idx % LEAK_TAGS.length]
          return (
            <g key={`p-${ri}-${i}`}>
              <g transform={`translate(${x} ${row.y})`}>
                <rect x="-28" y="-28" width="56" height="56" fill={PAPER} stroke={INK} strokeWidth="1" />
                <FPerson cx={0} cy={-2} r={12} />
                <line x1="-20" y1="18" x2="20" y2="18" stroke={INK} strokeWidth="0.5" />
              </g>
              <FDesktop x={x + deskOffsetX - 50} y={row.y - 32} idx={idx} />
              <line
                x1={x + 28}
                y1={row.y}
                x2={x + deskOffsetX - 50}
                y2={row.y}
                stroke={INK}
                strokeWidth="0.5"
                strokeDasharray="2 2"
                opacity="0.5"
              />
              <g transform={`translate(${x + deskOffsetX - 32} ${row.y - 50})`}>
                <rect width="106" height="16" fill={DANGER} stroke={DANGER} strokeWidth="1">
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.12;0.88;1"
                    dur="5s"
                    begin={`${idx * 0.45}s`}
                    repeatCount="indefinite"
                  />
                </rect>
                <text x="6" y="11" className="font-mono" fontSize="8" letterSpacing="0.14em" fontWeight="600" fill={PAPER}>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.12;0.88;1"
                    dur="5s"
                    begin={`${idx * 0.45}s`}
                    repeatCount="indefinite"
                  />
                  ↑ {tag}
                </text>
              </g>
            </g>
          )
        }),
      )}

      <g stroke={INK} strokeWidth="0.5" opacity="0.5">
        <line x1={baseX} y1={262} x2={baseX} y2={326} />
        <line x1={baseX - 43} y1={326} x2={baseX + 43} y2={326} />
        <line x1={baseX - 43} y1={326} x2={baseX - 43} y2={352} />
        <line x1={baseX + 43} y1={326} x2={baseX + 43} y2={352} />

        <line x1={baseX - 43} y1={408} x2={baseX - 43} y2={468} />
        <line x1={baseX + 43} y1={408} x2={baseX + 43} y2={468} />
        <line x1={baseX - 129} y1={468} x2={baseX + 129} y2={468} />
        <line x1={baseX - 129} y1={468} x2={baseX - 129} y2={522} />
        <line x1={baseX - 43} y1={468} x2={baseX - 43} y2={522} />
        <line x1={baseX + 43} y1={468} x2={baseX + 43} y2={522} />
        <line x1={baseX + 129} y1={468} x2={baseX + 129} y2={522} />
      </g>

      {/* WALL */}
      <g>
        <defs>
          <pattern id="hatch-final" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={DANGER} strokeWidth="0.6" opacity="0.32" />
          </pattern>
        </defs>
        <rect x={xMid - 70} y={130} width="140" height={F_H - 220} fill={DANGER} opacity="0.04" />
        <rect x={xMid - 70} y={130} width="140" height={F_H - 220} fill="url(#hatch-final)" />
        <line x1={xMid - 70} y1={130} x2={xMid - 70} y2={F_H - 90} stroke={DANGER} strokeWidth="1" strokeDasharray="6 6" />
        <line x1={xMid + 70} y1={130} x2={xMid + 70} y2={F_H - 90} stroke={DANGER} strokeWidth="1" strokeDasharray="6 6" />

        {B_ORG_ROWS.map((row, ri) =>
          Array.from({ length: row.n }).map((_, i) => {
            const span = (row.n - 1) * 86
            const x = baseX - span / 2 + i * 86 + deskOffsetX + 50
            const y = row.y
            const delay = (ri + i) * 0.25
            return (
              <g key={`fp-${ri}-${i}`}>
                <line x1={x} y1={y} x2={xMid - 70} y2={y} stroke={DANGER} strokeWidth="0.6" strokeDasharray="2 4" opacity="0.32" />
                <circle r="2.5" fill={DANGER}>
                  <animateMotion path={`M ${x} ${y} L ${xMid - 72} ${y}`} dur="2.2s" begin={`${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.2s" begin={`${delay}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={xMid - 70} cy={y} r="3" fill="none" stroke={DANGER} strokeWidth="1.2">
                  <animate attributeName="r" values="0;10;0" dur="2.2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="2.2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
                </circle>
              </g>
            )
          }),
        )}

        <g transform={`translate(${xMid - 60} ${F_H / 2 - 60})`}>
          <rect width="120" height="120" fill={PAPER} stroke={DANGER} strokeWidth="2" />
          <line x1="0" y1="0" x2="120" y2="120" stroke={DANGER} strokeWidth="3" />
          <line x1="120" y1="0" x2="0" y2="120" stroke={DANGER} strokeWidth="3" />
          <text x="60" y="56" textAnchor="middle" className="font-mono" fontSize="9" fontWeight="600" letterSpacing="0.2em" fill={DANGER}>
            NO BRIDGE
          </text>
          <text x="60" y="72" textAnchor="middle" className="font-mono" fontSize="8" letterSpacing="0.16em" fill={INK}>
            NO LOGS
          </text>
          <text x="60" y="86" textAnchor="middle" className="font-mono" fontSize="8" letterSpacing="0.16em" fill={INK}>
            NO POLICY
          </text>
        </g>
      </g>

      {/* RIGHT — leadership / ai ops / dim observability */}
      <g transform={`translate(${F_W - 320} 200)`}>
        <rect width="240" height="56" fill={PAPER} stroke={INK} strokeWidth="1" />
        <text x="14" y="20" className="font-mono" fontSize="9" fontWeight="600" letterSpacing="0.14em" fill={INK}>
          LEADERSHIP
        </text>
        <FPerson cx={32} cy={42} r={9} />
        <FPerson cx={56} cy={42} r={9} />
        <FPerson cx={80} cy={42} r={9} />
        <text x="100" y="46" className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.1em">
          FLYING BLIND
        </text>

        <g transform="translate(0 70)">
          <rect width="240" height="56" fill={PAPER} stroke={INK} strokeWidth="1" />
          <text x="14" y="20" className="font-mono" fontSize="9" fontWeight="600" letterSpacing="0.14em" fill={INK}>
            AI OPS
          </text>
          <FPerson cx={32} cy={42} r={9} />
          <FPerson cx={56} cy={42} r={9} />
          <text x="76" y="46" className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.1em">
            NOTHING TO OPERATE ON
          </text>
        </g>
      </g>

      <g transform={`translate(${F_W - 320} 350)`} opacity="0.55">
        <rect width="240" height="360" fill={PAPER} stroke={INK} strokeWidth="1" />
        <text x="14" y="22" className="font-mono" fontSize="10" fontWeight="600" letterSpacing="0.14em" fill={INK}>
          OBSERVABILITY
        </text>
        <text x="226" y="22" textAnchor="end" className="font-mono" fontSize="8" fill={DANGER} letterSpacing="0.18em">
          NO DATA
        </text>
        <line x1="14" y1="32" x2="226" y2="32" stroke={INK} strokeWidth="0.5" />

        <g className="font-mono" fontSize="9" letterSpacing="0.1em">
          <text x="14" y="54" fill={INK_3}>USAGE</text>
          <text x="226" y="54" textAnchor="end" fill={DANGER}>— ? —</text>
          <text x="14" y="74" fill={INK_3}>SPEND</text>
          <text x="226" y="74" textAnchor="end" fill={DANGER}>— ? —</text>
          <text x="14" y="94" fill={INK_3}>AUTOMATION</text>
          <text x="226" y="94" textAnchor="end" fill={DANGER}>— ? —</text>
          <text x="14" y="114" fill={INK_3}>MODELS</text>
          <text x="226" y="114" textAnchor="end" fill={DANGER}>— ? —</text>
          <text x="14" y="134" fill={INK_3}>POLICY</text>
          <text x="226" y="134" textAnchor="end" fill={DANGER}>— ? —</text>
        </g>

        <g transform="translate(14 160)">
          <text className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.1em">
            CALLS / 7D
          </text>
          <line x1="0" y1="40" x2="212" y2="40" stroke={DANGER} strokeWidth="1" strokeDasharray="2 2" />
          <line x1="0" y1="60" x2="212" y2="60" stroke={INK} strokeWidth="0.5" />
          <text x="106" y="34" textAnchor="middle" className="font-mono" fontSize="8" fill={DANGER} letterSpacing="0.18em">
            FLATLINE
          </text>
        </g>

        <g transform="translate(14 230)">
          <rect width="212" height="100" fill={INK} opacity="0.04" stroke={DANGER} strokeWidth="1" strokeDasharray="3 3" />
          <text x="106" y="32" textAnchor="middle" className="font-mono" fontSize="9" fontWeight="600" letterSpacing="0.2em" fill={DANGER}>
            ERR_NO_TELEMETRY
          </text>
          <text x="106" y="52" textAnchor="middle" className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.12em">
            0 SOURCES CONFIGURED
          </text>
          <text x="106" y="68" textAnchor="middle" className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.12em">
            0 USERS REPORTING
          </text>
          <text x="106" y="84" textAnchor="middle" className="font-mono" fontSize="8" fill={INK_3} letterSpacing="0.12em">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
            0 / 7 DESKTOPS LINKED
          </text>
        </g>
      </g>

      <g transform={`translate(80 ${F_H - 64})`}>
        <rect width="20" height="10" fill={DANGER} />
        <text x="28" y="9" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          SENSITIVE DATA EGRESS
        </text>
        <line x1="200" y1="6" x2="222" y2="6" stroke={DANGER} strokeWidth="1.2" strokeDasharray="3 4" />
        <text x="228" y="10" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          DROPPED LOG ATTEMPT
        </text>
        <rect x="400" y="0" width="22" height="12" fill="url(#hatch-final)" stroke={DANGER} strokeWidth="0.6" />
        <text x="428" y="10" className="font-mono" fontSize="9" fill={INK_3} letterSpacing="0.1em">
          VISIBILITY GAP
        </text>
      </g>
    </svg>
  )
}

// ============================================================
// Artboard frame — blueprint paper background + corner labels
// ============================================================

export function ArtboardFrame({
  children,
  sheet,
  caption,
}: {
  children: React.ReactNode
  sheet: string
  caption?: { bold: string; rest?: string }
}) {
  const paperBg = `linear-gradient(transparent 95%, rgba(14,17,22,0.04) 95%) 0 0 / 24px 24px,
linear-gradient(90deg, transparent 95%, rgba(14,17,22,0.04) 95%) 0 0 / 24px 24px,
${PAPER}`
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border"
      style={{
        aspectRatio: '16 / 10',
        background: paperBg,
        color: INK,
      }}
    >
      <div
        className="absolute top-3 left-4 font-mono uppercase"
        style={{ fontSize: 10, color: INK_3, letterSpacing: '0.08em' }}
      >
        {sheet}
      </div>
      <div
        className="absolute top-3 right-4 font-mono uppercase"
        style={{ fontSize: 10, color: INK_3, letterSpacing: '0.08em' }}
      >
        REV 04
      </div>
      <div className="absolute inset-0">{children}</div>
      {caption && (
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center font-mono uppercase w-4/5"
          style={{ bottom: 14, fontSize: 11, color: INK_3, letterSpacing: '0.12em' }}
        >
          <strong style={{ color: INK, fontWeight: 600 }}>{caption.bold}</strong>
          {caption.rest && <span> — {caption.rest}</span>}
        </div>
      )}
    </div>
  )
}
