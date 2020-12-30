<template>
  <div class="banner">
    <div class="container">
      <h2>New Games & Accessories</h2>

      <h1>
        Monthly packages. <br />
        Excitement delivered daily.
      </h1>

      <p>
        What's the best way to shop for the latest video games and peripherals?
        How about never shopping at all? You'll get new stuff on your doorstep -
        every month.
      </p>

      <button type="button" class="btn-start">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnBanner'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.banner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-image: url('../assets/images/photo-couch.jpg');
  background-image: -webkit-image-set(
    url('../assets/images/photo-couch.jpg') 1x,
    url('../assets/images/photo-couch_2x.jpg') 2x
  );
  background-image: image-set(
    url('../assets/images/photo-couch.jpg') 1x,
    url('../assets/images/photo-couch_2x.jpg') 2x
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 10% 0;

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.01em;
  }

  h1 {
    font-size: 55px;
    font-weight: 300;
    line-height: 65px;
    letter-spacing: 0.01em;
  }

  p {
    max-width: 490px;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.01em;
    margin: 0 0 36px;
  }

  .btn-start {
    border: none;
    background-color: $primary-color;
    border-radius: 999px;
    color: $dark-color;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    padding: 13px 36px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: background-color 1s ease;

    &:hover {
      background-color: darken($primary-color, 17%);
    }
  }
}
</style>
