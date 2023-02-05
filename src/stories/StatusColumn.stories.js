// import { within, userEvent } from "@storybook/testing-library";
import MyStatusColumn from "../components/StatusColumn.vue";

export default {
  title: "Example/GeneralTable/StatusColumn",
  component: MyStatusColumn,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyStatusColumn },
  setup() {
    return { args };
  },
  template: `
  <my-status-column  v-bind="args" />
  `,
});

export const StatusColumn = Template.bind({});
StatusColumn.args = {
  agentStatus: "ONLINE",
};
