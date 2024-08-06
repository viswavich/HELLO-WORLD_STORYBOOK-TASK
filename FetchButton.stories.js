import React from 'react';
import FetchButton from './FetchButton';

export default {
  title: 'FetchButton',
  component: FetchButton,
};

const Template = (args) => <FetchButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
