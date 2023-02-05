<template>
  <div class="row">
    <div class="row">
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.437466 11V4.99997H8.43747V0.159966L16.2775 7.99997L8.43747 15.84V11H0.437466Z"
          fill="#165A9F"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phone: {},
    direction: {},
  },

  methods: {
    backgroundColor(status) {
      return { background: colors[status] };
    },
    statusName(status) {
      return statusNames[status] || status;
    },
  },
};

const colors = {
  OFFLINE: "#535353",
  ONLINE: "#12B361",
  RINGING: "#E8900C",
  DIALING: "#E8900C",
  PAUSED: "#E8440C",
  DISCONNECT: "#535353",
  ONTHEPHONE: "#5DA8F3",
  UNAVAILABLE: "#535353",
  ONGOING: "#5DA8F3",
  OFFERING: "#E8900C",
};

const statusNames = {
  OFFLINE: "Desconectado",
  ONLINE: "Disponível",
  RINGING: "Tocando",
  DIALING: "Discando",
  PAUSED: "Pausado",
  DISCONNECT: "Desconectado",
  ONTHEPHONE: "Em Atendimento",
  UNAVAILABLE: "Indisponível",
  ONGOING: "Em Atendimento",
  OFFERING: "Em Oferecimento",
};
</script>

<style scoped></style>
