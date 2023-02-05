import GeneralTable from "../components/GeneralTable.vue";

export default {
  title: "Example/GeneralTable",
  component: GeneralTable,
};

const Template = (args) => ({
  components: { GeneralTable },
  setup() {
    return { args };
  },
  template: '<GeneralTable v-bind="args"/>',
});

export const TableData = Template.bind({});

TableData.args = {
  tableData: [
    {
      agents: "Bruno Oliveira",
      attendances: {
        calls: 6,
        chats: 8,
      },
      finish: 16,
      exten: "0014",
      rejections: 8,
      callerNumber: "6733180700",
      idle: 600,
      duration: 300,
      status: "Disponível",
      doNotDisturb: true,
    },
    {
      agents: "Bruno Oliveira",
      attendances: {
        calls: 25,
        chats: 10,
      },
      finish: 35,
      exten: "0014",
      rejections: 0,
      callerNumber: "6733180700",
      idle: 600,
      duration: 300,
      status: "Pausado",
      doNotDisturb: false,
    },
  ],
};
