import LoginForm from "../views/LoginForm";

export default {
  title: "Example/IonicTest",
  component: LoginForm,
  argTypes: {
    onLogin: { action: "onLogin" },
    onCreateAccount: { action: "onCreateAccount" },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LoginForm },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { args };
  },
  // Then, the spread values can be accessed directly in the template
  template:
    '<div class="ion-padding"><login-form v-bind="{...args}"/></ion-padding>',
});

export const Default = Template.bind({});
Default.args = {};
