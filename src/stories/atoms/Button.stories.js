
import '../../../components/atoms/button/button.css';
import '../../../css/style.css';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Ridd/Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Button text content'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary' ],
      description: 'Button style variant'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    url: {
      control: 'text',
      description: 'Button link URL'
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Template = ({ text, variant, size, disabled, url }) => {
  const classes = [
    'ridd-btn',
    `ridd-btn--${variant}`,
    `ridd-btn--${size}`,
    disabled ? 'ridd-btn--disabled' : ''
  ].filter(Boolean).join(' ');

  if (url && !disabled) {
    return `<a href="${url}" class="${classes}">${text}</a>`;
  } else {
    return `<button class="${classes}" ${disabled ? 'disabled' : ''}><span>${text}</span></button>`;
  }
};

// Default story with default args
export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  url: ''
};

// Other variations
export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  text: 'Secondary Button',
  variant: 'secondary'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  text: 'Large Button',
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  text: 'Medium Button',
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  text: 'Small Button',
  size: 'small'
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...Default.args,
  text: 'Link Button',
  url: 'https://example.com'
};
