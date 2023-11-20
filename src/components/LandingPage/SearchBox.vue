<template>
  <div class="searchbox">
    <input
      aria-label="Search for products"
      autocomplete="off"
      inputmode="search"
      placeholder="Search for products"
      type="search"
    />
    <select>
      <option value="hello">Hello</option>
      <option value="hello">Man</option>
      <option value="hello">Woman</option>
    </select>
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
  --select-width: 150px;

  height: var(--box-height);
  min-width: 700px;
  position: relative;
}

.searchbox input[type="search"] {
  border: var(--border-width) solid var(--dark-gray);
  border-radius: var(--border-radius);
  height: 100%;
  width: 100%;
  padding-left: calc(var(--side-margin) + 4px);
  padding-right: var(--side-margin);
  /* -webkit-appearance: none; */
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
  right: var(--side-margin);
  top: var(--icon-vertical-margin);
}

.searchbox select {
  position: absolute;
  width: var(--select-width);
  right: calc(var(--side-margin) * 1);
  top: calc(var(--icon-vertical-margin) * 1.4);
  outline: transparent;
  border: none;
  padding: 5px 10px;
  border-radius: 25px;
  font-size: 14px;
  transition: ease-in-out 0.2ms;
}

.searchbox select:hover{
  border-color: var(--focus-blue);
}

.searchbox select:focus{
  border-color: var(--focus-blue);
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
