// Section headings refer to the original English curriculum, not translated headings.
const lessonIllustrations = {
  "plant-cells": {"The parts and their jobs": "plant-cell-structure"},
  "plant-anatomy": {
    "Shoots, nodes and buds": "stem-node-axillary-bud",
    "Leaves, roots and transport": "stem-vascular-tissues"
  },
  "explant-choice": {"Different tissues, different possibilities": "explant-types"},
  "workspace": {"What a still-air box does": "home-culture-workspace"},
  "establishment": {"Make the transfer": "nodal-explant-culture"},
  "troubleshooting": {"What you might see": "culture-observation-comparison"},
  "culture-environment": {"Hyperhydricity is a clue, not a diagnosis": "hyperhydricity-comparison"},
  "subculture": {"Count what you transfer": "subculture-lineage"},
  "acclimation": {"Watch and adjust": "plantlet-acclimation"},
  "plant-cases": {"Case one: African violet leaves": "african-violet-begonia-explants"},
  "regeneration-pathways": {"Existing buds versus new organs": "regeneration-pathways"},
  "genetic-stability": {"Chimeras and variegation": "variegation-observation"},
  "experiments": {"Replicates and fair comparison": "culture-experiment-groups"}
};

const illustrationText = {
  "plant-cell-structure": {
    en: ["Illustrative cutaway of a plant cell with a large central vacuole, nucleus and organelles.", "A generalized cell; not every plant cell contains chloroplasts."],
    es: ["Corte ilustrativo de una célula vegetal con una gran vacuola central, núcleo y orgánulos.", "Una célula generalizada; no todas las células vegetales contienen cloroplastos."]
  },
  "stem-node-axillary-bud": {
    en: ["Vine stem with a leaf stalk, aerial root and bud near a node; an inset enlarges the node.", "A conceptual view of a node and bud, not a cutting guide. Bud position and appearance vary."],
    es: ["Tallo de una planta trepadora con pecíolo, raíz aérea y yema cerca de un nudo; un detalle amplía el nudo.", "Representación conceptual de un nudo y una yema, no una guía de corte. La posición y el aspecto de las yemas varían."]
  },
  "stem-vascular-tissues": {
    en: ["Illustrative cross-section of a stem with vascular bundles arranged in a ring.", "A simplified young dicot stem, not a universal model or a Monstera cross-section."],
    es: ["Corte transversal ilustrativo de un tallo con haces vasculares dispuestos en un anillo.", "Tallo joven de dicotiledónea simplificado, no un modelo universal ni un corte de Monstera."]
  },
  "explant-types": {
    en: ["A stem segment with a bud, a shoot tip and a leaf with a petiole.", "Different explants need different protocols; the pictured tissues are examples, not interchangeable recipes."],
    es: ["Un segmento de tallo con una yema, un ápice de brote y una hoja con pecíolo.", "Cada explanto requiere un protocolo adecuado; estos tejidos son ejemplos, no recetas intercambiables."]
  },
  "home-culture-workspace": {
    en: ["Illustration of a home culture workspace with a still-air box, vessels, supplies and a notebook.", "Conceptual layout only: a still-air box does not sterilize air. The English product labels in the image are illustrative, not instructions; follow equipment and chemical safety guidance."],
    es: ["Ilustración de un espacio doméstico de cultivo con caja de aire quieto, recipientes, materiales y cuaderno.", "Distribución conceptual: una caja de aire quieto no esteriliza el aire. Las etiquetas en inglés de la imagen son ilustrativas, no instrucciones; sigue las indicaciones de seguridad de equipos y productos."]
  },
  "nodal-explant-culture": {
    en: ["A stem segment with a visible bud in a closed culture vessel on gel.", "A conceptual placement example, not a validated procedure. Follow the protocol for your plant."],
    es: ["Segmento de tallo con una yema visible sobre gel en un recipiente de cultivo cerrado.", "Ejemplo conceptual de colocación, no un procedimiento validado. Sigue el protocolo de tu planta."]
  },
  "culture-observation-comparison": {
    en: ["Four closed culture vessels showing clear medium, cloudiness, browned tissue and a developing shoot.", "Illustrative appearances, not a diagnosis: healthy and contaminated cultures can look different. Do not open or smell a suspect vessel."],
    es: ["Cuatro recipientes cerrados que muestran medio transparente, turbidez, tejido pardeado y un brote en desarrollo.", "Aspectos ilustrativos, no un diagnóstico: los cultivos sanos y contaminados pueden verse de distintas maneras. No abras ni huelas un recipiente sospechoso."]
  },
  "hyperhydricity-comparison": {
    en: ["Four closed culture vessels containing shoots, some with paler, translucent-looking leaves.", "A conceptual comparison only. Translucent leaves are not sufficient to diagnose hyperhydricity; symptoms can overlap."],
    es: ["Cuatro recipientes de cultivo cerrados con brotes, algunos con hojas más pálidas y de aspecto translúcido.", "Solo una comparación conceptual. Las hojas translúcidas no bastan para diagnosticar hiperhidricidad; los síntomas pueden confundirse."]
  },
  "subculture-lineage": {
    en: ["Several closed culture vessels containing a shoot cluster or smaller portions of tissue.", "A conceptual illustration of transfers; record the parent vessel and each successor. The number of plants is not guaranteed."],
    es: ["Varios recipientes cerrados con un grupo de brotes o porciones de tejido más pequeñas.", "Ilustración conceptual de transferencias; registra el recipiente de origen y cada sucesor. La cantidad de plantas no está garantizada."]
  },
  "plantlet-acclimation": {
    en: ["A rooted plantlet in a culture vessel beside a similar plantlet in a small pot under a humidity cover.", "The move outside the vessel is gradual; humidity and ventilation must be adjusted to the plant."],
    es: ["Una plántula enraizada en un recipiente de cultivo junto a otra similar en una maceta pequeña bajo una cubierta de humedad.", "La transición fuera del recipiente es gradual; ajusta la humedad y la ventilación según la planta."]
  },
  "african-violet-begonia-explants": {
    en: ["African violet and begonia plants with examples of their leaves.", "These plants have different tissues and may require different regeneration methods."],
    es: ["Plantas de violeta africana y begonia con ejemplos de sus hojas.", "Estas plantas tienen tejidos distintos y pueden necesitar métodos de regeneración diferentes."]
  },
  "regeneration-pathways": {
    en: ["Conceptual stages of shoot growth from a bud and shoot formation through a tissue mass.", "Existing buds and indirect regeneration are different routes; callus does not guarantee a plant will form."],
    es: ["Etapas conceptuales del crecimiento de un brote a partir de una yema y de la formación de un brote a través de una masa de tejido.", "Las yemas existentes y la regeneración indirecta son vías distintas; un callo no garantiza que se forme una planta."]
  },
  "variegation-observation": {
    en: ["Three similar plants with different green and pale leaf patterns.", "Visible variegation can change; appearance alone does not establish genetic identity or health."],
    es: ["Tres plantas similares con distintos patrones verdes y claros en sus hojas.", "La variegación visible puede cambiar; el aspecto por sí solo no demuestra la identidad genética ni la salud."]
  },
  "culture-experiment-groups": {
    en: ["Two groups of three closed plant culture vessels.", "Conceptual groups, not a controlled experiment: the pictured plants differ. Compare like material and conditions when testing a treatment."],
    es: ["Dos grupos de tres recipientes de cultivo vegetal cerrados.", "Grupos conceptuales, no un experimento controlado: las plantas de la imagen son diferentes. Compara material y condiciones equivalentes al evaluar un tratamiento."]
  }
};

function illustration(name) {
  const [alt, caption] = illustrationText[name][language];
  const cropClass = name === "culture-observation-comparison" ? " illustration-image-crop" : "";
  return `<figure class="illustration"><div class="illustration-image${cropClass}"><img src="assets/images/${name}.webp" alt="${escapeHTML(alt)}" width="1024" height="687" loading="lazy" decoding="async"></div><figcaption>${escapeHTML(caption)} <span>${language === "es" ? "Ilustración generada; no es una fotografía." : "Generated illustration; not a photograph."}</span></figcaption></figure>`;
}
