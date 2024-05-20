import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}, // argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    children: 'Button',
    onClick: fn() // use `fn` to log event to actions panel: https://storybook.js.org/docs/essentials/actions#action-args
  }
};

export default meta;

export const Component: StoryObj<typeof Button> = {
  args: {}
};

export const Sizes: StoryObj<typeof Button> = {
  render: ({ size, ...rest }) => (
    <>
      <Button size="small" {...rest}>
        Small
      </Button>
      <Button {...rest}>Medium</Button>
      <Button size="large" {...rest}>
        Large
      </Button>
    </>
  )
};
