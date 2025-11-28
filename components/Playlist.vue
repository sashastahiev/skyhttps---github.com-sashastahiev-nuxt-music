<script setup>
import {useTracks} from '../composables/useTracks.js'
import TrackItem from "../components/TrackItem.vue"
const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
});

const { fetchTracks, tracks, loading, error } = useTracks();

onMounted(() => {
  fetchTracks(null);
});

</script>
<template>
  <div class="centerblock__content playlist-content">
    <div class="content__title playlist-title">
      <div class="playlist-title__col col01">Трек</div>
      <div class="playlist-title__col col02">Исполнитель</div>
      <div class="playlist-title__col col03">Альбом</div>
      <div class="playlist-title__col col04">
        <svg class="playlist-title__svg">
          <use xlink:href="/images/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
    <!-- // если треки загружаются:  -->
    <div v-if="loading" class="content__playlist playlist">
      <div class="loading loader-circle"></div>
    </div>
    <!-- // если возникла ошибка:  -->
    <div v-else-if="error" class="content__playlist playlist">
      <div class="error">Ошибка загрузки треков: {{ error }}</div>
    </div>
    <!-- // если всё ок, рендерим треки:  -->
    <div v-else class="content__playlist playlist">
      <TrackItem v-for="track in tracks" :key="track.id" :track="track" />
    </div>
  </div>
</template>

<style scoped>
.centerblock__content {
  display: flex;
  flex-direction: column;
}

.content__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.playlist-title__col {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
}

.playlist-title__svg {
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
}

.content__playlist {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 500px;
}

.playlist__item {
  width: 100%;
  display: block;
  margin-bottom: 12px;
}

.playlist__track {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.track__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
}

.track__title-image {
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
}

.track__title-svg {
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
}

.track__title-link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.track__title-span {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
}

.track__author {
  width: 321px;
  display: flex;
  justify-content: flex-start;
}

.track__author-link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
}

.track__album {
  width: 245px;
}

.track__album-link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
}

.track__time {
  display: flex;
  align-items: center;
}

.track__time-svg {
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
}

.track__time-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
}
.loading{
  width: 100%;
  height: 100%;
  text-align: center;
}
.loader-circle {
  /* Размеры круга */
  width: 60px;
  height: 60px;
  
  /* Граница и скругление */
  border: 6px solid transparent;
  border-top: 6px solid white;        /* Цвет активной дуги */
  border-right: 6px solid white;
  border-radius: 50%;
  
  /* Позиционирование */
  margin: 50px auto;
  
  /* Анимация вращения */
  animation: spin 1s linear infinite;
}

/* Анимация: вращение по кругу */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
