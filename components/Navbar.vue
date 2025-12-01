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
/* Применяется к навигационному меню */
.main__nav {
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
}
/* Стиль контейнера логотипа */
.nav__logo {
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
}

/* Логотип изображения */
.logo__image {
  width: 113.33px;
  height: 17px;
  color: #181818;
}

/* Контейнер гамбургера */
.nav__burger {
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

/* Линия гамбургера */
.burger__line {
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
}
/* Список пунктов меню */
.menu__list {
  padding: 18px 0 10px 0;
}

/* Элемент пункта меню */
.menu__item {
  padding: 5px 0;
  margin-bottom: 16px;
}

/* Ссылка меню */
.menu__link {
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
/* Состояние при видимости (оба блока) */
.content-block {
  opacity: 1;
  transform: translateY(0);
}
</style>
