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
  --textfield: #654;
}

html {
  background: #111;
  background-image: linear-gradient(0deg, #111, #123);
  background-position: top center;
  background-repeat: no-repeat;
  color: #f1f1f1;
}

body {
  margin: 0;
}

a {
  color: currentColor;
  text-decoration: none;

  &:hover {
    text-decoration: initial;
  }
}

hr {
  height: 1px;
  margin: 2rem 0;
  border: 0;
  background: #fff2;
}

input, textarea {
  padding: 0.8rem 0.4rem;
  outline: none;
  border: 2px solid var(--textfield);
  border-radius: 0.2rem;
  font-size: 16px;

  &:focus {
    border-color: #fff;
  }
}

button {
  margin: 0.4rem;
  padding: 0.8rem 2.2rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 0.2rem;
  color: currentColor;
  cursor: pointer;
  transition: filter 0.3s, box-shadow 0.3s;

  &:hover {
    filter: brightness(1.6);
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

  &.small {
    padding: 0.2rem 1rem;
  }
}

.layout {
  .main {
    padding: 1rem 1.8rem;
  }
}
</style>