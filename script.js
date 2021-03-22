let h1 = document.querySelector(".logo-title");

let text = h1.textContent.split("");

let result = "";

text.forEach(function (char) {
  result += char.trim() === "" ? "" : "<span>" + char + "</span>";
});

h1.innerHTML = result;

TweenMax.to(".loading-screen", 2, {
  delay: 2,
  top: "-200%",
  ease: Expo.easeInOut,
});

TweenMax.to(".circles", 2, {
  delay: 2,
  marginLeft: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".logo span:nth-child(1)", 1, {
  delay: 2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".logo span:nth-child(2)", 1, {
  delay: 3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".logo span:nth-child(3)", 1, {
  delay: 3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".logo span:nth-child(4)", 1, {
  delay: 3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".logo span:nth-child(5)", 1, {
  delay: 3.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".logo span:nth-child(6)", 1, {
  delay: 4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".contact", 3, {
  delay: 4.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".options", 3, {
  delay: 4.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    delay: 4.7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut,
  },
  0.1
);

TweenMax.from(".menu", 3, {
  delay: 4.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".p1", 3, {
  delay: 4.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".p2", 3, {
  delay: 4.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from("#one", 1.5, {
  delay: 4.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from("#two", 1.5, {
  delay: 4.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".about-me", 4, {
  delay: 2.3,
  opacity: 0,
  // y: 100,
  ease: Expo.easeInOut,
});

TweenMax.from(".portfolio", 4, {
  delay: 2.6,
  opacity: 0,
  // y: 100,
  ease: Expo.easeInOut,
});

var t0 = new TimelineMax();

t0.from(".circles .circle-multiple-1", 2, {
  delay: 0.4,
  opacity: 0,
  y: 40,
  // x: 500,
  ease: Expo.easeInOut,
})
  .from(
    ".circles .circle-multiple-2",
    2,
    {
      delay: 0.9,
      opacity: 0,
      y: 40,
      // x: 40,
      ease: Expo.easeInOut,
    },
    "-=5"
  )
  .to(".circles .circle-multiple-1", 2, {
    delay: 0.4,
    x: 0,
    ease: Expo.easeInOut,
  })
  .to(
    ".circles .circle-multiple-2",
    2,
    {
      delay: 0.9,
      x: 200,
      ease: Expo.easeInOut,
    },
    "-=5"
  );

var t1 = new TimelineMax();

t1.from(".ringOne", 2, {
  delay: 0.4,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut,
})
  .from(
    ".ringTwo",
    2,
    {
      delay: 0.9,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut,
    },
    "-=5"
  )
  .to(".ringOne", 2, {
    delay: 0.4,
    x: 40,
    ease: Expo.easeInOut,
  })
  .to(
    ".ringTwo",
    4,
    {
      delay: 0.9,
      x: 40,
      ease: Expo.easeInOut,
    },
    "-=5"
  );

var textWrapper = document.querySelector(".ml7 .letter");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: ".letter",
    translateY: ["1.76rem", 0],
    translateX: ["0.88rem", 0],
    translateZ: 0,
    rotateZ: [90, 0],
    duration: 350,
    easing: "easeOutExpo",
    delay: function (el, i) {
      return 3000 + 50 * i;
    },
  });

// white mode

var whiteModeToggler = document.getElementById("options");
var bodyWhite = document.getElementById("body");
var textBlackTitle = document.getElementById("title");
var textBlackParagraph = document.getElementById("tagline");
var textBlackParagraph2 = document.querySelector(".p2");
var textBlackLogoTitle = document.getElementById("logo-title");
// var btnOne = document.querySelector('.btn-one');
var btnOneLink = document.querySelector(".about-me");
var btnTwoLink = document.querySelector(".portfolio");
var toggle = false;

whiteModeToggler.addEventListener("click", function () {
  bodyWhite.classList.toggle("white-background");
  textBlackTitle.classList.toggle("black-text");
  textBlackParagraph2.classList.toggle("black-text");
  textBlackParagraph.classList.toggle("black-text");
  textBlackLogoTitle.classList.toggle("black-text");
  // btnOne.classList.toggle('white-btn');
  btnOneLink.classList.toggle("black-text");
  btnTwoLink.classList.toggle("black-text");

  function animation() {
    if (toggle === false) {
      TweenMax.from(".white-background", 1.5, {
        delay: 0,
        // opacity: 0,
        y: 1000,
        ease: Expo.easeInOut,
      });
      toggle = true;
    } else {
      TweenMax.from(".body", 1.5, {
        delay: 0.3,
        // opacity: 0,
        y: -1000,
        ease: Expo.easeInOut,
      });
      toggle = false;
    }
  }

  animation();
});
