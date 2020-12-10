import Vue from 'vue'
import Vuex from 'vuex'
import axios  from 'axios'
import numeral from 'numeral'
Vue.use(Vuex)
let covid_stat = []
let world_state = []
axios.get('https://covid19.th-stat.com/api/open/today').then(response => {
  covid_stat.push(response.data["Deaths"])
  covid_stat.push(response.data["Confirmed"])
  covid_stat.push(response.data["NewConfirmed"])
  covid_stat.push(response.data["Recovered"])
  covid_stat.push(response.data["Hospitalized"])
  covid_stat.push(response.data["UpdateDate"])
})

axios.get('https://coronavirus-19-api.herokuapp.com/countries/world').then(response => {
  world_state.push(response.data["cases"])
  world_state.push(response.data["todayCases"])
  world_state.push(response.data["deaths"])
  world_state.push(response.data["todayDeaths"])
  world_state.push(response.data["recovered"])
  world_state.push(response.data["active"])
})


const store = new Vuex.Store({
  state: {
    covid_stat,
    world_state
  },
  getters:{
    worldTotalCases : state => {
      console.log(state.world_state[0])
      return numeral(state.world_state[0]).format('0,0')
    },
    worldTodayCases : state => {
      return numeral(state.world_state[1]).format('0,0')
    },
    worldTotalDeaths : state => {
      return numeral(state.world_state[2]).format('0,0')
    },
    worldTodayDeaths : state => {
      return numeral(state.world_state[3]).format('0,0')
    },
    worldTotalRecovered : state => {
      return numeral(state.world_state[4]).format('0,0')
    },
    worldActive : state => {
      return numeral(state.world_state[5]).format('0,0')
    },
    totalConfirm : state => {
      return numeral(state.covid_stat[1]).format('0,0')
    },
    totalDeaths : state => {
      return numeral(state.covid_stat[0]).format('0,0')
    },
    todayCase : state => {
      return numeral(state.covid_stat[2]).format('0,0')
    },
    totalRecovered : state => {
      return numeral(state.covid_stat[3]).format('0,0')
    },
    totalHospital : state => {
      return numeral(state.covid_stat[4]).format('0,0')
    },
    update : state => {
      return state.covid_stat[5];
    }
  }
})

export {
  store
}
