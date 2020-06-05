<template lang="html">

  <section class="pokedex">
    <div :class="!statusPokedex ? '' : 'closedPokedex'">
      <form id="pokedex">
        <div class="general">
          <div class="lights">
            <div :class="active ? 'rounded-light' : 'rounded-light off'"></div>
            <div :class="activePurple ? 'rounded-light-sm red' : 'rounded-light-sm off'" class="rounded-light-sm red"></div>
            <div :class="activeYellow ? 'rounded-light-sm yellow' : 'rounded-light-sm off'" class="rounded-light-sm yellow"></div>
            <div :class="activeGreen ? 'rounded-light-sm green' : 'rounded-light-sm off'" class="rounded-light-sm green"></div>
          </div>
          <div class="border-line">
            <div :class="!statusPokedex ? 'start-button' : ''" @click="openPokedex">
            <div :class="!statusPokedex ? 'botton-margin' : ''"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div :class="statusPokedex ? '' : 'openedPokedex'">
      <form id="pokedex">
        <div class="general">
          <div class="lights">
            <div :class="active ? 'rounded-light' : 'rounded-light off'"></div>
            <div :class="activePurple ? 'rounded-light-sm red' : 'rounded-light-sm off'" class="rounded-light-sm red"></div>
            <div :class="activeYellow ? 'rounded-light-sm yellow' : 'rounded-light-sm off'" class="rounded-light-sm yellow"></div>
            <div :class="activeGreen ? 'rounded-light-sm green' : 'rounded-light-sm off'" class="rounded-light-sm green"></div>
          </div>
          <div class="border-line">
            <Display/>
            <Directional />
            <div class="greenDisplay">
              <p v-show="pokemon.name" >Name: {{pokemon.name}}</p>
              <p v-show="pokemon.type" >Type: {{pokemon.type}}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div :class="statusPokedex ? '' : 'openedPokedex'">
      <form id="pokedex">
        <div class="general openScreen">
          <div class="space"></div>
          <div class="border-line">
            <NameSearch />
            <div class="group-block">
              <div class="blue-blocks off"></div>
              <div class="blue-blocks off"></div>
              <div class="blue-blocks" @click="wordSearch(1)">1</div>
              <div class="blue-blocks" @click="wordSearch(2)">2</div>
              <div class="blue-blocks" @click="wordSearch(3)">3</div>
              <div class="blue-blocks" @click="wordSearch(4)">4</div>
              <div class="blue-blocks" @click="wordSearch(5)">5</div>
              <div class="blue-blocks off"></div>
              <div class="blue-blocks off"></div>
            </div>
            <div class="group-block">
              <div class="blue-blocks off"></div>
              <div class="blue-blocks off"></div>
              <div class="blue-blocks" @click="wordSearch(6)">6</div>
              <div class="blue-blocks" @click="wordSearch(7)">7</div>
              <div class="blue-blocks" @click="wordSearch(8)">8</div>
              <div class="blue-blocks" @click="wordSearch(9)">9</div>
              <div class="blue-blocks" @click="wordSearch(0)">0</div>
              <div class="blue-blocks off"></div>
              <div class="blue-blocks off"></div>
            </div>
            <Button />
          </div>
        </div>
      </form>
    </div>
  </section>

</template>

<script lang="js">

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
// import json from '@/assets/pokemon.json-master/pokedex.json'

import Display from '@/components/display.vue'
import Directional from '@/components/directional.vue'
import NameSearch from '@/components/nameSearch.vue'
import Button from '@/components/button.vue'

export default {
  name: 'pokedex',
  components: {
    Display,
    Directional,
    NameSearch,
    Button
  },
  props: [],
  mounted() {

  },
  data() {
    return {
      // myJson: json
    };
  },
  methods: {
    ...mapActions('pokedex', ['activatePokedex', 'getPokemon']),

    openPokedex(){
      this.activatePokedex()
    },

    wordSearch(e){
        this.getPokemon(e)
      }
  },
  computed: {
     ...mapGetters('pokedex', {
        active: 'active',
        activePurple: 'activePurple',
        activeYellow: 'activeYellow',
        activeGreen: 'activeGreen',
        statusPokedex: 'statusPokedex',
        pokemon: 'pokemon',
      }), 
    }
};
</script>

<style scoped lang="scss">
  .pokedex {
    width: 450px;
    height: 600px;
    // background: #ff0000;
    position: relative;
    // left: 500px;
    border-radius: 10px;
    display: flex;

    .closedPokedex {
      display: none;
    }
    .openedPokedex {
      display: none;
    }

    .general {
      border-radius: 10px;
      background: #ff0000;
      &.openScreen {
        background: #FFF;
      }
      .lights {
         display: flex;
        .rounded-light {
          width: 60px;
          height: 60px;
          background: blue;
          border-radius: 50%;
          position: relative;
          left: 30px;
          top: 10px;
          border: solid white 3px;
          &.off {
            background: lightblue;
          }
        }
        .rounded-light-sm {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          position: relative;
          left: 30px;
          top: 35px;
          margin-left: 5px;
          border: solid white 1px;

          &.red {
            background: purple;
            &.off {

              background: lightgray;
            }
          }
          &.yellow {
            background: orange;
            &.off {

              background: lightgray;
            }
          }
          &.green {
            background: green;
            &.off {
              
             background: lightgray;
            }
          }
        }
      }

      .border-line {
        width: 447px;
        height: 520px;
        background: red;
        border: solid black 2px;
        margin-top: 15px;
        border-radius: 5px;

        .start-button {
          position: relative;
          top: 200px;
          left: 30px;
          width: 0; 
          height: 0; 
          border-top: 45px solid transparent;
          border-bottom: 45px solid transparent; 
          border-right:45px solid yellow; 
          &:active {
          position: relative;
          top: 200px;
          left: 30px;
          width: 0; 
          height: 0; 
          border-top: 45px solid transparent;
          border-bottom: 45px solid transparent; 
          border-right:45px solid yellowgreen; 
          }
        }

        .botton-margin {
          width: 300px;
          height: 5px;
          position: relative;
          left: 43px;
          top: 170px;
          border: solid black 2px;
        }

        .greenDisplay {
          width: 232px;
          height: 112px;
          position: relative;
          left: 11px;
          top: 55px;
          background: green;
          border-radius: 13px;
          border: solid 4px gray;
          opacity: 0.7;
          color: white;
          font-weight: bold;
          text-align: left;
        }

        .group-block {
          display: flex;
          .blue-blocks {
            position: relative;
            top: 130px;
            left: 30px;
            width: 40px;
            height: 40px;
            border: none;
            background-color: aqua;
            margin-top: 2px;
            margin-left: 2px;
            color: black;
            font-weight: bold;
            font-size: 35px;
            cursor: pointer;
            border-radius: 2px;
            &:active {
              background-color: lightblue;
            }
            &.off {
              background: black;
            }
          }
        }
      }

      .space {
        width: 450px;
        height: 65px;
      }

      .btn-search {

        &.active {
          background: gray;
        }
      }
    }
  };
</style>
