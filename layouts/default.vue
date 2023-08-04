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
  --secondary: #62a0bd;
  --textfield: #654;
  --alert-border: #7899;
  --alert-bg: #5679;
}

html {
  background: #111;
  background-image: linear-gradient(0deg, #111, #123);
  background-position: top center;
  background-repeat: no-repeat;
  color: #f1f1f1;
  font-size: 16px;
  font-family: sans-serif;
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

input, textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem 0.4rem;
  outline: none;
  border: 2px solid var(--textfield);
  border-radius: 0.2rem;
  font-size: 1rem;

  &:focus {
    border-color: #fff;
  }
}

button {
  box-sizing: border-box;
  margin: 0.4rem;
  padding: 0.8rem 2.2rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 0.2rem;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  transition: filter 0.3s, box-shadow 0.3s;

  &:hover {
    filter: brightness(1.6);
    box-shadow: 0 0 10px var(--primary);
  }

  &.secondary {
    background: var(--secondary);
    border: 2px solid var(--secondary);
  }

  &.outline {
    background: transparent;
    color: var(--primary);

    &:hover {
      box-shadow: 0 0 10px var(--primary), 0 0 10px var(--primary) inset;
    }
  }

  &.outline.secondary {
    color: var(--secondary);

    &:hover {
      box-shadow: 0 0 10px var(--secondary), 0 0 10px var(--secondary) inset;
    }
  }

  &.small {
    padding: 0.2rem 1rem;
    font-size: 0.75rem;
  }
}

.alert {
  margin: 1rem 0;
  padding: 0.75rem;
  border: 1px solid var(--alert-border);
  border-radius: 0.4rem;
  background: var(--alert-bg);
}

.layout {
  .main {
    padding: 1rem 1.8rem;
  }
}
</style>