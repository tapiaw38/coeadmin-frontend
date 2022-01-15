<template>
    <div class="person">
        <div class="btn-container">
            <button 
            class="btn btn-fixed"
            @click="showModal"
            >
                Agregar
            </button>
        </div>
        <div class="panel-title search">
            <input 
            type="text" 
            placeholder="Buscar aquí..." 
            v-model="search"
            />
        </div>
        <div class="table-wrapper">
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Documento</th>
                        <th>Fecha de nacimiento</th>
                        <th>Genero</th>
                        <th>Celular</th>
                        <th>Distrito</th>
                        <th>Dirección</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <template
                    v-for="person in searchPerson"
                    :key="person.id"
                    >
                        <tr>
                            <td>{{person.first_name}}</td>
                            <td>{{person.last_name}}</td>
                            <td>{{person.document}}</td>
                            <td>{{formatDate(person.date_birth)}}</td>
                            <td>{{person.gender}}</td>
                            <td>{{person.phone_number}}</td>
                            <td>{{person.location.district}}</td>
                            <td>{{person.location.address}}</td>
                            <td>
                                <button 
                                >
                                <img
                                @click="showModalEdit(person)"
                                src="../../../../src/assets/img/edit.png" 
                                alt="edit"
                                width="30"
                                height="20"
                                >
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <default-modal
            v-show="isModalVisible"
            @close="closeModal"
        >
            <template v-slot:header>
                <h3>Agregar</h3>
            </template>
            <template v-slot:body>
                <person-form 
                @submitFormPerson="submitFormPerson"
                />
            </template>
            <template v-slot:footer>
                <br/>
            </template>
        </default-modal>
        
        <default-modal
            v-show="isModalEditVisible"
            @close="closeModalEdit"
        >
            <template v-slot:header>
                <h3>Editar</h3>
            </template>
            <template v-slot:body>
                <person-form 
                :personData="selectedObject"
                @submitFormPerson="submitFormPersonEdit"
                />
            </template>
            <template v-slot:footer>
                <br/>
            </template>
        </default-modal>
    </div>
</template>

<script>
import { ref, computed } from "vue";

import useModal from "../../../composables/useModal";
import useModalEdit from "../../../composables/useModalEdit";
import usePerson from "../composables/usePerson"

import DefaultModal from "../../../containers/DefaultModal";
import PersonForm from "../components/forms/PersonForm";

import { formatDate } from "../../../../src/helpers/formatDate"

export default {
    components: {
        DefaultModal,
        PersonForm
    },
    setup() {
        
        const { persons, createPerson, editPerson } = usePerson()
        const { isModalVisible, showModal, closeModal } = useModal();
        const { isModalEditVisible, showModalEdit, closeModalEdit, selectedObject } = useModalEdit();
        
        let search = ref("");

        const searchPerson = computed(() => persons.value.filter(p => {
                return p.first_name.toLowerCase().includes(search.value.toLowerCase()) ||
                p.last_name.toLowerCase().includes(search.value.toLowerCase()) ||
                p.document.toLowerCase().includes(search.value.toLowerCase())
            }))

        const submitFormPerson = (person) => {
            createPerson(person)
            closeModal()
        }

        const submitFormPersonEdit = (p) => {
            let person = {
                    id: selectedObject.value.id,
                    first_name: p.first_name,
                    last_name: p.last_name,
                    document: p.document,
                    date_birth: p.date_birth,
                    gender: p.gender,
                    phone_number: p.phone_number,
                    location: {
                        district: p.location.district,
                        address: p.location.address
                    }
            };
            editPerson(person)
            closeModalEdit()
        }

        return {
            persons,
            isModalVisible,
            showModal,
            closeModal,
            submitFormPerson,
            isModalEditVisible,
            showModalEdit,
            closeModalEdit,
            search,
            searchPerson,
            selectedObject,
            submitFormPersonEdit,
            formatDate
        }
    }
}
</script>


<style lang="scss" scoped>
.person {
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