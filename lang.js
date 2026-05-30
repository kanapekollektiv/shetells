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
    'mem.q1':    'We are all water in some way.\nLet\'s collect our shared memories.\n\nAs an easy warm up: how are you feeling now?',
    'mem.q2':    'Oh darling, I feel this too.\n\nAnd what type of water do you feel the closest to now?',
    'mem.q3':    'Oh, wow. Interesting choice, I\'m a bit surprised, but ok.',
    'mem.q4':    'Now try to remember a water memory of yours.\nWhere you felt that special bond with other water beings.\n\nDid you meet a stunning creature at a surprising spot? Did you rescue another being from their misery? Have you learnt something special? Were you anxious and you found peace somehow? We have so many stories where water is the main character.',
    'mem.q5':    'You have been thinking way too much from your human perspective already. How about trying something more fluid, for a change?',
    'mem.q6':    'I like your attitude.\n\nSo this water memory...\nCan you let go of your human point of view? And try to remember more as if you were... you know... water...\nwhich you already are in ca. 60 %... just add that extra 40 %, babe!\n\nFeel the flow! And tell us your memory, so it can float with the others! We want to hear your voice!',
    'mem.mood.sunny':     'sunny',
    'mem.mood.cloudy':    'cloudy',
    'mem.mood.stormy':    'stormy',
    'mem.btn.remembered': 'I just remembered a story',
    'mem.btn.flow':       'Sure, let\'s go with the flow',
    'mem.btn.raincheck':  'Can I take a rain check?',
    'mem.btn.record':     'record your water memory!',
    'mem.btn.else':       'something else',
    'mem.privacy':        '* We are recording your anonymous voice message, we save it to our drive, and it is going to go to our internet stream. We are not going to train an AI on your voice. It will go to the ocean of voices. Which are the voices of the ocean.',
    'mem.machine':        '',
    'mem.q6html':         'I like your attitude.<br><br>So this water memory...<br>Can you let go of your human point of view? And try to remember more as if you were... you know... <strong>water</strong>...<br>which you already are in ca. 60 %... just add that extra 40 %, babe!<br><br>Feel the flow! And tell us your memory, so it can float with the others! We want to hear your voice!',
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
    'mem.q1':    'Somos todos água de alguma forma.\nVamos coletar nossas memórias compartilhadas.\n\nComo aquecimento: como você está se sentindo agora?',
    'mem.q2':    'Ai querida, eu sinto isso também.\n\nE que tipo de água você sente mais próxima de você agora?',
    'mem.q3':    'Nossa, que escolha interessante. Fiquei um pouco surpresa, mas tudo bem.',
    'mem.q4':    'Agora tente se lembrar de uma memória sua com a água.\nOnde você sentiu aquele laço especial com outros seres de água.\n\nVocê encontrou uma criatura deslumbrante num lugar inesperado? Resgatou algum ser da sua miséria? Aprendeu algo especial? Estava ansiosa e encontrou paz de algum jeito? Temos tantas histórias onde a água é a personagem principal.',
    'mem.q5':    'Você já está pensando de mais da perspectiva humana. Que tal tentar algo mais fluido, por uma vez?',
    'mem.q6':    'Gostei da sua atitude.\n\nEntão essa memória com a água...\nVocê consegue largar o seu ponto de vista humano? E tentar se lembrar mais como se você fosse... sabe... água...\nque você já é em aprox. 60 %... só adiciona os outros 40 %, bebê!\n\nSinta o fluxo! E nos conte sua memória, pra ela poder flutuar com as outras! Queremos ouvir a sua voz!',
    'mem.mood.sunny':     'ensolarada',
    'mem.mood.cloudy':    'nublada',
    'mem.mood.stormy':    'tempestuosa',
    'mem.btn.remembered': 'Acabei de lembrar de uma história',
    'mem.btn.flow':       'Claro, vamos com o fluxo',
    'mem.btn.raincheck':  'Posso deixar pra depois?',
    'mem.btn.record':     'grave sua memória aquática!',
    'mem.btn.else':       'algo diferente',
    'mem.privacy':        '* Estamos gravando sua mensagem de voz anônima, salvamos no nosso drive e ela vai para o nosso stream na internet. Não vamos usar sua voz para treinar inteligência artificial. Ela vai para o oceano de vozes. Que são as vozes do oceano.',
    'mem.machine':        '* Tradução automática. O conteúdo original está em inglês.',
    'mem.q6html':         'Gostei da sua atitude.<br><br>Então essa memória com a água...<br>Você consegue largar o seu ponto de vista humano? E tentar se lembrar mais como se você fosse... sabe... <strong>água</strong>...<br>que você já é em aprox. 60 %... só adiciona os outros 40 %, bebê!<br><br>Sinta o fluxo! E nos conte sua memória, pra ela poder flutuar com as outras! Queremos ouvir a sua voz!',
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
