import { computed, ref } from "vue";
import { useStore } from "vuex";

const useContact = () => {

    const store = useStore();

    let isContactModalVisible = ref(false);
    let isTableModalVisible = ref(false);
    let positiveObject = ref(null);

    const createContact = (payload) => {
        store.dispatch("editor/addContact", payload);
    };

    const editContact = (contact) => {
        store.dispatch("editor/updateContact", contact);
    };

    const showContactModal = (positive) => {
        positiveObject.value = positive;
        isContactModalVisible.value = true;
    };

    const closeContactModal = () => {
        isContactModalVisible.value = false;
    };

    const showTableModal = (positive) => {
        store.dispatch("editor/loadContact", positive.id);
        isTableModalVisible.value = true;
    };

    const closeTableModal = () => {
        isTableModalVisible.value = false;
    };



    return {
        createContact,
        editContact,
        showContactModal,
        closeContactModal,
        showTableModal,
        closeTableModal,
        isTableModalVisible: computed(() => isTableModalVisible.value),
        positiveObject: computed(() => positiveObject.value),
        isContactModalVisible: computed(() => isContactModalVisible.value),
        contacts: computed(() => store.getters["editor/getContacts"])
    };
}

export default useContact;