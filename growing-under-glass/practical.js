"use strict";

const journalKey = "growing-under-glass-observations-v1";
const journalStages = ["establishment", "multiplication", "rooting", "acclimation", "other"];
const journalStatuses = ["clear", "suspect", "uncertain"];
const practicalRefs = [];
let observations = [];
let journalStorageError = false;
let journalReadError = false;
let journalStorageReadable = true;
let journalDraft = {date: "", group: "", vessel: "", plant: "", stage: "establishment", status: "clear", notes: ""};

function validObservation(record) {
  return record && typeof record === "object" &&
    ["date", "group", "vessel", "plant", "stage", "status", "notes"].every(key => typeof record[key] === "string") &&
    /^\d{4}-\d{2}-\d{2}$/.test(record.date) && record.group.trim() && record.vessel.trim() && record.plant.trim() &&
    journalStages.includes(record.stage) && journalStatuses.includes(record.status);
}

let savedJournal = null;
try {
  savedJournal = localStorage.getItem(journalKey);
} catch (error) {
  journalStorageError = true;
  journalStorageReadable = false;
  console.warn("Observation storage is unavailable.", error);
}
if (savedJournal !== null) {
  try {
    const parsed = JSON.parse(savedJournal);
    if (!Array.isArray(parsed) || !parsed.every(validObservation)) throw new Error("Invalid observation data");
    observations = parsed;
  } catch (error) {
    journalReadError = true;
    console.warn("Saved observations are invalid.", error);
  }
}

function saveObservations() {
  if (!journalStorageReadable) return;
  try {
    localStorage.setItem(journalKey, JSON.stringify(observations));
  } catch (error) {
    journalStorageError = true;
    console.warn("Observations could not be saved to browser storage.", error);
  }
}

function comparisonRows(records) {
  const latest = new Map();
  records.forEach(record => {
    const key = JSON.stringify([record.group, record.vessel]);
    const previous = latest.get(key);
    if (!previous || record.date >= previous.date) latest.set(key, record);
  });
  const groups = new Map();
  for (const record of latest.values()) {
    if (!groups.has(record.group)) groups.set(record.group, {total: 0, clear: 0, suspect: 0, uncertain: 0});
    const row = groups.get(record.group);
    row.total++;
    row[record.status]++;
  }
  return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

function csvCell(value) {
  const text = String(value);
  const safe = /^[\s]*[=+\-@\t\r]/.test(text) ? `'${text}` : text;
  return `"${safe.replace(/"/g, '""')}"`;
}

function observationsCsv(records, labels) {
  const rows = [
    [labels.date, labels.group, labels.vessel, labels.plant, labels.stage, labels.status, labels.notes],
    ...records.map(record => [record.date, record.group, record.vessel, record.plant, labels.stages[record.stage], labels.statuses[record.status], record.notes])
  ];
  return "\uFEFF" + rows.map(row => row.map(csvCell).join(",")).join("\r\n");
}

function trackingSheets() {
  const text = trackingText[language];
  return `<section class="practical-section" id="tracking-sheets"><h2>${escapeHTML(text.title)}</h2><p>${escapeHTML(text.intro)}</p>
    <div class="tracking-sheets">${text.sheets.map(sheet => {
      const csv = "\uFEFF" + sheet.columns.map(csvCell).join(",") + "\r\n";
      return `<article class="tracking-sheet">
        <h3>${escapeHTML(sheet.title)}</h3><p>${escapeHTML(sheet.description)}</p>
        <div class="tracking-table-wrap"><table class="tracking-table"><caption>${escapeHTML(text.example)}: ${escapeHTML(sheet.title)}</caption>
          <thead><tr>${sheet.columns.map(column => `<th scope="col">${escapeHTML(column)}</th>`).join("")}</tr></thead>
          <tbody>${sheet.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>
        <p class="tracking-reasoning"><strong>${escapeHTML(text.reasoning)}</strong> ${escapeHTML(sheet.reasoning)}</p>
        <a class="button button-dark" href="data:text/csv;charset=utf-8,${encodeURIComponent(csv)}" download="${sheet.id}.csv">${escapeHTML(text.download)} <span aria-hidden="true">↓</span><span class="sr-only">: ${escapeHTML(sheet.title)}</span></a>
      </article>`;
    }).join("")}</div></section>`;
}

function practicalPage() {
  const p = practicalText[language];
  const options = (keys, labels, selected) => keys.map(key => `<option value="${key}"${key === selected ? " selected" : ""}>${escapeHTML(labels[key])}</option>`).join("");
  const rows = comparisonRows(observations);
  return `<div class="content-wrap inner-page practical-page">
    <div class="page-heading"><span class="section-kicker">${p.kicker}</span><h1>${p.title}</h1><p>${p.intro}</p></div>
    <div class="safety"><strong>${p.cautionTitle}</strong><p>${p.caution}</p></div>
    <section class="practical-section"><h2>${p.materialsTitle}</h2><ul class="materials-list">${p.materials.map(item => `<li>${item}</li>`).join("")}</ul><p>${p.materialsNote}</p></section>
    <section class="practical-section"><h2>${p.stepsTitle}</h2><p>${p.stepsIntro}</p><ol class="culture-timeline">${p.steps.map(step => `<li><span class="timeline-dot" aria-hidden="true"></span><div><h3>${step.title}</h3><span class="step-time">${step.time}</span><p>${step.text}</p></div></li>`).join("")}</ol>
    <div class="note-panel"><strong>${p.timingTitle}</strong><p>${p.timing}</p></div></section>
    <section class="practical-section"><h2>${p.observationsTitle}</h2><div class="observation-grid">${p.observations.map(([title, detail], i) => `<article class="observation-card"><span class="observation-icon observation-icon-${i}" aria-hidden="true">${["○", "◉", "◐", "✳"][i]}</span><h3>${title}</h3><p>${detail}</p></article>`).join("")}</div>${illustration("culture-observation-comparison")}</section>
    ${trackingSheets()}
    <section class="practical-section" id="journal"><h2>${p.journalTitle}</h2><p>${p.journalIntro}</p>
      ${journalReadError ? `<div class="storage-warning" role="alert">${p.corruptWarning}</div>` : journalStorageError ? `<div class="storage-warning" role="status">${p.storageWarning}</div>` : ""}
      <form id="observation-form" class="journal-form"><fieldset ${journalReadError ? "disabled" : ""}>
        <div class="journal-fields">
          <label>${p.date}<input name="date" type="date" required value="${escapeHTML(journalDraft.date)}"></label>
          <label>${p.group}<input name="group" required maxlength="80" placeholder="${p.groupHint}" value="${escapeHTML(journalDraft.group)}"></label>
          <label>${p.vessel}<input name="vessel" required maxlength="80" placeholder="${p.vesselHint}" value="${escapeHTML(journalDraft.vessel)}"></label>
          <label>${p.plant}<input name="plant" required maxlength="120" value="${escapeHTML(journalDraft.plant)}"></label>
          <label>${p.stage}<select name="stage">${options(journalStages, p.stages, journalDraft.stage)}</select></label>
          <label>${p.status}<select name="status">${options(journalStatuses, p.statuses, journalDraft.status)}</select></label>
          <label class="journal-notes">${p.notes}<textarea name="notes" rows="3" maxlength="2000" placeholder="${p.notesHint}">${escapeHTML(journalDraft.notes)}</textarea></label>
        </div><button class="button button-dark" type="submit">${p.save} <span aria-hidden="true">↗</span></button>
      </fieldset></form>
    </section>
    <section class="practical-section"><h2>${p.compare}</h2><p>${p.compareIntro}</p>
      ${rows.length ? `<div class="comparison-grid">${rows.map(([group, values]) => `<article class="comparison-card"><h3>${escapeHTML(group)}</h3><p>${p.total}: <strong>${values.total}</strong></p><div class="comparison-bar" aria-hidden="true"><span class="bar-clear" style="width:${values.clear / values.total * 100}%"></span><span class="bar-suspect" style="width:${values.suspect / values.total * 100}%"></span><span class="bar-uncertain" style="width:${values.uncertain / values.total * 100}%"></span></div><ul><li>${p.clean}: ${values.clear}</li><li>${p.suspect}: ${values.suspect}</li><li>${p.other}: ${values.uncertain}</li></ul></article>`).join("")}</div>` : `<p>${p.comparisonEmpty}</p>`}<p class="comparison-note">${p.statusNote}</p>
    </section>
    <section class="practical-section"><h2>${p.records}</h2>${observations.length ? `<button type="button" class="button button-dark" id="export-observations">${p.export} <span aria-hidden="true">↓</span></button><p class="comparison-note">${p.exportNote}</p><div class="journal-table-wrap"><table class="journal-table"><thead><tr>${[p.date, p.group, p.vessel, p.plant, p.stage, p.status, p.notes, ""].map(title => `<th scope="col">${title}</th>`).join("")}</tr></thead><tbody>${observations.map((record, i) => `<tr><td>${escapeHTML(record.date)}</td><td>${escapeHTML(record.group)}</td><td>${escapeHTML(record.vessel)}</td><td>${escapeHTML(record.plant)}</td><td>${p.stages[record.stage]}</td><td>${p.statuses[record.status]}</td><td>${escapeHTML(record.notes)}</td><td><button type="button" class="delete-observation" data-index="${i}" aria-label="${escapeHTML(`${p.deleteLabel}: ${record.vessel}, ${record.date}`)}">${p.delete}</button></td></tr>`).reverse().join("")}</tbody></table></div>` : `<p>${p.noRecords}</p>`}</section>
    <section class="practical-section"><h2>${p.relatedLessons}</h2><div class="practical-links">${["first-project", "clean-technique", "medium", "establishment", "subculture", "acclimation", "experiments"].map(id => { const lesson = localizedLesson(lessons.find(item => item.id === id)); return `<a href="#lesson/${id}">${escapeHTML(lesson.title)} →</a>`; }).join("")}</div></section>
  </div>`;
}

function bindPracticalPage() {
  const form = document.querySelector("#observation-form");
  if (!form) return;
  form.addEventListener("input", () => {
    for (const key of Object.keys(journalDraft)) journalDraft[key] = form.elements[key].value;
    for (const key of ["group", "vessel", "plant"]) form.elements[key].setCustomValidity("");
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    for (const key of ["group", "vessel", "plant"]) {
      form.elements[key].setCustomValidity(form.elements[key].value.trim() ? "" : practicalText[language].requiredText);
    }
    if (journalReadError || !form.reportValidity()) return;
    const record = Object.fromEntries(Object.keys(journalDraft).map(key => [key, form.elements[key].value.trim()]));
    if (!validObservation(record)) {
      throw new Error("Observation form produced invalid data");
    }
    observations.push(record);
    saveObservations();
    journalDraft = {...journalDraft, date: record.date, group: record.group, plant: record.plant, vessel: "", notes: ""};
    render();
    document.querySelector("#observation-form [name=vessel]").focus();
  });
  const exportButton = document.querySelector("#export-observations");
  if (exportButton) exportButton.addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([observationsCsv(observations, practicalText[language])], {type: "text/csv;charset=utf-8"}));
    const link = document.createElement("a");
    link.href = url;
    link.download = "culture-observations.csv";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  document.querySelectorAll(".delete-observation").forEach(button => button.addEventListener("click", () => {
    if (journalReadError || !window.confirm(practicalText[language].confirmDelete)) return;
    observations.splice(Number(button.dataset.index), 1);
    saveObservations();
    render();
    document.querySelector("#observation-form [name=vessel]").focus();
  }));
}
