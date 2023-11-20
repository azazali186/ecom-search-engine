<template>
  <header>
    <!-- <img src="../../public/assets/images/google.png" alt="Google Logo" /> -->
    <span class="header-title">CAM-KH</span>
    <div>
      <a href="#">Hi, Login</a>
      <a href="#">Register</a>
      <a href="#">About us</a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  align-content: center;
  padding-bottom: 15px;
}
.header-title{
  font-size: 24px;
  font-weight: 800;
  font-family: 'Times New Roman', Times, serif;
  color: orangered;
}

img {
  height: 40px;
  margin: 0px;
}

div {
  display: flex;
  gap: 20px;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
