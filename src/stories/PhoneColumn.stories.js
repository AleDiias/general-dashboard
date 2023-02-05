// import { within, userEvent } from "@storybook/testing-library";
import MyPhoneColumn from "../components/PhoneColumn.vue";

export default {
  title: "Example/GeneralTable/PhoneColumn",
  component: MyPhoneColumn,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyPhoneColumn },
  setup() {
    return { args };
  },
  template: `
  <my-phone-column  v-bind="args" />
  `,
});

export const PhoneColumn = Template.bind({});
PhoneColumn.args = {
  number: "6733180700",
  direction: "IN",
};
