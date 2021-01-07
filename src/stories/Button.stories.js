import React from 'react';

import { Button } from './Button';

/* export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}; */

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
         { name: 'red', value: '#f00', },
         { name: 'green', value: '#0f0', },
         { name: 'blue', value: '#00f', },
      ]
    }
  }
};

const Template = (args) => <Button {...args} />;

/* export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'I am Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
}; */

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = { 
  ...Primary.args, 
  label: '😄👍😍💯' 
};

export const Tertiary = Template.bind({});
Tertiary.args = { 
  ...Primary.args, 
  label: '📚📕📈🤓' 
};