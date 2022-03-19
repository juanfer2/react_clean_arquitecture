import React from 'react';
import Card from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

const Story = (args: any) => <Card {...args} />;

export const Template: ComponentStory<typeof Card> = Story.bind({});

const Props = {};

Template.args = Props;
