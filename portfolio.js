TweenMax.to('.loading-screen', 4, {
  delay: 1.3,
  top: '-200%',
  ease: Expo.easeInOut,
});

TweenMax.from('.home', 4, {
  delay: 5.3,
  opacity: 0,
  // y: 100,
  ease: Expo.easeInOut,
});

var t0 = new TimelineMax();

t0.from('.circles .circle-multiple-1', 0, {
  delay: 0,
  opacity: 0,
  y: 40,
  // x: 500,
  ease: Expo.easeInOut,
})
  .from(
    '.circles .circle-multiple-2',
    0,
    {
      delay: 0,
      opacity: 0,
      y: 40,
      // x: 40,
      ease: Expo.easeInOut,
    },
    '-=5'
  )
  .to('.circles .circle-multiple', 0, {
    delay: 0,
    y: -100,
    ease: Expo.easeInOut,
  })
  .to('.circles .circle-multiple-1', 1, {
    delay: 0.4,
    x: -20,
    y: -500,
    ease: Expo.easeInOut,
  })
  .to('.circle-multiple-1 .circle', 1, {
    height: '35rem',
    width: '35rem',
    opacity: 0,
    ease: Expo.easeInOut,
  })
  .to(
    '.circles .circle-multiple-2',
    1,
    {
      delay: 0.9,
      x: 200,
      ease: Expo.easeInOut,
    },
    '-=5'
  )
  .to('.circles', 1, {
    y: '100rem',
    ease: Expo.easeInOut,
  })
  .to('.circles .circle-multiple-1', 1, {
    delay: 0.4,
    y: -100,
    x: 0,
    opacity: 1,
    ease: Expo.easeInOut,
  })
  .to('.circle-multiple-1 .circle', 1, {
    height: '15rem',
    width: '15rem',
    opacity: 1,
    ease: Expo.easeInOut,
  });

var whiteModeToggler = document.getElementById('options');
var bodyWhite = document.getElementById('hero');
var textBlackTitle = document.getElementById('title');
var textBlackParagraph = document.getElementById('tagline');
var btnOneLink = document.querySelector('.home');
var btnTwoLink = document.querySelector('.portfolio');
var toggle = false;

whiteModeToggler.addEventListener('click', function () {
  bodyWhite.classList.toggle('white-background');
  textBlackTitle.classList.toggle('black-text');
  textBlackParagraph.classList.toggle('black-text');
  // btnOne.classList.toggle('white-btn');
  btnOneLink.classList.toggle('black-text');
  btnTwoLink.classList.toggle('black-text');

  function animation() {
    if (toggle === false) {
      TweenMax.from('.white-background', 1, {
        delay: 0,
        y: 999,
        ease: Expo.easeInOut,
      });
      toggle = true;
    } else {
      TweenMax.from('.hero', 1, {
        delay: 0.3,
        y: -999,
        ease: Expo.easeInOut,
      });
      toggle = false;
    }
  }

  animation();
});

// Play videos
const videos = document.querySelectorAll('.thumbnail');
const mainVideo = document.getElementById('mainVideo');
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener('click', clickHandler, false);
}

function clickHandler(el) {
  mainVideo.src = el.srcElement.currentSrc;
  mainVideo.style.display = 'block';
  mainVideo.requestFullscreen();

  mainVideo.addEventListener('fullscreenchange', onFullScreen);
}

function onFullScreen(e) {
  const isFullScreenNow = document.webkitFullscreenElement !== null;

  if (!isFullScreenNow) {
    mainVideo.style.display = 'none';
  }
}
