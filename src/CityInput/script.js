import bus from "../bus"
import Vue from "vue"

export default {
  name: "CityInput",
  methods: {
    onSubmit(event) {
      bus.$emit("new city", this.cityname)
      this.cityname = ""
    }
  },
  data() {
    return {
      cityname: ""
    }
  }
}
