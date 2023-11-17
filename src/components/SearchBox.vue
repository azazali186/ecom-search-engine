<template>
  <div class="searchbox">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      />
    </svg>
    <input
      aria-label="Search for products"
      autocomplete="off"
      inputmode="search"
      placeholder="Search for products"
      type="search"
    />
  </div>
</template>

<style scoped>
.searchbox {
  --target-size: 48px;
  --box-height: var(--target-size);
  --border-width: 2px;
  --border-radius: calc(var(--box-height) / 2);
  --icon-size: calc(var(--box-height) * 3 / 4);
  --side-margin: calc(var(--border-radius) / 2);
  --icon-vertical-margin: calc((var(--box-height) - var(--icon-size)) / 2);
  --focus-blue: #4285f4;
  --border-color: #212121;
  --dark-gray: #4a4a4a;
  --light-gray: #747171;

  height: var(--box-height);
  min-width: 561px;
  max-width: 800px;
  position: relative;
}

.searchbox input[type="search"] {
  border: var(--border-width) solid var(--dark-gray);
  border-radius: var(--border-radius);
  height: 100%;
  width: 100%;
  padding-left: calc(var(--side-margin) + var(--icon-size) + 4px);
  padding-right: var(--side-margin);
  -webkit-appearance: none;
  color: var(--dark-gray);
  font-family: "Noto Sans", Verdana, sans-serif;
  font-size: 1rem;
  background: transparent;
}

.searchbox input[type="search"]::placeholder {
  color: var(--light-gray);
  opacity: 1;
}

.searchbox svg {
  fill: var(--dark-gray);
  height: var(--icon-size);
  width: var(--icon-size);
  position: absolute;
  left: var(--side-margin);
  top: var(--icon-vertical-margin);
}

.searchbox input[type="search"]:focus {
  border-color: var(--focus-blue);
  box-shadow: 0px 0px 5px var(--focus-blue);
  outline: 1px solid transparent;
}

.searchbox svg {
  z-index: -1;
}
</style>
