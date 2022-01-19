// Mutations persons

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

// Mutations positives

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

export const deletePositive = (state, positive) => {
  const idx = state.positives.map(p => p.id).indexOf(positive.id);
  state.positives[idx] = positive;
  state.isLoading = false;
}

export const updatePositiveContact = (state, id) => {
  const idx = state.positives.map(p => p.id).indexOf(id);
  state.positives[idx].contacts_count += 1;
}

// Mutations contacts

export const setContacts = (state, contacts) => {
  state.contacts = contacts;
  state.isLoading = false;
}

export const addContact = (state, contact) => {
  console.log(contact)
  state.contacts = [{...contact} ,...state.contacts];
  state.isLoading = false;
}

export const updateContact = (state, contact) => {
  const idx = state.contacts.map(c => c.id).indexOf(contact.id);
  state.contacts[idx] = contact;
  state.isLoading = false;
}