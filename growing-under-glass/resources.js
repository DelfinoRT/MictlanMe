"use strict";

const resources = [
  {
    id: "Plant Tissue Culture lebt107.pdf",
    title: "Plant Tissue Culture (lebt107)",
    kind: "book",
    pages: 18,
    note: "A short plant tissue culture teaching document. Use it as an introduction and verify technical details against a current, species-specific protocol.",
    noteEs: "Documento didáctico breve sobre cultivo de tejidos vegetales. Úsalo como introducción y comprueba los detalles técnicos con un protocolo actual y específico para la especie."
  },
  {
    id: "Plant Tissue Culture Techniques Principles Method  and Applications.pdf",
    title: "Plant Tissue Culture: Techniques, Principles, Methods and Applications",
    kind: "book",
    pages: 11,
    note: "A concise overview of tissue-culture methods and principles; the title alone does not identify its edition or full publication details.",
    noteEs: "Resumen conciso de métodos y principios del cultivo de tejidos; el título por sí solo no identifica la edición ni todos los datos editoriales."
  },
  {
    id: "plant-propagation.pdf",
    title: "Plant Propagation",
    kind: "book",
    pages: 503,
    note: "A broad plant-propagation reference. Search the title and verify the author and edition before choosing a copy.",
    noteEs: "Referencia amplia sobre propagación vegetal. Busca el título y comprueba la autoría y edición antes de elegir una copia."
  },
  {
    id: "PLANT-TISSUE-CULTURE-Bhojwani-Razdan.pdf",
    title: "Plant Tissue Culture — Bhojwani & Razdan",
    kind: "book",
    pages: 779,
    note: "A substantial academic reference associated with Bhojwani and Razdan, covering plant tissue culture. Check the edition and publication information in a bookseller or library catalog.",
    noteEs: "Referencia académica extensa asociada a Bhojwani y Razdan sobre cultivo de tejidos vegetales. Comprueba la edición y los datos editoriales en una librería o catálogo bibliotecario."
  },
  {
    id: "plant-tissue-culture-third-edition-techniques-and-experiments-by-roberta-h-smith.pdf",
    title: "Plant Tissue Culture: Techniques and Experiments (3rd edition) — Roberta H. Smith",
    kind: "book",
    pages: 185,
    note: "A practical textbook focused on plant tissue-culture techniques and laboratory experiments. Search for the third edition by Roberta H. Smith.",
    noteEs: "Manual práctico centrado en técnicas de cultivo de tejidos vegetales y experimentos de laboratorio. Busca la tercera edición de Roberta H. Smith."
  },
  {
    id: "Plant_Tissue_Culture_laboratory.pdf",
    title: "Plant Tissue Culture Laboratory",
    kind: "book",
    pages: 25,
    note: "A short laboratory-oriented document. Its exact author and edition are unclear from the available catalog details; identify the publisher before relying on it.",
    noteEs: "Documento breve orientado al laboratorio. La autoría y edición exactas no están claras en los datos disponibles; identifica la entidad editora antes de usarlo."
  },
  {
    id: "Plants_From_Test_Tubes_Complete.pdf",
    title: "Plants from Test Tubes",
    kind: "book",
    pages: 238,
    note: "A book-length introduction to growing plants in vitro. Search the title with the author and edition to find library and bookseller listings.",
    noteEs: "Introducción extensa al cultivo de plantas in vitro. Busca el título junto con la autoría y edición para localizar catálogos y librerías."
  },
  {
    id: "PP9900267.pdf",
    title: "PP9900267",
    kind: "book",
    pages: 23,
    note: "A 23-page PDF whose catalog filename does not identify its title or publisher. Search the identifier first and confirm what the document is before using it.",
    noteEs: "PDF de 23 páginas cuyo nombre de catálogo no identifica el título ni la entidad editora. Busca primero el identificador y confirma de qué documento se trata."
  },
  {
    id: "preview-9781351424042_A37412525.pdf",
    title: "Plant Tissue Culture: Concepts and Laboratory Exercises (2nd edition) — Robert N. Trigiano and Dennis J. Gray",
    kind: "book",
    pages: 48,
    isbn: "9781351424042",
    note: "A publisher preview of a textbook combining plant tissue-culture concepts and laboratory exercises. Search by ISBN 9781351424042 for the complete edition.",
    noteEs: "Vista previa editorial de un manual que combina conceptos de cultivo de tejidos vegetales y ejercicios de laboratorio. Busca el ISBN 9781351424042 para encontrar la edición completa."
  },
  {
    id: "te_1384_web.pdf",
    title: "IAEA-TECDOC-1384",
    kind: "book",
    pages: 102,
    note: "An International Atomic Energy Agency technical publication. The local catalog identifies it only by document number; search that number to confirm its subject and edition.",
    noteEs: "Publicación técnica del Organismo Internacional de Energía Atómica. El catálogo local solo indica el número del documento; búscalo para confirmar el tema y la edición."
  },
  {
    id: "Tissue-Culture-Notes.pdf",
    title: "Tissue Culture Notes",
    kind: "book",
    pages: 31,
    note: "A short set of notes with limited bibliographic details. Treat it as supplementary material and check any claims against a traceable reference.",
    noteEs: "Apuntes breves con pocos datos bibliográficos. Considéralos material complementario y contrasta sus afirmaciones con una fuente identificable."
  },
  {
    id: "tissue-culture.pdf",
    title: "Tissue Culture",
    kind: "book",
    pages: 29,
    note: "A short presentation-style document. The available catalog does not establish its author or publication details.",
    noteEs: "Documento breve con formato de presentación. El catálogo disponible no confirma su autoría ni sus datos editoriales."
  },
  {
    id: "Hakky - Prepare the EASIEST Tissue Culture Media — No Autoclave, No Microwave! .txt",
    title: "Prepare the EASIEST Tissue Culture Media — No Autoclave, No Microwave!",
    kind: "video",
    url: "https://www.youtube.com/watch?v=Z1Swkfsmu20",
    note: "A creator's demonstration focused on preparing culture medium without an autoclave or microwave. It is not a validated substitute for a suitable sterilization protocol.",
    noteEs: "Demostración de un creador centrada en preparar medio de cultivo sin autoclave ni microondas. No es un sustituto validado de un protocolo de esterilización adecuado."
  },
  {
    id: "Marvin - Tissue Culture at Home.txt",
    title: "Presentation & Demo: Marvin Lo — Tissue Culture at Home (Next Steps)",
    kind: "video",
    url: "https://www.youtube.com/watch?v=sbCljzS9E6c",
    note: "A presentation and demonstration about home plant tissue culture. Use it as supplementary context, not as a species-specific protocol.",
    noteEs: "Presentación y demostración sobre cultivo de tejidos vegetales en casa. Úsala como contexto complementario, no como protocolo específico para una especie."
  },
  {
    id: "NL Skip navigation Create 9+ Avatar image                                                                                               Cloning plants using tissue culture propagation.txt",
    title: "Cloning Plants Using Tissue Culture Propagation",
    kind: "video",
    url: "https://www.youtube.com/watch?v=qnTYnkg_kO4",
    note: "A short video about plant cloning through tissue culture. Check the creator's description for the plant and method shown.",
    noteEs: "Vídeo breve sobre clonación de plantas mediante cultivo de tejidos. Consulta la descripción del creador para identificar la planta y el método."
  },
  {
    id: "Only Plants - How Its Done Rare Plant TISSUE CULTURE.txt",
    title: "How It's Done: Rare Plant Tissue Culture",
    kind: "video",
    url: "https://www.youtube.com/watch?v=uzaHrR4X9-8",
    note: "A discussion of tissue culture for rare plants. The title does not specify a reproducible protocol; check the video for its plant and scope.",
    noteEs: "Vídeo sobre cultivo de tejidos de plantas raras. El título no especifica un protocolo reproducible; consulta el vídeo para conocer la planta y el alcance."
  },
  {
    id: "Plant Cell - Master Plant Sterilization For Perfect Tissue Culture Results! .txt",
    title: "Master Plant Sterilization for Tissue Culture",
    kind: "video",
    url: "https://www.youtube.com/watch?v=zmucEoOXjXc",
    note: "A creator's overview of plant-material sterilization. Disinfection choices depend on the species and tissue; verify chemicals and safety guidance independently.",
    noteEs: "Descripción de un creador sobre desinfección de material vegetal. La elección depende de la especie y el tejido; verifica por separado los productos y las indicaciones de seguridad."
  },
  {
    id: "Plant Cell Technology - How to Tissue Culture Plants Your Ultimate How-to Guide .txt",
    title: "How to Tissue Culture Plants: Your Ultimate How-to Guide",
    kind: "video",
    url: "https://www.youtube.com/watch?v=CICxrkDX7_w",
    note: "A general how-to overview from Plant Cell Technology. Treat it as orientation and consult a protocol validated for the plant you intend to culture.",
    noteEs: "Guía general de Plant Cell Technology. Considérala una orientación y consulta un protocolo validado para la planta que quieras cultivar."
  },
  {
    id: "Plants in a Jar - DIY Tissue Culture Begonias.txt",
    title: "DIY Tissue Culture: Begonias",
    kind: "video",
    url: "https://www.youtube.com/watch?v=25SbHcqeMY4",
    note: "A home-culture demonstration using begonias. Its timings and results apply to that setup, not necessarily to other plants or conditions.",
    noteEs: "Demostración de cultivo casero con begonias. Sus tiempos y resultados corresponden a ese montaje y no necesariamente a otras plantas o condiciones."
  },
  {
    id: "Plants in a Jar - How to Autoclave at Home with a Pressure Cooker DIY Autoclave .txt",
    title: "How to Autoclave at Home with a Pressure Cooker",
    kind: "video",
    url: "https://www.youtube.com/watch?v=yAJd8oJAEN4",
    note: "A video about pressure-cooker sterilization. Pressure equipment can cause serious injury; follow the manufacturer's instructions and applicable safety rules rather than improvising.",
    noteEs: "Vídeo sobre esterilización con olla a presión. Los equipos presurizados pueden causar lesiones graves; sigue las instrucciones del fabricante y las normas de seguridad aplicables, sin improvisar."
  },
  {
    id: "Plants in a Jar - How to Build a Home Tissue Culture Laboratory.txt",
    title: "How to Build a Home Tissue Culture Laboratory",
    kind: "video",
    url: "https://www.youtube.com/watch?v=7FmwwR-vdNA",
    note: "A tour of a home tissue-culture workspace and its equipment. A workspace setup does not by itself establish aseptic conditions.",
    noteEs: "Recorrido por un espacio doméstico de cultivo de tejidos y sus equipos. El montaje por sí solo no garantiza condiciones asépticas."
  },
  {
    id: "Plants in a Jar - How to Clone Plants at Home .txt",
    title: "How to Clone Plants at Home",
    kind: "video",
    url: "https://www.youtube.com/watch?v=-JdeBdmt9rI",
    note: "A broad introduction to cloning plants at home, including tissue-culture context. Check which propagation method is demonstrated.",
    noteEs: "Introducción amplia a la clonación de plantas en casa, con contexto de cultivo de tejidos. Comprueba qué método de propagación se muestra."
  },
  {
    id: "Plants in a Jar - How to Sterilize Tissue Culture Media at Home (Autoclaving Tissue Culture Media).txt",
    title: "How to Sterilize Tissue Culture Media at Home",
    kind: "video",
    url: "https://www.youtube.com/watch?v=7vXsl0ufcKU",
    note: "A demonstration focused on sterilizing plant tissue-culture medium. Follow validated equipment instructions and a suitable protocol for the medium.",
    noteEs: "Demostración centrada en esterilizar medio para cultivo de tejidos vegetales. Sigue instrucciones validadas del equipo y un protocolo adecuado para el medio."
  },
  {
    id: "Plants in a Jar - How to Subculture Tissue Culture Plants .txt",
    title: "How to Subculture Tissue Culture Plants",
    kind: "video",
    url: "https://www.youtube.com/watch?v=wp35YXrKZb4",
    note: "A demonstration about transferring growing plant cultures to fresh medium. Transfer timing and technique depend on the species and protocol.",
    noteEs: "Demostración sobre el traslado de cultivos vegetales en crecimiento a medio fresco. El momento y la técnica dependen de la especie y el protocolo."
  },
  {
    id: "Plants in a Jar - The BEST Method for Acclimating Tissue Culture Plants (2026).txt",
    title: "Acclimating Tissue Culture Plants",
    kind: "video",
    url: "https://www.youtube.com/watch?v=PjaVI3F88zk",
    note: "A home-grower demonstration about acclimating plantlets. Readiness and transition conditions vary; use a protocol appropriate to the plant.",
    noteEs: "Demostración de un aficionado sobre aclimatación de plántulas. La preparación y las condiciones de transición varían; usa un protocolo adecuado para la planta."
  },
  {
    id: "Plants in a Jar - The Science Behind Plant Tissue Culture .txt",
    title: "The Science Behind Plant Tissue Culture",
    kind: "video",
    url: "https://www.youtube.com/watch?v=Ex5no5bEpvI",
    note: "A general explanation of the science behind plant tissue culture. Pair it with a textbook or review article for deeper study.",
    noteEs: "Explicación general de los fundamentos científicos del cultivo de tejidos vegetales. Complétala con un manual o artículo de revisión."
  },
  {
    id: "The Ultimate Guide to Tissue Culture EVERYTHING You Need to Get Started.txt",
    title: "The Ultimate Guide to Tissue Culture: Everything You Need to Get Started",
    kind: "video",
    url: "https://www.youtube.com/watch?v=LTA8EHBNKPM",
    note: "A broad introductory video for people starting to explore tissue culture. Use it to identify topics for further reading, not as a validated protocol.",
    noteEs: "Vídeo introductorio amplio para quienes empiezan a explorar el cultivo de tejidos. Úsalo para identificar temas de lectura, no como protocolo validado."
  },
  {
    id: "tissue culture with less than 200.txt",
    title: "DIY Tissue Culture: Getting Started for Less Than $200",
    kind: "video",
    url: "https://www.youtube.com/watch?v=lWVjYbvsIaA",
    note: "A video about the creator's budget-oriented home setup. Costs and equipment choices vary by location and do not replace safety or protocol requirements.",
    noteEs: "Vídeo sobre un montaje doméstico económico del creador. Los costes y equipos varían según el lugar y no sustituyen los requisitos de seguridad ni del protocolo."
  },
  {
    id: "Topaz - Complete DIY Tissue Culture Guide - Carnivorous Plants .txt",
    title: "Complete DIY Tissue Culture Guide: Carnivorous Plants",
    kind: "video",
    url: "https://www.youtube.com/watch?v=ejhkt8haJI0",
    note: "A creator's guide focused on carnivorous plants. Methods are species-dependent; verify each step against a suitable, reliable protocol.",
    noteEs: "Guía de un creador centrada en plantas carnívoras. Los métodos dependen de la especie; verifica cada paso con un protocolo fiable y adecuado."
  }
];
