import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}, // argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    // children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <>
      <h1 style={{ maxInlineSize: '40ch' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    </>
  )
};

export const Balance: StoryObj = {
  render: () => (
    <>
      <h1 style={{ maxInlineSize: '40ch', textWrap: 'balance' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
    </>
  )
};

export const Limitation: StoryObj = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '5vmin',
        fontSize: '1.5rem',
        textWrap: 'balance'
      }}
    >
      <p
        style={{
          margin: 0,
          maxInlineSize: '40ch'
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore ea accusamus consequatur est soluta
        laboriosam nesciunt, cupiditate illum.
      </p>

      <p
        style={{
          margin: 0,
          maxInlineSize: '40ch'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi eleifend, tempus mauris eget, varius diam.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc suscipit mattis lorem, a mollis dui faucibus
        et. Fusce suscipit lacus ac pharetra consectetur. Fusce quis ipsum cursus enim convallis placerat. Donec viverra
        dolor dolor, vel feugiat odio lacinia at.{' '}
      </p>
    </div>
  )
};
