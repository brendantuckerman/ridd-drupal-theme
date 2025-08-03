// No SDC for this one - global

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

  return `<div class="${classes}">${text}</div>`;
};

export const Default = Template.bind({});
Default.args = {
  text: `<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p> <p class='prose'> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>`
};

export const OrderedLists =  Template.bind({});
OrderedLists.args = {
  text: `<h2>Ordered lists</h2>
    <ol>
      <li>Item 1</li>
      <li> Item 2 
        <ol type="i">
        <li> subItem 1</li>
        <li> subItem 2</li>
        </ol>
      </li>
      <li>Item 3</li>
      </ol>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p> `
}

export const UnorderedLists =  Template.bind({});
UnorderedLists.args = {
  text: `<h2>Unordered lists</h2>
    <ul>
      <li>Item 1</li>
      <li> Item 2 
        <ul type="circle">
        <li> subItem 1</li>
        <li> subItem 2</li>
        </ul>
      </li>
      <li>Item 3</li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p> `
}