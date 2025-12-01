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
    //Ссылка на номер трека
    number: null,
    //Обьект следующего трека в плейлисте
    nextTrack: null,
    //Индикатор перемешивания треков
    shuffle: false,
  }),

  actions: {
    //Переключить на следующий трек
    setNextTrack(){
      if (this.shuffle){
        const max =  Math.max(...this.playlist.map(item => item._id));
        const min =  Math.min(...this.playlist.map(item => item._id))
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        this.nextTrack = this.playlist.find(element => element._id === rand);
        this.number = rand;
        this.currentTrack = this.nextTrack.track_file;
        this.album = this.nextTrack.album;
        this.author = this.nextTrack.author;
      }
      else if (this.number < Math.max(...this.playlist.map(item => item._id))){
        this.nextTrack = this.playlist.find(element => element._id === this.number + 1);
        this.number++;
        this.currentTrack = this.nextTrack.track_file;
        this.album = this.nextTrack.album;
        this.author = this.nextTrack.author;
      }
    },
    setPrevTrack(){
      if ( this.number > Math.min(...this.playlist.map(item => item._id))){
        this.nextTrack = this.playlist.find(element => element._id === this.number - 1);
        this.number--;
        this.currentTrack = this.nextTrack.track_file;
        this.album = this.nextTrack.album;
        this.author = this.nextTrack.author;
      }
    },
    // Установить текущий трек
    setCurrentTrack(track, album, author, id) {
      this.currentTrack = track;
      this.album = album;
      this.author = author;
      this.number = id;
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
    //Установить состояние перемешивания
    setShuffle() {
      this.shuffle = !this.shuffle;
      console.log(this.shuffle)
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