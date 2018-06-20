<template>
  <section>
    <div class="flex-center position-ref full-height">
      <div class="content">
        <div class="title m-b-md">Varie</div>
        <div class="links">
          <a href="https://varie.io">Documentation</a>
          <a href="https://github.com/variejs/varie">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  mounted() {
    this.$store.dispatch('test/test')
    console.info(this.$store.getters['test/GET_TEST']);
  }
});
</script>
