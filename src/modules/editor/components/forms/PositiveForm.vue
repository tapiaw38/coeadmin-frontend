<template>
    <form 
    class="form-postive"
    @submit="sendFormPositive"
    >
      <div class="form-control">
        <label for="">Positivo</label>
        <input 
        type="text" 
        placeholder="Buscar persona por DNI"
        v-model="document"
        maxlength="8"
        minlength="8"
        />
        <select 
        name="select"
        v-model="positiveForm.person"
        >
          <option :value="null" selected>Selecciona una persona</option>
          <option 
          :value="null"
          v-if="filterPersonByDocument(document).length === 0"
          >
            No hay personas registradas con este DNI
          </option>
          <template
          v-for="person in filterPersonByDocument(document)"
          :key="person.id"
          >
            <option 
            :value="person.id"
            >
              {{person.first_name}} {{person.last_name}}
            </option>
          </template>
        </select>
      </div>
      <div class="form-control">
        <label for="">Fecha de positividad</label>
        <input 
        type="date" 
        v-model="positiveForm.positivity_date"
        required
        />
      </div>
      <div class="form-control">
        <label for="">Tipo de variante</label>
        <input 
        type="text" 
        v-model="positiveForm.variant_type"
        required
        />
      </div>
      <div class="form-control">
        <label for="">Laboratorio</label>
        <input 
        type="text" 
        v-model="positiveForm.laboratory"
        required 
        />
      </div>
      <div class="form-control">
        <label for="">Aislamiento</label>
        
      </div>
      <div class="form-control">
        <label for="">Fecha</label>
        <input 
        type="date"
        v-model="positiveForm.isolation.isolation_date" 
        required
        />
      </div>
      <div class="form-control">
        <label for="">Días de aislamiento</label>
        <input 
        type="number"
        v-model="positiveForm.isolation.days_isolation" 
        required
        />
      </div>
      <div class="form-control">
        <button
        type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
</template>

<script>
import { ref } from "vue";
import usePerson from "../../composables/usePerson"

export default {
  emits: ["submitFormPositive"],
    setup(_, {emit}) {

        const { persons } = usePerson()

        const document = ref("");

        const filterPersonByDocument = (document) => {
          return persons.value.filter(person => person.document === document)
        }

        const positiveForm = ref({
            person: null,
            positivity_date: "",
            variant_type: "",
            laboratory: "",
            isolation: {
                isolation_date: "",
                days_isolation: "",
            }
        });

        const sendFormPositive = (e) => {
            e.preventDefault();
            if(positiveForm.value.person === null) {
                alert("Selecciona una persona")
            } else {
                emit("submitFormPositive", positiveForm.value)
            }
        };

        return {
            positiveForm,
            sendFormPositive,
            document,
            filterPersonByDocument
        };
    }
}
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
