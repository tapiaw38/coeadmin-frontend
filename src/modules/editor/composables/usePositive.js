import { computed, onMounted } from "vue";
import { useStore } from "vuex";


const usePositive = () => {

    const store = useStore()

    const createPositive = (positive) => {
        store.dispatch("editor/addPositive", positive)
    }

    const editPositive = (positive) => {
        store.dispatch("editor/updatePositive", positive)
    }

    const deletePositive = (positive) => {
        store.dispatch("editor/deletePositive", positive)
    }

    onMounted(() => {
        store.dispatch("editor/loadPositive")
    })

    return {
        createPositive,
        editPositive,
        deletePositive,
        positives: computed(() => store.getters["editor/getPositive"] )
    };
};

export default usePositive;