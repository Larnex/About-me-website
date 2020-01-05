let h1 = document.querySelector('.logo-title');

let text = h1.textContent.split("");

let result = "";

text.forEach(function (char) {
      result += (char.trim() === "") ? "" : "<span>" + char + "</span>";
});

h1.innerHTML = result;

TweenMax.to(".loading-screen", 4, {
      delay: 5,
      top: "-200%",
      ease: Expo.easeInOut
});

TweenMax.to(".circles", 4, {
      delay: 5,
      marginLeft: 0,
      ease: Expo.easeInOut
});

// TweenMax.fro,(".circle-multiple", 2, {
//       delay: 0.4,
//       // opacity: 0,
//       // y: 40,
//       ease: Expo.easeInOut
// });


// TweenMax.from(".logo", 10, {
//       delay: 12,
//       opacity: 0,
//       y: 20,
//       ease: Expo.easeInOut
// });

TweenMax.from(".logo span:nth-child(1)", 3, {
      delay: 11.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
TweenMax.from(".logo span:nth-child(2)", 3, {
      delay: 12,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
TweenMax.from(".logo span:nth-child(3)", 3, {
      delay: 12.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
TweenMax.from(".logo span:nth-child(4)", 3, {
      delay: 13,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
TweenMax.from(".logo span:nth-child(5)", 3, {
      delay: 13.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
TweenMax.from(".logo span:nth-child(6)", 3, {
      delay: 14,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});


TweenMax.from(".contact", 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".options", 3, {
      delay: 8.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
}, 0.1);

TweenMax.from(".menu", 3, {
      delay: 8.8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".p1", 3, {
      delay: 9,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".p2", 3, {
      delay: 9.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
      delay: 9.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from("#two", 3, {
      delay: 9.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".about-me", 4, {
      delay: 6.3,
      opacity: 0,
      // y: 100,
      ease: Expo.easeInOut
});

TweenMax.from(".portfolio", 4, {
      delay: 6.6,
      opacity: 0,
      // y: 100,
      ease: Expo.easeInOut
});

var t0 = new TimelineMax();

t0.from(".circles .circle-multiple-1", 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      // x: 500,
      ease: Expo.easeInOut
}).from(".circles .circle-multiple-2", 4, {
      delay: 0.9,
      opacity: 0,
      y: 40,
      // x: 40,
      ease: Expo.easeInOut
}, "-=5").to(".circles .circle-multiple-1", 4, {
      delay: 0.4,
      x: 0,
      ease: Expo.easeInOut
}).to(".circles .circle-multiple-2", 4, {
      delay: 0.9,
      x: 200,
      ease: Expo.easeInOut
}, "-=5");


var t1 = new TimelineMax();

// t1.from(".multiple-circle .circle", 4, {
//       delay: 0.4,
//       opacity: 0,
//       y: 40,
//       ease: Expo.easeInOut
// }).to(".multiple-circle .circle", 4, {
//       delay: 0.4,
//       x: 40,
//       ease: Expo.easeInOut
// });




t1.from(".ringOne", 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
}).from(".ringTwo", 4, {
      delay: 0.9,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
}, "-=5").to(".ringOne", 4, {
      delay: 0.4,
      x: 40,
      ease: Expo.easeInOut
}).to(".ringTwo", 4, {
      delay: 0.9,
      x: 40,
      ease: Expo.easeInOut
}, "-=5");






var textWrapper = document.querySelector('.ml7 .letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({
            loop: false
      })
      .add({
            targets: '.letter',
            translateY: ["1.76rem", 0],
            translateX: ["0.88rem", 0],
            translateZ: 0,
            rotateZ: [90, 0],
            duration: 750,
            easing: "easeOutExpo",
            delay: function (el, i) {
                  return 9000 + 50 * i;
            }
      });


// white mode 

var whiteModeToggler = document.getElementById('options');
var bodyWhite = document.getElementById('body');
var textBlackTitle = document.getElementById('title');
var textBlackParagraph = document.getElementById('tagline');
var textBlackParagraph2 = document.querySelector('.p2');
var textBlackLogoTitle = document.getElementById('logo-title');
// var btnOne = document.querySelector('.btn-one');
var btnOneLink = document.querySelector('.about-me');
var btnTwoLink = document.querySelector('.portfolio');
var toggle = false;



whiteModeToggler.addEventListener('click', function () {
      bodyWhite.classList.toggle('white-background');
      textBlackTitle.classList.toggle('black-text');
      textBlackParagraph2.classList.toggle('black-text');
      textBlackParagraph.classList.toggle('black-text');
      textBlackLogoTitle.classList.toggle('black-text');
      // btnOne.classList.toggle('white-btn');
      btnOneLink.classList.toggle('black-text');
      btnTwoLink.classList.toggle('black-text');



      function animation() {
            if (toggle === false) {

                  // TweenMax.to(".loading-screen", 0.3, {
                  //       delay: 0,
                  //       top: "-110%",
                  //       ease: Expo.easeInOut
                  // });


                  TweenMax.from(".white-background", 1.5, {
                        delay: 0,
                        // opacity: 0,
                        y: 1000,
                        ease: Expo.easeInOut
                  });
                  toggle = true;


            } else {

                  TweenMax.from(".body", 1.5, {
                        delay: 0.3,
                        // opacity: 0,
                        y: -1000,
                        ease: Expo.easeInOut
                  });
                  toggle = false;
            }

      }

      animation();


});

// btnOneLink.addEventListener('click', function () {
//       var t1 = new TimelineMax();

//       t1.from(".circles .circle-multiple-1", 0.1, {
//             delay: 0.1,
//             opacity: 1,
//             y: 140,
//             ease: Expo.easeInOut
//       }).to(".circles .circle-multiple-1", 0.1, {
//             delay: 0.1,
//             x: 140,
//             ease: Expo.easeInOut
//       })
// });