<script setup>
import {useTracks} from '../composables/useTracks.js'
import { usePlayerStore } from '~~/stores/player.js';
import TrackItem from "../components/TrackItem.vue"
import { watchEffect } from 'vue';
// const props = defineProps({
//   track: {
//     type: Object,
//     required: true,
//   },
// });
const { fetchTracks, tracks, loading, error } = useTracks();
const playerStore = usePlayerStore();
onMounted(() => {
  fetchTracks(null,null);
  playerStore.playlist = tracks
});
const handleKeydown = (event) => {
  if (event.key === ' ') { // Space
    if (playerStore.isPlaying){
      playerStore.audioRef.pause();
      playerStore.setPlaying(false)
    } else {
      playerStore.audioRef.play();
      playerStore.setPlaying(true)
    } 
  }
};
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
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
      <TrackItem v-for="track in playerStore.playlist" :key="track.id" :track="track" />
      <!-- измененная строка -->
    </div>
  </div>
</template>

<style scoped>
.playlist{
  max-height: 500px;
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
