import coeadminApi from "../../../../api/coeadminApi";

/* actions persons */

export const loadPerson = async ({ commit}) => {

  const { data } = await  coeadminApi.get('/persons/')
  commit('setPerson', data.results)

};

export const addPerson = async ({ commit }, person) => {
  const { data } = await  coeadminApi.post('/persons/', person)
  commit('addPerson', data)
}

export const updatePerson =  async ( /*{ commit }, logo */) => {


}

/* actions positives */

export const loadPositive = async ({ commit }) => {

  const { data } = await  coeadminApi.get('/record/')
  commit('setPositive', data.results)

}

export const addPositive = async ({ commit }, positive) => {
  const { data } = await  coeadminApi.post('/record/', positive)
  commit('addPositive', data)
}