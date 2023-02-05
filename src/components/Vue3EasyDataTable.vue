<template>
  <EasyDataTable
    :headers="headers"
    :items="dataTable"
    alternating
    table-class-name="customize-table"
    header-text-direction="center"
    body-text-direction="center"
  >
    <template #header-agents="header">
      <div class="row full-width items-start">
        <q-checkbox size="xs" v-model="header.agents">
          {{ header.text }}
        </q-checkbox>
      </div>
    </template>

    <template #item-agents="item">
      <div class="row items-center">
        <q-checkbox class="col-auto" v-model="itemsSelected" size="xs">
        </q-checkbox>

        <div class="col flex items-start">
          <div class="row" v-if="item.doNotDisturb">
            {{ item.agents }} <DoNotDisturb />
          </div>
          <div v-else>
            {{ item.agents }}
          </div>
        </div>
      </div>
    </template>

    <template #item-attendances="item">
      <AttendanceColumn :attendances="item.attendances" :maxValue="maxValue" />
    </template>

    <template #item-finish="item">
      <div class="row full-width justify-center">
        <ProgressColumn :value="item.finish" :maxValue="maxValue" />
      </div>
    </template>

    <template #item-status="item">
      <div class="row full-width justify-center">
        <StatusColumn :agentStatus="item.status" />
      </div>
    </template>
  </EasyDataTable>
</template>

<script>
import ProgressColumn from "./ProgressColumn.vue";
import AttendanceColumn from "./AttendanceColumn.vue";
import StatusColumn from "./StatusColumn.vue";
import DoNotDisturb from "./DoNotDisturb.vue";
export default {
  components: {
    ProgressColumn,
    AttendanceColumn,
    StatusColumn,
    DoNotDisturb,
  },
  props: {
    maxValue: {},
    dataTable: {},
  },
  data() {
    return {
      itemsSelected: [],
      headers: [
        { text: "Agentes", value: "agents", sortable: true },
        { text: "Atendimentos", value: "attendances" },
        { text: "Finalizados", value: "finish" },
        { text: "Ramal", value: "exten" },
        { text: "Rejeições", value: "rejections" },
        { text: "Número", value: "callerNumber" },
        { text: "Ociosidade", value: "idle", width: 200 },
        { text: "Duração", value: "duration" },
        { text: "Status", value: "status" },
      ],
    };
  },

  watch: {
    maxValue(maxValue) {
      console.log({ maxValueNew: maxValue });
    },
    itemsSelected: {
      deep: true,
      handler(itemsSelected) {
        console.log({ itemsSelected });
      },
    },
  },
};
</script>

<style scoped>
.customize-table {
  font-family: "Open Sans";

  --easy-table-header-font-size: 12px;
  --easy-table-header-font-weight: 700;
  --easy-table-header-font-color: #2e2e2e;

  --easy-table-body-row-height: 35px;
  --easy-table-body-row-font-size: 14px;
  --easy-table-body-row-font-color: #2e2e2e;

  --easy-table-body-row-background-color: #fff;
  --easy-table-body-even-row-background-color: #ebebeb;
  --easy-table-body-row-hover-background-color: #e3f2fd;
}
</style>
