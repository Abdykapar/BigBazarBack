<template>
  <form @submit.prevent="onSubmit" class="row g-3 p-10">
    <h3 class="text-center">{{ isEdit ? 'Edit' : 'Add' }} Category</h3>
    <div class="mb-3 subscribe-form">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input required v-model="category.title" type="text" class="subscribe-form form-control" id="exampleFormControlInput1" placeholder="Жизнь">
    </div>
    <div class="mb-3 subscribe-form">
      <label for="exampleFormControlTextarea1" class="form-label">Parent</label>
      <select v-model="category.parent" id="exampleFormControlTextarea1" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Select Parent</option>
        <option v-for="item in categories" :key="item._id" :value="item._id">{{ item.title }}</option>
      </select>
    </div>
    <div class="d-flex justify-content-between">
      <button @click="$emit('cancel')" type="reset" class="btn btn-danger">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import {categoryService} from "../_services/category.service";

export default {
  name: "AddCategory",
  props: {
    editCategory: { type: Object, default: () => ({}) },
    isEdit: { type: Boolean, default: false }
  },
  data () {
    return {
      category: {},
      categories: []
    }
  },
  mounted () {
    if (this.isEdit) this.category = this.editCategory
    this.fetchCategories()
  },
  methods: {
    onSubmit () {
      if (this.isEdit) {
        categoryService.update({ ...this.category, id: this.category._id }).then(() => {
          this.$emit('close')
        }).catch(err => console.log(err))
      } else
        categoryService.create(this.category).then(() => {
          this.$emit('close')
        }).catch(err => console.log(err))
    },
    fetchCategories () {
      categoryService.getAll().then(res => {
        this.categories = res.filter(i => i._id !== this.editCategory._id)
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>