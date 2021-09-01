<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Category</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button @click="onAddNew" type="button" class="btn btn-sm btn-outline-secondary">Add new</button>
        </div>
      </div>
    </div>
    <table class="table table-responsive table-hover">
        <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in categories" :key="item._id">
            <td>{{ i + 1 }}</td>
            <td style="width: 50%">{{ item.title }}</td>
            <td>
              <button @click="onEdit(item)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
              <button @click="onDelete(item._id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    <modal v-if="isShow" @close="isShow = false">
      <template v-slot:content>
        <add-category @cancel="isShow = false" :is-edit="isEdit" :edit-category="category" @close="onClose" />
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/elements/Modal'
import AddCategory from "../../components/AddCategory";
import {categoryService} from "../../_services/category.service";
export default {
  name: "AdminCategory",
  components: { Modal, AddCategory },
  data () {
    return {
      isShow: false,
      isEdit: false,
      category: {},
      categories: []
    }
  },
  mounted() {
    this.fetchCategory()
  },
  methods: {
    onClose () {
      this.isShow = false
      this.fetchCategory()
    },
    onAddNew () {
      this.isEdit = false
      this.isShow = true
    },
    fetchCategory () {
      categoryService.getAll().then(res => {
        this.categories = res
      }).catch(err => console.log(err))
    },
    onDelete (id) {
      categoryService.delete(id).then(() => {
        this.fetchCategory()
      }).catch(err => console.log(err))
    },
    onEdit (item) {
      this.category = item
      this.isEdit = true
      this.isShow = true
    }
  }
}
</script>

<style scoped>

</style>