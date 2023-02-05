<script setup>
// import GeneralTable from "./GeneralTable.vue";
import Vue3EasyDataTable from "./Vue3EasyDataTable.vue";
</script>

<template>
  <!-- <GeneralTable :maxValue="maxValue" :tableData="tableData"> </GeneralTable> -->

  <Vue3EasyDataTable
    v-for="table in 1"
    :key="table"
    :maxValue="maxValue"
    :dataTable="tableData"
  />
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
    isTable: {
      type: Boolean,
    },
  },

  data() {
    return {
      maxValue: 0,
      tableData: [
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "67992001010",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          doNotDisturb: true,
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONTHEPHONE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "67992001010",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "UNAVAILABLE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "67992001010",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "RINGING",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "ONTHEPHONE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
      ],
    };
  },
  mounted() {
    this.changeInfo();
  },

  methods: {
    changeInfo() {
      const vm = this;
      setInterval(() => {
        this.tableData = this.tableData.map((data) => ({
          ...data,
          finish: data.finish + 2,
          idle: data.idle * 2,
          duration: data.duration++,
          rejections: data.rejections + 20,
          attendances: {
            calls: data.attendances.calls + 2,
            chats: data.attendances.chats + 3,
          },
        }));
        vm.maxValue += 50;
        console.log({ maxValue: vm.maxValue });
      }, 1000);
    },
  },

  watch: {
    maxValue(teste) {
      console.log({ teste });
    },
  },
};
</script>
