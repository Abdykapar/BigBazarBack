<template>
  <div>
       <!--==================== Hot Deal & Offer Section Start ====================-->
    <div class="full-row bg-light">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="bg-white">
              <div class="row">
                <div class="col-12">
                  <div class="section-head d-flex justify-content-between align-items-center p-20">
                    <h5 class="font-700 text-secondary mb-0 text-uppercase">Hot Deal & Offer Section</h5>
                    <a href="#" class="btn-link-down-line higlight-font transation-this text-uppercase font-twelve">More Offer</a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="four-carousel owl-carousel nav-disable owl-dot-mt-50 dot-active-one e-bg-white e-image-bg-light e-hover-image-zoom e-btn-set-one e-border-one px-20 mb-30">
                    <div v-for="item in hotDeals" :key="item._id" class="item">
                      <div class="product type-product">
                        <div class="product-wrapper">
                          <div class="product-image">
                            <router-link :to="{ name: 'detail', params: { id: item._id } }"  class="woocommerce-LoopProduct-link"><img :src="baseUrl+'/'+item.image" alt="Product Image"></router-link>
                            <div class="product-variations">
                              <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                              <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                              <span><a href="#" style="background-color: #31749e;"></a></span>
                              <span><a href="#" style="background-color: #672a4f;"></a></span>
                            </div>
                            <div class="product-labels">
                              <div class="badge1"><span>New</span></div>
                            </div>
                            <div class="on-sale">- 60%</div>
                          </div>
                          <div class="product-info">
                            <h3 class="product-title"><router-link :to="{ name: 'detail', params: { id: item._id } }">{{item.title}}</router-link></h3>
                            <div class="product-price">
                              <div class="price">
                                <ins>${{item.price.toFixed(2)}}</ins>
                                <del>${{(item.price * 2).toFixed(2)}}</del>
                              </div>
                            </div>
                            <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                            <div class="shipping-feed-back">
                              <div class="star-rating">
                                <div class="rating-wrap">
                                  <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                </div>
                                <div class="rating-counts-wrap">
                                  <a href="#">(563)</a>
                                </div>
                              </div>
                              <div class="sold-items">
                                <span>65</span> <span>Sold</span>
                              </div>
                            </div>
                            <div class="hover-area">
                              <div class="cart-button">
                                <button @click="onAddCart(item)" class="button add_to_cart_button">Add to Cart</button>
                              </div>
                              <div class="wishlist-button">
                                <a @click="onAddWishList(item)" class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                              </div>
                              <div class="compare-button">
                                <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================== Hot Deal & Offer Section End ====================-->


    <!--==================== Banner Section Start ====================-->
    <div class="full-row bg-light pb-0">
      <div class="container">
        <div class="row g-3">
          <div class="col-md-8 d-none d-sm-block">
            <div class="banner-wrapper hover-img-zoom banner-one custom-class-104">
              <div class="banner-image overflow-hidden transation"><img src="/image/53.png" alt="Banner Image"></div>
              <div class="banner-content w-50 position-absolute">
                <span class="d-block mb-10 text-primary font-medium">20% Off</span>
                <h3><a href="#" class="text-white mb-10 d-block font-500">Office Storage</a></h3>
                <span class="d-block text-white font-medium">Get organized with our shelves & sideboards</span>
                <a href="#" class="btn-link-down-line font-700 mt-20 text-white">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="banner-wrapper hover-img-zoom banner-one custom-class-105">
              <div class="banner-image overflow-hidden transation"><img src="/image/54.png" alt="Banner Image"></div>
              <div class="banner-content xy-center w-50 position-absolute">
                <h3><a href="#" class="text-white mb-10 d-block font-500">Interior Reluxing Furniture</a></h3>
                <a href="#" class="btn-link-down-line font-700 mt-20 text-white">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================== Banner Section Section End ====================-->

    <!--==================== New Arrival with left Banner Section Start ====================-->
    <div class="full-row bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="banner-wrapper hover-img-zoom banner-one custom-class-106">
              <div class="banner-image overflow-hidden transation"><img src="/image/55.png" alt="Banner Image"></div>
              <div class="banner-content position-absolute">
                <span class="d-block mb-10 font-600 text-dark font-twelve text-uppercase">New Arrival</span>
                <h2><a href="#" class="text-dark mb-10 d-block">Living Furniture your love</a></h2>
                <span class="d-block text-secondary font-700 font-medium text-uppercase">Sale up to <span class="bg-primary text-white py-1 px-2">20%</span> </span>
                <a href="#" class="btn-link-down-line font-700 mt-20">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="bg-white p-20">
              <div class="row">
                <div class="col-12">
                  <div class="section-head d-flex justify-content-between align-items-center py-10 px-10">
                    <h5 class="font-700 text-secondary mb-0 text-uppercase">New Arrival</h5>
                    <a href="#" class="btn-link-down-line higlight-font transation-this text-uppercase font-twelve">View More</a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="single-carousel owl-carousel nav-disable owl-dot-mt-50 dot-active-one e-image-bg-light e-hover-image-zoom e-btn-set-two cart-slide-up">
                    <div class="item" v-for="i in 3" :key="i">
                      <div class="row g-0 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                        <div class="col" v-for="item in newProducts" :key="item._id">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <router-link :to="{ name: 'detail', params: { id: item._id } }" class="woocommerce-LoopProduct-link"><img :src="baseUrl+'/'+item.image" alt="Product Image"></router-link>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 60%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><router-link :to="{ name: 'detail', params: { id: item._id } }">{{item.title}}</router-link></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>${{item.price.toFixed(2)}}</ins>
                                    <del>${{item.price.toFixed(2)}}</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <button @click="onAddCart(item)" class="button add_to_cart_button">Add to Cart</button>
                                  </div>
                                  <div class="wishlist-button">
                                    <a @click="onAddWishList(item)" class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================== New Arrival with left Banner Section End ====================-->

    <!--==================== Service Info Section Start ====================-->
    <div class="full-row sm-mt-30" style="background-color: #5f5148; margin-top: 75px;">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="margin-top-minus-one">
              <div class="intro-video position-relative" style="background: url(/image/56.png) no-repeat">
                <a data-fancybox class="video-popup" href="https://www.youtube.com/watch?v=wbnaHgSttVo" title="video popup">
                  <span class="bg-primary"><i class="flaticon-right-arrow-black-triangle flat-mini text-white"></i></span>
                </a>
                <!-- Use youtube or Vimeo video link in href, first open the video and just copy the link from url and past here -->
              </div>
              <div class="text-white mt-4">
                <div class="text-uppercase text-white">НАША ИСТОРИЯ</div>
                <h2 class="text-white my-3">Мебель Autobi</h2>
                <div class="font-sixteen">
                  <p>Non vehicula libero lobortis tellus lobortis viverra litora, at per porttitor imperdiet etiam sociosqu auctor viverra scelerisque. Sagittis. Dis porta mollis varius semper leo torquent.</p>
                </div>
                <a href="#" class="btn btn-dark">Читать далее</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row row-cols-1">
              <div class="col">
                <div class="d-flex flex-column my-20">
                  <i class="flaticon-capital flat-medium text-white"></i>
                  <h4 class="my-3"><a href="#" class="text-white hover-text-primary transation-this">Доступная цена</a></h4>
                  <span class="h6 font-400 text-white">Lorem suspendisse vulputate parturient gravida fames.</span>
                </div>
              </div>
              <div class="col">
                <div class="d-flex flex-column my-20">
                  <i class="flaticon-import flat-medium text-white"></i>
                  <h4 class="my-3"><a href="#" class="text-white hover-text-primary transation-this">Бесплатная доставка</a></h4>
                  <span class="h6 font-400 text-white">Viverra pellentesque risus metus consectetuer nam purus.</span>
                </div>
              </div>
              <div class="col">
                <div class="d-flex flex-column my-20">
                  <i class="flaticon-capital flat-medium text-white"></i>
                  <h4 class="my-3"><a href="#" class="text-white hover-text-primary transation-this">Доступные варианты</a></h4>
                  <span class="h6 font-400 text-white">Viverra pellentesque risus metus consectetuer nam purus.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================== Service Info Section End ====================-->
  </div>
</template>

<script>
import { cartService } from '@/_services/cart.service'
import { wishListService } from '@/_services/wishList.service'
import { mapActions } from 'vuex'
export default {
    name: 'HotDealSections',
    data () {
        return {
            baseUrl: process.env.VUE_APP_BASE_URL
        }
    },
    computed: {
        hotDeals () {
            return this.$store.getters['products/hotDealProducts']
        },
        newProducts () {
            return this.$store.getters['products/newProducts']
        },
        userProfile () {
          return this.$store.state.account.user
        }
    },
    methods: {
      ...mapActions('cart', ['getProducts']),
      ...mapActions('wishList', ['getWishProducts']),
      onAddCart (item) {
        const data = { userId: this.userProfile.user.id, productId: item._id }
        cartService.create(data).then(() => {
            this.getProducts({ userId: this.userProfile.user.id })
        }).catch(err => console.log(err))
      },
      onAddWishList (item) {
        const data = { userId: this.userProfile.user.id, productId: item._id }
        wishListService.create(data).then(() => {
          this.getWishProducts({ userId: this.userProfile.user.id })
        }).catch(err => console.log(err))
      }
    }
}
</script>

<style>

</style>