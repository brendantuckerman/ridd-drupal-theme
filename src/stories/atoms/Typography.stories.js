import '../../../css/style.css';

export default {
  title: 'Ridd/Atoms/Typography',
  tags: ['autodocs'],
   argTypes: {
    text: {
      control: 'text',
      description: 'Text to display',
    }
   }
};

const Template = ({ text }) => {
  const classes = [
    'prose',
  ].filter(Boolean).join(' ');

  return `<p class="${classes}">${text}</p>`;
};

export const Default = Template.bind({});
Default.args = {
  text: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p> <p class='prose'> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`
};