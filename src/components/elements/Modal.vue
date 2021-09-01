<template>
  <div class="b-modal" id="back">
    <div class="b-modal__content">
      <slot name="content">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data () {
    return {
      modal: ''
    }
  },
  mounted() {
    this.modal = document.getElementById('back')
    this.modal.addEventListener('click', this.outSideClick)
  },
  beforeDestroy () {
    this.modal.removeEventListener('click', this.outSideClick)
  },
  methods: {
    outSideClick(e) {
      if (e.target === this.modal) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .b-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000000, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1030;

    &__content {
      background: #FFFFFF;
      border-radius: 10px;
      width: 60%;
      padding: 1rem;
      height: 90%;
      overflow-y: auto;
    }
  }
</style>