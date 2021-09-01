<template>
<div class="cart-view position-relative m-0 ml-30">
                <a href="#" class="has-cart-data position-relative top-quantity d-flex align-items-center text-decoration-none" title="View Cart">
                  <i class="flaticon-shopping-cart flat-small text-dark me-1"></i>
                  <span>{{ products.length }}</span>
                </a>
                <div class="cart-popup">
                  <ul class="cart_list product_list_widget ">
                    <li v-for="item in products" :key="item._id" class="mini-cart-item">
                      <button @click="onRemoveCart(item._id)" class="remove" title="Remove this item"><i class="fas fa-times"></i></button>
                      <a href="#" class="product-image bg-light"><img :src="baseUrl+'/'+item.productId.image" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Cart product"></a>
                      <a href="#" class="product-name">{{item.productId.title}}</a>
                      <div class="woocommerce-product-rating">
                        <div class="star-rating">
                          <div class="rating-wrap">
                            <a href="single-shop.html"><i class="fas fa-star"></i><span> 4.9 (68)</span></a>
                          </div>
                        </div>
                      </div>
                      <div class="variation">
                        <span>Категория:</span>
                        <span>{{item.productId.category.title}}</span>
                      </div>
                      <div class="cart-item-quantity">1 ×
                        <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{{item.productId.price}}</bdi>
                                                    </span>
                      </div>
                    </li>
                  </ul>
                  <div class="total-cart">
                    <div class="title">Общее: </div>
                    <div class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>{{products.reduce((acc,i) => acc + i.productId.price, 0)}}</span>
                    </div>
                  </div>
                  <div class="buttons">
                    <a href="/cart" class="btn btn-primary rounded-0 view-cart">Посмотреть корзину</a>
                    <!-- <a href="/cart" class="btn btn-secondary rounded-0 checkout">Проверять</a> -->
                  </div>
                </div>
              </div>
</template>

<script>
import { mapActions } from 'vuex'
import { cartService } from '@/_services/cart.service'
export default {
    name: 'CartPopUp',
    data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL
    }
  },
  computed: {
    products () {
      return this.$store.getters['cart/products']
    },
    userProfile () {
      return this.$store.state.account.user
    }
  },
  mounted() {
    this.getProducts({ userId: this.userProfile.user.id })
  },
  methods: {
      ...mapActions('cart', ['getProducts']),
      onRemoveCart(id) {
          cartService.delete(id).then(() => {
              this.getProducts({ userId: this.userProfile.user.id })
          }).catch(err => console.log(err))
      }
  }
}
</script>

<style>

</style>