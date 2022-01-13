<template>
  <FadeInOut entry="left" exit="left" :duration="500">
    <header class="site-header">
      <div class="header-barra contenedor-1">
        <div class="barra-logo">
            <picture class="logo">
              <img src="./../assets/img/civil.jpeg" alt="Logo">
            </picture>
            <picture class="logo">
              <img src="./../assets/img/municipio.png" alt="Logo">
            </picture>
            <picture class="logo">
              <img src="./../assets/img/seysam.png" alt="Logo">
            </picture>
        </div>
        <nav class="barra-nav">
          <div class="home-bg">
            <li>
              <a class="btn-home">Inicio</a>
            </li>
            <li v-if="authStatus === 'authenticated'">
              <router-link 
              :to="{ name: 'categories' }"
                ><a class="btn orange">Empezar</a>
              </router-link>
            </li>
            <li v-else-if="authStatus === 'not-authenticated'" >
              <a 
              class="btn orange"
              @click="showModal"
              >
                Iniciar sesión
              </a>
            </li>
          </div>
        </nav>
      </div>
      <div class="header-hero contenedor-1">
        <div class="hero-text">
          <h1>
            Plataforma de registro y seguimiento de covid tinogasta <br>
          </h1>
        </div>
        <div class="hero-video">
        </div>
      </div>

      <!--- Modal -->
      <default-modal
        v-show="isModalVisible"
        @close="closeModal"
      >
        <template v-slot:header>
          <h3>Iniciar sesión</h3>
        </template>

        <template v-slot:body>
          <login-form 
          v-if="authStatus === 'not-authenticated'"
          />
          <div
          class="alert"
          v-else>
            <p>
              Hola {{ user.first_name }}!
            </p>
            <p>
              ya puedes comenzar a navegar por la plataforma.
            </p>
            <p>
              Haz click en el boton EMPEZAR!
            </p>
          </div>

        </template>

        <template v-slot:footer>
          <br/>
        </template>
    
      </default-modal>
    
    </header>
  </FadeInOut>
</template>

<script>
import { defineComponent, watch } from "vue";
import { FadeInOut } from "vue3-transitions";

import useAuth from "../modules/authentication/composables/useAuth"
import useModal from "../composables/useModal"

import DefaultModal from "../containers/DefaultModal.vue";
import LoginForm from "../modules/authentication/components/LoginForm.vue";

export default defineComponent({
  components: { 
    FadeInOut,
    DefaultModal,
    LoginForm
  },
  setup() {

    const { authStatus, user } = useAuth();
    const { isModalVisible, showModal, closeModal } = useModal();

    watch(
      () => authStatus.value, 
      (authStatus) => {
        if (authStatus === "authenticated") {
          setTimeout(() => {
            closeModal();
          }, 5000);
        }

    });

    return {
      isModalVisible,
      showModal,
      closeModal,
      authStatus,
      user
    };
  }

});
</script>

<style lang="scss" scoped>
@import url(~@/assets/scss/_globals.scss);

.alert {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  p {
    color: $primary;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
}

.site-header {
  background: #f7f7f7;

  min-height: 100vh;
  background-image: url("../assets/img/bg-landing.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .header-barra {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3em 0;
    .barra-logo {
      display: flex;
      .logo {
        width: 70px;
        height: auto;
        margin-right: 1em;
      }
    }
    @media (max-width: 550px) {
      flex-direction: column;
      justify-content: center;
      .barra-logo {
        width: 100%;
        margin-bottom: 2em;
        .logo {
          margin: 0 auto ;
          max-width: calc(9vw + 5.5rem);
        }
      }
    }
    .orange {
      &:hover {
        background-color: $white;
        border: 2px solid $primary;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.157);
        color: $primary;
      }
    }
  }
}

.st0 {
  fill: none;
  stroke: #676767;
  stroke-width: 3.1808;
  stroke-miterlimit: 10;
}

.st1 {
  fill: none;
  stroke: #676767;
  stroke-width: 3.1808;
  stroke-miterlimit: 10;
  stroke-dasharray: 4.783, 4.783;
}

.st2 {
  fill: url(#SVGID_1_);
}

.st3 {
  fill: url(#SVGID_2_);
}

.st4 {
  fill: url(#SVGID_3_);
}

.st5 {
  fill: url(#SVGID_4_);
}

.st6 {
  fill: url(#SVGID_5_);
}

.st7 {
  fill: url(#SVGID_6_);
}

.st8 {
  fill: #000000a9;
  font-weight: 600;
}

.st9 {
  font-family: "Montserrat", sans-serif;
}

.st10 {
  font-size: 42.0483px;
}

.barra-nav {
  @include flex;
  gap: 2em;
  .btn-home {
    color: $black;
    padding: 0.8em 2em;
    display: block;
    @media (max-width: 362px) {
      padding: 0.8em 0.5em;
    }
  }

  .home-bg {
    @include flex;
    justify-content: space-between;
    background-color: $white;
    border-radius: 33px;
  }
}

.header-hero {
  @include flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    min-height: 80vh;
    justify-content: center;
    flex-direction: column;
  }
  .hero-text {
    min-height: 69vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #f27240;
    @media (max-width: 768px) {
      min-height: max-content;
      align-items: center;
      text-align: center;
    }
    h1 {
      max-width: 20ch;
      font-size: calc(1.3vw + 1.8rem - 25%);
      text-transform: capitalize;
    }
  }
  .hero-video {
    flex-basis: 50%;
    padding: 1em;

    video {
      width: 100%;
      border-radius: 12px;
      box-shadow: 1px 6px 6px 3px rgba(0, 0, 0, 0.233);
    }
  }
}
</style>
