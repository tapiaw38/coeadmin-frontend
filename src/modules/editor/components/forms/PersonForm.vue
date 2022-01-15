<template>
  <form class="form-postive" @submit="sendFormPerson">
    <div class="form-control">
      <label for="">Nombre</label>
      <input type="text" v-model="personForm.first_name" required />
    </div>
    <div class="form-control">
      <label for="">Apellido</label>
      <input type="text" v-model="personForm.last_name" required />
    </div>
    <div class="form-control">
      <label for="">Documento (sin puntos)</label>
      <input
        type="text"
        v-model="personForm.document"
        required
        minlength="8"
        maxlength="8"
        placeholder="35123456"
      />
      <div class="alert" v-if="getPersonByDocument(personForm.document) && !personEdit">
        <p>
          El documento
          {{ getPersonByDocument(personForm.document).document }} ya se
          encuentra registrado.
        </p>
      </div>
    </div>
    <div class="form-control">
      <label for="">Fecha de nacimiento</label>
      <input type="date" v-model="personForm.date_birth" />
    </div>
    <div class="form-control">
      <label for="">Genero</label>
      <select v-model="personForm.gender">
        <option :value="null" selected>Selecciona un genero</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
    </div>
    <div class="form-control">
      <label for="">Celular (sin 0 y 15)</label>
      <input
        type="text"
        v-model="personForm.phone_number"
        required
        maxlength="10"
        minlength="10"
        placeholder="3837404040"
      />
    </div>
    <div class="form-control">
      <label for="">Distrito</label>
      <select v-model="personForm.location.district">
        <option :value="null" selected>Selecciona un distrito</option>
        <option value="Tinogasta">Tinogasta</option>
        <option value="Santa Rosa">Santa Rosa</option>
        <option value="El Puesto">El Puesto</option>
        <option value="San Jose">San Jose</option>
        <option value="Salado">Salado</option>
        <option value="La Puntilla">La Puntilla</option>
        <option value="Villa Lujan">Villa Lujan</option>
        <option value="Cerro Negro">Cerro Negro</option>
        <option value="Costa de Reyes">Costa de Reyes</option>
        <option value="Copacabana">Copacabana</option>
        <option value="Anillaco">Anillaco</option>
        <option value="El Durazno">El Durazno</option>
      </select>
    </div>
    <div class="form-control">
      <label for="">Direccion</label>
      <input type="text" v-model="personForm.location.address" required />
    </div>

    <div class="form-control">
      <button type="submit">
        Guardar
      </button>
    </div>
  </form>
</template>

<script>
import { ref, watch } from "vue";
import usePerson from "../../composables/usePerson";
export default {
  emits: ["submitFormPerson"],
  props: {
    personData: {
      type: Object,
      required: false,
    },
  },
  setup(props, { emit }) {

    const { persons } = usePerson();
    let personEdit = ref(false);

    const personForm = ref({
      first_name: "",
      last_name: "",
      document: "",
      date_birth: "1900-01-01",
      gender: null,
      phone_number: "",
      location: {
        district: null,
        address: "",
      },
    });

    const sendFormPerson = (e) => {
      e.preventDefault();
      if (personForm.value.gender === null) {
        alert("Debes seleccionar un genero");
      } else if (personForm.value.location.district == null) {
        alert("Debes seleccionar un distrito");
      } else {
        emit("submitFormPerson", personForm.value);
      }
    };

    const getPersonByDocument = (document) => {
      const array = [...persons.value];
      return array.find((person) => person.document === document);
    };

    watch(
      () => props.personData,
      (newValue) => {
        if (newValue !== null) {

          personEdit.value = true;
          // set the form values
          personForm.value.first_name = newValue.first_name;
          personForm.value.last_name = newValue.last_name;
          personForm.value.document = newValue.document;
          personForm.value.date_birth = newValue.date_birth;
          personForm.value.gender = newValue.gender;
          personForm.value.phone_number = newValue.phone_number;
          personForm.value.location.district = newValue.location.district;
          personForm.value.location.address = newValue.location.address;
        }
      }
    )

    return {
      personForm,
      sendFormPerson,
      getPersonByDocument,
      personEdit
    };
  },
};
</script>

<style lang="scss" scoped>
.form-postive {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $white;
  border-radius: 14px;
}

.form-control {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.3em;

  label {
    font-size: 1em;
    margin-bottom: 4px;
  }

  input,
  select {
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 5px;
    font-size: 1em;
  }
  button {
    width: 100%;
    height: 30px;
    border: 2px solid $primary;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 3px;
    font-size: 1em;
    background: $primary;
    color: white;
    cursor: pointer;
    &:hover {
      background: $white;
      color: $primary;
      transition: 0.3s;
    }
  }

  .alert {
    width: 100%;
    height: 50px;
    border: 2px solid $primary;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 3px;
    font-size: 1em;
    background: $primary;
    color: white;
    cursor: pointer;
    &:hover {
      background: $white;
      color: $primary;
      transition: 0.3s;
    }
  }
}
</style>
