<template>
  <div>
      <!--==================== Trending Products Section Start ====================-->
    <div class="full-row bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="bg-white p-10">
              <div class="row">
                <div class="col-12">
                  <div class="section-head d-flex justify-content-between align-items-center p-20">
                    <h5 class="font-700 text-secondary mb-0 text-uppercase down-line">В ТРЕНДЕ</h5>
                    <div class="woocommerce-tabs wc-tabs-wrapper ps-0 mt-0">
                      <ul class="nav nav-pills wc-tabs" id="pills-tab-three" role="tablist">
                        <li class="nav-item" role="presentation">
                          <a class="nav-link active" id="pills-living-one-tab" data-bs-toggle="pill" href="#pills-living-one" role="tab" aria-controls="pills-living-one" aria-selected="true">Living</a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a class="nav-link" id="pills-bedroom-one-tab" data-bs-toggle="pill" href="#pills-bedroom-one" role="tab" aria-controls="pills-bedroom-one" aria-selected="true">Bedroom</a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a class="nav-link" id="pills-dining-one-tab" data-bs-toggle="pill" href="#pills-dining-one" role="tab" aria-controls="pills-dining-one" aria-selected="true">Dining</a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a class="nav-link" id="pills-office-one-tab" data-bs-toggle="pill" href="#pills-office-one" role="tab" aria-controls="pills-office-one" aria-selected="true">Office</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="woocommerce-tabs wc-tabs-wrapper px-20 mt-0">
                  <div class="tab-content" id="pills-tabContent-three">
                    <div class="tab-pane fade show active woocommerce-Tabs-panel woocommerce-Tabs-panel--description" id="pills-living-one" role="tabpanel" aria-labelledby="pills-living-one-tab">
                      <div class="row g-0 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 e-image-bg-light e-hover-image-zoom e-btn-set-two cart-slide-up">
                        <div class="col" v-for="item in trendProducts" :key="item._id">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <router-link :to="{name: 'detail', params: { id: item._id }}" class="woocommerce-LoopProduct-link"><img :src="baseUrl+'/'+item.image" alt="Product Image"></router-link>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><router-link :to="{name: 'detail', params: { id: item._id }}">{{item.title}}</router-link></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>${{item.price.toFixed(2)}}</ins>
                                    <del>${{ (item.price * 2).toFixed(2) }}</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <button @click="onAddCart(item)" class="button add_to_cart_button">Add to Cart</button>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-bedroom-one" role="tabpanel" aria-labelledby="pills-bedroom-one-tab">
                      <div class="row g-0 row-cols-lg-5 e-image-bg-light e-hover-image-zoom e-btn-set-two cart-slide-up">
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-208.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Monopoly-103</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$41.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-201.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="on-sale">- 21%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Chair Padded Seat</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$72.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-209.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Aqua Globes</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$37.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-188.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Multipurpose Shelf</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$57.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-202.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Cloudberry-254</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$205.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-210.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Briarwood Decorative</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$30.00</ins>
                                    <del>$40.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-200.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Monopoly-103</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-206.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Rutherford-105</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-204.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 60%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Office Lounge Chair</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-187.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Aqua Globes</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$70.00 - $123.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-dining-one" role="tabpanel" aria-labelledby="pills-dining-one-tab">
                      <div class="row g-0 row-cols-lg-5 e-image-bg-light e-hover-image-zoom e-btn-set-two cart-slide-up">
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-208.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Monopoly-103</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$41.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-201.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="on-sale">- 21%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Chair Padded Seat</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$72.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-209.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Aqua Globes</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$37.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-188.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Multipurpose Shelf</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$57.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-202.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Cloudberry-254</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$205.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-210.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Briarwood Decorative</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$30.00</ins>
                                    <del>$40.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-200.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Monopoly-103</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-206.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Rutherford-105</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-204.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 60%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Office Lounge Chair</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-187.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Aqua Globes</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$70.00 - $123.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-office-one" role="tabpanel" aria-labelledby="pills-office-one-tab">
                      <div class="row g-0 row-cols-lg-5 e-image-bg-light e-hover-image-zoom e-btn-set-two cart-slide-up">
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-208.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Monopoly-103</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$41.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-201.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="on-sale">- 21%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Chair Padded Seat</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$72.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-209.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Aqua Globes</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$37.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-188.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Multipurpose Shelf</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$57.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-202.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Cloudberry-254</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$205.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-210.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="on-sale">- 20%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Briarwood Decorative</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$30.00</ins>
                                    <del>$40.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-200.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Monopoly-103</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-206.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Rutherford-105</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-204.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                                <div class="on-sale">- 60%</div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Office Lounge Chair</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$45.00</ins>
                                    <del>$98.00</del>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="product type-product">
                            <div class="product-wrapper">
                              <div class="product-image">
                                <a href="#" class="woocommerce-LoopProduct-link"><img src="/assets/images/products/squire-187.png" alt="Product Image"></a>
                                <div class="product-variations">
                                  <span class="active"><a href="#" style="background-color: #b78269;"></a></span>
                                  <span><a href="#" style="background-color: #f1cc4e;"></a></span>
                                  <span><a href="#" style="background-color: #31749e;"></a></span>
                                  <span><a href="#" style="background-color: #672a4f;"></a></span>
                                </div>
                                <div class="product-labels">
                                  <div class="badge1"><span>New</span></div>
                                </div>
                              </div>
                              <div class="product-info">
                                <h3 class="product-title"><a href="#">Aqua Globes</a></h3>
                                <div class="product-price">
                                  <div class="price">
                                    <ins>$70.00 - $123.00</ins>
                                  </div>
                                </div>
                                <div class="shipping-cost"><span>+Shipping: </span> <span>$5.00</span> </div>
                                <div class="shipping-feed-back">
                                  <div class="star-rating">
                                    <div class="rating-wrap">
                                      <a href="#"><i class="fas fa-star"></i><span> 4.6</span></a>
                                    </div>
                                    <div class="rating-counts-wrap">
                                      <a href="#">(563)</a>
                                    </div>
                                  </div>
                                  <div class="sold-items">
                                    <span>65</span> <span>Sold</span>
                                  </div>
                                </div>
                                <div class="hover-area">
                                  <div class="cart-button">
                                    <a href="#" class="button add_to_cart_button">Add to Cart</a>
                                  </div>
                                  <div class="wishlist-button">
                                    <a class="add_to_wishlist" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist">Wishlist</a>
                                  </div>
                                  <div class="compare-button">
                                    <a class="compare button" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Compare" aria-label="Compare">Compare</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================== Trending Products Section End ====================-->
  </div>
</template>

<script>
import { cartService } from '@/_services/cart.service'
import { mapActions } from 'vuex'
export default {
    name: 'TrendSection',
    data () {
        return {
            baseUrl: process.env.VUE_APP_BASE_URL
        }
    },
    computed: {
        trendProducts () {
            return this.$store.getters['products/trendProducts']
        },
        userProfile () {
          return this.$store.state.account.user
        }
    },
    methods: {
      ...mapActions('cart', ['getProducts']),
      onAddCart (item) {
        const data = { userId: this.userProfile.user.id, productId: item._id }
        cartService.create(data).then(() => {
            this.getProducts({ userId: this.userProfile.user.id })
        }).catch(err => console.log(err))
      }
    }
}
</script>

<style>

</style>