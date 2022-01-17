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

export const updatePerson =  async ({ commit }, person) => {
  const { data } = await  coeadminApi.put(`/persons/${person.id}/`, person)
  commit('updatePerson', data)
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

export const updatePositive =  async ({ commit }, positive) => {
  const { data } = await  coeadminApi.put(`/record/${positive.id}/`, positive)
  commit('updatePositive', data)
}

/* mutations contacts */

export const loadContact =  async({ commit }, id) => {
  const { data } = await coeadminApi.get(`/record/${id}/contacts/`)
  commit('setContacts', data.results)
}

export const addContact = async ({ commit }, { positiveId, contact}) => {
  const { data } = await coeadminApi.post(`/record/${positiveId}/contacts/`, contact)
  commit('addContact', data)
}

export const updateContact = async ({ commit }, { positiveId, contact}) => {
  const { data } = await coeadminApi.put(`/record/${positiveId}/contacts/${contact.id}/`, contact)
  commit('updateContact', data)
}