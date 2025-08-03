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
    },
    external: {
      control: 'boolean',
      description: 'Whether the link is internal or external'
    }


  }
};

const Template = ({ link_url, link_text, external }) => {
  const classes = [
    'ridd-link',
    external ? 'ridd-link--external' : ''
  ].filter(Boolean).join(' ');

  const externalDisplay = external ? `<svg class="link__icon" width="16" height="16" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"aria-hidden="true">
      
      <rect id="Icons" x="-896" y="0" width="16" height="16" style="fill:none;"/>
      <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>

      <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
    </svg>
    <span class="sr-only">(opens in new window)</span>` : '';

  if(link_text) {
    return `<a href="${link_url}" class="${classes}">${link_text}
      ${externalDisplay}
    </a>`
  } else {
    return `<a href="${link_url}" class="${classes}">${link_url}
      ${externalDisplay}</a>`
  } 
}


export const Default = Template.bind({});
Default.args = {
  link_url: 'example.com',
  link_text: "visit example site here",
  external: false
}

export const External = Template.bind({});
External.args = {
  link_url: 'example.com',
  link_text: "visit example site here",
  external: true
}