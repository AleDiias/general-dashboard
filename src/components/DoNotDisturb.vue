<template>
  <span class="do-not-disturb">
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09375 0.5C2.78175 0.5 0.09375 3.188 0.09375 6.5C0.09375 9.812 2.78175 12.5 6.09375 12.5C9.40575 12.5 12.0938 9.812 12.0938 6.5C12.0938 3.188 9.40575 0.5 6.09375 0.5ZM9.09375 7.1H3.09375V5.9H9.09375V7.1Z"
        fill="white"
      />
    </svg>
    Não perturbe</span
  >
</template>

<script>
export default {};
</script>

<style>
.do-not-disturb {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-left: 10px;

  width: 100px;
  height: 25px;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  color: white;

  background: #535353;
  border-radius: 5px;
}
</style>
