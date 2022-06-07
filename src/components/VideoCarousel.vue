<template>
  <div class="wrapper pb-16">
    <div class="slider-container d-flex justify-center">
      <v-container class="slider">
        <video
          class="video-carousel"
          v-for="(videoSrc, index) in videoSrcs"
          :key="videoSrc"
          :src="videoSrc"
          width="100%"
          ref="videos"
          v-show="activeIndex === index"
          autoplay
          muted
        ></video>
      </v-container>
    </div>
    <div class="content-container">
      <div class="pagination d-flex align-center justify-left mb-3">
        <div
          v-for="(videoSrc, index) in videoSrcs"
          :key="`${videoSrc}-dot`"
          :class="{ dot: true, active: activeIndex === index }"
          @click="() => toggleVideo(index)"
          ref="dots"
        ></div>
      </div>
      <h3 class="white--text text-left">
        {{ descs[activeIndex].title }}
      </h3>
      <p class="white--text text-left">
        {{ descs[activeIndex].content }}
      </p>
    </div>
  </div>
</template>

<script>
import video1 from "@/assets/model-s-carousel/Model-S-Carousel-1.mp4";
import video2 from "@/assets/model-s-carousel/Model-S-Carousel-2.mp4";
import video3 from "@/assets/model-s-carousel/Model-S-Carousel-3.mp4";
import video4 from "@/assets/model-s-carousel/Model-S-Carousel-4.mp4";
import video5 from "@/assets/model-s-carousel/Model-S-Carousel-5.mp4";

export default {
  data() {
    return {
      activeIndex: 0,
      videoSrcs: [video1, video2, video3, video4, video5],
      descs: [
        {
          title: "Cinematic Experience",
          content:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          title: "Yoke Steering",
          content:
            "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
        },
        {
          title: "Perfect Environment",
          content:
            "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
        },
        {
          title: "Redesigned Second Row",
          content:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          title: "Console-Grade Gaming",
          content:
            "Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.",
        },
      ],
    };
  },
  mounted() {
    this.$refs.videos.forEach((video, index) => {
      const nextIndex = index >= this.numOfVideos - 1 ? 0 : index + 1;

      video.addEventListener("ended", () => this.toggleVideo(nextIndex));
    });
  },
  methods: {
    toggleVideo(index) {
      this.$refs.videos[this.activeIndex].pause();
      this.activeIndex = index;
      this.$refs.videos[this.activeIndex].play();
    },
  },
  computed: {
    numOfVideos() {
      return this.videoSrcs.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: black;
  .slider-container {
    width: 100%;
    padding-top: 10rem;

    .slider {
      width: min(100%, 80rem);
      border-radius: 2rem;
      overflow: hidden;
    }
  }
  .content-container {
    width: min(100%, 40rem);
    margin: 0 auto;
    .pagination {
      width: 100%;
      margin-top: 3rem;
      gap: 0.5rem;
      .dot {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: gray;
        cursor: pointer;

        &.active {
          width: 0.9rem;
          height: 0.9rem;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
