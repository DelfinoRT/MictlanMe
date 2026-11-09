// External references are reading links; local PDF page numbers refer to the PDF viewer.
const research = {
  body: {url: "https://openstax.org/books/biology-2e/pages/30-1-the-plant-body", title: "OpenStax Biology 2e, 30.1: The Plant Body", detail: "TEXTBOOK · PLANT ANATOMY"},
  stems: {url: "https://openstax.org/books/biology-2e/pages/30-2-stems", title: "OpenStax Biology 2e, 30.2: Stems", detail: "TEXTBOOK · STEMS"},
  roots: {url: "https://openstax.org/books/biology-2e/pages/30-3-roots", title: "OpenStax Biology 2e, 30.3: Roots", detail: "TEXTBOOK · ROOTS"},
  leaves: {url: "https://openstax.org/books/biology-2e/pages/30-4-leaves", title: "OpenStax Biology 2e, 30.4: Leaves", detail: "TEXTBOOK · LEAVES"},
  transport: {url: "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants", title: "OpenStax Biology 2e, 30.5: Transport of Water and Solutes", detail: "TEXTBOOK · PLANT PHYSIOLOGY"},
  nutrition: {url: "https://openstax.org/books/biology-2e/pages/31-1-nutritional-requirements-of-plants", title: "OpenStax Biology 2e, 31.1: Nutritional Requirements of Plants", detail: "TEXTBOOK · PLANT NUTRITION"},
  signals: {url: "https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses", title: "OpenStax Biology 2e, 30.6: Plant Sensory Systems and Responses", detail: "TEXTBOOK · SIGNALING"},
  reproduction: {url: "https://openstax.org/books/biology-2e/pages/32-1-reproductive-development-and-structure", title: "OpenStax Biology 2e, 32.1: Reproductive Development and Structure", detail: "TEXTBOOK · REPRODUCTION"},
  photosynthesis: {url: "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis", title: "OpenStax Biology 2e, 8.1: Overview of Photosynthesis", detail: "TEXTBOOK · PHOTOSYNTHESIS"},
  regeneration: {url: "https://pubmed.ncbi.nlm.nih.gov/24904615/", title: "Perianez-Rodriguez et al. (2014): Post-embryonic organogenesis and plant regeneration", detail: "REVIEW · FRONTIERS IN PLANT SCIENCE"},
  endophytes: {url: "https://pubmed.ncbi.nlm.nih.gov/29981114/", title: "Quambusch et al. (2018): Bacterial Endophytes in Plant Tissue Culture", detail: "REVIEW · METHODS IN MOLECULAR BIOLOGY"},
  light: {url: "https://pubmed.ncbi.nlm.nih.gov/36506916/", title: "Fan et al. (2022): Light Quality and Morphogenesis in Micropropagated Crops", detail: "REVIEW · BIOMED RESEARCH INTERNATIONAL"},
  variation: {url: "https://pubmed.ncbi.nlm.nih.gov/36600911/", title: "Debnath et al. (2022): Phenotypic variation in tissue culture berry crops", detail: "REVIEW · FRONTIERS IN PLANT SCIENCE"},
  hyperhydricity: {url: "https://pubmed.ncbi.nlm.nih.gov/36501352/", title: "Polivanova and Bedarev (2022): Hyperhydricity in Plant Tissue Culture", detail: "REVIEW · PLANTS"},
  tip: {url: "https://pubmed.ncbi.nlm.nih.gov/32885282/", title: "Teixeira da Silva et al. (2020): Shoot tip necrosis of in vitro plant cultures", detail: "REVIEW · PLANTA"},
  immersion: {url: "https://pubmed.ncbi.nlm.nih.gov/36275513/", title: "Aguilar et al. (2022): Somatic embryogenesis of Arabica coffee in temporary immersion", detail: "REVIEW · FRONTIERS IN PLANT SCIENCE"}
};
const book = "plant-tissue-culture-third-edition-techniques-and-experiments-by-roberta-h-smith.pdf";
const primer = "Plant Tissue Culture lebt107.pdf";
const tubes = "Plants_From_Test_Tubes_Complete.pdf";

const additionalLessons = [
  {
    id: "plant-cells", title: "Inside a plant cell", category: "BOTANY FOUNDATIONS", time: "8 MIN READ",
    intro: "Meet the living units that divide, specialize and sometimes regenerate in culture.",
    takeaway: "A cell's structure, identity and physiological state shape what it can do. A living plant cell is not automatically able to regenerate a plant in any medium.",
    sections: [
      {heading: "The parts and their jobs", paragraphs: [
        "The plasma membrane regulates exchange with the surroundings. Outside it, the cell wall provides mechanical support but is not an impermeable shell. The nucleus contains most genetic information; gene expression helps establish what a cell does.",
        "Chloroplasts capture light energy in photosynthetic cells. Mitochondria support cellular respiration. A large central vacuole stores water and solutes and helps maintain turgor: the pressure of the cell contents against the wall."
      ]},
      {heading: "From cell to tissue", paragraphs: [
        "Plant cells divide, enlarge and differentiate into types with different structures and jobs. Groups of cells form tissues; tissues form organs. The cells in a leaf, root or bud can contain much of the same genetic information while expressing different genes.",
        "Meristems are regions of actively dividing or potentially dividing cells. A mature tissue is not necessarily incapable of change: some living cells can re-enter division or change developmental fate in response to injury and culture signals."
      ]},
      {heading: "Why this matters in a jar", paragraphs: [
        "Cutting an explant wounds it and changes its water balance and signaling. Cells must remain viable before growth is possible. The ability to respond depends on the species, genotype, tissue, age and environment; a visible callus is not proof that complete plants can be regenerated."
      ]}
    ],
    refs: [research.body, research.regeneration, {id: primer, page: 1}]
  },
  {
    id: "plant-anatomy", title: "Read a plant's architecture", category: "BOTANY FOUNDATIONS", time: "9 MIN READ",
    intro: "Learn to recognize the organs and growth points that become explants.",
    takeaway: "A node, bud, leaf and root are different structures. Identifying them correctly makes a protocol much easier to understand.",
    sections: [
      {heading: "Shoots, nodes and buds", paragraphs: [
        "A shoot generally consists of stem, leaves and buds. A node is a region of the stem where a leaf attaches; the internode is the stretch between nodes. An axillary bud is usually found in the angle between a leaf and stem. It may grow into a lateral shoot if conditions permit.",
        "The shoot apical meristem is the growth region at a shoot tip. A shoot tip includes the meristem and surrounding young tissue; 'shoot tip' and 'isolated meristem' are not interchangeable. Protocols must specify what is actually excised."
      ]},
      {heading: "Leaves, roots and transport", paragraphs: [
        "Leaves typically have a blade and may have a stalk called a petiole. Epidermis and cuticle help protect exposed surfaces; stomata regulate gas exchange. Internal photosynthetic tissue captures light.",
        "Roots anchor many plants and absorb water and minerals; their tips have regions of division, elongation and maturation. Adventitious roots arise from an unusual location, such as a stem. Xylem generally carries water and minerals from roots toward shoots; phloem transports sugars between sources and sinks."
      ]},
      {heading: "Map before cutting", paragraphs: [
        "An explant is a piece of plant chosen to initiate a culture. Nodal sections may contain a pre-existing bud; leaf tissue may require new organs to form. These are distinct regeneration routes. Verify the botanical identity, node orientation and tissue described by the chosen protocol."
      ]}
    ],
    refs: [research.body, research.stems, research.roots, research.leaves, {id: book, page: 51}]
  },
  {
    id: "plant-reproduction", title: "How plants make more plants", category: "BOTANY FOUNDATIONS", time: "8 MIN READ",
    intro: "Understand seeds, vegetative growth and why different propagation routes produce different kinds of offspring.",
    takeaway: "A seedling and a plant made from an existing bud are not equivalent products. The goal determines which route makes sense.",
    sections: [
      {heading: "Sexual reproduction", paragraphs: [
        "In flowering plants, pollen delivers male genetic material and fertilization involves the ovule. Seed development follows; a seed contains an embryo and resources or tissues that support early growth. Sexual reproduction combines genetic contributions, so seedlings can differ from their parents and from each other.",
        "Plants have diverse life cycles and exceptions exist, including asexual seed formation in some species. Seed-derived variation is often useful for breeding or conservation, but may be undesirable when preserving a particular cultivar."
      ]},
      {heading: "Vegetative propagation", paragraphs: [
        "Cuttings, divisions, runners and many tissue-culture methods use existing plant tissue rather than sexual reproduction. Nodal culture grows shoots from existing buds under aseptic conditions. It is often used for clonal multiplication, although genetic changes and chimeras can complicate the result.",
        "A plant's scientific name, cultivar and source help you find an appropriate protocol. Similar-looking plants can have different propagation requirements, while two cultivars of one species can respond differently."
      ]},
      {heading: "Apply this to your project", paragraphs: [
        "Decide whether you want many genetically diverse seedlings, to multiply a known plant, or to study regeneration. An aseptically germinated seedling can be a cleaner donor than outdoor material, but is not automatically genetically identical to its parent. Record that distinction."
      ]}
    ],
    refs: [research.reproduction, research.regeneration, {id: book, page: 51}]
  },
  {
    id: "plant-physiology", title: "How a plant stays alive", category: "BOTANY FOUNDATIONS", time: "10 MIN READ",
    intro: "Connect light, water, carbon and mineral nutrition to the environment inside a culture vessel.",
    takeaway: "Plants need carbon, energy, water and essential elements. The availability of one does not replace the others.",
    sections: [
      {heading: "Carbon and energy", paragraphs: [
        "Photosynthesis uses light energy to fix carbon dioxide into organic compounds. Respiration releases usable energy from organic compounds and occurs in both light and dark. Culture media commonly supply sucrose because many in vitro plantlets are not yet fully self-supporting through photosynthesis.",
        "Sugar is not mineral fertilizer. In addition to carbon, plants need elements such as nitrogen, phosphorus, potassium, calcium and iron. Some are needed in much smaller amounts, but small does not mean optional."
      ]},
      {heading: "Water potential and turgor", paragraphs: [
        "Water moves along differences in water potential. Dissolved solutes lower water potential, while pressure can raise it. This is a useful conceptual model, not a way to diagnose a culture from its appearance alone.",
        "A medium's dissolved salts and sugar influence both nutrition and osmotic conditions. More concentrated medium is not automatically better; it may make water uptake harder or introduce toxicity."
      ]},
      {heading: "A protected, unusual climate", paragraphs: [
        "Inside a vessel, humidity is often high, air exchange is restricted, and leaves may develop differently from those outside. Stomata and cuticle may not immediately regulate water loss well when plants are moved into drier air.",
        "Light intensity, spectrum, day length, temperature and vessel ventilation interact. Follow the plant-specific protocol, observe the plants, and avoid assuming that a bright windowsill or a stronger lamp is always an improvement."
      ]}
    ],
    refs: [research.transport, research.nutrition, research.leaves, research.photosynthesis, research.light, {id: tubes, page: 15}]
  },
  {
    id: "growth-signals", title: "Growth is a conversation", category: "BOTANY FOUNDATIONS", time: "9 MIN READ",
    intro: "Explore how plant hormones, injury and tissue identity interact during development.",
    takeaway: "Plant growth regulators are signals, not instructions with a guaranteed outcome. Their effect depends on context and on the plant's own internal signals.",
    sections: [
      {heading: "A signaling vocabulary", paragraphs: [
        "Auxins and cytokinins participate in many developmental processes, including division and organ formation. Gibberellins can influence elongation; abscisic acid is associated with stress and developmental responses; ethylene is a gaseous signal with many roles. None acts alone.",
        "The classic auxin-to-cytokinin framework helps explain some responses in cultured tissue: in some systems different balances favor roots, shoots or callus. It is not a universal ratio or a recipe. Tissue sensitivity, endogenous hormones, concentrations and culture history all matter."
      ]},
      {heading: "Apical dominance and buds", paragraphs: [
        "The shoot tip influences the growth of axillary buds through interacting signals, including auxin and other hormones. The visible result is often apical dominance: a strong main shoot and less active lateral buds. Removing or altering the tip can change branching, but responses differ among plants.",
        "Multiplying existing buds and inducing new organs from another tissue are different strategies. A node already contains an organized bud; a leaf explant generally must form new structures if it is to produce a shoot."
      ]},
      {heading: "In practice", paragraphs: [
        "Write down the precise chemical, stock concentration, final concentration and units when reading a medium recipe. Two substances in the same hormone class can differ greatly in activity and stability. Do not substitute or scale a regulator without a reliable protocol."
      ]}
    ],
    refs: [research.signals, research.regeneration, {id: tubes, page: 32}, {id: book, page: 70}]
  },
  {
    id: "explant-choice", title: "Choose the right starting tissue", category: "CULTURE FUNDAMENTALS", time: "8 MIN READ",
    intro: "The source plant and the explant are the first variables in every experiment.",
    takeaway: "The best explant is the one supported by a protocol for the specific species and objective—not necessarily the smallest or youngest piece available.",
    sections: [
      {heading: "Different tissues, different possibilities", paragraphs: [
        "A nodal segment includes an axillary bud; a shoot tip contains a growing apex and surrounding tissue; leaves, petioles, roots and seeds are used in other protocols. Explant size, orientation and developmental age can change survival and response.",
        "A small meristem can be useful in specialist pathogen-elimination programs, but it is technically demanding, and survival is not assured. A healthy-looking donor or a clean-looking culture is not proof of freedom from viruses or other pathogens."
      ]},
      {heading: "The donor matters", paragraphs: [
        "Record the cultivar or genotype when known, its growing conditions and the tissue's age and condition. Field-grown plants may carry more surface and internal microorganisms than protected donor plants. Injury, seasonal growth, latent infection and tissue maturity can affect outcomes.",
        "Seedlings raised under suitable aseptic conditions can provide relatively clean starting material, but seedlings are not necessarily clones of the parent. Respect plant breeders' rights and local rules when collecting, propagating or distributing material."
      ]},
      {heading: "Define success before cutting", list: [
        "For a clone, consider whether the protocol uses an existing bud or regeneration from other tissue.",
        "For seed culture, account for genetic variation among seedlings.",
        "Record initial explant number, source plant, tissue type and orientation.",
        "Keep independent containers and a medium-only control; inspect them without opening."
      ]}
    ],
    refs: [{id: book, page: 51}, {id: book, page: 60}, {id: primer, page: 5}, research.endophytes]
  },
  {
    id: "medium-deep-dive", title: "Medium: a designed environment", category: "CULTURE FUNDAMENTALS", time: "11 MIN READ",
    intro: "Look beyond ingredient lists to understand concentration, pH, support and preparation.",
    takeaway: "A formulation is a complete system. Changing salts, sugar, pH, gelling agent or regulators can change both nutrition and the physical environment.",
    sections: [
      {heading: "Why formulations differ", paragraphs: [
        "A basal formulation supplies mineral nutrients and often vitamins. MS medium is widely used, but its relatively high salt composition does not suit every plant or stage. Compare a protocol's exact basal formulation, strength, sugar, gelling agent and additives rather than relying on a product name.",
        "Nitrogen may be supplied in nitrate and ammonium forms; their balance can affect uptake and medium chemistry. Calcium and other nutrients interact with transport and availability. Deficiency-like symptoms can have multiple causes and require a controlled diagnosis."
      ]},
      {heading: "Concentrations and units", paragraphs: [
        "A stock solution is a concentrated preparation used to obtain a specified final concentration. Use the same units on both sides of C1 × V1 = C2 × V2. For example, 1 mL of a 100 mg/L stock brought to a final volume of 100 mL gives 1 mg/L—not 100 mg/L.",
        "Percent can mean mass per volume, volume per volume or a dilution of a commercial product. Confirm the basis and the active ingredient. Record final volume, product strength, calculations and preparation date."
      ]},
      {heading: "Physical and chemical conditions", paragraphs: [
        "pH affects nutrient availability and gel properties, and can change during preparation or culture. Gel strength and water availability depend on the gelling agent and its concentration; a liquid medium changes support and gas exchange. Do not treat different gelling products as interchangeable by weight.",
        "Some ingredients are heat-sensitive and may require a separately validated addition method. For home use, commercially prepared sterile medium for the intended species and stage avoids some preparation variables."
      ], note: "Follow chemical labels and equipment instructions. Never mix incompatible disinfectants or assume a household heating cycle is a validated sterilization process." }
    ],
    refs: [{id: book, page: 43}, {id: book, page: 44}, {id: primer, page: 5}, research.nutrition]
  },
  {
    id: "reading-formulations", title: "Make sense of a formulation", category: "CULTURE FUNDAMENTALS", time: "10 MIN READ",
    intro: "Practice reading concentrations, stock solutions and units before interpreting a recipe.",
    takeaway: "The final concentration—not just the volume of stock added—is what describes the treatment.",
    sections: [
      {heading: "Read a formulation as a whole", paragraphs: [
        "A report should specify the basal medium and its strength, sucrose and gelling-agent amounts, any growth regulators, final pH, final volume and preparation method. Check whether a listed concentration refers to the stock bottle or to the finished medium.",
        "A commercial premix may already contain vitamins or other ingredients. Adding them again without checking the label changes the final formulation. Partial or outdated product descriptions are not enough to reconstruct an exact recipe."
      ]},
      {heading: "A worked stock calculation", paragraphs: [
        "Use C1 × V1 = C2 × V2 with compatible units. If a stock is 100 mg/L and the desired final concentration is 1 mg/L in 100 mL of finished medium, V1 = (1 × 100) / 100 = 1 mL stock. The final volume is 100 mL, not 100 mL plus the stock.",
        "Scaling to 200 mL of the same final medium requires 2 mL of that stock. This is a calculation exercise, not a recommended plant growth regulator concentration. Verify each substance and the protocol before preparing anything."
      ]},
      {heading: "Mass and molarity are not the same", paragraphs: [
        "Milligrams per liter describe mass concentration; micromoles per liter describe the number of molecules. Conversion depends on the molecular weight of the exact chemical form. For a molecular weight in g/mol, mg/L = micromoles/L × molecular weight / 1,000.",
        "For example, a hypothetical substance with molecular weight 200 g/mol at 5 micromoles/L corresponds to 1 mg/L. Salts, hydrates and acid or salt forms can have different molecular weights; use the supplier's label and the protocol's specified form."
      ]},
      {heading: "When a recipe is ambiguous", paragraphs: [
        "Do not guess whether percent is mass/volume, volume/volume, or a dilution of a stock product. Distinguish active concentration from the concentration of a commercial preparation. Ask for the missing information or find a complete protocol."
      ], note: "The examples teach arithmetic only. They are not instructions to prepare or use a particular chemical." }
    ],
    refs: [{id: book, page: 43}, {id: primer, page: 5}, research.nutrition]
  },
  {
    id: "culture-environment", title: "The climate inside the vessel", category: "CULTURE FUNDAMENTALS", time: "9 MIN READ",
    intro: "Your jar is a tiny environment where light, gas exchange, humidity and temperature work together.",
    takeaway: "The vessel and closure are part of the treatment. Changing them can change the culture even when the medium recipe stays the same.",
    sections: [
      {heading: "Light and temperature", paragraphs: [
        "Light intensity, spectrum and photoperiod are distinct variables: a lamp's color or watts alone does not tell you how much usable light reaches the plant. Different species and stages can respond differently. Darkness may be useful for specific induction protocols but is not a universal requirement.",
        "Culture temperature is the temperature experienced by the vessel, not necessarily room air temperature. Direct sun can overheat a closed container. Follow the source protocol and measure conditions where the cultures actually sit."
      ]},
      {heading: "Humidity and gases", paragraphs: [
        "Closures reduce contamination and drying but can limit gas exchange. Carbon dioxide, oxygen, ethylene and water vapor may differ from room air. Too little exchange or too much liquid contact can contribute to abnormal growth in some systems; extra ventilation also changes contamination and dehydration risks.",
        "Record vessel type, medium volume, lid or filter, and position. Avoid casually opening vessels to increase ventilation. Use a closure validated for the intended culture."
      ]},
      {heading: "Hyperhydricity is a clue, not a diagnosis", paragraphs: [
        "Hyperhydric shoots may look translucent, swollen or brittle and can have impaired function. The condition has multiple interacting causes, including the vessel environment and medium, and treatments are species-specific. Similar-looking symptoms can have different causes.",
        "Compare healthy and affected vessels and change one justified factor in a small trial rather than applying a generic fix."
      ]}
    ],
    refs: [research.light, research.hyperhydricity, {id: book, page: 32}, {id: book, page: 43}]
  },
  {
    id: "plant-cases", title: "Compare two plant projects", category: "IN PRACTICE", time: "8 MIN READ",
    intro: "Use examples to see why the plant, tissue and objective must travel together with a protocol.",
    takeaway: "African violet and begonia demonstrations are useful case studies, not interchangeable recipes or guarantees for every cultivar.",
    sections: [
      {heading: "Case one: African violet leaves", paragraphs: [
        "One of your videos demonstrates African violet propagation from leaf pieces. This is an example of using a leaf rather than an existing axillary bud. The presenter describes selecting material, preparing medium and transferring the pieces, followed by observation.",
        "Before copying the method, identify the exact plant and verify a suitable protocol and medium. The source's equipment and chemical details are specific to its demonstration; follow product and equipment instructions and avoid assuming its sterilization settings validate your setup."
      ]},
      {heading: "Case two: begonia", paragraphs: [
        "The begonia demonstration describes cultures progressing through multiplication and acclimation. Begonias encompass many species and cultivars; the name alone does not establish that one leaf, regulator formulation or timeline works for all of them.",
        "Record the starting material and stage separately. A culture purchased already established can be used to practice subculture or acclimation without also solving the establishment of an outdoor explant."
      ]},
      {heading: "A comparison checklist", list: [
        "Identify plant, cultivar if known, source and explant.",
        "Describe the goal: clean establishment, multiplication, rooting or acclimation.",
        "Compare medium and environment at each stage, not just the first recipe.",
        "Count clean and living cultures separately; follow survival through acclimation.",
        "Keep results specific to the tested plant and conditions."
      ]}
    ],
    refs: [{id: V.clone, at: 20}, {id: V.clone, at: 766}, {id: V.begonia, at: 0}, {id: V.acclimate, at: 370}]
  },
  {
    id: "regeneration-pathways", title: "How plants regenerate", category: "ADVANCED CONCEPTS", time: "11 MIN READ",
    intro: "Compare existing-bud multiplication with organogenesis and somatic embryogenesis.",
    takeaway: "More than one route can produce a plantlet. The route affects what the result means, how it is evaluated, and the risk of variation.",
    sections: [
      {heading: "Existing buds versus new organs", paragraphs: [
        "Axillary shoot proliferation encourages an existing bud or meristem to grow and branch. Organogenesis is the formation of organs such as shoots or roots from cultured tissue. It may occur directly from the explant or indirectly after a callus phase.",
        "Callus is a proliferating tissue, not automatically a disorganized mass of identical cells. Some callus will never regenerate a shoot. A shoot from organogenesis still needs a suitable route to rooting and acclimation."
      ]},
      {heading: "Somatic embryogenesis", paragraphs: [
        "Somatic embryos arise from non-reproductive cells and can develop a bipolar shoot-root organization. Like organogenesis, somatic embryogenesis may be direct or involve an intervening callus. An embryo-like structure is not necessarily a viable complete plant; conversion and subsequent growth must be assessed.",
        "Competence to respond and the transition between cell states are controlled by tissue identity, culture environment and gene regulation. Experimental findings in a model species do not establish that all explants or plants have the same regenerative capacity."
      ]},
      {heading: "Choosing a route", paragraphs: [
        "For routine multiplication, established bud-based methods may be preferable when maintaining the donor's traits is important, although no pathway guarantees absolute fidelity. Callus-based and embryogenic systems can be valuable for research and large-scale multiplication, but require species-specific validation."
      ]}
    ],
    refs: [research.regeneration, {id: primer, page: 5}, {id: tubes, page: 155}, research.immersion]
  },
  {
    id: "contamination-diagnosis", title: "Investigate contamination", category: "ADVANCED CONCEPTS", time: "9 MIN READ",
    intro: "Separate observation, hypotheses and evidence when a culture fails.",
    takeaway: "Contamination can originate from the medium, handling, the plant surface or organisms inside the plant. Appearance and timing alone cannot identify the cause.",
    sections: [
      {heading: "Build a timeline", paragraphs: [
        "Record when vessels were prepared, opened, planted and first showed visible changes. A medium-only control checks some preparation and handling failures; several explants from one donor share a possible source. A control that remains clear cannot rule out every problem.",
        "Record which donor, batch and transfer session each vessel belongs to. Grouping by these factors can suggest a shared cause, but a pattern is not proof. Surface-disinfection damage can also be mistaken for infection."
      ]},
      {heading: "Latent and internal organisms", paragraphs: [
        "Some bacteria and fungi occur within plant tissue and may not be visible initially. Some are harmless or beneficial in other settings but still interfere with aseptic propagation. Surface disinfection cannot be assumed to eliminate internal organisms.",
        "Do not identify organisms by color, smell or texture and do not attempt to culture unknown contaminants separately at home. If contamination is suspected, keep the vessel closed, isolate it from healthy stock, and follow local disposal advice."
      ]},
      {heading: "Test a specific hypothesis", paragraphs: [
        "If a whole medium batch fails, inspect the preparation process and container integrity. If failures cluster by donor, compare independently sourced material under the same protocol. If they cluster by session, review handling. Keep records and controls; don't increase chemical strength blindly."
      ]}
    ],
    refs: [research.endophytes, {id: book, page: 60}, {id: V.sterilize, at: 0}]
  },
  {
    id: "experiments", title: "Design a useful experiment", category: "ADVANCED CONCEPTS", time: "11 MIN READ",
    intro: "Turn a shelf of jars into evidence you can interpret and repeat.",
    takeaway: "Define the question and outcome first, use independent replicates and controls, and record both successes and failures.",
    sections: [
      {heading: "From question to comparison", paragraphs: [
        "Ask a focused question such as whether two documented media differ in shoot production for the same cultivar and tissue. Write down the treatments, observation period and primary outcome before starting. Avoid comparing a new medium on one donor with an old medium on a different donor.",
        "A control is a comparator chosen for the question. A medium-only control can reveal some contamination of the prepared vessel but cannot measure explant growth. A known baseline medium is a different kind of control. Neither guarantees the experiment is unbiased."
      ]},
      {heading: "Replicates and fair comparison", paragraphs: [
        "Use multiple independent vessels per treatment, distribute material from donor plants across treatments where appropriate, and record donor identity. Explants sharing a vessel are not automatically independent replicates: they share air, medium and contamination risk. The vessel is often the experimental unit.",
        "Assign comparable explants to treatments without favoring one group and distribute vessels across shelf positions; rotate positions when appropriate. A small home experiment can reveal useful patterns, but small samples and uncontrolled differences limit confidence."
      ]},
      {heading: "Measure denominators", list: [
        "Establishment: number of clean, living explants / total started, at a stated date.",
        "Contamination: vessels showing contamination / vessels observed, with the observation window.",
        "Multiplication: shoots meeting a defined size criterion per starting explant or vessel, with the interval.",
        "Rooting and acclimation: rooted or surviving plantlets / number entering that stage, at a stated date.",
        "Record missing and lost cultures and the reason; don't silently remove failures from the denominator."
      ]},
      {heading: "Interpret cautiously", paragraphs: [
        "Photographs, dates and counts are more useful than impressions alone. Distinguish biological replicates from repeated measurements of one vessel. A result from one batch is a hypothesis for the next, not proof that a recipe is universal."
      ]}
    ],
    refs: [{id: book, page: 70}, {id: book, page: 75}, research.regeneration]
  },
  {
    id: "genetic-stability", title: "Clones and variation", category: "ADVANCED CONCEPTS", time: "9 MIN READ",
    intro: "Understand what a clone does—and does not—promise.",
    takeaway: "Vegetative propagation can preserve a genotype, but culture-derived plants can vary. Visual similarity alone does not prove genetic or pathogen status.",
    sections: [
      {heading: "Where differences come from", paragraphs: [
        "Somaclonal variation describes differences observed among plants derived from tissue culture. These can reflect genetic changes, chromosome changes, epigenetic changes or pre-existing variation. Some visible differences can instead result from environment, developmental stage or temporary culture effects.",
        "Risk depends on genotype, explant, pathway, growth regulators and time in culture. Extended callus or repeated regeneration can increase concern, but variation is not exclusive to those pathways and a bud-derived plant is not automatically verified."
      ]},
      {heading: "Chimeras and variegation", paragraphs: [
        "A chimeric plant contains genetically distinct cell populations in different tissues or layers. A regenerated shoot may not retain the same contribution of those populations, so variegation and other traits may change. Not all variegation has the same cause.",
        "Keep separate line identities and compare mature plants under similar conditions. Record unexpected morphology rather than assuming it is desirable or stable."
      ]},
      {heading: "What can be verified?", paragraphs: [
        "Morphology, chromosome analysis and molecular tests can answer different questions; no single visual check proves complete genetic identity. Likewise, meristem culture alone does not establish a virus-free plant. Disease-indexing requires appropriate validated tests and expertise."
      ]}
    ],
    refs: [research.variation, {id: primer, page: 4}, {id: book, page: 85}]
  },
  {
    id: "advanced-systems", title: "Beyond the hobby jar", category: "ADVANCED CONCEPTS", time: "10 MIN READ",
    intro: "A guided overview of methods used in research, conservation and commercial propagation.",
    takeaway: "Advanced systems are specialized tools, not automatic upgrades. They require facilities, validation and species-specific expertise.",
    sections: [
      {heading: "Liquid culture and temporary immersion", paragraphs: [
        "In liquid systems tissue has contact with medium without a solid gel. Temporary immersion systems alternate contact and exposure to air, and are used for some large-scale propagation and somatic embryogenesis systems. They can improve handling or multiplication in a particular system, but contamination can affect a large shared vessel.",
        "Immersion duration, interval, gas exchange, vessel design and tissue density interact. Research results for one genotype or bioreactor cannot be assumed to transfer to another."
      ]},
      {heading: "Meristems, conservation and cryopreservation", paragraphs: [
        "Specialist shoot-tip and meristem culture can support propagation or pathogen-management programs; testing remains essential. Conservation programs may use slow-growth storage or cryopreservation of suitable tissues, alongside genetic identity and viability checks.",
        "Cryopreservation means storage at very low temperature, typically using liquid nitrogen in professional facilities. It requires validated protocols, safety equipment and trained operators; it is not simply placing a plant in a household freezer."
      ]},
      {heading: "Cell cultures and breeding applications", paragraphs: [
        "Callus, cell suspensions, embryo rescue and anther or microspore culture serve research or breeding objectives beyond ordinary clonal propagation. Their products may be genetically different from the source plant or require further development and testing.",
        "Work within applicable local laws and seek professional facilities for specialized chemicals, equipment and pathogen testing. Use the source library to investigate a specific technique before attempting to interpret its results."
      ]}
    ],
    refs: [research.immersion, {id: primer, page: 5}, {id: "PP9900267.pdf", page: 1}, {id: book, page: 17}]
  },
  {
    id: "reading-protocols", title: "Read research like a grower", category: "ADVANCED CONCEPTS", time: "9 MIN READ",
    intro: "Use papers and books to find a sound starting point without confusing an example for a universal recipe.",
    takeaway: "A useful protocol identifies the organism, tissue, complete conditions, outcome and limitations. Missing details or poor evidence deserve caution.",
    sections: [
      {heading: "Start with the question", paragraphs: [
        "Identify the species, cultivar or genotype, explant and objective. Is the work about initiating clean cultures, multiplying shoots, inducing embryos or acclimating plants? A successful protocol for one objective may not serve another.",
        "Distinguish a primary experiment from a review, a textbook summary or a hobby demonstration. Reviews synthesize evidence; a primary paper reports a particular experiment; a video may demonstrate practical handling but may omit key controlled conditions."
      ]},
      {heading: "Read methods and results together", list: [
        "Check basal medium, strength, sugar, regulators and final concentrations, pH, gelling agent and processing.",
        "Record donor preparation, explant age and size, vessel and closure, light, temperature and time.",
        "Find the sample size, independent experimental unit, controls and measures of success.",
        "Look for losses, contamination, acclimation survival and genetic or pathogen testing, not only the best-looking image.",
        "Check whether the procedure relies on professional equipment or hazardous reagents unavailable at home."
      ]},
      {heading: "Know what the evidence does not say", paragraphs: [
        "A reported percentage is meaningful only with its denominator and observation window. One genotype, one laboratory and one publication may not generalize. If a necessary detail is missing, do not invent it; look for the cited method or another reliable source.",
        "The external research links in these lessons lead to textbooks and article records. Some papers may be paywalled. The local PDF links point to viewer page numbers, which may differ from printed pages."
      ]}
    ],
    refs: [{id: book, page: 70}, research.variation, research.immersion]
  }
];

const trackDefinitions = [
  {title: "01 · Understand the plant", description: "Start with cells, anatomy and the physiology that makes culture possible.", ids: ["big-picture", "plant-cells", "plant-anatomy", "plant-reproduction", "plant-physiology", "growth-signals"]},
  {title: "02 · Prepare your first culture", description: "Choose a project and learn the practical foundations of clean work.", ids: ["first-project", "workspace", "clean-technique", "medium", "explant-choice", "establishment"]},
  {title: "03 · Grow, observe and adapt", description: "Understand the vessel, transfer cultures and move plantlets to the outside world.", ids: ["medium-deep-dive", "reading-formulations", "culture-environment", "subculture", "troubleshooting", "acclimation", "plant-cases"]},
  {title: "04 · Explore the science", description: "Examine regeneration, experimental evidence and the limits of advanced techniques.", ids: ["regeneration-pathways", "contamination-diagnosis", "experiments", "genetic-stability", "advanced-systems", "reading-protocols"]}
];
const allLessons = [...lessons, ...additionalLessons];
lessons.splice(0, lessons.length, ...trackDefinitions.flatMap(track => track.ids.map(id => {
  const lesson = allLessons.find(item => item.id === id);
  if (!lesson) throw new Error(`Unknown lesson in learning path: ${id}`);
  return lesson;
})));

const lessonExpansions = {
  "big-picture": {
    sections: [{heading: "What does 'in vitro' mean?", paragraphs: [
      "In vitro means outside the whole organism, in a controlled artificial setting. In plant propagation it often means growing a small plant part or plantlet on a defined medium in a vessel. The vessel is a tool for providing conditions; it does not by itself guarantee sterility or regeneration.",
      "Micropropagation is one application of plant tissue culture. Other applications include conserving germplasm, studying development and producing plants for research. These goals use different tissues and may not produce the same genetic result."
    ]}],
    refs: [{id: primer, page: 1}, research.regeneration]
  },
  "first-project": {
    sections: [{heading: "Choose an outcome you can observe", paragraphs: [
      "A beginner can first practice moving a purchased, clean plantlet to an appropriate fresh vessel or acclimating it to a substrate. Starting with field-grown tissue adds the separate challenge of establishment. Keep the two activities conceptually distinct when you evaluate success.",
      "Before starting, write down how many containers you have, what a healthy plantlet or new shoot will look like, and the date you will count outcomes. A realistic small batch and a backup plant keep an early setback manageable."
    ]}],
    refs: [{id: tubes, page: 15}]
  },
  "workspace": {
    sections: [{heading: "Think in zones", paragraphs: [
      "Separate preparation and washing, clean transfer, and plant growth areas as far as your space allows. Plan a path for clean supplies that avoids crossing dirty materials. Keep chemicals and equipment in their original labeled containers and out of living and food-preparation areas.",
      "A still-air box reduces air movement; a laminar-flow cabinet relies on a correctly maintained filter and airflow. Neither makes a contaminated explant clean or guarantees the result. Regular cleaning and careful work remain necessary."
    ]}],
    refs: [{id: book, page: 32}]
  },
  "clean-technique": {
    sections: [{heading: "The treatment trade-off", paragraphs: [
      "A surface treatment must contact the tissue, but increasing its strength or duration can kill plant cells before the culture begins. Commercial bleach products have different active-ingredient concentrations, so '10% bleach' is ambiguous without the original product and dilution basis.",
      "Internal microorganisms can persist even after a successful surface treatment. If repeated clean-looking tissue later becomes contaminated, record the pattern and investigate the donor and handling rather than assuming a single cause."
    ]}],
    refs: [research.endophytes, {id: book, page: 60}]
  },
  "medium": {
    sections: [{heading: "Ingredients interact", paragraphs: [
      "A basal salt mixture, sugar, vitamins and gelling agent create a combined chemical and physical environment. pH and processing influence nutrient availability and gel behavior; changing one ingredient can change more than one variable.",
      "When reading a formulation, distinguish the stock concentration from the final concentration in the vessel. Growth regulators and salt mixtures are not interchangeable by name. The later medium lesson explains these ideas and a worked dilution example."
    ]}],
    refs: [research.nutrition, {id: book, page: 43}]
  },
  "establishment": {
    sections: [{heading: "Evaluate two separate outcomes", paragraphs: [
      "A culture can be free of visible contamination yet fail because the explant is damaged or the conditions do not support growth. Conversely, an explant may begin to grow before latent contamination becomes visible. Record both cleanliness and viability at defined times.",
      "Compare similar pieces from the same donor where practical and keep a medium-only control. A control helps investigate the medium but cannot determine whether microorganisms came from inside a plant."
    ]}],
    refs: [research.endophytes, {id: book, page: 51}]
  },
  "subculture": {
    sections: [{heading: "Count what you transfer", paragraphs: [
      "A transfer interval depends on plant growth, vessel size and the formulation. Record the date, number and size of shoots placed into each vessel, the medium and the next observation date. Overcrowding can make results difficult to compare.",
      "Keep lines from different donor plants or unusual-looking cultures separate. Record the number of transfers, because culture history and regeneration route can matter when assessing variation."
    ]}],
    refs: [research.variation]
  },
  "troubleshooting": {
    sections: [{heading: "Symptoms can overlap", paragraphs: [
      "Brown tissue may follow injury, oxidation or other stresses; a translucent shoot may suggest hyperhydricity; a dead shoot tip can have several possible causes. The appearance is a starting observation, not a diagnosis.",
      "Check the relevant medium, plant, vessel, environment and transfer history together. If you compare treatments, make a small controlled change rather than altering light, medium and timing simultaneously."
    ]}],
    refs: [research.hyperhydricity, research.tip]
  },
  "acclimation": {
    sections: [{heading: "Why the transition takes time", paragraphs: [
      "Culture leaves often developed under high humidity, with reduced evaporative demand and a supplied carbon source. Their water regulation and photosynthetic capacity may need to adjust to the new environment. Existing roots may not perform like roots formed after transfer.",
      "Judge readiness by the plant's condition and the specific protocol. Maintain appropriate humidity while avoiding overheating and stagnant, waterlogged conditions, then gradually increase ventilation as the plant tolerates it. Watch new growth over time."
    ]}],
    refs: [research.transport, research.light]
  }
};
for (const lesson of lessons) {
  const expansion = lessonExpansions[lesson.id];
  if (expansion) {
    lesson.sections.push(...expansion.sections);
    lesson.refs.push(...expansion.refs);
  }
}

glossary.push(
  ["Adventitious", "Arising from an unusual location, such as a root forming on a stem."],
  ["Apical meristem", "A growing region near a shoot or root tip containing cells that contribute to new growth."],
  ["Axillary bud", "A bud in the angle between a leaf and stem that may develop into a lateral shoot."],
  ["Chimera", "An organism containing genetically distinct cell populations in its tissues."],
  ["Cytokinin-to-auxin balance", "A contextual relationship between growth signals; not a universal recipe for organs."],
  ["Endophyte", "An organism living inside plant tissue; its relationship with the plant can vary."],
  ["Genotype", "The genetic makeup of an organism, or a particular genetic line used in a study."],
  ["Hyperhydricity", "A physiological disorder in culture often associated with translucent, water-soaked or brittle growth."],
  ["Internode", "The stem region between two nodes."],
  ["Node", "A region of a stem where a leaf attaches and an axillary bud may be present."],
  ["Organogenesis", "Formation of organs such as shoots or roots, directly or through an intermediate tissue."],
  ["Osmotic potential", "The solute-related component of water potential; dissolved solutes lower water potential."],
  ["Phloem", "Vascular tissue that transports sugars and other organic compounds between plant tissues."],
  ["Somaclonal variation", "Variation observed among plants regenerated through tissue culture."],
  ["Somatic embryo", "An embryo-like structure produced from a non-reproductive cell or tissue."],
  ["Stoma", "A pore in the epidermis, regulated by guard cells, involved in gas exchange and water loss."],
  ["Turgor", "Pressure of a cell's contents against its cell wall, supporting growth and rigidity."],
  ["Xylem", "Vascular tissue that conducts water and dissolved minerals through the plant."]
);
glossary.sort((a, b) => a[0].localeCompare(b[0]));
