<script setup>
import { usePlayerStore } from '../stores/player';
const playerStore = usePlayerStore();
</script>
<template>
  <div class="main__sidebar sidebar">
    <div class="sidebar__personal">
      <p class="sidebar__personal-name">Sergey.Ivanov</p>
      <div class="sidebar__icon">
        <svg>
          <use xlink:href="/images/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
    <div class="sidebar__block">
      <div class="sidebar__list">
        <div class="sidebar__item">
          <a class="sidebar__link" href="#">
            <NuxtImg
              alt="day's playlist"
              :placeholder="[5]"
              src="/images/playlist01.png"
              class="sidebar__img"
              @click="playerStore.setNamePlaylist('Плейлист дня')"
            />
          </a>
        </div>
        <div class="sidebar__item">
          <a class="sidebar__link" href="#">
            <NuxtImg
              alt="day's playlist"
              :placeholder="[5]"
              src="/images/playlist02.png"
              class="sidebar__img"
              @click="playerStore.setNamePlaylist('100 танцевальных хитов')"
            />
          </a>
        </div>
        <div class="sidebar__item">
          <a class="sidebar__link" href="#">
            <NuxtImg
              alt="day's playlist"
              :placeholder="[5]"
              src="/images/playlist03.png"
              class="sidebar__img"
              @click="playerStore.setNamePlaylist('Инди заряд')"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

