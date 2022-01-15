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

    onMounted(() => {
        store.dispatch("editor/loadPositive")
    })

    return {
        createPositive,
        editPositive,
        positives: computed(() => store.getters["editor/getPositive"] )
    };
};

export default usePositive;