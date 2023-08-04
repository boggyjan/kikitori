<template>
  <div class="layout">  
    <Header />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --primary: #df343a;
}

html {
  background: #111;
  color: #f1f1f1;
}

body {
  margin: 0;
}

a {
  color: currentColor;
}

hr {
  height: 1px;
  margin: 2rem 0;
  border: 0;
  background: #fff2;
}

input[type=text] {
  padding: 0.8rem 0.4rem;
}

button {
  margin: 0.4rem;
  padding: 0.8rem 2.2rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 0 10px var(--primary);
  }

  &.outline {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);

    &:hover {
      box-shadow: 0 0 10px var(--primary), 0 0 10px var(--primary) inset;
    }
  }
}

.layout {
  .main {
    padding: 1rem 1.8rem;
  }
}
</style>