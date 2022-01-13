<template>
  <div>
    <Header />
    <Toolbar />

    <router-view v-slot="{ Component }">
      <FadeInOut entry="left" :duration="500" mode="in-out">
        <component :is="Component" />
      </FadeInOut>
    </router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { FadeInOut } from "vue3-transitions";

export default {
  name: "EditorLayout",
  components: {
    Header: defineAsyncComponent(() => import("../partials/Header")),
    Toolbar: defineAsyncComponent(() => import("../components/Toolbar")),
    FadeInOut,
  },
};
</script>

<style lang="scss" scoped></style>
