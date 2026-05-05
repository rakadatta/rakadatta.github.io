// ============================================================
// ALL SITE CONTENT — this is the only file you need to edit
// to update your website.
//
// Two types of fields:
//   Plain text  — just a string, no HTML tags needed
//   HTML string — marked with a comment; you can use <a>, <em>,
//                 <strong> etc. inside these fields
// ============================================================

const DATA = {

  // --- Identity ---
  name:     "Raka Datta",
  initials: "RD",
  greeting: "Hi, I'm Raka.",
  cvHref:   "assets/Raka_CV.pdf",  // EDIT: path or URL to your CV PDF

  // --- Hero bio (HTML string — links and bold are fine here) ---
  bio: [
    `I'm a PhD Candidate in Economics at <a href="https://aysps.gsu.edu/economics/">Georgia State University.</a>,
     My research sits at the intersection of <strong>health economics</strong>
     and <strong>labor economics</strong>, with a focus on maternal health and labor market outcomes.`,
    `I examine how policy changes shape individual outcomes across generations, with particular attention to the forces that drive and widen socioeconomic disparities.`,
  ],

  // ============================================================
  // WORKING PAPERS
  // title / abstract — plain text
  // meta             — HTML string (journal names, co-author links)
  // ============================================================
  workingPapers: [
    {
      title: "The Long-term Impact of In-Utero Restrictions to Abortion Access on Adult Labor Market Outcomes",
      href:  "#",
      // meta:  "<em>/em> &mdash; Draft available upon request",
      abstract:
        "Using variation in the timing and intensity of abortion policy restrictions across states, " +
        "I analyze whether individuals gestating under more restrictive abortion regimes experience " +
        "lower educational attainment, weaker labor market outcomes, and poorer health later in life. " +
        "The study connects to a growing literature on the intergenerational transmission of inequality, " +
        "where early-life exposure to restrictive reproductive environments may deepen pre-existing " +
        "disadvantages through reduced parental investments, altered fertility timing, and higher maternal stress. " +
        "This paper highlights abortion policy as an important determinant of long-run human capital formation and economic mobility.",
    },
    {
      title: "On the Rocks: Alcohol Access Shocks and Maternal and Child Health",
      href:  "#",
      abstract:
        "Using establishment-level data matched with restricted birth records from NVSS, " +
        "I exploit within-county variation in liquor store openings and closings to identify causal effects on maternal and infant health. " +
        "A net increase in alcohol retail establishments raises prenatal drinking and lowers birth weight, " +
        "with effects more pronounced among women of color, rural counties, and Medicaid-insured mothers. " +
        "Store openings increase adverse outcomes more than closures reverse them, consistent with persistent neighborhood exposure effects. " +
        "These findings carry direct implications for local zoning, alcohol licensing policy, and maternal health equity.",
    },
    {
      title: "Professional Recommendations and Provider Behavior",
      href:  "#",
      meta:  `With <a href="#">Lauren Hoehn-Velasco</a> and <a href="#">Nancy A. Niemczyk</a>`,
      abstract:
        "We examine how physicians respond to new RCT evidence, using the publication of the ARRIVE trial " +
        "as a natural experiment. The trial found that elective induction at 39 weeks reduces cesarean delivery " +
        "in low-risk, first-time pregnancies. Using nationally representative U.S. birth certificate data from 2016–2021, " +
        "we document a rapid and sustained 9% increase in 39-week inductions for low-risk first births following the trial's release. " +
        "Inductions also rise among subsequent births, suggesting off-label application of the findings. " +
        "Despite this significant shift in clinical practice, we find no corresponding decline in cesarean sections. " +
        "These results highlight a discrepancy between trial-based evidence and real-world outcomes, " +
        "challenging the assumption that RCT findings necessarily translate into population-level improvements.",
    },
    {
      title: "The Long-term Impact of In-Utero Alcohol Taxes on Adult Prenatal Drinking",
      href:  "#",
      meta:  `With <a href="#">Godwin Aipoh</a>`,
      abstract:
        "We investigate whether in-utero exposure to alcohol tax policies shapes adult prenatal drinking " +
        "and transmits health effects across generations. Using restricted birth certificate data with " +
        "time and location fixed effects, we estimate the effect of historical alcohol tax rates during gestation " +
        "on later-life prenatal alcohol use. Event studies further isolate long-run effects on adult health outcomes " +
        "and intergenerational spillovers on infant health. " +
        "Higher in-utero alcohol taxes significantly reduce adult prenatal drinking, " +
        "offering evidence on the durability of early-life policy interventions and their reach across generations.",
    },
    {
      title: "Neonatal Mortality Risk in Planned Home Birth, 2015–2024",
      href:  "#",
      meta:  `With <a href="#">Lauren Hoehn-Velasco</a> and <a href="#">Diana R. Jolles</a> &mdash; <em>Under Review</em>`,
    },
    {
      title: "Neonatal Mortality Risk in Freestanding Birth Centers, 2015–2024",
      href:  "#",
      meta:  `With <a href="#">Lauren Hoehn-Velasco</a> and <a href="#">Diana R. Jolles</a> &mdash; <em>Under Review</em>`,
    },
  ],

  // ============================================================
  // WORK IN PROGRESS
  // ============================================================
  workInProgress: [
    { title: "Heat Waves, Fertility, and Labor Market Outcomes in the U.S." },
    { title: "Does Time Bridge Gaps? Long-Term Dynamics of the Child Penalty in Women's Earnings" },
    {
      title: "State-Paid Leave and Healthcare Utilization for Infants",
      meta:  `With <a href="#">Godwin Aipoh</a>`,
    },
    {
      title: "Advertising and Consumer Behavior in the Post-Dobbs Era",
      meta:  `With <a href="#">Sukriti Beniwal</a> and <a href="#">Nikita Dhingra</a>`,
    },
  ],

  // ============================================================
  // RESEARCH INTERESTS — plain text
  // ============================================================
  interests: [
    { field: "Health Economics",   topics: "maternal health, infant health, reproductive policy, healthcare utilization" },
    { field: "Labor Economics",    topics: "labor market outcomes, child penalty, intergenerational mobility, fertility" },
    { field: "Public Policy",      topics: "taxation, paid leave, alcohol and abortion policy, regulatory impacts" },
  ],

  // ============================================================
  // TEACHING — plain text
  // ============================================================
  teaching: {
    instructor: [
      { course: "ECON 2106: Principles of Microeconomics", details: "Georgia State University, Spring 2025, Fall 2025" },
    ],
    ta: [
      { course: "ECON 8030: Mathematical Methods for Economists (PhD)", details: "Fall 2023, 2024, 2025" },
      { course: "ECON 4230: Experimental Economics",                    details: "Spring 2025, 2026" },
      { course: "ECON 3910: Microeconomics",                            details: "2024, 2025" },
    ],
  },

  // ============================================================
  // CONTACT & BIO — plain text (office lines, bio paragraphs)
  // ============================================================
  contact: {
    email:  "rdatta5@gsu.edu",
    office: [
      "Department of Economics",
      "Andrew Young School of Policy Studies",
      "Georgia State University",
      "Atlanta, GA 30303",
    ],
    links: [
      { label: "CV (PDF)",       href: "#" },
      { label: "GitHub",         href: "#" },
      { label: "Google Scholar", href: "#" },
      { label: "X / Twitter",    href: "https://x.com/" },
    ],
    bio: [
      "Raka Datta is a PhD Candidate in Economics at the Andrew Young School of Policy Studies, " +
      "Georgia State University, advised by Professor Lauren Hoehn-Velasco. " +
      "Her research applies causal inference tools on large administrative and panel data " +
      "to study questions in health and labor economics using applied microeconometric methods. " +
      "She focuses on alcohol and abortion policy, provider behavior, " +
      "and maternal and child health outcomes.",
      "Prior to her PhD, she received an M.Sc. in Economics from the University of Bonn " +
      "and worked as a Research Assistant at IZA - Institute of Labor Economics in Bonn, " +
      "in the program <em>Gender, Growth and Labor Markets in Low Income Countries</em>.",
    ],
  },

};
