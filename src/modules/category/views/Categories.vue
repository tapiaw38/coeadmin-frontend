<template>
  <main class="main-create">
    <section class="contenedor-1">
      <div class="create-view">
        <router-link :to="{ path: '/' }">
          <p>Volver</p>
        </router-link>
      </div>

      <div class="create-grid">
        
        <router-link :to="{ name: 'person' }">
          <card-animation 
            :title="'Registro de Personas'"
          />
        </router-link>
        <router-link :to="{ name: 'positive' }">
          <card-animation 
            :title="'Registro Covid'"
          />
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CardAnimation: defineAsyncComponent(() =>
      import("../componets/CardAnimation")
    ),
  },
};
</script>

<style lang="scss" scoped>
@import url(~@/assets/scss/_globals.scss);

.main-create {
  .create-view {
    display: flex;
    justify-content: space-between;
    padding: 3em 0.2em;
    text-transform: capitalize;
    p {
      overflow: hidden;
    }
    p::after {
      content: "";
      display: block;
      width: 100%;
      background-color: $primary;
      height: 2px;
      transform: translateX(200%);
      transition: transform 1s ease;
    }
    p:hover {
      &::after {
        transform: translateX(0);
      }
    }

    & p:first-child {
      color: $black;
    }
    & p:nth-child(2) {
      color: lighten($color: #000000, $amount: 35);
    }
  }
}
.create-grid {
  display: grid;
  @include grid(3);
  gap: 2em 1em;
  place-content: center;
  margin: 1em 0;
  @media (max-width: 768px) {
    @include grid(2);
  }
  @media (max-width: 550px) {
    @include grid(1);
  }
}

.contenedor-1 {
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;

  @media (max-width: 1050px) {
    max-width: 95vw;
  }
}
</style>
