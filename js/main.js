let mychangeableInnerHeight = innerHeight;
if (mychangeableInnerHeight > 450) {
  $(".my-list").removeClass("media-list");
}

const mediaQueryList = window.matchMedia("(max-height: 450px)");
mediaQueryList.addEventListener("change", function (e) {
  if (e.matches) {
    $(".my-list").removeClass("reverse-animate-my-list");
    $(".my-list a").removeClass("reverse-animate-my-anchors");
    $(".my-list").addClass("animate-my-list");
    $(".my-list a").addClass("animate-my-anchors");
  } else {
    $(".my-list").removeClass("animate-my-list");
    $(".my-list a").removeClass("animate-my-anchors");
    $(".my-list").addClass("reverse-animate-my-list");
    $(".my-list a").addClass("reverse-animate-my-anchors");
  }
});

$(".my-open-btn").click(function () {
  collapseMyNav();
});
$(".close-ico").click(function () {
  collapseMyNav();
});

const navWidth = $(".contain-anchors").width();

function collapseMyNav() {
  if ($(".contain-anchors").css("left") == "0px") {
    $(".contain-anchors").animate({ left: -navWidth }, 1000);
    $(".my-home").animate({ marginLeft: 0 }, 1000);
  } else {
    $(".contain-anchors").animate({ left: 0 }, 1000);
    $(".my-home").animate({ marginLeft: navWidth }, 1000);
  }
}

let mySingersArray = document.querySelectorAll(".singer-head");
let mySingersBodyArray = document.querySelectorAll(".singer-body");

let myActiveElements = [0];
for (let i = 0; i < mySingersArray.length; i++) {
  mySingersArray[i].addEventListener("click", function () {
    if (myActiveElements.length < 2) {
      myActiveElements.push(i);
    } else {
      myActiveElements.shift();
      myActiveElements.push(i);
    }
    $(".singer-body").eq(i).slideToggle(500);
    if (myActiveElements[1] + 1 && myActiveElements[0] != myActiveElements[1]) {
      $(".singer-body").eq(myActiveElements[0]).slideUp(500);
    }
  });
}

//  Handle Count Down

let party = setInterval(function () {
  const currentDate = new Date().getTime();
  const partyDate = new Date("May 02, 2023 21:00:00").getTime();
  const durationOfCount = partyDate - currentDate;
  let days = Math.floor(durationOfCount / (1000 * 24 * 60 * 60));
  let hours = Math.floor(
    (durationOfCount % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((durationOfCount % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((durationOfCount % (1000 * 60)) / 1000);
  displayCounter(days, hours, minutes, seconds);
  if (durationOfCount < 0) {
    clearInterval(party);
    $(".my-row").html("<h3>OH! Amazing Party has been0 Started 😉</h3>");
  }
}, 1000);

function displayCounter(day, hours, minutes, seconds) {
  $(".my-day").text(`${day}`);
  $(".my-hours").text(`${hours}`);
  $(".my-min").text(`${minutes}`);
  $(".my-sec").text(`${seconds}`);
}

$("textarea").keyup(function () {
  $(".my-word-span").text(`${100 - $("textarea").val().length}`);
  if ($("textarea").val().length > 100) {
    $(".my-word-span").text(`your available character finished`);
  }
});

// $(".contain-my-nav-home").offset().top();
offsetOfHome = $(".contain-my-nav-home").offset().top;
offsetOfDuration = $(".my-duration").offset().top;
offsetOfCount = $(".count-down").offset().top;
offsetOfInfo = $(".my-info").offset().top;
$(".my-list a").click(function () {
  $("body, html").animate(
    { scrollTop: $($(this).attr("href")).offset().top },
    1000
  );
});
