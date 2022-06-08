<template>
  <div class="wrapper py-16">
    <v-container class="comparison-container">
      <v-row>
        <v-col>
          <img src="../assets/model-s-motor.jpg" alt="" class="mb-10" />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(spec, _, index) in specs"
          :key="spec.name"
          cols="10"
          md="5"
          offset="1"
          :offset-md="index === 0 ? 1 : 0"
          :class="{
            content: true,
            'd-flex': true,
            'flex-column': true,
            'justify-start': true,
            inactive: activeIndex !== index,
          }"
          @click="() => toggleActive(index)"
        >
          <h3 class="name">{{ spec.name }}</h3>
          <p>{{ spec.desc }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      specs: {
        modelS: {
          name: "Model S",
          desc: "Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.",
        },
        modelSPlaid: {
          name: "Model S Plaid",
          desc: "Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.",
        },
      },
      timer: null,
    };
  },
  methods: {
    toggleActive(index) {
      this.activeIndex = index;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.activeIndex = this.activeIndex === 0 ? 1 : 0;
      }, 2000);
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.activeIndex = this.activeIndex === 0 ? 1 : 0;
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: lightgray;

  .comparison-container {
    width: min(100%, 80rem);

    .content {
      cursor: pointer;
      &.inactive {
        color: rgb(173, 173, 173);

        .name::before {
          background-color: rgb(173, 173, 173);
        }
      }

      .name {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: black;
          bottom: 150%;
        }
      }
    }
  }
}

img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 2rem;
  box-shadow: 0 0 3px 1px rgba(200, 200, 200, 0.1);
  object-position: center center;
}
</style>
