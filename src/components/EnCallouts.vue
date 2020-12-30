<template>
  <div class="callouts">
    <div class="container">
      <h2 class="callouts-title">How It Works</h2>

      <div class="steps-content">
        <div v-for="step in steps" :key="step.id" class="step">
          <div class="step-number">{{ step.stepNumber.padStart(2, '0') }}</div>

          <div class="step-title">{{ step.title }}</div>
          <div class="step-body">{{ step.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnCallouts',

  props: {
    steps: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.callouts {
  padding: 20px 0;

  .callouts-title {
    font-size: 31px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 40px;
  }

  .steps-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      letter-spacing: 0.025em;

      .step-number {
        font-size: 60px;
        font-size: 400;
        letter-spacing: -0.025em;
        padding-bottom: 12px;
        border-bottom: 4px solid $primary-color;
        margin-bottom: 24px;
      }

      .step-title {
        font-weight: 700;
        text-transform: uppercase;
      }

      .step-body {
        margin: 20px 0;
        text-align: center;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    padding: 35px 0;
  }

  @media (min-width: 992px) {
    padding: 46px 0;
  }
}
</style>
