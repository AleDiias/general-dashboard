// import { within, userEvent } from "@storybook/testing-library";
import MyDoNotDisturb from "../components/DoNotDisturb.vue";

export default {
  title: "Example/GeneralTable/DoNotDisturb",
  component: MyDoNotDisturb,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyDoNotDisturb },
  setup() {
    return { args };
  },
  template: `
  <my-do-not-disturb  v-bind="args" />
  `,
});

export const DoNotDisturb = Template.bind({});
DoNotDisturb.args = {};
