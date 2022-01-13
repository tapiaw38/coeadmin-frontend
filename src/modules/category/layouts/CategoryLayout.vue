<template>
  <div>
    <Header />
    <router-view v-slot="{ Component }">
      <FadeInOut entry="left" exit="left" :duration="500" mode="in-out">
        <component :is="Component" />
      </FadeInOut>
    </router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { FadeInOut } from "vue3-transitions";

export default {
  name: "CategoryLayout",
  components: {
    Header: defineAsyncComponent(() => import("../partials/Header")),
    FadeInOut,
  },
};
</script>

<style lang="scss" scoped></style>
