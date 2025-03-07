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
var categoryId = "";
var url = "womanshop";

const constants = {
  Bearer:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NDA1ODlkYmQyNTA5NTgzMDVkNjc5MTFiMjBiMDY5ZSIsImp0aSI6IjE2YjhiZjc2YmYxMDgyNDA4YjBjNDRjMTI3ZGM1NTRhYmY0Y2E3ZGE2M2NjMDM1MDBlYTllY2E1NDgzZTI4NTk3MWRhYjhhYTJlMWQ5MjA4NWM4N2U4NzJlYjY0OWY4ZjBkNDMxZTNkNWVmNzNlN2EwOTkzZTQ1NGM0OWJkMGM2YThkMWJiYWE5YmZkNTIxYTYwYTRmZTZiMzM0NDQ0NWYiLCJpYXQiOjE3NDAzOTQ2NTYsIm5iZiI6MTc0MDM5NDY1NiwiZXhwIjoxODk4MTc5NDE2LCJzdWIiOiIxODc5MTAyIiwic2NvcGVzIjpbIm9yZGVyczpyZWFkIiwib3JkZXJzOndyaXRlIiwicHJvZHVjdHM6cmVhZCIsInByb2R1Y3RzOndyaXRlIiwic2hpcHBpbmdzOnJlYWQiLCJzaGlwcGluZ3M6d3JpdGUiLCJkaXNjb3VudHM6cmVhZCIsImRpc2NvdW50czp3cml0ZSIsInBheW91dHM6cmVhZCIsInJlZnVuZHM6cmVhZCIsInJlZnVuZHM6d3JpdGUiLCJzaG9wOnJlYWQiLCJzaG9wOndyaXRlIl19.Bij3RbmTc_2xcYEdsVEOCw3lcQHzSmsD4x1lBrBgM01jjvg6g2IwyvWuLaAtgQYOZW-9kd37Nwc_hXWwZBnVEwICLaiwsPq6mUwUBIfhNCApUXJRxpLgnNMI5miIZp0m324Cev_qLVhLZcdup65nwiNKp6q3F_ypcNxnxykzPw1riSgkBUl9DEVmhviWt7eG_jopmIskG3zt6fou1aIFtNgm6q0rGpO6mUsOSK8AwC73UM9upDWtBlO3xB_grH40ZQ9fLhy5EZpM1QwEuEMBiJtp2acuEXGl-Z3NjS3Q6xivuzLsMfShMz6ov1xaf0FODOx3LpuoBBvNwYsCvTsjqg",

  KADINAYAKKABIid: "97fa66025e772afe",
  AYAKKABIid: "4d1670e409f3277d",

  ÇANTAid: "6f6880c7106a0b37",

  AKSESUARid: "51495dc1b7425b77",

  TAKIid: "8a4bd2da24265fd0",

  BOTid: "a028bb132a02daaa",

  ÇİZMEid: "daf6c42241ab73ae",

  TOPUKLUid: "d4e8e12b8d4acf0a",

  SNEAKERid: "fcb536309c0fc0ad",

  LOAFERid: "0c9726f6c32dafa8",

  SPORAYAKKABIid: "747fc695c3418ef8",

  YÜRÜYÜŞid: "b891eec49ea4ace2",

  KOŞUid: "1952499236d237ea",

  BABETid: "bb6f615d3356080b",

  SANDALETid: "90d109df9461a6cf",

  ÇAPRAZid: "785458d81fb0b298",

  ELÇANTASIid: "0b8db0567a8a82df",

  HASIRid: "efda71a715860529",

  OMUZid: "4296fcc9d6cc13ef",

  KOLÇANTASIid: "0111f4af1a801b83",

  ATKIid: "134fdc424de0b935",

  KÜPEid: "b2deafa09752b401",

  BEREid: "6bbfd1725f2ca491",

  SAATid: "5bf616c78306fb15",

  BİLEKLİKid: "ada093572986ec58",

  YÜZÜKid: "5681ea3be7719654",

  CÜZDANid: "03d01082d7419554",

  GÖZLÜid: "615bb27af6325400",

  KOLYEid: "4202e7acda95f301",

  ADIDASid: "c7826925739164b2",

  CONVERSEid: "7cfe8749ab9ae6e5",

  NIKEid: "9158b9d1390e7297",

  JORDANid: "2e8e1b3ea68d7032",

  MCQUEENid: "27158d122dcad430",

  PARISid: "d7ee3aef1457381e",

  BALENCIAGAid: "6a9b8ae494b7f685",

  BOTTEGAid: "0fcd7e8e14821dc9",

  BVLGARIid: "a53c580b3b8abe76",

  CHANELid: "180b726c3cc37a09",

  CELINEid: "30b112d9fbb6604d",

  GOOSEid: "54746a624a15bc23",

  GOYARDid: "85deaa6306167356",

  GUCCIid: "fa81888aad8d0f9a",

  HERMESid: "90867aa79b51202c",

  JACQUEMUSid: "3b67ce2f30adcd90",

  PIANAid: "a85d41f154450da8",

  MIUid: "7fd953b21d329ce2",

  PRADAid: "cae93ef53349ecf3",

  POLENEid: "ed7a46cc75c49904",

  SAINTid: "76cf79a1f712f9cf",

  TOMFORDid: "befff5a702a09d16",
  UGGid: "7b6d706cfa92ce96",

  VANSid: "57f47d53b58a7e90",
  S36id: "6e39a3314808ede5",
  S37id: "6b8d6b3793d5d475",
  S38id: "83195dc0849d33c9",
  S39id: "a287aef049f3b77c",
  S40id: "29bfd98d4e9d3740",
  S41id: "45d4e764828fc5cb",
  S42id: "051ead05ff07974d",
  S43id: "53c48cf62f3f62ba",
  S44id: "96d8e54d13164048",
  S45id: "80e231f54917d0cc",
  GREENid: "8575a1eb5520784c",
  BLUEid: "3a674bc353f7eee8",
  REDid: "d6b08731331de007",
  BROWNid: "ff8ff76dcc3be5ca",
  BLACKid: "8730898f4b2f3d63",
  WHİTEid: "aa6461d283b05659",
  PINKid: "b34caac1880178ce",
  ORANGEid: "bd4f95906d776060",
};

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
  if (document.location.pathname == "/brand-shop.html") {
    var list = false;
    let categoryName = localStorage.getItem("brandName");
    url = "brandshop";
    categoryId = constants[categoryName];
    console.log(categoryId);

    getProductsByCategory();
  }
  if (document.location.pathname == "/brand-shop-list.html") {
    var list = true;
    let categoryName = localStorage.getItem("brandName");
    url = "brandshop";
    categoryId = constants[categoryName];
    console.log(categoryId);

    getProductsListByCategory();
  }
  if (document.location.pathname == "/woman-shop.html") {
    var list = false;
    url = "womanshop";

    getProducts();
  }
  if (document.location.pathname == "/woman-shop-list.html") {
    var list = true;
    getProductsList();
  }
  if (document.location.pathname == "/man-shop.html") {
    var list = false;
    url = "manshop";
    getProducts();
  }
  if (document.location.pathname == "/man-shop-list.html") {
    var list = true;
    url = "manshop";
    getProductsList();
  }
  if (document.location.pathname == "/accessories-shop.html") {
    url = "accessoriesshop";
    getProducts();
  }
  if (document.location.pathname == "/accessories-shop-list.html") {
    url = "accessoriesshop";
    getProductsList();
  }
  if (document.location.pathname == "/jewelry-shop.html") {
    url = "jewelryshop";
    getProducts();
  }
  if (document.location.pathname == "/jewelry-shop-list.html") {
    url = "jewelryshop";
    getProductsList();
  }
  if (document.location.pathname == "/bag-shop.html") {
    url = "bagshop";
    getProducts();
  }
  if (document.location.pathname == "/bag-shop-list.html") {
    url = "bagshop";
    getProductsList();
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

  /*------------ get brand and go to brand shop page ---------*/
  $(".brand-name").on("click", function () {
    var brandName = $(this).closest("a").attr("id");
    localStorage.setItem("brandName", brandName);
    console.log(brandName);
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
    // $(".cart-menu").on("click", function () {
    //   $(".cart-dropdown").toggleClass("open");
    // });

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
      dots: true,
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

const getProducts = async () => {
  axios
    .get(`/api/v1/${url}?page=${page}&limit=${limit}`)
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
      if ($(".quick-popup").length > 0) {
        $(".quick-popup").magnificPopup({
          type: "iframe",
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

/* get as a list view*/

const getProductsList = async () => {
  axios
    .get(`/api/v1/${url}?page=${page}&limit=${limit}`)
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
                                .addClass("quick-popup btn btn-color")
                                .attr({
                                  href: products[object][key].url,
                                  id: "product-link",
                                })

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
      if ($(".quick-popup").length > 0) {
        $(".quick-popup").magnificPopup({
          type: "iframe",
        });
      }
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
      $("#buyProduct").attr("href", product.data.url);

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

      // popup fix?
      if ($(".quick-popup").length > 0) {
        $(".quick-popup").magnificPopup({
          type: "iframe",
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

//get by query

const getProductsByCategory = async () => {
  console.log(categoryId);
  axios
    .get(`/api/v1/${url}`, {
      params: { categoryId: categoryId, limit: limit, page: page },
    })
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
      if ($(".quick-popup").length > 0) {
        $(".quick-popup").magnificPopup({
          type: "iframe",
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const getProductsListByCategory = async () => {
  console.log(categoryId);
  axios
    .get(`/api/v1/${url}`, {
      params: { categoryId: categoryId, limit: limit, page: page },
    })
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
                                .addClass("quick-popup btn btn-color")
                                .attr({
                                  href: products[object][key].url,
                                  id: "product-link",
                                })

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
      if ($(".quick-popup").length > 0) {
        $(".quick-popup").magnificPopup({
          type: "iframe",
        });
      }
    })

    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
