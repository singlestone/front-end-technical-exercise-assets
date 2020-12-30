<template>
  <div class="app">
    <en-header />
    <en-banner />
    <en-callouts :steps="latestSteps" />
  </div>
</template>

<script>
import { STEPS_API_URL } from '@/utils/config'
import { serializeSteps } from '@/utils/serializers'

import EnHeader from './components/EnHeader'
import EnBanner from './components/EnBanner'
import EnCallouts from './components/EnCallouts'

export default {
  name: 'App',

  components: {
    EnHeader,
    EnBanner,
    EnCallouts
  },

  data() {
    return {
      rawSteps: []
    }
  },

  computed: {
    latestSteps() {
      return serializeSteps(this.rawSteps)
    }
  },

  created() {
    this.$http.get(STEPS_API_URL).then(response => {
      this.rawSteps = response.data
    })
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
