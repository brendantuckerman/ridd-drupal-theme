import "../../../components/organisms/footer/footer.css";
import "../../../components/molecules/region_footer/region_footer.css";

export default {
  title: 'Ridd/Organisms/Footer',
  tags: ['autodocs'],
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

}

// The <footer> is defined in page.hml.twig
// be carufyul with the confusion between
// the region footer  (footer + sub footer) and <footer>
const Template = ({ site_logo, site_name, site_slogan }) => {

  const logoBlock = site_logo ? `<a href="/" rel="home">
      <img id="ridd-site-logo-footer-region" src="${site_logo}" alt="Home" fetchpriority="high"
      />
    </a>` : "";
  const nameBlock = site_name ? ` <a href="/" rel="home" id="ridd-site-name-footer-region"
    >${site_name}</a>` : "";

  const sloganBlock = site_slogan ? `<h3 id="ridd-site-slogan-footer-region">
    ${site_slogan}
  </h3>` : "";

  const placeHolderMenu = `<h3>Contact</h3><ul>
                
                      <li>
                        <a>Privacy</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>An annoying long one</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                    </ul>`

  const placeholderIconMenu = `<h3>Contact</h3><ul>
                
                      <li>
                        <i class="fa-regular fa-circle-user"></i><a>Privacy</a>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-user"></i><a>About</a>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-user"></i><a>About</a>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-user"></i><a>An annoying long one</a>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-user"></i><a>About</a>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-user"></i><a>About</a>
                      </li>
                    </ul>`

  const placeholderBlock1 = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur magna massa, vitae dignissim justo sagittis vel. Pellentesque ac efficitur lacus, id dignissim odio. 
  Aenean pellentesque sodales nibh, et viverra felis imperdiet vel.</p>`


  return `<footer role="contentinfo" id="ridd-site-footer">
            <div class="ridd-region-footer-container">
              <div class="ridd-region-footer-grid">

                  <div class="ridd-region-footer-branding">
                    ${logoBlock}
                    <div class="ridd-site-branding-text-container-footer-region">
                    ${nameBlock}
                    </div>
                  </div>

                  <div class="ridd-region-footer-element-wrapper">
                    ${placeholderBlock1}
                  </div>
                  <hr class="ridd-footer-divider">
                  <div class="ridd-region-footer-element-wrapper">
                    ${placeHolderMenu}
                  </div>
                   <hr class="ridd-footer-divider">
                  <div class="ridd-region-footer-element-wrapper">
                    ${placeholderIconMenu}
                  </div>
                  <hr class="ridd-footer-divider">
                  <div class="ridd-region-footer-element-wrapper">
                    ${placeHolderMenu}
                  </div>
                   <hr class="ridd-footer-divider">
                </div>
              <div>
                  <p> Sub footer region content</p>
              </div>
        </footer>`
}

export const FooterDefault = Template.bind ({})
FooterDefault.args = {
  site_logo: "src/stories/assets/tutorials.svg",
  site_name: "Lorem Ipsum Dolores Uvest",
  site_slogan: "Nulla tempus magna eget urna semper maximus"
}
