<template>
  <div>
      <main-header></main-header>
      <div class="full-row bg-light py-5">
            <div class="container">
                <div class="row text-secondary">
                    <div class="col-sm-6">
                        <h3 class="mb-2 text-secondary">Мой аккаунт</h3>
                    </div>
                    <div class="col-sm-6">
                        <nav aria-label="breadcrumb" class="d-flex justify-content-sm-end align-items-center h-100">
                            <ol class="breadcrumb mb-0 d-inline-flex bg-transparent p-0">
                                <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home me-1"></i>Дом</a></li>
                                <li class="breadcrumb-item"><a href="#">Магазин</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Мой аккаунт</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="woocommerce">
                            <div class="row">
                                <div class="col-lg-6 col-md-8 col-12 mx-auto">
                                    <div class="sign-in-form">
                                        <h3>Логин пользователя</h3>
                                        <form class="woocommerce-form-login" @submit.prevent="onSubmit">
                                            <p>
                                                <label for="username">Имя пользователя<span class="required">*</span></label>
                                                <input v-model="user.username" type="text" class="form-control" name="username" id="username"> </p>
                                            <p>
                                                <label for="password">Пароль<span class="required">*</span></label>
                                                <input v-model="user.password" class="form-control" type="password" name="password" id="password">
                                            </p>
                                            <p class="form-row">
                                                <label class="woocommerce-form__label-for-checkbox">
                                                    <input name="rememberme" type="checkbox"> 
                                                    <span> Запомни меня</span>
                                                </label>
                                                <button type="submit" class="woocommerce-form-login__submit btn btn-primary rounded-0" name="login" value="Log in">Log in</button>
                                            </p>
                                            <p>
                                                <a href="#" class="text-secondary">Забыли пароль?</a>
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
        <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MainFooter from './Footer.vue'
import MainHeader from './Header.vue'
export default {
  components: { MainFooter, MainHeader },
    name: 'Login',
    data () {
        return {
            user: {}
        }
    },
    methods: {
        ...mapActions('account', ['login']),
        onSubmit () {
            this.login(this.user)
        }
    }
}
</script>