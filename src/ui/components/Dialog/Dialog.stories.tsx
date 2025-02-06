import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}, // argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    children: 'Hello world'
  }
};

export default meta;

export const Default: StoryObj<typeof Dialog> = {
  render: () => (
    <>
      <Button>Open popover</Button>
      <Dialog />
    </>
  )
};
