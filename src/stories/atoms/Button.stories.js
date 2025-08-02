
import '../../../components/atoms/button/button.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Ridd/Button',
  tags: ['autodocs'],
  render: ({ text }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `<button class="ridd-btn"></button>`;
  },
  argTypes: {
    text: { control: 'text'},
    url:  { control: 'text'},
    variant: { 
      control: {type: 'select'},
      options: ['primary', 'secondary']

    },
    disabled: { control: 'bool'},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
