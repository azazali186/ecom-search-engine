<template>
  <div v-if="!cookieConsentGiven" id="new-cookie-consent-container">
    <div class="cookie-consent-banner">
      <p>
        We use cookies to improve user experience, and analyze website traffic.
        For these reasons, we may share your site usage data with our analytics
        partners. By continuing to the site, you consent to store on your device
        all the technologies described in our cookie policy.
        <a href="/privacy-policy" target="_blank">Here is the cookie policy</a>
      </p>

      <div class="pull-right">
        <button
          class="new-style-button mb-2"
          @click="showCookiePrompt"
          type="button"
        >
          Allow cookies
        </button>

        <button
          class="new-style-button btn-light-bg mb-2"
          @click="rejectCookies"
          type="button"
        >
          Reject
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#new-cookie-consent-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.cookie-consent-banner {
  max-width: 800px;
  margin: 0 auto;
}

p {
  margin: 0;
}

a {
  color: #fff;
}

.pull-right {
  float: right;
}

.new-style-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
}

.btn-light-bg {
  background-color: #ddd;
  color: #333;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const cookieConsentGiven = ref(false);
const COOKIE_VALUE = 1;
const COOKIE_DOMAIN = "cam-kh.com";

const showCookiePrompt = () => {
  const consent = confirm(
    "By clicking 'OK', you consent to the use of cookies."
  );
  if (consent) {
    consentWithCookies();
  } else {
    rejectCookies();
  }
};

const consentWithCookies = () => {
  hideCookieDialog();
  setCookie("marketplace_cookie_consent", COOKIE_VALUE, 7300);
};

const rejectCookies = () => {
  hideCookieDialog();
  // You may want to handle the rejection case, e.g., redirect to a cookie-free version of the site.
};

const cookieExists = (name) => {
  let c = document.cookie.split("; ").indexOf(name + "=" + COOKIE_VALUE) !== -1;

  if (!c) {
    c = localStorage.getItem("marketplace_cookie_consent");
  }

  return c;
};

const hideCookieDialog = () => {
  cookieConsentGiven.value = true;
};

const setCookie = (name, value, expirationInDays) => {
  const date = new Date();
  date.setTime(date.getTime() + expirationInDays * 24 * 60 * 60 * 1000);
  const cValue =
    value +
    ";expires=" +
    date.toUTCString() +
    ";domain=" +
    COOKIE_DOMAIN +
    ";path=/";
  localStorage.setItem("marketplace_cookie_consent", cValue);
  document.cookie = cValue;
};

onMounted(() => {
  if (cookieExists("marketplace_cookie_consent")) {
    hideCookieDialog();
  }
});
</script>
