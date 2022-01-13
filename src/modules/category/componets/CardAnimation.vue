<template>
  <div class="project-item">
    <header class="project-name">
      <p>{{ title }}</p>
    </header>
    <div class="project-img">
      <img src="~@/assets/img/covid.jpg" alt="" />
    </div>
    <footer class="project-btns">
        <a class="btn orange">
          Acceder
        </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      description: "The title of the target"
    },
    image: {
      type: String,
      required: true,
      description: "The image of the target"
    }
  },
  setup(props) {
    return {
      ...props
    };
  }
}
</script>

<style lang="scss" scoped>
.orange {
      &:hover {
        background-color: $white;
        border: 2px solid $primary;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.157);
        color: $primary;
      }
    }
.project-item {
  background-color: rgba(29, 26, 26, 0.246);
  width: 100%;
  min-width: calc(5vw + 150px);
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  min-height: calc(5.5vh + 210px);
  &:hover {
    border: 1px solid $primary;
    cursor: pointer;
    img {
      transform: scale(1.1);

      transition: all 0.5s ease;
    }
  }
  .project-name {
    padding: 0.5em 1em;
    color: $white;
    text-transform: capitalize;
    position: relative;
    z-index: 5;
  }
  .project-btns {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.5em;
    height: 80%;
    position: relative;
    a {
      padding: 0.7em 1.5em;
    }
  }
}

.project-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: center;

  img {
    transition: all 0.5s ease;
    object-fit: cover;
    object-position: center;
    display: block;
    height: 100%;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #00000057;
  }
}
</style>
