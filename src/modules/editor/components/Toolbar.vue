<template>
  <aside class="panel-aside">
    <nav class="panel-aside-nav">
      <router-link :to="{ name: 'person' }">
        <img src="~@/assets/img/person.png" alt="" />
        <p>Personas</p> 
      </router-link>
      <router-link :to="{ name: 'positive' }">
        <img src="~@/assets/img/covid.png" alt="" />
        <p>Positivos</p>
      </router-link>
    </nav>
  </aside>
</template>

<script>
import useTools from "../composables/useTools";

export default {
  name: "Toolbar",
  setup() {
    const { toolSelected, changeTools } = useTools();

    return {
      toolSelected,
      changeTools,
    };
  },
};
</script>

<style scoped lang="scss">
@import url(~@/assets/scss/_globals.scss);

.tab-empty {
  background-color: #f4f4f4;
  @include panel;
  font-weight: 300;
  color: $primary;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  align-items: center;
  position: absolute;
  padding: 0 1em;
  padding-bottom: 7%;
  h2 {
    margin-top: 7%;
  }
}

.panel-aside {
  @include gradient(bottom);
  position: absolute;
  z-index: 15;
  left: 0;
  width: 8%;
  min-height: 100vh;
  pad: 0 1em;

  .panel-aside-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    a {
      padding: 1.6em 0.5em;
      color: $white;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 0.5em;
      position: relative;
      transition: all 0.4s ease;

      img {
        max-width: 1.5em;
      }
      &:hover {
        color: $black;
        background-color: $white;
        border-radius: 0 0 33px 0;

        img {
          filter: invert(100%);
        }
        &:before {
          content: "";
          display: block;
          position: absolute;
          width: 0.6em;
          height: 50%;
          left: 0;
          top: 25%;
          border-radius: 0 6px 6px 0;
          bottom: 0;
          background-color: $secondary;
        }
      }
    }
  }
}

.router-link-active {
  p {
    color: $black;
  }
  color: $black;
  background-color: $white;
  border-radius: 0 0 33px 0;
  img {
    filter: invert(100%);
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 0.6em;
    height: 50%;
    left: 0;
    top: 25%;
    border-radius: 0 6px 6px 0;
    bottom: 0;
    background-color: $secondary;
  }
}
</style>
