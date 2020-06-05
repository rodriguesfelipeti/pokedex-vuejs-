<template lang="html">

  <section class="name-search">

    <input type="text" readonly :value="pokemon.pokemonSearch" class="txt-search"/>
  </section>

</template>

<script lang="js">

import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'

  export default  {
    name: 'name-search',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      ...mapActions('pokedex', ['getPokemon']),
      wordSearch(e){
        this.getPokemon(e.key)
      }
    },
    computed: {
      ...mapGetters('pokedex', {
        pokemon: 'pokemon'
      })
    }
}
</script>

<style scoped lang="scss">
  .name-search {
    .txt-search {
      position: relative;
      top: 80px;
      width: 400px;
      height: 80px;
      border-radius: 15px;
      border: none;
      background: #000;
      color: gray;
      font-size: 40px;
      text-align: center;
      outline: none;
    }
  }
</style>
