// ============================================================
// RENDER FUNCTIONS — build HTML strings from data.js objects.
// Edit this file only if you want to change site structure/layout.
//
// Security note: esc() sanitizes plain-text fields. Fields marked
// "HTML string" in data.js are intentionally raw HTML written by
// you (the developer) and are safe to insert directly.
// ============================================================

// Sanitize plain text before inserting into HTML
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHero(d) {
  const bioParagraphs = d.bio.map(p => `<p>${p}</p>`).join('\n      ');
  return `
    <div class="hero-photo">
      <img src="assets/profile.png" alt="${esc(d.name)}" id="profile-photo" />
      <div class="photo-fallback" aria-hidden="true">${esc(d.initials)}</div>
    </div>
    <div class="hero-bio">
      <h1>${esc(d.greeting)}</h1>
      ${bioParagraphs}
    </div>`;
}

function renderCvLink(href) {
  return `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">Curriculum Vitae ↗</a>`;
}

function renderPaper(paper, id) {
  const absId = `abs-${id}`;
  const title    = paper.href && paper.href !== '#'
    ? `<a href="${esc(paper.href)}">${esc(paper.title)}</a>`
    : esc(paper.title);
  const meta     = paper.meta
    ? `<p class="paper-meta">${paper.meta}</p>`
    : '';
  const abstract = paper.abstract
    ? `<button class="abstract-toggle" onclick="toggleAbstract('${absId}')">Abstract</button>
        <div class="abstract" id="${absId}" hidden><p>${esc(paper.abstract)}</p></div>`
    : '';
  return `
      <li class="paper">
        <p class="paper-title">${title}</p>
        ${meta}
        ${abstract}
      </li>`;
}

function renderPaperList(papers, prefix) {
  return `<ul class="paper-list">
      ${papers.map((p, i) => renderPaper(p, `${prefix}${i + 1}`)).join('')}
    </ul>`;
}

function renderInterests(interests) {
  const items = interests
    .map(i => `<li><strong>${esc(i.field)}</strong> &mdash; ${esc(i.topics)}</li>`)
    .join('\n      ');
  return `<ul class="interests-list">\n      ${items}\n    </ul>`;
}

function renderTeachingGroup(items) {
  return items
    .map(item => `<li><strong>${esc(item.course)}</strong><br />${esc(item.details)}</li>`)
    .join('\n      ');
}

function renderTeaching(teaching) {
  return `
    <h3>Instructor of Record</h3>
    <ul class="teaching-list">
      ${renderTeachingGroup(teaching.instructor)}
    </ul>
    <h3>Teaching Assistant</h3>
    <ul class="teaching-list">
      ${renderTeachingGroup(teaching.ta)}
    </ul>`;
}

function renderContact(contact) {
  const officeLines = contact.office.map(esc).join('<br />');
  const links = contact.links
    .map(l => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
    .join(' &nbsp;&middot;&nbsp; ');
  const bioParagraphs = contact.bio.map(p => `<p>${p}</p>`).join('\n        ');

  return `
    <div class="contact-grid">
      <div class="contact-info">
        <h3>Contact</h3>
        <p><strong>Email:</strong> <a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></p>
        <p><strong>Office:</strong><br />${officeLines}</p>
        <p>${links}</p>
      </div>
      <div class="bio">
        <h3>Short Bio</h3>
        ${bioParagraphs}
      </div>
    </div>`;
}

function renderAccordion(id, title, content) {
  return `
  <div class="accordion" id="acc-${id}">
    <button class="accordion-header" onclick="toggleSection('${id}')" aria-expanded="false">
      <span class="toggle-icon">+</span>
      <span>${esc(title)}</span>
    </button>
    <div class="accordion-body" id="${id}" hidden>
      ${content}
    </div>
  </div>`;
}
