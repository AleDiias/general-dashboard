// import { within, userEvent } from "@storybook/testing-library";
import MyFilaDeEspera from "../components/FilaDeEspera.vue";

export default {
  title: "Example/GeneralTable/FilaDeEspera",
  component: MyFilaDeEspera,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyFilaDeEspera },
  setup() {
    return { args };
  },
  template: `
  <my-Fila-De-Espera v-bind="args" />
  `,
});

export const FilaDeEspera = Template.bind({});
FilaDeEspera.args = {

};
