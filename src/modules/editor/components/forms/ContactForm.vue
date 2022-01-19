<template>
  <form class="form-postive" @submit="sendFormContact">
    <div v-if="!contactEdit" class="form-control">
      <label for="">
        Contacto de 
        {{positiveData.person?.first_name}} 
        {{positiveData.person?.last_name}}
      </label>
      <input
        type="text"
        placeholder="Buscar persona aquí..."
        v-model="document"
      />
      <select name="select" v-model="contactForm.person">
        <option :value="null" selected>Selecciona una persona</option>
        <option
          :value="null"
          v-if="filterPersonByDocument.length === 0"
        >
          No hay personas registradas con este DNI
        </option>
        <template
          v-for="person in filterPersonByDocument"
          :key="person.id"
        >
          <option :value="person.id">
            {{ person.first_name }} {{ person.last_name }}
          </option>
        </template>
      </select>
    </div>
    <div class="form-control" v-else>
      <label class="person-label" for="">{{ contactData.person.first_name }} {{ contactData.person.last_name }}</label>
    </div>
    <div class="form-control">
      <label for="">Contacto</label>
      <input type="date" v-model="contactForm.contact_date" required />
    </div>
    <div class="form-control">
      <label for="">Tipo de contacto</label>
      <select v-model="contactForm.contact_type">
        <option :value="null" selected>Selecciona</option>
        <option value="Conviviente">Conviviente</option>
        <option value="No conviviente">No conviviente</option>
      </select>
    </div>
    <div class="form-control">
      <label for="">Días de aislamiento</label>
      <input
        type="number"
        v-model="contactForm.insolation_days"
        required
      />
    </div>
    <div class="form-control">
      <button type="submit">Guardar</button>
    </div>
  </form>
</template>

<script>
import { ref, watch, computed } from "vue";
import usePerson from "../../composables/usePerson";
export default {
  emits: ["submitFormContact"],
  props: {
    contactData: {
      type: Object,
      required: false,
    },
    positiveData: {
      type: Object,
      required: true,
    }
  },
  setup(props, { emit }) {
    const { persons } = usePerson();

    const document = ref("");
    let contactEdit = ref(false);

    const filterPersonByDocument = computed(() => {
      return persons.value.filter(
        (person) => 
          person.document.includes(document.value) ||
          person.first_name.toLowerCase().includes(document.value.toLowerCase()) ||
          person.last_name.toLowerCase().includes(document.value.toLowerCase())
      );
    });

    const getPersonById = () => {
      const array = [...persons.value];
      return array.find((person) => person.id === props.contactData.person);
    };

    const contactForm = ref({
      person: null,
      contact_date: "",
      contact_type: null,
      insolation_days: "",
    });

    const sendFormContact = (e) => {
      e.preventDefault();
      if (contactForm.value.person === null) {
        alert("Selecciona una persona");
      } else {
        emit("submitFormContact", contactForm.value);
      }
    };

    watch(
      () => props.contactData,
      (newValue) => {
        if (newValue !== null) {
          contactEdit.value = true;
          // set the form values
          contactForm.value.person = newValue.person;
          contactForm.value.contact_date = newValue.contact_date;
          contactForm.value.contact_type = newValue.contact_type;
          contactForm.value.insolation_days = newValue.insolation_days;
        }
      }
    );

    return {
      contactForm,
      sendFormContact,
      document,
      filterPersonByDocument,
      getPersonById,
      contactEdit,
      positive: props.positiveData,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-postive {
  height: auto;
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

  .person-label {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 5px;
    font-size: 1em;
  }

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
}
</style>
