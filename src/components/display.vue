<template lang="html">

  <section class="display">
    <img class="pokeImg" v-if="pokemonFile" :src="require(`@/assets/pokemon/images/${pokemonFile}.png`)" >

  </section>

</template>

<script lang="js">

import { mapGetters } from 'vuex'

  export default  {
    name: 'display',  
    props: [],
    mounted() {
      
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      ...mapGetters('pokedex', {
        pokemon: 'pokemon',
        pokemonFile: 'pokemonFile'

      }), 
    }
}
</script>

<style scoped lang="scss">
  .display {
    width: 230px;
    height: 230px;
    background-color: black;
    border: solid 20px lightgray;
    position: relative;
    left: 80px;
    top: 30px;

    .pokeImg {
      position: relative;
      width: 100%;
    }
  }
</style>
