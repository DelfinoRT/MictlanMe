// The source identifiers correspond to the original filenames in the parent folder.
const V = {
  science: "Plants in a Jar - The Science Behind Plant Tissue Culture .txt",
  clone: "Plants in a Jar - How to Clone Plants at Home .txt",
  setup: "Plants in a Jar - How to Build a Home Tissue Culture Laboratory.txt",
  media: "Plants in a Jar - How to Sterilize Tissue Culture Media at Home (Autoclaving Tissue Culture Media).txt",
  sterilize: "Plant Cell - Master Plant Sterilization For Perfect Tissue Culture Results! .txt",
  subculture: "Plants in a Jar - How to Subculture Tissue Culture Plants .txt",
  acclimate: "Plants in a Jar - The BEST Method for Acclimating Tissue Culture Plants (2026).txt",
  begonia: "Plants in a Jar - DIY Tissue Culture Begonias.txt",
  carnivorous: "Topaz - Complete DIY Tissue Culture Guide - Carnivorous Plants .txt",
  ultimate: "The Ultimate Guide to Tissue Culture EVERYTHING You Need to Get Started.txt"
};
const lessons = [
  {
    id: "big-picture", title: "A tiny plant, a big idea", category: "THE FOUNDATIONS", time: "5 MIN READ",
    intro: "Meet the process that turns a small piece of plant into a whole new growing adventure.",
    takeaway: "Tissue culture is a way to grow plant material in a protected container on a prepared medium. It is not a guarantee that every piece—or every species—will grow.",
    sections: [
      { heading: "What actually happens?", paragraphs: [
        "A small piece of plant, called an explant, is placed on a nutrient medium in a clean container. If the plant and conditions cooperate, it can grow shoots or roots. The plantlets can then be moved to fresh medium and, eventually, adapted to ordinary growing conditions.",
        "The container provides water, nutrients and often sugar. Plant growth regulators may encourage particular responses, but the result depends on the species, the tissue and the recipe. A recipe that works for one plant is not a universal formula."
      ]},
      { heading: "Why grow this way?", paragraphs: [
        "Tissue culture can multiply plants in a small space and lets you observe growth up close. It also asks for patience: contamination, damaged tissue and slow responses are normal parts of learning.",
        "Clones are not automatically identical in every trait. Variation can occur, especially through some regeneration pathways. Avoid making guarantees about genetic identity or disease-free plants."
      ]},
      { heading: "The journey in five steps", list: ["Choose healthy source material and a suitable protocol.", "Establish a clean explant in a container.", "Multiply shoots or maintain the culture on fresh medium.", "Encourage roots when appropriate for the plant.", "Acclimate plantlets gradually to life outside the container."] }
    ],
    refs: [{id: V.science, at: 0}, {id: V.science, at: 125}, {id: V.clone, at: 0}, {id: "Plant_Tissue_Culture_laboratory.pdf", page: 4}]
  },
  {
    id: "first-project", title: "Plan your first culture", category: "GETTING STARTED", time: "6 MIN READ",
    intro: "Start small, pick a forgiving example, and make your first attempt an experiment—not a test.",
    takeaway: "A small, well-labelled batch teaches more than a complicated setup with too many changing variables.",
    sections: [
      { heading: "Choose an achievable example", paragraphs: [
        "The African violet leaf demonstration in your collection is a useful starting case. Watch it through first, then obtain a protocol for the same plant and tissue. The demonstration is an example, not a promise of success or a recipe for all plants.",
        "Use a healthy, readily replaceable parent plant. Avoid your rarest specimen for the first attempt. Consider starting with commercially prepared sterile medium and established plantlets to practice transfer and acclimation before preparing your own medium or introducing outdoor material."
      ]},
      { heading: "Before you begin", list: [
        "Identify your plant and the explant specified by your chosen protocol.",
        "Check that you have suitable containers, clean tools, medium and a low-draft workspace.",
        "Read the whole protocol and the manufacturer instructions for any equipment and products.",
        "Label containers with plant, date, medium and experiment; leave a medium-only control unopened.",
        "Plan a place with appropriate light and temperature, and decide how you will observe and dispose of failed cultures."
      ]},
      { heading: "Keep a simple record", paragraphs: [
        "Note the plant, source tissue, medium, dates, and observations. Photograph containers without opening them. Track what changed and when; if you change several variables at once, it is hard to learn what helped."
      ], note: "Keep children and pets away from chemicals, equipment and cultures. Work in a well-ventilated area, follow labels and never mix cleaning chemicals." }
    ],
    refs: [{id: V.clone, at: 20}, {id: V.clone, at: 766}, {id: V.ultimate, at: 0}]
  },
  {
    id: "workspace", title: "Make room to grow", category: "GETTING STARTED", time: "5 MIN READ",
    intro: "You don't need a professional lab to begin, but you do need a thoughtful workspace.",
    takeaway: "Clean surfaces and deliberate movements reduce contamination risk; a still-air box is not a sterile room or a substitute for good technique.",
    sections: [
      { heading: "The essentials", list: [
        "A clear, washable work surface away from drafts, pets and household traffic.",
        "A still-air box or another appropriate clean working setup.",
        "Clean, suitable culture containers, sterile tools, labels and a way to prepare or obtain sterile medium.",
        "Appropriate gloves and eye protection for the products you use.",
        "A shelf with gentle, consistent light and temperatures suitable for the plant."
      ]},
      { heading: "What a still-air box does", paragraphs: [
        "A still-air box limits air movement around open containers, reducing the chance that airborne particles fall in. It does not filter air like a properly functioning laminar-flow cabinet. Set up in advance so you can work without unnecessary movement.",
        "Move slowly, avoid passing your hands over open vessels, and keep lids in your hand rather than placing them on a dirty surface. Keep exposure time short."
      ], note: "Alcohol vapors are flammable. Do not use flames, sparks or hot tools near alcohol, especially in an enclosed box. Follow product and equipment instructions." }
    ],
    refs: [{id: V.setup, at: 79}, {id: V.clone, at: 719}, {id: V.clone, at: 1022}]
  },
  {
    id: "clean-technique", title: "Think clean, work clean", category: "THE ESSENTIALS", time: "7 MIN READ",
    intro: "Clean technique is a chain of small decisions. Learn where unwanted organisms can enter.",
    takeaway: "Cleaning removes visible dirt; disinfecting reduces organisms; sterilizing aims to eliminate them. These terms are not interchangeable.",
    sections: [
      { heading: "Follow the contamination trail", paragraphs: [
        "Microorganisms can arrive on plant surfaces, inside plant tissue, in inadequately prepared medium, on tools, or from the surrounding air. A clear-looking explant is not necessarily contamination-free.",
        "Prepare your workspace and supplies before opening a container. Handle only what is needed and avoid touching sterile surfaces. Surface treatment of a plant is a balance: too little may leave contamination; too much may damage the plant. Different tissues need different protocols."
      ]},
      { heading: "A clean-work checklist", list: [
        "Wash away visible dirt before any protocol-specific surface treatment.",
        "Use the specified product and concentration for the chosen plant protocol; check the actual product strength.",
        "Follow the protocol for sterile rinses and prevent contact between treated material and dirty surfaces.",
        "Open containers only as needed and use appropriately sterilized tools.",
        "Seal and label the vessel in the manner appropriate for that culture."
      ], note: "Never mix bleach with alcohol, acids, ammonia, or other cleaners. Wear appropriate protection and follow the product label. Do not improvise concentrations or heating methods." },
      { heading: "A useful control", paragraphs: ["Keep one prepared container without an explant closed under the same conditions. If it becomes contaminated, medium preparation or container handling may be involved; a clean control does not prove that the rest of the process was sterile."] }
    ],
    refs: [{id: V.clone, at: 779}, {id: V.clone, at: 1022}, {id: V.sterilize, at: 0}]
  },
  {
    id: "medium", title: "What's in the medium?", category: "THE ESSENTIALS", time: "6 MIN READ",
    intro: "That little bed of gel is a carefully prepared growing environment, not just food for the plant.",
    takeaway: "Media vary by plant and growth stage. Use a documented formulation rather than guessing at ingredients or regulator doses.",
    sections: [
      { heading: "The usual building blocks", list: [
        "Mineral salts and vitamins supply nutrients.",
        "Sugar supplies a carbon source in many culture systems.",
        "A gelling agent such as agar supports the tissue in solid medium.",
        "Plant growth regulators, when used, influence development; their effects depend on the plant and concentration."
      ]},
      { heading: "One medium, different jobs", paragraphs: [
        "Establishment, shoot multiplication and rooting can call for different formulations. Auxins and cytokinins are categories of plant growth regulators, not interchangeable universal shortcuts. The same balance may produce different results in different plants.",
        "For a first project, a suitable ready-made medium can reduce the number of variables. If preparing your own, follow a plant-specific recipe and verify measurement units, pH requirements, and whether ingredients are heat-sensitive."
      ]},
      { heading: "Sterilization is a process, not a guess", paragraphs: [
        "Some demonstrations use a pressure cooker to process medium. Effective sterilization depends on equipment, load, container and a validated procedure; a video time or pressure should not be assumed adequate for your setup.",
        "Use only equipment and containers rated for the task, follow the manufacturer's instructions, and allow pressure and contents to cool safely before opening. If you cannot verify a suitable process, use commercially prepared sterile medium."
      ], note: "Never seal containers airtight while heating, force open a pressurized vessel, or substitute an unverified heating method." }
    ],
    refs: [{id: V.science, at: 125}, {id: V.clone, at: 165}, {id: V.clone, at: 517}, {id: V.media, at: 0}, {id: "Plant Tissue Culture lebt107.pdf", page: 5}]
  },
  {
    id: "establishment", title: "From explant to culture", category: "IN PRACTICE", time: "6 MIN READ",
    intro: "Establishment is the first handoff: a piece of living plant enters a protected environment.",
    takeaway: "Healthy tissue, a suitable protocol and careful handling all matter. Clean-looking is not the same as successfully established.",
    sections: [
      { heading: "Select and prepare", paragraphs: [
        "An explant is the plant part used to start the culture. Depending on the protocol it might be a leaf, node, shoot tip or another tissue. Start with healthy material and follow the specific protocol for tissue selection and preparation.",
        "The African violet demonstration uses leaf pieces. Other plants and methods need different explants. Some contaminants live inside tissue and cannot reliably be removed by surface disinfection alone."
      ]},
      { heading: "Make the transfer", list: [
        "Prepare the work area and all materials before starting.",
        "Clean and treat the source material according to the plant-specific protocol, then use its specified sterile rinses.",
        "With suitable sterile tools, prepare the explant and place it in contact with the medium.",
        "Close and label the container, then move it to the recommended growing conditions.",
        "Observe from outside the closed vessel and keep records alongside a medium-only control."
      ]},
      { heading: "Give it time", paragraphs: [
        "A clean container may still contain stressed or non-growing tissue. Look for changes over time rather than making a judgment on day one. Growth rates, light and temperature requirements depend on the species and protocol."
      ] }
    ],
    refs: [{id: V.clone, at: 766}, {id: V.clone, at: 912}, {id: V.begonia, at: 0}]
  },
  {
    id: "troubleshooting", title: "Read the jar", category: "IN PRACTICE", time: "7 MIN READ",
    intro: "A culture tells a story. Learn to notice the difference between growth, stress and contamination.",
    takeaway: "Observe sealed containers regularly. When contamination is suspected, isolate the container and avoid opening it in your clean workspace.",
    sections: [
      { heading: "What you might see", list: [
        "Fuzzy growth or spreading spots can indicate mold; cloudy liquid, slime or spreading colonies may indicate microbial contamination.",
        "Browning around tissue can be a stress response, but discoloration alone does not establish a cause.",
        "Pale, translucent or water-soaked growth can indicate physiological stress; check the protocol and environment.",
        "No visible growth may reflect slow development, damaged tissue, unsuitable conditions or other causes."
      ]},
      { heading: "Respond, then learn", paragraphs: [
        "Keep a suspect container closed and away from healthy cultures. Do not sniff, touch, or attempt to identify a contaminant by appearance. Follow local disposal guidance and product instructions; if unsure, seek local advice before handling.",
        "Compare with your medium-only control and your notes. Contamination in several containers shortly after transfer may point to a shared step; a single affected explant could have a different source. These are clues, not diagnoses."
      ]},
      { heading: "Change one thing at a time", paragraphs: ["Use a small repeat batch, record what you changed and keep the rest of the procedure consistent. Do not assume that stronger chemicals, more heat or more growth regulator will fix the problem."] }
    ],
    refs: [{id: V.clone, at: 780}, {id: V.sterilize, at: 0}, {id: V.subculture, at: 0}]
  },
  {
    id: "subculture", title: "Room to multiply", category: "IN PRACTICE", time: "5 MIN READ",
    intro: "When a culture grows, a fresh container can give it room and a renewed supply of medium.",
    takeaway: "Subculturing means transferring tissue to fresh medium using clean technique. Timing and how to divide a plant depend on the culture.",
    sections: [
      { heading: "When and why", paragraphs: [
        "Plants use the resources in the medium and may outgrow a container. A protocol may call for transferring or dividing shoots and moving them to fresh medium. The source demonstration gives an example interval, but timing is not universal.",
        "Before opening anything, prepare the receiving containers and tools. Inspect the source culture for signs of contamination and do not transfer a suspect culture into your clean area."
      ]},
      { heading: "The transfer mindset", list: [
        "Label fresh containers with plant, date, medium and transfer number.",
        "Plan how the plant material will be divided according to the relevant protocol.",
        "Minimize exposure and avoid passing hands or nonsterile items over open containers.",
        "Place tissue on the appropriate fresh medium, close the containers and return them to suitable conditions.",
        "Record the results and any changes in appearance."
      ] }
    ],
    refs: [{id: V.subculture, at: 0}, {id: V.subculture, at: 400}]
  },
  {
    id: "acclimation", title: "Life outside the jar", category: "THE NEXT CHAPTER", time: "6 MIN READ",
    intro: "Your plantlets have grown up in a sheltered world. Help them adjust to the outside, gradually.",
    takeaway: "Acclimation is a transition, not a single event. The pace, substrate and water requirements depend on the plant.",
    sections: [
      { heading: "Why the change is hard", paragraphs: [
        "Inside a closed culture vessel, humidity is high and conditions are stable. A plantlet moved straight into dry air or strong sun can lose water faster than it can adjust.",
        "When plantlets are ready under the relevant protocol, gently remove medium from roots, place them in a suitable clean, moist substrate, and provide high humidity and gentle light. Avoid direct sun and overheating under a humidity cover."
      ]},
      { heading: "Watch and adjust", paragraphs: [
        "Gradually increase ventilation as the plants tolerate it. Watch for wilting, excessive wetness or rot, and adjust rather than following a rigid calendar. Keep substrate moist but not waterlogged, unless the plant's specific needs differ.",
        "Different groups need different care. For example, carnivorous plants may have special water and nutrition requirements, so check an appropriate species-specific guide."
      ]},
      { heading: "Celebrate the small wins", paragraphs: ["A plantlet that produces healthy new growth outside the vessel is a milestone. Record what worked and give it time to establish before treating it like a mature plant."] }
    ],
    refs: [{id: V.acclimate, at: 210}, {id: V.acclimate, at: 370}, {id: V.acclimate, at: 520}, {id: V.carnivorous, at: 0}, {id: "Plant_Tissue_Culture_laboratory.pdf", page: 9}]
  }
];
const glossary = [
  ["Acclimation", "Gradually adapting a plantlet from the protected culture vessel to outside growing conditions."],
  ["Aseptic technique", "Practices intended to prevent unwanted microorganisms from entering a culture."],
  ["Auxin", "A class of plant growth regulators whose effects depend on concentration, tissue and context."],
  ["Callus", "A mass of proliferating plant cells; its formation does not guarantee a whole plant can be regenerated."],
  ["Contamination", "Unwanted organisms or other material in a culture; microbes can overgrow the plant."],
  ["Cytokinin", "A class of plant growth regulators involved in growth and development, often used in shoot culture."],
  ["Explant", "A piece of plant tissue used to start a culture."],
  ["Medium", "The prepared mixture that supports tissue in a culture vessel."],
  ["Meristem", "A region of actively dividing plant cells; some protocols use shoot tips or meristematic tissue."],
  ["Plant growth regulator", "A substance used to influence plant development; effects vary with plant, dose and context."],
  ["Sterilization", "A process intended to eliminate viable microorganisms; its effectiveness depends on the method and conditions."],
  ["Subculture", "Moving growing tissue to fresh medium, sometimes after dividing it."],
  ["Totipotency", "The potential of a plant cell to contribute to regeneration of a whole plant under suitable conditions; this is not equally easy in all tissues or species."]
];
