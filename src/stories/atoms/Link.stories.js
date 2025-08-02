import '../../../components/atoms/link/link.css';
import '../../../css/style.css';

export default {
  title: 'Ridd/Atoms/Link',
  tags: ['autodocs'],
  argTypes: {
    link_url: {
      control: 'text',
      description: 'Url to use in link',
    },
    link_text: {
      control: 'text',
      description: 'Text that is linked',
    }


  }
};

const Template = ({ link_url, link_text }) => {
  if(link_text) {
    return `<a href="${link_url}">${link_text}</a>`
  } else {
    return `<a href="${link_url}">${link_url}</a>`
  } 
}


export const Default = Template.bind({});
Default.args = {
  link_url: 'example.com',
  link_text: "visit example site here"
}
