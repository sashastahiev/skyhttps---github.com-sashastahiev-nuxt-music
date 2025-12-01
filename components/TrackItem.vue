<script setup>
import {useTracks} from '../composables/useTracks.js'
import { usePlayerStore } from '../stores/player.js';
import { useAudioPlayer } from '../composables/useAudioPlayer.js';
const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
});
const { formatDuration } = useTracks()
const playerStore = usePlayerStore()
const { playTrack } = useAudioPlayer()
</script>
<template>
  <div class="playlist__item" 
    @click="[playerStore.setCurrentTrack(track.track_file, track.album, track.author, track._id), 
    playTrack(track.track_file)]">
    <div class="playlist__track track">
      <div class="track__title">
        <div class="track__title-image">
          <svg v-show="!track.chosen" class="track__title-svg">
            <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
          </svg>
          <div v-show="track.chosen" class="icon" :class="{ 'pulse-active': playerStore.isPlaying }">
            <div class="dot"></div>
          </div>
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
.track__title-image{
  position: relative;
}
.icon .dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: rgba(182, 114, 255, 1);
  border-radius: 50%;
  left: 18px;
  top: 18px;
  display: inline-block;
}

.pulse-active .dot {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>