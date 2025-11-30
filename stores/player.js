import { defineStore } from "pinia";
import { useTracks } from "~~/composables/useTracks";
const { fetchTracks, tracks } = useTracks();
export const usePlayerStore = defineStore("player", {
  state: () => ({
    // Текущий трек
    currentTrack: null,
    // Список треков
    playlist: [],
    // Играет ли сейчас
    isPlaying: false,
    // Прогресс воспроизведения (0-100)
    progress: 0,
    // Громкость (0-100)
    volume: 50,
    // Ссылка на аудиотег
    audioRef: null,
    // Ссылка на автора трека
    author: null,
    //Ссылка на альбом
    album: null,
  }),

  actions: {
    // Установить текущий трек
    setCurrentTrack(track, album, author) {
      this.currentTrack = track;
      this.album = album;
      this.author = author;
    },
    // Установить плейлист
    setPlaylist(item, category) {
      // метод замены плейлиста доработанный
      fetchTracks(item,category);
      this.playlist = tracks;
    },

    // Установить прогресс
    setProgress(progress) {
      this.progress = progress;
    },

    // Установить громкость
    setVolume(volume) {
      this.volume = volume;
    },

    // Установить состояние воспроизведения
    setPlaying(isPlaying) {
      this.isPlaying = isPlaying;
    },

    // Установить ссылку на аудиоэлемент
    setAudioRef(element) {
      this.audioRef = element;
      if (this.audioRef) {
        this.audioRef.volume = this.volume / 100;
      }
    },
  },
});