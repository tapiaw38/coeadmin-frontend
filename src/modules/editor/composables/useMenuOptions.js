import { ref } from "vue";

const useMenuOptions = () => {

    let downloadOptions = ref(false)

    return {
        downloadOptions,
        toggleOptions: () => {
            downloadOptions.value = !downloadOptions.value;
        }
    }

}


export default useMenuOptions