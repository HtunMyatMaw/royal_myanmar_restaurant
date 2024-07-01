<template>
  <!-- <main> -->
  <!-- <div> -->
  <!-- Grid Layout -->
  <main class="grd_layout container-lg">
    <!-- Image Slide -->
    <section class="content-div">
      <!-- <h2>Warmly Welcome to Royal Myanmar Restaurant</h2>
          <p>You can enjoy myanamar tastes that you've never tried.And we won't never let you down!</p>
          <img src="../assets/img/bagan-with-balloon.png" class="img-fluid" alt="Inle Leg Rower"/> -->
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/img/bagan-with-balloon.png" alt="Bagan With Balloon">
            <div class="carousel-caption d-none d-md-block">
              <h5>Bagan Acient Temples With Balloons</h5>
              <p>The most famous hostoric site of Myanamar.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/img/inle-leg-rower.png" alt="Inle Leg Rower">
            <div class="carousel-caption d-none d-md-block">
              <h5>Famous Inle Lake in Southern Shan State</h5>
              <p>There is only one place in the world where has the leg-rowers of boat. </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/img/upain-bridge.png" alt="Upain Bridge">
            <div class="carousel-caption d-none d-md-block">
              <h5>Famous U-Pain Bridge in Mandalay,Middle Myanmar</h5>
              <p>The bridge is entirely made of woods,especially teak. </p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    <!-- business-hour-section -->
    <section class="p-3 rounded bg-cus-gray box-cus-shaow">
      <div class="business-hour-info text-white text-center">
        <div class="business-title fw-bold mb-3">
          <span class="fs-3" style="word-break: keep-all;">本日も<wbr></wbr>営業しています</span>
        </div>
        <div class="business-hours-detail mb-3">
          <span class="fw-normal">開店 11:30 (AM)</span><br />
          <span class="fw-normal">閉店 22:00 (PM)</span>
        </div>
      </div>
    </section>

    <!-- recommend-section -->
    <section class="">
      <div class="recommend-info d-flex flex-column h-100">
        <div class="recommend-info-title bg-light-red p-2 text-white">
          <h3 class="text-uppercase m-0">日替わりメニュー</h3>
        </div>
        <div class="recommend-info-detail bg-white border flex-fill p-2">
          次回のリリースに反応します、、、
        </div>
      </div>
    </section>

    <hr>

    <!--  -->
    <section>
      <div class="d-flex flex-column gap-3">
        <div>
          <div class="menu-title bg-light-red text-white p-2 mb-2">
            <h3 class="text-uppercase m-0">揚げ物・炒め物</h3>
          </div>
          <div class="menu-content d-flex gap-3">
            <div class="menu-item border border-secondary">
              <div class="menu-item_img">
                <img src="../assets/img/coconut-noodle.png" alt="">
              </div>
              <div class="menu-item_title_price d-flex justify-content-between p-2">
                <span>ミャンマー風オムレツ</span>
                <span>￥600</span>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <div>
          <div class="menu-title bg-light-red text-white p-2 mb-2">
            <h3 class="text-uppercase m-0">お米メニュー</h3>
          </div>
          <div class="menu-content d-flex gap-3">
            <div class="menu-item border border-secondary">
              <div class="menu-item_img">
                <img src="../assets/img/coconut-noodle.png" alt="">
              </div>
              <div class="menu-item_title_price d-flex justify-content-between p-2">
                <span>ミャンマー風オムレツ</span>
                <span>￥600</span>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <div>
          <div class="menu-title bg-light-red text-white p-2 mb-2">
            <h3 class="text-uppercase m-0">サラダもの</h3>
          </div>
          <div class="menu-content d-flex gap-3">
            <div class="menu-item border border-secondary">
              <div class="menu-item_img">
                <img src="../assets/img/coconut-noodle.png" alt="">
              </div>
              <div class="menu-item_title_price d-flex justify-content-between p-2">
                <span>ミャンマー風オムレツ</span>
                <span>￥600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!--  -->
  <!-- <div class="row">
        <div class="col-md-3 col-xs-12">
          <div class="business-hour-info">
            <div class="business-title">
              <span class="text-uppercase font-weight-bold">we are open today</span><br/>
              <span>as well</span>
            </div>
            <div class="business-hours-detail">
              <span class="font-weight-normal">OPEN 11:30</span><br/>
              <span class="font-weight-normal">CLOSE 22:00</span>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-xs-12">
          <div class="recommend-info">
              <div class="col-md-12 recommend-info-title">
                <h3 class="text-uppercase">Today's Special Dish</h3>
              </div>
             <div class="col-md-12 recommend-info-detail">
               <p>Something special!!!</p>
             </div>
          </div>
        </div>
      </div>
      <hr> -->

  <!-- Appetizers -->
  <!-- <div class="col-md-12 appetizer-info-title">
      <h2 class="text-uppercase">Appetizers</h2>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
      </div>
      <hr> -->

  <!-- Curry Collection -->
  <!-- <div class="col-md-12 curry-info-title">
      <h2 class="text-uppercase">Curry Collection</h2>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
      </div>
      <hr> -->

  <!-- Noodle Collection -->
  <!-- <div class="col-md-12 noodle-info-title">
        <h2 class="text-uppercase">Noodles Collection</h2>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
        <div class="col-md-3 col-xs-12">
          <div class="cuisine-div">
            <img src="../assets/img/coconut-noodle.png" class="img-thumbnail img-fluid" alt="Coconut Noodle"/>
            <div class="row">
              <div class="col-md-8 col-xs-8">
                <p class="cuisine-sp">Cuisine Name</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <p class="star-sp">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
            <p class="price-heading"><i class="bi bi-currency-yen"></i>500</p>
            <p class="des-sp">Description/Ingredients</p>
          </div>
        </div>
      </div> -->
  <!-- </div> -->
  <!-- </main> -->
</template>

<style scoped>
.grd_layout {
  display: grid;
  gap: 1rem;
  grid-template-columns: 25% 1fr;

  font-family: 'Times New Roman', Times, serif;
  box-shadow: 0px 0px .5rem 0px rgba(0, 0, 0, 0.5);
}

hr,
.grd_layout>section:last-child,
.grd_layout>section:first-child {
  grid-column: span 2;
}

hr {
  margin-bottom: -.25rem;
  position: relative;
  z-index: -1;
}

.carousel {
  z-index: -1;
}

.carousel-item>img {
  min-height: 280px !important;
  max-height: 25vh !important;
  object-fit: cover;
}

/* .container {
  font-family: 'Times New Roman', Times, serif;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
} */

.rounded {
  border-radius: .5rem !important;
}

.bg-cus-gray {
  /* background-color: #454545; */
  background-color: #b05834;
}

.box-cus-shaow {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
}

.business-title {
  font-size: 2rem;
}

.bg-light-red {
  /* background-color: #ff5f1f; */
  background-color: #b05834;
}

.menu-item {
  flex: 0 0 280px;
}

.menu-item img {
  width: 100%;
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 767.98px) {
  .grd_layout>section {
    grid-column: span 2;
    /* margin: 0 !important; */
  }

  /* .grd_layout>section:nth-child(2) {
    margin: 0 1rem !important;
  } */
}
</style>