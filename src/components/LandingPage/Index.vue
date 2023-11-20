<template>
  <Header />
  <main>
    <span class="top-title">Welcome to CAM-KM</span>
    <div class="searchData">
      <h1
        style="
          font-weight: 800;
          font-size: 36px;
          font-family: 'Times New Roman', Times, serif;
        "
      >
        <span style="color: rgb(38, 0, 255)">CAM</span>
        <span style="color: #7367f0">-</span>
        <span style="color: rgb(34, 119, 59)">KM</span>
        <span style="color: #7367f0">.</span>
        <span style="color: rgb(255, 106, 0)">COM</span>
      </h1>
      <SearchBox />
      <div id="buttons">
        <button style="color: #4a4a4a">Product Search</button>
        <button style="color: #4a4a4a" tool-tip="Search Single product">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import SearchBox from "./SearchBox.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SearchBox,
    Footer,
  },
};
</script>

<style>
.top-title {
  position: absolute;
  top: 60px;
  left: 0;
  padding-top: 5px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #4a4a4a;
}
#app {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: column;
  height: 98vh;
}

.searchData {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
}

#buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #f8f9fa;
  color: #121212;
  outline: 2px solid #121212;
}
</style>
