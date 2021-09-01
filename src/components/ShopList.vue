<template>
  <div id="page_wrapper" class="bg-white">
        <mini-header></mini-header>

        <!-- breadcrumb -->
        <div class="full-row bg-light py-5">
            <div class="container">
                <div class="row text-secondary">
                    <div class="col-sm-6">
                        <h3 class="mb-2 text-secondary">Лист</h3>
                    </div>
                    <div class="col-sm-6">
                        <nav aria-label="breadcrumb" class="d-flex justify-content-sm-end align-items-center h-100">
                            <ol class="breadcrumb mb-0 d-inline-flex bg-transparent p-0">
                                <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home me-1"></i>Дом</a></li>
                                <li class="breadcrumb-item"><a href="shop-grid.html">Магазин</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Лист</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb -->

        <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div id="sidebar" class="widget-title-bordered-full">
                            <div id="woocommerce_product_categories-4" class="widget woocommerce widget_product_categories widget-toggle">
                                <h2 class="widget-title">Категория</h2>
                                <ul class="product-categories">
                                    <li v-for="item in categories" :key="item._id" class="cat-item cat-parent">
                                        <button @click="onCategory(item)">{{item.title}} <span class="count">({{ productCount(item._id) }})</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div id="bigbazar-price-filter-list-1" class="widget bigbazar_widget_price_filter_list widget_layered_nav widget-toggle">
                                <h2 class="widget-title">Filter by Price</h2>
                                <ul class="price-filter-list">
                                    <li @click="onPrice(item)" class="wc-layered-nav-term" v-for="(item, i) in priceFilter" :key="i">
                                        <span class="woocommerce-Price-amount amount">
                                                <bdi><span class="woocommerce-Price-currencySymbol">$</span>{{ item.start }}</bdi>
                                        </span> {{ item.end === '+' ? '' : '-' }}
                                        <span class="woocommerce-Price-amount amount">
                                                <bdi><span v-if="item.end !== '+'" class="woocommerce-Price-currencySymbol">$</span>{{item.end}}</bdi>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="products-header d-flex justify-content-between align-items-center py-10 px-20 bg-light md-mt-30">
                            <div class="products-header-left d-flex align-items-center">
                                <h6 class="woocommerce-products-header__title page-title">Все Категория</h6>
                                <div class="woocommerce-result-count"> ( Показ 1 – {{ filteredProducts.length }} продуктов из {{filteredProducts.length}} продуктов )</div>
                            </div>
                            <div class="products-header-right">
                                <div class="product-show">
                                    <button @click="onClear" class="h6 font-700 text-secondary mb-0">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div class="showing-products pt-30 pb-50 border-2 border-bottom border-light">
                            <div class="row row-cols-xxl-2 row-cols-md-2 row-cols-1 g-3 shop-list product-list e-bg-light e-title-hover-primary e-hover-image-zoom e-btn-set-four cart-slide-left">
                                <div v-for="item in filteredProducts" :key="item._id" class="col">
                                    <div class="product type-product">
                                        <div class="product-wrapper">
                                            <div class="product-image">
                                                <router-link :to="{ name: 'detail', params: { id: item._id } }" class="woocommerce-LoopProduct-link"><img :src="baseUrl+'/'+item.image" alt="Product Image"></router-link>
                                                <div class="hover-area">
                                                    <div class="cart-button">
                                                        <a @click="onAddCart(item)" class="button add_to_cart_button" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Add to Cart" aria-label="Add to Cart">Add to Cart</a>
                                                    </div>
                                                    <div class="wishlist-button">
                                                        <a @click="onAddWishList(item)" class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                                    </div>
                                                    <div class="compare-button">
                                                        <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <h3 class="product-title"><router-link :to="{ name: 'detail', params: { id: item._id } }">{{item.title}}</router-link></h3>
                                                <div class="product-price">
                                                    <div class="price">
                                                        <ins>${{item.price}}</ins>
                                                        <del>${{item.price*2}}</del>
                                                    </div>
                                                </div>
                                                <div class="shipping-feed-back">
                                                    <div class="star-rating">
                                                        <div class="rating-wrap">
                                                            <a href="#"><i class="fas fa-star"></i><span> 4.7 (35)</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-3">
                            <div class="showing-result">Показ 1 – {{ filteredProducts.length }} продуктов из {{filteredProducts.length}} продуктов</div>
                            <div class="pagination-style-one">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <mini-footer></mini-footer>

        <!--============== Modal Start ==============-->
        <div class="overlay-dark modal fade quick-view-modal" id="quick-view">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="close view-close">
                        <span class="flaticon-cancel"></span>
                    </div>
                    <div class="modal-body property-block summary p-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="e-hover-image-zoom e-image-bg-light">
                                    <div class="product type-product">
                                        <div class="product-wrapper">
                                            <div class="product-image">
                                                <a href="single-shop.html" class="woocommerce-LoopProduct-link"><img src="assets/images/products/squire-2.png" alt="Product Image"></a>
                                                <ul class="position-absolute quick-meta">
                                                    <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Transfer" aria-label="Transfer"><i class="flaticon-transfer flat-mini"></i></a></li>
                                                    <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Wishlist" aria-label="Wishlist"><i class="flaticon-like flat-mini"></i></a></li>
                                                    <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Share" aria-label="Share"><i class="flaticon-share flat-mini"></i></a></li>
                                                    <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Print" aria-label="Print"><i class="flaticon-printer flat-mini"></i></a></li>
                                                </ul>
                                                <div class="product-labels">
                                                    <div class="shape1-badge3"><span>New</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="e-hover-image-zoom e-image-bg-light">
                                    <div class="product type-product">
                                        <div class="product-wrapper">
                                            <div class="product-info">
                                                <div class="product-cats"><a href="#">Apparel Accessories</a></div>
                                                <h3 class="product-title"><a href="single-shop.html">Osteoarthrit Anti Arthritis Health Compression Therapy Gloves</a></h3>
                                                <div class="product-price">
                                                    <div class="price">
                                                        <ins>$15.00 - 22.92</ins>
                                                    </div>
                                                    <span class="text-white font-mini px-2 rounded product-status ms-5 my-1 bg-primary"><i class="fas fa-check"></i> Available</span>
                                                </div>
                                                <div class="shipping-cost"><span>+Shipping: </span> <span>$1.00</span> </div>
                                                <div class="shipping-feed-back">
                                                    <div class="star-rating">
                                                        <div class="rating-wrap">
                                                            <a href="single-shop.html"><i class="fas fa-star"></i><span> 4.9</span></a>
                                                        </div>
                                                        <div class="rating-counts-wrap">
                                                            <a href="#">(543)</a>
                                                        </div>
                                                    </div>
                                                    <div class="sold-items">
                                                        <span>142</span> <span>Sold</span>
                                                    </div>
                                                </div>
                                                <div class="product-offers mt-3">
                                                    <ul class="product-offers-list">
                                                        <li class="product-offer-item"> <strong>Special Price </strong>Get extra 19% off (price inclusive of discount)</li>
                                                        <li class="product-offer-item"> <strong>Bank Offer </strong> 10% instant discount on VISA Cards</li>
                                                        <li class="product-offer-item"> <strong>No cost EMI $49/month.</strong> Standard EMI also available</li>
                                                    </ul>
                                                </div>
                                                <h5 class="text-secondary my-3">Description</h5>
                                                <p>Bibendum purus aenean mus aenean eu interdum nonummy ipsum ad consequat. Dui eros donec faucibus convallis tempus rutrum id donec mus hymenaeos placerat congue curae mauris turpis</p>
                                                <div class="short-description d-flex">
                                                    <span class="me-4"><b>Highlights:</b></span>
                                                    <div class="short-description">
                                                        <ul class="list-style-tick">
                                                            <li>Regular Fit.</li>
                                                            <li>Full sleeves.</li>
                                                            <li>Machine wash, tumble dry.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="hover-area">
                                                    <div class="compare-button">
                                                        <a href="#">Compare</a>
                                                    </div>
                                                    <div class="cart-button">
                                                        <a href="#">Add to Cart</a>
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
        <!--============== Modal End ==============-->

    </div>
</template>

<script>
import { categoryService } from '../_services/category.service'
import MiniFooter from './MiniFooter.vue'
import MiniHeader from './MiniHeader.vue'
import {mapActions} from 'vuex';
import {cartService} from '@/_services/cart.service'
import {wishListService} from '@/_services/wishList.service'
export default {
  components: { MiniHeader, MiniFooter },
    name: 'ShopList',
    data () {
        return {
            categories: [],
            baseUrl: process.env.VUE_APP_BASE_URL,
            categoryId: '',
            priceFilter: [
                { start: 0, end: 50 },
                { start: 50, end: 100 },
                { start: 100, end: 200 },
                { start: 200, end: 400 },
                { start: 400, end: 800 },
                { start: 800, end: '+' }
            ],
            price: {}
        }
    },
    computed: {
        products () {
          return this.$store.getters['products/products']
        },
        userProfile () {
          return this.$store.state.account.user
        },
        newProducts () {
            return this.$store.getters['products/newProducts']
        },
        filteredProducts () {
            let res = this.products;
            if (this.categoryId)
                res =  res.filter(i => i.category._id === this.categoryId)
            if (this.price.start > -1) {
                console.log(this.price.start)
                res = res.filter(i => i.price >= this.price.start && (this.price.end === '+' ? true : i.price <= this.price.end))
            }    
            return res
        }
    },
    mounted () {
        this.fetchCategories()
        this.getProducts()
    },
    methods: {
         ...mapActions('cart', ['getProducts']),
      ...mapActions('wishList', ['getWishProducts']),
      ...mapActions('products', ['getProducts']),
        fetchCategories () {
            categoryService.getAll().then(res => {
                this.categories = res
            }).catch(err => console.log(err))
        },
        productCount (catId) {
            return this.products.filter(i => i.category._id === catId).length || 0
        },
        onAddCart (item) {
        const data = { userId: this.userProfile.user.id, productId: item._id }
        cartService.create(data).then(() => {
            this.getProducts({ userId: this.userProfile.user.id })
        }).catch(err => console.log(err))
      },
      onClear () {
          this.categoryId = ''
          this.price = {}
      },
      onAddWishList (item) {
        const data = { userId: this.userProfile.user.id, productId: item._id }
        wishListService.create(data).then(() => {
          this.getWishProducts({ userId: this.userProfile.user.id })
        }).catch(err => console.log(err))
      },
      onCategory(item) {
          this.categoryId = item._id
      },
      onPrice (item) {
          console.log(item)
          this.price = item
      }
    }
}
</script>

<style>

</style>