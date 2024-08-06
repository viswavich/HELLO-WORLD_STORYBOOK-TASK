import React from 'react';
import HelloWorld from './HelloWorld';

// Default export for the Storybook story
export default {
  title: 'HelloWorld', // The title of the story, which appears in the Storybook sidebar
  component: HelloWorld, // The component that this story is for
};

// Template for the HelloWorld component
const Template = (args) => <HelloWorld {...args} />;

// Bind the template to create a default story
export const Default = Template.bind({});
Default.args = {}; // Default args for the story (can be empty if no args are needed)
