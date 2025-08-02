
import '../../../components/atoms/heading/heading.css';
import '../../../css/style.css';

export default {
  title: 'Ridd/Atoms/Heading',
  tags: ['autodocs'],
  argTypes: {
    
    level: { 
      control: { type: "select"},
      options: ["1","2","3","4","5","6"],
      description: "Heading level (1-6)"
    },
    
    text: {
      control: 'text',
      description: 'Heading text content'
    }
  },
};

const Template = ({ level, text }) => {
  return `<h${level}>${text}</h${level}><p>Lorem ipmsum googly boogly</p>` 
}

export const Default = Template.bind({});
Default.args = {
  level: "1",
  text: "Heading Level H1"
}


export const Heading1 = Template.bind({});
Heading1.args = {
  level: "1",
  text: "Heading Level H1"
}

export const Heading2 = Template.bind({});
Heading2.args = {
  level: "2",
  text: "Heading Level H2"
}

export const Heading3 = Template.bind({});
Heading3.args = {
  level: "3",
  text: "Heading Level H3"
}

export const Heading4 = Template.bind({});
Heading4.args = {
  level: "4",
  text: "Heading Level H4"
}

export const Heading5 = Template.bind({});
Heading5.args = {
  level: "5",
  text: "Heading Level H5"
}

export const Heading6 = Template.bind({});
Heading6.args = {
  level: "6",
  text: "Heading Level H6"
}



