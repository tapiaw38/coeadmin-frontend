import { computed, onMounted } from "vue";
import { useStore } from "vuex";


const usePerson = () => {

    const store = useStore()

    const createPerson = (person) => {
        store.dispatch("editor/addPerson", person)
    }

    onMounted(() => {
        store.dispatch("editor/loadPerson")
    })

    return {
        createPerson,
        persons: computed(() => store.getters["editor/getPersons"] )
    };
};

export default usePerson;