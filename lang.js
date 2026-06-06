/* ── She Tells — Language switcher ─────────────────────────────────────
   Usage: add data-i18n="key" to any element whose textContent should swap.
   For HTML content use data-i18n-html="key".
   Call setLang('en') or setLang('pt') from anywhere.
──────────────────────────────────────────────────────────────────────── */

const TRANSLATIONS = {
  en: {
    /* ── Shared nav ── */
    'nav.memories':         'Send your memories today!',
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
    'info.body':            '<p>Our project is called She Tells, Sea Shells (as you could have guessed already), and we want you to get closer to water, because it\'s important to pay more attention to your environment, there is the climate change, sustainability, AI using a lot of water, a big part of you is water, seafood is delicious and it\'s more and more full of plastic, swimming is nice, but there is plastic here too... well, we have tonnes of reasons, but mainly because <strong>we care about water, and we want you to care more.</strong><br><br>We are part of <a href="https://starts.eu/what-we-do/residences/startsaquamotion/" target="_blank" rel="noopener" style="color:inherit;">S+T+ARTS Aquamotion</a> artist residency, so this project is funded by the EU, and we work together with <a href="https://rioneiva.com/" target="_blank" rel="noopener" style="color:inherit;">Rio Neiva</a>. We are very happy about all these collaborations! By the way, by we, we mean our <a href="team.html" style="color:inherit;">team</a>.<br><br>Please take your time to surf around on this site! There is no rush.</p>',

    /* ── Shared CTA wave buttons ── */
    'cta.pill':             'Send your memories today!',

    /* ── memories.html ── */
    'mem.q1html':  '<strong>Remembering is about time.</strong><br>We know that this is the internet, and it\'s supposed to be quick and you are probably in a hurry, but how about taking a deep breath and slowing down a little? We want you to give space for your memories.',
    'mem.q2':      'We are all water in some way.\nDo you know about the hypersea theory?\nIt says that all beings came from the ocean, and those who left the water for the land, carried the ocean in themselves.\nWell, we are 55-65% water…\n\nHow close do you feel to water in your daily life?',
    'mem.q3':      'I like your attitude.\n\nNevertheless, if I am mostly water and you are mostly water, and the same water keeps circulating in our planet, we are all connected in some way.\n\nThat\'s why we want to collect our shared water memories.\nWe are building an archive of memories in our stream. It\'s a flow of human experiences curated by water.',
    'mem.q4html':  'Wonderful!<br>We can\'t wait to hear your voice!<br><br>One last thing, before you send us your memory:<br><strong>Your voice is going to be recorded and it\'s going to be uploaded to our public platform.</strong><br><br>We are not going to train any AI on your voice and we don\'t want to use your recording for any other purpose other than this art project.<br>But please be mindful that others will hear your memories, so <strong>only share information that you are comfortable with sharing!</strong><br><br>You have the right to retrieve your memory for two weeks after the recording by sending us an email at <span style="font-family:\'Celescript\',cursive;">kanape.kollektiv@gmail.com</span>!<br><br>We will ask you for your email address, so we can send you a message when your memory is uploaded to the stream, and if we have groundbreaking news on our project. We promise we won\'t litter your folder (unlike humans are littering our waters).',
    'mem.q5':      'Amazing, thank you!\n\nNow try to remember a water memory of yours.\nWhere you felt that unique bond with other water beings.\n\nDid you meet a stunning creature at a surprising spot? Did you rescue another being from their misery? Have you learnt something special? Were you anxious and you found peace somehow? We have so many stories where water is the main character.\n\nPlease tell us your memory here! And don\'t stress, it doesn\'t have to be flawless. We are all just humans here. And water.',
    'mem.btn.breatheIn':    'breath in',
    'mem.btn.breatheOut':   'breath out',
    'mem.btn.dislikeWater': 'I\'m not really into water.',
    'mem.btn.neutral':      'I am neutral.',
    'mem.btn.loveWater':    'I love water.',
    'mem.btn.iAmWater':     'I am water.',
    'mem.btn.partOfThis':   'I want to be part of this!',
    'mem.btn.accept':       'I understand and I accept these conditions.',
    'mem.btn.record':       'record your water memory!',

    /* ── thankyou.html ── */
    'ty.text': 'Your memory is now part of the current.\nOur team will listen closely and follow its course. We\'ll let you know when your voice joins the stream.\nThank you for adding your drop to this shared body of memories.',
  },

  pt: {
    /* ── Shared nav ── */
    'nav.memories':         'Envie suas memórias hoje!',
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
    'spiral.bold':          'A gente cuida disso.',
    'spiral.disclaimer':    '<strong>Aviso:</strong> Termos e condições se aplicam. Os números indicados são previsões baseadas em dados do Centro de Pesquisa She Tells. Consulte os termos e condições no nosso site.',

    /* ── Shell Cream ── */
    'shell.corner':         'Sobreviva à era ácida...',
    'shell.title':          'Shell Cream',
    'shell.body':           'O oceano não se importa com o que você sente por dentro',
    'shell.bold':           'Mas nós nos importamos.',
    'shell.cta':            'Envie suas memórias hoje!',
    'shell.disclaimer':     '<strong>Aviso:</strong> She Tells Shell Cream é um suplemento cosmético e não uma solução para a acidificação dos oceanos. Os níveis de saturação de carbonato individuais podem variar. A She Tells Corp não assume responsabilidade pelo pH planetário.',

    /* ── Deluxe O₂ ── */
    'o2.corner':            'Você também vai dar um oooh...',
    'o2.title':             'deluxe o₂',
    'o2.body':              'Você está cansada do seu oxigênio de sempre, vindo daquelas árvores verdes feias?',
    'o2.bold':              'Respire melhor, querida!',
    'o2.disclaimer':        '<strong>Aviso:</strong> Consuma nosso oxigênio premium apenas se a evolução tiver te equipado com os órgãos adequados para processá-lo.',

    /* ── Sargassum City ── */
    'sargassum.corner':     '@ A Vida na Grande Mar-cidade',
    'sargassum.title':      'sargassum city',
    'sargassum.body':       'Me leva pra Sargassum City. Onde a grama é verde e os peixes são lindos.',
    'sargassum.bold':       'Garanta sua localização premium agora.',
    'sargassum.disclaimer': '<strong>Aviso:</strong> A Sargassum City não se responsabiliza pelas mudanças climáticas, emissões de carbono ou pelo plástico no seu corpo. Se algum desses sintomas ocorrer na sua região, consulte seu médico ou farmacêutico.',

    /* ── Acid Tabs ── */
    'acid.corner':          'DISSOLVA-SE COM DIGNIDADE.',
    'acid.title':           'acid tabs',
    'acid.body':            'Mantenha seu ÁCIDO SOB controle. Agora com sabor Dimetil SULFETO!',
    'acid.bold':            'O oceano nunca mais vai te abandonar.',
    'acid.disclaimer':      '<strong>Aviso:</strong> She Tells Acid Tabs são um suplemento alimentar e não substituem aconselhamento médico, governança oceânica ou química de carbonatos. Os resultados podem variar de acordo com seus níveis de pH pessoais e a saturação de aragonita das suas águas locais.',

    /* ── Info overlay ── */
    'info.body':            '<p>Nosso projeto se chama She Tells, Sea Shells (como você já deve ter adivinhado), e queremos que você se aproxime mais da água, porque é importante prestar mais atenção ao seu ambiente: tem as mudanças climáticas, a sustentabilidade, a IA que consome muita água, grande parte de você é água, frutos do mar são deliciosos mas estão cada vez mais cheios de plástico, nadar é gostoso, mas tem plástico aí também... bem, temos toneladas de razões, mas principalmente porque <strong>nos importamos com a água, e queremos que você também se importe mais.</strong><br><br>Fazemos parte da residência artística <a href="https://starts.eu/what-we-do/residences/startsaquamotion/" target="_blank" rel="noopener" style="color:inherit;">S+T+ARTS Aquamotion</a>, então este projeto é financiado pela UE, e trabalhamos junto com <a href="https://rioneiva.com/" target="_blank" rel="noopener" style="color:inherit;">Rio Neiva</a>. Estamos muito felizes com todas essas colaborações! Aliás, quando dizemos "nós", nos referimos à nossa <a href="team.html" style="color:inherit;">equipe</a>.<br><br>Fique à vontade para explorar o site com calma! Não há pressa.</p>',

    /* ── Shared CTA wave buttons ── */
    'cta.pill':             'Envie suas memórias hoje!',

    /* ── memories.html ── */
    'mem.q1html':  '<strong>Lembrar é sobre tempo.</strong><br>Sabemos que isso é a internet, e é para ser rápido e você provavelmente está com pressa, mas que tal respirar fundo e desacelerar um pouco? Queremos que você dê espaço para suas memórias.',
    'mem.q2':      'Somos todos água de alguma forma.\nVocê conhece a teoria do hipersea?\nEla diz que todos os seres vieram do oceano, e aqueles que deixaram a água pela terra carregaram o oceano em si mesmos.\nBem, somos 55-65% água…\n\nO quanto você se sente próxima da água no seu dia a dia?',
    'mem.q3':      'Gostei da sua atitude.\n\nMas, se eu sou principalmente água e você é principalmente água, e a mesma água continua circulando no nosso planeta, somos todos conectados de alguma forma.\n\nÉ por isso que queremos coletar nossas memórias compartilhadas da água.\nEstamos construindo um arquivo de memórias no nosso stream. É um fluxo de experiências humanas curado pela água.',
    'mem.q4html':  'Maravilhoso!<br>Mal podemos esperar para ouvir a sua voz!<br><br>Uma última coisa, antes de nos enviar a sua memória:<br><strong>A sua voz será gravada e carregada na nossa plataforma pública.</strong><br><br>Não vamos treinar nenhuma IA com a sua voz e não queremos usar a sua gravação para qualquer outro propósito além deste projeto artístico.<br>Mas esteja ciente de que outros ouvirão as suas memórias, portanto, <strong>compartilhe apenas informações com as quais se sinta confortável!</strong><br><br>Você tem o direito de recuperar a sua memória por duas semanas após a gravação enviando um email para <span style="font-family:\'Celescript\',cursive;">kanape.kollektiv@gmail.com</span>!<br><br>Pediremos o seu endereço de email, para que possamos enviar uma mensagem quando a sua memória for carregada no stream e se tivermos novidades importantes sobre o projeto. Prometemos não encher a sua caixa de entrada (ao contrário dos humanos que estão poluindo as nossas águas).',
    'mem.q5':      'Incrível, obrigada!\n\nAgora tente se lembrar de uma memória sua com a água.\nOnde você sentiu aquele laço único com outros seres de água.\n\nVocê encontrou uma criatura deslumbrante num lugar inesperado? Resgatou algum ser da sua miséria? Aprendeu algo especial? Estava ansiosa e encontrou paz de algum jeito? Temos tantas histórias onde a água é a personagem principal.\n\nPor favor, nos conte aqui a sua memória! E não se estresse, não precisa ser perfeita. Somos todos humanos aqui. E água.',
    'mem.btn.breatheIn':    'inspira',
    'mem.btn.breatheOut':   'expira',
    'mem.btn.dislikeWater': 'Não sou muito fã de água.',
    'mem.btn.neutral':      'Sou neutro/a.',
    'mem.btn.loveWater':    'Amo água.',
    'mem.btn.iAmWater':     'Sou água.',
    'mem.btn.partOfThis':   'Quero fazer parte disso!',
    'mem.btn.accept':       'Entendo e aceito estas condições.',
    'mem.btn.record':       'grave sua memória aquática!',

    /* ── thankyou.html ── */
    'ty.text': 'Sua memória agora faz parte da corrente.\nNossa equipe vai ouvir com atenção e acompanhar o seu percurso. Vamos te avisar quando a sua voz se juntar ao stream.\nObrigada por adicionar sua gota a esse corpo compartilhado de memórias.',
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
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
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
