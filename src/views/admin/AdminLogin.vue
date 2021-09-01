<template>
  <div class="full-row vh-100 d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="woocommerce">
            <div class="row">
              <div class="col-lg-6 col-md-8 col-12 mx-auto">
                <div class="sign-in-form">
                  <h3>BigBazar</h3>
                  <form class="woocommerce-form-login" @submit.prevent="onSubmit">
                    <p>
                      <label for="username">Username<span class="required">*</span></label>
                      <input v-model="username" type="text" class="form-control" required name="username" id="username"> </p>
                    <p>
                      <label for="password">Password&nbsp;<span class="required">*</span></label>
                      <input v-model="password" class="form-control" required type="password" name="password" id="password">
                    </p>
                    <p class="form-row">
                      <button type="submit" class="woocommerce-form-login__submit btn btn-primary rounded-0" name="login" value="Log in">Log in</button>
                    </p>
                  </form>
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
import {mapActions} from "vuex";

export default {
  name: "AdminLogin",
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    onSubmit () {
      this.login({ username: this.username, password: this.password })
    }
  }
}
</script>

<style scoped>

</style>