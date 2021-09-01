<template>
  <div id="page_wrapper" class="bg-light">
    <b-header></b-header>
    <slider-section></slider-section>
    <!--========================= Slider Section End ===========================-->

   <hot-deal-sections></hot-deal-sections>

   <trend-section></trend-section>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BHeader from '@/components/Header'
import BFooter from '@/components/Footer'
import SliderSection from '../components/SliderSection.vue'
import { mapActions } from 'vuex'
import HotDealSections from '../components/HotDealSections.vue'
import TrendSection from '../components/TrendSection.vue'
export default {
  name: 'Home',
  components: {
    BHeader, BFooter, SliderSection,
    HotDealSections,
    TrendSection
  },
  mounted() {
    this.getProducts().then(() => {
     const a = document.getElementById('custom')
     console.log(a)
        if (!a) {
          const s = document.createElement('script')
        s.src = '/assets/js/custom.js'
        s.setAttribute('id', 'custom')
        document.body.append(s)
        }
        
    })
  },
  methods: {
    ...mapActions('products', ['getProducts'])
  }
}
</script>
