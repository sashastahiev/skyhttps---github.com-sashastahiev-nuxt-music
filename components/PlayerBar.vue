<script setup>
import { usePlayerStore } from "../stores/player";
import { useAudioPlayer } from "../composables/useAudioPlayer";
import { ref } from "vue";
const targetEl = ref(null);
const playerStore = usePlayerStore();
const audioRef = ref(null);
const { handleTimeUpdate, seekTo, updateVolume, initPlayer, togglePlay, playTrack } =
  useAudioPlayer();
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
</script>
<template>
  <div class="bar">
    <div class="bar__content">
      <div class="bar__player-progress" ref="targetEl" @click="handleProgressClick($event)">
        <div
          class="bar__player-progress-line"
          :style="{ width: playerStore.progress + '%' }">
        </div>
      </div>
      <div class="bar__player-block">
        <div class="bar__player player">
          <div class="player__controls">
            <div class="player__btn-prev"
              @click="[playerStore.setPrevTrack(), playTrack(playerStore.currentTrack)]">
              <svg class="player__btn-prev-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-prev"></use>
              </svg>
            </div>
            <div class="player__btn-play _btn" @click="togglePlay(playerStore.isPlaying)">
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
            <div class="player__btn-next" 
            @click="[playerStore.setNextTrack(), playTrack(playerStore.currentTrack)]">
              <svg class="player__btn-next-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-next"></use>
              </svg>
            </div>
            <div class="player__btn-repeat _btn-icon">
              <svg class="player__btn-repeat-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-repeat"></use>
              </svg>
            </div>
            <div class="player__btn-shuffle _btn-icon">
              <svg class="player__btn-shuffle-svg">
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
.bar__player-progress-line{
  position:absolute;
  top: 0px;
  left: 0px;
  background-color: rgb(233, 69, 69);
  height: 5px;
  z-index: 10;
}
.bar__player-progress-line::after{
  content:"";
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background-color: red;
  border: 3px solid white;
  margin-top: -3px;
  margin-left: 100%;
}
.player__controls {
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
}

.player__btn-prev {
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;
  cursor: pointer;
}

.player__btn-prev-svg {
  width: 15px;
  height: 14px;
}

.player__btn-play {
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;
}

.player__btn-play-svg {
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
}

.player__btn-next {
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 28px;
  fill: #a53939;
  cursor: pointer;
}

.player__btn-next-svg {
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
}

.player__btn-repeat {
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 24px;
}
.player__btn-repeat-svg {
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
}

.player__btn-shuffle {
  padding: 5px;
  display: flex;
  align-items: center;
}

.player__btn-shuffle-svg {
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
}

.player__track-play {
  display: flex;
  flex-direction: row;
}

.track-play__contain {
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  align-items: center;
}

.track-play__image {
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: span 2 / span 2;
  grid-column: 1;
  grid-area: image;
}

.track-play__svg {
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
}

.track-play__author {
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
}

.track-play__author-link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
}

.track-play__album {
  grid-row: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
}

.track-play__album-link {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
}

.track-play__like-dis {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
}

.track-play__like {
  padding: 5px;
}

.track-play__like-svg {
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
}

.track-play__dislike {
  padding: 5px;
  margin-left: 28.5px;
}

.track-play__dislike-svg {
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
}

.bar__volume-block {
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
}

.volume__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
}

.volume__image {
  width: 13px;
  height: 18px;
  margin-right: 17px;
}

.volume__svg {
  width: 13px;
  height: 18px;
  fill: transparent;
}

.volume__progress {
  width: 109px;
}

.volume__progress-line {
  width: 109px;
}
</style>
