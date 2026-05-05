// ============================================================
// BEHAVIOR — accordion toggles and page initialization.
// Edit this file only if you need new interactive behavior.
// ============================================================

function toggleSection(id) {
  const body   = document.getElementById(id);
  const acc    = document.getElementById('acc-' + id);
  const btn    = acc.querySelector('.accordion-header');
  const icon   = acc.querySelector('.toggle-icon');
  const isOpen = !body.hidden;

  body.hidden      = isOpen;
  icon.textContent = isOpen ? '+' : '−';
  btn.setAttribute('aria-expanded', String(!isOpen));
  acc.classList.toggle('open', !isOpen);
}

function toggleAbstract(id) {
  const el     = document.getElementById(id);
  const btn    = el.previousElementSibling;
  const isOpen = !el.hidden;

  el.hidden       = isOpen;
  btn.textContent = isOpen ? 'Abstract' : 'Hide abstract';
}

function init() {
  const d = DATA;

  document.title = d.name;
  document.getElementById('site-name').textContent   = d.name;
  document.getElementById('footer-name').textContent = d.name;
  document.getElementById('year').textContent        = new Date().getFullYear();

  document.getElementById('hero').innerHTML     = renderHero(d);
  document.getElementById('cv-link').innerHTML  = renderCvLink(d.cvHref);

  document.getElementById('sections-container').innerHTML = [
    renderAccordion('working-papers', 'Working Papers',     renderPaperList(d.workingPapers, 'wp')),
    renderAccordion('work-in-progress', 'Work in Progress',  renderPaperList(d.workInProgress, 'wip')),
    renderAccordion('research',       'Research Interests', renderInterests(d.interests)),
    renderAccordion('teaching',       'Teaching',           renderTeaching(d.teaching)),
    renderAccordion('contact',        'Contact & Bio',      renderContact(d.contact)),
  ].join('');

  document.getElementById('profile-photo').addEventListener('error', function () {
    this.setAttribute('data-error', 'true');
    this.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', init);
