import "../../../components/molecules/profile_card/profile_card.css";
import "../../../components/atoms/button/button.css";
// ProfileCard HTML Component Template
const createProfileCard = (args) => {
  const { title = '', image = '', body = '', button = '', sub_title = '' } = args;

  return `
    <section class="ridd-profile-card-section">
      <div class="ridd-profile-card-title-wrapper">
        <h1>${title}</h1>
        <h2>${sub_title}</h2>
      </div>
      <div class="ridd-profile-card-background">
        <div class="ridd-profile-card-inner-wrapper">
          <div class="ridd-profile-card-image-wrapper">
            <img src="${image}" alt="${title}">
          </div>
          <div class="ridd-profile-card-text-wrapper">
            ${body}
            ${button ? `<div class="ridd-profile-card-button-wrapper">${button}</div>` : ''}
          </div>
        <div>
      </div>
    </section>
  `;
};

// Storybook configuration
const meta = {
  title: 'Ridd/Molecules/ProfileCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the profile card',
    },
    sub_title: {
      control: 'text',
      description: 'The sub title of the profile card, intended to be position',
    },
    image: {
      control: 'text',
      description: 'URL of the profile image',
    },
    body: {
      control: 'text',
      description: 'The main content/description text',
    },
    button: {
      control: 'text',
      description: 'Optional button HTML',
    },
  },
};

export default meta;

// Template function
const Template = (args) => {
  // Create a container element
  const wrapper = document.createElement('div');
  wrapper.innerHTML = createProfileCard(args);
  return wrapper.firstElementChild;
};

// Stories
export const Default = Template.bind({});
Default.args = {
  title: 'Amanda Ridd',
  sub_title: 'Clinical Psychologist',
  image: 'https://picsum.photos/400/400',
  body: '<p>Software engineer with 5+ years of experience building modern web applications using React, Node.js, and cloud technologies. '
    + 'UX Designer passionate about creating intuitive and accessible user experiences.' + 'Software engineer with 5+ years of experience building modern web applications using React, Node.js, and cloud technologies. '
    + 'UX Designer passionate about creating intuitive and accessible user experiences.</p><p>Software engineer with 5+ years of experience building modern web applications using React, Node.js, and cloud technologies. UX Designer passionate about creating intuitive and accessible user experiences.Software engineer with 5+ years of experience building modern web applications using React, Node.js, and cloud technologies. UX Designer passionate about creating intuitive and accessible user experiences. </p>' ,
  button: '<button class="ridd-btn--secondary ridd--btn ridd-btn--small"><span>View Profile</span></button>',
};

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  title: 'Jane Smith',
  image: 'https://picsum.photos/200/200',
  body: 'UX Designer passionate about creating intuitive and accessible user experiences.',
};

export const WithCustomButton = Template.bind({});
WithCustomButton.args = {
  title: 'Mike Johnson',
  image: 'https://picsum.photos/200/200',
  body: 'Full-stack developer specializing in React and Python. Loves building scalable applications.',
  button: `
    <div">
      <button>
        Contact
      </button>
      <button>
        Portfolio
      </button>
    </div>
  `,
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  title: 'Dr. Sarah Wilson',
  image: 'https://picsum.photos/200/200',
  body: 'Data scientist and researcher with expertise in machine learning, artificial intelligence, and statistical analysis. Published author of numerous papers on predictive modeling and data visualization. Currently leading a team of analysts working on cutting-edge AI solutions for healthcare applications.',
  button: '<button >Learn More</button>',
};
