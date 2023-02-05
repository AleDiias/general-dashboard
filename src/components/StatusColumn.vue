<template>
  <div class="status-cell" :style="backgroundColor(agentStatus)">
    {{ statusName(agentStatus) }}
  </div>
</template>

<script>
export default {
  props: {
    agentStatus: {},
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

<style scoped>
.status-cell {
  background: #c5c5c5;
  height: 24px;
  width: 147px;
  border-radius: 6px;
  margin-left: 0px;
  font-weight: 700;
  color: white;
  line-height: 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
}
</style>
