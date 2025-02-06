import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// import { Popover } from './Popover';
import { Button } from '../Button/Button';

const meta: Meta = {
  // component: Popover,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}, // argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    // children: 'Hello world'
  }
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <>
      <Button popovertarget="my-auto-popover">Open popover</Button>
      <div id="my-auto-popover" popover="auto">
        Hello world
      </div>
    </>
  )
};

export const Manual: StoryObj = {
  render: () => (
    <>
      <Button popovertarget="my-manual-popover">Toggle popover</Button>
      <div id="my-manual-popover" popover="manual">
        Hello world
        <Button popovertarget="my-manual-popover" popovertargetaction="hide">
          Hide
        </Button>
      </div>
    </>
  )
};
