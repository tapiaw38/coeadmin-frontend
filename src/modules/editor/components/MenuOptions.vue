<template>
  <div class="download-video-options">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.download-video-options {
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  padding: 1em;
  border-radius: 3px;
  text-align: left;
  position: absolute;
  top: 280%;
  border: 1px solid #eeeeee;
  width: 100%;
  min-width: 350px;
  transition: all 1s ease;
  right: 0%;
}
</style>
