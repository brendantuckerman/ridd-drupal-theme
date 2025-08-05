import { Default } from "../molecules/TopNav.stories";
import { NoSlogan } from "../atoms/SiteBranding.stories";

import "../../../components/atoms/link/link.css";
import "../../../components/atoms/hamburger/hamburger.css";
import "../../../components/molecules/topNav/topNav.css";
import "../../../components/organisms/header/header.css";

export default {
  title: 'Ridd/Organisms/Header',
  tags: ['autodocs']
  
}
const Template =  () => {
  return `<header role="banner" class="ridd-site-header">
    ${ NoSlogan({
      site_logo: "src/stories/assets/tutorials.svg",
      site_name: "Lorem Ipsum Dolores Uvest"
    }) }
    ${ Default({})}
  </header>
  
  <main role="main">
  <h1>This would be the main title</h1>
  </main>`
} 

export const HeaderDefault = Template.bind({})
