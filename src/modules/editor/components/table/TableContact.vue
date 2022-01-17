<template>
  <div>
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>Contacto</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Aislamiento</th>
            <th>Alta</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="contacts.length > 0">
          <template v-for="contact in contacts" :key="contact.id">
            <tr>
              <td>
                {{ contact.person.first_name }}
                {{ contact.person.last_name }}
              </td>
              <td>
                {{ formatDate(contact.contact_date) }}
              </td>
              <td>
                {{ contact.contact_type }}
              </td>
              <td>
                {{ contact.insolation_days }}
              </td>
              <td>
                {{ formatDate(contact.high_insulation_date) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div style="margin-top: 20px;"></div>
  </div>
</template>

<script>
import { watch, ref } from "vue";
import { formatDate } from "../../../../../src/helpers/formatDate";
export default {
  props: {
    contactData: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  setup(props) {
    let contacts = ref([]);

    watch(
      () => props.contactData,
      (newValue) => {
        if (newValue.length > 0) {
          contacts.value = newValue;
        }
      }
    );

    return {
      contacts,
      formatDate,
    };
  },
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  width: 100%;
}
</style>
