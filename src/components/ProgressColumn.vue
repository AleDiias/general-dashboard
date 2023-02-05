<template>
  <div class="progress">
    <div>
      <span class="finish"> {{ value }} </span> / {{ maxValue }}
    </div>
    <div class="progress-bar2">
      <div class="progress-bar" :style="style(maxValue)"></div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    value: {},
    maxValue: {},
  },

  data() {
    return {};
  },

  methods: {
    style(maxValue) {
      return { width: `${maxValue}%` };
    },
  },
};
</script>

<style scoped>
.progress {
  width: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar {
  background-color: #165a9f;
  border-radius: 11px;
  width: 112px;
  height: 8px;
  max-width: 110px;
}

.progress-bar2 {
  background-color: #c5c5c5;
  border-radius: 11px;
  width: 110px;
  height: 8px;
}

.finish {
  font-weight: 700;
}
</style>
