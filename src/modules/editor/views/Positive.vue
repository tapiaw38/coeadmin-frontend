<template>
  <div class="editor">
    <div class="btn-container">
      <button class="btn btn-fixed" @click="showModal">Agregar</button>
    </div>
    <div class="panel-title search">
      <input type="text" placeholder="Buscar aquí..." v-model="search" />
    </div>
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>Persona</th>
            <th>Documento</th>
            <th>positividad</th>
            <th>Tipo de variante</th>
            <th>Laboratorio</th>
            <th>Fecha de aisl.</th>
            <th>Dias de aisl.</th>
            <th>Alta de aisl.</th>
            <th>Fecha de alta</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="positive in searchPositive" :key="positive.id">
            <tr>
              <td>
                {{ positive.person.first_name }}
                {{ positive.person.last_name }}
              </td>
              <td>{{ positive.person.document }}</td>
              <td>{{ formatDate(positive.positivity_date) }}</td>
              <td>{{ positive.variant_type }}</td>
              <td>{{ positive.laboratory }}</td>
              <td>{{ formatDate(positive.isolation.isolation_date) }}</td>
              <td>{{ positive.isolation.days_isolation }}</td>
              <td v-if="positive.isolation.high_insulation">Si</td>
              <td v-else>No</td>
              <td v-if="positive.isolation.high_insulation_date !== null">
                {{ formatDate(positive.isolation.high_insulation_date) }}
              </td>
              <td v-else>-</td>
              <td>
                <button>
                  <img
                    @click="showModalEdit(positive)"
                    src="../../../../src/assets/img/edit.png"
                    alt="edit"
                    width="30"
                    height="20"
                  />
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <default-modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <h3>Agregar positivo</h3>
      </template>

      <template v-slot:body>
        <positive-form @submitFormPositive="submitFormPositive" />
      </template>

      <template v-slot:footer>
        <br />
      </template>
    </default-modal>

    <default-modal v-show="isModalEditVisible" @close="closeModalEdit">
      <template v-slot:header>
        <h3>Editar</h3>
      </template>
      <template v-slot:body>
        <positive-form
          :positiveData="selectedObject"
          @submitFormPositive="submitFormPositiveEdit"
        />
      </template>
      <template v-slot:footer>
        <br />
      </template>
    </default-modal>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

import useModal from "../../../composables/useModal";
import useModalEdit from "../../../composables/useModalEdit";
import usePositive from "../composables/usePositive";

import PositiveForm from "../components/forms/PositiveForm";
import DefaultModal from "../../../containers/DefaultModal";

import { formatDate } from "../../../../src/helpers/formatDate";
export default defineComponent({
  components: {
    PositiveForm,
    DefaultModal,
  },
  setup() {
    const { positives, createPositive, editPositive } = usePositive();
    const { isModalVisible, showModal, closeModal } = useModal();
    const {
      isModalEditVisible,
      showModalEdit,
      closeModalEdit,
      selectedObject,
    } = useModalEdit();

    let search = ref("");

    const searchPositive = computed(() =>
      positives.value.filter((p) => {
        return (
          p.person.first_name
            .toLowerCase()
            .includes(search.value.toLowerCase()) ||
          p.person.last_name
            .toLowerCase()
            .includes(search.value.toLowerCase()) ||
          p.person.document.toLowerCase().includes(search.value.toLowerCase())
        );
      })
    );

    const submitFormPositive = (positive) => {
      createPositive(positive);
      closeModal();
    };

    const submitFormPositiveEdit = (p) => {
      let positive = {
        id: selectedObject.value.id,
        person: p.person.id,
        positivity_date: p.positivity_date,
        variant_type: p.variant_type,
        laboratory: p.laboratory,
        isolation: {
          isolation_date: p.isolation.isolation_date,
          days_isolation: p.isolation.days_isolation,
          high_insulation: p.isolation.high_insulation,
        },
      };
      editPositive(positive);
      closeModalEdit();
    };

    return {
      positives,
      isModalVisible,
      showModal,
      closeModal,
      isModalEditVisible,
      showModalEdit,
      closeModalEdit,
      submitFormPositive,
      search,
      searchPositive,
      formatDate,
      selectedObject,
      submitFormPositiveEdit,
    };
  },
});
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  background-color: $white;
  width: 92%;
  overflow: scroll;
  height: 100vh;
}

button {
  background-color: $secondary;
  color: $white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-fixed {
  position: fixed;
  bottom: 25px;
  right: 25px;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 15%;
}

.search {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
