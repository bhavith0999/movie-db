<template>
  <Header></Header>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  background-color: #2b2b31 !important;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  min-width: 100vw;
  max-width: 100vw;
  overflow: hidden;
}
.main-content {
  margin-top: 120px;
}
h2 {
  color: #fff;
}
.card__rate svg {
  width: 16px;
  height: auto;
  margin-right: 5px;
  fill: #ff55a5;
}

.details {
  position: relative;
  margin-top: 70px;
}

.details__bg {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  left: 0;
  height: 400px;
  z-index: 1;
  opacity: 0.07;
}
.nav-link {
    cursor: pointer;
}

.details:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(43, 43, 49, 0) 0%, #2b2b31 100%);
}

.details .container {
  position: relative;
  z-index: 3;
}

.details__title {
  color: #fff;
  font-weight: 300;
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 5px;
}

.details__title b {
  font-weight: 700;
}

@media (min-width: 768px) {
  .details {
    margin-top: 120px;
  }

  .details__title {
    font-size: 32px;
    line-height: 46px;
  }
}

@media (min-width: 1200px) {
  .details__title {
    font-size: 36px;
    line-height: 50px;
  }
}

.content {
  padding-bottom: 50px;
  margin-top: 80px;
}

.content__head {
  background-color: #28282d;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  position: relative;
}

.content__head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  display: block;
  background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
}

.content__head--profile:before {
  display: none;
}

.content__title {
  color: #fff;
  font-weight: 300;
  font-size: 30px;
  line-height: 100%;
  margin: 25px 0 10px;
}

.content__tabs {
  display: none;
}

.content__mobile-tabs {
  position: relative;
}

.content__mobile-tabs--profile {
  margin-bottom: -20px;
}

.content__mobile-tabs-btn {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 50px;
  opacity: 0.75;
  transition: 0.4s ease;
}

.content__mobile-tabs-btn input {
  display: block;
  position: relative;
  width: auto;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  height: 50px;
  margin-right: 12px;
  font-weight: 300;
}

.content__mobile-tabs-btn span {
  position: relative;
  width: 16px;
  height: 16px;
  display: block;
}

.content__mobile-tabs-btn span:before,
.content__mobile-tabs-btn span:after {
  content: "";
  position: absolute;
  display: block;
  width: 16px;
  height: 2px;
  background-color: #fff;
  left: 0;
  border-radius: 4px;
  top: 50%;
  transition: 0.4s ease;
  margin-top: -5px;
}

.content__mobile-tabs-btn span:after {
  margin-top: 2px;
  width: 10px;
}

.content__mobile-tabs-btn[aria-expanded="true"] {
  opacity: 1;
}

.content__mobile-tabs-btn[aria-expanded="true"] span:before {
  transform: rotate(45deg);
  margin-top: -1px;
}

.content__mobile-tabs-btn[aria-expanded="true"] span:after {
  margin-top: -1px;
  width: 16px;
  transform: rotate(-45deg);
}

.content__mobile-tabs-btn:hover {
  opacity: 1;
}

.content__mobile-tabs-menu {
  top: 100%;
  left: 0;
  margin-top: -10px;
  min-width: 180px;
  padding: 15px 20px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.3);
  background-color: #2b2b31;
  display: block;
  transition: 0.4s ease;
  position: absolute;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  border-radius: 4px;
  overflow: hidden;
}

.content__mobile-tabs-menu:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  display: block;
  background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
}

.content__mobile-tabs-menu a {
  display: block;
  line-height: 40px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  position: relative;
  text-transform: uppercase;
  font-weight: 300;
}

.content__mobile-tabs-menu a:hover {
  color: #ff55a5;
}

.content__mobile-tabs-menu a.active {
  display: none;
}

.content__mobile-tabs-menu.show {
  pointer-events: auto;
  opacity: 1;
  margin-top: 0;
}

@media (min-width: 576px) {
  .content__tabs {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    border-bottom: none !important;
  }

  .content__tabs li {
    margin-right: 30px;
  }

  .content__tabs li:last-child {
    margin-right: 0;
  }

  .content__tabs a {
    display: block;
    line-height: 50px;
    color: #fff;
    position: relative;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5) !important;
    background-color: transparent !important;
    border: none !important;
  }

  .content__tabs a:hover {
    color: #fff;
  }

  .content__tabs a:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    display: block;
    background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    box-shadow: none;
    transition: 0.4s ease;
  }
  ul {
    margin-bottom: 0 !important;
    padding-left: 0 !important;
  }

  .content__tabs a.active {
    color: #fff !important;
  }

  .content__tabs a.active:before {
    height: 2px;
    box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
  }

  .content__tabs--profile {
    display: none;
  }

  .content__mobile-tabs {
    display: none;
  }

  .content__mobile-tabs--profile {
    display: block;
  }
}

@media (min-width: 768px) {
  .content {
    padding-bottom: 70px;
  }

  .content__title {
    font-size: 32px;
  }

  .content__tabs--profile {
    display: flex;
  }

  .content__tabs--profile a {
    line-height: 80px;
  }

  .content__mobile-tabs--profile {
    display: none;
  }
}

@media (min-width: 1200px) {
  .content__title {
    font-size: 36px;
  }

  .content__tabs--profile li {
    margin-right: 40px;
  }

  .content__tabs--profile li:last-child {
    margin-right: 0;
  }
}

.gallery {
  margin-bottom: 50px;
}

.gallery figure {
  margin: 20px 0 0;
}

.gallery figure a {
  display: block;
  position: relative;
  overflow: hidden;
  transition: 0.4s ease;
  border-radius: 4px;
}

.gallery figure img {
  width: 100%;
}

.gallery figcaption {
  display: none;
}

@media (min-width: 768px) {
  .gallery figure {
    margin: 30px 0 0;
  }
}

@media (min-width: 992px) {
  .gallery {
    margin-bottom: 0;
    padding-right: 20px;
  }
}

.reviews {
  margin-bottom: 50px;
}

.reviews__list {
  margin-bottom: 30px;
}

.reviews__autor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-left: 60px;
  margin-bottom: 15px;
  padding-right: 60px;
}

.reviews__avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 46px;
  border-radius: 50%;
}

.reviews__name {
  display: block;
  font-size: 16px;
  color: #fff;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 6px;
}

.reviews__time {
  display: block;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  line-height: 20px;
  font-family: "Open Sans", sans-serif;
}

.reviews__text {
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 26px;
  background-color: #28282d;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  border-radius: 4px;
}

.reviews__item {
  margin-top: 20px;
  display: block;
}

.reviews__rating {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  position: absolute;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  right: 0;
  top: 8px;
}

.reviews__rating svg {
  width: 16px;
  height: auto;
  margin-right: 5px;
  fill: #ff55a5;
}

@media (min-width: 768px) {
  .reviews__item {
    margin-top: 30px;
  }
}

@media (min-width: 992px) {
  .reviews {
    margin-bottom: 0;
    padding-right: 20px;
  }
}
</style>
