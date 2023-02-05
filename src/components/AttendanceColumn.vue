<template>
  <div class="attendances">
    <div class="col">
      <div class="row">
        <div class="col items-center align-center justify-center">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89612 4.82766C3.69612 6.39988 4.98501 7.68877 6.55723 8.48877L7.77945 7.26655C7.93501 7.11099 8.15168 7.06655 8.34612 7.12766C8.96834 7.33321 9.63501 7.44432 10.3295 7.44432C10.635 7.44432 10.885 7.69432 10.885 7.99988V9.94432C10.885 10.2499 10.635 10.4999 10.3295 10.4999C5.11279 10.4999 0.88501 6.2721 0.88501 1.05543C0.88501 0.749878 1.13501 0.499878 1.44057 0.499878H3.38501C3.69057 0.499878 3.94057 0.749878 3.94057 1.05543C3.94057 1.74988 4.05168 2.41654 4.25723 3.03877C4.31834 3.23321 4.2739 3.44988 4.11834 3.60543L2.89612 4.82766Z"
              fill="#165A9F"
            />
          </svg>
        </div>
        <div class="col items-center align-center justify-center">
          {{ attendances.calls }}
        </div>
      </div>
    </div>

    <div class="col-1 divisor"></div>

    <div class="col">
      <div class="row">
        <div class="col items-center align-center justify-center">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.85098 0.656616C3.07042 0.656616 0.88501 2.6862 0.88501 5.18719C0.88501 6.43656 1.67986 7.68592 2.54108 8.54546C2.4747 9.405 1.34853 9.79764 0.88501 10.3433C1.87787 10.3433 3.07042 9.95346 3.73307 9.32737C4.26297 9.48431 5.32164 9.71776 5.91848 9.71776C8.6996 9.71776 10.885 7.68592 10.885 5.18719C10.885 2.6862 8.63379 0.656616 5.85098 0.656616Z"
              fill="#E8900C"
            />
          </svg>
        </div>
        <div class="col items-center align-center justify-center">
          {{ attendances.chats }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    attendances: {},
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.attendances {
  gap: 13px;
  height: 34px;
  max-width: 135px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.attendances .info {
  display: flex;
  align-items: center;
  justify-content: end;
}

.attendances .disable {
  color: #767676;
}

.attendances .disable svg path {
  fill: #ababab;
}

.divisor {
  width: 1px;
  height: 100%;
  background: #c5c5c5;
}
</style>
