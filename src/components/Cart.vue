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
                        <h3 class="mb-2 text-secondary">Страница корзины</h3>
                    </div>
                    <div class="col-sm-6">
                        <nav aria-label="breadcrumb" class="d-flex justify-content-sm-end align-items-center h-100">
                            <ol class="breadcrumb mb-0 d-inline-flex bg-transparent p-0">
                                <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home me-1"></i>Дом</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Корзина</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb -->

        <!--==================== Cart Section Start ====================-->
        <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-12 col-md-12 col-12">
                        <form class="woocommerce-cart-form" action="#" method="post">
                            <table class="shop_table cart">
                                <tbody><tr>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-thumbnail">&nbsp;</th>
                                    <th class="product-name">Продукт</th>
                                    <th class="product-price">Цена</th>
                                    <th class="product-quantity">Количество</th>
                                    <th class="product-subtotal">Промежуточный итог</th>
                                </tr>
                                <tr v-for="item in products" :key="item._id" class="woocommerce-cart-form__cart-item cart_item">
                                    <td class="product-remove">
                                        <button @click="onRemoveCart(item._id)" class="remove"></button>
                                    </td>
                                    <td class="product-thumbnail">
                                        <a href="#"><img :src="baseUrl+'/'+item.productId.image" alt="Product image"></a>
                                    </td>
                                    <td class="product-name">
                                        <a href="#">{{item.productId.title}}</a>
                                        <dl class="variation">
                                            <dt class="variation-Vendor">Категория:</dt>
                                            <dd class="variation-Vendor">{{item.productId.category.title}}</dd>
                                        </dl>
                                    </td>
                                    <td class="product-price">
                                        <span><bdi><span>$</span>{{ item.productId.price }}</bdi>
                                        </span>
                                    </td>
                                    <td class="product-quantity">
                                        <div class="quantity">
                                            <input type="number" v-model="item.count" name="quantity">
                                            <div class="quantity-nav">
                                                <div @click="onCountChange(-1, item)" class="quantity-button quantity-down">-</div>
                                                <div @click="onCountChange(1, item)" class="quantity-button quantity-up">+</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span><bdi><span>$</span>{{item.count * item.productId.price}}</bdi>
                                        </span>
                                    </td>
                                </tr>
                                
                            </tbody></table>
                        </form>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-12 col-12">
                        <div class="cart-collaterals">
                            <div class="cart_totals ">
                                <h2>ИТОГИ КОРЗИНЫ</h2>
                                <table>
                                    <tbody><tr>
                                        <th>Промежуточный итог</th>
                                        <td>
                                            <span><bdi><span>$</span>{{ totalPrice }}</bdi>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Перевозки</th>
                                        <td>
                                            <ul>
                                                <li>
                                                    <input type="radio" name="shipping_method" class="shipping_method" id="shipping_method_0_free_shipping1" checked="checked">
                                                    <label for="shipping_method_0_free_shipping1"> Бесплатная доставка</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="shipping_method" class="shipping_method" id="shipping_method_0_flat_rate2">
                                                    <label for="shipping_method_0_flat_rate2">Фиксированная ставка</label>
                                                </li>
                                            </ul>
                                            <p class="woocommerce-shipping-destination">Варианты доставки будут обновлены во время оформления заказа.</p>
                                            <form class="woocommerce-shipping-calculator" action="#" method="post">
                                                <a href="#" class="shipping-calculator-button btn-link-down-line">Рассчитать стоимость доставки</a>
                                                <div class="shipping-calculator-form">
                                                    <p>
                                                        <select name="calc_shipping_country" class="country_to_state">
                                                      <option value="default">Select a country / region…</option>
                                                      <option value="AF">Afghanistan</option>
                                                      <option value="AX">Åland Islands</option>
                                                      <option value="AL">Albania</option>
                                                      <option value="DZ">Algeria</option>
                                                      <option value="AS">American Samoa</option>
                                                      <option value="AD">Andorra</option>
                                                      <option value="AO">Angola</option>
                                                      <option value="AI">Anguilla</option>
                                                      <option value="AQ">Antarctica</option>
                                                      <option value="AG">Antigua and Barbuda</option>
                                                      <option value="AR">Argentina</option>
                                                      <option value="AM">Armenia</option>
                                                      <option value="AW">Aruba</option>
                                                      <option value="AU">Australia</option>
                                                      <option value="AT">Austria</option>
                                                      <option value="AZ">Azerbaijan</option>
                                                      <option value="BS">Bahamas</option>
                                                      <option value="BH">Bahrain</option>
                                                      <option value="BD">Bangladesh</option>
                                                      <option value="BB">Barbados</option>
                                                      <option value="BY">Belarus</option>
                                                      <option value="PW">Belau</option>
                                                      <option value="BE">Belgium</option>
                                                      <option value="BZ">Belize</option>
                                                      <option value="BJ">Benin</option>
                                                      <option value="BM">Bermuda</option>
                                                      <option value="BT">Bhutan</option>
                                                      <option value="BO">Bolivia</option>
                                                      <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                      <option value="BA">Bosnia and Herzegovina</option>
                                                      <option value="BW">Botswana</option>
                                                      <option value="BV">Bouvet Island</option>
                                                      <option value="BR">Brazil</option>
                                                      <option value="IO">British Indian Ocean Territory</option>
                                                      <option value="BN">Brunei</option>
                                                      <option value="BG">Bulgaria</option>
                                                      <option value="BF">Burkina Faso</option>
                                                      <option value="BI">Burundi</option>
                                                      <option value="KH">Cambodia</option>
                                                      <option value="CM">Cameroon</option>
                                                      <option value="CA">Canada</option>
                                                      <option value="CV">Cape Verde</option>
                                                      <option value="KY">Cayman Islands</option>
                                                      <option value="CF">Central African Republic</option>
                                                      <option value="TD">Chad</option>
                                                      <option value="CL">Chile</option>
                                                      <option value="CN">China</option>
                                                      <option value="CX">Christmas Island</option>
                                                      <option value="CC">Cocos (Keeling) Islands</option>
                                                      <option value="CO">Colombia</option>
                                                      <option value="KM">Comoros</option>
                                                      <option value="CG">Congo (Brazzaville)</option>
                                                      <option value="CD">Congo (Kinshasa)</option>
                                                      <option value="CK">Cook Islands</option>
                                                      <option value="CR">Costa Rica</option>
                                                      <option value="HR">Croatia</option>
                                                      <option value="CU">Cuba</option>
                                                      <option value="CW">Curaçao</option>
                                                      <option value="CY">Cyprus</option>
                                                      <option value="CZ">Czech Republic</option>
                                                      <option value="DK">Denmark</option>
                                                      <option value="DJ">Djibouti</option>
                                                      <option value="DM">Dominica</option>
                                                      <option value="DO">Dominican Republic</option>
                                                      <option value="EC">Ecuador</option>
                                                      <option value="EG">Egypt</option>
                                                      <option value="SV">El Salvador</option>
                                                      <option value="GQ">Equatorial Guinea</option>
                                                      <option value="ER">Eritrea</option>
                                                      <option value="EE">Estonia</option>
                                                      <option value="ET">Ethiopia</option>
                                                      <option value="FK">Falkland Islands</option>
                                                      <option value="FO">Faroe Islands</option>
                                                      <option value="FJ">Fiji</option>
                                                      <option value="FI">Finland</option>
                                                      <option value="FR">France</option>
                                                      <option value="GF">French Guiana</option>
                                                      <option value="PF">French Polynesia</option>
                                                      <option value="TF">French Southern Territories</option>
                                                      <option value="GA">Gabon</option>
                                                      <option value="GM">Gambia</option>
                                                      <option value="GE">Georgia</option>
                                                      <option value="DE">Germany</option>
                                                      <option value="GH">Ghana</option>
                                                      <option value="GI">Gibraltar</option>
                                                      <option value="GR">Greece</option>
                                                      <option value="GL">Greenland</option>
                                                      <option value="GD">Grenada</option>
                                                      <option value="GP">Guadeloupe</option>
                                                      <option value="GU">Guam</option>
                                                      <option value="GT">Guatemala</option>
                                                      <option value="GG">Guernsey</option>
                                                      <option value="GN">Guinea</option>
                                                      <option value="GW">Guinea-Bissau</option>
                                                      <option value="GY">Guyana</option>
                                                      <option value="HT">Haiti</option>
                                                      <option value="HM">Heard Island and McDonald Islands</option>
                                                      <option value="HN">Honduras</option>
                                                      <option value="HK">Hong Kong</option>
                                                      <option value="HU">Hungary</option>
                                                      <option value="IS">Iceland</option>
                                                      <option value="IN">India</option>
                                                      <option value="ID">Indonesia</option>
                                                      <option value="IR">Iran</option>
                                                      <option value="IQ">Iraq</option>
                                                      <option value="IE">Ireland</option>
                                                      <option value="IM">Isle of Man</option>
                                                      <option value="IL">Israel</option>
                                                      <option value="IT">Italy</option>
                                                      <option value="CI">Ivory Coast</option>
                                                      <option value="JM">Jamaica</option>
                                                      <option value="JP">Japan</option>
                                                      <option value="JE">Jersey</option>
                                                      <option value="JO">Jordan</option>
                                                      <option value="KZ">Kazakhstan</option>
                                                      <option value="KE">Kenya</option>
                                                      <option value="KI">Kiribati</option>
                                                      <option value="KW">Kuwait</option>
                                                      <option value="KG">Kyrgyzstan</option>
                                                      <option value="LA">Laos</option>
                                                      <option value="LV">Latvia</option>
                                                      <option value="LB">Lebanon</option>
                                                      <option value="LS">Lesotho</option>
                                                      <option value="LR">Liberia</option>
                                                      <option value="LY">Libya</option>
                                                      <option value="LI">Liechtenstein</option>
                                                      <option value="LT">Lithuania</option>
                                                      <option value="LU">Luxembourg</option>
                                                      <option value="MO">Macao</option>
                                                      <option value="MG">Madagascar</option>
                                                      <option value="MW">Malawi</option>
                                                      <option value="MY">Malaysia</option>
                                                      <option value="MV">Maldives</option>
                                                      <option value="ML">Mali</option>
                                                      <option value="MT">Malta</option>
                                                      <option value="MH">Marshall Islands</option>
                                                      <option value="MQ">Martinique</option>
                                                      <option value="MR">Mauritania</option>
                                                      <option value="MU">Mauritius</option>
                                                      <option value="YT">Mayotte</option>
                                                      <option value="MX">Mexico</option>
                                                      <option value="FM">Micronesia</option>
                                                      <option value="MD">Moldova</option>
                                                      <option value="MC">Monaco</option>
                                                      <option value="MN">Mongolia</option>
                                                      <option value="ME">Montenegro</option>
                                                      <option value="MS">Montserrat</option>
                                                      <option value="MA">Morocco</option>
                                                      <option value="MZ">Mozambique</option>
                                                      <option value="MM">Myanmar</option>
                                                      <option value="NA">Namibia</option>
                                                      <option value="NR">Nauru</option>
                                                      <option value="NP">Nepal</option>
                                                      <option value="NL">Netherlands</option>
                                                      <option value="NC">New Caledonia</option>
                                                      <option value="NZ">New Zealand</option>
                                                      <option value="NI">Nicaragua</option>
                                                      <option value="NE">Niger</option>
                                                      <option value="NG">Nigeria</option>
                                                      <option value="NU">Niue</option>
                                                      <option value="NF">Norfolk Island</option>
                                                      <option value="KP">North Korea</option>
                                                      <option value="MK">North Macedonia</option>
                                                      <option value="MP">Northern Mariana Islands</option>
                                                      <option value="NO">Norway</option>
                                                      <option value="OM">Oman</option>
                                                      <option value="PK">Pakistan</option>
                                                      <option value="PS">Palestinian Territory</option>
                                                      <option value="PA">Panama</option>
                                                      <option value="PG">Papua New Guinea</option>
                                                      <option value="PY">Paraguay</option>
                                                      <option value="PE">Peru</option>
                                                      <option value="PH">Philippines</option>
                                                      <option value="PN">Pitcairn</option>
                                                      <option value="PL">Poland</option>
                                                      <option value="PT">Portugal</option>
                                                      <option value="PR">Puerto Rico</option>
                                                      <option value="QA">Qatar</option>
                                                      <option value="RE">Reunion</option>
                                                      <option value="RO">Romania</option>
                                                      <option value="RU">Russia</option>
                                                      <option value="RW">Rwanda</option>
                                                      <option value="ST">São Tomé and Príncipe</option>
                                                      <option value="BL">Saint Barthélemy</option>
                                                      <option value="SH">Saint Helena</option>
                                                      <option value="KN">Saint Kitts and Nevis</option>
                                                      <option value="LC">Saint Lucia</option>
                                                      <option value="SX">Saint Martin (Dutch part)</option>
                                                      <option value="MF">Saint Martin (French part)</option>
                                                      <option value="PM">Saint Pierre and Miquelon</option>
                                                      <option value="VC">Saint Vincent and the Grenadines</option>
                                                      <option value="WS">Samoa</option>
                                                      <option value="SM">San Marino</option>
                                                      <option value="SA">Saudi Arabia</option>
                                                      <option value="SN">Senegal</option>
                                                      <option value="RS">Serbia</option>
                                                      <option value="SC">Seychelles</option>
                                                      <option value="SL">Sierra Leone</option>
                                                      <option value="SG">Singapore</option>
                                                      <option value="SK">Slovakia</option>
                                                      <option value="SI">Slovenia</option>
                                                      <option value="SB">Solomon Islands</option>
                                                      <option value="SO">Somalia</option>
                                                      <option value="ZA">South Africa</option>
                                                      <option value="GS">South Georgia/Sandwich Islands</option>
                                                      <option value="KR">South Korea</option>
                                                      <option value="SS">South Sudan</option>
                                                      <option value="ES">Spain</option>
                                                      <option value="LK">Sri Lanka</option>
                                                      <option value="SD">Sudan</option>
                                                      <option value="SR">Suriname</option>
                                                      <option value="SJ">Svalbard and Jan Mayen</option>
                                                      <option value="SZ">Swaziland</option>
                                                      <option value="SE">Sweden</option>
                                                      <option value="CH">Switzerland</option>
                                                      <option value="SY">Syria</option>
                                                      <option value="TW">Taiwan</option>
                                                      <option value="TJ">Tajikistan</option>
                                                      <option value="TZ">Tanzania</option>
                                                      <option value="TH">Thailand</option>
                                                      <option value="TL">Timor-Leste</option>
                                                      <option value="TG">Togo</option>
                                                      <option value="TK">Tokelau</option>
                                                      <option value="TO">Tonga</option>
                                                      <option value="TT">Trinidad and Tobago</option>
                                                      <option value="TN">Tunisia</option>
                                                      <option value="TR">Turkey</option>
                                                      <option value="TM">Turkmenistan</option>
                                                      <option value="TC">Turks and Caicos Islands</option>
                                                      <option value="TV">Tuvalu</option>
                                                      <option value="UG">Uganda</option>
                                                      <option value="UA">Ukraine</option>
                                                      <option value="AE">United Arab Emirates</option>
                                                      <option value="GB" selected="selected">United Kingdom (UK)</option>
                                                      <option value="US">United States (US)</option>
                                                      <option value="UM">United States (US) Minor Outlying Islands</option>
                                                      <option value="UY">Uruguay</option>
                                                      <option value="UZ">Uzbekistan</option>
                                                      <option value="VU">Vanuatu</option>
                                                      <option value="VA">Vatican</option>
                                                      <option value="VE">Venezuela</option>
                                                      <option value="VN">Vietnam</option>
                                                      <option value="VG">Virgin Islands (British)</option>
                                                      <option value="VI">Virgin Islands (US)</option>
                                                      <option value="WF">Wallis and Futuna</option>
                                                      <option value="EH">Western Sahara</option>
                                                      <option value="YE">Yemen</option>
                                                      <option value="ZM">Zambia</option>
                                                      <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                    </p>
                                                    <p>
                                                        <input type="text" class="input-text" value="" placeholder="County" name="calc_shipping_state">
                                                    </p>
                                                    <p>
                                                        <input type="text" class="input-text" value="" placeholder="Town / City" name="calc_shipping_city">
                                                    </p>
                                                    <p>
                                                        <input type="text" class="input-text" value="" placeholder="Postcode" name="calc_shipping_postcode">
                                                    </p>
                                                    <p>
                                                        <button type="submit" name="calc_shipping" value="1" class="button">Update</button>
                                                    </p>
                                                    <input type="hidden" id="woocommerce-shipping-calculator-nonce" name="woocommerce-shipping-calculator-nonce" value="0a66074d35">
                                                    <input type="hidden" name="_wp_http_referer" value="">
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr class="order-total">
                                        <th>Общее</th>
                                        <td><strong><span class="woocommerce-Price-amount amount"><bdi><span>$</span>{{ totalPrice }}</bdi></span></strong> </td>
                                    </tr>
                                </tbody></table>
                                <div class="wc-proceed-to-checkout">
                                    <a href="#" class="checkout-button">Перейти к оформлению заказа</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--==================== Cart Section End ====================-->

       <mini-footer></mini-footer>
    </div>
</template>

<script>
import MiniFooter from './MiniFooter.vue'
import MiniHeader from './MiniHeader.vue'
import { mapActions } from 'vuex'
import { cartService } from '@/_services/cart.service'
export default {
  components: { MiniHeader, MiniFooter },
    name: 'Cart',
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
        },
        totalPrice () {
            return this.products.reduce((acc, i) => acc + i.productId.price * i.count, 0)
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
      },
      onCountChange (val, item) {
          if (val < 0 && item.count === 1) {
              return this.onRemoveCart(item._id)
          }
          const data = { 
              id: item._id, 
              productId: item.productId._id, 
              userId: item.userId._id,
              count: item.count + val
            }
          cartService.update(data).then(() => {
              this.getProducts({ userId: this.userProfile.user.id })
          }).catch(err => console.log(err))
      }
  }
}
</script>

<style>

</style>