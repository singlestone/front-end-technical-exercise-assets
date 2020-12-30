<template>
  <div>
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
