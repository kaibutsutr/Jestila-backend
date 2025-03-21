const productsDOM = document.querySelector("#product");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".product-form");
const productInputDOM = document.querySelector(".product-input");
const formAlertDOM = document.querySelector(".form-alert");

var w = 0;
var limit = 16;
var page = 1;
var pagination = 9;
var discount = false;
var list = false;
var url = "womanshop";
var discount = false;
var sizeFilter,
  colorFilter,
  priceFilter = 0;

const constants = {
  KADIN_BOTid: "3f57d8f553b16a26",

  KADIN_ÇİZMEid: "8ade277422888488",

  KADIN_SNEAKERid: "8517412f82fdd349",

  KADIN_LOAFERid: "9c908de2b28b648d",

  KADIN_SPORid: "e20555b6faae9925",

  KADIN_YÜRÜYÜŞid: "b4bd06bcf7bbf0fc",

  KADIN_KOŞUid: "b86c0206b416d901",

  KADIN_SANDALETid: "f55a824c29a7d827",
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

  GÖZLÜKid: "615bb27af6325400",

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

  VANSid: "57f47d53b58a7e90",
  VANCLEEFid: "dbe91c3511f11d99",
  VALENTINOid: "466fc1028fcc08cd",
  LONGCHAMPid: "a1a6603e780d443f",
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
  WHITEid: "aa6461d283b05659",
  PINKid: "b34caac1880178ce",
  ORANGEid: "bd4f95906d776060",
  YELLOWid: "edf8b1b1cf0b7dcc",
  NEUTRALid: "18d197319dfbd6a6",
};

/*------------ glasscase -----------*/

$(function () {
  ("use strict");

  /*------------ Navigation ---------*/
  /*------------ index ---------*/
  if (
    document.location.pathname == "/index.html" ||
    document.location.pathname == "/"
  ) {
    //top product list
    discount = true;
    limit = 4;
    getBestSellerProducts();
    //bottom product list
    getOpportunityProducts();
    //bottom product list
    getProductOfTheWeek("32937174");
    // hardcode the PoTW here
    getFeaturedShoes();
    getFeaturedBags();
    getFeaturedAccessories();
    // defaults
    discount = false;
    limit = 16;
  }
  /*------------ database ---------*/
  if (document.location.pathname == "/database.html") {
    list = false;
    url = "database";
    page = 3;

    getProductsGrid(page);
  }
  if (document.location.pathname == "/search-shop.html") {
    list = false;
    url = "search";
    page = 3;
    if ("searchData" in localStorage) {
      var searchData = localStorage.getItem("searchData");
      console.log(searchData);
      getSearchedProductsGrid(searchData);
      // do a search
    }
  }
  if (document.location.pathname == "/search-shop-list.html") {
    list = true;
    url = "search";
    page = 3;
    if ("searchData" in localStorage) {
      var searchData = localStorage.getItem("searchData");
      console.log(searchData);
      getSearchedProductsList(searchData);
      // do a search
    }
  }

  if (
    document.location.pathname == "/product-detail.html" ||
    document.location.pathname == "/product-quick-view.html"
  ) {
    var productId = localStorage.getItem("productId");
    console.log(productId);

    getOneProduct(productId);
  }
  /*------------ brandshop ---------*/
  if (document.location.pathname == "/brand-shop.html") {
    list = false;
    url = "brandshop";
    if ("brandName" in localStorage) {
      let brandName = localStorage.getItem("brandName");
      categoryId = constants[brandName];

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }

    // hardcode constants here!
  }
  if (document.location.pathname == "/brand-shop-list.html") {
    list = true;
    url = "brandshop";
    if ("brandName" in localStorage) {
      let brandName = localStorage.getItem("brandName");
      categoryId = constants[brandName];

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }

    // hardcode constants here!
  }
  if (document.location.pathname == "/woman-shop.html") {
    list = false;
    url = "womanshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  if (document.location.pathname == "/woman-shop-list.html") {
    list = true;

    url = "womanshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  /*------------ manshop --------123-*/
  if (document.location.pathname == "/man-shop.html") {
    list = false;
    url = "manshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  if (document.location.pathname == "/man-shop-list.html") {
    list = true;

    url = "manshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  /*------------ accshop --------123-*/
  if (document.location.pathname == "/accessories-shop.html") {
    list = false;
    url = "accessoriesshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  if (document.location.pathname == "/accessories-shop-list.html") {
    list = true;

    url = "accessoriesshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  /*------------ jewelryshop --------123-*/
  if (document.location.pathname == "/jewelry-shop.html") {
    list = false;
    url = "jewelryshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  if (document.location.pathname == "/jewelry-shop-list.html") {
    list = true;

    url = "jewelryshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  /*------------ bagshop --------124443-*/
  if (document.location.pathname == "/bag-shop.html") {
    list = false;
    url = "bagshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }
  if (document.location.pathname == "/bag-shop-list.html") {
    list = true;

    url = "bagshop";

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategory(list);
    } else {
      getProducts(list);
    }
  }

  /*------------ Page items limit ---------*/

  $("#limit")
    .val("16")
    .change(function () {
      $("#product").empty();
      $("#order").val("1").change();
      // default the ordering so we dont get error
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
      if ($(this).val() == "1") {
        //default
        $("#product").empty();
        $("#order option[value=1]").attr("selected", true);
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "2") {
        $("#product").empty();
        $("#order option[value=2]").attr("selected", true);
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
        $("#product").empty();
        //same as 1
        $("#product option[value=3]").attr("selected", true);
        if (list == true) {
          getProductsList(url, page, limit);
        } else {
          getProducts(url, page, limit);
        }
      }
      if ($(this).val() == "4") {
        $("#product").empty();
        // price low to high
        $("#product option[value=4]").attr("selected", true);
        fixedUrl = "-" + url;
        console.log(fixedUrl);
        if (list == true) {
          getPriceList(fixedUrl);
        } else {
          getPriceGrid(fixedUrl);
        }
      }
      if ($(this).val() == "5") {
        $("#product").empty();
        $("#product option[value=5]").attr("selected", true);
        // price high to low
        if (list == true) {
          getPriceList(url);
        } else {
          getPriceGrid(url);
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
  $("#pagination-4").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 4;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-5").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 5;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-6").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 6;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-7").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 7;
    if (list == true) {
      getProductsList(url, page, limit);
    } else {
      getProducts(url, page, limit);
    }
  });
  $("#pagination-8").click(function () {
    $(".pagination").on("click", "li", function () {
      $(".pagination li.active").removeClass("active");
      $(this).addClass("active");
    });
    $("#product").empty();
    page = 8;
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

  /*------------ show sidebar on mobile ---------*/
  $("#filter-show-button").on("click", function () {
    $(".sidebar").show();
  });

  /*------------ get product id and save on local ---------*/
  $(document).on("click", "#product-link", function () {
    var productId = $(this).closest("div").attr("id");
    localStorage.removeItem("categoryName");
    console.log("removed");
    localStorage.setItem("productId", productId);
    console.log(productId);
  });

  /*------------ get brand and go to brand shop page ---------*/
  $(".brand-name").on("click", function () {
    var brandName = $(this).closest("a").attr("id");
    localStorage.setItem("brandName", brandName);
    console.log(brandName);
  });
  $(".category-name").on("click", function () {
    var categoryName = $(this).closest("a").attr("id");
    localStorage.setItem("categoryName", categoryName);
    console.log(categoryName);
  });
  $(".remove-category").on("click", function () {
    localStorage.removeItem("categoryName");
    console.log("removed");
  });

  /*------------ Only one checkbox is selected ---------*/
  $(document).ready(function () {
    $("#check-box1 .checkbox").on("change", function () {
      $("#check-box1 .checkbox").not(this).prop("checked", false);
      $("#check-box2 .checkbox").not(this).prop("checked", false);
      $("#result").html($(this).data("id"));
      if ($(this).is(":checked")) $("#result").html($(this).data("id"));
      else $("#result").html("Empty...!");

      /*------------ find checked checkbox ---------*/

      const is36Checked = $("#S36id").is(":checked");

      const is37Checked = $("#S37id").is(":checked");

      const is38Checked = $("#S38id").is(":checked");

      const is39Checked = $("#S39id").is(":checked");

      const is40Checked = $("#S40id").is(":checked");
      const is41Checked = $("#S41id").is(":checked");
      const is42Checked = $("#S42id").is(":checked");
      const is43Checked = $("#S43id").is(":checked");
      const is44Checked = $("#S44id").is(":checked");
      const is45Checked = $("#S45id").is(":checked");
      //get category for query
      if ("categoryName" in localStorage) {
        let categoryName = localStorage.getItem("categoryName");
        categoryId = constants[categoryName];

        console.log(categoryId);
      } else {
        if (url === "womanshop") {
          categoryId = constants.KADINAYAKKABIid;
        }
        if (url === "manshop") {
          categoryId = constants.AYAKKABIid;
        }
        if (url === "accessoriesshop") {
          categoryId = constants.AKSESUARidid;
        }
        if (url === "bagshop") {
          categoryId = constants.ÇANTAid;
        }
        if (url === "jewelryshop") {
          categoryId = constants.TAKIid;
        }
      }

      /*------------ send query ---------*/
      if (list) {
        if (is36Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 36);
          console.log("36Checked");
        }

        if (is37Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 37);
          console.log("37Checked");
        }
        if (is38Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 38);
          console.log("38Checked");
        }
        if (is39Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 39);
          console.log("39Checked");
        }
        if (is40Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 40);
          console.log("40Checked");
        }
        if (is41Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 41);
          console.log("41Checked");
        }
        if (is42Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 42);
          console.log("42Checked");
        }
        if (is43Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 43);
          console.log("43Checked");
        }
        if (is44Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 44);
          console.log("44Checked");
        }
        if (is45Checked) {
          $("#product").empty();

          getSizeFilterList(categoryId, 45);
          console.log("45Checked");
        }
      } else {
        if (is36Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 36);
          console.log("36Checked");
        }

        if (is37Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 37);
          console.log("37Checked");
        }
        if (is38Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 38);
          console.log("38Checked");
        }
        if (is39Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 39);
          console.log("39Checked");
        }
        if (is40Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 40);
          console.log("40Checked");
        }
        if (is41Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 41);
          console.log("41Checked");
        }
        if (is42Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 42);
          console.log("42Checked");
        }
        if (is43Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 43);
          console.log("43Checked");
        }
        if (is44Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 44);
          console.log("44Checked");
        }
        if (is45Checked) {
          $("#product").empty();

          getSizeFilterGrid(categoryId, 45);
          console.log("45Checked");
        }
      }
    });
    /*------------ Size checkbox ---------*/

    $("#check-box2 .checkbox").on("change", function () {
      $("#check-box1 .checkbox").not(this).prop("checked", false);
      $("#check-box2 .checkbox").not(this).prop("checked", false);
      $("#result").html($(this).data("id"));
      if ($(this).is(":checked")) $("#result").html($(this).data("id"));
      else $("#result").html("Empty...!");

      /*------------ find checked checkbox ---------*/

      const is2Checked = $("#price_2").is(":checked");

      const is4Checked = $("#price_4").is(":checked");

      const is8Checked = $("#price_8").is(":checked");

      const is12Checked = $("#price_12").is(":checked");

      const is16Checked = $("#price_16").is(":checked");

      /*------------ send query ---------*/
      if (list) {
        if (is2Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterList(url, 0);
          console.log("2Checked");
        }

        if (is4Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterList(url, 3999);
          console.log("4Checked");
        }
        if (is8Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterList(url, 7999);
          console.log("8Checked");
        }
        if (is12Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterList(url, 11999);
          console.log("12Checked");
        }
        if (is16Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterList(url, 15999);
          console.log("16Checked");
        }
      } else {
        if (is2Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterGrid(url, 0);
          console.log("2Checked");
        }

        if (is4Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterGrid(url, 3999);
          console.log("4Checked");
        }
        if (is8Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterGrid(url, 7999);
          console.log("8Checked");
        }
        if (is12Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterGrid(url, 11999);
          console.log("12Checked");
        }
        if (is16Checked) {
          $("#product").empty();
          url = url;

          getPriceFilterGrid(url, 15999);
          console.log("16Checked");
        }
      }
    });
  });

  /*------------ Filter by Variaton  filter - by ---------*/

  $("#filter-by").on("click", function () {
    $("#product").empty();
    // get checked ids
    var ids = $("input:checkbox:checked")
      .map(function () {
        return this.id;
      })
      .get();
    console.log(ids);

    //remove content first, then get the filters
    if (ids[0] !== undefined) {
      sizeFilter = ids[0];
      if (ids[1] !== undefined) {
        colorFilter = ids[1];
        if (ids[2] !== undefined) {
          priceFilter = ids[2];
        }
      }
      console.log(sizeFilter, colorFilter, priceFilter);
    }

    if ("categoryName" in localStorage) {
      let categoryName = localStorage.getItem("categoryName");
      categoryId = constants[categoryName];

      console.log(categoryId);

      getProductsByCategoryByVariation(list);
    } else {
      getProductsByVariation(list);
    }
  });

  /*------------ Remove all filters ---------*/
  $(".btn-filter-remove").on("click", function () {
    $("input[type=checkbox]").prop("checked", false);
    location.reload(true);
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
      $(".category-name").on("click", function () {
        if ($(window).width() < 768) {
          $(".sidebar-search-wrap").addClass("open");
        }
      });
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
    var your_date = "2025-04-18 00:00:00";
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
  /* ---- Search Form ---- */

  $("#search-bar").on("input", (e) => {
    console.log(e.target.value);
    var searchData = e.target.value;
    localStorage.setItem("searchData", searchData);

    //save search data for next page
  });

  $(document).ready(function () {
    responsive_dropdown();
    /*------------ nightmode cookie check -----------*/
    /* ---- darkmode ---- */
    const options = {
      bottom: "16px", // default: '32px'
      right: "unset", // default: '32px'
      left: "16px", // default: 'unset'
      time: "0.5s", // default: '0.3s'
      mixColor: "#fff", // default: '#fff'
      backgroundColor: "#fff", // default: '#fff'
      buttonColorDark: "#100f2c", // default: '#100f2c'
      buttonColorLight: "#fff", // default: '#fff'
      saveInCookies: true, // default: true,
      label: "🌙", // default: ''
      autoMatchOsTheme: false, // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
  });
});

/* http requests */

// Load products from /api/products
function getProducts(list) {
  if (list == true) {
    getProductsList();
  } else {
    getProductsGrid();
  }
}

function getProductsByCategory(list) {
  if (list == true) {
    getProductsByCategoryList();
  } else {
    getProductsByCategoryGrid();
  }
}

// Variation versionLoad products from /api/products
function getProductsByVariation(list) {
  if (list == true) {
    getProductsListByVariation();
  } else {
    getProductsGridByVariation();
  }
}

function getProductsByCategoryByVariation(list) {
  if (list == true) {
    getProductsByCategoryListByVariation();
  } else {
    getProductsByCategoryGridByVariation();
  }
}

// one product an few ones
const getOneProduct = async (productId) => {
  axios
    .get(`/api/v1/products/${productId}`)
    .then((response) => {
      product = response.data;
      console.log(product);

      //append

      $("#product-info").append(product.data.description);
      $("#product-title").text(product.data.title);
      $("#product-price").text(~~product.data.priceData.discountedPrice + " ₺");
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

      getSimilarProducts(product.data.categories[0].id);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  //get similar based on category
};

//get similar
const getSimilarProducts = async (categoryId) => {
  console.log(categoryId);
  axios
    .get(`/api/v1/products?categoryId=${categoryId}&limit=5`)
    .then((response) => {
      products = response.data;
      console.log(products);

      //iterate over objects
      for (let object in products) {
        for (let key in products[object]) {
          //entry
          $("#related-products").append(
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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
/* Grid default*/

const getProductsGrid = async () => {
  axios
    .get(`/api/v1/${url}?page=${page}&limit=${limit}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");

      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
/* Grid Var*/

const getProductsGridByVariation = async () => {
  let size = 0;
  axios
    .get(`/api/v1/${url}?page=${page}&limit=${limit}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
                  )
              )
          );
          size++;
        }
      }
      console.log(size);
      if (50 > size) {
        $(".pagination-bar").remove();
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
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
const getProductsListByVariation = async () => {
  let size = 0;
  axios
    .get(`/api/v1/${url}?page=${page}&limit=${limit}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
          size++;
        }
      }

      $(".product-info h3").remove();
      $(".product-info ul").remove();
      if (50 > size) {
        $(".pagination-bar").remove();
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

//get by query

const getProductsByCategoryGrid = async () => {
  let size = 0;
  console.log(categoryId);
  axios
    .get(`/api/v1/${url}/${categoryId}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
                  )
              )
          );
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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
const getProductsByCategoryGridByVariation = async () => {
  let size = 0;
  console.log(categoryId);
  axios
    .get(`/api/v1/${url}/${categoryId}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
                  )
              )
          );
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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

const getProductsByCategoryList = async () => {
  let size = 0;
  console.log(categoryId);
  axios
    .get(`/api/v1/${url}/${categoryId}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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
const getProductsByCategoryListByVariation = async () => {
  let size = 0;
  console.log(categoryId);
  axios
    .get(`/api/v1/${url}/${categoryId}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
          size++;
        }
      }

      if (50 > size) {
        $(".pagination-bar").remove();
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

//index page items
const getFeaturedShoes = async () => {
  axios
    .get(`/api/v1/products?categoryId=4d1670e409f3277d&page=1&limit=10`)
    .then((response) => {
      products = response.data;
      console.log(products);

      for (let object in products) {
        for (let key in products[object]) {
          $("#shoes").append(
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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
const getFeaturedBags = async () => {
  axios
    .get(`/api/v1/products?categoryId=6f6880c7106a0b37&page=1&limit=10`)
    .then((response) => {
      products = response.data;
      console.log(products);

      for (let object in products) {
        for (let key in products[object]) {
          $("#bag").append(
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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
const getFeaturedAccessories = async () => {
  axios
    .get(`/api/v1/products?categoryId=51495dc1b7425b77&page=1&limit=10`)
    .then((response) => {
      products = response.data;
      console.log(products);

      for (let object in products) {
        for (let key in products[object]) {
          $("#accessories").append(
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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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

// get discounted products
const getBestSellerProducts = async () => {
  axios
    .get(
      `/api/v1/products?categoryId=4d1670e409f3277d&discount=${discount}&page=1&limit=${limit}`
    )
    .then((response) => {
      products = response.data;
      console.log(products);

      for (let object in products) {
        for (let key in products[object]) {
          //here
          $("#seller").prepend(
            $("<div>")
              .addClass("seller-box align-flax w-100 pb-20")
              .append(
                $("<div>")
                  .addClass("seller-img")
                  .attr({ id: products[object][key].id })
                  .append(
                    $("<a>")
                      .addClass("display-b")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .append(
                        $("<img>").addClass("transition").attr({
                          src: products[object][key].media[0].url,
                          alt: "product",
                          id: "product-link",
                        })
                      )
                  )
              )
              .append(
                $("<div>")
                  .addClass("seller-contain pl-15")
                  .append(
                    $("<a>")
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<div>")
                      .addClass("price-d pb-25")
                      .append(
                        $("<label>")
                          .addClass("price-r pr-30")
                          .attr({ id: "product-expensive-price" })
                          .text(~~products[object][key].priceData.price + " ₺")
                      )
                      .append(
                        $("<label>")
                          .addClass("price-o")
                          .attr({ id: "product-price" })
                          .text(
                            ~~products[object][key].priceData.discountedPrice +
                              " ₺"
                          )
                      )
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

// get featured ones
const getOpportunityProducts = async () => {
  axios
    .get(
      `/api/v1/products?categoryId=97fa66025e772afe&discount=${discount}&page=1&limit=${limit}`
    )
    .then((response) => {
      products = response.data;
      console.log(products);

      for (let object in products) {
        for (let key in products[object]) {
          //here
          $("#featured-seller").prepend(
            $("<div>")
              .addClass("seller-box align-flax w-100 pb-20")
              .append(
                $("<div>")
                  .addClass("seller-img")
                  .attr({ id: products[object][key].id })
                  .append(
                    $("<a>")
                      .addClass("display-b")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .append(
                        $("<img>").addClass("transition").attr({
                          src: products[object][key].media[0].url,
                          alt: "product",
                          id: "product-link",
                        })
                      )
                  )
              )
              .append(
                $("<div>")
                  .addClass("seller-contain pl-15")
                  .append(
                    $("<a>")
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<div>")
                      .addClass("price-d pb-25")
                      .append(
                        $("<label>")
                          .addClass("price-r pr-30")
                          .attr({ id: "product-expensive-price" })
                          .text(~~products[object][key].priceData.price + " ₺")
                      )
                      .append(
                        $("<label>")
                          .addClass("price-o")
                          .attr({ id: "product-price" })
                          .text(
                            ~~products[object][key].priceData.discountedPrice +
                              " ₺"
                          )
                      )
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

// get product of the week
const getProductOfTheWeek = async (productId) => {
  axios
    .get(`/api/v1/products/${productId}`)
    .then((response) => {
      product = response.data;
      console.log(product);

      //append

      $("#potw-title").text(product.data.title);
      $("#potw-price").text(~~product.data.priceData.discountedPrice + " ₺");
      $("#potw-expensive-price").text(~~product.data.priceData.price + " ₺");

      $("#product-link-to-go").attr({ id: productId });

      $("#img1").attr("src", product.data.media[3].url);

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

// price sorting
/* Grid Var*/
const getPriceGrid = async (url) => {
  let size = 0;
  axios
    .get(`/api/v1/database/${url}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
                  )
              )
          );
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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

/* get as a List view*/

const getPriceList = async (url) => {
  let size = 0;
  axios
    .get(`/api/v1/database/${url}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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

/* Filter by Price tickboxes*/

const getPriceFilterGrid = async (url, price) => {
  let size = 0;
  axios
    .get(`/api/v1/pricefilter?url=${url}&price=${price}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
                  )
              )
          );
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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
const getPriceFilterList = async (url, price) => {
  let size = 0;
  axios
    .get(`/api/v1/pricefilter?url=${url}&price=${price}&`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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

/* Filter by Size tickboxes*/

const getSizeFilterGrid = async (categoryId, sizeId) => {
  let size = 0;
  axios
    .get(`/api/v1/sizefilter?id=${categoryId}&size=${sizeId}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
                  )
              )
          );
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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
const getSizeFilterList = async (categoryId, sizeId) => {
  let size = 0;
  axios;
  get(`/api/v1/sizefilter?id=${categoryId}&size=${sizeId}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      if (len === 0) {
        $("#product").append("Ürün bulunamadı").addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
          size++;
        }
      }
      if (50 > size) {
        $(".pagination-bar").remove();
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
const getSearchedProductsGrid = async (searchData) => {
  axios
    .get(`/api/v1/search/?search=${searchData}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      $("#product-search").text(
        searchData + " araması için " + len + " sonuç listeleniyor"
      );
      if (len === 0) {
        $("#product")
          .append(searchData + " aramanız için ürün bulunamadı")
          .addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({
                        href: "product-detail.html",
                        id: "product-link",
                      })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
const getSearchedProductsList = async (searchData) => {
  axios
    .get(`/api/v1/search/?search=${searchData}`)
    .then((response) => {
      products = response.data;
      console.log(products);
      var len = products.data.length;
      $("#product-count").text(len + " ürün gösteriliyor");
      $("#product-search").text(
        searchData + " araması için " + len + " sonuç listeleniyor"
      );
      if (len === 0) {
        $("#product")
          .append(searchData + " aramanız için ürün bulunamadı")
          .addClass("hello");
        return;
      }

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
                      .addClass("product-details-btn text-center transition")
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
                      .addClass("product-name")
                      .attr({ href: "product-detail.html", id: "product-link" })
                      .text(products[object][key].title)
                  )
                  .append(
                    $("<span>")
                      .addClass("product-price")
                      .text(
                        ~~products[object][key].priceData.discountedPrice + " ₺"
                      )
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
