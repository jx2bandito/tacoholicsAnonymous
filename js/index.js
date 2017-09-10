$(document).ready(function() {
  var $links = $("#links");
  var switchOn;
  var $switchText = $("#switchText");
  var $whoWeAre = $("#whoWeAre");
  var $weHelp = $("#weHelp");
  var $testSec = $("#testSec");
  var $testBox = $("#testBox");
  var $testTop = $("#testTop");
  var $contactSec = $("#contactSec");
  var $ddList = $(".ddList");
  var $home = $("#home");
  var $whoAre = $("#whoAre");
  var $canHelp = $("#canHelp");
  var $testimonial = $("#testimonial");
  var $contactForm = $("#contactForm").children();
  var onApple = ((navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) || navigator.userAgent.indexOf("iPhone") != -1);
  //$("#debug").html(JSON.stringify(onApple));
  
  if(onApple){
    $(".parallax").addClass("noParallax");
  }
  
  setInterval(function() {
    if (switchOn) {
      $switchText.html("time");
      switchOn = false;
    } else {
      $switchText.html("taco");
      switchOn = true;
    }

  }, 3000);

  
  $links.children().on('click', function() {
    var scrollTo = 0;
    var thisID = this.id;
    var speed = 1500;
    var easing = "easeInOutQuart";
    
    switch (thisID) {
      case "home":
        $("html, body").stop().animate({
          scrollTop: scrollTo
        }, speed, easing);
        return false;
      case "whoAre":
        scrollTo = $whoWeAre.offset().top - 75;
        $("html, body").stop().animate({
          scrollTop: scrollTo
        }, speed, easing);
        $whoWeAre.children().addClass("transformView");
        return false;
      case "canHelp":
        $weHelp.children().addClass("transformView");
        scrollTo = $weHelp.offset().top - 75;
        $("html, body").stop().animate({
          scrollTop: scrollTo
        }, speed, easing);
        return false;
      case "testimonial":
        scrollTo = $testSec.offset().top - 75;
        $testBox.animate({scrollTop: 0}, "slow");
        $("html, body").stop().animate({
          scrollTop: scrollTo
        }, speed, easing);
        return false;
      case "contact":
        scrollTo = $contactSec.offset().top - 75;
        $("html, body").stop().animate({
          scrollTop: scrollTo
        }, speed, easing);
    }
  });

  
    $ddList.on("click", function(){
      $(".dropdown-toggle").dropdown("toggle");
      var thisID = this.id;
      switch(thisID){
        case "ddHome":
          $home.click();
          return false;
        case "ddWho":
          $whoAre.click();
          return false;
        case "ddHelp":
          $canHelp.click();
          return false;
        case "ddTest":
          $testimonial.click();
          return false;
        case "ddContact":
          $("#contact").click();
          return false;
        default:
          return false;
                   }
    });
  
  $testTop.on("click", function(){
    $testimonial.click();
  });
  
  
  $(window, "body, html").on("scroll", function() {
    var helpPos = $weHelp.offset().top;
    var whoPos = $whoWeAre.offset().top;
    var testPos = $testSec.offset().top;
    var contactPos = $("#contactSec").offset().top;
    var bodyScroll = $("body").scrollTop() || $("html").scrollTop();
    var bodyHalf = $("body").height()/2;
    if (Math.abs(whoPos - bodyScroll) <= 500) {
      $whoWeAre.children().addClass("transformView");
    }
    /*if (Math.abs(helpPos - bodyScroll) <= 500) {
      $weHelp.children().addClass("transformView");
    }*/
    if(Math.abs(testPos - bodyScroll) <= 800){
      $testSec.find("*").addClass("fadeIn");
    }
    if(Math.abs(contactPos - bodyScroll) <=800){
      $contactForm.addClass("popOut");
    }
    if(bodyScroll>bodyHalf){
      $("html").addClass("invertScrollBar");
    }
    if(bodyScroll<bodyHalf){
      $("html").removeClass("invertScrollBar");
    }
  });
  

});

var app = angular.module("tacoApp", []);
app.controller("tacoControl", ["$scope", function($scope) {
  var $ngJacob = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/BitmojiMe_zpsfmg7x2z7.png",
    "name": "-Jacob",
    "message": "I didn't want to admit that I had a problem, but it was the first step. I spent so much time and resources on tacos that I began to ignore sushi. My time with Tacoholics Anonymous, taught me that there was more to life than just tacos.",
    "orientation": "testPersonLeft"
  };
  
  var $ngMarielle = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Marielle_zpsdrqeejap.png",
    "name": "-Marielle",
    "message": "Yeah I guess this group 'helped' me or whatever. I didn't think I had a problem to begin with but they were persistent. Their intervention was... traumatizing. My sister literally just showed up with a group of colorful, bubbly strangers in the dead of the night, who started talking about the dangers of taco addiction. Ugh, she probably just wanted to hoard all the tacos for herself. This group is the bane of my existence.",
    "orientation": "testPersonRight"
  };
  
  var $ngCindy1 = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Cindy01_zpsnxwbz4fr.png",
    "name": "-Cindy",
    "message": "I used to drive 20 miles just to go to this taco truck that I loved, at 1 in the morning. They were the only ones open that late and their tacos were only $1 each. I was obsessed. I couldn't sleep unless I had had their tacos. Now that Tacoholics Anonymous has cured me, I am satisfied eating at nearby fast-food restaurants like McDonalds and Jack-in-the-Box instead of driving 20 miles and back." ,
    "orientation": "testPersonLeft"
  };
  

  
  var $ngCindy2 = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Cindy02_zpsleuqness.png",
    "name": "-Totally Not Cindy",
    "message": "I LOVE TACOS SO MUCH!! TACO IS LIFE!! Tacoholics Anonymous thinks they can 'cure' me??? We'll see about that!" ,
    "orientation": "testPersonRight"
  };
  
  
  var $ngAngela = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Angela0_zpsfjluuvrj.png",
    "name": "-Angela",
    "message": "My name is Angela and I'm a Tacoholic. The addiction began early in my life - it just seemed so normal from where I came from. Temptation was everywhere, from taco trucks to home-made tacos. I didn't want to be like my family, but I felt like there was no escape. That is, until I found Tacoholics Anonymous. They are helping me break out of the cycle!" ,
    "orientation": "testPersonLeft"
  };
  
  var $ngGoose = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Goose0_zpse0oufjik.png",
    "name": "-Goose",
    "message": "My addiction began when I accidentally attended a Tacoholics Anonymous meeting instead of my regular AA meeting. I didn't even know what tacos were! Tacoholics Anonymous is helping me keep my new addiction under control, even if it was kinda their fault." ,
    "orientation": "testPersonRight"
  };
  
  var $ngJacob2 = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Jacob2_zpsy3jbktbl.png",
    "name": "-Definitely Not Jacob",
    "message": "I can fly. I can lift a mountain. I can move faster than light. But I feel so powerless when I start thinking about tacos. My only weaknesses are tacos and green rocks. I'm glad Tacoholics Anonymous is helping me focus on more important things, like saving the world." ,
    "orientation": "testPersonLeft"
  };
  
  var $ngJason = {
    "image": "http://i347.photobucket.com/albums/p460/jx2bandito/Jason0_zpsotp4ypsa.png",
    "name": "-Jason",
    "message": "At first it was just every other week, or whenever my friends suggested tacos. Then it became every day. I soon resorted to desperate means, scouring dark alleys and empty streets at night, hoping to get a score. One fateful evening, a deal went bad... and now I'm on their hit list. The tacos are out to get me. I know it. I can feel it. Their tortillas rustling in the shadows. But I'm safe. Safe here. Tacoholics Anonymous is my sanctuary.",
    "orientation": "testPersonRight"
  };
  
  $scope.testPeople = [$ngJacob, $ngMarielle, $ngCindy1, $ngCindy2, $ngAngela, $ngJason, $ngJacob2, $ngGoose];

}]);