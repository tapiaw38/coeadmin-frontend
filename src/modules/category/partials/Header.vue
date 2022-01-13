<template>
  <div>
    <header class="header-started">
      <div class="started-logo">
        <picture class="logo">
          <img src="~@/assets/img/municipio.png" alt="Logo">
        </picture>
      </div>
      <div class="started-search">
        <input type="search" placeholder="Buscar aquí..." />
      </div>
    </header>
  </div>
</template>

<script>
/* svg import */
export default {};
</script>

<style lang="scss" scoped>
@import url(~@/assets/scss/_globals.scss);

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
.header-started {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 40vh;
  background: linear-gradient(to right, #f6a937, #da6924);
  border-radius: 0 0 100px 100px;
}

.started-logo {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2%;
  width: 100%;
  .logo {
    max-width: 100px;
    display: block;
    margin: 0 1em;
  }
}
.started-search {
  width: 100%;
  max-width: calc(33vw + 5rem);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &::after {
    content: "\1F50D";
    display: block;
    width: 20px;
    cursor: pointer;
    height: 20px;
    position: absolute;
    margin: 0 1em;
  }
  input {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.164);
    width: 100%;
    padding: 1em;
    font-size: 1.2rem;
    border-radius: 12px;
    &::placeholder {
      color: $primary;
    }
  }
}
</style>
