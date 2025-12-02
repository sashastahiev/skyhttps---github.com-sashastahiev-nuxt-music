<script setup>
import { usePlayerStore } from "../stores/player";
import { useAudioPlayer } from "../composables/useAudioPlayer";
import { ref, watchEffect } from "vue";
const targetEl = ref(null);
const playerStore = usePlayerStore();
const audioRef = ref(null);
let itemTrack = ref(null);
const {
  handleTimeUpdate,
  seekTo,
  updateVolume,
  initPlayer,
  togglePlay,
  playTrack,
} = useAudioPlayer();
onMounted(() => {
  initPlayer(audioRef.value);
});

// Обработчик клика по прогресс-бару, чтобы перемотать трек
const handleProgressClick = (event) => {
  if (!playerStore.currentTrack) return;
  const rect = targetEl.value.getBoundingClientRect();
  // узнаём, где конкретно мы кликнули
  const clickPosition = event.offsetX;
  // получаем общую ширину бара
  const progressBarWidth = rect.width;
  // и узнаем процентное соотношение клика к общей ширине.
  // если в середине - 50%, значит нам нужна половина трека
  const percentage = (clickPosition / progressBarWidth) * 100;
  // передаём это значение в хук, чтобы он обновил значение в хранилище
  seekTo(percentage);
};
watchEffect(() => {
  //Метод для проигрывания плейлиста без взаимодействия
  if (playerStore.progress >= 99.9 && playerStore.shuffle) {
    if (playerStore.number === Math.max(...playerStore.playlist.map(item => item._id))){
      itemTrack = playerStore.playlist[0];
    }
    else {
      itemTrack = playerStore.playlist[playerStore.number + 1];
    }
    playerStore.setPlaying(false);
    playerStore.setProgress(0);
    playerStore.setCurrentTrack(itemTrack, itemTrack.album, itemTrack.author, itemTrack._id),
    playTrack(itemTrack.track_file);
  }
});
watchEffect(() => {
  //Метод для проигрывания треков в случайном порядке
  if (playerStore.progress >= 99.9 && playerStore.repeat){
    itemTrack = playerStore.playlist[Math.floor(Math.random() * 26)];
    playerStore.setPlaying(false);
    playerStore.setProgress(0);
    playerStore.setCurrentTrack(itemTrack, itemTrack.album, itemTrack.author, itemTrack._id),
    playTrack(itemTrack.track_file)
  }
});
watchEffect(() => {
  if (playerStore.progress >= 99.9){
    playerStore.setPlaying(false);
    playerStore.setProgress(0);
  }
})
</script>
<template>
  <div class="bar">
    <div class="bar__content">
      <div
        class="bar__player-progress"
        ref="targetEl"
        @click="handleProgressClick($event)"
      >
        <div
          class="bar__player-progress-line"
          :style="{ width: playerStore.progress + '%' }"
        ></div>
      </div>
      <div class="bar__player-block">
        <div class="bar__player player">
          <div class="player__controls">
            <div
              class="player__btn-prev"
              @click="[playerStore.setPrevTrack(),playTrack(playerStore.currentTrack),]">
              <svg class="player__btn-prev-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-prev"></use>
              </svg>
            </div>
            <div
              class="player__btn-play _btn"
              @click="
                playerStore.author
                  ? togglePlay(playerStore.isPlaying)
                  : [
                      playerStore.setCurrentTrack(
                        playerStore.playlist[0],
                        playerStore.playlist[0].album,
                        playerStore.playlist[0].author,
                        playerStore.playlist[0]._id
                      ),
                      playTrack(playerStore.playlist[0].track_file),
                    ]
              "
            >
              <svg class="player__btn-play-svg">
                <use
                  :xlink:href="
                    playerStore.isPlaying
                      ? '/images/icon/pause.svg'
                      : '/images/icon/sprite.svg#icon-play'
                  "
                ></use>
              </svg>
            </div>
            <div
              class="player__btn-next"
              @click="[playerStore.setNextTrack(), playTrack(playerStore.currentTrack),]"
            >
              <svg class="player__btn-next-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-next"></use>
              </svg>
            </div>
            <div class="player__btn-repeat _btn-icon" 
              @click="playerStore.setShuffle()">
              <svg class="player__btn-repeat-svg" :class="playerStore.shuffle ? 'rotating-svg' : ''">
                <use xlink:href="/images/icon/sprite.svg#icon-repeat"></use>
              </svg>
            </div>
            <div class="player__btn-shuffle _btn-icon"
               @click="playerStore.setRepeat()"
            >
              <svg class="player__btn-shuffle-svg" :class="playerStore.repeat ? 'rotating-svg' : ''">
                <use xlink:href="/images/icon/sprite.svg#icon-shuffle"></use>
              </svg>
            </div>
          </div>
          <div class="player__track-play track-play">
            <div class="track-play__contain">
              <div class="track-play__image">
                <svg class="track-play__svg">
                  <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div class="track-play__author">
                <a class="track-play__author-link" href="#">{{
                  playerStore.author ? playerStore.author : "Выберите трек"
                }}</a>
              </div>
              <div class="track-play__album">
                <a class="track-play__album-link" href="#">{{
                  playerStore.album ? playerStore.album : ""
                }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bar__volume-block">
          <div class="volume__content">
            <div class="volume__image">
              <svg class="volume__svg">
                <use xlink:href="/images/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div class="volume__progress _btn">
              <input
                v-model="playerStore.volume"
                class="volume__progress-line _btn"
                type="range"
                name="range"
                min="0"
                max="100"
                @input="updateVolume"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio
      ref="audioRef"
      @timeupdate="handleTimeUpdate"
      @ended="handleTrackEnd"
    />
  </div>
</template>

<style scoped>
.bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
}

.bar__content {
  display: flex;
  flex-direction: column;
}

.bar__player-progress {
  display: flex;
  grid-template-columns: auto 1fr; /* первый столбец — по контенту, второй — занимает остаток */
  gap: 10px;
  align-items: center;
  position: relative;
  width: 100%;
  height: 5px;
  background: #2e2e2e;
  z-index: 9;
  cursor: pointer;
}

.bar__player-block {
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bar__player {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.bar__player-progress-line {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgb(233, 69, 69);
  height: 5px;
  z-index: 10;
}
.bar__player-progress-line::after {
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background-color: red;
  border: 3px solid white;
  margin-top: -3px;
  margin-left: 100%;
}
.rotating-svg {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
