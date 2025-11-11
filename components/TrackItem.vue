<script setup>
import {useTracks} from '../composables/useTracks.js'
import { usePlayerStore } from '../stores/player.js';
const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
});
const { formatDuration } = useTracks()
const { setCurrentTrack } = usePlayerStore()
</script>
<template>
  <div class="playlist__item" @click="setCurrentTrack(track.track_file)">
    <div class="playlist__track track">
      <div class="track__title">
        <div class="track__title-image">
          <svg class="track__title-svg">
            <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div class="track__title-text">
          <a class="track__title-link" href="#"
            >{{ track.name }} <span class="track__title-span"></span></a>
        </div>
      </div>
      <div class="track__author">
        <a class="track__author-link" href="http://">{{track.author}}</a>
      </div>
      <div class="track__album">
        <a class="track__album-link" href="http://">{{ track.album }}</a>
      </div>
      <div class="track__time">
        <svg class="track__time-svg">
          <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
        </svg>
        <span class="track__time-text">{{ formatDuration(track.duration_in_seconds) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playlist__item {
  cursor: pointer;
}
.playlist__item:hover{
  background-color: rgb(69, 70, 70);
  transition: 0.5s;
}
</style>