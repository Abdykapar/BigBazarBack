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
                        <h3 class="mb-2 text-secondary">Регистрация</h3>
                    </div>
                    <div class="col-sm-6">
                        <nav aria-label="breadcrumb" class="d-flex justify-content-sm-end align-items-center h-100">
                            <ol class="breadcrumb mb-0 d-inline-flex bg-transparent p-0">
                                <li class="breadcrumb-item"><a href="/"><i class="fas fa-home me-1"></i>Дом</a></li>
                                <li class="breadcrumb-item"><a href="#">Магазин</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Регистрация</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb -->

        <!--==================== Registration Form Start ====================-->
        <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="woocommerce">
                            <div class="row">
                                <div class="col-lg-6 col-md-8 col-12 mx-auto">
                                    <div class="registration-form">
                                        <h3>Регистрация</h3>
                                        <form @submit.prevent="onSubmit">
                                            <p>
                                                <label for="reg_email">Имя пользователя<span class="required">*</span></label>
                                                <input v-model="user.username" type="text" required class="form-control" name="username" id="reg_email" />
                                            </p>
                                             <p>
                                                <label for="reg_email1">Пароль<span class="required">*</span></label>
                                                <input v-model="user.password" type="password" required class="form-control" name="password" id="reg_email1" />
                                            </p>
                                             <p>
                                                <label for="reg_email2">Имя<span class="required">*</span></label>
                                                <input v-model="user.name" type="text" required class="form-control" name="name" id="reg_email2" />
                                            </p>
                                             <p>
                                                <label for="reg_email3">Фамилия<span class="required">*</span></label>
                                                <input v-model="user.surname" type="text" required class="form-control" name="surname" id="reg_email3" />
                                            </p>
                                            <p>
                                                <button type="submit" class="btn btn-primary rounded-0" name="register" value="Register">Register</button>
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
        <!--==================== Registration Form Start ====================-->

        <mini-footer></mini-footer>
    </div>
</template>

<script>
import MiniFooter from './MiniFooter.vue'
import MiniHeader from './MiniHeader.vue'
import { userService } from '@/_services/user.service'
export default {
  components: { MiniHeader, MiniFooter },
    name: 'Register',
    data () {
        return {
            user: {}
        }
    },
    methods: {
        onSubmit () {
            userService.register(this.user).then(() => {
                this.$router.push('/')
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>