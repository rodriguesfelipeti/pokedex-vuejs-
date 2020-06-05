<template lang="html">

  <section class="directional">
    ola mundo
    <div class="controll"></div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'directional',
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

    }
}
</script>

<style scoped lang="scss">
  .directional {
    position: relative;
    top: 120px;
    left: 100px;
    // VARIABLES
    $g : #BDC3C7;
    $green: #66CC99;
    $red: #EC644B;
    $yellow: #E9D460;
    $blue: #19A3FF;

    .controll{
			position: absolute;
			height: 40px;
			width: 130px;
			top: calc(50% - 20px); left: calc(50% - 65px);
			transform: rotate(-0deg);
			border-radius: 25% 25% 25% 25% / 70% 70%;
			background-color: darken($g, 50%);
			box-shadow: 0 0 15px -5px darken( #19A3FF, 60%);
			&:after{
				content: '';
				position: absolute;
				height: 40px;
				width: 130px;
				top: calc(50% - 20px); left: calc(50% - 65px);
				transform: rotate(-90deg);
				border-radius: 25% 25% 25% 25% / 70% 70%;
				background-color: darken($g, 50%);
			}
    }
  }
</style>
