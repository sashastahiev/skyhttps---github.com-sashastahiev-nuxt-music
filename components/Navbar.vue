<script setup>
import { ref } from 'vue';

// Реактивное состояние видимости
const isVisible = ref(false);

// Метод переключения
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>
<template>
  <nav class="main__nav nav">
    <div class="nav__logo logo">
       <NuxtImg
      alt="логотип Skypro Music"
      :placeholder="[5]"
      src="/images/logo.png"
      class="logo__image"
      />
    </div>
    <div class="nav__burger burger" @click="toggleVisibility">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </div>
    <div v-show="isVisible" class="nav__menu menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="#" class="menu__link">Главное</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Мой плейлист</a>
        </li>
        <li class="menu__item">
          <NuxtLink class="menu__link" to="/Authform">
            Войти
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

.burger{
  cursor: pointer;
}

/* Состояние при видимости (оба блока) */
.content-block {
  opacity: 1;
  transform: translateY(0);
}
</style>
