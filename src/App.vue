<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'App',
    computed: {
      loader () {
        return this.$store.getters['loader/loading']
      },
      alert () {
        return this.$store.getters['alert/alert']
      }
    },
    watch: {
      alert (value) {
        if (value.type && value.message) {
          // this.$toastr[value.type](value.message)
          this.removeAlert()
        }
      }
    },
    mounted () {
      // const s = document.createElement('script')
      // s.src = '/assets/js/custom.js'
      // document.body.append(s)
    },
    methods: {
      ...mapActions('alert', [ 'removeAlert' ])
    },
  }
</script>
