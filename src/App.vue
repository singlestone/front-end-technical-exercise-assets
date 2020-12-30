<template>
  <div class="app">
    <en-header />
    <en-banner />
    <en-callouts />
  </div>
</template>

<script>
import EnHeader from './components/EnHeader'
import EnBanner from './components/EnBanner'
import EnCallouts from './components/EnCallouts'

export default {
  name: 'App',
  components: {
    EnHeader,
    EnBanner,
    EnCallouts
  }
}
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
