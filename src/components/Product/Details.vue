<template>
  <div class="product-view">
    <div class="product-images">
      <image-slider :images="product.images"></image-slider>
    </div>

    <div class="product-details">
      <h1>{{ product.title }}</h1>
      <p class="product-price">{{ formatCurrency(product.price) }}</p>
      <div class="product-description">
        <p>{{ product.description }}</p>
      </div>
      <div class="product-details-section">
        <h2>Product Details</h2>
        <ul>
          <li v-for="(point, index) in product.bulletPoints" :key="index">
            {{ point }}
          </li>
        </ul>
        <div class="keys">
          <p><strong>Keys:</strong> {{ product.keys.join(", ") }}</p>
        </div>
        <div class="tags">
          <p><strong>Tags:</strong> {{ product.tags.join(", ") }}</p>
        </div>
        <div class="currencies">
          <p>
            <strong>Currencies:</strong> {{ product.currencies.join(", ") }}
          </p>
        </div>
        <div class="languages">
          <p><strong>Languages:</strong> {{ product.languages.join(", ") }}</p>
        </div>
      </div>
      <div class="vendor-info">
        <h2>Vendor Information</h2>
        <p><strong>SKU:</strong> {{ product.sku }}</p>
        <p><strong>Vendor:</strong> {{ product.vendor }}</p>
      </div>
      <div class="ratings-comments">
        <h2>Ratings and Comments</h2>
        <p><strong>Ratings:</strong> {{ product.ratings }}/5</p>
        <p><strong>Comments:</strong> {{ product.comments }}</p>
      </div>
      <div class="buy-options">
        <a href="#" class="buy-now-icon" @click="buyNow">
          <!-- Replace with your Buy Now icon -->
          Buy Now
        </a>
        <a
          href="https://t.me/your-telegram"
          target="_blank"
          class="telegram-icon"
        >
          <!-- Replace with your Telegram icon -->
          Telegram
        </a>
        <a
          href="https://wa.me/your-whatsapp-number"
          target="_blank"
          class="whatsapp-icon"
        >
          <!-- Replace with your WhatsApp icon -->
          WhatsApp
        </a>
        <a href="mailto:your@email.com" class="email-icon">
          <!-- Replace with your Email icon -->
          Email
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import ImageSlider from "./ImageSlider.vue";

const product = ref({
  title: "Awesome Product",
  price: 99.99,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  images: [
    "https://via.placeholder.com/400x400",
    "https://via.placeholder.com/400x400",
    "https://via.placeholder.com/400x400",
  ],
  bulletPoints: ["Point 1", "Point 2", "Point 3"],
  keys: ["Key 1", "Key 2", "Key 3"],
  tags: ["Tag 1", "Tag 2", "Tag 3"],
  currencies: ["USD", "EUR"],
  languages: ["English", "Spanish"],
  sku: "ABC123",
  vendor: "Vendor XYZ",
  ratings: 4.5,
  comments: 15,
});

const formatCurrency = (value) => {
  return `$${value.toFixed(2)}`;
};

const buyNow = () => {
  // Add your logic for the "Buy Now" action here
  console.log("Buy Now clicked for:", product.value.title);
};
</script>
<style scoped>
.product-view {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.product-images {
  flex: 1;
  max-width: 50%;
}

.image-container {
  display: flex;
  justify-content: space-between;
}

.image-container img {
  width: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  margin-right: 5px;
}

.product-details {
  flex: 1;
  max-width: 50%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-details h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.5em;
  color: #e44d26;
}

.product-description {
  margin-bottom: 20px;
}

.product-details-section h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.product-details-section ul {
  list-style-type: square;
  margin-left: 20px;
}

.vendor-info h2,
.ratings-comments h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.buy-options {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.buy-options a {
  display: inline-block;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-options a:hover {
  background-color: #45a049;
}
</style>
