<template lang="html">

  <section class="button">
    <button type="button" @click="search(elmnt)" class="btn-search"> Buscar </button>
  </section>

</template>

<script lang="js">

import { mapActions } from 'vuex'

  export default  {
    name: 'button',
    props: ['elmnt'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      ...mapActions('pokedex', ['searchPokemon']),
      search(){
        this.searchPokemon()
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .button {
    position: relative;
    top: 200px;
    .btn-search {
      width: 200px;
      height: 40px;
      border: none;
      background: #000;
      border-radius: 30px;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      outline: none;
    }
  }
</style>
