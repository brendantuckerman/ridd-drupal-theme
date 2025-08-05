import "../../../components/atoms/site_branding/site_branding.css";

export default {
  title: "Ridd/Atoms/SiteBranding",
    
  argTypes: {
    site_logo: {
      control: 'text',
      description: 'The url for the logo'
    },
    site_name: {
      control: 'text',
      description: 'The name of the site'
    },
    site_slogan: {
      control: 'text',
      description: 'The optional site slogan.'
    }
  }
};

const Template = ({ site_logo, site_name, site_slogan }) => {
  const logoBlock = site_logo ? `<a href="/" rel="home">
      <img id="ridd-site-logo"src="${ site_logo }" alt="Home" fetchpriority="high" 
      />
    </a>` : "";
  const nameBlock = site_name ? ` <a href="/" rel="home" id="ridd-site-name"
    >${site_name }</a>` : "";
  
  const sloganBlock = site_slogan ?  `<h3 id="ridd-site-slogan">
    ${ site_slogan }
  </h3>` : "";
  
  return `<div id="ridd-site-branding">${logoBlock} 
            <div class="ridd-site-branding-text-container">
            ${nameBlock}${sloganBlock}
            </div>
          </div>`
}

export const Default = Template.bind({});
Default.args = {
  site_logo: "src/stories/assets/tutorials.svg",
  site_name: "Lorem Ipsum Dolores Uvest",
  site_slogan: "Nulla tempus magna eget urna semper maximus"
}

export const NoSlogan = Template.bind({});
NoSlogan.args = {
  site_logo: "src/stories/assets/tutorials.svg",
  site_name: "Lorem Ipsum Dolores Uvest"
}

export const Minimal = Template.bind({});
Minimal.args = {
  site_name: "Lorem Ipsum Dolores Uvest"
}
