<script setup>
import {useTracks} from '../composables/useTracks.js'
const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
});

const { fetchTracks, tracks, loading, error } = useTracks();

onMounted(() => {
  fetchTracks();
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
      <div class="loading">Загрузка треков...</div>
    </div>
    <!-- // если возникла ошибка:  -->
    <div v-else-if="error" class="content__playlist playlist">
      <div class="error">Ошибка загрузки треков: {{ error }}</div>
    </div>
    <!-- // если всё ок, рендерим треки: -->
    <div v-else class="content__playlist playlist">
      ...   
    </div>
    <div class="content__playlist playlist">
      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Guilt <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">Nero</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Welcome Reality</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">4:44</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Elektro <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"
              >Dynoro, Outwork, Mr. Gee</a
            >
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Elektro</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">2:22</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >I’m Fire <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">Ali Bakgor</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">I’m Fire</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">2:22</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Non Stop <span class="track__title-span">(Remix)</span></a
              >
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"
              >Стоункат, Psychopath</a
            >
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Non Stop</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">4:12</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Run Run <span class="track__title-span">(feat. AR/CO)</span></a
              >
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"
              >Jaded, Will Clarke, AR/CO</a
            >
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Run Run</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">2:54</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Eyes on Fire
                <span class="track__title-span">(Zeds Dead Remix)</span></a
              >
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"
              >Blue Foundation, Zeds Dead</a
            >
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Eyes on Fire</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">5:20</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Mucho Bien
                <span class="track__title-span">(Hi Profile Remix)</span></a
              >
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"
              >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a
            >
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Mucho Bien</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">3:41</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>
      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>
      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>
      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>
      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>
      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Knives n Cherries <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">minthaze</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://">Captivating</a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">1:48</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >How Deep Is Your Love <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"
              >Calvin Harris, Disciples</a
            >
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://"
              >How Deep Is Your Love</a
            >
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">3:32</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://"
                >Morena <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://">Tom Boxer</a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://"
              >Soundz Made in Romania</a
            >
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text">3:36</span>
          </div>
        </div>
      </div>

      <div class="playlist__item">
        <div class="playlist__track track">
          <div class="track__title">
            <div class="track__title-image">
              <svg class="track__title-svg">
                <use xlink:href="/images/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div class="track__title-text">
              <a class="track__title-link" href="http://">
                <span class="track__title-span"></span
              ></a>
            </div>
          </div>
          <div class="track__author">
            <a class="track__author-link" href="http://"></a>
          </div>
          <div class="track__album">
            <a class="track__album-link" href="http://"></a>
          </div>
          <div class="track__time">
            <svg class="track__time-svg">
              <use xlink:href="/images/icon/sprite.svg#icon-like"></use>
            </svg>
            <span class="track__time-text"></span>
          </div>
        </div>
      </div>
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
</style>
