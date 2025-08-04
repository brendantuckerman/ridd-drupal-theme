import "../../../components/atoms/hamburger/hamburger.css";



export default {
  title: "Ridd/Atoms/Hamburger",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Will be hidden by nav wrapper',
      },
    },
  },
  globals: {
    viewport: {
      value: 'mobile1', // Try this instead
      // or 'mobile1', 'mobile2', 'tablet'
    },
  }
};

/* Note that x-data below shoudl eb applied to the top nav.
 * Once isOpen is true, the nav can be shown
 * It is used here for testing only.
 * It is not found in the .twig file
 * 
 * Add    x-data="{ isOpen: false }" to button
*/

const Template = ({}) => {
  return `

  <button id="ridd-hamburger-menu-toggle"
     
        @click="isOpen = !isOpen"
        type="button"
        :class="{
          'transition transform-180 ridd-hamburger-white-open': isOpen,
          'ridd-hamburger-primary-closed': !isOpen
        }"
        aria-label="Open menu"
        aria-expanded="false"
        :aria-expanded="isOpen ? 'true' : 'false'">
     <svg
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    x-show="isOpen"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  />
  <path
    x-show="!isOpen"
    fill-rule="evenodd"
    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  />
  </svg>
  Menu
  </button>
  `
};

export const Default = Template.bind({});

export const HamburgerMobile = Template.bind({});



