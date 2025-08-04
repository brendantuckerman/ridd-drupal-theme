// Story for molevule top nav (Hamburger + Nav links)
import {HamburgerMobile} from "../atoms/Hamburger.stories.js";
import { NoLink, External } from "../atoms/Link.stories.js";

import "../../../components/atoms/link/link.css";
import "../../../components/atoms/hamburger/hamburger.css";
import "../../../components/molecules/topNav/topNav.css";

export default {
  title: 'Ridd/Molecules/TopNav',
  tags: ['autodocs'],
}

NoLink.args = {
  link_url: 'example.com',
  external: false
}



const Template = () => `
  <nav x-data="{ isOpen: false }">
  
  <div class="ridd-top-nav-desktop-wrapper"">
    <ul>
      <li>${NoLink({
        link_url: 'example.com',
        external: false
    })}</li>
      <li>${External({
        link_url: 'example.com',
        external: true
      })}</li>
        <li>${NoLink({
          link_url: 'example.com',
          link_text: 'About',
          external: false
        })}</li>
          <li>${NoLink({
            link_url: 'example.com',
            link_text: 'Home',
            external: false
          })}</li>
    </ul>
  </div>

  <div class="ridd-top-nav-mobile-wrapper">
    ${HamburgerMobile({})}
    <div id="ridd-top-nav-mobile-full-links-wrapper" 
         :class="{'dramatic-entry' : isOpen}">
      <ul>
        <li>${NoLink({
          link_url: 'example.com',
          external: false
        })}</li>
        <li>${External({
          link_url: 'example.com',
          external: true
        })}</li>
         <li>${NoLink({
          link_url: 'example.com',
          link_text: 'About',
          external: false
        })}</li>
           <li>${NoLink({
          link_url: 'example.com',
          link_text: 'Home',
          external: false
        })}</li>
    </ul>
  </div>
</nav>
 
`;


export const Default = Template.bind({});

