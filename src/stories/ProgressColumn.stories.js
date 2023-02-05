// import { within, userEvent } from "@storybook/testing-library";
import MyProgressColumn from "../components/ProgressColumn.vue";

export default {
  title: "Example/GeneralTable/ProgressColumn",
  component: MyProgressColumn,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyProgressColumn },
  setup() {
    return { args };
  },
  template: `
  <my-progress-column  v-bind="args" />
  `,
});

export const ProgressColumn = Template.bind({});
ProgressColumn.args = {
  value: 10,
  maxValue: "50%",
};
