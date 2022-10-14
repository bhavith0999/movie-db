<template>
  <div class="container">
    <h2 class="content__title">Coming Soon</h2>
    <div class="row row--grid" v-if="comingSoon">
      <div class="col-12">
        <div class="card card--list">
          <a class="col-12 col-md-7">
            <iframe
              :src="trailer?.linkEmbed"
              width="100%"
              height="480"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              frameborder="no"
              scrolling="no"
            ></iframe>
          </a>

          <div class="card__content py-3 col-12 col-md-5">
            <h3 class="card__title">
              <a>{{ comingSoon?.fullTitle }}</a>
            </h3>
            <span class="card__category">
              <a>Movie</a>
            </span>

            <div class="card__wrap">
              <span class="card__rate"> {{ comingSoon?.imDbRating }}</span>

              <ul class="card__list">
                <li><b>Genres:</b> {{ comingSoon?.Genres }}</li>
                <li><b>Directors:</b> {{ comingSoon?.Directors }}</li>
                <li><b>Release Date:</b> {{ comingSoon?.releaseState }}</li>
              </ul>
            </div>

            <div class="card__description">
              <p>{{ comingSoon.Plot }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="content__head">
      <div class="container pt-1 pb-3">
        <h2 class="content__title">Movie Database</h2>
      </div>
    </div>
    <div class="container">
      <div class="row row--grid">
        <div
          data-testid="movie-card"
          class="col-6 col-sm-12 col-lg-6"
          v-for="movie in movies"
          :key="movie.id"
        >
          <div class="card card--list">
            <router-link :to="{ name: 'movie', params: { id: movie?.id } }">
              <a class="card__cover">
                <img :src="movie?.image" alt="" />
                <span class="card__play">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
                    ></path>
                  </svg>
                </span>
              </a>
            </router-link>

            <div class="card__content py-3">
              <h3 class="card__title">
                <a>{{ movie?.fullTitle }}</a>
              </h3>
              <span class="card__category">
                <a>Movie</a>
              </span>

              <div class="card__wrap">
                <span class="card__rate"> {{ movie?.imDbRating }}</span>

                <ul class="card__list">
                  <li><b>Year:</b> {{ movie?.year }}</li>
                  <li><b>Rank:</b> {{ movie?.rank }}</li>
                </ul>
              </div>

              <div class="card__description">
                <p><b>Crew:</b> {{ movie.crew }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      movies: [],
      comingSoon: "",
      trailer: "",
    };
  },
  async mounted() {
    const {
      data: { items },
    } = await axios.get("https://imdb-api.com/en/API/Top250Movies/k_q2l2y391");
    console.log(items);
    this.movies = items;
    const {
      data: { items: comingMovies },
    } = await axios.get("https://imdb-api.com/en/API/ComingSoon/k_q2l2y391");
    this.comingSoon =
      comingMovies && comingMovies?.length > 0 ? comingMovies[0] : "";
    if (this.comingSoon) {
      const { data: trailerData } = await axios.get(
        `https://imdb-api.com/en/API/Trailer/k_q2l2y391/${this.comingSoon?.id}`
      );
      this.trailer = trailerData;
    }
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  background: transparent;
  padding: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}
.card__cover {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.4s ease;
  border-radius: 4px;
  overflow: hidden;
}
.card__cover img {
  width: 100%;
  position: relative;
  z-index: 1;
}
.card__cover:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  z-index: 2;
  opacity: 0;
  transition: 0.4s ease;
}
.card__cover:hover:before {
  opacity: 0.6;
}
.card__cover:hover .card__play {
  opacity: 1;
}
.card__play {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: 2px solid #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin: -28px 0 0 -28px;
  z-index: 3;
  transition: opacity 0.4s ease;
  opacity: 0;
}
.card__play svg {
  width: 26px;
  height: auto;
  fill: #fff;
  margin-left: 1px;
}
.card__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
}
.card__title {
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
.card__title a {
  color: #fff;
}
.card__title a:hover {
  color: #fff;
}
.card__category {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 5px;
}
.card__category a {
  font-size: 14px;
  position: relative;
  background-image: -webkit-linear-gradient(0deg, #ff55a5 0%, #ff5860 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff5860;
  margin-right: 8px;
  opacity: 0.8;
  font-family: "Open Sans", sans-serif;
}
.card__category a:after {
  content: ",";
  position: absolute;
  display: block;
  left: 100%;
  top: 0;
  background-image: -webkit-linear-gradient(0deg, #ff55a5 0%, #ff5860 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff5860;
}
.card__category a:last-child {
  margin-right: 0;
}
.card__category a:last-child:after {
  display: none;
}
.card__category a:hover {
  opacity: 1;
}
.card__rate {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  padding-left: 20px;
}
.card__rate:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16px;
  /* background: url("../img/star.svg") no-repeat center; */
  background-size: 100% auto;
}
.card__list {
  display: none;
}
.card__description {
  display: none;
}
.card__meta {
  display: none;
}
.card--details {
  margin-bottom: 20px;
}
.card--details .card__cover {
  max-width: 250px;
}
.card--details .card__cover:before {
  display: none;
}
.card--details .card__description {
  display: block;
  margin-top: 15px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.7);
}
.card--details .card__list {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
}
.card--details .card__list li {
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 5px 5px 4px;
  line-height: 100%;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.65);
}
.card--details .card__list li:last-child {
  margin-right: 0;
}
.card--details .card__wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.card--details .card__meta {
  margin-top: 15px;
  display: block;
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.7);
}
.card--details .card__meta span {
  color: rgba(255, 255, 255, 0.7);
  margin-right: 7px;
}
.card--details .card__meta li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  font-family: "Open Sans", sans-serif;
}
.card--details .card__meta li:last-child {
  margin-bottom: 0;
}
.card--details .card__meta a {
  font-size: 16px;
  position: relative;
  background-image: -webkit-linear-gradient(0deg, #ff55a5 0%, #ff5860 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff5860;
  margin-right: 7px;
  opacity: 0.8;
}
.card--details .card__meta a:after {
  content: ",";
  position: absolute;
  display: block;
  left: 100%;
  top: 0;
  background-image: -webkit-linear-gradient(0deg, #ff55a5 0%, #ff5860 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff5860;
}
.card--details .card__meta a:last-child {
  margin-right: 0;
}
.card--details .card__meta a:last-child:after {
  display: none;
}
.card--details .card__meta a:hover {
  opacity: 1;
}
.card--details .card__rate {
  margin-top: 0;
}
.card--details .card__content {
  margin-top: 20px;
}
@media (min-width: 576px) {
  .card--list {
    flex-direction: row;
  }
  .card--list .card__cover {
    width: 157px;
  }
  .card--list .card__content {
    width: calc(100% - 177px);
    margin-top: 0;
    margin-left: 20px;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .card--list .card__title {
    line-height: 26px;
    margin-top: -4px;
  }
  .card--list .card__category {
    margin-top: 8px;
  }
  .card--list .card__rate {
    margin-top: 0;
  }
  .card--details .card__wrap {
    margin-top: 0;
  }
  .card__list {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
  }
  .card__list li {
    border: 1px solid rgba(255, 255, 255, 0.16);
    padding: 5px 5px 4px;
    line-height: 100%;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.65);
  }
  .card__list li:last-child {
    margin-right: 0;
  }
  .card__description {
    display: block;
    margin-top: 10px;
  }
  .card__description p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 15px;
  }
  .card__description p:last-child {
    margin-bottom: 0;
  }
  .card__wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
  }
}
@media (min-width: 768px) {
  .card {
    margin-top: 30px;
  }
  .card--big .card__title {
    font-size: 20px;
  }
  .card--list .card__title {
    font-size: 20px;
  }
  .card--list .card__cover {
    width: 210px;
  }
  .card--list .card__content {
    width: calc(100% - 230px);
  }
  .card--details {
    flex-direction: row;
    margin-bottom: 30px;
    margin-top: 25px;
  }
  .card--details .card__cover {
    width: 210px;
  }
  .card--details .card__content {
    width: calc(100% - 230px);
    margin-top: 0;
    margin-left: 20px;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .card__description p {
    -webkit-line-clamp: 8;
  }
}
@media (min-width: 1200px) {
  .card--big .card__play {
    width: 64px;
    height: 64px;
    margin: -32px 0 0 -32px;
  }
  .card--big .card__play svg {
    width: 28px;
    margin-left: 2px;
  }
  .card--list .card__cover {
    width: 160px;
  }
  .card--list .card__content {
    width: calc(100% - 180px);
  }
  .card--details {
    margin-bottom: 0;
  }
  .card--details .card__cover {
    width: 210px;
  }
  .card--details .card__content {
    width: calc(100% - 230px);
  }
  .card--series {
    margin-bottom: 5px;
  }
  .card__description {
    margin-top: 20px;
  }
  .card__description p {
    -webkit-line-clamp: 5;
  }
}
</style>
