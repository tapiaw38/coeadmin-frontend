
/* person getters */

export const getPersons = (state) => {
    return state.persons;
};

export const getPersonByTerm = (state) => (term = '') => {
    if ( term.length === 0 ) return state.persons
    return state.persons.filter( p => p.first_name.toLowerCase().includes( term.toLocaleLowerCase ) )
}

export const getPersonById = (state) => ( id = '' ) => {
    const person = state.persons.find( p => p.id === id )
    if ( !person ) return
    return { ...person }
}

/* positive getters */

export const getPositive = (state) => {
    return state.positives;
};

export const getPositiveByTerm = (state) => (term = '') => {
    if ( term.length === 0 ) return state.positives
    return state.positives.filter( p => p.person.first_name.toLowerCase().includes( term.toLocaleLowerCase ) )
}

export const getPositiveById = (state) => ( id = '' ) => {    
    const positive = state.positives.find( p => p.id === id )
    if ( !positive ) return
    return { ...positive }
}