<template>
  <div class="progress">
    <div>
      <span class="finish"> {{ value }} </span> / {{ maxValue }}
    </div>
    <div class="progress-bar2">
      <div class="progress-bar" style="width: maxValue"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    maxValue: {},
  },
};
</script>

<style scoped>
.progress {
  max-width: 125px;
  width: 125px;
  border: 2px solid black;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-bar {
  background-color: #165a9f;
  border-radius: 11px;
  width: 110px;
  height: 8px;
}

.progress-bar2 {
  background-color: #c5c5c5;
  border-radius: 11px;
  width: 110px;
  height: 8px;
}

.finish {
  font-weight: 700;
  align-items: center;
  justify-content: center;
}
</style>
