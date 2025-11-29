import { ref } from "vue";

const API_URL = "https://webdev-music-003b5b991590.herokuapp.com";

export const useTracks = () => {
  const tracks = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchTracks = async (form, category) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_URL}/catalog/track/all/`);
      if (!response.ok) {
        throw new Error("Не удалось получить треки");
      }
      const data = await response.json();
      tracks.value = data.data;
      if (category == 'author')
      {
        tracks.value = tracks.value.filter((item) => item.author == form)
      }
      if (category == 'year')
      {
        tracks.value = tracks.value.filter((item) => item.release_date == form)
      }
      if (category == 'genre')
      {
        tracks.value = tracks.value.filter((item) => item.genre.toLowerCase().trim() == form.toLowerCase().trim())
        console.log(tracks.value.genre);
      }
    } catch (e) {
      error.value =
        e instanceof Error ? e.message : "Ошибка при загрузке треков :(";
    } finally {
      loading.value = false;
  }
  };
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds /60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2,"0")}`; 
  }
  return {
    tracks,
    loading,
    error,
    fetchTracks,
    formatDuration,
  };
};