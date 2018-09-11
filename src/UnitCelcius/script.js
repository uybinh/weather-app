import bus from "../bus"

export default {
  name: "UnitCelcius",
  props: {
    value: Number
  },
  methods: {
    onClick() {
      this.celcius = !this.celcius
      this.symbol = this.celcius ? "°C" : "°F"
      this.value = this.celcius
        ? +this.toCelcius(this.value).toFixed(2)
        : +this.toFahrenhei(this.value).toFixed(2)
    },
    toCelcius(value) {
      return (value - 32) / (9 / 5)
    },
    toFahrenhei(value) {
      return (value * 9) / 5 + 32
    }
  },
  data() {
    return {
      celcius: true,
      symbol: "°C"
    }
  }
}
