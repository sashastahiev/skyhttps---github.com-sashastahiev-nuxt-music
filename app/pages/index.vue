<script setup>
import FilterControls from "../components/FilterControls.vue";
import Navbar from "../components/Navbar.vue";
import PlayerBar from "../components/PlayerBar.vue";
import Playlist from "../components/Playlist.vue";
import Track from "../components/Track.vue";
import TrackItem from "../components/TrackItem.vue"
import { ref, computed } from 'vue';
import { usePlayerStore } from '../stores/player.js';
const playerStore = usePlayerStore();
const query = ref('');
const showDropdown = ref(false);
// Фильтрованный результат
const filteredResults = computed(() => {
  if (!query.value) return [];
  const newItems = playerStore.playlist.filter(item =>
    item.name.toLowerCase().includes(query.value.toLowerCase())
  );
  if(newItems.length === 0){
    return ["Ничего не найдено"]
  }
  else {
    return newItems;
  }
});

// Обработчики
function onInput() {
  showDropdown.value = true;
}
function onBlur() {
  setTimeout(() => {
    showDropdown.value = false;
  }, 200); // Задержка для клика по элементу
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <main class="main">
        <Navbar />
        <div class="main__centerblock centerblock">
          <div class="centerblock__search search">
            <svg class="search__svg">
              <use xlink:href="/images/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
              v-model="query"
              class="search__text"
              type="search"
              placeholder="Поиск"
              name="search"
              @input="onInput"
              @focus="showDropdown = true"
              @blur="onBlur"
            />
            <div
              v-if="showDropdown && filteredResults.length"
              class="dropdown">
              <TrackItem class=""
                v-for="track in filteredResults" :key="track.id" :track="track"/> 
            </div>
          </div>
          <FilterControls />
          <Playlist />
        </div>
        <Track />
      </main>
      <PlayerBar />
      <footer class="footer"></footer>
    </div>
  </div>
</template>

<style scoped>
/* wrapper */
.wrapper {
  /* Базовая структура страницы */
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}

/* container */
.container {
  /* Основной контейнер, ограничивающий контент */
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
}

/* main */
.main {
  /* Основная область страницы */
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

/* main__centerblock, centerblock */
.main__centerblock,
.centerblock {
  /* Центральный блок страницы */
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
}

/* centerblock__search, search */
.centerblock__search,
.search {
  /* Форма поиска */
  position: relative;
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/* search__svg */
.search__svg {
  /* Иконка поиска */
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
}

/* search__text */
.search__text {
  /* Поле ввода текста поиска */
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
.dropdown {
  position: absolute;
  overflow-y:auto;
  max-height: 200px;
  width: 1160px;
  left: 20px;
  top: 60px;
  z-index: 999;
  border: 2px solid #ffffff;
  background-color: rgba(24, 24, 24, 1);
}
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.6);
}
</style>