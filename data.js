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
    `I'm a Ph.D. Candidate in Economics at <a href="https://aysps.gsu.edu/economics/">Georgia State University</a>,
     advised by Professor <a href='https://www.laurenhoehnvelasco.com/'>Lauren Hoehn-Velasco</a>. My research sits at the intersection of
     <strong>health</strong> and <strong>labor economics</strong>.
     I use applied microeconometric methods and large administrative datasets to study how public policies affect health and economic outcomes.`,
    `My dissertation spans alcohol markets, obstetric practice, and tax policy.
     My job market paper, <em>Alcohol Access Shocks and Mortality</em>, draws on 67.5 million U.S. death records
     to show that local access to off-premise alcohol retail raises alcohol-attributable mortality.
     My work on neonatal mortality risk is published in the <em>Journal of Midwifery &amp; Women's Health</em>.`,
    `I am on the 2026–27 job market.`,
  ],

  // ============================================================
  // PUBLICATIONS
  // title — plain text
  // meta  — HTML string (journal names, co-author links)
  // ============================================================
  publications: [
    {
      title: "Neonatal Mortality Risk Among Births in Freestanding Birth Centers, 2015–2024",
      href:  "https://doi.org/10.1111/jmwh.70177",
      meta:  `With <a href="https://www.laurenhoehnvelasco.com/">Lauren Hoehn-Velasco</a> and Diana R. Jolles &mdash; <em>Journal of Midwifery &amp; Women's Health</em>, 2026`,
    },
    {
      title: "Neonatal Mortality Risk in Planned Home Birth, 2015–2024",
      href:  "https://doi.org/10.1111/jmwh.70195",
      meta:  `With <a href="https://www.laurenhoehnvelasco.com/">Lauren Hoehn-Velasco</a> and Diana R. Jolles &mdash; <em>Journal of Midwifery &amp; Women's Health</em>, 2026`,
    },
  ],

  // ============================================================
  // WORKING PAPERS
  // title / abstract — plain text
  // meta             — HTML string (journal names, co-author links)
  // ============================================================
  workingPapers: [
    {
      title: "Alcohol Access Shocks and Mortality",
      href:  "#",
      meta:  `<strong>Job Market Paper</strong> &mdash; Draft available upon request`,
      abstract:
        "A substantial literature links the density of alcohol retail outlets to adverse health and social outcomes, " +
        "but this evidence is often correlational and confined to a single city or region. " +
        "In this paper, I provide causal evidence on whether physical alcohol retail access affects mortality. " +
        "I develop a mortality-risk extension of the rational addiction model with access costs, " +
        "and test its predictions against reduced-form estimates. " +
        "I identify the effect from county-level, over-time variation in County Business Patterns liquor store establishment counts, " +
        "matched to restricted-access NCHS Multiple Cause of Death mortality microdata, across U.S. counties from 1989 to 2016, " +
        "and estimate two-way fixed effects and event-study specifications. " +
        "Each additional liquor store per 100,000 residents raises alcohol-primary mortality by 0.048 deaths per 100,000 annually, " +
        "a 0.65% increase relative to the pre-treatment mean. " +
        "The effect is three times larger for off-premise retailers (e.g., liquor stores) than for on-premise establishments (e.g., bars), " +
        "and concentrated among older adults, consistent with a chronic rather than acute consumption channel. " +
        "Using a standard value of a statistical life, the estimated effect amounts to approximately $556,000 " +
        "in annual mortality damages per additional store per 100,000 residents.",
    },
    {
      title: "Professional Recommendations and Provider Behavior",
      href:  "#",
      meta:  `With <a href="https://www.laurenhoehnvelasco.com/">Lauren Hoehn-Velasco</a>, Elizabeth Humphreys, and Nancy A. Niemczyk`,
      abstract:
        "Provider responses to updated clinical guidelines play a central role in shaping health outcomes. " +
        "In this study, we examine how physicians respond to new randomized controlled trial (RCT) evidence. " +
        "We analyze physician behavioral changes following the publication of the ARRIVE trial in obstetrics, " +
        "which found that elective induction at 39 weeks can reduce cesarean delivery in low-risk, first-time pregnancies. " +
        "Using nationally representative U.S. birth certificate data from 2016 to 2021, " +
        "we document a rapid and sustained increase in 39-week inductions for low-risk first births by approximately 9%. " +
        "Following the trial's release, inductions not only increase among first births but also among subsequent births, " +
        "suggesting “off-label” application of the trial findings. " +
        "Despite this significant shift in clinical practice, we find no corresponding decline in cesarean sections for first births. " +
        "These findings highlight a significant discrepancy between trial-based findings and real-world application: " +
        "while providers respond to high-quality clinical evidence, the anticipated downstream benefits may not surface. " +
        "Our results highlight the importance of evaluating how evidence translates into practice " +
        "and challenge the assumption that RCT findings necessarily imply population-level improvements.",
    },
    {
      title: "The Long-term Impact of In-Utero Alcohol Taxes on Adult Prenatal Drinking",
      href:  "#",
      meta:  `With Godwin Aipoh`,
      abstract:
        "Prior research documents the effects of alcohol taxes on drinking and birth outcomes, " +
        "but their long-term intergenerational effects remain largely unexplored. " +
        "We investigate whether in-utero exposure to state alcohol taxes shapes adult prenatal drinking decades later. " +
        "Using U.S. birth certificate data (1989–2004) on 11.7 million first births, " +
        "we link each mother's state and year of birth to the alcohol tax her mother faced during pregnancy, " +
        "and estimate models with state and year fixed effects and cohort trends; event studies show no pre-trends. " +
        "A one-dollar increase in the real in-utero alcohol tax per gallon of ethanol lowers the probability of prenatal drinking " +
        "by 0.07 percentage points (about 7 percent of the mean). " +
        "The effect operates entirely on the extensive margin, is concentrated among older, more-educated mothers, " +
        "and comes with suggestive improvements in infant health, " +
        "highlighting the durability of early-life policy interventions.",
    },
  ],

  // ============================================================
  // WORK IN PROGRESS
  // ============================================================
  workInProgress: [
    {
      title: "Advertising and Consumer Behavior in the Post-Dobbs Era",
      meta:  `With Sukriti Beniwal and Nikita Dhingra`,
    },
    { title: "Heat Waves, Fertility, and Labor Market Outcomes in the U.S." },
    { title: "Does Time Bridge Gaps? Long-Term Dynamics of the Child Penalty in Women's Earnings" },
    { title: "The Long-term Impact of In-Utero Restrictions to Abortion Access on Adult Labor Market Outcomes" },
    {
      title: "State-Paid Leave and Healthcare Utilization for Infants",
      meta:  `With Godwin Aipoh`,
    },
  ],

  // ============================================================
  // RESEARCH INTERESTS — plain text
  // ============================================================
  interests: [
    { field: "Health Economics",   topics: "maternal health, infant health, reproductive policy, healthcare utilization" },
    { field: "Labor Economics",    topics: "labor market outcomes, child penalty, intergenerational mobility, fertility" },
    { field: "Public Policy",      topics: "taxation, paid leave, alcohol policy, regulatory impacts" },
  ],

  // ============================================================
  // TEACHING — plain text
  // ============================================================
  teaching: {
    instructor: [
      { course: "ECON 2106: Principles of Microeconomics", details: "Georgia State University, Spring 2025, Fall 2025" },
    ],
    ta: [
      { course: "ECON 8030: Mathematical Methods for Economists (PhD)", details: "Fall 2023, 2024, 2025, 2026" },
      { course: "ECON 4230: Experimental Economics",                    details: "Spring 2025, 2026" },
      { course: "ECON 3910: Microeconomics",                            details: "2024, 2025" },
    ],
  },

  // ============================================================
  // CONTACT & BIO — plain text (office lines, bio paragraphs)
  // ============================================================
  contact: {
    email:  "dattarakaecon@gmail.com",
    linkedin: "https://www.linkedin.com/in/rakadatta/",
    office: [
      "Department of Economics",
      "Andrew Young School of Policy Studies",
      "Georgia State University",
      "Atlanta, GA 30303",
    ],
    // Visible links under Contact — left empty on purpose. GitHub and X are
    // still declared for search engines via "sameAs" and <link rel="me">
    // in index.html; the CV is linked at the top of the page.
    links: [
      // { label: "CV (PDF)",       href: "assets/Raka_CV.pdf" },
      // { label: "GitHub",         href: "https://github.com/rakadatta/" },
      // { label: "Google Scholar", href: "https://scholar.google.com/citations?user=..." },
      // { label: "X / Twitter",    href: "https://x.com/datta_raka" },
    ],
    bio: [
      "Raka Datta is a PhD Candidate in Economics at the Andrew Young School of Policy Studies, " +
      "Georgia State University, advised by Professor <a href='https://www.laurenhoehnvelasco.com/'>Lauren Hoehn-Velasco</a>. " +
      "Her research applies causal inference tools on large administrative and panel data " +
      "to study questions in health and labor economics using applied microeconometric methods. " +
      "She focuses on alcohol policy, provider behavior, " +
      "and maternal and child health outcomes.",
      "Prior to her PhD, she received an M.Sc. in Economics from the University of Bonn " +
      "and worked as a Research Assistant at IZA - Institute of Labor Economics in Bonn, " +
      "in the program <em>Gender, Growth and Labor Markets in Low Income Countries</em>.",
    ],
  },

};
