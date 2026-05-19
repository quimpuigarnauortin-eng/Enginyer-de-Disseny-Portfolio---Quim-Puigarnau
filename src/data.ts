/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Skill, Education } from './types';

export const projects: Project[] = [
  {
    id: 'materials-closca-ou',
    title: 'Materials circulars a partir de closca d’ou',
    category: 'Product Design / Sustainable Materials',
    year: '2024',
    thumbnail: '/regenerated_image_1777634172217.jpg',
    description: 'Projecte experimental de disseny de materials sostenibles basat en la revalorització de residus alimentaris, concretament la closca d’ou.',
    fullDescription: 'Projecte experimental de disseny de materials sostenibles basat en la revalorització de residus alimentaris, concretament la closca d’ou, rica en CaCO₃. A través de l\'anàlisi del material, processos de transformació (triturat, classificació, barreja) i tres vies d’experimentació: biociment orgànic amb gelatina, substitució parcial de ciment i compost amb cel·lulosa tipus paper, es desenvolupen i caracteritzen nous materials. El treball inclou assajos mecànics i sensorials, i l\'ACV, per avaluar la viabilitat tècnica i ambiental de cada solució i identificar possibles aplicacions dins d’un model d’economia circular.',
    renders: [
      '/IMG_5829.JPG',
      '/IMG_5826.JPG',
      '/IMG_0055.JPG',
      '/regenerated_image_1777634175715.jpg',
      '/IMG_5679(1).JPG'
    ],
    makingOf: [
      '/regenerated_image_1778410770373.jpg',
      '/regenerated_image_1778410768571.jpg',
      '/Captura.PNG'
    ],
    processTitle: "",
    processDescription: "Es van realitzar assajos de tracció i compressió amb l’objectiu d’avaluar el comportament mecànic de les diferents composicions del material. A partir d’un procés iteratiu de proves i validacions, es va identificar la formulació més adequada segons els requisits funcionals i l’aplicació final del producte.",
    validation: ['Tracció', 'Compressió', 'Procés Iteratiu', 'Validació', 'Formulació']
  },
  {
    id: 'kivita',
    title: 'Kivita',
    category: 'Product Design / Furniture',
    year: '2024',
    thumbnail: '/regenerated_image_1777474657426.png',
    description: 'Una cadira que es transforma en escala, construïda amb tubs d\'acer i unions soldades de precisió.',
    fullDescription: 'Kivita és un projecte de mobiliari transformable que fusiona una cadira d\'ús diari amb una escala funcional. El projecte s\'ha centrat en la manufactura metàl·lica, utilitzant tubs d\'acer tallats i doblats amb precisió en els angles desitjats per conformar l\'estructura. El procés de fabricació ha seguit etapes de tall, mecanitzat i soldadura dels conjunts, finalitzant amb una capa d\'imprimació i pintura per protegir les unions cuidades. El resultat és una peça versàtil que respon a les necessitats d\'espai contemporànies.',
    processDescription: 'El procés de manufactura s\'ha centrat en el treball amb metall, utilitzant tubs d\'acer tallats i doblats amb precisió. La soldadura dels conjunts i el tractament posterior amb imprimació i pintura garanteixen la durabilitat i l\'estètica del sistema transformable.',
    renders: [
      '/regenerated_image_1777474657426.png',
      '/ChatGPT Image 12 may 2026, 10_47_32.png',
      '/regenerated_image_1777807780821.jpg',
      '/regenerated_image_1777807781744.png',
      '/regenerated_image_1777807783752.png',
      '/Imatges.jpg'
    ],
    makingOf: [
      '/regenerated_image_1777471800492.png'
    ],
    validation: ['Tall', 'Mecanitzat', 'Soldar']
  },
  {
    id: 'ampolla-font-vella',
    title: "Disseny d'ampolla per a Font Vella",
    category: 'Packaging / Sustainability',
    year: '2023',
    thumbnail: '/regenerated_image_1777818382493.png',
    description: "Redisseny ergonòmic i sostenible de l'ampolla icònica de Font Vella.",
    fullDescription: "L'empresa d'aigua Font Vella de Danone va proposar el repte de crear una nova ampolla reduint al màxim l'impacte ambiental. Vam optar per el tipus d'ampolla Pouche per l'optimització de la geometria i la distribució de massa del PET i l'espai que ocupava. D'aquesta manera s'ha aconseguit una reducció del 12% en el pes del plàstic sense comprometre la rigidesa estructural durant el transport i l'uso. A més es va desenvolupar tota una estètica del producte infantil.",
    renders: [
      '/regenerated_image_1777818382493.png',
      '/regenerated_image_1777824103338.jpg',
      '/regenerated_image_1777824092666.png',
      '/regenerated_image_1777824300353.png',
      '/regenerated_image_1777824096234.png'
    ],
    makingOf: [
      '/regenerated_image_1777824900571.jpg',
      '/regenerated_image_1777824902016.jpg',
      '/regenerated_image_1777824903126.png'
    ],
    processDescription: "Per desenvolupar el disseny i la industrialització del producte a escala real primer de tot es va realitzar un ACV de l'actual ampolla infantil de Font Vella per així comparar-la amb la dissenyada. També es van realitzar plànols que indicaven les mesures i dades necessàries per a la seva produció.",
    processTitle: "",
    validation: ['ACV', 'Plànols', 'Danone', 'Industrialització']
  },
  {
    id: 'steelcase-table',
    title: 'Redisseny de taula Steelcase',
    category: 'Product Design / Sustainability',
    year: '2024',
    thumbnail: '/regenerated_image_1777801177374.png',
    description: 'Optimització de la sostenibilitat d\'una taula d\'oficina Steelcase mitjançant la reducció de massa en el sobre.',
    fullDescription: 'Steelcase ens va proposar el repte de redissenyar una de les seves taules d\'oficina per fer-la el més sostenible possible, mantenint l\'estètica i els components originals al màxim. Després d\'una anàlisi exhaustiva del cicle de vida (ACV), vam identificar que el sobre central era l\'element amb més impacte ambiental a causa de la seva massa. La solució va consistir a desenvolupar una estructura interna en format de panal (honeycomb), que manté la resistència i funcionalitat estructural pero redueix dràsticament la quantitat de material utilitzat, millorant significativament la sostenibilitat global del producte.',
    renders: [
      '/regenerated_image_1777801177374.png',
      '/regenerated_image_1777806276419.jpg',
      'IMG_5081.jpg',
      'Imatges (1).jpg'
    ],
    makingOf: [
      '/regenerated_image_1777804297593.png',
      '/regenerated_image_1777804301566.png',
      '/regenerated_image_1777804304439.png',
      '/regenerated_image_1777804305181.png'
    ],
    processDescription: "Es va iniciar el desenvolupament de la solució amb un moodboard estètic i l'anàlisi dels models CAD 3D de la taula. Posteriorment, es van aplicar eines d’ACV i selecció de materials amb Granta EduPack.",
    validation: ['Moodboard', 'CAD 3D', 'ACV', 'Anàlisi de Materials']
  },
  {
    id: 'pont-de-llum',
    title: 'Pont de llum',
    category: 'Product Design / Lighting',
    year: '2024',
    thumbnail: '/regenerated_image_1778228295179.png',
    description: 'Projecte lumínic basat en la linealitat i la creació d\'arquitectures efímeres mitjançant la llum.',
    fullDescription: 'El Pont de llum és una exploració sobre com la llum pot actuar com un element estructural en l\'espai. Mitjançant un perfil d\'alumini extrusionat i un sistema de tensió minimalista, la làmpada genera una \'passarel·la\' lumínica que connecta dos punts, creant un ambient immersiu i arquitectònic.',
    processDescription: "El procés se centra en la manipulació de perfils d'alumini reciclats i la integració de sistemes lumínics. S'ha realitzat l'acabat amb la pulidora en tota la superfície visible, arrodonint arestes vives per augmentar la seguretat del producte.",
    renders: [
      '/regenerated_image_1778228295179.png',
      '/regenerated_image_1777971471620.jpg',
      '/regenerated_image_1777971481186.jpg'
    ],
    makingOf: [
      '/regenerated_image_1777971484256.jpg',
      '/regenerated_image_1777472055220.png'
    ],
    validation: ['Alumini Reciclat', 'Sistemes Lumínics', 'Seguretat', 'Arrodoniment Arestes']
  }
];

export const experiences: Experience[] = [
  {
    role: 'Product design',
    company: 'Studi Design BCN',
    period: '2023 - Present',
    description: 'Desenvolupament de producte, des de la conceptualització fins a la validació visual. Modelatge 3D i visualització de producte per a diferents propostes. Creació de prototips físics i suport en processos de disseny orientats a funcionalitat, experiència d’usuari i viabilitat de fabricació.'
  },
  {
    role: 'Prototype Development',
    company: 'Elisava Workshop',
    period: '2023 - 2026',
    description: 'Formació i experiència en el desenvolupament de prototips mitjançant tecnologies de fabricació digital. Gestió i ús de maquinària CNC, impressió 3D i processos tècnics vinculats a la producció de peces i maquetes.'
  },
  {
    role: 'Productor musical & Sound Design',
    company: 'Freelance / Personal projects',
    period: '2017 - Present',
    description: 'Productor musical en actiu des del 2017, una trajectòria que m\'ha aportat una gran constància i disciplina creativa. Paral·lelament, he desenvolupat habilitats avançades en Sound Design de forma autodidacta, assolint un nivell tècnic elevat en la creació i manipulació sonora.'
  }
];

export const education: Education[] = [
  {
    degree: 'Enginyeria de Disseny Industrial',
    institution: 'ELISAVA BCN',
    period: '2023 - 2026'
  },
  {
    degree: 'Batxillerat',
    institution: 'Escola PIA de Terrassa',
    period: '2020 - 2022'
  },
  {
    degree: 'ESO',
    institution: 'Escola PIA de Terrassa',
    period: '2016 - 2020'
  }
];

export const skills: Skill[] = [
  {
    category: 'Software',
    items: [
      'SolidWorks',
      'PTC Creo',
      'Rhino',
      'Grasshopper (Rhino plugin)',
      'KeyShot',
      'Blender',
      'Unreal Engine',
      'Unity',
      'FL Studio',
      'SimaPro'
    ]
  },
  {
    category: 'Prototipatge',
    items: ['Impressió 3D (FDM/SLA)', 'Tall Làser', 'CNC', 'Maquetació manual', 'Electrònica bàsica']
  },
  {
    category: 'Idiomes',
    items: ['Català (Natiu)', 'Castellà (Natiu)', 'Anglès (Alt)', 'Francès (Baix)']
  }
];
