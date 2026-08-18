/* ── She Tells — Language switcher ─────────────────────────────────────
   Usage: add data-i18n="key" to any element whose textContent should swap.
   For HTML content use data-i18n-html="key".
   Call setLang('en') or setLang('pt') from anywhere.
──────────────────────────────────────────────────────────────────────── */

const TRANSLATIONS = {
  en: {
    /* ── Shared nav ── */
    'nav.memories':         'Send your memories today!',

    /* ── living archive map ── */
    'archive.contribute':   'contribute to the living archive',
    'archive.hint':         'drag to explore<br>scroll to zoom<br>press h to center',
    'archive.readmore':     '(click to read more)',
    'archive.read':         'read →',
    'archive.back':         'all clusters',
    'archive.sources':      'sources',
    'archive.placeholder':  'content being woven',
    'nav.stream':           'tune in to the stream',

    /* ── stream.html player ── */
    'player.label':         'stream',
    'player.vol':           'vol',
    'player.offline':       'offline',
    'player.connecting':    'connecting…',
    'player.live':          'live',
    'player.buffering':     'buffering…',
    'player.error':         'error',

    /* ── stream.html bubbles ── */
    'player.bubbles':       ['stream', 'stream', 'shhh', '~', 'stream'],

    /* ── index.html tagline phrases ── */
    'tagline.phrases': [
      "I have… lots to tell you.., honey.",
      "While you are waiting, we have lots to tell.",
      "Yeah, I have things to tell.",
      "We have lots to tell.",
      "We have things to tell, honey.",
      "We are telling you so you better listen, honey.",
      "Baby! We have things to tell.",
      "Do tell, tell we shell?",
      "stay salty"
    ],

    /* ── Spiral (Sexy Dunes) ── */
    'spiral.title':         'sexy dunes',
    'spiral.body':          'Research shows that dunes which look sexy have a 25% less chance of getting littered.',
    'spiral.bold':          'We got you covered.',
    'spiral.disclaimer':    '<strong>Disclaimer:</strong> Terms and conditions apply. The numbers stated are all predictions based on data from the She Tells Research Centre. Check the terms and conditions on our website.',

    /* ── Shell Cream ── */
    'shell.corner':         'Outlast the acid era...',
    'shell.title':          'Shell Cream',
    'shell.body':           'The ocean doesn\'t care about your insides',
    'shell.bold':           'But we do.',
    'shell.cta':            'Send your memories today!',
    'shell.disclaimer':     '<strong>Disclaimer:</strong> She Tells Shell Cream is a cosmetic supplement and not a solution to ocean acidification. Individual carbonate saturation levels may vary. She Tells Corp assumes no liability for planetary pH.',

    /* ── Deluxe O₂ ── */
    'o2.corner':            'You will oooh too...',
    'o2.title':             'deluxe o₂',
    'o2.body':              'Are you bored of your old, landy oxygen, coming from those ugly green trees?',
    'o2.bold':              'Breathe better, darling!',
    'o2.disclaimer':        '<strong>Disclaimer:</strong> Please only consume our premium oxygen if evolution has equipped you with the proper organs to process it.',

    /* ── Sargassum City ── */
    'sargassum.corner':     '@ The Big Sea-ty Life',
    'sargassum.title':      'sargassum city',
    'sargassum.body':       'Take me down to Sargassum City. Where the grass is green and the fish are pretty.',
    'sargassum.bold':       'Get your prime location now.',
    'sargassum.disclaimer': '<strong>Disclaimer:</strong> At Sargassum City, we do not take responsibility for climate change, carbon emissions, or the plastic in your body. If any of these symptoms occur in your area, please ask your doctor or pharmacist whether this is right for you.',

    /* ── Acid Tabs ── */
    'acid.corner':          'DISSOLVE WITH DIGNITY.',
    'acid.title':           'acid tabs',
    'acid.body':            'Keep your ACID UNDER control. Now in Dimethyl SULFIDE Flavour!',
    'acid.bold':            'The ocean will never leave you now.',
    'acid.disclaimer':      '<strong>Disclaimer:</strong> She Tells Acid Tabs are a food supplement and not a substitute for medical advice, ocean governance, or carbonate chemistry. Results may vary depending on your personal pH levels and the current aragonite saturation of your local waters.',

    /* ── Info overlay ── */
    'info.body':            '<p>Welcome to Sea Shells, She Tells, we invite you to listen, remember, and participate. Here, we ask: how are you shaped by water? What stories does water hold for you? Where do our memories go to sleep on the eternal stream of the invisible cloud of tech?<br><br>We crave your memories, add yours to our <a href="memories.html" style="color:inherit;">eternal stream!</a> This ever-growing archive is at the heart of Sea Shells, She Tells: an ongoing artwork where your water stories join those of others, forming a collective reservoir. Maybe one day we\'ll auction it to the highest bidder. Just kidding... or are we? Open to ideas!<br><br>As you explore, immerse yourself in our speculative products, which we are already selling: shell cream, acid tabs, sexy dunes, deluxe o&#x2082;, and the shell phone.<br><br>Until your story becomes part of ours, the eternal stream is filled with what we have to say, but we would hate to be the only ones talking, so share your memories! Soon, you\'ll also be able to access the eternal stream via our next fabulous product: the DIY shell phone, a playful device that lets you connect to it from anywhere.<br><br>And we also have a new hot drop; for land dwellers, don\'t miss our deluxe Hypersea Atmospheres: custom glass-blown altars designed to hold your memories in a special place at home. <a href="https://www.instagram.com/p/DZxi-N6DWOJ/?img_index=1" target="_blank" rel="noopener" style="color:inherit;">Check them out here!</a><br><br>The project is realised within the framework of the <a href="https://starts.eu/what-we-do/residences/startsaquamotion/" target="_blank" rel="noopener" style="color:inherit;">S+T+ARTS Aqua Motion</a> artistic residency program, an initiative co-funded by the European Commission and hosted by <a href="https://rioneiva.com/" target="_blank" rel="noopener" style="color:inherit;">Rio Neiva</a>, Esposende, Portugal.</p>',

    /* ── Shared CTA wave buttons ── */
    'cta.pill':             'Send your memories today!',

    /* ── memories.html ── */
    'mem.q1html':  '<strong>Remembering is about time.</strong><br>We know that this is the internet, and it\'s supposed to be quick and you are probably in a hurry, but how about taking a deep breath and slowing down a little? We want you to give space for your memories.',
    'mem.q2':      'Did you ever think that you carry the ocean with you?\n\n55 to 65% of you is water, the same water that has been circling this planet long before you arrived.\n\nSome tales of hypersea say that when life left the ocean for the land, it didn\'t leave the water behind. It just changed containers.\n\nHow close do you feel to water in your daily life?',
    'mem.q3.dislike': 'Fair enough, honey.\n\nBut 55 to 65% of you is water whether you like it or not. The same water keeps circling through bodies, clouds, and seas. Our memories already share a current.\n\nWe are building an archive. A stream of water memories flows through the invisible cloud. Can you think of a memory you would like to throw into our eternal stream?',
    'mem.q3.neutral': 'Neutral. Like still water before the tide turns.\n\nIf we are mostly water and the same water keeps circling through bodies, clouds, and seas, our memories already share a current.\n\nWe are building an archive. A stream of water memories flows through the invisible cloud. Can you think of a memory you would like to throw into our eternal stream?',
    'mem.q3.love':    'We thought you might say that.\n\nIf we are mostly water and the same water keeps circling through bodies, clouds, and seas, then our memories already share a current.\n\nWe are building an archive. A stream of water memories flows through the invisible cloud. Can you think of a memory you would like to throw into our eternal stream?',
    'mem.q3.water':   'Then you already know.\n\nThe same water keeps circling through bodies, clouds, and seas. Our memories share a current long before we name them.\n\nWe are building an archive. A stream of water memories flows through the invisible cloud. Can you think of a memory you would like to throw into our eternal stream?',
    'mem.q4html':  'Wonderful!<br>We can\'t wait to hear your voice.<br><br>Just before you share:<br><br><strong>Your voice will be public.</strong> Only share what you\'re comfortable with.<br><br>We won\'t train any AI on it, or use it for anything beyond this artwork.<br><br>Changed your mind? Email us within two weeks:<br><span style="font-family:\'Celescript\',cursive;">kanape.kollektiv@gmail.com</span><br><br>We\'ll ask for your email so we can tell you when your memory joins the stream.',
    'mem.q5intro':   'Amazing, thank you.\n\nNow try to remember a water memory of yours.\nWhere you felt that unique bond with other water beings.',
    'mem.q5prompts': [
      'Did you meet a stunning creature at a surprising spot?',
      'Did you rescue another being from their misery?',
      'Have you learnt something special?',
      'Were you anxious and you found peace somehow?',
      'We have so many stories where water is the main character.',
    ],
    'mem.btn.breatheIn':    'breath in',
    'mem.btn.breatheOut':   'breath out',
    'mem.btn.dislikeWater': 'I\'m not really into water.',
    'mem.btn.neutral':      'I am neutral.',
    'mem.btn.loveWater':    'I love water.',
    'mem.btn.iAmWater':     'I am water.',
    'mem.btn.partOfThis':   'I want to be part of this!',
    'mem.btn.accept':       'I understand and I accept these conditions.',
    'mem.btn.record':       'record your water memory!',

    /* ── recorder.html ── */
    'rec.title':             'your water memory',
    'rec.status.ready':      'ready to record',
    'rec.status.recording':  'recording...',
    'rec.status.recorded':   'recorded',
    'rec.status.fileLoaded': 'file loaded',
    'rec.status.noMic':      'microphone access denied',
    'rec.btn.start':         'start recording',
    'rec.btn.stop':          'stop recording',
    'rec.btn.upload':        'upload a file',
    'rec.btn.play':          '▶ play',
    'rec.btn.pause':         '⏸ pause',
    'rec.btn.rerecord':      '↩ re-record',
    'rec.btn.send':          'send my memory to the stream',
    'rec.or':                'or',
    'rec.listen':            'listen back',
    'rec.tag.question':      'How would you describe your memory?',
    'rec.tag.sunny':         'sunny',
    'rec.tag.cloudy':        'cloudy',
    'rec.tag.stormy':        'stormy',
    'rec.tag.normy':         'normy',
    'rec.email.label':       'Leave your email',
    'rec.email.placeholder': 'you@example.com',
    'rec.feedback.sending':  'sending...',
    'rec.feedback.noRec':    'no recording found — please record first',
    'rec.feedback.noTag':    'please choose a tag first',
    'rec.feedback.noEmail':  'please enter your email first',
    'rec.feedback.badEmail': 'that email doesn\'t look right — please check it',
    'rec.feedback.error':    'something went wrong. please try again.',
    'rec.feedback.noConn':   'could not reach the stream. check your connection.',

    /* ── thankyou.html ── */
    'ty.text': 'Your memory is now part of the current.\nOur team will listen closely and follow its course. We\'ll let you know when your voice joins the stream.\nThank you for adding your drop to this shared body of memories.',
  },

  pt: {
    /* ── Shared nav ── */
    'nav.memories':         'Envia as tuas memórias hoje!',

    /* ── living archive map ── */
    'archive.contribute':   'contribua para o arquivo vivo',
    'archive.hint':         'arraste para explorar<br>desloque para ampliar<br>prima h para centrar',
    'archive.readmore':     '(clique para ler mais)',
    'archive.read':         'ler →',
    'archive.back':         'todos os grupos',
    'archive.sources':      'fontes',
    'archive.placeholder':  'conteúdo a ser tecido',
    'nav.stream':           'sintonize a transmissão',

    /* ── stream.html player ── */
    'player.label':         'transmissão',
    'player.vol':           'vol',
    'player.offline':       'offline',
    'player.connecting':    'conectando…',
    'player.live':          'ao vivo',
    'player.buffering':     'carregando…',
    'player.error':         'erro',

    /* ── stream.html bubbles ── */
    'player.bubbles':       ['ondas', 'shhh', '~', 'ao vivo', 'ondas'],

    /* ── index.html tagline phrases ── */
    'tagline.phrases': [
      "Tenho… muita coisa pra te contar, meu bem.",
      "Enquanto você espera, temos muito a dizer.",
      "Sim, tenho coisas a contar.",
      "Temos muita coisa a dizer.",
      "Temos coisas pra te contar, meu bem.",
      "Estamos te contando, então presta atenção, querida.",
      "Bebê! Temos coisas a dizer.",
      "Conta pra gente, vai?",
      "fica salgada"
    ],

    /* ── Spiral (Sexy Dunes) ── */
    'spiral.title':         'dunas sensuais',
    'spiral.body':          'Pesquisas mostram que dunas sensuais têm 25% menos chance de serem lixadas.',
    'spiral.bold':          'Nós tratamos disso.',
    'spiral.disclaimer':    '<strong>Aviso:</strong> Termos e condições se aplicam. Os números indicados são previsões baseadas em dados do Centro de Pesquisa She Tells. Consulte os termos e condições no nosso site.',

    /* ── Shell Cream ── */
    'shell.corner':         'Sobreviva à era ácida...',
    'shell.title':          'Shell Cream',
    'shell.body':           'O oceano não se importa com o que sentes por dentro',
    'shell.bold':           'Mas nós nos importamos.',
    'shell.cta':            'Envia as tuas memórias hoje!',
    'shell.disclaimer':     '<strong>Aviso:</strong> She Tells Shell Cream é um suplemento cosmético e não uma solução para a acidificação dos oceanos. Os níveis de saturação de carbonato individuais podem variar. A She Tells Corp não assume responsabilidade pelo pH planetário.',

    /* ── Deluxe O₂ ── */
    'o2.corner':            'Também vais dar um oooh...',
    'o2.title':             'deluxe o₂',
    'o2.body':              'Estás cansada do teu oxigénio de sempre, vindo daquelas árvores verdes feias?',
    'o2.bold':              'Respire melhor, querida!',
    'o2.disclaimer':        '<strong>Aviso:</strong> Consome o nosso oxigénio premium apenas se a evolução te tiver equipado com os órgãos adequados para o processar.',

    /* ── Sargassum City ── */
    'sargassum.corner':     '@ A Vida na Grande Mar-cidade',
    'sargassum.title':      'sargassum city',
    'sargassum.body':       'Me leva pra Sargassum City. Onde a grama é verde e os peixes são lindos.',
    'sargassum.bold':       'Garante a tua localização premium agora.',
    'sargassum.disclaimer': '<strong>Aviso:</strong> A Sargassum City não se responsabiliza pelas alterações climáticas, emissões de carbono ou pelo plástico no teu corpo. Se algum destes sintomas ocorrer na tua região, consulta o teu médico ou farmacêutico.',

    /* ── Acid Tabs ── */
    'acid.corner':          'DISSOLVA-SE COM DIGNIDADE.',
    'acid.title':           'acid tabs',
    'acid.body':            'Mantém o teu ÁCIDO SOB controlo. Agora com sabor Dimetil SULFURETO!',
    'acid.bold':            'O oceano nunca mais te vai abandonar.',
    'acid.disclaimer':      '<strong>Aviso:</strong> She Tells Acid Tabs são um suplemento alimentar e não substituem aconselhamento médico, governança oceânica ou química de carbonatos. Os resultados podem variar consoante os teus níveis de pH pessoais e a saturação de aragonita das tuas águas locais.',

    /* ── Info overlay ── */
    'info.body':            '<p>Bem-vindos ao Sea Shells, She Tells, convidamos-te a ouvir, lembrar e participar. Aqui, perguntamos: como és moldado pela água? Que histórias guarda a água para ti? Para onde vão as nossas memórias dormir no fluxo eterno da nuvem invisível da tecnologia?<br><br>Desejamos as tuas memórias, adiciona a tua ao nosso <a href="memories.html" style="color:inherit;">stream eterno!</a> Este arquivo em constante crescimento está no coração do Sea Shells, She Tells: uma obra de arte contínua onde as tuas histórias sobre a água se unem às de outros, formando um reservatório coletivo. Talvez um dia o leiloemos ao maior licitante. Brincadeira... ou será que não? Abertos a ideias!<br><br>Ao explorar, mergulhe nos nossos produtos especulativos, que já estamos a vender: shell cream, acid tabs, sexy dunes, deluxe o&#x2082;, e the shell phone.<br><br>Até que a tua história se torne parte da nossa, o stream eterno está cheio do que temos a dizer, mas não gostaríamos de ser os únicos a falar, então partilha as tuas memórias! Em breve, também poderás aceder ao stream eterno por meio do nosso próximo produto fabuloso: o DIY shell phone, um dispositivo lúdico que permite conectar-se a ele de qualquer lugar.<br><br>E também temos um novo lançamento; para os habitantes da terra, não perca as nossas luxuosas Hypersea Atmospheres: altares soprados em vidro personalizados, criados para guardar as tuas memórias num lugar especial em casa. <a href="https://www.instagram.com/p/DZxi-N6DWOJ/?img_index=1" target="_blank" rel="noopener" style="color:inherit;">Veja aqui!</a><br><br>O projeto é realizado no âmbito do programa de residência artística <a href="https://starts.eu/what-we-do/residences/startsaquamotion/" target="_blank" rel="noopener" style="color:inherit;">S+T+ARTS Aqua Motion</a>, uma iniciativa co-financiada pela Comissão Europeia e acolhida pelo <a href="https://rioneiva.com/" target="_blank" rel="noopener" style="color:inherit;">Rio Neiva</a>, Esposende, Portugal.</p>',
    'mem.machine':          '* Tradução automática por máquina.',

    /* ── Shared CTA wave buttons ── */
    'cta.pill':             'Envia as tuas memórias hoje!',

    /* ── memories.html ── */
    'mem.q1html':  '<strong>Lembrar é sobre tempo.</strong><br>Sabemos que isto é a internet, e é para ser rápido e provavelmente estás com pressa, mas que tal respirares fundo e abrandar um pouco? Queremos que dês espaço às tuas memórias.',
    'mem.q2':      'Já pensaste que carregas o oceano dentro de ti?\n\n55 a 65% de ti é água, a mesma água que circula este planeta desde muito antes de tu chegares.\n\nAlgumas histórias do hipersea dizem que quando a vida deixou o oceano pela terra, não deixou a água para trás. Ela apenas mudou de recipiente.\n\nQuão próxima da água te sentes no teu dia a dia?',
    'mem.q3.dislike': 'Tudo bem, querida.\n\nMas 55 a 65% de ti é água, queiras ou não. A mesma água continua a circular por corpos, nuvens e mares. As nossas memórias já partilham uma corrente.\n\nEstamos a construir um arquivo. Um fluxo de memórias aquáticas atravessa a nuvem invisível. Consegues pensar numa memória que gostarias de lançar no nosso fluxo eterno?',
    'mem.q3.neutral': 'Neutro. Como água parada antes que a maré vire.\n\nSe somos principalmente água e a mesma água continua a circular por corpos, nuvens e mares, as nossas memórias já partilham uma corrente.\n\nEstamos a construir um arquivo. Um fluxo de memórias aquáticas atravessa a nuvem invisível. Consegues pensar numa memória que gostarias de lançar no nosso fluxo eterno?',
    'mem.q3.love':    'Achávamos que dirias isso.\n\nSe somos principalmente água e a mesma água continua a circular por corpos, nuvens e mares, então as nossas memórias já partilham uma corrente.\n\nEstamos a construir um arquivo. Um fluxo de memórias aquáticas atravessa a nuvem invisível. Consegues pensar numa memória que gostarias de lançar no nosso fluxo eterno?',
    'mem.q3.water':   'Então já sabes.\n\nA mesma água continua a circular por corpos, nuvens e mares. As nossas memórias partilham uma corrente muito antes de nomeá-las.\n\nEstamos a construir um arquivo. Um fluxo de memórias aquáticas atravessa a nuvem invisível. Consegues pensar numa memória que gostarias de lançar no nosso fluxo eterno?',
    'mem.q4html':  'Maravilhoso!<br>Mal podemos esperar para ouvir a tua voz.<br><br>Só antes de partilhar:<br><br><strong>A tua voz será pública.</strong> Partilha apenas o que te sentires confortável a partilhar.<br><br>Não vamos treinar nenhuma IA com ela, nem usá-la para nada além desta obra de arte.<br><br>Mudaste de ideias? Envia-nos um email no prazo de duas semanas:<br><span style="font-family:\'Celescript\',cursive;">kanape.kollektiv@gmail.com</span><br><br>Pediremos o teu email para te avisar quando a tua memória se juntar ao stream.',
    'mem.q5intro':   'Incrível, obrigada.\n\nAgora tenta lembrar-te de uma memória tua com a água.\nOnde sentiste aquele laço único com outros seres de água.',
    'mem.q5prompts': [
      'Você encontrou uma criatura deslumbrante num lugar inesperado?',
      'Resgatou algum ser da sua miséria?',
      'Aprendeu algo especial?',
      'Estava ansiosa e encontrou paz de algum jeito?',
      'Temos tantas histórias onde a água é a personagem principal.',
    ],
    'mem.btn.breatheIn':    'inspira',
    'mem.btn.breatheOut':   'expira',
    'mem.btn.dislikeWater': 'Não sou muito fã de água.',
    'mem.btn.neutral':      'Sou neutro/a.',
    'mem.btn.loveWater':    'Amo água.',
    'mem.btn.iAmWater':     'Sou água.',
    'mem.btn.partOfThis':   'Quero fazer parte disso!',
    'mem.btn.accept':       'Entendo e aceito estas condições.',
    'mem.btn.record':       'grava a tua memória aquática!',

    /* ── recorder.html ── */
    'rec.title':             'a tua memória aquática',
    'rec.status.ready':      'pronta para gravar',
    'rec.status.recording':  'gravando...',
    'rec.status.recorded':   'gravado',
    'rec.status.fileLoaded': 'arquivo carregado',
    'rec.status.noMic':      'acesso ao microfone negado',
    'rec.btn.start':         'iniciar gravação',
    'rec.btn.stop':          'parar gravação',
    'rec.btn.upload':        'enviar um arquivo',
    'rec.btn.play':          '▶ ouvir',
    'rec.btn.pause':         '⏸ pausar',
    'rec.btn.rerecord':      '↩ regravar',
    'rec.btn.send':          'enviar minha memória ao stream',
    'rec.or':                'ou',
    'rec.listen':            'ouça de volta',
    'rec.tag.question':      'Como descreverias a tua memória?',
    'rec.tag.sunny':         'ensolarado',
    'rec.tag.cloudy':        'nublado',
    'rec.tag.stormy':        'tempestuoso',
    'rec.tag.normy':         'normy',
    'rec.email.label':       'Deixa o teu email',
    'rec.email.placeholder': 'nome@exemplo.com',
    'rec.feedback.sending':  'enviando...',
    'rec.feedback.noRec':    'nenhuma gravação encontrada — grave primeiro',
    'rec.feedback.noTag':    'escolha uma etiqueta primeiro',
    'rec.feedback.noEmail':  'insere o teu email primeiro',
    'rec.feedback.badEmail': 'esse email não parece certo — por favor verifique',
    'rec.feedback.error':    'algo deu errado. por favor tente novamente.',
    'rec.feedback.noConn':   'não foi possível alcançar o stream. verifica a tua ligação.',

    /* ── thankyou.html ── */
    'ty.text': 'A tua memória agora faz parte da corrente.\nA nossa equipa vai ouvir com atenção e acompanhar o teu percurso. Vamos avisar-te quando a tua voz se juntar ao stream.\nObrigada por adicionares a tua gota a este corpo partilhado de memórias.',
  }
};

/* ── Core ──────────────────────────────────────────────────────────── */

let currentLang = localStorage.getItem('st-lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.en)[key]
      ?? (TRANSLATIONS.en)[key]
      ?? key;
}

function applyLang() {
  /* text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  /* html nodes */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  /* toggle button label */
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = currentLang === 'en' ? 'PT' : 'EN';
    btn.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Portuguese' : 'Switch to English');
  });
  /* html lang attr */
  document.documentElement.lang = currentLang === 'pt' ? 'pt-PT' : 'en';
  /* fire event so pages can react (e.g. re-init typewriter, bubbles) */
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('st-lang', lang);
  applyLang();
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'pt' : 'en');
}

/* Auto-apply on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', applyLang);
