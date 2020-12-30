<template>
  <header class="header">
    <div class="container">
      <logo-endless class="logo" />
    </div>
  </header>
</template>

<script>
import logoEndless from '@/assets/images/logo-endless.svg'

export default {
  name: 'EnHeader',
  components: {
    logoEndless
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 52px;
  background: #222;

  .logo {
    height: 21px;
    fill: #50e3c2;
  }
}
</style>
