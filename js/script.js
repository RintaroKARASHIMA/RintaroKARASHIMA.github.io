$(function () {
  //ヒーローの高さを100%に調整
  heroHeight();

  $(window).resize(function () {
    heroHeight();
  });

  function heroHeight() {
    var windowHeight = $(window).height();
    $(".p-hero").height(windowHeight);
  }

  //ページ内スクロール
  $('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  //ページトップへ戻る
  var $pageTop = $(".c-page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".l-header").addClass("is-active");
    } else {
      $(".l-header").removeClass("is-active");
    }
  });

  //ハンバーガーメニュー
  var btnMenu = $(".js-btn-menu");
  var globalNav = $(".p-global-nav");

  btnMenu.on("click", function () {
    btnMenu.toggleClass("is-active");
    globalNav.toggleClass("is-show");
  });

  //IE11対応 sitcky
  if ($(".p-breadcrumb").length) {
    var elements = $(".p-breadcrumb");
    Stickyfill.add(elements);
  }
});

const swiper = new Swiper(".js-swiper-container", {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
