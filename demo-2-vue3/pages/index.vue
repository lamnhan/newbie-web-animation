<template>
  <div class="page">

    <div id="container">

      <section id="emojis">
        <h3>Example 1: Emojis</h3>
        <p>Transform oriented (position, size, rotation, ...).</p>
        <Emojis></Emojis>
      </section>
  
      <section id="neon-light">
        <h3>Example 2: Neon Light</h3>
        <p>Presentation oriented (color, shadow, opacity, ...).</p>
        <NeonLight></NeonLight>
      </section>
  
      <section id="logos">
        <h3>Example 3: Logos</h3>
        <p>More advance and interactive.</p>
        <Logos></Logos>
      </section>

    </div>

  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>

  .page {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  #container {
    width: 100%;
    max-width: 500px;
    background: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
  }

  section {
    margin-bottom: 4rem;

    &:last-child {
      margin-bottom: 2rem;
    }

    h3 {
      margin: 0;
    }

    p {
      font-size: .9rem;
      margin-top: .25rem;
      margin-bottom: 2rem;
      color: #777777;
      font-style: italic;
    }
  }

</style>
