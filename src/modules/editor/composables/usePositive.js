import { computed, onMounted } from "vue";
import { useStore } from "vuex";


const usePositive = () => {

    const store = useStore()

    const createPositive = (positive) => {
        store.dispatch("editor/addPositive", positive)
    }

    onMounted(() => {
        store.dispatch("editor/loadPositive")
    })

    return {
        createPositive,
        positives: computed(() => store.getters["editor/getPositive"] )
    };
};

export default usePositive;