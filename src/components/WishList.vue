<template>
  <div id="page_wrapper" class="bg-white">
        <!--==================== Header Section Start ====================-->
        <mini-header></mini-header>
        <!--==================== Header Section End ====================-->

        <!-- breadcrumb -->
        <div class="full-row bg-light py-5">
            <div class="container">
                <div class="row text-secondary">
                    <div class="col-sm-6">
                        <h3 class="mb-2 text-secondary">Список желаний</h3>
                    </div>
                    <div class="col-sm-6">
                        <nav aria-label="breadcrumb" class="d-flex justify-content-sm-end align-items-center h-100">
                            <ol class="breadcrumb mb-0 d-inline-flex bg-transparent p-0">
                                <li class="breadcrumb-item"><a href="/"><i class="fas fa-home me-1"></i>Дом</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Список желаний</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb -->

        <!--==================== Wishlist Section Start ====================-->
        <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <form action="#" id="yith-wcwl-form" class="table-responsive-lg">
                            <table class="shop_table cart wishlist_table wishlist_view traditional table" data-pagination="no" data-per-page="5" data-page="1" data-id="3989" data-token="G5CZRAZPRKEY">
                                <thead>
                                    <tr>
                                        <th class="product-remove"> <span class="nobr"> </span></th>
                                        <th class="product-thumbnail"></th>
                                        <th class="product-name"> <span class="nobr"> Название продукта </span></th>
                                        <th class="product-price"> <span class="nobr"> Цена</span></th>
                                        <th class="product-add-to-cart"> <span class="nobr"> </span></th>
                                    </tr>
                                </thead>
                                <tbody class="wishlist-items-wrapper">
                                    <tr v-for="item in products" :key="item._id" id="yith-wcwl-row-103" data-row-id="103">
                                        <td class="product-remove">
                                            <div>
                                                <button @click="onRemove(item._id)" class="remove remove_from_wishlist" title="Remove this product"></button>
                                            </div>
                                        </td>
                                        <td class="product-thumbnail">
                                            <a href="#"> <img :src="baseUrl+'/'+item.productId.image" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt=""> </a>
                                        </td>
                                        <td class="product-name"> <a href="https://kapee.presslayouts.com/product/navy-blue-silver-white-multifunction-analog-watch/">{{item.productId.title}}</a></td>
                                        <td class="product-price"> <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{{item.productId.price}}</bdi>
                                            </span>
                                        </td>
                                        <td class="product-add-to-cart">
                                            <!-- Date added -->
                                            <!-- Add to cart button --><button @click="onAddChart(item)" data-quantity="1" class="button add_to_cart_button ajax_add_to_cart add_to_cart alt" data-product_id="103" aria-label="Add “Navy Blue-Silver-White Multifunction Analog Watch” to your cart">Add to Cart</button>
                                            <!-- Change wishlist -->
                                            <!-- Remove from wishlist -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--==================== Wishlist Section End ====================-->

<mini-footer></mini-footer>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { cartService } from '@/_services/cart.service'
import { wishListService } from '@/_services/wishList.service'
import MiniFooter from './MiniFooter.vue'
import MiniHeader from './Header.vue'
export default {
    name: 'WishList',
    components: { MiniFooter, MiniHeader },
    data () {
        return {
            baseUrl: process.env.VUE_APP_BASE_URL
        }
    },
    computed: {
        products () {
            return this.$store.getters['wishList/products']
        },
        userProfile () {
            return this.$store.state.account.user
        }
    },
    mounted() {
        this.getWishProducts({ userId: this.userProfile.user.id })
    },
    methods: {
        ...mapActions('wishList', ['getWishProducts']),
        ...mapActions('cart', ['getProducts']),
        onAddChart(item) {
            const data = { productId: item.productId._id, userId: item.userId._id }
            cartService.create(data).then(() => {
                this.getProducts({ userId: this.userProfile.user.id })
                return wishListService.delete(item._id)
            }).then(() => {
                this.getWishProducts({ userId: this.userProfile.user.id })
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>