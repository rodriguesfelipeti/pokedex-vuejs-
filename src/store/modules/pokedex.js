import json from '@/assets/pokemon/pokedex.json'

export default {
    namespaced: true,
    state: {
      active: false,
      purpleLight: false,
      yellowLight: false,
      greenLight: false,
      statusPokedex: false,
      pokemonSearch: '',
      pokemon: [],

      myJson: json
      
    },
    getters: {
      active(state) {
        return state.active;
      },
      activePurple(state) {
        return state.purpleLight;
      },
      activeYellow(state) {
        return state.yellowLight;
      },
      activeGreen(state) {
        return state.greenLight;
      },
      activeGreen(state) {
        return state.greenLight;
      },
      statusPokedex(state) {
        return state.statusPokedex;
      },
      pokemon(state) {
        return state.pokemon;
      },
      pokemonFile(state) {
        return state.pokemon.numberSearch;
      },
    },
    mutations: {
      activatePokedexMutation(state) {
        if(!state.active){

          setTimeout(() => {
            state.purpleLight = true
          }, 500);
          setTimeout(() => {
            state.purpleLight = false
            state.yellowLight = true
          }, 1000);
          setTimeout(() => {
            state.yellowLight = false
            state.greenLight = true
          }, 1500);
          setTimeout(() => {
            state.greenLight = false
          }, 2000);
  
          setTimeout(() => {
            state.purpleLight = true
            state.yellowLight = true
            state.greenLight = true
            state.active = true
            state.statusPokedex = true
          }, 2500);
        }
      },

      setStateSearch(state, value) {
        console.log(state.pokemonSearch)
        if(value === "Backspace"){
          state.pokemonSearch = state.pokemonSearch.slice(0, -1)
        }else{ 
          state.pokemonSearch += value
        }
      },

      searchPokemon(state) {
        state.pokemon =  state.myJson.find(el => el.idPok == state.pokemonSearch);
        state.pokemon.name = state.pokemon.name["english"]
        state.pokemon.numberSearch = state.pokemonSearch
        state.pokemonSearch = ''
      }
    },
    actions: {
      activatePokedex(context) {
        context.commit("activatePokedexMutation");
      },
      getPokemon(context, value) {
        context.commit("setStateSearch", value)
      },
      searchPokemon(context, value) {
        context.commit("searchPokemon")
      }
    },
  };
  