# -*- coding: utf-8 -*-
import json, re, io, sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from cards import CARDS, MATERIALS, BUYERS, TAGS
from pt import CARD_PT, UI_PT, UI_EN, MAT_PT, BUY_PT

import html, unicodedata

def slugify(t):
    t = html.unescape(t)
    t = unicodedata.normalize('NFD', t)
    t = ''.join(ch for ch in t if unicodedata.category(ch) != 'Mn')
    return re.sub(r'-+$', '', re.sub(r'[^a-z0-9]+', '-', t.lower())).strip('-')

A = json.load(open(os.path.join(HERE,'assets.json')))
base_css  = io.open(os.path.join(HERE,'card-base.css'), encoding='utf-8').read()
line_css  = io.open(os.path.join(HERE,'card.css'), encoding='utf-8').read()
shell_css = io.open(os.path.join(HERE,'game_shell.css'), encoding='utf-8').read()

# Measured card geometry in the line's 620x1000 space:
#   .art box x 195..587, y 274..522  |  title ink ends x 484 (mid y 112)
#   caps ink starts x 223 (pinned)   |  pill column x 20..69, y 211..479
ART_X, ART_Y, ART_W, ART_H = 195.0, 274.0, 392.0, 248.0

def ink_box(vb):
    """where the drawing actually lands inside .art, given preserveAspectRatio meet"""
    _,_,w,h = [float(n) for n in vb.split()]
    k = min(ART_W/w, ART_H/h)
    iw, ih = w*k, h*k
    return ART_X + (ART_W-iw)/2, ART_Y + (ART_H-ih)/2, iw, ih

def squiggle_for(vb):
    """the line approaches the drawing and stops short of it, top and bottom,
       so it never crosses the artwork on any card"""
    ix, iy, iw, ih = ink_box(vb)
    ex = ix + iw*0.18
    ey = iy - 16
    sx = ix + iw*0.72
    sy = iy + ih + 16
    p1 = ('M492 112 C558 104 580 152 545 176 '
          f'C500 206 {ex+82:.0f} 198 {ex+42:.0f} 230 '
          f'C{ex+20:.0f} 246 {ex+5:.0f} 251 {ex:.0f} {ey:.0f}')
    p2 = (f'M{sx:.0f} {sy:.0f} C{sx-16:.0f} {sy+52:.0f} {sx-92:.0f} 622 {sx-178:.0f} 642 '
          'C242 662 170 662 152 692 '
          'C138 716 152 734 178 738 '
          'C188 740 197 739 205 735')
    arrow = 'M205 735 L190 727 M205 735 L191 743'
    return ('<svg class="squiggle" viewBox="0 0 620 1000" aria-hidden="true" focusable="false">'
            f'<path d="{p1}"/><path d="{p2}"/><path d="{arrow}"/></svg>')

OPENER_LINE = ('<svg class="squiggle" viewBox="0 0 620 1000" aria-hidden="true" focusable="false">'
  '<path d="M272 196 C360 186 486 250 516 368 C544 478 466 578 360 622 C310 643 232 655 238 694"/>'
  '<path d="M238 694 L244 678 M238 694 L228 680"/></svg>')

def drawing(c):
    """each drawing recoloured to its own card colour; one occurrence each, verified"""
    return A['SVG_' + c['svg']].replace(c['native'], c['colour'])

def card_html(c, lang='en'):
    import re as _re
    _vb = _re.search(r'viewBox="([^"]+)"', A['SVG_'+c['svg']]).group(1)
    _sq = squiggle_for(_vb)
    d = dict(c)
    if lang == 'pt': d.update(CARD_PT[c['key']])
    c = d
    longcls = ' long' if c.get('longname') else ''
    capscls = ' small' if len(re.sub('&[^;]+;','x',c['caps'])) > 62 else ''
    return f'''<div class="inner">
  <div class="face front">{_sq}
    <div class="body">
      <div class="wordmark">she tells</div>
      <div class="pname{longcls}">{c['name']}</div>
      <div class="pills"><span class="pill solid">{c['pill']}</span></div>
      <div class="art">{drawing(c)}</div>
      <p class="saycaps{capscls}">{c['caps']}</p>
      <p class="tagline">{c['tag']}</p>
      <span class="flipcue" data-i18n="flip">tap to turn &rarr;</span>
    </div>
  </div>
  <div class="face back">
    <div class="body">
      <div class="btop">
        <p class="cond-label" data-i18n="condLabel">what is actually happening</p>
        <p class="cond">{c['cond']}</p>
        <p class="src">{c['src']}</p>
      </div>
      <div class="brief">
        <p class="q">{c['q']}</p>
        <p class="cta-label" data-i18n="yourTurn">your turn</p>
        <div class="lanes">
          <button class="lane" data-lane="remember" data-card="{c['key']}"><b data-i18n="remember">remember</b><span data-i18n="rememberSub">something real</span></button>
          <button class="lane fill" data-lane="invent" data-card="{c['key']}"><b data-i18n="invent">invent</b><span data-i18n="inventSub">the sixth product</span></button>
        </div>
      </div>
    </div>
    <p class="foot" data-i18n="foot">Goes straight to the stream. Thirty seconds is plenty.</p>
  </div>
</div>'''

OPENER = f'''<div class="inner">
  <div class="face front">{OPENER_LINE}
    <div class="body">
      <div class="wordmark" data-i18n="openerWord">she tells entity</div>
      <div class="pname" data-i18n="openerName">she<br><em>listens</em></div>
      <div class="pills"><span class="pill solid" data-i18n="openerPill">there is no right answer</span></div>
      <div class="art"></div>
      <p class="saycaps" data-i18n="openerCaps">Five products on the shelf. The ocean keeps asking for one more.</p>
      <p class="tagline" data-i18n="openerTag">Your turn, darling.</p>
      <span class="flipcue" data-i18n="flip">tap to turn &rarr;</span>
    </div>
  </div>
  <div class="face back">
    <div class="body">
      <div class="btop">
        <p class="cond-label" data-i18n="openerLabel">how this works</p>
        <p class="cond" data-i18n="openerCond">You get a card. The front sells you something
          ridiculous. Turn it over and it tells you what is really happening in the water here.</p>
        <p class="src" data-i18n="openerSrc">Five cards in the deck &middot; answer them in any order</p>
      </div>
      <div class="brief">
        <p class="q" data-i18n="openerQ">Shall we begin?</p>
        <p class="cta-label" data-i18n="openerCta">deal me in</p>
        <div class="lanes"><button class="lane fill" id="dealBtn"><b data-i18n="openerDeal">draw a card</b><span data-i18n="openerDealSub">any of the five</span></button></div>
      </div>
    </div>
    <p class="foot" data-i18n="openerFoot">Nothing to install. Your voice joins the eternal stream.</p>
  </div>
</div>'''

def card_data(c, lang):
    d = {k:c[k] for k in ('key','name','colour','example','hint1','hint2')}
    if lang == 'pt': d.update({k:v for k,v in CARD_PT[c['key']].items() if k in d})
    return d
DATA = json.dumps({'en':[card_data(c,'en') for c in CARDS],
                   'pt':[card_data(c,'pt') for c in CARDS]})
MATS = json.dumps([{'w':m[0],'n':m[1],'s':slugify(m[0]),'wp':MAT_PT[i][0],'np':MAT_PT[i][1]}
                   for i,m in enumerate(MATERIALS)])
BUYS = json.dumps([{'w':b[0],'s':b[1],'wp':BUY_PT[i]} for i,b in enumerate(BUYERS)])
CARD_EN = json.dumps([card_html(c,'en') for c in CARDS])
CARD_PT_HTML = json.dumps([card_html(c,'pt') for c in CARDS])
UI = json.dumps({'en':UI_EN,'pt':UI_PT})
TAGJSON = json.dumps([t[0] for t in TAGS])

page = f'''<title>The Sixth Product</title>
<style>
@font-face{{font-family:'NaNTresorM';src:url(data:font/ttf;base64,{A['FONT_XLIGHT']}) format('truetype');font-weight:200;font-display:swap}}
@font-face{{font-family:'NaNTresorM';src:url(data:font/ttf;base64,{A['FONT_REG']}) format('truetype');font-weight:400;font-display:swap}}
@font-face{{font-family:'NaNTresorM';src:url(data:font/ttf;base64,{A['FONT_BOLD']}) format('truetype');font-weight:700;font-display:swap}}
@font-face{{font-family:'Celescript';src:url(data:font/ttf;base64,{A['FONT_HAND']}) format('truetype');font-display:swap}}
{shell_css}
{base_css}
{line_css}
.card{{width:min(84vw,330px);cursor:pointer;-webkit-user-select:none;user-select:none}}
.card:focus-visible{{outline:2.5px solid var(--orange);outline-offset:5px;border-radius:6px}}
.saycaps.small{{font-size:3.2cqw}}
.pname.long{{font-size:11.4cqw}}

</style>

<div class="hud">
  <span class="hudleft">
    <button class="backbtn" id="backBtn" type="button" aria-label="Back" hidden>&#8592;</button>
    <span id="hudLabel" data-i18n="corp">she tells entity</span>
  </span>
  <span class="hudright">
    <span class="pips" id="pips"></span>
    <button class="langbtn" id="langBtn" type="button" aria-label="Mudar para portugues">PT</button>
  </span>
</div>

<div class="screen on" id="s-open">
  <div class="card opener" id="openerCard" role="button" tabindex="0" aria-label="Opener card, tap to turn">{OPENER}</div>
</div>

<div class="screen" id="s-deck">
  <h1 class="big" data-i18n="deckTitle">the deck</h1>
  <p class="sub" data-i18n="deckSub">Take the one on top, or shuffle for a different card.</p>
  <div class="stack" id="stack"></div>
  <span class="count" id="deckCount"></span>
  <div class="row">
    <button class="btn ghost" id="shuffleBtn" data-i18n="reshuffle">reshuffle</button>
    <button class="btn solid" id="takeTop" data-i18n="takeTop">take the top card</button>
  </div>
  <button class="btn ghost" id="skipToDone" data-i18n="catalogue" hidden>see the catalogue</button>
</div>

<div class="screen" id="s-card">
  <div class="card" id="playCard" role="button" tabindex="0" aria-label="Card, tap to turn"></div>
  <button class="btn ghost" id="backToDeck" data-i18n="putBack">put it back</button>
</div>

<div class="screen" id="s-ing">
  <h1 class="big asis" data-i18n="ingTitle">Finish this sentence</h1>
  <div class="sentbox">
    <p class="lead" data-i18n="ingLead">In 2040, Esposende will need</p>
    <p class="blank">&#8230;&#8230;&#8230;&#8230;</p>
  </div>
  <p class="sub" data-i18n="ingSub">One product. It is allowed to be ridiculous.</p>
  <div class="egs" id="egs"></div>
  <div class="hints" id="hints"></div>
  <div class="row">
    <button class="btn" id="helpBtn">stuck? give me a hint</button>
    <button class="btn solid" id="toBrief" data-i18n="ready">i know what it is</button>
  </div>
</div>

<p class="mlnote" id="mlNote" data-i18n="mlNote"></p>

<div class="screen" id="s-consent">
  <h1 class="big" data-i18n="consentTitle">before you speak</h1>
  <div class="consent">
    <h2 data-i18n="consentH">Your voice will be public</h2>
    <p><b>It joins the eternal stream</b>, where anyone can hear it, and where it can be listened to
      through a DIY shell phone. Only say what you are happy for other people to hear.</p>
    <p>We will not train any AI on your voice, and we will not use it for anything beyond this artwork.</p>
    <p>Changed your mind? Email us within two weeks and we will take it out:
      <span class="mail">kanape.kollektiv@gmail.com</span></p>
    <p>We ask for your email so we can tell you when your recording joins the stream.</p>
  </div>
  <button class="btn solid wide" id="consentOk" data-i18n="consentOk">i understand, let me record</button>
  <button class="btn ghost" id="consentBack" data-i18n="consentNo">not this time</button>
</div>

<div class="screen" id="s-brief">
  <div class="script" id="script"></div>
  <div class="rec" id="recArea">
    <canvas class="wave" id="wave" width="600" height="44"></canvas>
    <button class="mic" id="mic" aria-label="Start recording">&#9679;</button>
    <span class="miclabel" id="timer">tap to record</span>
  </div>
  <div class="player" id="player" hidden>
    <button id="playBtn" aria-label="Play back">&#9654;</button>
    <span class="bar"><i id="playBar"></i></span>
    <span class="ptime" id="ptime">0:00</span>
  </div>
  <div class="row" id="recActions" hidden>
    <button class="btn ghost" id="reRec" data-i18n="again">record again</button>
    <button class="btn solid" id="useRec" data-i18n="useThis">use this one</button>
  </div>
  <p class="feedback" id="recFeedback"></p>
</div>

<div class="screen" id="s-send">
  <h1 class="big" data-i18n="sendTitle">last step</h1>
  <p class="sub" data-i18n="sendSub">So we can tell you when it joins the stream.</p>
  <div class="field">
    <label for="emailInput" data-i18n="emailLabel">your email</label>
    <input id="emailInput" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com">
  </div>
  <button class="btn solid wide" id="sendBtn" data-i18n="send">send it to the stream</button>
  <p class="feedback" id="sendFeedback"></p>
  <button class="btn ghost" id="sendBack" data-i18n="back">back</button>
</div>

<div class="screen" id="s-thanks">
  <h1 class="big" data-i18n="thanksTitle">it is in the stream</h1>
  <p class="sub" id="thanksLine"></p>
  <button class="btn solid" id="thanksNext" data-i18n="nextCard">next card</button>
</div>

<div class="screen" id="s-tag">
  <h1 class="big" data-i18n="tagTitle">one last thing</h1>
  <p class="sub">The stream plays what matches the weather in Esposende right now. What kind of day
    is your future for?</p>
  <div class="tags" id="tagRow"></div>
  <button class="btn ghost" id="skipTag" data-i18n="skip">skip this</button>
</div>

<div class="screen" id="s-done">
  <h1 class="big" data-i18n="doneTitle">the line is complete</h1>
  <p class="sub" data-i18n="doneSub">Five conditions answered. Your products join the eternal stream,
    where they can be heard through a DIY shell phone.</p>
  <div class="panel" id="summary"></div>
  <a class="btn" id="feedbackBtn" href="#" rel="noopener" data-i18n="howWas">how was that?</a>
  <button class="btn" id="again" data-i18n="playAgain">play again</button>
</div>

<script>
(function(){{
  var CARD_DATA = {DATA}, CARDS = CARD_DATA.en, HTML_ALL = {{en:{CARD_EN}, pt:{CARD_PT_HTML}}}, MATS = {MATS}, BUYS = {BUYS}, TAGS = {TAGJSON};
  var UI = {UI};
  var CARD_PT_NAMES = {{}};
  // Playtest feedback. Put a Tally or Google Form URL here and it will be used instead;
  // until then this opens a prefilled email, which needs no setup and reaches you directly.
  var FEEDBACK_URL = '';
  var FEEDBACK_EMAIL = 'kanape.kollektiv@gmail.com';
  var lang = (navigator.language || 'en').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
  var HTML = HTML_ALL[lang];
  function i18n(root){{
    (root||document).querySelectorAll('[data-i18n]').forEach(function(el){{
      var v = T(el.dataset.i18n); if (v !== undefined) el.innerHTML = v;
    }});
  }}
  function T(k){{ return (UI[lang] && UI[lang][k] !== undefined) ? UI[lang][k] : UI.en[k]; }}
  var answered = [], log = [], cur = null, ing = null, curLane = 'invent';
  var order = CARDS.map(function(_,i){{ return i; }});   // bottom .. top

  function $(id){{ return document.getElementById(id); }}
  var history = [];
  function show(id, isBack){{
    var current = currentScreen();
    if (!isBack && current && current !== id && current !== 's-open') history.push(current);
    if (id === 's-deck') {{ cur = null; }}          // no card in hand on the deck
    document.querySelectorAll('.screen').forEach(function(s){{ s.classList.toggle('on', s.id===id); }});
    window.scrollTo(0,0);
    pips();
    updateBack();
  }}
  function currentScreen(){{
    var s = [].filter.call(document.querySelectorAll('.screen'), function(x){{
      return x.classList.contains('on'); }})[0];
    return s ? s.id : null;
  }}
  function updateBack(){{
    // no going back out of the opener, and not once a recording is on its way
    var here = currentScreen();
    var blocked = (here === 's-open' || here === 's-thanks' || here === 's-done');
    $('backBtn').hidden = blocked || history.length === 0;
  }}
  $('backBtn').addEventListener('click', function(){{
    if (!history.length) return;
    var prev = history.pop();
    // stepping back out of the recorder should drop the take, not keep it half made
    if (currentScreen() === 's-brief') resetRecorder();
    show(prev, true);
  }});
  function pips(){{
    $('pips').innerHTML = CARDS.map(function(c){{
      var done = answered.indexOf(c.key) > -1;
      var here = cur && cur.key === c.key && !done;
      var cls = 'pip' + (done ? ' done' : '') + (here ? ' now' : '');
      var st = done ? 'background:' + c.colour + ';border-color:' + c.colour
             : here ? 'border-color:' + c.colour : '';
      return '<span class="' + cls + '" style="' + st + '"></span>';
    }}).join('');
    $('hudLabel').innerHTML = answered.length ? answered.length + ' ' + T('answered') : T('corp');
  }}
  function pick(arr){{ return arr[Math.floor(Math.random()*arr.length)]; }}

  // opener
  // iOS does not reliably synthesise click for taps on non-interactive children,
  // so drive the flip from pointerup and treat the click as a fallback only.
  function flipOn(el){{
    var handled = 0;
    function toggle(ev){{
      if (ev.target.closest('.lane')) return;          // real buttons keep their own job
      if (ev.type === 'click' && Date.now() - handled < 500) return;
      if (ev.type === 'pointerup') handled = Date.now();
      el.classList.toggle('flipped');
    }}
    el.addEventListener('pointerup', toggle);
    el.addEventListener('click', toggle);
    el.addEventListener('keydown', function(ev){{
      if (ev.key === 'Enter' || ev.key === ' ') {{ ev.preventDefault(); el.classList.toggle('flipped'); }}
    }});
  }}
  flipOn($('openerCard'));
  flipOn($('playCard'));   // persistent element, bound once
  $('dealBtn').addEventListener('click', function(e){{
    e.stopPropagation(); shuffle(order); show('s-deck'); renderStack();
  }});

  function shuffle(a){{
    for (var i=a.length-1;i>0;i--){{ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; }}
    return a;
  }}

  function renderStack(){{
    var st = $('stack'); st.innerHTML = '';
    order.forEach(function(ci, i){{
      var c = CARDS[ci], depth = order.length - 1 - i;      // 0 = the top card
      var el = document.createElement('div');
      el.className = 'stackcard' + (depth === 0 ? ' top' : '');
      el.style.background = c.colour;
      el.style.zIndex = i + 1;
      el.style.setProperty('--t',
        'translate(' + (depth * -3) + 'px,' + (depth * 4) + 'px) rotate(' +
        ((depth % 2 ? -1 : 1) * depth * 1.3) + 'deg)');
      el.innerHTML = '<span>she tells</span>';
      st.appendChild(el);
    }});
    var n = order.length;
    $('deckCount').textContent = n === 1 ? T('lastCard') : n + ' ' + T('cardsLeft');
    $('shuffleBtn').disabled = n < 2;
    $('skipToDone').hidden = n > 0;
    pips();
  }}
  function refreshDeck(){{ renderStack(); }}

  function takeTop(){{
    if (!order.length) return;
    var ci = order[order.length - 1];
    cur = CARDS[ci];
    var card = $('playCard');
    card.className = 'card';
    card.style.setProperty('--cream', cur.colour);
    card.innerHTML = HTML[ci];
    card.classList.remove('flipped');
    bindCard(card);
    i18n(card);
    pips();
    show('s-card');
  }}
  $('stack').addEventListener('click', takeTop);
  $('takeTop').addEventListener('click', takeTop);
  $('shuffleBtn').addEventListener('click', function(){{
    var st = $('stack'); st.classList.add('shuffling');
    shuffle(order); renderStack();
    setTimeout(function(){{ st.classList.remove('shuffling'); }}, 320);
  }});

  function bindCard(card){{
    card.querySelectorAll('.lane').forEach(function(l){{
      l.addEventListener('click', function(ev){{
        ev.stopPropagation();
        var lane = l.dataset.lane;
        curLane = lane;
        if (lane === 'remember') {{
          if (!consented) {{ show('s-consent'); }} else {{ openRecorder(); }}
        }} else {{
          dealIng(); show('s-ing');
        }}
      }});
    }});
  }}

  var hintsShown = 0;
  function renderEgs(){{
    if (!cur) return;
    $('egs').innerHTML = CARDS
      .filter(function(c){{ return c.key !== cur.key; }})
      .slice(0,3)
      .map(function(c){{ return '<span class="eg">' + T('like') + c.name + '&rdquo;</span>'; }}).join('');
  }}
  function dealIng(){{
    ing = {{ m: pick(MATS), b: pick(BUYS) }};
    hintsShown = 0;
    $('hints').innerHTML = '';
    $('helpBtn').disabled = false;
    $('helpBtn').innerHTML = T('hint');
    $('egs').style.display = '';
    // three of the real products, so a valid answer is visibly allowed to be silly
    // compare keys, not display names: one of the names carries an html entity
    renderEgs();
  }}

  $('helpBtn').addEventListener('click', function(){{
    hintsShown++;
    if (hintsShown === 1) {{
      $('hints').innerHTML =
        '<div class="hintcard"><b>' + T('hintMat') + '</b><span>' + cur.hint1 + '</span></div>';
      $('helpBtn').innerHTML = T('hint2');
      $('egs').style.display = 'none';
    }} else if (hintsShown === 2) {{
      $('hints').innerHTML +=
        '<div class="hintcard"><b>' + T('hintBuy') + '</b><span>' + cur.hint2 + '</span></div>';
      $('helpBtn').innerHTML = T('hint3');
    }} else if (hintsShown === 3) {{
      $('hints').innerHTML +=
        '<div class="hintcard"><b>' + T('hintMade') + '</b><span>' +
        (lang === 'pt' ? ing.m.wp : ing.m.w) + '</span><i>' +
        (lang === 'pt' ? ing.m.np : ing.m.n) + '</i></div>';
      $('helpBtn').innerHTML = T('hintDone');
      $('helpBtn').disabled = true;
    }}
  }});

  $('toBrief').addEventListener('click', function(){{
    if (!consented) {{ show('s-consent'); }} else {{ openRecorder(); }}
  }});

  // ── recording, the same contract recorder.html uses ──
  var UPLOAD_URL = 'https://shell.kokott.art/submissions';
  var chosenTag = null, consented = false;
  var mediaRecorder = null, audioChunks = [], audioBlob = null, mimeType = '';
  var stream = null, audioCtx = null, analyser = null, animFrame = null, dataArray = null;
  var recSeconds = 0, recTick = null, previewUrl = null;
  var audio = new Audio();

  $('tagRow').innerHTML = TAGS.map(function(t){{
    return '<button class="tagbtn" data-t="' + t + '">' + t + '</button>';
  }}).join('');
  $('tagRow').addEventListener('click', function(ev){{
    var b = ev.target.closest('.tagbtn'); if (!b) return;
    [].forEach.call($('tagRow').children, function(x){{ x.classList.remove('sel'); }});
    b.classList.add('sel');
    chosenTag = b.dataset.t;
    setTimeout(function(){{ show('s-send'); $('emailInput').focus(); }}, 260);
  }});
  $('skipTag').addEventListener('click', function(){{ chosenTag = 'normy'; show('s-send'); }});

  $('consentOk').addEventListener('click', function(){{ consented = true; openRecorder(); }});
  // 'not this time' goes back to wherever the player came from
  $('consentBack').addEventListener('click', function(){{ show(curLane === 'invent' ? 's-ing' : 's-card'); }});
  $('sendBack').addEventListener('click', function(){{ show('s-tag'); }});

  function blk(k){{ return '<span class="blk">' + T(k) + '</span>'; }}
  var SCRIPTS = {{
    invent: function(){{ return '<h2>' + T('scriptInvent') + '</h2>' +
      (lang === 'pt'
        ? '<p class="line">Apresentamos ' + blk('blkName') + '.</p>' +
          '<p class="line">&#201; feito de ' + blk('blkMade') + '.</p>' +
          '<p class="line">&#201; para ' + blk('blkFor') + '.</p>' +
          '<p class="line">Porque ' + blk('blkBecause') + '.</p>'
        : '<p class="line">Introducing ' + blk('blkName') + '.</p>' +
          '<p class="line">It is made from ' + blk('blkMade') + '.</p>' +
          '<p class="line">It is for ' + blk('blkFor') + '.</p>' +
          '<p class="line">Because ' + blk('blkBecause') + '.</p>') +
      '<p class="hint">' + T('scriptHint') + '</p>'; }},
    remember: function(){{ return '<h2>' + T('scriptRemember') + '</h2>' +
      (lang === 'pt'
        ? '<p class="line">Lembro-me de ' + blk('blkWhere') + '.</p>' +
          '<p class="line">A &#225;gua estava ' + blk('blkLike') + '.</p>' +
          '<p class="line">Estava l&#225; com ' + blk('blkWith') + '.</p>' +
          '<p class="line">O que me ficou foi ' + blk('blkStayed') + '.</p>'
        : '<p class="line">I remember ' + blk('blkWhere') + '.</p>' +
          '<p class="line">The water was ' + blk('blkLike') + '.</p>' +
          '<p class="line">I was there with ' + blk('blkWith') + '.</p>' +
          '<p class="line">What stayed with me was ' + blk('blkStayed') + '.</p>') +
      '<p class="hint">' + T('scriptHintR') + '</p>'; }}
  }};

  function openRecorder(){{
    $('script').innerHTML = SCRIPTS[curLane]();
    resetRecorder();
    $('mic').style.background = cur.colour;
    $('playBtn').style.background = cur.colour;
    $('playBar').style.background = cur.colour;
    show('s-brief');
  }}

  function resetRecorder(){{
    stopTicker();
    audioBlob = null; audioChunks = [];
    if (previewUrl) {{ URL.revokeObjectURL(previewUrl); previewUrl = null; }}
    audio.pause(); audio.removeAttribute('src');
    $('player').hidden = true; $('recActions').hidden = true;
    $('recArea').hidden = false;
    $('mic').classList.remove('on');
    $('timer').innerHTML = T('tapRec');
    $('recFeedback').textContent = '';
    $('playBtn').innerHTML = '&#9654;';
    $('playBar').style.width = '0%';
    $('ptime').textContent = '0:00';
  }}

  function fmt(s){{ var m = Math.floor(s/60); var r = s%60; return m + ':' + (r<10?'0':'') + r; }}
  function stopTicker(){{ if (recTick) {{ clearInterval(recTick); recTick = null; }} }}

  $('mic').addEventListener('click', function(){{
    if (mediaRecorder && mediaRecorder.state === 'recording') {{ stopRecording(); }}
    else {{ startRecording(); }}
  }});

  async function startRecording(){{
    $('recFeedback').textContent = '';
    try {{
      stream = await navigator.mediaDevices.getUserMedia({{ audio: true }});
    }} catch (err) {{
      $('recFeedback').innerHTML = T('noMic');
      return;
    }}
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var src = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser(); analyser.fftSize = 2048;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    src.connect(analyser);
    drawWave();

    mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=pcm') ? 'audio/webm;codecs=pcm'
             : MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
    mediaRecorder = new MediaRecorder(stream, {{ mimeType: mimeType }});
    audioChunks = [];
    mediaRecorder.addEventListener('dataavailable', function(e){{ if (e.data.size > 0) audioChunks.push(e.data); }});
    mediaRecorder.addEventListener('stop', function(){{
      stream.getTracks().forEach(function(t){{ t.stop(); }});
      if (audioCtx) {{ audioCtx.close(); audioCtx = null; }}
      cancelAnimationFrame(animFrame); analyser = null;
      clearWave();
      audioBlob = new Blob(audioChunks, {{ type: mimeType }});
      previewUrl = URL.createObjectURL(audioBlob);
      audio.src = previewUrl;
      $('recArea').hidden = true;
      $('player').hidden = false;
      $('recActions').hidden = false;
    }});
    mediaRecorder.start(100);

    $('mic').classList.add('on');
    $('mic').setAttribute('aria-label','Stop recording');
    recSeconds = 0; $('timer').innerHTML = T('recording') + '  0:00   ' + T('tapStop');
    recTick = setInterval(function(){{
      recSeconds++; $('timer').innerHTML = T('recording') + '  ' + fmt(recSeconds) + '   ' + T('tapStop');
    }}, 1000);
  }}

  function stopRecording(){{
    stopTicker();
    $('mic').classList.remove('on');
    $('mic').setAttribute('aria-label','Start recording');
    if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
  }}

  var wave = $('wave'), wctx = wave.getContext('2d');
  function clearWave(){{ wctx.clearRect(0,0,wave.width,wave.height); }}
  function drawWave(){{
    animFrame = requestAnimationFrame(drawWave);
    if (!analyser) return;
    analyser.getByteTimeDomainData(dataArray);
    wctx.clearRect(0,0,wave.width,wave.height);
    wctx.lineWidth = 2; wctx.strokeStyle = cur.colour; wctx.beginPath();
    var slice = wave.width / dataArray.length, x = 0;
    for (var i=0;i<dataArray.length;i++){{
      var v = dataArray[i]/128.0, y = v * wave.height/2;
      i === 0 ? wctx.moveTo(x,y) : wctx.lineTo(x,y);
      x += slice;
    }}
    wctx.stroke();
  }}

  $('playBtn').addEventListener('click', function(){{
    if (audio.paused) {{ audio.play(); $('playBtn').innerHTML = '&#10073;&#10073;'; }}
    else {{ audio.pause(); $('playBtn').innerHTML = '&#9654;'; }}
  }});
  audio.addEventListener('timeupdate', function(){{
    if (!audio.duration || !isFinite(audio.duration)) return;
    $('playBar').style.width = (audio.currentTime/audio.duration*100) + '%';
    $('ptime').textContent = fmt(Math.floor(audio.currentTime));
  }});
  audio.addEventListener('ended', function(){{
    $('playBtn').innerHTML = '&#9654;'; $('playBar').style.width = '0%';
  }});

  $('reRec').addEventListener('click', resetRecorder);
  $('useRec').addEventListener('click', function(){{
    if (!audioBlob) {{ $('recFeedback').innerHTML = T('noRec'); return; }}
    chosenTag = null;
    [].forEach.call($('tagRow').children, function(x){{ x.classList.remove('sel'); }});
    $('tagRow').style.setProperty('--cream', cur.colour);
    show('s-tag');
  }});

  function validEmail(v){{ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }}

  $('sendBtn').addEventListener('click', async function(){{
    var email = $('emailInput').value.trim();
    if (!email) {{ $('sendFeedback').innerHTML = T('noEmail'); return; }}
    if (!validEmail(email)) {{ $('sendFeedback').innerHTML = T('badEmail'); return; }}
    if (!audioBlob) {{ $('sendFeedback').innerHTML = T('noRec'); return; }}

    $('sendBtn').disabled = true;
    $('sendFeedback').innerHTML = T('sending');

    var type = (audioBlob.type || '').toLowerCase();
    var ext = type.indexOf('ogg') > -1 ? '.ogg' : '.webm';
    // keep recorder.html's stem so anything parsing it still works, then append the context
    var filename = 'memory-' + chosenTag + '-' + Date.now() + '-' + cur.key + '-' + curLane + ext;

    var fd = new FormData();
    fd.append('tag', chosenTag);
    fd.append('email', email);
    fd.append('file', audioBlob, filename);

    try {{
      var res = await fetch(UPLOAD_URL, {{ method: 'POST', body: fd }});
      if (res.ok) {{
        log.push({{card:cur.name, lane:curLane, tag:chosenTag, hints:(curLane==='invent'?hintsShown:0)}});
        $('thanksLine').innerHTML = (curLane === 'invent' ? T('thanksProduct') : T('thanksMemory')) +
          cur.name + T('thanksRest');
        $('sendBtn').disabled = false; $('sendFeedback').textContent = '';
        show('s-thanks');
      }} else {{
        $('sendFeedback').innerHTML = T('errServer');
        $('sendBtn').disabled = false;
        console.error(await res.text());
      }}
    }} catch (err) {{
      $('sendFeedback').innerHTML = T('errNet');
      $('sendBtn').disabled = false;
      console.error(err);
    }}
  }});

  $('thanksNext').addEventListener('click', function(){{ resetRecorder(); finish(); }});

  function finish(){{
    history = [];
    if (answered.indexOf(cur.key) < 0) {{
      answered.push(cur.key);
      var ci = CARDS.indexOf(cur), at = order.indexOf(ci);
      if (at > -1) order.splice(at, 1);
    }}
    pips();
    if (answered.length >= CARDS.length) {{ summarise(); show('s-done'); }}
    else {{ refreshDeck(); show('s-deck'); }}
  }}
  $('backToDeck').addEventListener('click', function(){{ cur = null; refreshDeck(); show('s-deck'); }});
  $('skipToDone').addEventListener('click', function(){{ summarise(); show('s-done'); }});

  function summarise(){{
    $('summary').innerHTML = '<h2>' + T('madeTitle') + '</h2>' + log.map(function(e){{
      return '<p><b>'+e.card+'</b> &middot; '+e.lane+(e.tag ? ' &middot; '+e.tag+' day' : '')+(e.hints ? ' &middot; '+e.hints+' hint'+(e.hints>1?'s':'')+' used' : '')+'</p>';
    }}).join('');
  }}

  $('again').addEventListener('click', function(){{
    answered = []; log = []; cur = null;
    order = CARDS.map(function(_,i){{ return i; }}); shuffle(order);
    $('openerCard').classList.remove('flipped');
    refreshDeck(); show('s-open');
  }});

  function applyLang(){{
    HTML = HTML_ALL[lang];
    var curKey = cur && cur.key;
    CARDS = CARD_DATA[lang];
    if (curKey) cur = CARDS.filter(function(c){{ return c.key === curKey; }})[0] || cur;
    document.documentElement.lang = (lang === 'pt') ? 'pt-PT' : 'en';
    i18n(document);
    $('langBtn').textContent = (lang === 'pt') ? 'EN' : 'PT';
    $('langBtn').setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para portugues');
    renderStack();
    if (cur) {{
      var ci = CARDS.indexOf(cur), card = $('playCard');
      if (ci > -1 && card.children.length) {{
        var wasFlipped = card.classList.contains('flipped');
        card.innerHTML = HTML[ci];
        bindCard(card);
        if (wasFlipped) card.classList.add('flipped');
        i18n(card);
      }}
    }}
    if ($('hints').children.length) {{
      var n = hintsShown; hintsShown = 0; $('hints').innerHTML = '';
      for (var i = 0; i < n; i++) $('helpBtn').click();
    }}
    if ($('script').children.length) $('script').innerHTML = SCRIPTS[curLane]();
    if ($('egs').children.length) renderEgs();
  }}
  $('langBtn').addEventListener('click', function(){{
    lang = (lang === 'pt') ? 'en' : 'pt';
    applyLang();
  }});
  (function setupFeedback(){{
    var btn = $('feedbackBtn');
    if (FEEDBACK_URL) {{ btn.href = FEEDBACK_URL; return; }}
    var body = [
      'Answer whatever you like, ignore the rest.','',
      '1. Did you record something?  yes / no / started but stopped','',
      '2. If not, where did you stop?','',
      '3. Was anything confusing or annoying?','',
      '4. Would you play another card?','',
      '5. Anything else','',
      '---','cards answered: ' + answered.length + ' of 5',
      'language: ' + lang,
      'screen: ' + window.innerWidth + 'x' + window.innerHeight,
      'browser: ' + navigator.userAgent
    ].join('\\n');
    btn.href = 'mailto:' + FEEDBACK_EMAIL
      + '?subject=' + encodeURIComponent('Sixth Product playtest')
      + '&body=' + encodeURIComponent(body);
    btn.removeAttribute('target');
  }})();

  shuffle(order); renderStack();
  applyLang();
  pips();
}})();
</script>'''

page = page.encode('ascii','xmlcharrefreplace').decode('ascii')

# swap the embedded fonts for the repo's own files and wrap as a full document
for weight, face in ((200,'ExtraLight'), (400,'Regular'), (700,'Bold')):
    page = re.sub(
        r"@font-face\{font-family:'NaNTresorM';src:url\(data:font/ttf;base64,[^)]+\) "
        r"format\('truetype'\);font-weight:%d;font-display:swap\}" % weight,
        "@font-face{font-family:'NaNTresorM';src:url('Fonts/NaNTresor/NaNTresorM-%s.ttf') "
        "format('truetype');font-weight:%d;font-display:swap}" % (face, weight), page)
page = re.sub(
    r"@font-face\{font-family:'Celescript';src:url\(data:font/ttf;base64,[^)]+\) "
    r"format\('truetype'\);font-display:swap\}",
    "@font-face{font-family:'Celescript';src:url('Fonts/Celescript.ttf') "
    "format('truetype');font-display:swap}", page)

title = re.search(r'<title>(.*?)</title>', page).group(1)
page = page.replace('<title>%s</title>\n' % title, '')

doc = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>%s &middot; Sea Shells, She Tells</title>
  <meta name="description" content="A card game from the Sea Shells, She Tells residency in Esposende. Pick a card, learn what is happening in the water, and record a speculative future product or a water memory.">
  <meta name="theme-color" content="#4B06F7">
  <link rel="canonical" href="https://shetells.stream/game.html">
  <meta property="og:title" content="%s">
  <meta property="og:description" content="Draw a card, then tell the ocean something back.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://shetells.stream/game.html">
%s
</body>
</html>
""" % (title, title, page)

out = os.path.join(ROOT, 'game.html')
io.open(out, 'w', encoding='utf-8').write(doc)
print('wrote %s  (%.0f KB)' % (out, len(doc.encode())/1024))
