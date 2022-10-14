<template lang="">
  <div v-if="movie">
    <section class="section details">
      <!-- details background -->
      <div class="details__bg"></div>
      <!-- end details background -->

      <!-- details content -->
      <div class="container">
        <div class="row">
          <!-- title -->
          <div class="col-12">
            <h1 class="details__title">{{ movie?.fullTitle }}</h1>
          </div>
          <!-- end title -->

          <!-- content -->
          <div class="col-12">
            <div class="card card--details">
              <!-- card cover -->
              <div class="card__cover">
                <img :src="movie?.image" alt="" />
              </div>
              <!-- end card cover -->

              <!-- card content -->
              <div class="card__content">
                <div class="card__wrap d-flex align-items-content">
                  <span class="card__rate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                      ></path>
                    </svg>
                    {{ movie?.imDbRating }}</span
                  >

                  <ul class="card__list">
                    <li><b>Year:</b> {{ movie?.year }}</li>
                  </ul>
                </div>

                <ul class="card__meta">
                  <li>
                    <span>Genre:</span>
                    <a v-for="genre in movie?.genreList" :key="genre.key">{{
                      genre?.value
                    }}</a>
                    <a href="#">Triler</a>
                  </li>
                  <li><span>Release Date:</span> {{ movie?.releaseDate }}</li>
                  <li>
                    <span>Running time:</span> {{ movie?.runtimeMins }} min
                  </li>
                  <li>
                    <span>Writers:</span> {{ movie?.writers }}
                  </li>
                  <li>
                    <span>Country:</span> <a>{{ movie?.countries }}</a>
                  </li>
                </ul>

                <div
                  class="b-description_readmore_wrapper js-description_readmore_wrapper"
                 
                >
                  <div
                    class="card__description card__description--details b-description_readmore_ellipsis"
                    
                  >
                    {{ movie?.plot }}
                  </div>
                  <div class="b-description_readmore_button"></div>
                </div>
              </div>
              <!-- end card content -->
            </div>
          </div>
          <!-- end content -->
        </div>
      </div>
    </section>
    <section class="content">
      <div class="content__head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="content__title">Discover</h2>
            </div>
            <ul
              class="nav nav-tabs content__tabs"
              id="content__tabs"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  role="tab"
                  @click="movie.tabType = 'cast'"
                  :class="{ active: movie?.tabType === 'cast' }"
                  >Cast</a
                >
              </li>

              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  role="tab"
                  @click="movie.tabType = 'reviews'"
                  :class="{ active: movie?.tabType === 'reviews' }"
                  >Reviews</a
                >
              </li>

              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  role="tab"
                  @click="movie.tabType = 'photos'"
                  :class="{ active: movie?.tabType === 'photos' }"
                  >Photos</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- content tabs -->
            <div class="tab-content">
              <div
                class="tab-pane fade"
                :class="{
                  active: movie?.tabType === 'cast',
                  show: movie?.tabType === 'cast',
                }"
                role="tabpanel"
                aria-labelledby="3-tab"
              >
                <!-- project gallery -->
                <div class="gallery">
                  <div class="row row--grid">
                    <!-- gallery item -->
                    <div class="col-12 col-sm-6 col-xl-3" v-for="actor in movie?.actorList"  :key="actor?.id">
                      <figure
                      itemprop="associatedMedia"
                      itemscope=""
                      >
                      <a>
                        <img
                        :src="actor?.image"
                        itemprop="thumbnail"
                        alt="Image description"
                        />
                      </a>
                    </figure>
                    <p class="actor-info"><b>Actor Name: </b>{{ actor?.name }}</p>
                      <p class="actor-info"><b>Character Name: </b>{{ actor?.asCharacter }}</p>
                  </div>
                    <!-- end gallery item -->
                  </div>
                </div>
                <!-- end project gallery -->
              </div>
              <div
                class="tab-pane fade"
                :class="{
                  active: movie?.tabType === 'reviews',
                  show: movie?.tabType === 'reviews',
                }"
                role="tabpanel"
              >
                <div class="row">
                  <!-- reviews -->
                  <div class="col-12">
                    <div class="reviews">
                      <ul class="reviews__list">
                        <li
                          class="reviews__item"
                          v-for="review in reviews"
                          :key="review?.reviewLink"
                        >
                          <div class="reviews__autor">
                            <img
                              class="reviews__avatar"
                              :src="review?.userUrl"
                              alt=""
                            />
                            <span class="reviews__name">{{
                              review?.title
                            }}</span>
                            <span class="reviews__time"
                              >{{ review?.date }} by
                              {{ review?.username }}</span
                            >

                            <span class="reviews__rating"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                enable-background="new 0 0 24 24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                                ></path>
                              </svg>
                              {{ review?.rate }}</span
                            >
                          </div>
                          <p class="reviews__text">
                            {{ review?.content }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end reviews -->
                </div>
              </div>

              <div
                class="tab-pane fade"
                :class="{
                  active: movie?.tabType === 'photos',
                  show: movie?.tabType === 'photos',
                }"
                role="tabpanel"
                aria-labelledby="3-tab"
              >
                <!-- project gallery -->
                <div class="gallery" itemscope="" data-pswp-uid="1">
                  <div class="row row--grid">
                    <!-- gallery item -->
                    <figure
                      v-for="imageSrc in movie?.images?.items"
                      :key="imageSrc?.image"
                      class="col-12 col-sm-6 col-xl-3"
                      itemprop="associatedMedia"
                      itemscope=""
                    >
                      <a>
                        <img
                          :src="imageSrc?.image"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption>
                        {{ imageSrc?.title }}
                      </figcaption>
                    </figure>
                    <!-- end gallery item -->
                  </div>
                </div>
                <!-- end project gallery -->
              </div>
            </div>
            <!-- end content tabs -->
          </div>
          <!-- end sidebar -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "MoviePage",
  data() {
    return {
      movie: "",
      reviews: [],
    };
  },
  async mounted() {
    const { data: movie } = await axios.get(
      `https://imdb-api.com/en/API/Title/k_q2l2y391/${this.$route.params.id}/FullActor,Images,Posters`
    );
    console.log(movie);
    this.movie = {...movie, tabType: 'reviews'};
    const { data } = await axios.get(
      `https://imdb-api.com/en/API/Reviews/k_q2l2y391/${this.$route.params.id}`
    );
    this.reviews = data?.items || [];
  },
};
</script>
<style lang="scss">
.actor-info {
  color: #fff !important;
  margin-top: 12px !important;
  margin-bottom: 0 !important;
}
</style>
