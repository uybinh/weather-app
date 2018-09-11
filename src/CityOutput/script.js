import bus from "../bus"
import Vue from "vue"
import errorMessage from "../errorMessage/index.vue"
const titleize = require("underscore.string/titleize")

export default {
  name: "CityOutput",
  components: {
    "error-message": errorMessage
  },
  methods: {
    onSubmit(city) {
      let City = titleize(city)
      this.currentcity = City
      console.log(City)
      this.fetchWeather(City)
        .then(json => Vue.set(this.weatherData, City, json))
        .catch(msg => Vue.set(this.weatherData, City, { error: msg }))
    },
    fetchWeather(city) {
      if (this.weatherData.hasOwnProperty(city)) {
        return Promise.resolve(this.weatherData[city])
      }

      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=58d03697aa5078125fa32b20531cbf70`

      return fetch(url)
        .then(response => {
          if (response.status == 404) {
            throw "Can't find your city"
          } else {
            return response
          }
        })
        .then(response => response.json())
        .then(json => {
          return {
            main: json["weather"][0]["main"],
            description: titleize(json["weather"][0]["description"]),
            temp: json["main"]["temp"],
            iconUrl:
              "http://openweathermap.org/img/w/" +
              json["weather"][0]["icon"] +
              ".png"
          }
        })
    }
  },
  created() {
    bus.$on("new city", this.onSubmit)
  },
  destroyed() {
    bus.$off("new city", this.onSubmit)
  },
  data() {
    return {
      currentcity: null,
      weatherData: {}
    }
  }
}