// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {DialogTestComponent} from "../app/dialog-test/dialog-test.component";
import {userEvent, within} from "@storybook/testing-library";
import {moduleMetadata} from "@storybook/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/DialogTestComponent',
  component: DialogTestComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        CommonModule

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<DialogTestComponent> = (args: DialogTestComponent) => ({
  props: args
});

export const LoginForm = Template.bind({});
LoginForm.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByLabelText('Username'), 'email@provider.com');

  console.log('\n\n\n\n\nUAUAUA')
  await userEvent.type(canvas.getByLabelText('Password'), 'a-random-password');

  // See https://storybook.js.org/docs/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByText('Login'));

};
