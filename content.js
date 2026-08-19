/* ── She Tells — Living archive content ────────────────────────────────
   Every word on the map lives here. living-archive.html holds only where a
   card sits; this file holds what it says. The key of each entry is the id
   in the sixth slot of that card.

   Editing:
     * Text is written between backticks, so apostrophes are safe: don't.
     * Press Enter for a paragraph break. Indentation is stripped, so keep
       the block lined up with the rest of the entry.
     * en is English, pt is European Portuguese, addressing the reader as tu.
     * note: 'ml' adds the standard "written from the sources, edited with
       ML" line. Leave it off copy written by hand.
     * txt is what shows on the card, full is the longer popup. Leave full
       out and the popup uses txt.

   An id used on a card but missing here, or an entry here used by no card,
   is reported in the browser console on load.
──────────────────────────────────────────────────────────────────────── */

const CONTENT = {

  /* ══ HYPERSEA ══ */

  'hypersea-reading-hydrofeminism': {
    link: 'https://spacestudios.org.uk/wp-content/uploads/2017/11/hydrofeminism_or_on_becoming_a_body_of_water.pdf',
    label: `Astrida Neimanis — Hydrofeminism: On Becoming Body of Water →`,
  },

  'hypersea-reading-ocean-in-excess': {
    link: 'https://www.researchgate.net/publication/335701988_The_ocean_in_excess_Towards_a_more-than-wet_ontology',
    label: `The ocean in excess: Towards a more-than-wet ontology →`,
  },

  'hypersea-book': {
    img: 'la/hypersea/book.jpg',
    alt: `Hypersea: Life on Land`,
    link: 'https://www.sciencedirect.com/science/article/abs/pii/030326479390043C',
  },

  'hypersea-book-link': {
    link: 'https://www.sciencedirect.com/science/article/abs/pii/030326479390043C',
    label: { en: `Link to the Book →`, pt: `Link para o livro →` },
  },

  'hypersea-intro': {
    txt: {
      en: `We have been using the Hypersea concept by Mark A. S. McMenamin (Author), Dianna L. Schulte McMenamin as prompts to remember and reimagine. Inviting participants to reconsider their entanglement with water, to recall the partial liquidity of their own bodies, and to sense the connective tissue that water forms across ecosystems. Here you can fin some related reading and our path to the Hypersea…`,
      pt: `Temos vindo a utilizar o conceito «Hypersea», da autoria de Mark A. S. McMenamin (autor) e Dianna L. Schulte McMenamin, como pontos de partida para recordar e reimaginar. Convidamos os participantes a reconsiderar a sua relação com a água, a recordar a liquidez parcial dos seus próprios corpos e a sentir o tecido conjuntivo que a água forma entre os ecossistemas. Aqui podem encontrar algumas leituras relacionadas e o nosso percurso até ao Hypersea`,
    },
    full: {
      en: `We have been using the Hypersea concept by Mark A. S. McMenamin (Author), Dianna L. Schulte McMenamin as prompts to remember and reimagine. Inviting participants to reconsider their entanglement with water, to recall the partial liquidity of their own bodies, and to sense the connective tissue that water forms across ecosystems. Here you can fin some related reading and our path to the Hypersea…`,
      pt: `Temos vindo a utilizar o conceito «Hypersea», da autoria de Mark A. S. McMenamin (autor) e Dianna L. Schulte McMenamin, como pontos de partida para recordar e reimaginar. Convidamos os participantes a reconsiderar a sua relação com a água, a recordar a liquidez parcial dos seus próprios corpos e a sentir o tecido conjuntivo que a água forma entre os ecossistemas. Aqui podem encontrar algumas leituras relacionadas e o nosso percurso até ao Hypersea`,
    },
  },

  'hypersea-glass': {
    txt: {
      en: `We created the glass sculptures working with the materiality of sand as an object of the Hypersea, a point of remembering. Sand is already sea, ground shell and rock and marine sediment gathered by the water, and in melting it into glass we make one more Hypersea gesture: sea-matter changing state, becoming a vessel that can hold field recordings from the Esposende coastline and the stories entangled with sargassum.`,
      pt: `Criámos as esculturas de vidro trabalhando com a materialidade da areia como um objeto do Hypersea, um ponto de memória. A areia já é mar, conchas trituradas, rocha e sedimentos marinhos reunidos pela água; e, ao fundi-la em vidro, fazemos mais um gesto do Hypersea: a matéria do mar muda de estado, tornando-se um recipiente capaz de conter gravações de campo da costa de Esposende e as histórias entrelaçadas com as algas sargaço.`,
    },
    full: {
      en: `We created the glass sculptures working with the materiality of sand as an object of the Hypersea, a point of remembering. Sand is already sea, ground shell and rock and marine sediment gathered by the water, and in melting it into glass we make one more Hypersea gesture: sea-matter changing state, becoming a vessel that can hold field recordings from the Esposende coastline and the stories entangled with sargassum. The sculpture becomes a body of water in another form, a place where the ocean is remembered rather than extracted.`,
      pt: `Criámos as esculturas de vidro trabalhando com a materialidade da areia como um objeto do Hypersea, um ponto de memória. A areia já é mar, conchas trituradas, rocha e sedimentos marinhos reunidos pela água; e, ao fundi-la em vidro, fazemos mais um gesto do Hypersea: a matéria do mar muda de estado, tornando-se um recipiente capaz de conter gravações de campo da costa de Esposende e as histórias entrelaçadas com as algas sargaço. A escultura torna-se uma massa de água sob outra forma, um lugar onde o oceano é recordado em vez de extraído.`,
    },
  },

  'hypersea-credits': {
    credits: {
      en: `.credits: glass blown by @berlinglassworks and @vivianestroede`,
      pt: `Créditos: vidro soprado por @berlinglassworks e @vivianestroede`,
    },
    mtNotice: true,
  },

  'hypersea-dunes': {
    img: 'la/hypersea/dunes.jpg',
    caption: { en: `The dunes at Esposende`, pt: `As dunas de Esposende` },
    alt: `Esposende dunes`,
  },

  'hypersea-glassblowing': {
    img: 'la/hypersea/IMG_8729.jpg',
    caption: { en: `At the glass workshop`, pt: `Na oficina de vidro` },
    alt: `Glass blowing workshop`,
  },

  'hypersea-glass-vessel': {
    img: 'la/hypersea/IMG_8668.jpg',
    caption: { en: `At the glass workshop`, pt: `Na oficina de vidro` },
    alt: `Glass vessel`,
  },

  'hypersea-glass-sphere': {
    img: 'la/hypersea/IMG_8677.jpg',
    caption: { en: `At the glass workshop`, pt: `Na oficina de vidro` },
    alt: `Glass sphere`,
  },

  'hypersea-coast': {
    img: 'la/hypersea/IMG_7465.jpg',
    caption: { en: `On the coast at Esposende`, pt: `Na costa de Esposende` },
    alt: `Coastal landscape`,
  },

  'hypersea-glass-video-1': {
    vid: 'la/hypersea/glass1.mp4',
  },

  'hypersea-glass-video-2': {
    vid: 'la/hypersea/glass2.mp4',
  },

  'hypersea-field-notes': {
    title: `Field Notes`,
  },


  /* ══ SARGASSUM ══ */

  'sargassum-sargasso-museum': {
    link: 'https://www.visitesposende.com/en/fazer/monumentos/sargasso-museum',
    label: { en: `Sargasso Museum →`, pt: `Museu do Sargaço →` },
  },

  'sargassum-intro': {
    txt: {
      en: `Esposende has an entanglement with sargassum that goes years and years back.

      When we set out for the research project, we asked how an old tradition reflects on the future. Futures of creating speculative ways of creating…`,
      pt: `Esposende tem uma ligação com as algas sargaço que remonta a muitos e muitos anos.

      Quando nos lançámos neste projeto de investigação, questionámo-nos sobre como uma tradição antiga se reflete no futuro. Futuros que envolvem formas…`,
    },
    full: {
      en: `Esposende has an entanglement with sargassum that goes years and years back.

      When we set out for the research project, we asked how an old tradition reflects on the future. Futures of creating speculative ways of creating rituals, as an act of care, an act of observation, an act of listening, an act of remembering the water ecology we cohabit.

      As Sargaceiros gleaned sargassum, today most interfaces glean data; we often think of this data as residing in an invisible cloud but forget the physical infrastructure it carries. As part of a speculative ritual, our project gleans memories of what has been and what could be for the futures of waters in Esposende.

      The rising temperatures heavily affect the Esposende coast, as they do in a global network of water bodies. The changing water will also affect the kelp forests along the town's coast. We ask how we could speculate futures of tradition, how the kelp, once the heart of the livelihood of Esposende, could take its shape in communal futures.`,
      pt: `Esposende tem uma ligação com as algas sargaço que remonta a muitos e muitos anos.

      Quando nos lançámos neste projeto de investigação, questionámo-nos sobre como uma tradição antiga se reflete no futuro. Futuros que envolvem formas especulativas de criar rituais, como um ato de cuidado, um ato de observação, um ato de escuta, um ato de recordar a ecologia aquática com a qual coabitamos.

      Tal como os Sargaceiros recolhiam sargaço, hoje em dia a maioria das interfaces recolhe dados; muitas vezes pensamos que esses dados residem numa nuvem invisível, mas esquecemo-nos da infraestrutura física que os suporta. Como parte de um ritual especulativo, o nosso projeto recolhe memórias do que foi e do que poderá ser para o futuro das águas em Esposende.

      O aumento das temperaturas afeta fortemente a costa de Esposende, tal como acontece numa rede global de massas de água. As alterações nas águas afetarão também as florestas de algas ao longo da costa da cidade. Questionamo-nos sobre como poderíamos especular sobre os futuros da tradição; como é que as algas, outrora o cerne do sustento de Esposende, poderiam assumir a sua forma em futuros comunitários.`,
    },
  },

  'sargassum-article-link': {
    link: 'https://www.ciimar.up.pt/marine-forests-in-northern-portugal-allies-in-the-fight-against-climate-change/',
    label: {
      en: `Read the article on kelp forests in northern Portugal →`,
      pt: `Leia o artigo sobre as florestas de algas no norte de Portugal →`,
    },
  },

  'sargassum-to-future': {
    label: { en: `Our speculative products →`, pt: `Os nossos produtos especulativos →` },
    goTo: 'future',
  },

  'sargassum-credits': {
    credits: {
      en: `.credits: museum photographs by Museu do Sargaço, Esposende`,
      pt: `Créditos: fotografias do Museu do Sargaço, Esposende`,
    },
    mtNotice: true,
  },

  'sargassum-fronds': {
    img: 'la/sargassum/shetells-48.jpg',
    caption: { en: `Sargaço at low tide`, pt: `Sargaço na maré baixa` },
    alt: {
      en: `Sargassum fronds draped over rock at low tide`,
      pt: `Algas de sargaço sobre a rocha na maré baixa`,
    },
  },

  'sargassum-bladderwrack': {
    img: 'la/sargassum/IMG_5705.jpg',
    caption: { en: `On the rocks at Esposende`, pt: `Nas rochas de Esposende` },
    alt: {
      en: `Bladderwrack covering the rocks along the Esposende shore`,
      pt: `Bodelha a cobrir as rochas na costa de Esposende`,
    },
  },

  'sargassum-museum-sculptures': {
    img: 'la/sargassum/museum-179232.jpg',
    caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
    alt: {
      en: `Sargaceiro sculptures outside the Sargasso Museum, Esposende`,
      pt: `Esculturas de sargaceiros à entrada do Museu do Sargaço, Esposende`,
    },
    credit: { en: `Sargasso Museum, Esposende`, pt: `Museu do Sargaço, Esposende` },
  },

  'sargassum-museum-display': {
    img: 'la/sargassum/museum-IMG_5775.jpg',
    caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
    alt: {
      en: `Sargassum landscape protection display at the Sargasso Museum`,
      pt: `Exposição sobre a proteção da paisagem do sargaço no Museu do Sargaço`,
    },
    credit: { en: `Sargasso Museum, Esposende`, pt: `Museu do Sargaço, Esposende` },
  },

  'sargassum-tidal-archive': {
    title: `Tidal Archive`,
    full: {
      en: `For centuries the sargaço was gathered along the sands of Apúlia, in Esposende, by the sargaceiros and the sargaceiras, who kept one foot in the sea and one in the field. They waded out with a graveta and a long net, hauled the weed ashore, and left it to dry in the sun for three days before it was carried, together with pilado, onto the masseira fields: plots dug down towards the water table and fed by whatever the tide had given up. By royal decision the seaweed was free of any tax, which is part of why the practice took such hold here.

      The harvest thinned as chemical fertiliser arrived and the masseira fields gave way. What remained moved sideways rather than disappearing: sargaço is gathered today mainly for the pharmaceutical, cosmetic and food industries, and the Museu do Sargaço in Apúlia keeps the tools, the boats and the clothing of the older economy.

      Offshore, the same coast holds something the sargaceiras and the sargaceiros had no word for. The kelp forests of northern Portugal, largely Laminaria hyperborea and Saccorhiza polyschides, are estimated to store some 16.5 gigagrams of carbon across roughly 5,100 hectares, and to export around a third of the carbon captured each year by all of the country's marine plant habitats. Researchers at CIIMAR and MARE have also recorded a tropicalisation of Portuguese waters that puts those forests, and everything living in them, at risk.

      So the question the tradition leaves open is not whether sargaço will be gathered, but what gathering will come to mean.`,
      pt: `Durante séculos o sargaço foi recolhido nos areais da Apúlia, em Esposende, pelos sargaceiros e pelas sargaceiras, que mantinham um pé no mar e outro na terra. Entravam na água com uma graveta e uma rede comprida, arrastavam a alga para a praia e deixavam-na secar ao sol durante três dias, antes de ser levada, juntamente com o pilado, para os campos de masseira: courelas cavadas em direção ao lençol freático e alimentadas pelo que a maré ia entregando. Por decisão régia, o sargaço estava isento de qualquer imposto, o que ajuda a explicar a força que a prática ganhou aqui.

      A apanha foi diminuindo à medida que chegou o adubo químico e os campos de masseira foram cedendo. O que restou deslocou-se em vez de desaparecer: hoje o sargaço é recolhido sobretudo para as indústrias farmacêutica, cosmética e alimentar, e o Museu do Sargaço, na Apúlia, guarda as alfaias, os barcos e o vestuário dessa economia mais antiga.

      Ao largo, a mesma costa guarda algo para que as sargaceiras e os sargaceiros não tinham palavra. As florestas de kelp do norte de Portugal, sobretudo Laminaria hyperborea e Saccorhiza polyschides, armazenam cerca de 16,5 gigagramas de carbono em aproximadamente 5100 hectares e exportam perto de um terço do carbono captado anualmente por todos os habitats de plantas marinhas do país. Investigadores do CIIMAR e do MARE registaram também uma tropicalização das águas portuguesas que coloca em risco essas florestas e tudo o que nelas vive.

      A questão que a tradição deixa em aberto não é, portanto, se o sargaço continuará a ser recolhido, mas o que passará a significar recolhê-lo.`,
    },
    img: 'la/sargassum/sargaceiro-historico.jpg',
    caption: { en: `Gathering sargaço`, pt: `A apanhar sargaço` },
    alt: {
      en: `A sargaceiro pulling a net of sargaço onto the sand`,
      pt: `Um sargaceiro a puxar uma rede de sargaço para a areia`,
    },
    credit: {
      en: `Esposende, 1936. Biblioteca Municipal Manuel de Boaventura`,
      pt: `Esposende, 1936. Biblioteca Municipal Manuel de Boaventura`,
    },
    sources: [
      {
        href: 'https://www.visitesposende.com/en/fazer/monumentos/sargasso-museum',
        label: {
          en: `Museu do Sargaço, Esposende. The harvesting tradition, the tools and the masseira fields`,
          pt: `Museu do Sargaço, Esposende. A tradição da apanha, as alfaias e os campos de masseira`,
        },
      },
      {
        href: 'https://www.ciimar.up.pt/marine-forests-in-northern-portugal-allies-in-the-fight-against-climate-change/',
        label: {
          en: `CIIMAR. Marine forests in northern Portugal, allies against climate change`,
          pt: `CIIMAR. Florestas marinhas no norte de Portugal, aliadas contra as alterações climáticas`,
        },
      },
      {
        href: 'https://www.mare-centre.pt/en/kelp_carbon',
        label: {
          en: `MARE. The carbon sequestration potential of kelp`,
          pt: `MARE. O potencial de sequestro de carbono do kelp`,
        },
      },
      {
        href: 'https://arquivos.rtp.pt/conteudos/o-sargaceiro-da-apulia/',
        label: { en: `RTP Arquivos. O Sargaceiro da Apúlia`, pt: `RTP Arquivos. O Sargaceiro da Apúlia` },
      },
      {
        href: 'https://observador.pt/2016/03/06/maresia-das-algas-do-areal-laboratorio/',
        label: {
          en: `Observador. Maresia das algas, do areal ao laboratório`,
          pt: `Observador. Maresia das algas, do areal ao laboratório`,
        },
      },
    ],
    note: `ml`,
  },


  /* ══ LOCAL STORIES ══ */

  'local-intro': {
    txt: {
      en: `These are some stories our research group gleaned and experienced.`,
      pt: `Estas são algumas das histórias que o nosso grupo de investigação recolheu e viveu.`,
    },
    full: {
      en: `These are some stories our research group gleaned and experienced.`,
      pt: `Estas são algumas das histórias que o nosso grupo de investigação recolheu e viveu.`,
    },
  },

  'local-tradition': {
    txt: {
      en: `The tradition is still close here. In Apúlia the sargaço was gathered by the sargaceiros and the sargaceiras, dried on the sand for three days, and carried onto the masseira fields as fertiliser. By royal decision it carried no tax. Today it goes mostly to pharmacy, cosmetics and food.

      Everyone we spoke to had a version of it. A grandmother who gathered, a field that used to be a masseira, a beach that used to be full of carts.`,
      pt: `A tradição ainda está próxima daqui. Na Apúlia o sargaço era recolhido pelos sargaceiros e pelas sargaceiras, seco na areia durante três dias e levado para os campos de masseira como fertilizante. Por decisão régia não pagava imposto. Hoje segue sobretudo para a farmácia, a cosmética e a alimentação.

      Todas as pessoas com quem falámos tinham uma versão disto. Uma avó que apanhava, um campo que já foi masseira, uma praia que já esteve cheia de carroças.`,
    },
    full: {
      en: `The tradition is still close here. In Apúlia the sargaço was gathered by the sargaceiros and the sargaceiras, dried on the sand for three days, and carried onto the masseira fields as fertiliser. By royal decision it carried no tax. Today it goes mostly to pharmacy, cosmetics and food.

      Everyone we spoke to had a version of it. A grandmother who gathered, a field that used to be a masseira, a beach that used to be full of carts.`,
      pt: `A tradição ainda está próxima daqui. Na Apúlia o sargaço era recolhido pelos sargaceiros e pelas sargaceiras, seco na areia durante três dias e levado para os campos de masseira como fertilizante. Por decisão régia não pagava imposto. Hoje segue sobretudo para a farmácia, a cosmética e a alimentação.

      Todas as pessoas com quem falámos tinham uma versão disto. Uma avó que apanhava, um campo que já foi masseira, uma praia que já esteve cheia de carroças.`,
    },
    sources: [
      {
        href: 'https://www.visitesposende.com/en/fazer/monumentos/sargasso-museum',
        label: { en: `Museu do Sargaço, Esposende`, pt: `Museu do Sargaço, Esposende` },
      },
    ],
    note: `ml`,
  },

  'local-to-sargassum': {
    label: { en: `The sargaço cluster →`, pt: `O grupo do sargaço →` },
    goTo: 'sargassum',
  },

  'local-rio-neiva': {
    txt: {
      en: `Rio Neiva is the association hosting us in Esposende. It was founded on 17 November 1989, is based in Antas, and works for the defence of the environment and the conservation of the Neiva river valley.

      Their work runs across environmental education, nature based sports and projects, from biodiversity and citizen science to coastal conservation. We have been working out of their space, and much of what we gleaned came through them.

      An interview and more of this story are coming soon.`,
      pt: `A Rio Neiva é a associação que nos acolhe em Esposende. Foi fundada a 17 de novembro de 1989, tem sede em Antas e trabalha pela defesa do ambiente e pela conservação do vale do rio Neiva.

      O seu trabalho passa pela educação ambiental, pelos desportos de natureza e por projetos, da biodiversidade e da ciência cidadã à conservação costeira. Temos trabalhado a partir do seu espaço, e muito do que recolhemos chegou através deles.

      Uma entrevista e mais desta história chegam em breve.`,
    },
    full: {
      en: `Rio Neiva is the association hosting us in Esposende. It was founded on 17 November 1989, is based in Antas, and works for the defence of the environment and the conservation of the Neiva river valley.

      Their work runs across environmental education, nature based sports and projects, from biodiversity and citizen science to coastal conservation. We have been working out of their space, and much of what we gleaned came through them.

      An interview and more of this story are coming soon.`,
      pt: `A Rio Neiva é a associação que nos acolhe em Esposende. Foi fundada a 17 de novembro de 1989, tem sede em Antas e trabalha pela defesa do ambiente e pela conservação do vale do rio Neiva.

      O seu trabalho passa pela educação ambiental, pelos desportos de natureza e por projetos, da biodiversidade e da ciência cidadã à conservação costeira. Temos trabalhado a partir do seu espaço, e muito do que recolhemos chegou através deles.

      Uma entrevista e mais desta história chegam em breve.`,
    },
    sources: [
      {
        href: 'https://rioneiva.com/',
        label: {
          en: `Rio Neiva, Associação de Defesa do Ambiente`,
          pt: `Rio Neiva, Associação de Defesa do Ambiente`,
        },
      },
    ],
    note: `ml`,
  },

  'local-to-future': {
    label: { en: `Our non human future products →`, pt: `Os nossos produtos futuros não humanos →` },
    goTo: 'future',
  },

  'local-a-water-memory': {
    title: `A water memory`,
    full: {
      en: `The water flows through the river into the ocean.... with so many sounds and colours...
      It whispers in the summer and it sings and roars in the winter
      It incorporates the fragrances and smells of everything and everybody that goes by....`,
      pt: `A água corre pelo rio até ao oceano.... com tantos sons e tantas cores...
      Sussurra no verão e canta e ruge no inverno
      Incorpora as fragrâncias e os cheiros de tudo e de todos os que passam....`,
    },
    img: 'la/local/gleaned-note.jpg',
    caption: { en: `Written at a workshop`, pt: `Escrito numa oficina` },
    alt: {
      en: `A water memory written by hand at one of the workshops`,
      pt: `Uma memória de água escrita à mão numa das oficinas`,
    },
  },

  'local-postcards': {
    title: `Postcards`,
    full: {
      en: `At the launch workshops at the Museu do Sargaço we handed out postcards. The ocean has been collecting stories longer than we have. Draw your water memory here.

      People drew white foamy plains and hard rock, dunes and a group of friends, an ear and a list, collect tinny, sand, record the wind. Somebody wrote an equation instead.`,
      pt: `Nas oficinas de lançamento no Museu do Sargaço distribuímos postais. O oceano recolhe histórias há mais tempo do que nós. Desenha aqui a tua memória de água.

      As pessoas desenharam planícies de espuma branca e rocha dura, dunas e um grupo de amigas, uma orelha e uma lista, apanhar latas, areia, gravar o vento. Alguém escreveu antes uma equação.`,
    },
    img: 'la/local/postcards.jpg',
    caption: { en: `Postcards at the Sargassum Museum`, pt: `Postais no Museu do Sargaço` },
    alt: {
      en: `Postcards drawn at the launch workshops, pinned to the wall`,
      pt: `Postais desenhados nas oficinas de lançamento, afixados na parede`,
    },
    note: `ml`,
  },

  'local-fishing-lures': {
    img: 'la/local/fishing-lures.jpg',
    caption: { en: `In a fishing shop`, pt: `Numa loja de pesca` },
    alt: { en: `Fishing lures on a shop rack`, pt: `Iscas de pesca numa prateleira de loja` },
  },

  'local-looking-for-shells': {
    title: `Looking for shells`,
    full: {
      en: `We went out to find shells. We walked the sand at low tide and found almost nothing, a few broken pieces, nothing whole.

      We met fishermen along the way and asked them. They all said the same thing. Go up north. There are more there. Everyone pointed further along the coast, as if the shells had moved and everybody knew it except us.

      We kept looking. We came back with sand, with recordings, with a story about not finding what we came for.`,
      pt: `Saímos à procura de conchas. Andámos pela areia na maré baixa e não encontrámos quase nada, alguns pedaços partidos, nada inteiro.

      Pelo caminho encontrámos pescadores e perguntámos. Diziam todos o mesmo. Vão mais para norte. Lá há mais. Toda a gente apontava mais adiante na costa, como se as conchas se tivessem mudado e todos soubessem menos nós.

      Continuámos à procura. Voltámos com areia, com gravações, e com uma história sobre não encontrar aquilo que fomos procurar.`,
    },
    img: 'la/local/shore.jpg',
    caption: { en: `On the shore at low tide`, pt: `Na costa na maré baixa` },
    alt: {
      en: `The rocky shore at low tide near Esposende`,
      pt: `A costa rochosa na maré baixa perto de Esposende`,
    },
    sources: [
      {
        href: 'https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-acidification',
        label: {
          en: `NOAA. Ocean acidification and what it does to shells`,
          pt: `NOAA. A acidificação dos oceanos e o que faz às conchas`,
        },
      },
    ],
    note: `ml`,
  },

  'local-the-lamprey': {
    title: `The lamprey`,
    full: {
      en: `We met a monster in a tank. A round mouth, a ring of teeth turning inwards, no jaw at all.

      It is a sea lamprey, and it moves between the river and the ocean. It is born in fresh water, drifts downstream as a larva, grows at sea, and comes back up the river to spawn and die. It has been doing this for longer than there have been fish with jaws.

      Here it is also dinner. Lampreia is a season and a delicacy in the north, waited for every year.`,
      pt: `Encontrámos um monstro num aquário. Uma boca redonda, um anel de dentes virados para dentro, sem maxilar nenhum.

      É uma lampreia, e move-se entre o rio e o oceano. Nasce em água doce, desce como larva, cresce no mar e volta a subir o rio para desovar e morrer. Faz isto há mais tempo do que existem peixes com maxilares.

      Aqui também é jantar. A lampreia é uma época e uma iguaria no norte, esperada todos os anos.`,
    },
    img: 'la/local/lamprey.jpg',
    caption: { en: `At the lamprey tanks`, pt: `Nos tanques das lampreias` },
    alt: {
      en: `Sea lampreys in a tank, mouths pressed against the glass`,
      pt: `Lampreias num aquário, com as bocas contra o vidro`,
    },
    note: `ml`,
  },

  'local-workshop-at-rio-neiva': {
    title: { en: `Workshop at Rio Neiva`, pt: `Oficina na Rio Neiva` },
    img: 'la/local/rio-neiva.jpg',
    caption: { en: `Workshop at Rio Neiva`, pt: `Oficina na Rio Neiva` },
    alt: {
      en: `A workshop at Rio Neiva, the association hosting us in Antas, Esposende`,
      pt: `Uma oficina na Rio Neiva, a associação que nos acolhe em Antas, Esposende`,
    },
    sources: [
      {
        href: 'https://rioneiva.com/',
        label: {
          en: `Rio Neiva, Associação de Defesa do Ambiente`,
          pt: `Rio Neiva, Associação de Defesa do Ambiente`,
        },
      },
    ],
  },


  /* ══ SPECULATIVE FUTURES & PRODUCTS ══ */

  'future-interview-coming': {
    title: { en: `Interview coming`, pt: `Entrevista a caminho` },
    txt: {
      en: `A scientific perspective on futures and speculations around Esposende. The interview is coming and will be loaded here.`,
      pt: `Uma perspetiva científica sobre futuros e especulações em torno de Esposende. A entrevista está a caminho e será carregada aqui.`,
    },
    full: {
      en: `A scientific perspective on futures and speculations around Esposende. The interview is coming and will be loaded here.`,
      pt: `Uma perspetiva científica sobre futuros e especulações em torno de Esposende. A entrevista está a caminho e será carregada aqui.`,
    },
  },

  'future-the-range': {
    title: { en: `The range`, pt: `A gama` },
    full: {
      en: `We sell products that do not exist. Each one takes something the coast is actually losing and puts it in a jar with a label and a promise.

      They are speculative, and they are specific. Every one starts from something we met in Esposende: a shell we could not find, a kelp forest under warming water, a dune holding on under litter, the oxygen the algae make.

      This is the speculative product line. You can listen to it, and sometimes hear the ads for them, in our eternal stream.`,
      pt: `Vendemos produtos que não existem. Cada um pega em algo que a costa está mesmo a perder e coloca-o num frasco, com um rótulo e uma promessa.

      São especulativos e são concretos. Todos partem de algo que encontrámos em Esposende: uma concha que não conseguimos achar, uma floresta de algas sob água mais quente, uma duna a aguentar-se sob o lixo, o oxigénio que as algas produzem.

      Esta é a linha de produtos especulativos. Podem ouvi-la, e por vezes ouvir os anúncios, na nossa transmissão eterna.`,
    },
    gallery: [
      {
        src: 'la/future/products-6.jpg',
        caption: { en: `Installation view, Shell Cream`, pt: `Vista da instalação, Shell Cream` },
        alt: {
          en: `Shell Cream, a shell dissolving into cream`,
          pt: `Shell Cream, uma concha a dissolver-se em creme`,
        },
      },
      {
        src: 'la/future/products-9.jpg',
        caption: { en: `Installation view, Acid Tabs`, pt: `Vista da instalação, Acid Tabs` },
        alt: {
          en: `Acid Tabs, white tablets in a corked vial`,
          pt: `Acid Tabs, pastilhas brancas num frasco com rolha`,
        },
      },
      {
        src: 'la/future/products-7.jpg',
        caption: { en: `Installation view, Sexy Dunes`, pt: `Vista da instalação, Sexy Dunes` },
        alt: { en: `Sexy Dunes, a vial of dune sand`, pt: `Sexy Dunes, um frasco de areia de duna` },
      },
      {
        src: 'la/future/products-8.jpg',
        caption: { en: `Installation view, Deluxe O2`, pt: `Vista da instalação, Deluxe O2` },
        alt: {
          en: `Deluxe O2, a corked vial of oxygen`,
          pt: `Deluxe O2, um frasco de oxigénio com rolha`,
        },
      },
      {
        src: 'la/future/products-5.jpg',
        caption: { en: `Installation view, Sargassum City`, pt: `Vista da instalação, Sargassum City` },
        alt: {
          en: `Sargassum City, sargaço suspended in liquid`,
          pt: `Sargassum City, sargaço suspenso em líquido`,
        },
      },
      {
        src: 'la/future/products.jpg',
        caption: { en: `Installation view, the full range`, pt: `Vista da instalação, a gama completa` },
        alt: { en: `The five products lined up`, pt: `Os cinco produtos alinhados` },
      },
      {
        src: 'la/future/products-3.jpg',
        caption: { en: `Installation view, Shell Cream and the range`, pt: `Vista da instalação, o Shell Cream e a gama` },
        alt: { en: `Shell Cream in front of the range`, pt: `O Shell Cream à frente da gama` },
      },
      {
        src: 'la/future/products-4.jpg',
        caption: { en: `Installation view, Acid Tabs at the window`, pt: `Vista da instalação, os Acid Tabs à janela` },
        alt: { en: `Acid Tabs against the window`, pt: `Os Acid Tabs contra a janela` },
      },
      {
        src: 'la/future/dune-a.jpg',
        caption: { en: `Installation view, the Sexy Dunes vitrine`, pt: `Vista da instalação, a vitrina do Sexy Dunes` },
        alt: {
          en: `The dune built in a vitrine, installation view`,
          pt: `A duna construída numa vitrina, vista da instalação`,
        },
      },
      {
        src: 'la/future/dune-b.jpg',
        caption: { en: `Installation view, the Sexy Dunes flyer`, pt: `Vista da instalação, o folheto do Sexy Dunes` },
        alt: {
          en: `The Sexy Dunes flyer in front of the dune`,
          pt: `O folheto do Sexy Dunes à frente da duna`,
        },
      },
    ],
    entries: [
      {
        title: { en: `Shell Cream`, pt: `Shell Cream` },
        text: {
          en: `As the ocean takes up more carbon its pH drops, and the animals that build shells lose the carbonate they need to build them. Shells grow thinner, and some begin to dissolve. Shell Cream is sold as skincare for exactly that. Outlast the acid era. We went looking for shells on this coast and came back with almost nothing.`,
          pt: `À medida que o oceano absorve mais carbono, o seu pH desce, e os animais que constroem conchas perdem o carbonato de que precisam para as construir. As conchas ficam mais finas e algumas começam a dissolver-se. O Shell Cream é vendido como cosmética para isso mesmo. Sobreviva à era ácida. Fomos à procura de conchas nesta costa e voltámos quase sem nada.`,
        },
        sources: [
          {
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4753494/',
            label: {
              en: `Ocean acidification and calcifying marine life`,
              pt: `Acidificação dos oceanos e vida marinha calcificante`,
            },
          },
        ],
      },
      {
        title: { en: `Acid Tabs`, pt: `Acid Tabs` },
        text: {
          en: `The same problem from the other side. The long record of falling pH in the Iberian upwelling system covers this coast, and the north of Portugal, Esposende included, is its most exposed part. Marina told us acidification is a serious threat to the sargaço and the kelp forests here, and pointed us to the blue carbon research to understand what is at stake as those forests degrade. So we packaged the acid as a supplement.`,
          pt: `O mesmo problema pelo outro lado. O longo registo da descida do pH no sistema de afloramento ibérico cobre esta costa, e o norte de Portugal, incluindo Esposende, é a sua parte mais exposta. A Marina disse-nos que a acidificação é uma ameaça séria ao sargaço e às florestas de algas daqui, e encaminhou-nos para a investigação sobre carbono azul para percebermos o que está em jogo à medida que essas florestas se degradam. Por isso embalámos o ácido como suplemento.`,
        },
        sources: [
          {
            href: 'https://essd.copernicus.org/articles/12/2647/2020/',
            label: {
              en: `The pH record of the Iberian upwelling system`,
              pt: `O registo de pH do sistema de afloramento ibérico`,
            },
          },
        ],
      },
      {
        title: { en: `Sexy Dunes`, pt: `Sexy Dunes` },
        text: {
          en: `The northern Portuguese coast carries some of the highest erosion and flooding risk in the country, and the dunes take it alongside litter and everything else we leave on them. Plastic left on the sand becomes microplastic in the water. Sexy Dunes sells the dune as an object of desire. Research shows that dunes which look sexy have a 25% less chance of getting littered.`,
          pt: `A costa norte portuguesa apresenta alguns dos maiores riscos de erosão e de galgamento do país, e as dunas suportam-nos a par do lixo e de tudo o resto que lá deixamos. O plástico deixado na areia torna-se microplástico na água. O Sexy Dunes vende a duna como objeto de desejo. A investigação mostra que dunas com ar sexy têm menos 25% de probabilidade de receber lixo.`,
        },
        sources: [
          {
            href: 'https://www.mdpi.com/2071-1050/16/20/8891',
            label: {
              en: `Coastal erosion and flooding risk on the Portuguese coast`,
              pt: `Erosão costeira e risco de galgamento na costa portuguesa`,
            },
          },
          {
            href: 'https://link.springer.com/chapter/10.1007/978-3-031-08626-7_2',
            label: {
              en: `Litter and pressures on the dune environment`,
              pt: `Lixo e pressões sobre o ambiente dunar`,
            },
          },
        ],
      },
      {
        title: { en: `Deluxe O2`, pt: `Deluxe O2` },
        text: {
          en: `Sargaço and the marine algae make oxygen by photosynthesis, the other half of the carbon story. That cycle is real, and warming water makes it less steady: it shifts, and in dense bloom conditions it can run the other way and strip oxygen out. Deluxe O2 bottles that specific oxygen and sells it back. Blue oxygen, our own term, next to the blue carbon everyone already trades in.`,
          pt: `O sargaço e as algas marinhas produzem oxigénio por fotossíntese, a outra metade da história do carbono. Esse ciclo é real, e a água mais quente torna-o menos estável: altera-se e, em condições de floração densa, pode inverter-se e retirar oxigénio. O Deluxe O2 engarrafa esse oxigénio e revende-o. Oxigénio azul, um termo nosso, ao lado do carbono azul que já toda a gente transaciona.`,
        },
        sources: [
          {
            href: 'https://drive.google.com/file/d/1KQ087h4OV0cWnASFKR7XHcTsc7oLzIRj/view?usp=sharing',
            label: { en: `Blue carbon reading`, pt: `Leitura sobre carbono azul` },
          },
        ],
      },
      {
        title: { en: `Sargassum City`, pt: `Sargassum City` },
        text: {
          en: `Sargaço is being used more and will likely be commercialised further, as a resource, for oxygen, for material, for the pharmacy shelf. It is also, first, a habitat that marine life needs in order to exist at all. Sargassum City takes the commodification to its end and builds a whole speculative economy on harvesting it. The joke is that the weed was already a city, with residents, before anyone thought to sell it.`,
          pt: `O sargaço é cada vez mais utilizado e será provavelmente mais comercializado, como recurso, para oxigénio, para material, para a prateleira da farmácia. É também, antes disso, um habitat de que a vida marinha precisa para simplesmente existir. A Sargassum City leva a mercantilização até ao fim e constrói uma economia especulativa inteira sobre a sua apanha. A piada é que a alga já era uma cidade, com habitantes, antes de alguém pensar em vendê-la.`,
        },
        sources: [
          {
            href: 'https://drive.google.com/file/d/1KQ087h4OV0cWnASFKR7XHcTsc7oLzIRj/view?usp=sharing',
            label: { en: `Blue carbon reading`, pt: `Leitura sobre carbono azul` },
          },
          {
            href: 'https://drive.google.com/file/d/1FPEiOMNkUFbWOyPrSDOZuRZYLGdleDMR/view?usp=sharing',
            label: { en: `Sargassum as habitat`, pt: `O sargaço como habitat` },
          },
        ],
      },
    ],
    note: {
      en: `Text written based on the sources above and edited with ML.`,
      pt: `Texto escrito com base nas fontes acima e editado com ML. Tradução automática.`,
    },
  },

  'future-the-flyers': {
    title: { en: `The flyers`, pt: `Os folhetos` },
    vid: 'la/future/prints.mp4',
    poster: 'la/future/prints-poster.jpg',
  },

  'future-non-human-voices': {
    title: { en: `Non human voices`, pt: `Vozes não humanas` },
    txt: {
      en: `The ads are not addressed to us. They are for non human water bodies and species, the ones already living with what the products pretend to solve.

      We are speculating on the issues that reach them first.`,
      pt: `Os anúncios não são dirigidos a nós. São para corpos de água e espécies não humanas, os que já vivem com aquilo que os produtos fingem resolver.

      Estamos a especular sobre as questões que chegam primeiro a eles.`,
    },
    full: {
      en: `The ads are not addressed to us. They are for non human water bodies and species, the ones already living with what the products pretend to solve.

      We are speculating on the issues that reach them first.`,
      pt: `Os anúncios não são dirigidos a nós. São para corpos de água e espécies não humanas, os que já vivem com aquilo que os produtos fingem resolver.

      Estamos a especular sobre as questões que chegam primeiro a eles.`,
    },
  },

  'future-bioplastic-futures-at-home': {
    title: { en: `Bioplastic futures at home`, pt: `Futuros de bioplástico em casa` },
    full: {
      en: `Our research included work on the future of sargassum: in what ways could it be utilised? We looked at at-home recipes for creating bioplastics with sargassum.

      We imagine that bioplastic could be used to create shells where there may be none left. As part of our toolkit, we share some prints for creating moulds into which one can pour the bioplastic sargassum to create a shell shape for their DIY shellphone.`,
      pt: `A nossa investigação incluiu trabalho sobre o futuro do sargaço: de que formas poderia ser utilizado? Procurámos receitas caseiras para criar bioplásticos com sargaço.

      Imaginamos que o bioplástico possa servir para criar conchas onde talvez já não haja nenhuma. Como parte do nosso kit de ferramentas, partilhamos alguns moldes para imprimir, nos quais se pode verter o bioplástico de sargaço para dar a forma de concha ao seu shellphone caseiro.`,
    },
    gallery: [
      {
        src: 'la/future/bioplastic-cast.jpg',
        caption: { en: `Casting bioplastic`, pt: `A moldar bioplástico` },
        alt: {
          en: `A cast piece of sargaço bioplastic, deep red and still wet`,
          pt: `Uma peça moldada de bioplástico de sargaço, vermelho escuro e ainda húmida`,
        },
      },
    ],
    entries: [
      {
        title: { en: `Recipe from Nayeli`, pt: `Receita da Nayeli` },
        text: {
          en: `Mix the ingredients, then add the sargaço: whole, cut into small pieces, or dried and ground into a powder. Small pieces of the plant suspended in it look best. Colour can be added. Cast it in a mould, and allow for shrinkage as it dries.

          50 g glycerine
          400 ml water
          50 g starch
          60 ml vinegar
          15 g salt`,
          pt: `Misturar os ingredientes e juntar o sargaço: inteiro, cortado em pedaços pequenos, ou seco e moído em pó. Pequenos pedaços da planta suspensos no material são o que fica melhor. Pode juntar-se cor. Verter num molde, contando com o encolhimento durante a secagem.

          50 g de glicerina
          400 ml de água
          50 g de amido
          60 ml de vinagre
          15 g de sal`,
        },
      },
    ],
    sources: [
      {
        href: 'https://www.youtube.com/watch?v=P8RtSQ9az2U',
        label: {
          en: `Making bioplastic at home, video guide`,
          pt: `Fazer bioplástico em casa, guia em vídeo`,
        },
      },
      {
        href: 'https://www.youtube.com/watch?v=7BMtchgejK0',
        label: { en: `Another at home bioplastic guide`, pt: `Outro guia de bioplástico caseiro` },
      },
    ],
    note: {
      en: `Recipes collected from colleagues. Text edited with ML.`,
      pt: `Receitas recolhidas junto de colegas. Texto editado com ML. Tradução automática.`,
    },
  },

  'future-drawings': {
    title: { en: `The drawings`, pt: `Os desenhos` },
    img: 'la/future/drawings.svg',
    alt: {
      en: `The She Tells drawings in turn: seaweed, a shell, the airship, bubbles, a spiral shell, a line`,
      pt: `Os desenhos da She Tells, um a um: algas, uma concha, o dirigível, bolhas, uma concha em espiral, uma linha`,
    },
    caption: { en: `The drawings, one after another`, pt: `Os desenhos, um após o outro` },
  },


  /* ══ WORKSHOPS ══ */

  'workshop-intro': {
    txt: {
      en: `A series of workshops we have held as part of community engagement, aiming to create impact with DIY technologies, creating and giving agency on tech for listening to local water stories and speculative futures

      The aim is to remember being part of an ecology, to imagine futures and pasts together, and to understand and critically engage with how tech plays a part in these ecosystems by learning DIY tools and shelphone`,
      pt: `Uma série de oficinas que realizámos como parte do trabalho com a comunidade, procurando criar impacto com tecnologias DIY, criando e dando autonomia sobre a tecnologia para escutar histórias de água locais e futuros especulativos

      O objetivo é recordar que fazemos parte de uma ecologia, imaginar futuros e passados em conjunto, e compreender e questionar criticamente o papel que a tecnologia tem nestes ecossistemas, aprendendo ferramentas DIY e o shelphone`,
    },
  },

  'workshop-more-coming': {
    txt: {
      en: `More on each workshop is coming, and will be gathered here.`,
      pt: `Mais sobre cada oficina está a caminho, e será reunido aqui.`,
    },
  },

  'workshop-museum': {
    title: { en: `Workshop at Sargassum Museum`, pt: `Oficina no Museu do Sargaço` },
    gallery: [
      {
        src: 'la/workshop/opening-101.jpg',
        alt: { en: `Postcards pinned in a grid on a concrete wall`, pt: `Postais afixados numa grelha numa parede de betão` },
        caption: { en: `Postcards at the museum`, pt: `Postais no museu` },
      },
      {
        src: 'la/workshop/opening-116.jpg',
        alt: { en: `A printed postcard with tick boxes, close up`, pt: `Um postal impresso com quadrados para assinalar, em grande plano` },
      },
      {
        src: 'la/workshop/opening-141.jpg',
        alt: { en: `The group presenting to an audience seated on the floor`, pt: `O grupo a apresentar perante uma assistência sentada no chão` },
        caption: { en: `Workshop at the Sargassum Museum`, pt: `Oficina no Museu do Sargaço` },
      },
      {
        src: 'la/workshop/opening-144.jpg',
        alt: { en: `People seated listening, one wearing headphones`, pt: `Pessoas sentadas a escutar, uma delas com auscultadores` },
        caption: { en: `Workshop at the Sargassum Museum`, pt: `Oficina no Museu do Sargaço` },
      },
      {
        src: 'la/workshop/opening-147.jpg',
        alt: { en: `The group walking down to the water`, pt: `O grupo a descer até à água` },
        caption: { en: `Walking on the beach`, pt: `A caminhar na praia` },
      },
      {
        src: 'la/workshop/opening-149.jpg',
        alt: { en: `Someone crouching over the sand`, pt: `Alguém agachado sobre a areia` },
        caption: { en: `Gleaning on the beach`, pt: `A recolher na praia` },
      },
      {
        src: 'la/workshop/opening-153.jpg',
        alt: { en: `Someone sitting on the beach, writing`, pt: `Alguém sentado na praia, a escrever` },
        caption: { en: `Writing on the beach`, pt: `A escrever na praia` },
      },
      {
        src: 'la/workshop/opening-156.jpg',
        alt: { en: `A figure on the sand with the buildings behind`, pt: `Uma figura na areia com os edifícios ao fundo` },
        caption: { en: `Walking back`, pt: `A caminhar de volta` },
      },
      {
        src: 'la/workshop/opening-159.jpg',
        alt: { en: `The room, with drawings along the wall`, pt: `A sala, com desenhos ao longo da parede` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/workshop/opening-179.jpg',
        alt: { en: `Three people seated in conversation`, pt: `Três pessoas sentadas em conversa` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/workshop/opening-180.jpg',
        alt: { en: `A shell held up to the mouth`, pt: `Uma concha levada à boca` },
        caption: { en: `Trying the shellphone`, pt: `A experimentar o shellphone` },
      },
      {
        src: 'la/workshop/opening-181.jpg',
        alt: { en: `Three people talking after the workshop`, pt: `Três pessoas a conversar depois da oficina` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
    ],
  },

  'workshop-rioneiva': {
    title: { en: `Workshop at Rio Neiva`, pt: `Oficina na Rio Neiva` },
    gallery: [
      {
        src: 'la/workshop/rioneiva-17.jpg',
        alt: { en: `A shell on a red tray, hands working beside it`, pt: `Uma concha num tabuleiro vermelho, mãos a trabalhar ao lado` },
        caption: { en: `Working at Rio Neiva`, pt: `A trabalhar na Rio Neiva` },
      },
      {
        src: 'la/workshop/rioneiva-19.jpg',
        alt: { en: `People standing and talking as the laptops are set up`, pt: `Pessoas de pé a conversar enquanto se montam os portáteis` },
        caption: { en: `Workshop at Rio Neiva`, pt: `Oficina na Rio Neiva` },
      },
      {
        src: 'la/workshop/rioneiva-20.jpg',
        alt: { en: `Working at the long window, the dunes outside`, pt: `A trabalhar junto à janela comprida, as dunas lá fora` },
        caption: { en: `Working at Rio Neiva`, pt: `A trabalhar na Rio Neiva` },
      },
      {
        src: 'la/workshop/rioneiva-21.jpg',
        alt: { en: `Three people around one laptop`, pt: `Três pessoas à volta de um portátil` },
        caption: { en: `Working at Rio Neiva`, pt: `A trabalhar na Rio Neiva` },
      },
      {
        src: 'la/workshop/rioneiva-22.jpg',
        alt: { en: `Wiring a shell to a board, yellow leads across the table`, pt: `A ligar uma concha a uma placa, fios amarelos sobre a mesa` },
        caption: { en: `Building the shellphone`, pt: `A construir o shellphone` },
      },
      {
        src: 'la/workshop/rioneiva-23.jpg',
        alt: { en: `The long table, everyone at work`, pt: `A mesa comprida, toda a gente a trabalhar` },
        caption: { en: `Workshop at Rio Neiva`, pt: `Oficina na Rio Neiva` },
      },
      {
        src: 'la/workshop/rioneiva-28.jpg',
        alt: { en: `Recording at the shoreline, arm outstretched over the water`, pt: `A gravar à beira de água, o braço estendido sobre o mar` },
        caption: { en: `Recording at the shore`, pt: `A gravar à beira-mar` },
      },
      {
        src: 'la/workshop/rioneiva-30.jpg',
        alt: { en: `Out on the dunes with a recorder`, pt: `Nas dunas com um gravador` },
        caption: { en: `Recording on the dunes`, pt: `A gravar nas dunas` },
      },
      {
        src: 'la/workshop/rioneiva-31.jpg',
        alt: { en: `The shadow a wired object throws on the wall`, pt: `A sombra que um objeto ligado projeta na parede` },
        caption: { en: `At Rio Neiva`, pt: `Na Rio Neiva` },
      },
      {
        src: 'la/workshop/rioneiva-32.jpg',
        alt: { en: `Wired objects laid out on the table`, pt: `Objetos ligados dispostos sobre a mesa` },
        caption: { en: `Building the shellphone`, pt: `A construir o shellphone` },
      },
      {
        src: 'la/workshop/rioneiva-33.jpg',
        alt: { en: `A laptop running the patch, hands at the breadboard`, pt: `Um portátil a correr o programa, mãos na placa de ensaio` },
        caption: { en: `Working at Rio Neiva`, pt: `A trabalhar na Rio Neiva` },
      },
    ],
  },

  'workshop-children': {
    title: { en: `Workshop with children`, pt: `Oficina com crianças` },
    full: {
      en: `Kids at an open workshop in Rio Neiva were learning about teaching and listening, remembering, and using a DIY shellphone prototype.`,
      pt: `Crianças numa oficina aberta na Rio Neiva a aprender sobre ensinar e escutar, a recordar, e a usar um protótipo caseiro do shellphone.`,
    },
    gallery: [
      {
        src: 'la/workshop/children-1.jpg',
        alt: { en: `The introduction on the classroom screen`, pt: `A introdução no ecrã da sala de aula` },
        caption: { en: `Workshop with children`, pt: `Oficina com crianças` },
      },
      {
        src: 'la/workshop/children-2.jpg',
        alt: { en: `The class gathered at the board`, pt: `A turma reunida junto ao quadro` },
        caption: { en: `Workshop with children`, pt: `Oficina com crianças` },
      },
      {
        src: 'la/workshop/children-3.jpg',
        alt: { en: `Children at their desks`, pt: `Crianças nas suas carteiras` },
        caption: { en: `In the classroom`, pt: `Na sala de aula` },
      },
      {
        src: 'la/workshop/children-4.jpg',
        alt: { en: `Talking with the class`, pt: `A conversar com a turma` },
        caption: { en: `Workshop with children`, pt: `Oficina com crianças` },
      },
      {
        src: 'la/workshop/children-5.jpg',
        alt: { en: `Drawing at the desk`, pt: `A desenhar na carteira` },
        caption: { en: `Drawing`, pt: `A desenhar` },
      },
      {
        src: 'la/workshop/children-7.jpg',
        alt: { en: `A shell held to the ear, listening`, pt: `Uma concha encostada ao ouvido, à escuta` },
        caption: { en: `Listening to a shell`, pt: `À escuta de uma concha` },
      },
      {
        src: 'la/workshop/children-8.jpg',
        alt: { en: `A drawing open on a laptop screen`, pt: `Um desenho aberto no ecrã de um portátil` },
        caption: { en: `Working on the drawings`, pt: `A trabalhar nos desenhos` },
      },
      {
        src: 'la/workshop/children-9.jpg',
        alt: { en: `Two hands, one holding the other`, pt: `Duas mãos, uma a segurar a outra` },
        caption: { en: `Workshop with children`, pt: `Oficina com crianças` },
      },
      {
        src: 'la/workshop/children-10.jpg',
        alt: { en: `Drawings wired with yellow leads into paper circuits`, pt: `Desenhos ligados com fios amarelos em circuitos de papel` },
        caption: { en: `Making paper circuits`, pt: `A fazer circuitos de papel` },
      },
      {
        src: 'la/workshop/children-11.jpg',
        alt: { en: `A shell beside a drawing of a snail`, pt: `Uma concha ao lado de um desenho de um caracol` },
        caption: { en: `Drawing`, pt: `A desenhar` },
      },
      {
        src: 'la/workshop/children-12.jpg',
        alt: { en: `Hands wiring a circuit into a drawing`, pt: `Mãos a ligar um circuito a um desenho` },
        caption: { en: `Making paper circuits`, pt: `A fazer circuitos de papel` },
      },
    ],
  },

  /* ══ DRAWINGS ══ */

  'drawings-intro': {
    title: { en: `Drawings`, pt: `Desenhos` },
    txt: {
      en: `These drawings were made during a workshop at the local school, led together with Rui Santos, a teacher in Esposende. It was thanks to him that we were able to work with his students.

      The students followed the Hypersea prompts, which we used as a method for making the drawings. Each one drew a memory of water they carry, thought through the Hypersea idea.

      The drawings then came to life through a DIY shellphone prototype. When a shell was held, the drawing it belonged to would emerge. Some of them can be heard on the eternal stream.

      As sargaço was once gleaned along this coast, we gleaned memories together, to remember our connection to the ecosystem we are part of.

      These workshops are also a way of building a method: working with children on technology they can open, wire and change, so that the future reads as something they make rather than something that arrives. Climate anxiety is easy to hand to a child and hard to take back. The aim is to turn it into agency, by giving them tools they can hold and futures they get to write.

      Through this work, we aim to remember our connection to the ocean and foster awareness and cultural belonging within the ecosystems we are part of.

      The ritual is simple. Draw, record, upload. Those are the motions a platform uses to extract from you, and here they are turned around and put to ecological care, to speculative story, and to hope.`,
      pt: `Estes desenhos foram feitos durante uma oficina na escola local, orientada em conjunto com o Rui Santos, professor em Esposende. Foi graças a ele que conseguimos trabalhar com os seus alunos.

      Os alunos seguiram as propostas do Hypersea, que usámos como método para fazer os desenhos. Cada um desenhou uma memória de água que carrega, pensada a partir da ideia do Hypersea.

      Depois os desenhos ganharam vida através de um protótipo caseiro do shellphone. Quando se segurava uma concha, o desenho a que pertencia emergia. Alguns podem ser ouvidos na transmissão eterna.

      Tal como o sargaço era outrora recolhido nesta costa, recolhemos memórias em conjunto, para recordar a nossa ligação ao ecossistema de que fazemos parte.

      Estas oficinas são também uma forma de construir um método: trabalhar com crianças sobre tecnologia que podem abrir, ligar e alterar, para que o futuro se leia como algo que fazem e não como algo que chega. A ansiedade climática é fácil de entregar a uma criança e difícil de retomar. O objetivo é transformá-la em agência, dando-lhes ferramentas que possam segurar e futuros que lhes cabe escrever.

      Com este trabalho, queremos recordar a nossa ligação ao oceano e fomentar a consciência e o pertencimento cultural dentro dos ecossistemas de que fazemos parte.

      O ritual é simples. Desenhar, gravar, carregar. São os mesmos gestos que uma plataforma usa para extrair de nós, e aqui são virados do avesso e postos ao serviço do cuidado ecológico, da história especulativa e da esperança.`,
    },
    note: {
      en: `Written from the group's notes and edited with ML.`,
      pt: `Escrito a partir das notas do grupo e editado com ML. Tradução automática.`,
    },
  },


  'drawings-process': {
    title: { en: `In the classroom`, pt: `Na sala de aula` },
    gallery: [
      {
        src: 'la/drawings/process-01.jpg',
        alt: { en: `Colouring in at the desk`, pt: `Colouring in at the desk` },
        caption: { en: `In the classroom`, pt: `Na sala de aula` },
      },
      {
        src: 'la/drawings/process-02.jpg',
        alt: { en: `A pufferfish among whales`, pt: `A pufferfish among whales` },
        caption: { en: `In the classroom`, pt: `Na sala de aula` },
      },
      {
        src: 'la/drawings/process-03.jpg',
        alt: { en: `Drawing seagrass in yellow`, pt: `Drawing seagrass in yellow` },
        caption: { en: `In the classroom`, pt: `Na sala de aula` },
      },
      {
        src: 'la/drawings/process-04.jpg',
        alt: { en: `Wiring a drawing on green paper`, pt: `Wiring a drawing on green paper` },
        caption: { en: `Wiring the drawings`, pt: `A ligar os desenhos` },
      },
      {
        src: 'la/drawings/process-05.jpg',
        alt: { en: `Clips and leads laid out beside a drawing`, pt: `Clips and leads laid out beside a drawing` },
        caption: { en: `Wiring the drawings`, pt: `A ligar os desenhos` },
      },
      {
        src: 'la/drawings/process-06.jpg',
        alt: { en: `The snail drawing beside a real shell`, pt: `The snail drawing beside a real shell` },
        caption: { en: `The drawing and the shell`, pt: `O desenho e a concha` },
      },
      {
        src: 'la/drawings/process-07.jpg',
        alt: { en: `Fixing a circuit onto a drawing`, pt: `Fixing a circuit onto a drawing` },
        caption: { en: `Wiring the drawings`, pt: `A ligar os desenhos` },
      },
    ],
  },

  'drawings-to-future': {
    goTo: 'future',
    label: { en: `Our speculative products →`, pt: `Os nossos produtos especulativos →` },
  },

  'drawings-stories': {
    title: { en: `Speculative stories for Esposende`, pt: `Histórias especulativas para Esposende` },
    full: {
      en: `Four of the drawings were read as beginnings. Each one names something that is already happening off this coast, and each was written on into a future where it turns out well. They are speculative, and they are hopeful on purpose.

      We will return for the final workshops and speculate these futures together with the children. What they make will go into this living archive, and into the eternal stream, where anyone can listen through a DIY shellphone.`,
      pt: `Quatro dos desenhos foram lidos como princípios. Cada um nomeia algo que já está a acontecer ao largo desta costa, e cada um foi continuado até um futuro onde as coisas correm bem. São especulativos, e são esperançosos de propósito.

      Vamos regressar para as oficinas finais e especular estes futuros em conjunto com as crianças. O que fizerem entrará neste arquivo vivo e na transmissão eterna, onde qualquer pessoa poderá escutar através de um shellphone caseiro.`,
    },
    gallery: [
      {
        src: 'la/drawings/drawing-02.jpg',
        alt: { en: `A jellyfish drawn large in blue, with shoals of small fish and seagrass`, pt: `Uma alforreca desenhada em grande a azul, com cardumes de peixes pequenos e ervas marinhas` },
        caption: { en: `A drawing from the school workshop`, pt: `Um desenho da oficina na escola` },
      },
      {
        src: 'la/drawings/drawing-13.jpg',
        alt: { en: `Two children on an orange beach beside blue water, with fish`, pt: `Duas crianças numa praia laranja junto a água azul, com peixes` },
        caption: { en: `A drawing from the school workshop`, pt: `Um desenho da oficina na escola` },
      },
      {
        src: 'la/drawings/drawing-14.jpg',
        alt: { en: `A fishing boat hauling a net, a whale alongside, rain and sun`, pt: `Um barco de pesca a puxar uma rede, uma baleia ao lado, chuva e sol` },
        caption: { en: `A drawing from the school workshop`, pt: `Um desenho da oficina na escola` },
      },
      {
        src: 'la/drawings/drawing-30.jpg',
        alt: { en: `A snail with a large spiral shell walking on legs, under a palm and a sun`, pt: `Um caracol com uma grande concha em espiral a andar sobre pernas, sob uma palmeira e um sol` },
        caption: { en: `A drawing from the school workshop`, pt: `Um desenho da oficina na escola` },
      },
    ],
    entries: [
      {
        title: { en: `The lamps of the bay`, pt: `As lanternas da baía` },
        text: {
          en: `In this future the jellyfish are the lamps of the bay. When the water warms they arrive in their thousands, and instead of closing the beach, Esposende goes down to watch them.

          Children learn to read them. How many, how deep, how early they came. The jellyfish become the first thing the town asks when it wants to know how the sea is doing, and the answer is always given in light.`,
          pt: `Neste futuro as alforrecas são as lanternas da baía. Quando a água aquece chegam aos milhares e, em vez de fecharem a praia, Esposende desce para as ver.

          As crianças aprendem a lê-las. Quantas, a que profundidade, quão cedo chegaram. As alforrecas passam a ser a primeira coisa que a vila pergunta quando quer saber como está o mar, e a resposta vem sempre em luz.`,
        },
        sources: [
          {
            href: 'https://doi.org/10.1016/j.tree.2009.01.010',
            label: { en: `Jellyfish blooms in warming, overfished seas`, pt: `Explosões de alforrecas em mares mais quentes e sobrepescados` },
          },
        ],
      },
      {
        title: { en: `The day the shoals came back`, pt: `O dia em que os cardumes voltaram` },
        text: {
          en: `In this future the fish come back. Not all at once and not everywhere, but enough that a child can stand on the sand with a line and wait, and something silver arrives.

          The grown ups say it happened because people stopped taking everything. The children say it happened because somebody finally remembered to ask the fish to return. Both are written down, and nobody has decided which one is the real reason.`,
          pt: `Neste futuro os peixes voltam. Não todos de uma vez nem em todo o lado, mas o suficiente para uma criança poder ficar na areia com uma linha e esperar, e chegar alguma coisa prateada.

          Os adultos dizem que aconteceu porque as pessoas deixaram de levar tudo. As crianças dizem que aconteceu porque alguém finalmente se lembrou de pedir aos peixes que voltassem. As duas versões ficam escritas, e ninguém decidiu qual é a verdadeira.`,
        },
        sources: [
          {
            href: 'https://doi.org/10.3989/scimar.2003.67s1245',
            label: { en: `The Iberian sardine stock off Portugal`, pt: `O stock de sardinha ibérica ao largo de Portugal` },
          },
        ],
      },
      {
        title: { en: `The net that lets go`, pt: `A rede que se solta` },
        text: {
          en: `In this future the nets are made of something the sea can eat. When one is lost it softens, and then it is gone, and the whale swims through the place where it used to be without noticing anything at all.

          The boats still go out. The difference is that nothing they leave behind keeps fishing after they have gone home.`,
          pt: `Neste futuro as redes são feitas de algo que o mar consegue comer. Quando uma se perde, amolece e depois desaparece, e a baleia atravessa o sítio onde ela esteve sem dar por nada.

          Os barcos continuam a sair. A diferença é que nada do que deixam para trás continua a pescar depois de eles irem para casa.`,
        },
        sources: [
          {
            href: 'https://doi.org/10.1016/j.marpol.2015.06.016',
            label: { en: `Ghost fishing by lost and discarded gear`, pt: `Pesca fantasma por artes perdidas e abandonadas` },
          },
        ],
      },
      {
        title: { en: `The snail who grew legs`, pt: `O caracol que ganhou pernas` },
        text: {
          en: `In this future the snail grows legs, because the cool water moved north and the snail wanted to follow. The whole house comes along, spiral and all.

          When it arrives, the others are already there, resting in the shade of a tree that was not there before. Nobody is in a hurry. They have all afternoon, and the water is exactly the right temperature.`,
          pt: `Neste futuro o caracol ganha pernas, porque a água fresca foi para norte e o caracol quis segui-la. A casa inteira vai com ele, espiral e tudo.

          Quando chega, os outros já lá estão, a descansar à sombra de uma árvore que antes não existia. Ninguém tem pressa. Têm a tarde toda, e a água está exatamente à temperatura certa.`,
        },
        sources: [
          {
            href: 'https://doi.org/10.1038/nclimate1958',
            label: { en: `Marine species shifting range as the sea warms`, pt: `Espécies marinhas a mudar de área com o aquecimento do mar` },
          },
        ],
      },
    ],
    note: {
      en: `Stories written from the children's drawings and edited with ML.`,
      pt: `Histórias escritas a partir dos desenhos das crianças e editadas com ML. Tradução automática.`,
    },
  },

  /* ══ DATA & THE ETERNAL STREAM ══ */

  'data-stream': {
    title: { en: `The eternal stream`, pt: `A transmissão eterna` },
    txt: {
      en: `The eternal stream is the part of the work that does not stop. It plays the field recordings, the performers' voices, the advertisements and the stories, and it decides what to play by listening to Esposende.

      A small system reads the town's own weather and water. The wind at ten metres, the swell, the tide, the pressure falling before a storm. None of this is a general model of the sea. The numbers are Esposende's numbers, taken from its own coast, and they are what chooses which voice surfaces next.

      That choice is deliberate. The stream runs on a handful of local readings rather than on a large platform, so it stays small enough to explain, cheap enough to keep running, and honest about where its material comes from.

      Sargaço was gleaned on this coast in season, by hand, according to what the water gave that day. The stream gathers the same way. It takes what the day gives and works with that, which makes it a ritual as much as an algorithm.`,
      pt: `A transmissão eterna é a parte do trabalho que não para. Toca as gravações de campo, as vozes das performers, os anúncios e as histórias, e decide o que tocar escutando Esposende.

      Um sistema pequeno lê o tempo e a água da própria vila. O vento a dez metros, a ondulação, a maré, a pressão a descer antes de uma tempestade. Nada disto é um modelo geral do mar. Os números são os números de Esposende, recolhidos na sua própria costa, e são eles que escolhem que voz surge a seguir.

      Esta escolha é deliberada. A transmissão funciona com um punhado de leituras locais e não com uma grande plataforma, para se manter pequena o suficiente para ser explicada, barata o suficiente para continuar a correr, e honesta sobre a proveniência do seu material.

      O sargaço era recolhido nesta costa na época própria, à mão, conforme o que a água dava nesse dia. A transmissão recolhe da mesma maneira. Fica com o que o dia lhe der e trabalha com isso, o que faz dela tanto um ritual como um algoritmo.`,
    },
    note: {
      en: `Written from the project's data documentation and edited with ML.`,
      pt: `Escrito a partir da documentação de dados do projeto e editado com ML. Tradução automática.`,
    },
  },

  'data-listens': {
    title: { en: `What the stream listens to`, pt: `O que a transmissão escuta` },
    txt: {
      en: `Fourteen readings come in continuously: air temperature, water temperature, wind speed, wind gusts, wind direction, wave height, wave period, sea level, cloud cover, humidity, visibility, atmospheric pressure, apparent temperature, and whether it is day or night.

      Four more are worked out from those. Whether the wind is onshore, since Esposende faces roughly west and anything between 200 and 340 degrees carries the surf inland. Sea energy, which folds wave height and wind speed into one measure of how hard the ocean is working. Tide phase, rising or falling, high or low. And storm proximity, read from how fast the pressure is dropping.

      Then the weather itself arrives as an event: clear, cloudy, overcast, fog, drizzle, rain, thunderstorm. On this coast that is mostly clear or cloudy, rain about a quarter of the time and more between October and February, fog on perhaps one summer morning in ten, thunder a handful of days a year, and snow essentially never.`,
      pt: `Catorze leituras chegam de forma contínua: temperatura do ar, temperatura da água, velocidade do vento, rajadas, direção do vento, altura da ondulação, período da ondulação, nível do mar, nebulosidade, humidade, visibilidade, pressão atmosférica, temperatura aparente, e se é dia ou noite.

      Outras quatro são calculadas a partir destas. Se o vento sopra de mar para terra, já que Esposende está virada sensivelmente a oeste e qualquer direção entre 200 e 340 graus traz o som das ondas para dentro. A energia do mar, que junta a altura da ondulação e a velocidade do vento numa única medida do esforço do oceano. A fase da maré, a encher ou a vazar, cheia ou seca. E a proximidade de tempestade, lida na rapidez com que a pressão desce.

      Depois o tempo chega como acontecimento: céu limpo, nublado, encoberto, nevoeiro, chuvisco, chuva, trovoada. Nesta costa é sobretudo limpo ou nublado, chuva cerca de um quarto do tempo e mais entre outubro e fevereiro, nevoeiro talvez numa manhã de verão em cada dez, trovoada alguns dias por ano, e neve praticamente nunca.`,
    },
    note: {
      en: `Written from the project's data documentation and edited with ML.`,
      pt: `Escrito a partir da documentação de dados do projeto e editado com ML. Tradução automática.`,
    },
  },

  'data-into-sound': {
    title: { en: `How the weather chooses a voice`, pt: `Como o tempo escolhe uma voz` },
    txt: {
      en: `How do you upload your stories, and how does the eternal stream select the appropriate clip?

      The stream's selection is based on the weather conditions, which are tagged with categories like sunny, windy, cloudy, or foggy. Live weather readings from Esposende determine which tags are accurate at any moment, and the stream plays clips that match these conditions.

      When you upload your stories and include your voice recording reflecting its content, the eternal stream will choose which clip to play based on Esposende's current weather data.`,
      pt: `Como carregas as tuas histórias, e como é que a transmissão eterna escolhe o excerto certo?

      A seleção da transmissão baseia-se nas condições meteorológicas, que estão etiquetadas com categorias como sol, vento, nuvens ou nevoeiro. As leituras meteorológicas ao vivo de Esposende determinam que etiquetas são verdadeiras a cada momento, e a transmissão toca os excertos que correspondem a essas condições.

      Quando carregas as tuas histórias e incluis a tua gravação de voz a refletir o seu conteúdo, a transmissão eterna escolherá que excerto tocar com base nos dados meteorológicos atuais de Esposende.`,
    },
  },

  'data-to-exhibition': {
    goTo: 'exhibition',
    label: { en: `Where the stream was heard →`, pt: `Onde a transmissão foi ouvida →` },
  },

  'data-to-toolkit': {
    goTo: 'toolkit',
    label: { en: `Hear it through the DIY shellphone →`, pt: `Ouve-a através do shellphone caseiro →` },
  },

  'data-live-stream': {
    link: 'stream.html',
    label: { en: `Listen to the live stream →`, pt: `Ouve a transmissão ao vivo →` },
  },

  'data-contribute': {
    link: 'memories.html',
    label: { en: `Send your stories today! →`, pt: `Envia as tuas histórias hoje! →` },
  },

  /* ══ TOOLKIT ══ */

  'toolkit-intro': {
    title: { en: `The DIY shellphone toolkit`, pt: `O kit do shellphone caseiro` },
    txt: {
      en: `The DIY shellphone toolkit lets you listen to the sound of the eternal stream wherever you go!

      You can get your own shell. If you cannot find any, maybe check our bioplastic recipe and build a shell on your own!

      Learn about the DIY technologies, how to access an online stream, and the local stories and ecological belongings of Esposende. The 3D print files for the shell will be released with the toolkit.

      Play a game, record your voice, join the eternal stream, listen anywhere, and be part of a community that listens when NATURE CALLS.

      More information coming soon!`,
      pt: `O kit do shellphone caseiro deixa-te ouvir o som da transmissão eterna onde quer que vás!

      Podes arranjar a tua própria concha. Se não encontrares nenhuma, vê a nossa receita de bioplástico e constrói uma concha tu mesma!

      Aprende sobre as tecnologias caseiras, como aceder a uma transmissão online, e sobre as histórias locais e os pertences ecológicos de Esposende. Os ficheiros de impressão 3D da concha serão publicados com o kit.

      Joga um jogo, grava a tua voz, junta-te à transmissão eterna, escuta em qualquer lugar, e faz parte de uma comunidade que escuta quando a NATUREZA CHAMA.

      Mais informações em breve!`,
    },
  },

  'toolkit-current': {
    title: { en: `The current build`, pt: `A construção atual` },
    img: 'la/toolkit/current-build.jpg',
    caption: { en: `The shellphone as it stands`, pt: `O shellphone tal como está` },
    alt: { en: `A conch with a small board and speaker wired inside it, connected by a USB cable`,
           pt: `Uma concha com uma placa pequena e um altifalante ligados lá dentro, com um cabo USB` },
    full: {
      en: `This is the current state of the toolkit. What is missing is a small plexiglass case for the board.

      We will share the laser cut files so people can make their own case, and the name of every component, so the whole thing can be built at home.`,
      pt: `Este é o estado atual do kit. O que falta é uma pequena caixa de acrílico para a placa.

      Vamos partilhar os ficheiros de corte a laser para que cada pessoa possa fazer a sua própria caixa, e o nome de cada componente, para que se possa construir tudo em casa.`,
    },
  },

  'toolkit-prototype': {
    title: { en: `The prototype`, pt: `O protótipo` },
    full: {
      en: `The shellphone is a small board, a speaker and a shell. A found shell works, and so does a printed one, which is why the 3D print files will be released alongside the toolkit for anyone without a shell to hand.`,
      pt: `O shellphone é uma placa pequena, um altifalante e uma concha. Serve uma concha encontrada, e serve uma concha impressa, e por isso os ficheiros de impressão 3D serão publicados junto com o kit para quem não tiver uma concha à mão.`,
    },
    gallery: [
      {
        src: 'la/toolkit/prototype-01.jpg',
        alt: { en: `A 3D printed shell held in one hand with a small speaker set inside it`, pt: `Uma concha impressa em 3D segurada numa mão com um pequeno altifalante lá dentro` },
        caption: { en: `The 3D printed shell`, pt: `A concha impressa em 3D` },
      },
      {
        src: 'la/toolkit/prototype-02.jpg',
        alt: { en: `Two shells wired to a circuit board beside a screen playing water`, pt: `Duas conchas ligadas a uma placa ao lado de um ecrã com água` },
        caption: { en: `Testing the prototype`, pt: `A testar o protótipo` },
      },
      {
        src: 'la/toolkit/prototype-03.jpg',
        alt: { en: `A printed shell and a found shell wired to the board with clip leads`, pt: `Uma concha impressa e uma concha encontrada ligadas à placa com pinças` },
        caption: { en: `Testing the prototype`, pt: `A testar o protótipo` },
      },
      {
        src: 'la/toolkit/prototype-04.jpg',
        alt: { en: `A sketch of the glass sculpture holding the shell, speaker and board`, pt: `Um esboço da escultura de vidro a segurar a concha, o altifalante e a placa` },
        caption: { en: `The sculpture as a holder`, pt: `A escultura como suporte` },
      },
    ],
  },

  'toolkit-workshop': {
    title: { en: `Building them together`, pt: `A construí-los em conjunto` },
    gallery: [
      {
        src: 'la/toolkit/workshop-01.jpg',
        alt: { en: `A shell on the worktable among glue, paper and tape`, pt: `Uma concha na mesa de trabalho entre cola, papel e fita` },
        caption: { en: `At the toolkit workshop`, pt: `Na oficina do kit` },
      },
      {
        src: 'la/toolkit/workshop-02.jpg',
        alt: { en: `Shells and a speaker cone laid out with a ruler and folded paper`, pt: `Conchas e um altifalante dispostos com uma régua e papel dobrado` },
        caption: { en: `At the toolkit workshop`, pt: `Na oficina do kit` },
      },
      {
        src: 'la/toolkit/workshop-03.jpg',
        alt: { en: `Shells and a stone with clip leads across the table`, pt: `Conchas e uma pedra com pinças sobre a mesa` },
        caption: { en: `Wiring the shells`, pt: `A ligar as conchas` },
      },
      {
        src: 'la/toolkit/workshop-04.jpg',
        alt: { en: `Hands clipping a lead onto a small board, shells and leads around`, pt: `Mãos a prender um fio a uma placa pequena, conchas e fios à volta` },
        caption: { en: `Wiring the shells`, pt: `A ligar as conchas` },
      },
    ],
  },

  'toolkit-to-future': {
    goTo: 'future',
    label: { en: `The bioplastic recipe →`, pt: `A receita de bioplástico →` },
  },

  'toolkit-to-data': {
    goTo: 'data',
    label: { en: `How the stream chooses →`, pt: `Como a transmissão escolhe →` },
  },

  'toolkit-live-stream': {
    link: 'stream.html',
    label: { en: `Listen to the live stream →`, pt: `Ouve a transmissão ao vivo →` },
  },

  /* ══ ARTWORK & EXHIBITION ══ */

  'exhibition-wall-text': {
    txt: {
      en: `she tells,sea shells
      Mixed media installation
      Glass, organic material, multi-channel audio, video

      The installation emerges from the familiar gesture of holding a shell to the ear, listening for the ocean, a gesture that becomes a portal to the hypersea, a speculative ecology that extends beyond the ocean itself. Visitors are invited to reconsider their entanglement with water, to recall the partial liquidity of their own bodies, and to sense the connective tissue that water forms across ecosystems. The work interrogates the ways in which nature is mediated, observed, and ultimately commodified through technological apparatuses and late-capitalist structures, translating the organic into objects of acquisition. Within this speculative fiction, the 'she tells - sea shells' entity operates as both organisation and archive, a structure with its own logics of revelation and secrets.

      The installation invites visitors within a constructed showroom, a threshold space for the speculative launch of she tells artefacts. At its core, Mother Memory Atmosphere 01, a blown-glass sculpture, is configured to listen and absorb; it transmits both ambient and mimetic sounds. With field recordings and human imitation interwoven, producing a soundscape that oscillates between the natural and the performed. A video component accompanies the ambient sound and operates as a visual placeholder, amplifying the gestures of mimicry. Memory Atmosphere 1.5, a companion sculpture, is connected to the two-channel audio system: one channel enacts the She Tells hotline, a recursive waiting line that gestures toward connection yet resolves into absence; the other channel transmits narratives, sourced from Esposende's entanglements with Sargassum and the speculative hypersea.

      A line of imaginary products is articulated within the installation: shell cream, acid tabs, sexy dunes, deluxe o₂, each conceived for non-human recipients and other water bodies. These artifacts operate as both satirical gestures and interventions, surfacing the paradoxes and urgencies embedded in contemporary environmental crises traced through Sargassum and the Esposende region, rising temperatures, proliferating waste, and ocean acidification.

      Participants are invited to upload their own water memories into the distributed 'eternal stream', a digital archive that circulates these fragments. In the next phases of the work, these memories will be audible through open-source DIY shell phones and through an online audio stream, extending the work's infrastructure beyond the installation and into the distributed networks of its contributors.

      Take one of the flyers or postcards, upload and share your memories of water; we don't want to be the only ones talking, honey!
      – Stay salty.`,
      pt: `she tells,sea shells
      Instalação de técnica mista
      Vidro, matéria orgânica, áudio multicanal, vídeo

      A instalação nasce do gesto familiar de encostar uma concha ao ouvido, à escuta do oceano, um gesto que se torna um portal para o hypersea, uma ecologia especulativa que se estende para lá do próprio oceano. Quem visita é convidado a reconsiderar a sua relação com a água, a recordar a liquidez parcial do seu próprio corpo e a sentir o tecido conjuntivo que a água forma entre os ecossistemas. A obra interroga as formas como a natureza é mediada, observada e, por fim, transformada em mercadoria através de aparelhos tecnológicos e de estruturas do capitalismo tardio, traduzindo o orgânico em objetos de aquisição. Dentro desta ficção especulativa, a entidade «she tells - sea shells» funciona ao mesmo tempo como organização e como arquivo, uma estrutura com as suas próprias lógicas de revelação e de segredo.

      A instalação acolhe quem visita dentro de um showroom construído, um espaço de limiar para o lançamento especulativo dos artefactos da she tells. No seu centro, Mother Memory Atmosphere 01, uma escultura de vidro soprado, está configurada para escutar e absorver; transmite sons ambientes e miméticos. Com gravações de campo e imitação humana entrelaçadas, produz uma paisagem sonora que oscila entre o natural e o representado. Uma componente de vídeo acompanha o som ambiente e funciona como marcador visual, amplificando os gestos de imitação. Memory Atmosphere 1.5, uma escultura companheira, está ligada ao sistema de áudio de dois canais: um canal encena a linha de apoio da She Tells, uma fila de espera recursiva que aponta para a ligação mas se resolve em ausência; o outro transmite narrativas, vindas das relações de Esposende com o sargaço e com o hypersea especulativo.

      Uma linha de produtos imaginários articula-se dentro da instalação: shell cream, acid tabs, sexy dunes, deluxe o₂, cada um pensado para destinatários não humanos e outros corpos de água. Estes artefactos funcionam como gestos satíricos e como intervenções, trazendo à superfície os paradoxos e as urgências das crises ambientais contemporâneas, seguidas através do sargaço e da região de Esposende, o aumento das temperaturas, a multiplicação dos resíduos e a acidificação dos oceanos.

      Quem participa é convidado a carregar as suas próprias memórias de água na «transmissão eterna» distribuída, um arquivo digital que faz circular estes fragmentos. Nas próximas fases do trabalho, estas memórias poderão ser ouvidas através de shell phones caseiros de código aberto e de uma transmissão de áudio online, estendendo a infraestrutura da obra para lá da instalação, até às redes distribuídas de quem contribui.

      Pega num dos folhetos ou postais, carrega e partilha as tuas memórias de água; não queremos ser as únicas a falar, querida!
      – Stay salty.`,
    },
  },

  'exhibition-process': {
    title: { en: `Process`, pt: `Processo` },
    txt: {
      en: `Initial showing of the piece in prototype stage at the Sargassum Museum.

      We had two glass sculptures, artistic versions of the DIY shellphone in its prototype state, that held three audio streams. Both play the audio that is also accessible via an online stream through the DIY shellphone.. The work invites visitors to engage with the artwork while prompting them to collect /stories for the device/stream.

      The sculpture with the organic shell holds audio from field recordings overlaid with performers' voices, creating the ambience and world-building of the She Tells entity.

      The second sculpture holds two audio streams: one with stories of sargassum in Esposende, reflections on its future, and Hypersea, a core concept in the workshops for memory retrieval; the other with ads for speculative products based on Esposende's local ecological issues(4 products sargasuum related issues & 1 on dunes), collected from discussions during the residency with local scientists and from the research process. These also appear in the flyers, prompting visitors to submit memories (also including a transcript of audio) while the performer-recorded sections and audio pieces created for the project play on headphones, with cabling coming from the sculpture. Alongside them, we have postcards where people can draw their memories, with a QR code to upload to the website and add their voice to the audio stream.

      Both audio streams invite visitors to submit their memories/stories to the stream, so they can become part of the work and be heard through the DIY shellphones.

      For the prototype, we chose to play a prerecorded stream through headphones rather than have visitors lift the shell to their ear. This kept the work dependable and light for the host museum across its stay: it ran without needing a constant internet connection, on-site supervision, or ongoing upkeep of the custom chip-based playback, and seated listening through headphones suited the space, letting the piece hold its atmosphere reliably for the length of the exhibition.

      We included weather conditions in the prerecording, which we also use for the live version, such as tides, wind, and other ecological points we are taking from Esposende.

      The final piece will include the electronics for the shell to be held to the ear, with the glass sculpture as its holder, holding the ocean inside, the Hypersea. We already have a 3D printed shell to pair with it.

      The stream carries playful ads based on Esposende's related ecological situation for non-human body of water actors and their futures, Esposende's water stories, scientific reflections and speculations on the future, the children's stories, and speculations for Esposende's future, alongside the water's feelings, the tides, winds, weather, and other ecological data we are collecting from Esposende.`,
      pt: `Primeira apresentação da peça em estado de protótipo no Museu do Sargaço.

      Tínhamos duas esculturas de vidro, versões artísticas do shellphone caseiro no seu estado de protótipo, que continham três fluxos de áudio. Ambas reproduzem o áudio que também está acessível através de uma transmissão online pelo shellphone caseiro. A obra convida quem visita a envolver-se com o trabalho, ao mesmo tempo que a incentiva a recolher histórias para o dispositivo e para a transmissão.

      A escultura com a concha orgânica contém áudio de gravações de campo sobrepostas às vozes das performers, criando o ambiente e a construção do mundo da entidade She Tells.

      A segunda escultura contém dois fluxos de áudio: um com histórias do sargaço em Esposende, reflexões sobre o seu futuro e o Hypersea, um conceito central nas oficinas para a recuperação de memórias; o outro com anúncios de produtos especulativos baseados nos problemas ecológicos locais de Esposende (quatro produtos ligados ao sargaço e um às dunas), recolhidos em conversas durante a residência com cientistas locais e ao longo do processo de investigação. Estes aparecem também nos folhetos, incentivando quem visita a partilhar memórias (incluindo uma transcrição do áudio), enquanto as secções gravadas pelas performers e as peças sonoras criadas para o projeto tocam em auscultadores, com os cabos a sair da escultura. Ao lado, temos postais onde as pessoas podem desenhar as suas memórias, com um código QR para as carregar no site e juntar a sua voz à transmissão.

      Ambos os fluxos de áudio convidam quem visita a enviar as suas memórias e histórias para a transmissão, para que possam passar a fazer parte da obra e ser ouvidas através dos shellphones caseiros.

      Para o protótipo, escolhemos reproduzir uma gravação em auscultadores em vez de pedir a quem visita que levasse a concha ao ouvido. Isto manteve a obra fiável e leve para o museu que a acolheu durante toda a sua estadia: funcionou sem precisar de ligação constante à internet, de supervisão no local ou de manutenção contínua da reprodução feita no chip que construímos, e a escuta sentada com auscultadores adequava-se ao espaço, deixando a peça manter a sua atmosfera de forma fiável durante toda a exposição.

      Incluímos as condições meteorológicas na gravação, que usamos também na versão ao vivo, como as marés, o vento e outros dados ecológicos que estamos a recolher em Esposende.

      A peça final incluirá a eletrónica para que a concha possa ser levada ao ouvido, com a escultura de vidro como suporte, a guardar o oceano lá dentro, o Hypersea. Já temos uma concha impressa em 3D para juntar a ela.

      A transmissão leva anúncios divertidos baseados na situação ecológica de Esposende para corpos de água não humanos e os seus futuros, histórias de água de Esposende, reflexões e especulações científicas sobre o futuro, as histórias das crianças e especulações para o futuro de Esposende, a par dos sentimentos da água, das marés, dos ventos, do tempo e de outros dados ecológicos que estamos a recolher em Esposende.`,
    },
  },

  'exhibition-to-data': {
    goTo: 'data',
    label: { en: `The data we are collecting →`, pt: `Os dados que estamos a recolher →` },
  },

  'exhibition-to-future': {
    goTo: 'future',
    label: { en: `The speculative products →`, pt: `Os produtos especulativos →` },
  },

  'exhibition-opening': {
    title: { en: `The opening`, pt: `A inauguração` },
    gallery: [
      {
        src: 'la/exhibition/opening-01.jpg',
        alt: { en: `The exhibition room, vitrines along the windows`, pt: `A sala da exposição, vitrinas junto às janelas` },
      },
      {
        src: 'la/exhibition/opening-02.jpg',
        alt: { en: `Visitors gathered around the vitrines`, pt: `Visitantes reunidos à volta das vitrinas` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/opening-03.jpg',
        alt: { en: `Two visitors seated on the bench with headphones on`, pt: `Dois visitantes sentados no banco com auscultadores` },
        caption: { en: `Listening on headphones`, pt: `À escuta com auscultadores` },
      },
      {
        src: 'la/exhibition/opening-04.jpg',
        alt: { en: `A visitor in front of the wall display`, pt: `Um visitante em frente ao painel na parede` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/opening-05.jpg',
        alt: { en: `The glass sculpture with visitors behind it`, pt: `A escultura de vidro com visitantes por detrás` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/opening-06.jpg',
        alt: { en: `The group presenting at the opening`, pt: `O grupo a apresentar na inauguração` },
        caption: { en: `The opening`, pt: `A inauguração` },
      },
      {
        src: 'la/exhibition/opening-07.jpg',
        alt: { en: `Sargaço drying on the rock`, pt: `Sargaço a secar na pedra` },
      },
      {
        src: 'la/exhibition/opening-08.jpg',
        alt: { en: `Two visitors listening on the bench`, pt: `Dois visitantes à escuta no banco` },
        caption: { en: `Listening on headphones`, pt: `À escuta com auscultadores` },
      },
      {
        src: 'la/exhibition/opening-09.jpg',
        alt: { en: `Visitors looking out through the window wall`, pt: `Visitantes a olhar através da parede de vidro` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/opening-10.jpg',
        alt: { en: `A group of visitors in the room`, pt: `Um grupo de visitantes na sala` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/opening-11.jpg',
        alt: { en: `The room with the postcards along the wall`, pt: `A sala com os postais ao longo da parede` },
        caption: { en: `Postcards at the museum`, pt: `Postais no museu` },
      },
    ],
  },

  'exhibition-details': {
    title: { en: `Artwork installation details`, pt: `Detalhes da instalação` },
    gallery: [
      {
        src: 'la/exhibition/details-01.jpg',
        alt: { en: `A glass sculpture in its vitrine at the Sargassum Museum`, pt: `Uma escultura de vidro na sua vitrina no Museu do Sargaço` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/details-02.jpg',
        alt: { en: `The glass sculpture on its mirrored plinth, a rock below`, pt: `A escultura de vidro no seu plinto espelhado, uma pedra por baixo` },
      },
      {
        src: 'la/exhibition/details-03.jpg',
        alt: { en: `The blue glass form, close`, pt: `A forma de vidro azul, de perto` },
      },
      {
        src: 'la/exhibition/details-04.jpg',
        alt: { en: `The glass form with the dunes beyond the window`, pt: `A forma de vidro com as dunas para lá da janela` },
      },
      {
        src: 'la/exhibition/details-05.jpg',
        alt: { en: `Two glass forms resting one on the other`, pt: `Duas formas de vidro apoiadas uma na outra` },
      },
      {
        src: 'la/exhibition/details-06.jpg',
        alt: { en: `A rock with white cabling wound around it`, pt: `Uma pedra com cabos brancos enrolados` },
      },
      {
        src: 'la/exhibition/details-07.jpg',
        alt: { en: `The vitrine holding a built dune of sand`, pt: `A vitrina com uma duna de areia construída` },
      },
      {
        src: 'la/exhibition/details-08.jpg',
        alt: { en: `The built dune with its plants`, pt: `A duna construída com as suas plantas` },
      },
      {
        src: 'la/exhibition/details-09.jpg',
        alt: { en: `The Sexy Dunes flyer lying in the sand of the vitrine`, pt: `O folheto do Sexy Dunes na areia da vitrina` },
      },
      {
        src: 'la/exhibition/details-10.jpg',
        alt: { en: `The built dune with a pink flower`, pt: `A duna construída com uma flor cor de rosa` },
      },
      {
        src: 'la/exhibition/details-11.jpg',
        alt: { en: `The glass form above the vitrine, a rock inside it`, pt: `A forma de vidro sobre a vitrina, uma pedra lá dentro` },
      },
      {
        src: 'la/exhibition/details-12.jpg',
        alt: { en: `The amber glass form, close`, pt: `A forma de vidro âmbar, de perto` },
      },
      {
        src: 'la/exhibition/details-13.jpg',
        alt: { en: `The amber glass form against the light`, pt: `A forma de vidro âmbar contra a luz` },
      },
      {
        src: 'la/exhibition/details-14.jpg',
        alt: { en: `A rock carrying yellow sargaço`, pt: `Uma pedra com sargaço amarelo` },
      },
      {
        src: 'la/exhibition/details-15.jpg',
        alt: { en: `The vitrine with the glass sphere above and the rock below`, pt: `A vitrina com a esfera de vidro em cima e a pedra em baixo` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
      {
        src: 'la/exhibition/details-16.jpg',
        alt: { en: `The glass sphere with the speaker above it`, pt: `A esfera de vidro com o altifalante por cima` },
        caption: { en: `At the Sargassum Museum`, pt: `No Museu do Sargaço` },
      },
    ],
  },

  'exhibition-shellphone': {
    title: { en: `The shellphone`, pt: `O shellphone` },
    gallery: [
      {
        src: 'la/exhibition/shellphone.mp4',
        alt: { en: `The sculpture filmed on the shore`, pt: `A escultura filmada na costa` },
        caption: { en: `The sculpture on the shore`, pt: `A escultura na costa` },
      },
      {
        src: 'la/exhibition/shellphone-01.jpg',
        alt: { en: `The glass sculpture on a mirror among the rocks`, pt: `A escultura de vidro sobre um espelho entre as rochas` },
        caption: { en: `The sculpture on the shore`, pt: `A escultura na costa` },
      },
      {
        src: 'la/exhibition/shellphone-02.jpg',
        alt: { en: `A conch resting on the glass sculpture, the sea behind`, pt: `Uma concha pousada na escultura de vidro, o mar ao fundo` },
      },
      {
        src: 'la/exhibition/shellphone-03.jpg',
        alt: { en: `The conch on the pale green glass, close`, pt: `A concha sobre o vidro verde claro, de perto` },
      },
      {
        src: 'la/exhibition/shellphone-04.jpg',
        alt: { en: `The sculpture and its shell on the rocks`, pt: `A escultura e a sua concha nas rochas` },
        caption: { en: `The sculpture on the shore`, pt: `A escultura na costa` },
      },
      {
        src: 'la/exhibition/shellphone-05.jpg',
        alt: { en: `A conch held inside the clear glass`, pt: `Uma concha dentro do vidro transparente` },
      },
      {
        src: 'la/exhibition/shellphone-06.jpg',
        alt: { en: `The clear sculpture on a mirror on the sand`, pt: `A escultura transparente sobre um espelho na areia` },
        caption: { en: `On the beach at Esposende`, pt: `Na praia de Esposende` },
      },
      {
        src: 'la/exhibition/shellphone-07.jpg',
        alt: { en: `Two shells held above the mirror`, pt: `Duas conchas seguradas sobre o espelho` },
      },
      {
        src: 'la/exhibition/shellphone-08.jpg',
        alt: { en: `A hand reaching to the sculpture on the sand`, pt: `Uma mão a chegar à escultura na areia` },
        caption: { en: `On the beach at Esposende`, pt: `Na praia de Esposende` },
      },
      {
        src: 'la/exhibition/shellphone-09.jpg',
        alt: { en: `The shell inside the glass, the shoreline behind`, pt: `A concha dentro do vidro, a linha de costa ao fundo` },
      },
      {
        src: 'la/exhibition/shellphone-10.jpg',
        alt: { en: `The shell inside the glass, close`, pt: `A concha dentro do vidro, de perto` },
      },
      {
        src: 'la/exhibition/shellphone-11.jpg',
        alt: { en: `Hands lifting the green glass sculpture`, pt: `Mãos a levantar a escultura de vidro verde` },
      },
      {
        src: 'la/exhibition/shellphone-12.jpg',
        alt: { en: `The shell seen through the curve of the glass`, pt: `A concha vista através da curva do vidro` },
      },
      {
        src: 'la/exhibition/shellphone-13.jpg',
        alt: { en: `The sculpture set among sargaço covered rock`, pt: `A escultura entre rochas cobertas de sargaço` },
        caption: { en: `On the sargaço rocks`, pt: `Nas rochas de sargaço` },
      },
    ],
  },

  'exhibition-listening': {
    img: 'la/exhibition/listening.jpg',
    caption: { en: `Listening on the rocks at Esposende`, pt: `À escuta nas rochas de Esposende` },
    alt: { en: `Standing on the rocks with a shell held to one ear, looking out to sea`,
           pt: `De pé nas rochas com uma concha encostada ao ouvido, a olhar o mar` },
  },

};
