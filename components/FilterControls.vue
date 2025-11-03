<script setup>
const {
  data: response,
  loading,
  error,
} = await useFetch(
  "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/"
);

// если в value нет data, то записываем в tracks пустой массив
const tracks = computed(() => response.value?.data || []);
const activeFilter = ref(null);
// null = списки закрыты, 'author'/'genre'/'year' = открыт один из списков

const toggleFilter = (filter) => {
  // если нажали на тот же фильтр, то закрываем список. если нет — меняем.
  activeFilter.value = activeFilter.value === filter ? null : filter;
};
const authorItems = computed(() => {
  if (!tracks.value) return [];
  const items = new Set();
  tracks.value.forEach((track) => {
    if (track.author) {
      items.add(track.author);
    }
  });
  return Array.from(items).sort((a, b) => {
    if (a === "Неизвестно") return 1;
    if (b === "Неизвестно") return -1;
    return a.localeCompare(b);
  });
});

const yearItems = computed(() => {
  if (!tracks.value) return [];
  const items = new Set();
  tracks.value.forEach((track) => {
    const year = track.release_date?.split("<")[0] || "Неизвестно";
    items.add(year);
  });
  return Array.from(items).sort((a, b) => {
    if (a === "Неизвестно") return 1;
    if (b === "Неизвестно") return -1;
    return b.localeCompare(a);
  });
});

const genreItems = computed(() => {
  if (!tracks.value) return [];
  const items = new Set();
  tracks.value.forEach((track) => {
    if (Array.isArray(track.genre)) {
      track.genre.forEach((g) => g && items.add(g.toLowerCase().trim()));
    } else if (track.genre) {
      items.add(track.genre.toLowerCase().trim());
    }
  });
  return Array.from(items).sort((a, b) => {
    if (a === "неизвестно") return 1;
    if (b === "неизвестно") return -1;
    return a.localeCompare(b);
  });
});
</script>

<template>
  <h2 class="centerblock__h2">Треки</h2>
  <div class="centerblock__filter filter">
    <div class="filter__title">Искать по:</div>
    <div>
      <div
        class="filter__button button-author _btn-text"
        :class="{ active: activeFilter === 'author' }"
        @click="toggleFilter('author')"
      >
        исполнителю
      </div>
      <div v-show="activeFilter === 'author'" class="filter__dropdown">
        <ul class="filter__list">
          <li v-for="item in authorItems" :key="item" class="filter__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div
        class="filter__button button-year _btn-text"
        :class="{ active: activeFilter === 'year' }"
        @click="toggleFilter('year')"
      >
        году выпуска
      </div>
      <div v-show="activeFilter === 'year'" class="filter__dropdown">
        <ul class="filter__list">
          <li v-for="item in yearItems" :key="item" class="filter__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div
        class="filter__button button-genre _btn-text"
        :class="{ active: activeFilter === 'genre' }"
        @click="toggleFilter('genre')"
      >
        жанру
      </div>
      <div v-show="activeFilter === 'genre'" class="filter__dropdown">
        <ul class="filter__list">
          <li v-for="item in genreItems" :key="item" class="filter__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centerblock__h2 {
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
}

.centerblock__filter {
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
  margin-bottom: 51px;
}

.filter__title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
}

.filter__button {
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
}

.filter__button:not(:last-child) {
  margin-right: 10px;
}
.filter__list {
  position: absolute;
  max-height: 100px;
  overflow-y:scroll;
  margin-top: 10px;
}
.filter__item{
  margin: 5px 0 5px 0;
  padding: 5px;
  border-radius: 10px;
}
.filter__item:hover{
  background-color: rgb(88, 84, 84);
}
</style>
