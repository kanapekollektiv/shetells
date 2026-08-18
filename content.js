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
    alt: `Esposende dunes`,
  },

  'hypersea-glassblowing': {
    img: 'la/hypersea/IMG_8729.jpg',
    alt: `Glass blowing workshop`,
  },

  'hypersea-glass-vessel': {
    img: 'la/hypersea/IMG_8668.jpg',
    alt: `Glass vessel`,
  },

  'hypersea-glass-sphere': {
    img: 'la/hypersea/IMG_8677.jpg',
    alt: `Glass sphere`,
  },

  'hypersea-coast': {
    img: 'la/hypersea/IMG_7465.jpg',
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
    alt: {
      en: `Sargassum fronds draped over rock at low tide`,
      pt: `Algas de sargaço sobre a rocha na maré baixa`,
    },
  },

  'sargassum-bladderwrack': {
    img: 'la/sargassum/IMG_5705.jpg',
    alt: {
      en: `Bladderwrack covering the rocks along the Esposende shore`,
      pt: `Bodelha a cobrir as rochas na costa de Esposende`,
    },
  },

  'sargassum-museum-sculptures': {
    img: 'la/sargassum/museum-179232.jpg',
    alt: {
      en: `Sargaceiro sculptures outside the Sargasso Museum, Esposende`,
      pt: `Esculturas de sargaceiros à entrada do Museu do Sargaço, Esposende`,
    },
    credit: { en: `Sargasso Museum, Esposende`, pt: `Museu do Sargaço, Esposende` },
  },

  'sargassum-museum-display': {
    img: 'la/sargassum/museum-IMG_5775.jpg',
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
    alt: {
      en: `Postcards drawn at the launch workshops, pinned to the wall`,
      pt: `Postais desenhados nas oficinas de lançamento, afixados na parede`,
    },
    note: `ml`,
  },

  'local-fishing-lures': {
    img: 'la/local/fishing-lures.jpg',
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
    alt: {
      en: `Sea lampreys in a tank, mouths pressed against the glass`,
      pt: `Lampreias num aquário, com as bocas contra o vidro`,
    },
    note: `ml`,
  },

  'local-workshop-at-rio-neiva': {
    title: { en: `Workshop at Rio Neiva`, pt: `Oficina na Rio Neiva` },
    img: 'la/local/rio-neiva.jpg',
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


  /* ══ WORKSHOPS ══ */

  'workshop-workshop-archive': {
    title: `Workshop Archive`,
  },

  'workshop-making-session': {
    title: `Making Session`,
  },


  /* ══ DRAWINGS ══ */

  'drawings-drawn-futures': {
    title: `Drawn Futures`,
  },


  /* ══ TOOLKIT ══ */

  'toolkit-methods-measures': {
    title: `Methods & Measures`,
  },


  /* ══ EXHIBITION ══ */

  'exhibition-documentation': {
    title: `Documentation`,
  },
};
