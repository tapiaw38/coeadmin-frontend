import { ref, computed } from "vue";


const useModalEdit = () => {

    let isModalEditVisible = ref(false);
    const selectedObject = ref(null);

    const showModalEdit = (obj) => {
      selectedObject.value = obj;
      isModalEditVisible.value = true;
    }

    const closeModalEdit = () => {
      isModalEditVisible.value = false;
    }

    return {
        isModalEditVisible,
        showModalEdit,
        closeModalEdit,
        selectedObject: computed(() => selectedObject.value)
    }
}

export default useModalEdit;