const trackingText = {
  en: {
    title: "Keep a culture record",
    intro: "Use these fictional examples to set up a paper or spreadsheet record. Download a blank CSV for each sheet, then use the same vessel IDs across all three. Adapt the fields to your protocol; the sheets are not automatically linked to the journal below.",
    example: "Example entries",
    reasoning: "Why record this?",
    download: "Download blank CSV",
    sheets: [
      {
        id: "culture-register",
        title: "Culture register",
        description: "Start one row per vessel when you establish a culture. Record the source, treatment and medium so you can identify what went into each vessel.",
        columns: ["Start date", "Vessel ID", "Plant / cultivar", "Source / explant", "Group / treatment", "Medium batch", "Protocol / notes"],
        rows: [
          ["2026-03-01", "B01", "African violet", "Donor D01 / leaf", "Treatment A", "M01", "Protocol P01"],
          ["2026-03-01", "B02", "African violet", "Donor D01 / leaf", "Treatment A", "M01", "Protocol P01"]
        ],
        reasoning: "B01 and B02 are separate vessels from the same donor and batch. Their IDs link later observations and transfers back to the original material; keep the actual protocol and batch details separately."
      },
      {
        id: "observation-log",
        title: "Observation log",
        description: "Add a row for each vessel at every check, even when nothing appears to have changed. Describe what you see through the closed vessel.",
        columns: ["Observation date", "Group / treatment", "Vessel ID", "Plant / cultivar", "Stage", "Observed status", "Observations and changes"],
        rows: [
          ["2026-03-03", "Treatment A", "B01", "African violet", "Establishment", "No visible contamination", "Green leaf; medium clear"],
          ["2026-03-10", "Treatment A", "B01", "African violet", "Establishment", "No visible contamination", "Green leaf; small growth at cut edge"]
        ],
        reasoning: "Repeated dated entries for B01 make change over time visible. A clear-looking vessel is not proof of sterility, and growth at a cut edge does not identify its cause or type. Use the same group and vessel ID in the journal below if you also record there."
      },
      {
        id: "transfer-log",
        title: "Transfer and lineage log",
        description: "Record one row for each new vessel when healthy tissue is transferred, including the parent, destination and fresh medium.",
        columns: ["Transfer date", "Parent vessel ID", "New vessel ID", "Plant / cultivar", "Group / treatment", "New medium batch", "Transfer notes"],
        rows: [
          ["2026-04-01", "B01", "C01", "African violet", "Treatment A", "M02", "One portion from B01"],
          ["2026-04-01", "B01", "C02", "African violet", "Treatment A", "M02", "One portion from B01"]
        ],
        reasoning: "C01 and C02 both trace back to B01, but are tracked separately after the split. Record observations under each new ID. The dates are illustrative, not a transfer schedule; follow your protocol and the culture's condition."
      }
    ]
  },
  es: {
    title: "Lleva un registro del cultivo",
    intro: "Usa estos ejemplos ficticios para crear un registro en papel o en una hoja de cálculo. Descarga un CSV en blanco para cada hoja y usa los mismos identificadores de recipiente en las tres. Adapta los campos a tu protocolo; las hojas no están vinculadas automáticamente al diario de abajo.",
    example: "Ejemplos de registros",
    reasoning: "¿Por qué registrarlo?",
    download: "Descargar CSV en blanco",
    sheets: [
      {
        id: "registro-cultivos",
        title: "Registro de cultivos",
        description: "Crea una fila por recipiente al establecer un cultivo. Anota el origen, el tratamiento y el medio para identificar qué contiene cada recipiente.",
        columns: ["Fecha de inicio", "Identificador del recipiente", "Planta / cultivar", "Origen / explanto", "Grupo / tratamiento", "Lote de medio", "Protocolo / notas"],
        rows: [
          ["2026-03-01", "B01", "Violeta africana", "Donante D01 / hoja", "Tratamiento A", "M01", "Protocolo P01"],
          ["2026-03-01", "B02", "Violeta africana", "Donante D01 / hoja", "Tratamiento A", "M01", "Protocolo P01"]
        ],
        reasoning: "B01 y B02 son recipientes distintos del mismo donante y lote. Sus identificadores relacionan las observaciones y transferencias posteriores con el material original; conserva los detalles reales del protocolo y del lote por separado."
      },
      {
        id: "registro-observaciones",
        title: "Registro de observaciones",
        description: "Añade una fila por recipiente en cada revisión, incluso si no parece haber cambios. Describe lo que ves a través del recipiente cerrado.",
        columns: ["Fecha de observación", "Grupo / tratamiento", "Identificador del recipiente", "Planta / cultivar", "Etapa", "Estado observado", "Observaciones y cambios"],
        rows: [
          ["2026-03-03", "Tratamiento A", "B01", "Violeta africana", "Establecimiento", "Sin contaminación visible", "Hoja verde; medio transparente"],
          ["2026-03-10", "Tratamiento A", "B01", "Violeta africana", "Establecimiento", "Sin contaminación visible", "Hoja verde; pequeño crecimiento en el borde cortado"]
        ],
        reasoning: "Las entradas fechadas de B01 permiten ver los cambios con el tiempo. Un recipiente de aspecto claro no demuestra esterilidad, y el crecimiento en un borde cortado no identifica su causa ni su tipo. Usa el mismo grupo e identificador en el diario de abajo si también registras allí."
      },
      {
        id: "registro-transferencias",
        title: "Registro de transferencias y linaje",
        description: "Anota una fila por cada recipiente nuevo al transferir tejido sano, incluidos el recipiente de origen, el destino y el medio fresco.",
        columns: ["Fecha de transferencia", "Identificador de origen", "Identificador nuevo", "Planta / cultivar", "Grupo / tratamiento", "Nuevo lote de medio", "Notas de transferencia"],
        rows: [
          ["2026-04-01", "B01", "C01", "Violeta africana", "Tratamiento A", "M02", "Una porción de B01"],
          ["2026-04-01", "B01", "C02", "Violeta africana", "Tratamiento A", "M02", "Una porción de B01"]
        ],
        reasoning: "C01 y C02 proceden de B01, pero se siguen por separado después de dividir el tejido. Registra las observaciones con cada identificador nuevo. Las fechas son ilustrativas, no un calendario de transferencia; sigue tu protocolo y el estado del cultivo."
      }
    ]
  }
};
