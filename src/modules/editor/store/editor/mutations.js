//persons

export const setPerson = (state, persons) => {
  state.persons = persons
  state.isLoading = false;

};

export const addPerson = (state, person) => {
  state.persons = [{...person},...state.persons];
  state.isLoading = false;
};

export const updatePerson = (state, person) => {
  const idx = state.persons.map(p => p.id).indexOf(person.id);
  state.persons[idx] = person;
  state.isLoading = false;
};

//positives

export const setPositive = (state, positives) => {
  state.positives = positives;
  state.isLoading = false;

}

export const addPositive = (state, positive) => {
  state.positives = [{...positive} ,...state.positives];
  state.isLoading = false;
}

export const updatePositive = (state, positive) => {
  const idx = state.positives.map(p => p.id).indexOf(positive.id);
  state.positives[idx] = positive;
  state.isLoading = false;
}