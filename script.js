const orderUrl = 'https://www.ifood.com.br/delivery/salvador-ba/a-cupula-burguer-liberdade/616daa1e-019f-47ee-86a8-697ea4773263';
const products = {
  burgers: [
    {name:'Halley', price:'Burger R$ 27,90', smash:'Smash R$ 25,90', image:'assets/burger-halley.png', note:'Confira a composição completa no cardápio.'},
    {name:'Mercúrio', price:'Burger R$ 37,90', smash:'Smash R$ 29,90', image:'assets/burger-mercurio.png', note:'Confira a composição completa no cardápio.'},
    {name:'Lua', price:'Consulte no iFood', image:'assets/burger-lua.png', note:'Consulte preço e composição no iFood.'},
    {name:'Marte', price:'Burger R$ 38,90', smash:'Smash R$ 28,90', image:'assets/burger-marte.png', note:'Confira a composição completa no cardápio.'},
    {name:'Netuno', price:'Burger R$ 39,90', smash:'Smash R$ 31,90', image:'assets/burger-netuno.png', note:'Confira a composição completa no cardápio.'},
    {name:'Sol', price:'Burger R$ 42,90', smash:'Smash R$ 33,90', image:'assets/burger-sol.png', note:'Confira a composição completa no cardápio.'},
    {name:'Terra', price:'Burger R$ 44,90', smash:'Smash R$ 34,90', image:'assets/burger-terra.png', note:'Confira a composição completa no cardápio.'},
    {name:'Vênus', price:'Burger R$ 37,90', smash:'Smash R$ 33,90', image:'assets/burger-venus.png', note:'Confira a composição completa no cardápio.'}
  ],  entradas: [
    {name:'Batata rústica', price:'R$ 26,90', note:'Porção de 220 g.', image:'assets/batata-rustica.png'},
    {name:'Batata tradicional', price:'R$ 26,90', note:'Porção de 250 g.', image:'assets/batata-tradicional.jpg'},
    {name:'Coxinha de frango', price:'4 un. R$ 17,90', smash:'6 un. R$ 26,90', note:'Com requeijão.', image:'assets/coxinha-frango.png'}
  ],
  adicionais: [
    {name:'Carne', price:'Smash R$ 9,90', smash:'Burger R$ 14,90', note:'80 g Smash · 160 g Burger.', image:'assets/adicional-carne.png'},
    {name:'Bacon', price:'R$ 8,90', note:'Adicional.', image:'assets/adicional-bacon.png'},
    {name:'Queijo', price:'R$ 6,90', note:'Adicional.', image:'assets/adicional-queijo.png'},
    {name:'Salada', price:'R$ 7,90', note:'Adicional.', image:'assets/adicional-salada.png'},
    {name:'Molho incrível', price:'R$ 4,90', note:'Adicional.', image:'assets/molho-incrivel.png'},
    {name:'Molho aioli', price:'R$ 4,90', note:'Adicional.', image:'assets/molho-aioli.png'}
  ],
  bebidas: [
    {name:'Coca-Cola 350 ml', price:'R$ 9,90', note:'Lata · 350 ml', image:'https://carrefourbrfood.vtexassets.com/arquivos/ids/213629771/B2-12-156892_1.jpg?v=639107539531470000', color:'#d71920', form:'can', brand:'Coca-Cola'},
    {name:'Coca-Cola Zero 350 ml', price:'R$ 9,90', note:'Lata · 350 ml', image:'https://coopsp.vtexassets.com/arquivos/ids/249047/55573.png?v=638937351715370000', color:'#171717', form:'can', brand:'Coca-Cola Zero'},
    {name:'Guaraná Antarctica 350 ml', price:'R$ 9,90', note:'Lata · 350 ml', image:'https://savegnagoio.vtexassets.com/arquivos/ids/480136/RefrigeranteGuaranaAntarctica350ml3.jpg?v=638906838024770000', color:'#148b45', form:'can', brand:'Guaraná Antarctica'},
    {name:'Guaraná Jesus 350 ml', price:'R$ 9,90', note:'Lata · 350 ml', image:'https://imageswscdn.wslojas.com.br/files/27202/guarana-jesus-350ml-21920221634.png', color:'#e94884', form:'can', brand:'Guaraná Jesus'},
    {name:'Soda Limonada 350 ml', price:'R$ 9,90', note:'Lata · 350 ml', image:'https://azulatacarejo.agilecdn.com.br/15676.jpg?v=603-2704125858', color:'#b7d83c', form:'can', brand:'Soda Limonada'},
    {name:'Fanta 350 ml', price:'R$ 9,90', note:'Lata · 350 ml', image:'assets/fanta-350ml.png', color:'#f47b20', form:'can', brand:'Fanta'},
    {name:'Suco de uva integral 300 ml', price:'R$ 13,90', note:'Garrafa · 300 ml', image:'assets/suco-uva.png', color:'#682b9c', form:'bottle', brand:'Uva Integral'},
    {name:'Suco de frutas 500 ml', price:'R$ 16,90', note:'Garrafa · 500 ml', image:'assets/suco-frutas.png', color:'#e8a82c', form:'bottle', brand:'Suco de Frutas'},
    {name:'Suco de morango 500 ml', price:'R$ 17,90', note:'Garrafa · 500 ml', image:'assets/suco-morango.png', color:'#df4b5c', form:'bottle', brand:'Suco de Morango'},
    {name:'Água mineral 500 ml', price:'R$ 6,90', note:'Garrafa · 500 ml', image:'assets/agua-500ml.png', color:'#8bd9ed', form:'water', brand:'Água Mineral'},
    {name:'Água mineral com gás 500 ml', price:'R$ 8,90', note:'Garrafa · 500 ml', image:'assets/agua-com-gas.png', color:'#55b9d7', form:'water', brand:'Água com Gás'},
    {name:'Energético Monster 473 ml', price:'R$ 15,90', note:'Lata · 473 ml', image:'assets/monster-473ml.png', color:'#84bf28', form:'can', brand:'Monster'},
    {name:'Cerveja Heineken', price:'R$ 14,90', note:'Cerveja', image:'https://www.extrabom.com.br/uploads/produtos/original/5130_20210921120127_thumb_7896045523412_2.png', color:'#087b43', form:'beer', brand:'Heineken'},
    {name:'Cerveja zero álcool', price:'R$ 13,90', note:'Zero álcool', image:'assets/cerveja-zero-alcool.png', color:'#d6ac3c', form:'beer', brand:'Zero Álcool'}
  ],  sobremesas: [
    {name:'Milk shake', price:'R$ 28,90', note:'Consulte sabores (370 ml).', image:'assets/sobremesa-milkshake.png'},
    {name:'Sundae', price:'R$ 18,90', note:'Sobremesa gelada.', image:'assets/sobremesa-sundae.png'},
    {name:'Cascão', price:'R$ 13,90', note:'Sorvete no cascão.', image:'assets/sobremesa-cascao.png'},
    {name:'Casquinha', price:'R$ 7,90', note:'Sorvete na casquinha.', image:'assets/sobremesa-casquinha.png'}
  ]
};

function photoUrl(id, item) {
  if (id.startsWith("assets/") || id.startsWith("http")) return id;
  if (id.startsWith("drink-") && item) return beverageArtwork(item);
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
}

function beverageArtwork(item) {
  const stars = [[44,48,2],[108,91,1.5],[690,70,2],[720,214,1.5],[88,390,2],[676,442,2],[300,68,1.5],[504,458,1.5],[205,435,1.5],[565,100,1.5]];
  const starMarkup = stars.map(([x,y,r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".8"/>`).join('');
  const isCan = item.form === 'can';
  const isWater = item.form === 'water';
  const x = isCan ? 276 : 302, width = isCan ? 216 : 164;
  const labelSize = item.brand.length > 14 ? 17 : item.brand.length > 10 ? 20 : 25;
  let packageShape = '';
  if (isCan) packageShape = `<rect x="${x}" y="106" width="${width}" height="320" rx="25" fill="url(#pack)" stroke="#ffffff55" stroke-width="3"/><ellipse cx="384" cy="109" rx="${width/2}" ry="15" fill="#d9dce0"/><ellipse cx="384" cy="109" rx="${width/2-9}" ry="9" fill="#828a94"/><ellipse cx="384" cy="426" rx="${width/2}" ry="14" fill="#303640"/><rect x="${x+8}" y="143" width="${width-16}" height="245" rx="14" fill="${item.color}" opacity=".88"/>`;
  else if (isWater) packageShape = `<path d="M350 91h68v34l22 25v241q0 28-27 28h-58q-27 0-27-28V150l22-25z" fill="url(#pack)" stroke="#eaf9ff99" stroke-width="4"/><rect x="353" y="72" width="62" height="28" rx="8" fill="#51b9d2"/><rect x="337" y="227" width="94" height="114" rx="8" fill="${item.color}" opacity=".78"/>`;
  else packageShape = `<path d="M350 84h68v36l22 27v244q0 28-27 28h-58q-27 0-27-28V147l22-27z" fill="url(#pack)" stroke="#ffffff55" stroke-width="4"/><rect x="353" y="64" width="62" height="31" rx="8" fill="#d9dce0"/><rect x="337" y="223" width="94" height="116" rx="9" fill="${item.color}" opacity=".94"/>`;
  const labelY = isCan ? 267 : 270;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 512"><defs><linearGradient id="space" x2="1" y2="1"><stop stop-color="#03071d"/><stop offset=".55" stop-color="#10154d"/><stop offset="1" stop-color="#210d39"/></linearGradient><radialGradient id="nebula"><stop stop-color="#842cff" stop-opacity=".48"/><stop offset="1" stop-color="#172cff" stop-opacity="0"/></radialGradient><linearGradient id="pack" x2="1"><stop stop-color="#ffffff55"/><stop offset=".15" stop-color="${item.color}"/><stop offset=".76" stop-color="${item.color}"/><stop offset="1" stop-color="#00000077"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="32"/></filter><filter id="shadow"><feGaussianBlur stdDeviation="12"/></filter></defs><rect width="768" height="512" fill="url(#space)"/><ellipse cx="142" cy="130" rx="194" ry="128" fill="url(#nebula)"/><ellipse cx="650" cy="383" rx="210" ry="145" fill="url(#nebula)"/><ellipse cx="384" cy="452" rx="130" ry="17" fill="#000" opacity=".58" filter="url(#shadow)"/>${starMarkup}${packageShape}<text x="384" y="${labelY}" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-weight="700" font-size="${labelSize}">${item.brand}</text><text x="384" y="${labelY+31}" text-anchor="middle" fill="#ffffffdd" font-family="Arial,sans-serif" font-size="14">${item.note.replace('Lata · ','').replace('Garrafa · ','')}</text></svg>`)}`;
}
function renderProducts(category) {
  const grid = document.querySelector('#product-grid');
  grid.innerHTML = products[category].map((item, index) => `
    <article class="product-card ${category === 'bebidas' ? 'beverage-card' : ''}">
      <div class="product-image"><img loading="lazy" src="${photoUrl(item.image, item)}" alt="${item.name}" onerror="this.src='assets/cardapio-burgues.png'"><span class="product-number">${String(index + 1).padStart(2, '0')}</span></div>
      <div class="product-info"><h3>${item.name}</h3><p>${item.note}</p><div class="product-bottom"><div class="product-price">${item.price}${item.smash ? `<br><small>${item.smash}</small>` : ''}</div><a class="product-order" href="${orderUrl}" target="_blank" rel="noopener noreferrer" aria-label="Pedir ${item.name} pelo iFood"><svg class="product-order-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></a></div></div>
    </article>`).join('');
}

document.querySelectorAll('.menu-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderProducts(tab.dataset.category);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const visitVideo = document.querySelector('.visit-background');
if (visitVideo) {
  visitVideo.addEventListener('timeupdate', () => {
    if (Number.isFinite(visitVideo.duration) && visitVideo.duration - visitVideo.currentTime < 0.6) {
      visitVideo.classList.add('is-restarting');
    }
  });
  visitVideo.addEventListener('ended', () => {
    visitVideo.currentTime = 0;
    visitVideo.play().catch(() => {});
  });
  visitVideo.addEventListener('seeked', () => {
    requestAnimationFrame(() => visitVideo.classList.remove('is-restarting'));
  });
}

const heroAnimation = document.querySelector('.hero-animation');
const keyedHeroCanvas = document.querySelector('.hero-animation-keyed');
const keyedHeroContext = keyedHeroCanvas?.getContext('2d', { willReadFrequently: true });
const heroBurgerShadow = document.querySelector('.hero-burger-shadow');
function updateHeroBurgerShadow() {
  if (!heroAnimation || !heroBurgerShadow) return;
  const duration = Number.isFinite(heroAnimation.duration) ? heroAnimation.duration : 0;
  const fadeDuration = duration ? Math.min(7.2, Math.max(5, duration * 0.65)) : 5.5;
  const progress = Math.max(0, Math.min(1, (heroAnimation.currentTime - 0.04) / fadeDuration));
  const easedProgress = progress * progress * (3 - 2 * progress);
  const maxOpacity = window.matchMedia('(max-width: 650px)').matches ? 0.96 : 0.98;
  heroBurgerShadow.style.opacity = String(maxOpacity * (1 - easedProgress));
}
let keyedHeroFrameRequest = 0;
function renderKeyedHeroFrame() {
  keyedHeroFrameRequest = 0;
  if (!heroAnimation || !keyedHeroCanvas || !keyedHeroContext || !window.matchMedia('(max-width: 650px)').matches) return;
  if (heroAnimation.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && heroAnimation.videoWidth && heroAnimation.videoHeight) {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
    const width = Math.max(1, Math.round(keyedHeroCanvas.clientWidth * pixelRatio));
    const height = Math.max(1, Math.round(keyedHeroCanvas.clientHeight * pixelRatio));
    if (keyedHeroCanvas.width !== width || keyedHeroCanvas.height !== height) {
      keyedHeroCanvas.width = width;
      keyedHeroCanvas.height = height;
    }
    keyedHeroContext.clearRect(0, 0, width, height);
    const videoRatio = heroAnimation.videoWidth / heroAnimation.videoHeight;
    const canvasRatio = width / height;
    let drawWidth = width;
    let drawHeight = height;
    if (videoRatio < canvasRatio) drawWidth = height * videoRatio;
    else drawHeight = width / videoRatio;
    keyedHeroContext.drawImage(heroAnimation, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);

    const frame = keyedHeroContext.getImageData(0, 0, width, height);
    const pixels = frame.data;
    for (let index = 0; index < pixels.length; index += 4) {
      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const brightness = Math.max(red, green, blue);
      const chroma = brightness - Math.min(red, green, blue);
      const neutralKey = Math.max(0, Math.min(1, (brightness - 38) / 48));
      const colorKey = Math.max(0, Math.min(1, (chroma - 8) / 28));
      const neutralOpacity = neutralKey * neutralKey * (3 - 2 * neutralKey);
      const colorOpacity = colorKey * colorKey * (3 - 2 * colorKey);
      const opacity = Math.max(neutralOpacity, colorOpacity);
      pixels[index + 3] = Math.round(pixels[index + 3] * opacity);
    }
    keyedHeroContext.putImageData(frame, 0, 0);
  }
  if (!heroAnimation.paused && !heroAnimation.ended) keyedHeroFrameRequest = requestAnimationFrame(renderKeyedHeroFrame);
}
function scheduleKeyedHeroFrame() {
  if (keyedHeroFrameRequest || !window.matchMedia('(max-width: 650px)').matches) return;
  keyedHeroFrameRequest = requestAnimationFrame(renderKeyedHeroFrame);
}
if (heroAnimation) {
  heroAnimation.addEventListener('play', scheduleKeyedHeroFrame);
  heroAnimation.addEventListener('timeupdate', scheduleKeyedHeroFrame);
  heroAnimation.addEventListener('pause', scheduleKeyedHeroFrame);
  heroAnimation.addEventListener('play', updateHeroBurgerShadow);
  heroAnimation.addEventListener('timeupdate', updateHeroBurgerShadow);
  heroAnimation.addEventListener('loadedmetadata', updateHeroBurgerShadow);
  heroAnimation.addEventListener('seeked', updateHeroBurgerShadow);
  window.addEventListener('resize', () => {
    scheduleKeyedHeroFrame();
    updateHeroBurgerShadow();
  });
  heroAnimation.addEventListener('timeupdate', () => {
    if (Number.isFinite(heroAnimation.duration) && heroAnimation.duration - heroAnimation.currentTime < 0.6) {
      heroAnimation.classList.add('is-restarting');
      keyedHeroCanvas?.classList.add('is-restarting');
    }
  });
  heroAnimation.addEventListener('ended', () => {
    heroAnimation.currentTime = 0;
    heroAnimation.play().catch(() => {});
  });
  heroAnimation.addEventListener('seeked', () => {
    requestAnimationFrame(() => {
      heroAnimation.classList.remove('is-restarting');
      keyedHeroCanvas?.classList.remove('is-restarting');
      scheduleKeyedHeroFrame();
    });
  });
  scheduleKeyedHeroFrame();
  updateHeroBurgerShadow();
}

const heroBackgroundVideo = document.querySelector('.hero-background-video');
if (heroBackgroundVideo) {
  heroBackgroundVideo.addEventListener('timeupdate', () => {
    if (Number.isFinite(heroBackgroundVideo.duration) && heroBackgroundVideo.duration - heroBackgroundVideo.currentTime < 0.85) {
      heroBackgroundVideo.classList.add('is-restarting');
    }
  });
  heroBackgroundVideo.addEventListener('ended', () => {
    heroBackgroundVideo.currentTime = 0;
    heroBackgroundVideo.play().catch(() => {});
  });
  heroBackgroundVideo.addEventListener('seeked', () => {
    requestAnimationFrame(() => heroBackgroundVideo.classList.remove('is-restarting'));
  });
}

const heroSection = document.querySelector('.hero');
const heroSlideButtons = document.querySelectorAll('[data-hero-slide]');
const heroStepButtons = document.querySelectorAll('[data-hero-step]');
const reviewSlide = document.querySelector('.hero-review-slide');
if (heroSection && heroSlideButtons.length && reviewSlide) {
  let activeHeroSlide = 0;
  const showHeroSlide = (index) => {
    activeHeroSlide = (index + heroSlideButtons.length) % heroSlideButtons.length;
    const showReviews = activeHeroSlide === 1;
    heroSection.classList.toggle('reviews-active', showReviews);
    reviewSlide.setAttribute('aria-hidden', String(!showReviews));
    heroSlideButtons.forEach((button, buttonIndex) => {
      const active = buttonIndex === activeHeroSlide;
      button.classList.toggle('active', active);
      button.setAttribute('aria-current', String(active));
    });
    if (heroAnimation) {
      if (showReviews) heroAnimation.pause();
      else heroAnimation.play().catch(() => {});
    }
  };
  heroSlideButtons.forEach((button) => button.addEventListener('click', () => showHeroSlide(Number(button.dataset.heroSlide))));
  heroStepButtons.forEach((button) => button.addEventListener('click', () => showHeroSlide(activeHeroSlide + Number(button.dataset.heroStep))));
}

const aboutSection = document.querySelector('#sobre');
const aboutTrack = document.querySelector('#sobre-track');
const aboutCanvas = document.querySelector('#about-scroll-canvas');
if (aboutSection && aboutTrack && aboutCanvas) {
  const aboutContext = aboutCanvas.getContext('2d', { alpha: false });
  const totalFrames = 190;
  const framesPerSheet = 20;
  const frameWidth = 540;
  const frameHeight = 720;
  const sheetColumns = 5;
  const spriteSheets = new Map();
  let aboutFrame = 0;
  let scrollFrameRequest = 0;

  function loadSpriteSheet(sheetNumber) {
    if (sheetNumber < 0 || sheetNumber >= Math.ceil(totalFrames / framesPerSheet)) return null;
    if (spriteSheets.has(sheetNumber)) return spriteSheets.get(sheetNumber);
    const image = new Image();
    image.src = `assets/salt-frames/sequence-${String(sheetNumber + 1).padStart(2, '0')}.jpg`;
    image.onload = drawAboutFrame;
    spriteSheets.set(sheetNumber, image);
    if (spriteSheets.size > 3) {
      const farthest = [...spriteSheets.keys()].sort((a, b) =>
        Math.abs(b - Math.floor(aboutFrame / framesPerSheet)) - Math.abs(a - Math.floor(aboutFrame / framesPerSheet))
      )[0];
      if (farthest !== sheetNumber) spriteSheets.delete(farthest);
    }
    return image;
  }

  function drawAboutFrame() {
    const sheetNumber = Math.floor(aboutFrame / framesPerSheet);
    const image = loadSpriteSheet(sheetNumber);
    if (!image || !image.complete || !image.naturalWidth) return;
    const tile = aboutFrame % framesPerSheet;
    const sourceX = (tile % sheetColumns) * frameWidth;
    const sourceY = Math.floor(tile / sheetColumns) * frameHeight;
    const width = aboutCanvas.width || frameWidth;
    const height = aboutCanvas.height || frameHeight;
    const targetRatio = width / height;
    const frameRatio = frameWidth / frameHeight;
    let cropX = sourceX;
    let cropY = sourceY;
    let cropWidth = frameWidth;
    let cropHeight = frameHeight;
    if (frameRatio > targetRatio) {
      cropWidth = frameHeight * targetRatio;
      cropX += (frameWidth - cropWidth) / 2;
    } else {
      cropHeight = frameWidth / targetRatio;
      cropY += (frameHeight - cropHeight) / 2;
    }
    aboutContext.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, width, height);
    loadSpriteSheet(sheetNumber + 1);
  }

  function updateAboutFrame() {
    const trackTop = aboutTrack.getBoundingClientRect().top;
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
    const scrollDistance = Math.max(1, aboutTrack.offsetHeight - aboutSection.offsetHeight);
    const progress = Math.max(0, Math.min(1, (headerHeight - trackTop) / scrollDistance));
    aboutFrame = Math.round(progress * (totalFrames - 1));
    drawAboutFrame();
  }

  function scheduleAboutFrame() {
    if (scrollFrameRequest) return;
    scrollFrameRequest = requestAnimationFrame(() => {
      scrollFrameRequest = 0;
      updateAboutFrame();
    });
  }

  function resizeAboutCanvas() {
    const bounds = aboutCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    aboutCanvas.width = Math.max(1, Math.round(bounds.width * pixelRatio));
    aboutCanvas.height = Math.max(1, Math.round(bounds.height * pixelRatio));
    scheduleAboutFrame();
  }

  window.addEventListener('scroll', scheduleAboutFrame, { passive: true });
  window.addEventListener('resize', resizeAboutCanvas);
  resizeAboutCanvas();
}
renderProducts('burgers');

















