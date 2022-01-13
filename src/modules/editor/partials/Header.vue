<template>
  <header class="panel-header">
    <div class="panel-barra">
      <div class="panel-logo">
        <router-link
        :to="{ name: 'home' }"
        >
          <img class="logo" src="../../../assets/img/home.png" alt="home">
        </router-link>
      </div>
      <div class="panel-half">
        <div class="panel">
          
        </div>
        <div class="panel-nav">
          <div class="nav">
            <li>
              <a class="btn white" @click="toggleOptions">
                {{ user.first_name }}
              </a>
            </li>

            <FadeInOut entry="left" exit="left" :duration="500">
              <MenuOptions
                v-if="downloadOptions"
                class="download-video-options"
              >
                <div>

                  <div class="profile-content">
                    <p>{{user.first_name}} {{user.last_name}}</p>
                  </div>
                  
                  <button 
                  class="btn orange"
                  @click="handleLogout"
                  >Cerrar sesíon</button>
                </div>
              </MenuOptions>
            </FadeInOut>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, watch } from "vue";
import { useRouter } from "vue-router";
import { FadeInOut } from "vue3-transitions";
import useMenuOptions from "../composables/useMenuOptions";
import useAuth from "../../authentication/composables/useAuth";
import MenuOptions from "../components/MenuOptions";
export default defineComponent({
  name: "Header",
  components: { FadeInOut, MenuOptions },
  setup() {
    const { downloadOptions, toggleOptions } = useMenuOptions();
    const { handleLogout, authStatus, user } = useAuth();

    const router = useRouter();

    watch(
      () => authStatus.value,
      (authStatus) => {
        if (authStatus === "not-authenticated") {
          router.push({ name: "home" });
        } 
      }
    );

    return {
      downloadOptions,
      toggleOptions,
      handleLogout,
      authStatus,
      user
    };
  },
});
</script>

<style lang="scss" scoped>
@import url(~@/assets/scss/_globals.scss);

.white {
  &:hover {
    background-color: transparent;
    border: 2px solid $white;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.157);
    color: $white;
  }
}
.st0 {
  fill: none;
  stroke: white;
  stroke-width: 3.1808;
  stroke-miterlimit: 10;
}

.st1 {
  fill: none;
  stroke: white;
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
  fill: white;
}

.st9 {
  font-family: "Montserrat", sans-serif;
}

.st10 {
  font-size: 45.0483px;
}
.panel-header {
  @include gradient(right);
  .panel-barra {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
  }
  .panel-logo {
    flex-basis: 50%;
    .logo {
      max-width: 35px;
      padding: 1.2em 0;
      margin-left: 1.2em;
      &:hover {
        cursor: pointer;
        filter: invert(100%);
      }
    }
  }
}
.panel-half {
  display: flex;
  align-items: center;
  flex: 1 1 50%;
  .panel {
    margin-right: auto;
    margin-left: 0;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
}
.panel-nav {
  position: relative;
  .nav {
    display: flex;
    gap: 2em;
    a {
      &:not(a.white) {
        color: $white;
      }
    }
  }
}

.orange {
  background: transparent;
  border: 1px $primary;
  @include gradient(right);
}

.download-video-options {
  p {
    padding: 1em 0;
  }
  .campo-select {
    padding: 1em 0;
    label {
      text-transform: capitalize;
    }
    select {
      display: block;
      width: 100%;
      padding: 0.5em;
      border-radius: 3px;
      font-size: 1rem;
      border: none;
      outline: none;
      background: #f0f0f0;
    }
  }
}
</style>
