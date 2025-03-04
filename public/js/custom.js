const productsDOM = document.querySelector("#product");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".product-form");
const productInputDOM = document.querySelector(".product-input");
const formAlertDOM = document.querySelector(".form-alert");
var w = 0;
var limit = 16;
var page = 1;
var pagination = 4;
var discount = false;

const KADINid = "9c8c7c2a75b3c676";
const AYAKKABIid = "bdce94fb95dd9db1";

const ÇANTAid = "6f6880c7106a0b37";

const AKSESUARid = "51495dc1b7425b77";

const BOTid = "a028bb132a02daaa";

const ÇİZMEid = "daf6c42241ab73ae";

const TOPUKLUid = "d4e8e12b8d4acf0a";

const SNEAKERid = "fcb536309c0fc0ad";

const LOAFERid = "0c9726f6c32dafa8";

const SPORAYAKKABIid = "747fc695c3418ef8";

const YÜRÜYÜŞid = "b891eec49ea4ace2";

const KOŞUid = "1952499236d237ea";

const BABETid = "bb6f615d3356080b";

const SANDALETid = "90d109df9461a6cf";

const ÇAPRAZid = "785458d81fb0b298";

const ELÇANTASIid = "0b8db0567a8a82df";

const HASIRid = "efda71a715860529";

const OMUZid = "4296fcc9d6cc13ef";

const KOLÇANTASIid = "0111f4af1a801b83";

const ATKIid = "134fdc424de0b935";

const KÜPEid = "b2deafa09752b401";

const BEREid = "6bbfd1725f2ca491";

const SAATid = "5bf616c78306fb15";

const BİLEKLİKid = "ada093572986ec58";

const YÜZÜKid = "5681ea3be7719654";

const CÜZDANid = "03d01082d7419554";

const GÖZLÜid = "615bb27af6325400";

const KOLYEid = "4202e7acda95f301";

const ADIDASid = "c7826925739164b2";

const CONVERSEid = "7cfe8749ab9ae6e5";

const NIKEid = "9158b9d1390e7297";

const JORDANid = "2e8e1b3ea68d7032";

const MCQUEENid = "27158d122dcad430";

const PARISid = "d7ee3aef1457381e";

const BALENCIAGid = "6a9b8ae494b7f685";

const BOTTEGAid = "0fcd7e8e14821dc9";

const BVLGARIid = "a53c580b3b8abe76";

const CHANELid = "180b726c3cc37a09";

const CELINEid = "30b112d9fbb6604d";

const GOOSEid = "54746a624a15bc23";

const GOYARDid = "85deaa6306167356";

const GUCCIid = "fa81888aad8d0f9a";

const HERMESid = "90867aa79b51202c";

const JACQUEMUSid = "3b67ce2f30adcd90";

const PIANAid = "a85d41f154450da8";

const MIUid = "7fd953b21d329ce2";

const PRADAid = "cae93ef53349ecf3";

const POLENEid = "ed7a46cc75c49904";

const SAINTid = "76cf79a1f712f9cf";

const TOMFORDid = "befff5a702a09d16";
/*------------ glasscase ---------*/

$(function () {
  ("use strict");
  /*------------ Navigation ---------*/
  if (
    document.location.pathname == "/product-detail.html" ||
    document.location.pathname == "/product-quick-view.html"
  ) {
    var productId = localStorage.getItem("productId");
    console.log(productId);
    getOneProduct(productId);
  }
  if (
    document.location.pathname == "/woman-shop.html" ||
    document.location.pathname == "/man-shop.html"
  ) {
    getProducts();
  }

  /*------------ Page items limit ---------*/

  $("#limit")
    .val("16")
    .click(function () {
      $("#product").empty();
      if ($(this).val() == "16") {
        $("#limit option[value=16]").attr("selected", true);
        limit = 16;
        getall();
      }
      if ($(this).val() == "24") {
        $("#limit option[value=24]").attr("selected", true);
        limit = 24;
        getall();
      }
      if ($(this).val() == "32") {
        $("#limit option[value=32]").attr("selected", true);
        limit = 32;
        getall();
      }
    });

  /*------------ Order by xxx ---------*/

  $("#order")
    .val("1")
    .change(function () {
      $("#product").empty();
      if ($(this).val() == "1") {
        $("#product option[value=1]").attr("selected", true);
        getall();
      }
      if ($(this).val() == "2") {
        $("#product option[value=2]").attr("selected", true);
        discount = true;
        // add discount
        getall();
        discount = false;
      }
      if ($(this).val() == "3") {
        $("#product option[value=3]").attr("selected", true);
        getall();
      }
      if ($(this).val() == "4") {
        $("#product option[value=4]").attr("selected", true);
        getall();
      }
      if ($(this).val() == "5") {
        $("#product option[value=5]").attr("selected", true);
        getall();
      }
    });

  /*------------ Pagination 1234 ---------*/

  $("#pagination-1").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 1;
    getall();
  });
  $("#pagination-2").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 2;
    getall();
  });
  $("#pagination-3").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 3;
    getall();
  });
  $("#pagination-next").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = pagination;
    getall();
    pagination++;
  });

  /*------------ Click events ---------*/

  /*------------ get product id and save on local ---------*/
  $(document).on("click", "#product-link", function () {
    var productId = $(this).closest("div").attr("id");
    localStorage.setItem("productId", productId);
    console.log(productId);
  });

  /*------------ Sticky Header Slider ---------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $("header, .top-scrolling").addClass("sticky");
    } else {
      $("header, .top-scrolling").removeClass("sticky");
    }
  });

  function responsive_dropdown() {
    /*------------ Responsive Menu ---------*/
    $(".menu-toggle").on("click", function () {
      $(".menu-toggle, .menu-left").toggleClass("active");
    });

    /*------------ Responsive Cart Dropdown ---------*/
    $(".cart-menu").on("click", function () {
      $(".cart-dropdown").toggleClass("open");
    });

    /* ---- For Mobile Menu Dropdown JS Start ---- */
    $(".menu span.opener").on("click", function () {
      if ($(this).hasClass("plus")) {
        $(this).parent().find(".megamenu").slideDown();
        $(this).removeClass("plus");
        $(this).addClass("minus");
      } else {
        $(this).parent().find(".megamenu").slideUp();
        $(this).removeClass("minus");
        $(this).addClass("plus");
      }
      return false;
    });

    /* ---- Responsive Search box ---- */
    $(".search-menu .search-btn").on("click", function () {
      if ($(window).width() < 768) {
        $(".sidebar-search-wrap").addClass("open");
      }
    });
    $(".search-closer").on("click", function () {
      if ($(window).width() < 768) {
        $(".sidebar-search-wrap").removeClass("open");
      }
    });

    $(".rating-summary-block span").on("click", function () {
      $(".product-review-des, .review-tab li:first-child a").removeClass(
        "active"
      );
      $(".product-review-des").removeClass("show");
      $(".product-review-com, .review-tab li:last-child a").addClass("active");
      $(".product-review-com").addClass("show");
    });

    $(".scrollTo").on("click", function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*------------ Anasayfa Slider ---------*/
  if ($(".home-slider").length > 0) {
    $(".home-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      responsive: {
        0: {
          dots: true,
          nav: false,
        },
        768: {
          nav: true,
        },
      },
    });
  }

  /*------------ Team Slider ---------*/
  if ($(".team-inner").length > 0) {
    $(".team-inner").owlCarousel({
      loop: true,
      dots: true,
      nav: false,
      items: 1,
      mouseDrag: false,
      autoplaySpeed: 1000,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
    });
  }

  /*------------ Latest Blog Slider ---------*/
  if ($(".latest-blog-salid").length > 0) {
    $(".latest-blog-salid").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      items: 2,
      mouseDrag: false,
      autoplaySpeed: 1000,
      // autoplay:true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  /*------------ Brand Slider ---------*/
  if ($(".brand-salider").length > 0) {
    $(".brand-salider").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      items: 9,
      mouseDrag: false,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          dots: true,
          nav: false,
        },
        768: {
          items: 4,
          dots: false,
          nav: true,
        },
        992: {
          items: 6,
        },
        1200: {
          items: 9,
        },
      },
    });
  }

  /* -------- Countdown Timer ------- */
  if ($(".countdown").length > 0) {
    var your_date = "2025-02-28 00:00:00";
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    var countDown = new Date(your_date).getTime(),
      x = setInterval(function () {
        var now = new Date().getTime(),
          distance = countDown - now;
        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, second);
  }

  /* ---- For Footer JS Start ---- */
  $(".footer-static .footer-title, .footer-static span.opener").on(
    "click",
    function () {
      if ($(this).parent(".footer-static").hasClass("active")) {
        if ($(window).width() < 768) {
          $(this).parent().find(".footer-block-contant").slideUp();
          $(this).parent(".footer-static").removeClass("active");
          $(this).parent().find("span.opener").addClass("plus");
          $(this).parent().find("span.opener").removeClass("minus");
        }
      } else {
        if ($(window).width() < 768) {
          $(this).parent().find(".footer-block-contant").slideDown();
          $(this).parent(".footer-static").addClass("active");
          $(".footer-static.active span.opener").addClass("minus");
          $(".footer-static.active span.opener").removeClass("plus");
        }
      }
      return false;
    }
  );

  /* ---- Category Sidebar JS Start ---- */
  $(".category-drop-down > li > a, .category-drop-down span.opener").on(
    "click",
    function () {
      if ($(this).parent(".category-drop-down li").hasClass("active")) {
        $(this).parent().find(".category-sub").slideUp();
        $(this).parent(".category-drop-down > li").removeClass("active");
        $(this).parent().find("span.opener").addClass("plus");
        $(this).parent().find("span.opener").removeClass("minus");
      } else {
        $(this).parent().find(".category-sub").slideDown();
        $(this).parent(".category-drop-down > li").addClass("active");
        $(".category-drop-down li.active span.opener").addClass("minus");
        $(".category-drop-down li.active span.opener").removeClass("plus");
      }
      return false;
    }
  );

  /* ---- Product quantity plus minus JS ---- */
  $(".add").click(function () {
    if ($(this).prev().val()) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  /* ---- Quick Popup JS ---- */
  if ($(".quick-popup").length > 0) {
    $(".quick-popup").magnificPopup({
      type: "iframe",
    });
  }
  $(document).ready(function () {
    responsive_dropdown();
  });
});

/* http requests */

// Load products from /api/products

const getProducts = async () => {
  axios
    .get("/api/v1/products")
    .then((response) => {
      products = response.data;
      console.log(products);

      //iterate over objects
      for (let object in products) {
        for (let key in products[object]) {
          $("#product").append(
            $("<div>")
              .addClass("featured-product mb-25")
              .append(
                $("<div>")
                  .addClass("product-img transition mb-15")
                  .attr({ id: products[object][key].id })
                  .append(
                    $("<a>")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .append(
                        $("<img>").addClass("transition").attr({
                          src: products[object][key].media[0].url,
                          alt: "product",
                          id: "product-link",
                        })
                      )
                  )
                  .append(
                    $("<div>")
                      .addClass(
                        "product-details-btn text-uppercase text-center transition"
                      )
                      .attr({ id: products[object][key].id })
                      .append(
                        $("<a>")
                          .addClass("quick-popup")
                          .attr({ href: "product-quick-view.html" })
                          .text("Ön İzleme")
                      )
                  )
              )

              .append(
                $("<div>")
                  .addClass("product-desc")
                  .attr({ id: products[object][key].id })
                  .append(
                    $("<a>")
                      .addClass("product-name text-uppercase")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(~~products[object][key].priceData.price + " ₺")
                  )
              )
          );
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const getOneProduct = async (id) => {
  axios
    .get(`/api/v1/products/${id}`)
    .then((response) => {
      product = response.data;
      console.log(product);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
