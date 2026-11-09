"use strict";

const content = document.querySelector("#content");
const topLabel = document.querySelector("#top-label");
const publicEdition = true;
const storageKey = "growing-under-glass-progress-v1";
const languageKey = "growing-under-glass-language-v1";
let language = "en";
let completed = [];
let index = null;
let indexError = "";
let libraryQuery = "";
let libraryKind = "all";
let storageError = false;

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (Array.isArray(saved)) completed = saved.filter(id => lessons.some(lesson => lesson.id === id));
} catch (error) {
  storageError = true;
  console.warn("Progress could not be loaded from browser storage.", error);
}
try {
  const savedLanguage = localStorage.getItem(languageKey);
  if (savedLanguage === "en" || savedLanguage === "es") language = savedLanguage;
} catch (error) {
  storageError = true;
  console.warn("Language could not be loaded from browser storage.", error);
}

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);
const pad = number => String(number).padStart(2, "0");
const timeLabel = seconds => `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`;
const sourceById = id => index?.sources.find(source => source.id === id);
const t = () => messages[language];
const localizedLesson = lesson => language === "es"
  ? {...lesson, ...esLessons[lesson.id], category: esCategories[lesson.category], time: t().readTime(lesson.time.match(/^\d+/)[0])}
  : lesson;
const referenceDetail = detail => {
  if (language === "en") return detail || t().external;
  const parts = (detail || "").split(" · ");
  const labels = {
    REVIEW: "REVISIÓN", TEXTBOOK: "LIBRO DE TEXTO", "PLANT ANATOMY": "ANATOMÍA VEGETAL",
    STEMS: "TALLOS", ROOTS: "RAÍCES", LEAVES: "HOJAS", REPRODUCTION: "REPRODUCCIÓN",
    "PLANT PHYSIOLOGY": "FISIOLOGÍA VEGETAL", "PLANT NUTRITION": "NUTRICIÓN VEGETAL",
    PHOTOSYNTHESIS: "FOTOSÍNTESIS", SIGNALING: "SEÑALIZACIÓN"
  };
  return parts.length > 1 ? parts.map(part => labels[part] || part).join(" · ") : t().external;
};
const issueText = issue => {
  if (language === "en") return escapeHTML(issue);
  let match;
  if ((match = issue.match(/^The PDF extractor reported (\d+) encoding or parsing warnings; check the original for text accuracy\.$/)))
    return `El extractor del PDF informó de ${match[1]} avisos de codificación o análisis; comprueba la exactitud del texto en el original.`;
  if ((match = issue.match(/^(\d+) of (\d+) pages have fewer than 100 extracted characters; they may be blank, image-based, or poorly extracted\.$/)))
    return `${match[1]} de ${match[2]} páginas tienen menos de 100 caracteres extraídos; pueden estar en blanco, ser imágenes o haberse extraído incorrectamente.`;
  if ((match = issue.match(/^OCR was attempted on (\d+) pages\. OCR may contain errors; verify against the original\.$/)))
    return `Se intentó aplicar OCR a ${match[1]} páginas. El OCR puede contener errores; comprueba el original.`;
  if (issue === "Most pages have little extractable text. OCR or manual review is needed; no OCR was performed.")
    return "La mayoría de las páginas tienen poco texto extraíble. Se necesita OCR o revisión manual; no se aplicó OCR.";
  if ((match = issue.match(/^Page (\d+) extraction failed: (.*)$/)))
    return `Falló la extracción de la página ${match[1]}. ${t().errorOriginal}: <span lang="en">${escapeHTML(match[2])}</span>`;
  if ((match = issue.match(/^Source extraction failed: (.*)$/)))
    return `Falló la extracción de la fuente. ${t().errorOriginal}: <span lang="en">${escapeHTML(match[1])}</span>`;
  return `${t().errorOriginal}: <span lang="en">${escapeHTML(issue)}</span>`;
};
const sourceLink = (source, location = {}) => source.kind === "video" && source.url
  ? `${source.url}${location.at !== undefined ? `&t=${location.at}s` : ""}`
  : `../${encodeURIComponent(source.id)}${location.page ? `#page=${location.page}` : ""}`;
const reference = ref => {
  if (ref.url) return `<li><a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer"><span lang="en">${escapeHTML(ref.title)}</span><span>${escapeHTML(referenceDetail(ref.detail))} ↗</span></a></li>`;
  if (publicEdition) return "";
  const source = sourceById(ref.id);
  if (!index && !indexError) return `<li>${t().sourceLoading}</li>`;
  if (!index) return `<li class="reference-missing">${t().sourceUnavailable}: ${escapeHTML(ref.id)}</li>`;
  if (!source) return `<li class="reference-missing">${t().sourceMissing}: ${escapeHTML(ref.id)}</li>`;
  const place = ref.page ? t().pdfPage(ref.page) : ref.at !== undefined ? timeLabel(ref.at) : source.kind === "text" ? t().textSource : t().source;
  return `<li><a href="${escapeHTML(sourceLink(source, ref))}" target="_blank" rel="noopener noreferrer"><span lang="en">${escapeHTML(source.title)}</span><span>${place} ↗</span></a></li>`;
};
const lessonCard = (original, position) => {
  const lesson = localizedLesson(original);
  return `
  <a class="lesson-card" href="#lesson/${lesson.id}">
    <div class="card-top"><span class="card-number">${pad(position + 1)}</span><span class="card-status">${completed.includes(lesson.id) ? t().completedCard : lesson.time}</span></div>
    <div class="card-category">${lesson.category}</div>
    <h3>${lesson.title}</h3><p>${lesson.intro}</p>
    <div class="card-bottom"><span>${t().exploreLesson}</span><span aria-hidden="true">↗</span></div>
  </a>`;
};
const progress = () => `<div class="progress-label"><span>${t().yourProgress}</span><strong>${t().lessonCount(completed.length, lessons.length)}</strong></div><div class="progress-track"><div style="width:${completed.length / lessons.length * 100}%"></div></div>`;

function home() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> ${t().heroKicker}</div>
        <h1>${t().heroOne}<br><em>${t().heroTwo}</em></h1>
        <p>${t().heroText}</p>
        <div class="hero-actions"><a class="button button-dark" href="#lesson/big-picture">${t().start} <span>↗</span></a><a class="text-link" href="#learn">${t().explorePath} <span>→</span></a></div>
        <div class="hero-foot"><span>✳</span> ${t().noCoat} <i></i> ${t().curiosity}</div>
      </div>
      <div class="hero-art" role="img" aria-label="${t().artAlt}">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-label art-label-top"><span>${t().beginning}</span><b>${t().smallest}<br>${t().things}</b></div>
        <svg viewBox="0 0 310 380" aria-hidden="true">
          <ellipse cx="157" cy="331" rx="100" ry="13" fill="#75885d" opacity=".14"/>
          <path d="M92 90h128l-9 206q-2 26-28 29h-58q-26-3-28-29z" fill="#f3f6e8" fill-opacity=".72" stroke="#829477" stroke-width="2"/>
          <path d="M99 264q55 11 113 0l-1 32q-2 26-28 29h-58q-26-3-28-29z" fill="#d0d99c" fill-opacity=".85"/>
          <path d="M91 91h130v-15q0-9-9-9H100q-9 0-9 9z" fill="#607653"/>
          <path d="M101 76h110M100 83h112" stroke="#a9b79b" stroke-width="2" opacity=".5"/>
          <path d="M154 277q1-70 5-128M157 220q-26-33-52-43M158 196q25-35 52-47M157 242q24-18 46-19" fill="none" stroke="#577650" stroke-width="3"/>
          <path d="M108 182q-34-4-36-38 35-1 52 38-9 3-16 0M159 198q4-43 50-52-1 38-50 52M156 171q-26-13-25-49 32 6 25 49M158 229q15-24 47-15-8 27-47 15" fill="#6f9267"/>
          <path d="M105 295q51 7 100 0" fill="none" stroke="#afbd82" stroke-width="2"/>
          <path d="M108 107l4 79" stroke="white" stroke-width="5" stroke-linecap="round" opacity=".55"/>
        </svg>
        <div class="art-label art-label-bottom"><span>GROWING UNDER GLASS</span><b>${t().artOne}<br>${t().artTwo}</b></div>
        <span class="art-sparkle sparkle-one">✳</span><span class="art-sparkle sparkle-two">✦</span>
      </div>
    </section>
    <div class="content-wrap">
      <div class="intro-strip"><div><span class="section-kicker">${t().welcome}</span><h2>${t().beginningHeading}</h2></div></div>
      <section class="journey"><div class="section-heading"><div><span class="section-kicker">${t().little}</span><h2>${t().learningPath}</h2><p>${t().lessonsIntro(lessons.length)}</p></div><a class="text-link" href="#learn">${t().viewAll} <span>→</span></a></div>
        <div class="card-grid">${lessons.slice(0, 3).map(lessonCard).join("")}</div>
      </section>
      <div class="note-panel"><strong>${practicalText[language].title}</strong><p>${practicalText[language].intro}</p><a class="text-link" href="#practical">${practicalText[language].nav} →</a></div>
      <section class="home-bottom"><div><span class="section-kicker">${t().pace}</span><h2>${t().expertOne}<br><em>${t().expertTwo}</em></h2><p>${t().progressText}</p><a class="text-link" href="#learn">${t().continue} →</a></div><div class="progress-box"><span class="progress-icon">✳</span>${progress()}<p>${completed.length ? t().progressSome : t().progressNone}</p></div></section>
    </div>`;
}

function learn() {
  return `<div class="content-wrap inner-page"><div class="page-heading"><span class="section-kicker">${t().pathKicker}</span><h1>${t().pathTitleOne} <em>${t().pathTitleTwo}</em></h1><p>${t().pathIntro}</p></div>
    <div class="path-progress">${progress()}</div>${trackDefinitions.map((track, i) => `<section class="track"><div class="track-heading"><h2>${escapeHTML(language === "es" ? esTracks[i][0] : track.title)}</h2><p>${escapeHTML(language === "es" ? esTracks[i][1] : track.description)}</p></div><div class="card-grid">${track.ids.map(id => { const lesson = lessons.find(item => item.id === id); return lessonCard(lesson, lessons.indexOf(lesson)); }).join("")}</div></section>`).join("")}
    <div class="note-panel"><strong>${t().beforeBegin}</strong><p>${t().pathSafety}</p></div></div>`;
}

function lessonPage(original) {
  const number = lessons.indexOf(original);
  const lesson = localizedLesson(original);
  const publicReferences = original.refs.filter(ref => ref.url);
  return `<div class="content-wrap lesson-layout"><article>
    <a class="back-link" href="#learn">← ${t().allLessons}</a>
    <div class="lesson-header"><span class="section-kicker">${t().lesson} ${pad(number + 1)} &nbsp; / &nbsp; ${lesson.category} &nbsp; / &nbsp; ${lesson.time}</span><h1>${lesson.title}<span class="heading-dot">.</span></h1><p>${lesson.intro}</p></div>
    <div class="takeaway"><span>✳ &nbsp; ${t().shortVersion}</span><p>${lesson.takeaway}</p></div>
    ${lesson.sections.map((section, i) => { const image = lessonIllustrations[original.id]?.[original.sections[i].heading]; return `<section class="lesson-section"><h2>${section.heading}</h2>${(section.paragraphs || []).map(p => `<p>${escapeHTML(p)}</p>`).join("")}${section.list ? `<ul>${section.list.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>` : ""}${section.note ? `<div class="safety"><strong>${t().safety}</strong><p>${escapeHTML(section.note)}</p></div>` : ""}${image ? illustration(image) : ""}</section>`; }).join("")}
    <div class="lesson-complete"><div><strong>${t().finished}</strong><p>${t().markText}</p></div><button class="button button-dark" id="complete-lesson" data-id="${lesson.id}">${completed.includes(lesson.id) ? t().marked : t().mark} <span>↗</span></button></div>
    <div class="lesson-next">${number > 0 ? `<a href="#lesson/${lessons[number - 1].id}">← ${t().previous}</a>` : "<span></span>"}${number < lessons.length - 1 ? `<a href="#lesson/${lessons[number + 1].id}">${t().next}: ${localizedLesson(lessons[number + 1]).title} →</a>` : `<a href="#library">${t().exploreLibrary} →</a>`}</div>
    </article><aside class="lesson-aside"><div class="aside-card"><span class="section-kicker">${t().keepGrowing}</span>${progress()}</div>${publicReferences.length ? `<div class="aside-card"><span class="section-kicker">${t().sourceKicker}</span><h3>${t().readingOne}<br>${t().readingTwo}</h3><p>${t().readingText}</p><ul class="references">${publicReferences.map(reference).join("")}</ul></div>` : ""}</aside></div>`;
}

function renderLibraryResults() {
  const results = document.querySelector("#library-results");
  if (!results) return;
  if (!index) {
    results.innerHTML = indexError ? `<div class="empty-state"><strong>${t().loadFailed}</strong><p>${t().errorOriginal}: <span lang="en">${escapeHTML(indexError)}</span>. ${t().loadHint}</p></div>` : `<p class="muted">${t().loading}</p>`;
    return;
  }
  const query = libraryQuery.trim().toLocaleLowerCase();
  const filtered = index.sources.filter(source => libraryKind === "all" || source.kind === libraryKind);
  if (!query) {
    results.innerHTML = `<div class="result-heading"><strong>${t().sourceCount(filtered.length)}</strong><span>${t().browseHint}</span></div><div class="source-list">${filtered.map(source => `
      <article class="source-row"><div class="source-icon">${source.kind === "pdf" ? "▤" : source.kind === "text" ? "≡" : "▷"}</div><div><span class="source-type">${source.kind === "pdf" ? `PDF · ${t().pages(source.pages ?? "?")}` : source.kind === "text" ? t().textSource : t().transcript}</span><h3 lang="en">${escapeHTML(source.title)}</h3><p>${t().indexed(source.segments.length, source.kind)}${source.issues.length ? ` · ${t().issues(source.issues.length)}` : ""}</p>${source.issues.length ? `<details><summary>${t().extraction}</summary>${source.issues.map(issue => `<p>${issueText(issue)}</p>`).join("")}</details>` : ""}</div><a class="source-open" href="${escapeHTML(sourceLink(source))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(t().open(source.title))}">↗</a></article>`).join("")}</div>`;
    return;
  }
  const matches = [];
  for (const source of filtered) {
    for (const segment of source.segments) {
      const position = segment.text.toLocaleLowerCase().indexOf(query);
      if (position !== -1) matches.push({source, segment, position});
    }
  }
  results.innerHTML = `<div class="result-heading"><strong>${t().matches(matches.length)}</strong><span>${matches.length > 50 ? t().first50 : t().localSources}</span></div>${matches.length ? `<div class="source-list">${matches.slice(0, 50).map(({source, segment, position}) => {
    const start = Math.max(0, position - 100);
    const end = Math.min(segment.text.length, position + query.length + 150);
    const snippet = `${start ? "…" : ""}${segment.text.slice(start, end)}${end < segment.text.length ? "…" : ""}`;
    const location = source.kind === "text" ? t().textPart(segment.part) : segment.page ? `${t().pdfResult(segment.page)}${segment.ocr ? ` · ${t().ocrText}` : ""}` : `${t().videoResult} · ${timeLabel(segment.at)}`;
    return `<article class="search-result"><div class="source-type">${location}</div><h3 lang="en">${escapeHTML(source.title)}</h3><p lang="en">${escapeHTML(snippet)}</p><a href="${escapeHTML(sourceLink(source, segment))}" target="_blank" rel="noopener noreferrer">${t().openOriginal} ↗</a></article>`;
  }).join("")}</div>` : `<div class="empty-state"><strong>${t().noPassages}</strong><p>${t().trySearch}</p></div>`}`;
}

function library() {
  if (publicEdition) return `<div class="content-wrap inner-page"><div class="page-heading"><span class="section-kicker">${t().libraryKicker}</span><h1>${t().libraryOne} <em>${t().libraryTwo}</em></h1><p>${t().libraryIntro}</p></div><div class="note-panel">${t().publicLibraryNote}</div><a class="button button-dark" href="#learn">${t().viewAll} <span>↗</span></a></div>`;
  return `<div class="content-wrap inner-page"><div class="page-heading"><span class="section-kicker">${t().libraryKicker}</span><h1>${t().libraryOne} <em>${t().libraryTwo}</em></h1><p>${t().libraryIntro}</p></div>
    <div class="library-tools"><label for="source-search">${t().searchLabel}</label><div class="search-box"><span aria-hidden="true">⌕</span><input id="source-search" type="search" value="${escapeHTML(libraryQuery)}" placeholder="${escapeHTML(t().searchPlaceholder)}" autocomplete="off"></div><div class="filters" role="group" aria-label="${t().filterLabel}"><button data-filter="all" class="${libraryKind === "all" ? "selected" : ""}" aria-pressed="${libraryKind === "all"}">${t().allSources}</button><button data-filter="pdf" class="${libraryKind === "pdf" ? "selected" : ""}" aria-pressed="${libraryKind === "pdf"}">${t().pdfs}</button><button data-filter="video" class="${libraryKind === "video" ? "selected" : ""}" aria-pressed="${libraryKind === "video"}">${t().videos}</button><button data-filter="text" class="${libraryKind === "text" ? "selected" : ""}" aria-pressed="${libraryKind === "text"}">${t().texts}</button></div></div>
    <div class="library-note"><strong>${t().aboutSources}</strong> ${t().libraryNote}${language === "es" ? ` <p>${t().originalLanguage}</p>` : ""}</div><div id="library-results" aria-live="polite"></div></div>`;
}

function glossaryPage() {
  const entries = language === "es" ? glossary.map(([word]) => esGlossary[word]).sort((a, b) => a[0].localeCompare(b[0], "es")) : glossary;
  return `<div class="content-wrap inner-page"><div class="page-heading"><span class="section-kicker">${t().glossaryKicker}</span><h1>${t().glossaryOne} <em>${t().glossaryTwo}</em></h1><p>${t().glossaryIntro}</p></div><div class="glossary-list">${entries.map(([word, definition]) => `<div><h2>${escapeHTML(word)}</h2><p>${escapeHTML(definition)}</p></div>`).join("")}</div><div class="note-panel">${t().deeper} <a href="#library">${t().searchLibrary} →</a></div></div>`;
}

function render() {
  const route = location.hash.slice(1) || "home";
  const [section, id] = route.split("/");
  const lesson = section === "lesson" && lessons.find(item => item.id === id);
  const selected = lesson ? "learn" : ["home", "learn", "practical", "library", "glossary"].includes(section) ? section : "home";
  topLabel.textContent = lesson ? `${t().lesson} ${pad(lessons.indexOf(lesson) + 1)}` : ({home: t().homeTop, learn: t().learnTop, practical: practicalText[language].top, library: t().libraryTop, glossary: t().glossaryTop})[selected];
  document.querySelectorAll("[data-route]").forEach(link => {
    if (link.dataset.route === selected) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  content.innerHTML = lesson ? lessonPage(lesson) : ({home, learn, practical: practicalPage, library, glossary: glossaryPage})[selected]();
  if (selected === "practical") bindPracticalPage();
  if (selected === "library") {
    renderLibraryResults();
    const search = document.querySelector("#source-search");
    if (search) search.addEventListener("input", () => { libraryQuery = search.value; renderLibraryResults(); });
    document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
      libraryKind = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(item => {
        const active = item.dataset.filter === libraryKind;
        item.classList.toggle("selected", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderLibraryResults();
    }));
  }
  const completeButton = document.querySelector("#complete-lesson");
  if (completeButton) completeButton.addEventListener("click", () => {
    const id = completeButton.dataset.id;
    completed = completed.includes(id) ? completed.filter(item => item !== id) : [...completed, id];
    try { localStorage.setItem(storageKey, JSON.stringify(completed)); }
    catch (error) { storageError = true; console.warn("Progress could not be saved to browser storage.", error); }
    render();
  });
  if (storageError) content.insertAdjacentHTML("afterbegin", `<div class="storage-warning" role="status">${t().storage}</div>`);
}

function updateLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t()[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-practical]").forEach(element => { element.textContent = practicalText[language][element.dataset.i18nPractical]; });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => { element.setAttribute("aria-label", t()[element.dataset.i18nAria]); });
  document.querySelector('meta[name="description"]').setAttribute("content", t().description);
  document.querySelectorAll('input[name="language"]').forEach(input => { input.checked = input.value === language; });
  render();
}

document.querySelectorAll('input[name="language"]').forEach(input => input.addEventListener("change", () => {
  language = input.value;
  try { localStorage.setItem(languageKey, language); }
  catch (error) { storageError = true; console.warn("Language could not be saved to browser storage.", error); }
  updateLanguage();
}));
window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
document.querySelector(".skip-link").addEventListener("click", event => {
  event.preventDefault();
  document.querySelector("#main").focus();
});
updateLanguage();
