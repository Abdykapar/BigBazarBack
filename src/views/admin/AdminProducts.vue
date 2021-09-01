<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Products</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button @click="onAddNew" type="button" class="btn btn-sm btn-outline-secondary">Add new</button>
        </div>
      </div>
    </div>
   <div class="showing-products product-list pt-30 pb-50 border-2 border-bottom border-light">
            <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 e-hover-image-zoom after-border-two e-btn-set-two cart-slide-up gy-3 gx-0">
                <div class="col" v-for="item in products" :key="item._id">
                    <div class="product type-product">
                        <div class="product-wrapper">
                            <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img :src="item.src" alt="Product Image"></a>
                                <div class="product-labels">
                                    <div class="shape1-badge3"><span>New</span></div>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-cats"><a href="#">{{item.category && item.category.title}}</a></div>
                                <h3 class="product-title"><a href="#">{{item.title}}</a></h3>
                                <div class="product-price">
                                    <div class="price">
                                        <ins>{{item.price}}</ins>
                                    </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$6.00</span> </div>
                                <div class="shipping-feed-back">
                                    <div class="star-rating">
                                        <div class="rating-wrap">
                                            <br>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover-area">
                                    <div class="cart-button">
                                        <button @click="onEdit(item)">
                                              Edit  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                            </button>
                                    </div>
                                    <div class="wishlist-button">
                                        <button @click="onDelete(item._id)">
                                             Delete   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <modal v-if="isShow" @close="isShow = false">
      <template v-slot:content>
        <add-product @cancel="isShow = false" :is-edit="isEdit" :edit-product="product" @close="onClose" />
      </template>
    </modal>
  </div>
</template>

<script>
import { productService } from '@/_services/product.service';
import AddProduct from '../../components/AddProduct.vue';
import Modal from '@/components/elements/Modal'
import { categoryService } from '../../_services/category.service';
export default {
    name: 'Products',
    components: { AddProduct, Modal },
    data () {
        return {
            isShow: false,
            isEdit: false,
            product: {},
            products: []
        }
    },
    mounted () {
        this.fetchProducts()
    }, 
    methods: {
        onClose () {
            this.isShow = false
            this.fetchProducts()
        },
        fetchProducts () {
            productService.getAll().then(async res => {
                for (let i of res) {
                    const img = await categoryService.getFile(i.image)
                    const blob = await img.blob()
                    i.src = URL.createObjectURL(blob)
                }
                this.products = res
            }).catch(err => console.log(err))
        },
        onAddNew () {
            this.isEdit = false
            this.isShow = true
        },
        onEdit (item) {
            this.product = { ...item, category: item.category._id }
            this.isEdit = true
            this.isShow = true
        },
        onDelete (id) {
            productService.delete(id).then(() => {
                this.fetchProducts()
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>