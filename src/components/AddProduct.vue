<template>
  <form @submit.prevent="onSubmit" class="row p-10">
    <h3 class="text-center">{{ isEdit ? 'Edit' : 'Add' }} Product</h3>
    <div class="mb-3 subscribe-form">
      <label class="form-label">Title</label>
      <input required v-model="product.title" type="text" class="subscribe-form form-control" placeholder="Title">
    </div>
    <div class="mb-3 subscribe-form">
      <label class="form-label">Price</label>
      <input required v-model="product.price" type="text" class="subscribe-form form-control" placeholder="10">
    </div>
    <div class="mb-3 subscribe-form">
      <label class="form-label">Weight</label>
      <input required v-model="product.weight" type="text" class="subscribe-form form-control" placeholder="34">
    </div>
    <div class="mb-3 subscribe-form">
      <label class="form-label">Category</label>
      <select v-model="product.category" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Select Category</option>
        <option v-for="item in categories" :key="item._id" :value="item._id">{{ item.title }}</option>
      </select>
    </div>
    <div class="mb-3 subscribe-form">
      <label class="form-label">Image</label>
      <input :required="!isEdit" @change="onFile" type="file" class="subscribe-form form-control">
    </div>
     <div class="mb-3 subscribe-form">
      <label class="form-label">Description</label>
      <textarea required v-model="product.description" type="text" class="subscribe-form form-control"></textarea>
    </div>
    <div class="d-flex justify-content-between">
      <button @click="$emit('cancel')" type="reset" class="btn btn-danger">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import {categoryService} from "../_services/category.service";
import { productService } from '@/_services/product.service'
export default {
  name: "AddProduct",
  props: {
    editProduct: { type: Object, default: () => ({}) },
    isEdit: { type: Boolean, default: false }
  },
  data () {
    return {
      product: {},
      categories: []
    }
  },
  mounted () {
    if (this.isEdit) this.product = this.editProduct
    this.fetchCategories()
  },
  methods: {
    onSubmit () {
      if (this.isEdit) {
        productService.update({ ...this.product, id: this.product._id }).then(() => {
          this.$emit('close')
        }).catch(err => console.log(err))
      } else
        productService.create(this.product).then(() => {
          this.$emit('close')
        }).catch(err => console.log(err))
    },
    fetchCategories () {
      categoryService.getAll().then(res => {
        this.categories = res
      }).catch(err => console.log(err))
    },
    onFile (event) {
        this.product.image = event.target.files[0]
    }
  }
}
</script>

<style scoped>

</style>