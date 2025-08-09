import "../../../components/molecules/hero/hero.css";
import "../../../components/atoms/button/button.css";

export default {
  title: 'Ridd/Molecules/Hero',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The url for the logo'
    },
    subtitle: {
      control: 'text',
      description: 'The name of the site'
    },
    button_text: {
      control: 'text',
      description: 'The optional site slogan.'
    },
    hero_image: {
      control: 'text',
      description: 'url for the image'
    }
  }
}

const Template = ({ text, subtitle, button_text, hero_image }) => {
  return `<div class='ridd-hero-hero-wrapper'>
   <div class="ridd-hero-container">

    <div class="ridd-hero-content">
       <h1 class="prose ridd-hero-title">${text}</h1>
      ${subtitle}
    <button class="ridd-btn ridd-btn--primary ridd-btn--medium ">  
      ${button_text}
    </button>
    </div>
    <div class="ridd-hero-image-wrapper">
      <img src="${hero_image}">
    </div>
  </div>
</div>`
}

export const Default = Template.bind ({})
Default.args = {
  text: 'Lorem Ipsum Lorem',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi nec sem iaculis vehicula eget non purus. Donec convallis enim quis mollis tempor. Curabitur. ',
  button_text: 'Book Now',
  hero_image: "../../../images/theme-logo.jpg"
}
