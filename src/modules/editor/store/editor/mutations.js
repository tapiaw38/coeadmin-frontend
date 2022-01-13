
export const setPerson = (state, persons) => {
  state.persons = persons;
  state.isLoading = false;

};

export const updatePerson = (state, person) => {
  state.persons = [...state.persons, ...person];
  state.isLoading = false;
};

export const addPerson = (state, person) => {
  state.persons = [...state.persons, ...person];
  state.isLoading = false;
};

//positives

export const setPositive = (state, positives) => {
  state.positives = positives;
  state.isLoading = false;

}

export const updatePositive = (state, positive) => {
  state.positives = [...state.positives, ...positive];
  state.isLoading = false;
}

export const addPositive = (state, positive) => {
  state.positives = [...state.positives, ...positive];
  state.isLoading = false;
}