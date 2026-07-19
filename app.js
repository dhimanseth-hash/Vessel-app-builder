const metricCatalog = [
  {
    key: "net_irr",
    label: "Net IRR",
    unit: "%",
    group: "Performance",
    severityBasis: "basis-points",
    regexes: [
      /\bnet\s+irr\b[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*%/gi,
      /\birr\s*\(net\)[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*%/gi
    ]
  },
  {
    key: "gross_irr",
    label: "Gross IRR",
    unit: "%",
    group: "Performance",
    severityBasis: "basis-points",
    regexes: [/\bgross\s+irr\b[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*%/gi]
  },
  {
    key: "moic",
    label: "MOIC",
    unit: "x",
    group: "Performance",
    severityBasis: "multiple",
    regexes: [/\bmoic\b[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*x/gi]
  },
  {
    key: "dpi",
    label: "DPI",
    unit: "x",
    group: "Performance",
    severityBasis: "multiple",
    regexes: [/\bdpi\b[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*x/gi]
  },
  {
    key: "tvpi",
    label: "TVPI",
    unit: "x",
    group: "Performance",
    severityBasis: "multiple",
    regexes: [/\btvpi\b[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*x/gi]
  },
  {
    key: "occupancy",
    label: "Occupancy",
    unit: "%",
    group: "Asset Operations",
    severityBasis: "percentage-points",
    regexes: [/\boccupancy\b[^0-9]{0,24}([0-9]+(?:\.[0-9]+)?)\s*%/gi]
  },
  {
    key: "nav",
    label: "NAV",
    unit: "$M",
    group: "Valuation",
    severityBasis: "currency",
    regexes: [
      /\bnav\b[^0-9$]{0,24}\$?([0-9]+(?:\.[0-9]+)?)\s*(?:m|mm|million)\b/gi,
      /\bnet\s+asset\s+value\b[^0-9$]{0,24}\$?([0-9]+(?:\.[0-9]+)?)\s*(?:m|mm|million)\b/gi
    ]
  },
  {
    key: "fund_size",
    label: "Fund Size",
    unit: "$B",
    group: "Fund Terms",
    severityBasis: "currency",
    regexes: [/\bfund\s+size\b[^0-9$]{0,24}\$?([0-9]+(?:\.[0-9]+)?)\s*(b|bn|billion|m|mm|million)\b/gi]
  },
  {
    key: "valuation_methodology",
    label: "Valuation Methodology",
    unit: "",
    group: "Valuation",
    severityBasis: "text",
    regexes: [/\bvaluation\s+methodology\b[^A-Za-z]{0,24}([A-Za-z][A-Za-z\s-]{2,48})/gi]
  },
  {
    key: "as_of_date",
    label: "As of Date",
    unit: "",
    group: "Dates",
    severityBasis: "date",
    regexes: [/\bas\s+of\b[^A-Za-z0-9]{0,12}([A-Z][a-z]+\s+[0-9]{1,2},\s+[0-9]{4})/g]
  }
];

const sampleFiles = [
  "Pitch Deck.pdf",
  "DDQ.docx",
  "Quarterly Report.pdf",
  "Track Record.xlsx",
  "Investment Memo.pptx"
];

const vesselLogoData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAYAAACg/AXsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG7SURBVDhPzZO7qupAFIa/NYmXJ9A3sBAFG3fnw/hcVim0EBHBS2GloDYqiJVgYRmx84KKiTOnMcHoPtsNpzk/DCzWzHzz869EisWi4R+lgkJEsCwrspRSKKXe+iLyPcQYw/1+jyytNVrrt74xUfPy9fVljDHkcjlKpRK32w2AeDzOaDQilUqRyWTCfiwWYzAYsFqtEBGMMdhBkUwmKZfLkRcSiQTZbJZCoRDpz+dzeERgjEFprRERZrMZvV4PrTXn8xnf97ler5xOp7D2fZ/xeMx0OkVE0FrDcyYAjuPgeR7xeDwMNgjctm1s26bVaoUuAikeoYoIm82GbreLbduRQwFovV4zmUwAQhch5FmO47Df7zHGhHAeoGazied5KBW9FhmxiOC6Ls1mExEJx2mMYbvd0u/34cUFr06C+VerVS6XC4lEAt/3ERE6nQ7H4/HNBa8QAKUUh8OBRqMRBup5Hu12G54eitx5bQRWK5UKtVqNdDrNcDjEdd3wu3jVGyTQ9Xplt9uhtaZer79uRyQ//cWWZZHP51kul29hPuuvTgDu9zuLxeJHAJ8gPIL+pI8nPrngN5Df6P+B/AGXvvZUSr6gbQAAAABJRU5ErkJggg==";

const embeddedSamples = {
  "Pitch Deck.pdf": `--- PAGE 1 ---
Fund VII Raise
Investor Presentation
As of March 31, 2026.

--- PAGE 11 ---
Portfolio Operations Snapshot
Fund IV reports occupancy of 94.0% for Q1 2026 after including signed but not yet commenced leases.
NAV is $418M as of March 31, 2026.
Valuation methodology: Market Comparable.

--- PAGE 22 ---
Track Record Summary
Fund IV Net IRR is 18.6% and Gross IRR is 22.1%.
MOIC is 1.82x, DPI is 0.42x, and TVPI is 1.64x.
Fund size is $1.4B.`,
  "DDQ.docx": `--- PAGE 2 ---
Due Diligence Questionnaire
Fund IV responses for Fund VII data room.
As of March 31, 2026.

--- PAGE 9 ---
Performance Detail
Fund IV Net IRR is 17.8%.
Gross IRR is 22.1%.
MOIC is 1.82x.
TVPI is 1.58x and DPI is 0.42x.

--- PAGE 14 ---
Portfolio Detail
Fund IV occupancy is 94.0% for Q1 2026.
Fund size is $1.35B.`,
  "Quarterly Report.pdf": `--- PAGE 1 ---
Quarterly Report
Fund IV reporting package.
As of March 31, 2026.

--- PAGE 18 ---
Operating Metrics
Fund IV occupancy is 92.0% for Q1 2026 based on current in-place leases.
NAV is $405M as of March 31, 2026.

--- PAGE 24 ---
Valuation Policy
Valuation methodology: Discounted Cash Flow.
Fund IV Net IRR is 18.6%.`,
  "Track Record.xlsx": `--- PAGE 1 ---
Track Record Workbook
Fund IV current model export.
As of March 31, 2026.

--- PAGE 3 ---
Performance Metrics
Fund IV Net IRR is 18.6%.
MOIC is 1.82x.
DPI is 0.42x.
TVPI is 1.64x.
NAV is $418M.
Fund size is $1.40B.`,
  "Investment Memo.pptx": `--- PAGE 4 ---
Investment Committee Memo
Fund IV support materials for Fund VII fundraising.
As of February 28, 2026.

--- PAGE 12 ---
Operating Narrative
Fund IV occupancy is 93.0% for Q1 2026 after adjusting for temporary move-outs.
Valuation methodology: Market Comparable.

--- PAGE 16 ---
Fund Facts
Fund size is $1.4B.
NAV is $418M.`
};

let state = {
  docs: [],
  issues: [],
  selectedIssueId: null,
  selectedDocId: "all",
  selectedSeverity: "all",
  activeTab: "issues",
  busy: false
};

const app = document.querySelector("#app");

function uid(prefix) {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

function fileType(name) {
  const ext = name.split(".").pop().toLowerCase();
  return ext.toUpperCase();
}

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

function splitPages(text) {
  const chunks = text.split(/(?:^|\n)---\s*PAGE\s+([0-9]+)\s*---\s*/i);
  if (chunks.length === 1) {
    return [{ page: 1, text }];
  }
  const pages = [];
  for (let i = 1; i < chunks.length; i += 2) {
    pages.push({ page: Number(chunks[i]), text: chunks[i + 1] || "" });
  }
  return pages;
}

function inferEntity(text) {
  const fund = text.match(/\bFund\s+[IVX0-9]+\b/i);
  const asset = text.match(/\b(?:Portfolio|Asset)\s+[A-Z][A-Za-z0-9 -]+/);
  return normalizeWhitespace((fund && fund[0]) || (asset && asset[0]) || "Fund IV");
}

function inferPeriod(text) {
  const quarter = text.match(/\bQ[1-4]\s+20[0-9]{2}\b/i);
  const date = text.match(/\b(?:March|June|September|December)\s+[0-9]{1,2},\s+20[0-9]{2}\b/);
  return normalizeWhitespace((quarter && quarter[0].toUpperCase()) || (date && date[0]) || "Current Raise");
}

function normalizeValue(raw, metric, multiplier) {
  if (metric.severityBasis === "text" || metric.severityBasis === "date") {
    return normalizeWhitespace(raw).replace(/[.;:,]+$/, "");
  }
  let value = Number(raw);
  if (metric.key === "fund_size" && multiplier && /^m/i.test(multiplier)) {
    value = value / 1000;
  }
  return Number(value.toFixed(3));
}

function displayValue(metric, value) {
  if (metric.severityBasis === "text" || metric.severityBasis === "date") return value;
  if (metric.key === "fund_size") return `$${value.toFixed(value >= 1 ? 1 : 2)}B`;
  if (metric.key === "nav") return `$${value.toFixed(0)}M`;
  if (metric.unit === "%") return `${value.toFixed(1)}%`;
  if (metric.unit === "x") return `${value.toFixed(2)}x`;
  return String(value);
}

function extractMetrics(doc) {
  const metrics = [];
  doc.pages.forEach((page) => {
    metricCatalog.forEach((metric) => {
      metric.regexes.forEach((regex) => {
        regex.lastIndex = 0;
        let match;
        while ((match = regex.exec(page.text)) !== null) {
          const sentence = getSentence(page.text, match.index);
          const value = normalizeValue(match[1], metric, match[2]);
          metrics.push({
            id: uid("metric"),
            key: metric.key,
            label: metric.label,
            group: metric.group,
            value,
            display: displayValue(metric, value),
            raw: match[0],
            page: page.page,
            location: `${doc.type} p.${page.page}`,
            sourceText: sentence,
            entity: inferEntity(`${sentence} ${page.text.slice(0, 500)}`),
            period: inferPeriod(`${sentence} ${page.text.slice(0, 700)}`),
            confidence: confidenceFor(metric, sentence),
            docId: doc.id,
            docName: doc.name
          });
        }
      });
    });
  });
  return dedupeMetrics(metrics);
}

function getSentence(text, index) {
  const start = Math.max(text.lastIndexOf(".", index - 1), text.lastIndexOf("\n", index - 1), 0);
  const endPeriod = text.indexOf(".", index + 1);
  const endBreak = text.indexOf("\n", index + 1);
  const candidates = [endPeriod, endBreak].filter((value) => value > -1);
  const end = candidates.length ? Math.min(...candidates) + 1 : Math.min(text.length, index + 180);
  return normalizeWhitespace(text.slice(start, end));
}

function confidenceFor(metric, sentence) {
  let score = 0.78;
  if (sentence.toLowerCase().includes(metric.label.toLowerCase().split(" ")[0])) score += 0.08;
  if (/\bFund\s+[IVX0-9]+\b/i.test(sentence)) score += 0.04;
  if (/\bQ[1-4]\s+20[0-9]{2}\b/i.test(sentence)) score += 0.04;
  return Math.min(score, 0.97);
}

function dedupeMetrics(metrics) {
  const seen = new Set();
  return metrics.filter((metric) => {
    const key = [metric.docId, metric.key, metric.display, metric.page, metric.sourceText].join("|");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function parseFile(file) {
  const text = await file.text();
  const doc = {
    id: uid("doc"),
    name: file.name,
    type: fileType(file.name),
    pages: splitPages(text),
    uploadedAt: new Date(),
    status: "Parsed",
    size: file.size
  };
  doc.metrics = extractMetrics(doc);
  return doc;
}

function compareValues(metricKey, values) {
  const catalog = metricCatalog.find((item) => item.key === metricKey);
  if (!catalog || values.length < 2) return null;
  const first = values[0];
  const unique = [...new Set(values.map((item) => String(item.value).toLowerCase()))];
  if (unique.length < 2) return null;

  if (catalog.severityBasis === "text" || catalog.severityBasis === "date") {
    return {
      delta: "Different source language",
      severity: catalog.severityBasis === "text" ? "High" : "Medium",
      reason: `${catalog.label} is not consistent across active materials.`
    };
  }

  const numericValues = values.map((item) => item.value);
  const min = Math.min(...numericValues);
  const max = Math.max(...numericValues);
  const diff = Number((max - min).toFixed(3));
  let severity = "Low";
  let delta = `${diff}`;
  let reason = `${catalog.label} differs across investor-facing documents.`;

  if (catalog.severityBasis === "basis-points") {
    const bps = Math.round(diff * 100);
    delta = `${bps} bps`;
    severity = bps >= 75 ? "High" : bps >= 25 ? "Medium" : "Low";
    reason = `${catalog.label} differs by ${bps} basis points, enough to trigger LP diligence questions.`;
  } else if (catalog.severityBasis === "percentage-points") {
    delta = `${diff.toFixed(1)} pts`;
    severity = diff >= 2 ? "High" : diff >= 1 ? "Medium" : "Low";
    reason = `${catalog.label} differs by ${diff.toFixed(1)} percentage points between materials.`;
  } else if (catalog.severityBasis === "currency") {
    const pct = max ? (diff / max) * 100 : 0;
    delta = catalog.key === "fund_size" ? `$${diff.toFixed(2)}B` : `$${diff.toFixed(0)}M`;
    severity = pct >= 3 ? "High" : pct >= 1 ? "Medium" : "Low";
    reason = `${catalog.label} has a ${pct.toFixed(1)}% spread across sources.`;
  } else if (catalog.severityBasis === "multiple") {
    delta = `${diff.toFixed(2)}x`;
    severity = diff >= 0.15 ? "High" : diff >= 0.05 ? "Medium" : "Low";
  }

  return {
    delta,
    severity,
    reason,
    anchor: first
  };
}

function detectConflicts(docs) {
  const allMetrics = docs.flatMap((doc) => doc.metrics);
  const groups = new Map();
  allMetrics.forEach((metric) => {
    const entity = metric.entity.toLowerCase();
    const groupKey = `${metric.key}|${entity}`;
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey).push(metric);
  });

  const issues = [];
  groups.forEach((metrics, groupKey) => {
    const docsRepresented = new Set(metrics.map((metric) => metric.docId));
    if (docsRepresented.size < 2) return;
    const [metricKey] = groupKey.split("|");
    const comparison = compareValues(metricKey, metrics);
    if (!comparison) return;
    const catalog = metricCatalog.find((item) => item.key === metricKey);
    const ordered = [...metrics].sort((a, b) => a.docName.localeCompare(b.docName));
    issues.push({
      id: uid("issue"),
      title: `${catalog.label} conflict`,
      metricKey,
      metricLabel: catalog.label,
      entity: ordered[0].entity,
      period: ordered[0].period,
      severity: comparison.severity,
      delta: comparison.delta,
      reason: comparison.reason,
      sources: ordered,
      explanation: explainIssue(catalog, comparison, ordered),
      recommendation: recommendIssue(catalog, comparison, ordered)
    });
  });

  return issues.sort((a, b) => severityRank(b.severity) - severityRank(a.severity));
}

function severityRank(severity) {
  return { High: 3, Medium: 2, Low: 1 }[severity] || 0;
}

function explainIssue(catalog, comparison, sources) {
  const names = sources.map((source) => source.docName).join(", ");
  if (catalog.key === "occupancy") {
    return "The deck and reporting materials appear to use different occupancy figures. LPs may read that as stale operating data unless the deck clearly distinguishes stabilized occupancy from current occupancy.";
  }
  if (catalog.key === "net_irr") {
    return "The net IRR spread is large enough to move the conversation away from performance and toward source reliability. This usually means one document was refreshed after another.";
  }
  if (catalog.key === "valuation_methodology") {
    return "The materials describe different valuation methods. Even if both are defensible, the narrative should explain when each method applies.";
  }
  return `${catalog.label} differs across ${names}. The values may be valid in different contexts, but the current materials do not make that distinction obvious.`;
}

function recommendIssue(catalog, comparison, sources) {
  const newest = sources.find((source) => /quarterly|track/i.test(source.docName)) || sources[0];
  if (catalog.severityBasis === "text") {
    return `Choose a single methodology description or add a footnote reconciling ${sources.map((s) => s.display).join(" vs ")}.`;
  }
  return `Treat ${newest.docName} as the source of truth, update stale values, and add an internal note explaining the change before granting LP access.`;
}

function consistencyScore(issues) {
  const penalty = issues.reduce((sum, issue) => sum + ({ High: 8, Medium: 4, Low: 2 }[issue.severity] || 0), 0);
  return Math.max(0, 100 - penalty);
}

async function loadSamples() {
  state.busy = true;
  render();
  try {
    const files = await Promise.all(
      sampleFiles.map(async (name) => {
        let blob;
        if (window.location.protocol === "file:") {
          blob = new Blob([embeddedSamples[name]], { type: "text/plain" });
        } else {
          try {
          const response = await fetch(`./sample-data/${encodeURIComponent(name)}`);
          if (!response.ok) throw new Error(`Missing sample ${name}`);
          blob = await response.blob();
          } catch {
          blob = new Blob([embeddedSamples[name]], { type: "text/plain" });
          }
        }
        return new File([blob], name, { type: "text/plain" });
      })
    );
    await ingestFiles(files);
  } finally {
    state.busy = false;
    render();
  }
}

async function ingestFiles(files) {
  const accepted = [...files].filter((file) => /\.(pdf|pptx|docx|xlsx)$/i.test(file.name));
  const parsed = [];
  for (const file of accepted) {
    parsed.push(await parseFile(file));
  }
  state.docs = parsed;
  state.issues = detectConflicts(parsed);
  state.selectedIssueId = state.issues[0]?.id || null;
}

function filteredIssues() {
  return state.issues.filter((issue) => {
    const docMatch = state.selectedDocId === "all" || issue.sources.some((source) => source.docId === state.selectedDocId);
    const sevMatch = state.selectedSeverity === "all" || issue.severity === state.selectedSeverity;
    return docMatch && sevMatch;
  });
}

function allMetrics() {
  return state.docs.flatMap((doc) => doc.metrics);
}

function selectedIssue() {
  return state.issues.find((issue) => issue.id === state.selectedIssueId) || filteredIssues()[0] || null;
}

function html(strings, ...values) {
  return strings.reduce((out, string, i) => `${out}${string}${values[i] ?? ""}`, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function highlight(text, raw) {
  const safe = escapeHtml(text);
  const needle = escapeHtml(raw);
  if (!needle) return safe;
  return safe.replace(needle, `<mark>${needle}</mark>`);
}

function render() {
  const score = consistencyScore(state.issues);
  const issues = filteredIssues();
  const issue = selectedIssue();
  const high = state.issues.filter((item) => item.severity === "High").length;
  const medium = state.issues.filter((item) => item.severity === "Medium").length;
  const low = state.issues.filter((item) => item.severity === "Low").length;

  app.innerHTML = html`
    <main class="vessel-page">
      <header class="site-nav">
        <div class="brand">
          <span class="brand-mark"><img src="${vesselLogoData}" alt="Vessel logo" /></span>
          <strong>Vessel</strong>
        </div>
        <nav class="nav" aria-label="Prototype sections">
          <button class="nav-item ${state.activeTab === "issues" ? "active" : ""}" data-tab="issues" type="button">Dashboard</button>
          <button class="nav-item ${state.activeTab === "documents" ? "active" : ""}" data-tab="documents" type="button">Documents</button>
          <button class="nav-item ${state.activeTab === "audit" ? "active" : ""}" data-tab="audit" type="button">Audit Trail</button>
          <button class="nav-item ${state.activeTab === "lp" ? "active" : ""}" data-tab="lp" type="button">LP Room</button>
        </nav>
        <button class="demo-pill" data-action="sample" type="button">${state.busy ? "Loading..." : "Run demo"}</button>
      </header>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Investor readiness check</p>
          <h1>Raise smarter, report better and build trust at scale.</h1>
          <p>AI-native consistency control for decks, DDQs, quarterly reports, track records and LP data rooms.</p>
          <div class="hero-actions">
            <button class="primary" data-action="sample" type="button">${state.busy ? "Loading..." : "Load sample set"}</button>
            <button class="ghost dark" data-action="reset" type="button">Reset workspace</button>
          </div>
        </div>
        <div class="hero-console">
          <div class="console-head">
            <span>Fund VII Raise</span>
            <strong>${score}</strong>
          </div>
          <div class="console-meter"><i style="width:${score}%"></i></div>
          <div class="console-grid">
            <div><span>High</span><strong>${high}</strong></div>
            <div><span>Medium</span><strong>${medium}</strong></div>
            <div><span>Docs</span><strong>${state.docs.length}</strong></div>
          </div>
          <p>${state.issues.length ? `${state.issues.length} conflicts are blocking a clean LP handoff.` : "Load the sample set to run the investor material audit."}</p>
        </div>
      </section>

      <section class="main-panel app-shell">
        <header class="topbar">
          <div>
            <p class="eyebrow">Fundraising operations</p>
            <h2>Material control workspace</h2>
          </div>
          <div class="workspace-chip">
            <span>Workspace</span>
            <strong>${state.docs.length || 0} active materials</strong>
          </div>
        </header>

        <section class="upload-band" id="drop-zone">
          <input id="file-input" type="file" multiple accept=".pdf,.pptx,.docx,.xlsx" />
          <div>
            <strong>Upload PDF, PPTX, DOCX, or XLSX materials</strong>
            <span>Drop a deck, DDQ, quarterly report, memo, or track record. Text-based uploads parse directly in this prototype.</span>
          </div>
          <label for="file-input" class="secondary">Choose files</label>
        </section>

        ${renderActiveView({ score, issues, issue, high, medium, low })}
      </section>
    </main>
  `;

  bindEvents();
}

function renderActiveView(summary) {
  if (state.activeTab === "documents") return renderDocumentsView();
  if (state.activeTab === "audit") return renderAuditView();
  if (state.activeTab === "lp") return renderLpRoomView(summary.score);
  return renderDashboardView(summary);
}

function renderDashboardView({ score, issues, issue, high, medium, low }) {
  return html`
    <section class="score-grid">
      <div class="score-panel">
        <span>Consistency Score</span>
        <strong>${score}</strong>
        <div class="meter"><i style="width:${score}%"></i></div>
      </div>
      <div class="stat"><span>High</span><strong>${high}</strong></div>
      <div class="stat"><span>Medium</span><strong>${medium}</strong></div>
      <div class="stat"><span>Low</span><strong>${low}</strong></div>
      <div class="stat"><span>Metrics</span><strong>${allMetrics().length}</strong></div>
    </section>

    <section class="workbench">
      <div class="feed">
        <div class="feed-head">
          <div>
            <h2>Issue Feed</h2>
            <span>${issues.length} conflicts requiring review</span>
          </div>
          <div class="filters">
            <select id="doc-filter" aria-label="Filter by document">
              <option value="all">All documents</option>
              ${state.docs.map((doc) => `<option value="${doc.id}" ${state.selectedDocId === doc.id ? "selected" : ""}>${escapeHtml(doc.name)}</option>`).join("")}
            </select>
            <select id="severity-filter" aria-label="Filter by severity">
              ${["all", "High", "Medium", "Low"].map((sev) => `<option value="${sev}" ${state.selectedSeverity === sev ? "selected" : ""}>${sev === "all" ? "All severities" : sev}</option>`).join("")}
            </select>
          </div>
        </div>
        ${issues.length ? issues.map(renderIssueRow).join("") : renderEmptyState()}
      </div>

      <aside class="detail">
        ${issue ? renderIssueDetail(issue) : renderNoIssue()}
      </aside>
    </section>

    <section class="document-strip">
      <div class="section-title">
        <h2>Parsed Documents</h2>
        <span>Every extracted figure keeps a source location for auditability.</span>
      </div>
      <div class="doc-grid">
        ${state.docs.map(renderDoc).join("") || `<div class="empty-wide">Load the sample set to see parsed investor materials.</div>`}
      </div>
    </section>
  `;
}

function renderDocumentsView() {
  const metrics = allMetrics();
  return html`
    <section class="document-strip">
      <div class="section-title">
        <div>
          <h2>Documents</h2>
          <span>Parsed materials, extraction counts, and source-linked metrics.</span>
        </div>
      </div>
      <div class="doc-grid large">
        ${state.docs.map(renderDoc).join("") || `<div class="empty-wide">Load the sample set to inspect documents.</div>`}
      </div>
    </section>
    <section class="table-panel">
      <div class="section-title">
        <div>
          <h2>Extracted Metrics</h2>
          <span>${metrics.length} structured figures normalized for comparison.</span>
        </div>
      </div>
      <div class="metric-table">
        ${metrics.length ? metrics.map(renderMetricRow).join("") : `<div class="empty-wide">No extracted metrics yet.</div>`}
      </div>
    </section>
  `;
}

function renderMetricRow(metric) {
  return html`
    <div class="metric-row">
      <strong>${escapeHtml(metric.label)}</strong>
      <span>${escapeHtml(metric.display)}</span>
      <span>${escapeHtml(metric.docName)}</span>
      <span>${escapeHtml(metric.location)}</span>
      <small>${escapeHtml(metric.sourceText)}</small>
    </div>
  `;
}

function renderAuditView() {
  const events = buildAuditEvents();
  return html`
    <section class="table-panel">
      <div class="section-title">
        <div>
          <h2>Audit Trail</h2>
          <span>Reconciliation history a sponsor can show internally before LP access.</span>
        </div>
      </div>
      <div class="timeline">
        ${events.length ? events.map(renderAuditEvent).join("") : `<div class="empty-wide">Load the sample set to generate audit events.</div>`}
      </div>
    </section>
  `;
}

function buildAuditEvents() {
  if (!state.docs.length) return [];
  const parsed = state.docs.map((doc) => ({
    title: `${doc.name} parsed`,
    meta: `${doc.metrics.length} metrics extracted across ${doc.pages.length} pages`,
    status: "Parsed"
  }));
  const flagged = state.issues.slice(0, 6).map((issue) => ({
    title: `${issue.title} flagged`,
    meta: `${issue.severity} severity - ${issue.delta} - ${issue.sources.map((s) => s.docName).join(" vs ")}`,
    status: issue.severity
  }));
  const gate = {
    title: state.issues.some((issue) => issue.severity === "High") ? "LP Room blocked" : "LP Room cleared",
    meta: state.issues.some((issue) => issue.severity === "High")
      ? "High-severity conflicts must be resolved before sharing."
      : "No high-severity conflicts remain.",
    status: state.issues.some((issue) => issue.severity === "High") ? "Blocked" : "Ready"
  };
  return [...parsed, ...flagged, gate];
}

function renderAuditEvent(event) {
  return html`
    <div class="timeline-row">
      <span class="timeline-dot"></span>
      <div>
        <strong>${escapeHtml(event.title)}</strong>
        <small>${escapeHtml(event.meta)}</small>
      </div>
      <b>${escapeHtml(event.status)}</b>
    </div>
  `;
}

function renderLpRoomView(score) {
  const blockers = state.issues.filter((issue) => issue.severity === "High");
  const warnings = state.issues.filter((issue) => issue.severity === "Medium");
  const ready = state.docs.length > 0 && blockers.length === 0;
  return html`
    <section class="lp-hero">
      <div>
        <span>LP access status</span>
        <h2>${ready ? "Ready to share" : "Hold before sharing"}</h2>
        <p>${ready ? "No high-severity conflicts are blocking LP access." : `${blockers.length} high-severity conflicts need owner review before the data room opens.`}</p>
      </div>
      <strong>${score}</strong>
    </section>
    <section class="lp-grid">
      <div class="table-panel">
        <div class="section-title">
          <div>
            <h2>Share Package</h2>
            <span>Materials staged for LP access.</span>
          </div>
        </div>
        <div class="check-list">
          ${state.docs.map((doc) => html`
            <div class="check-row">
              <span>${doc.metrics.length ? "Ready" : "Needs parse"}</span>
              <strong>${escapeHtml(doc.name)}</strong>
              <small>${doc.metrics.length} extracted metrics</small>
            </div>
          `).join("") || `<div class="empty-wide">Load the sample set to stage a package.</div>`}
        </div>
      </div>
      <div class="table-panel">
        <div class="section-title">
          <div>
            <h2>Access Gate</h2>
            <span>What must be resolved before sharing.</span>
          </div>
        </div>
        <div class="check-list">
          <div class="gate-row ${blockers.length ? "blocked" : "ready"}"><strong>High conflicts</strong><span>${blockers.length}</span></div>
          <div class="gate-row warn"><strong>Medium warnings</strong><span>${warnings.length}</span></div>
          <div class="gate-row ready"><strong>Source citations</strong><span>${state.docs.length ? "Complete" : "Pending"}</span></div>
          <div class="gate-row ready"><strong>AI explanations</strong><span>${state.issues.length ? "Generated" : "Pending"}</span></div>
        </div>
      </div>
    </section>
    <section class="table-panel">
      <div class="section-title">
        <div>
          <h2>LP-Facing Exceptions</h2>
          <span>Only unresolved issues that would damage credibility appear here.</span>
        </div>
      </div>
      <div class="metric-table">
        ${blockers.length ? blockers.map((issue) => html`
          <div class="metric-row">
            <strong>${escapeHtml(issue.title)}</strong>
            <span>${escapeHtml(issue.delta)}</span>
            <span>${escapeHtml(issue.sources.map((s) => s.docName).join(" vs "))}</span>
            <span>${escapeHtml(issue.recommendation)}</span>
          </div>
        `).join("") : `<div class="empty-wide">No LP-facing blockers.</div>`}
      </div>
    </section>
  `;
}

function renderIssueRow(issue) {
  return html`
    <button class="issue-row ${state.selectedIssueId === issue.id ? "selected" : ""}" data-issue="${issue.id}" type="button">
      <span class="severity ${issue.severity.toLowerCase()}">${issue.severity}</span>
      <span class="issue-main">
        <strong>${escapeHtml(issue.title)}</strong>
        <small>${escapeHtml(issue.entity)} - ${escapeHtml(issue.delta)} - ${issue.sources.length} sources</small>
      </span>
      <span class="chevron">&gt;</span>
    </button>
  `;
}

function renderIssueDetail(issue) {
  return html`
    <div class="detail-head">
      <span class="severity ${issue.severity.toLowerCase()}">${issue.severity}</span>
      <h2>${escapeHtml(issue.title)}</h2>
      <p>${escapeHtml(issue.reason)}</p>
    </div>
    <div class="diff-list">
      ${issue.sources.map((source) => html`
        <div class="source">
          <div>
            <strong>${escapeHtml(source.docName)}</strong>
            <span>${escapeHtml(source.location)} - ${Math.round(source.confidence * 100)}% confidence</span>
          </div>
          <b>${escapeHtml(source.display)}</b>
          <p>${highlight(source.sourceText, source.raw)}</p>
        </div>
      `).join("")}
    </div>
    <div class="ai-box">
      <span>AI explanation</span>
      <p>${escapeHtml(issue.explanation)}</p>
      <strong>Suggested resolution</strong>
      <p>${escapeHtml(issue.recommendation)}</p>
    </div>
  `;
}

function renderDoc(doc) {
  return html`
    <div class="doc">
      <div class="doc-icon">${doc.type}</div>
      <div>
        <strong>${escapeHtml(doc.name)}</strong>
        <span>${doc.metrics.length} metrics - ${doc.pages.length} pages</span>
      </div>
    </div>
  `;
}

function renderEmptyState() {
  return html`
    <div class="empty">
      <strong>No conflicts yet</strong>
      <span>Load the sample set or upload active materials to run a readiness check.</span>
    </div>
  `;
}

function renderNoIssue() {
  return html`
    <div class="empty detail-empty">
      <strong>No issue selected</strong>
      <span>Conflicts will appear here with source text and suggested resolutions.</span>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      render();
    });
  });
  document.querySelector("[data-action='sample']")?.addEventListener("click", loadSamples);
  document.querySelector("[data-action='reset']")?.addEventListener("click", () => {
    state = { ...state, docs: [], issues: [], selectedIssueId: null, selectedDocId: "all", selectedSeverity: "all" };
    render();
  });
  document.querySelector("#file-input")?.addEventListener("change", async (event) => {
    state.busy = true;
    render();
    await ingestFiles(event.target.files);
    state.busy = false;
    render();
  });
  document.querySelectorAll("[data-issue]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedIssueId = button.dataset.issue;
      render();
    });
  });
  document.querySelector("#doc-filter")?.addEventListener("change", (event) => {
    state.selectedDocId = event.target.value;
    state.selectedIssueId = null;
    render();
  });
  document.querySelector("#severity-filter")?.addEventListener("change", (event) => {
    state.selectedSeverity = event.target.value;
    state.selectedIssueId = null;
    render();
  });

  const dropZone = document.querySelector("#drop-zone");
  if (dropZone) {
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropZone.classList.add("dragging");
    });
    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragging"));
    dropZone.addEventListener("drop", async (event) => {
      event.preventDefault();
      dropZone.classList.remove("dragging");
      state.busy = true;
      render();
      await ingestFiles(event.dataTransfer.files);
      state.busy = false;
      render();
    });
  }
}

render();
