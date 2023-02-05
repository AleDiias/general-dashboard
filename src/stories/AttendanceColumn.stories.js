// import { within, userEvent } from "@storybook/testing-library";
import MyAttendanceColumn from "../components/AttendanceColumn.vue";

export default {
  title: "Example/GeneralTable/AttendanceColumn",
  component: MyAttendanceColumn,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyAttendanceColumn },
  setup() {
    return { args };
  },
  template: `
  <my-attendance-column  v-bind="args" />
  `,
});

export const AttendanceColumn = Template.bind({});
AttendanceColumn.args = {
  attendances: {
    chats: 10,
    calls: 8,
  },
};
