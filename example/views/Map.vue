<template>
	<!-- <MglMap :accessToken="accessToken" :mapStyle="mapStyle" /> -->
	<div>map</div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "../../src/main";

export default {
	components: {
		MglMap
	},
	data() {
		return {
			accessToken:
				"pk.eyJ1IjoiaHllb25namlua2ltIiwiYSI6ImNpZXh4dXp5eDA2YjFzaGtyOGR2dnBza2oifQ.a5K673tSr0cOcYoX1rpPhg", // your access token. Needed if you using Mapbox maps
			mapStyle: "mapbox://styles/mapbox/streets-v9", // your map style
			center: [114.32, 30.56],
			zoom: 11
		};
	},

	created() {
		// We need to set mapbox-gl library here in order to use it in template
		this.mapbox = Mapbox
	},

	mounted() {
		console.log(MglMap)
	}
};
</script>