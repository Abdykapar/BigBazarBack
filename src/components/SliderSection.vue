<template>
  <div class="bg-light py-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-xl-3">
            <div class="categories-menu-wrapper category-inner category-toggle-md text-dark position-relative">
              <div class="category-title-wrapper align-items-center d-flex bg-dark">
                <i class="flaticon-menu me-3 p-3 text-white flat-mini bg-primary"></i>
                <span class="higlight-font font-400 font-small text-white">Все отделения</span>
              </div>
              <div class="bg-white categories-menu">
                <ul class="menu">
                  <li v-for="item in categories" :key="item._id">
                      <router-link to="/list"><span>{{item.title}}</span><span>{{ productCount(item._id) }}</span></router-link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 mt-lg-0 mt-md-4">
            <div class="w-100 overflow-hidden">
              <div id="slider" style="width:1200px; height:580px; margin:0 auto;margin-bottom: 0px;">
                <!-- Slide 1-->
                <div class="ls-slide" data-ls="duration:8000; transition2d:4; kenburnsscale:1.2;">
                  <img width="1920" height="1080" src="/image/23.png" class="ls-l" alt="" style="top:50%; left:50%; text-align:initial; font-weight:400; font-style:normal; text-decoration:none; mix-blend-mode:normal; width:100%;" data-ls="showinfo:1; durationin:2000; easingin:easeOutExpo; scalexin:1.5; scaleyin:1.5; position:fixed;">

                  <p style="width:400px; font-size:50px; line-height:60px; top:40%; left:200px; white-space:normal;" class="ls-l higlight-font font-500 ls-hide-phone text-white" data-ls="offsetyin:150; durationin:700; delayin:500; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
                    LIVING
                    <br> FURNITURE
                  </p>
                  <p style="font-size:15px; letter-spacing: 2px; line-height:20px; top:23%; left:200px;" class="ls-l ordenery-font text-white font-600 ls-hide-phone" data-ls="offsetyin:150; durationin:700; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">SALE UPTO 30%</p>

                  <p style="width:580px; font-weight:500; font-size:17px; line-height:30px; top:58%; left:220px; white-space:normal;" class="ls-l ls-hide-phone text-white ordenery-font" data-ls="offsetxin:150; durationin:700; easingin:easeOutBack; rotatexin:20; scalexin:1; offsetyout:600; durationout:400; parallaxlevel:0; delayin:900;">Free Shipping<br>Buy Minimum $50</p>

                  <div style="width:3px; height:60px; border-radius:0; top:58%; left:200px;" class="ls-l ls-hide-phone bg-primary" data-ls="offsetxin:100; easingin:easeOutBack; delayin:700; durationout:400; offsetxout:-20; parallax:false; parallaxlevel:1;"></div>

                  <a style="" class="ls-l ls-hide-phone" href="#" target="_self" data-ls="offsetyin:150; durationin:700; delayin:1200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; hover:true; hoveropacity:1; hoverbgcolor:#e74c3c ; parallaxlevel:0;">
                    <p style="cursor:pointer;padding-top:10px; padding-bottom:8px; font-weight: 500; font-size:14px; top:72%; left:200px; background:#2a3645; color:#ffffff; padding-right:25px; padding-left:25px; line-height:30px;" class="">SHOP NOW</p>
                  </a>
                </div>

                <!-- Slide 1-->
                <div class="ls-slide" data-ls="duration:8000; transition2d:4; kenburnsscale:1.2;">
                  <img width="1920" height="1080" src="/image/24.png" class="ls-l" alt="" style="top:50%; left:50%; text-align:initial; font-weight:400; font-style:normal; text-decoration:none; mix-blend-mode:normal; width:100%;" data-ls="showinfo:1; durationin:2000; easingin:easeOutExpo; scalexin:1.5; scaleyin:1.5; position:fixed;">

                  <p style="width:400px; font-size:50px; line-height:60px; top:40%; left:200px; white-space:normal;" class="ls-l higlight-font font-500 ls-hide-phone text-white" data-ls="offsetyin:150; durationin:700; delayin:500; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
                    LIVING
                    <br> FURNITURE
                  </p>
                  <p style="font-size:15px; letter-spacing: 2px; line-height:20px; top:23%; left:200px;" class="ls-l ordenery-font text-white font-600 ls-hide-phone" data-ls="offsetyin:150; durationin:700; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">SALE UPTO 30%</p>

                  <p style="width:580px; font-weight:500; font-size:17px; line-height:30px; top:58%; left:220px; white-space:normal;" class="ls-l ls-hide-phone text-white ordenery-font" data-ls="offsetxin:150; durationin:700; easingin:easeOutBack; rotatexin:20; scalexin:1; offsetyout:600; durationout:400; parallaxlevel:0; delayin:900;">Free Shipping<br>Buy Minimum $50</p>

                  <div style="width:3px; height:60px; border-radius:0; top:58%; left:200px;" class="ls-l ls-hide-phone bg-primary" data-ls="offsetxin:100; easingin:easeOutBack; delayin:700; durationout:400; offsetxout:-20; parallax:false; parallaxlevel:1;"></div>

                  <a style="" class="ls-l ls-hide-phone" href="#" target="_self" data-ls="offsetyin:150; durationin:700; delayin:1200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; hover:true; hoveropacity:1; hoverbgcolor:#e74c3c ; parallaxlevel:0;">
                    <p style="cursor:pointer;padding-top:10px; padding-bottom:8px; font-weight: 500; font-size:14px; top:72%; left:200px; background:#2a3645; color:#ffffff; padding-right:25px; padding-left:25px; line-height:30px;" class="">SHOP NOW</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-3 mt-20">
              <div class="col" v-if="hotProducts[0]">
                <div class="banner-wrapper hover-img-zoom banner-one custom-class-101">
                  <div class="banner-image overflow-hidden transation"><img :src="baseUrl+'/'+hotProducts[0].image" alt="Banner Image"></div>
                  <div class="banner-content w-50 position-absolute">
                    <span class="d-block mb-10 font-500 text-general font-general">Горячий продукт</span>
                    <h6><router-link :to="{ name: 'detail', params: { id: hotProducts[0]._id } }" class="text-secondary mb-10 d-block text-uppercase">{{hotProducts[0].title}}</router-link></h6>
                    <span class="d-block text-primary font-600 font-fifteen">${{hotProducts[0].price}}</span>
                    <button @click="onAddCart(hotProducts[0])" class="btn-link-down-line font-700 mt-20">Купить сейчас</button>
                  </div>
                </div>
              </div>
              <div class="col" v-if="hotProducts[1]">
                <div class="banner-wrapper hover-img-zoom banner-one custom-class-102">
                    <div class="banner-image overflow-hidden transation"><img :src="baseUrl+'/'+hotProducts[1].image" alt="Изображение баннера"></div>
                    <div class="banner-content w-50 position-absolute">
                        <span class="d-block mb-10 font-500 text-white font-general"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Эксклюзивный</font></font></span>
                        <h4><router-link :to="{ name: 'detail', params: { id: hotProducts[1]._id } }"  class="text-white mb-10 d-block text-uppercase"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{hotProducts[1].title}}</font></font></router-link></h4>
                        <span class="d-block text-white font-600 font-fifteen"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Начать с $ {{hotProducts[1].price}}</font></font></span>
                        <button @click="onAddCart(hotProducts[1])" class="btn-border font-500 mt-20"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Купить сейчас</font></font></button>
                    </div>
                </div>
                </div>
                <div class="col" v-if="hotProducts[2]">
                    <div class="banner-wrapper hover-img-zoom banner-one custom-class-103">
                        <div class="banner-image overflow-hidden transation"><img :src="baseUrl+'/'+hotProducts[2].image" alt="Banner Image"></div>
                        <div class="banner-content w-50 position-absolute">
                            <span class="d-block mb-10 font-500 text-general font-general">Горячий продукт</span>
                            <h6><router-link :to="{ name: 'detail', params: { id: hotProducts[2]._id } }"  class="text-secondary mb-10 d-block text-uppercase">{{ hotProducts[2].title }}</router-link></h6>
                            <span class="d-block text-primary font-600 font-fifteen">${{hotProducts[2].price}}</span>
                            <button @click="onAddCart(hotProducts[2])" class="btn-link-down-line font-700 mt-20">Купить сейчас</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { categoryService } from '../_services/category.service'
import { cartService } from '@/_services/cart.service'
import { mapActions } from 'vuex'
export default {
    name: 'SliderSection',
    data () {
        return {
            categories: [],
            baseUrl: process.env.VUE_APP_BASE_URL
        }
    },
    computed: {
        hotProducts () {
            return this.$store.getters['products/hotProducts']
        },
        userProfile () {
          return this.$store.state.account.user
        },
        products () {
          return this.$store.getters['products/products']
        },
    },
    mounted() {
        this.fetchCategories()
    },
    methods: {
       ...mapActions('cart', ['getProducts']),
        fetchCategories () {
            categoryService.getAll().then((res) => {
                this.categories = res
            }).catch((err) => {
                console.log(err)
            });
        },
        onAddCart (item) {
          const data = { userId: this.userProfile.user.id, productId: item._id }
          cartService.create(data).then(() => {
              this.getProducts({ userId: this.userProfile.user.id })
          }).catch(err => console.log(err))
      },
      productCount (catId) {
        return this.products.filter(i => i.category._id === catId).length || 0
      }
    }
}
</script>

<style>

</style>