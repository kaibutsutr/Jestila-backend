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
var list = false;
url = "womanshop";

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
  if (document.location.pathname == "/woman-shop.html") {
    var list = false;
    getProducts(url, page, limit);
  }
  if (document.location.pathname == "/woman-shop-list.html") {
    var list = true;
    getProductsList(url, page, limit);
  }
  if (document.location.pathname == "/man-shop.html") {
    var list = false;
    url = "manshop";
    getProducts(url, page, limit);
  }
  if (document.location.pathname == "/man-shop-list.html") {
    var list = true;
    url = "manshop";
    getProductsList(url, page, limit);
  }
  if (document.location.pathname == "/accessories-shop.html") {
    url = "accessoriesshop";
    getProducts(url, page, limit);
  }
  if (document.location.pathname == "/accessories-shop-list.html") {
    url = "accessoriesshop";
    getProductsList(url, page, limit);
  }

  /*------------ Page items limit ---------*/

  $("#limit")
    .val("16")
    .change(function () {
      $("#product").empty();
      if ($(this).val() == "16") {
        $("#limit option[value=16]").attr("selected", true);
        limit = 16;
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "24") {
        $("#limit option[value=24]").attr("selected", true);
        limit = 24;
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "32") {
        $("#limit option[value=32]").attr("selected", true);
        limit = 32;
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
    });

  /*------------ Order by xxx ---------*/

  $("#order")
    .val("1")
    .change(function () {
      $("#product").empty();
      if ($(this).val() == "1") {
        $("#product option[value=1]").attr("selected", true);
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "2") {
        $("#product option[value=2]").attr("selected", true);
        discount = true;
        // add discount
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }

        discount = false;
      }
      if ($(this).val() == "3") {
        $("#product option[value=3]").attr("selected", true);
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "4") {
        $("#product option[value=4]").attr("selected", true);
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "5") {
        $("#product option[value=5]").attr("selected", true);
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
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
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-2").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 2;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-3").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 3;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-next").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = pagination;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }

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
  /* ---- Quick Popup JS ---- */

  $(document).ready(function () {
    responsive_dropdown();
  });
});

/* http requests */

// Load products from /api/products

const getProducts = async (apiUrl, page, limit) => {
  if (page == undefined) {
    page = 1;
  }
  if (limit === undefined) {
    limit = 50;
  }
  axios
    .get(`/api/v1/${apiUrl}?page=${page}&limit=${limit}`)
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
                          .magnificPopup({
                            type: "iframe",
                          })
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

/* get as a list view*/

const getProductsList = async (apiUrl, page, limit) => {
  if (page == undefined) {
    page = 1;
  }
  if (limit === undefined) {
    limit = 50;
  }
  axios
    .get(`/api/v1/${apiUrl}?page=${page}&limit=${limit}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      for (let object in products) {
        for (let key in products[object]) {
          $("#product").append(
            $("<div>")
              .addClass(
                "featured-product featured-product-list align-flax mb-25"
              )
              .append(
                $("<div>")
                  .addClass("product-img transition")
                  .attr({ id: products[object][key].id })
                  .append(
                    $("<a>")
                      .attr({ href: "product-detail.html", id: "product-link" })
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
                          .magnificPopup({
                            type: "iframe",
                          })
                          .attr({
                            href: "product-quick-view.html",
                            id: "product-link",
                          })
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
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(~~products[object][key].priceData.price + " ₺")
                  )
                  .append(
                    $("<div>")
                      .addClass("product-info")
                      .append(products[object][key].description)
                  )
                  .append(
                    $("<div>")
                      .addClass("product-action")
                      .append(
                        $("<ul>")
                          .append(
                            $("<li>").append(
                              $("<a>")
                                .addClass("btn btn-color")
                                .attr({ href: "cart.html", id: "product-link" })
                                .append(
                                  $("<img>").attr({
                                    src: "images/shop-bag.png",
                                    alt: "bag",
                                    id: "product-link",
                                  })
                                )
                                .append($("<span>").text("sepete ekle"))
                            )
                          )
                          .append(
                            $("<li>").append(
                              $("<a>")
                                .addClass("btn")
                                .attr({ href: "wishlist.html" })
                                .append(
                                  $("<i>")
                                    .addClass("fa fa-heart")
                                    .attr({ "aria-hidden": "true" })
                                )
                            )
                          )
                      )
                  )
              )
          );
        }
      }
      $(".product-info h3").remove();
      $(".product-info ul").remove();
    })

    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const getOneProduct = async (productId) => {
  axios
    .get(`/api/v1/products/${productId}`)
    .then((response) => {
      product = response.data;
      console.log(product);

      //append

      $("#product-info").append(product.data.description);
      $("#product-title").text(product.data.title);
      $("#product-price").text(~~product.data.priceData.price + " ₺");

      $("#img1").attr("src", product.data.media[0].url);

      if (product.data.media[1] !== undefined) {
        $("#img2").attr("src", product.data.media[1].url);
      }

      if (product.data.media[2] !== undefined) {
        $("#img3").attr("src", product.data.media[2].url);
      }
      if (product.data.media[3] !== undefined) {
        $("#img4").attr("src", product.data.media[3].url);
      }
      // gc fix//
      $("#glasscase").glassCase({
        thumbsPosition: "bottom",
        widthDisplayPerc: 100,
        isDownloadEnabled: false,
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

//append stuff
