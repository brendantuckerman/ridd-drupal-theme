import "../../../components/atoms/footer_menu/footer_menu.css";

// footer-menu.stories.js
// Storybook story for the Drupal 11 Footer Menu SDC component
export default {
  title: 'Ridd/Atoms/Footer Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A reusable footer menu component that displays a titled list of links with optional icons. Designed for use in website footers with support for multiple menu columns.'
      }
    }
  },
  argTypes: {
    menu_title: {
      control: 'text',
      description: 'The title displayed above the menu links',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Quick Links' }
      }
    },
    menu_links: {
      control: 'object',
      description: 'Array of menu link objects containing name, url, and optional icon',
      table: {
        type: { summary: 'array' }
      }
    }
  }

};

const Template = ({ menu_title, menu_links = [] }) => {
  // Helper function to generate clean CSS class from title
  const cleanClass = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Helper function to generate clean ID from title
  const cleanId = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Generate the menu links HTML
  const generateLinks = (links) => {
    if (!links || links.length === 0) {
      return '';
    }

    return links.map(link => {
      const linkClasses = ['ridd-footer-menu__link'];
      if (link.icon) {
        linkClasses.push('footer-menu__link--has-icon');
      }

      // Build attributes string
      let attributesString = '';
      if (link.target) {
        attributesString += ` target="${link.target}"`;
      }
      if (link.attributes) {
        Object.entries(link.attributes).forEach(([key, value]) => {
          attributesString += ` ${key}="${value}"`;
        });
      }

      // Build icon HTML
      const iconHtml = link.icon
        ? `<span class="ridd-footer-menu__icon ${link.icon}" aria-hidden="true"></span>`
        : '';

      return `
        <li class="ridd-footer-menu__item">
          <a href="${link.url}" 
             class="${linkClasses.join(' ')} ridd-link"${attributesString}>
            ${iconHtml}
            <span class="ridd-footer-menu__text">${link.name}</span>
          </a>
        </li>
      `;
    }).join('');
  };

  // Generate the complete component HTML
  const titleClass = menu_title ? cleanClass(menu_title) : 'default';
  const titleId = menu_title ? cleanId(menu_title) : 'menu';

  return `
    <nav class="ridd-footer-menu ridd-footer-menu--${titleClass}" 
         role="navigation" 
         aria-labelledby="ridd-footer-menu-${titleId}">
      ${menu_title ? `
        <h3 id="ridd-footer-menu-${titleId}" class="ridd-footer-menu__title">
          ${menu_title}
        </h3>
      ` : ''}
      
      ${menu_links && menu_links.length > 0 ? `
        <ul class="ridd-footer-menu__list">
          ${generateLinks(menu_links)}
        </ul>
      ` : ''}
    </nav>
  `;
};



// Default story - Basic menu without icons

export const DefaultFooterMenu = Template.bind({});
DefaultFooterMenu.args = {
  menu_title: 'Quick Links',
  menu_links: [
    {
      name: 'About Us',
      url: '/about'
    },
    {
      name: 'Services',
      url: '/services'
    },
    {
      name: 'Contact',
      url: '/contact'
    },
    {
      name: 'Careers',
      url: '/careers'
    }
  ]
};

// Menu with Font Awesome icons
export const WithIcons = Template.bind({});
WithIcons.args = {
  menu_title: 'Resources',
  menu_links: [
    {
      name: 'Documentation',
      url: '/docs',
      icon: 'fa fa-book'
    },
    {
      name: 'API Reference',
      url: '/api',
      icon: 'fa fa-code'
    },
    {
      name: 'Video Tutorials',
      url: '/tutorials',
      icon: 'fa fa-play-circle'
    },
    {
      name: 'Community Forum',
      url: '/forum',
      icon: 'fa fa-comments'
    },
    {
      name: 'Support Center',
      url: '/support',
      icon: 'fa fa-life-ring'
    }
  ]
};

// Menu with external links
export const ExternalLinks =  Template.bind({});
ExternalLinks.args = {
  menu_title: 'Connect',
  menu_links: [
    {
      name: 'GitHub',
      url: 'https://github.com/example',
      icon: 'fa fa-github',
      target: '_blank'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/example',
      icon: 'fa fa-twitter',
      target: '_blank'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/example',
      icon: 'fa fa-linkedin',
      target: '_blank'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/example',
      icon: 'fa fa-youtube',
      target: '_blank'
    }
  ]
};
/*
// Company footer menu
export const CompanyMenu = {
  args: {
    menu_title: 'Company',
    menu_links: [
      {
        name: 'About',
        url: '/about'
      },
      {
        name: 'Leadership Team',
        url: '/about/team'
      },
      {
        name: 'Investors',
        url: '/investors'
      },
      {
        name: 'Press & Media',
        url: '/press'
      },
      {
        name: 'Careers',
        url: '/careers'
      },
      {
        name: 'Contact Us',
        url: '/contact'
      }
    ]
  }
};

// Legal/compliance menu
export const LegalMenu = {
  args: {
    menu_title: 'Legal',
    menu_links: [
      {
        name: 'Privacy Policy',
        url: '/privacy'
      },
      {
        name: 'Terms of Service',
        url: '/terms'
      },
      {
        name: 'Cookie Policy',
        url: '/cookies'
      },
      {
        name: 'GDPR Compliance',
        url: '/gdpr'
      },
      {
        name: 'Accessibility',
        url: '/accessibility'
      }
    ]
  }
};

// Products/Services menu with descriptive links
export const ProductsMenu = {
  args: {
    menu_title: 'Products',
    menu_links: [
      {
        name: 'Enterprise Solution',
        url: '/products/enterprise',
        icon: 'fa fa-building'
      },
      {
        name: 'Small Business',
        url: '/products/small-business',
        icon: 'fa fa-briefcase'
      },
      {
        name: 'Cloud Platform',
        url: '/products/cloud',
        icon: 'fa fa-cloud'
      },
      {
        name: 'Mobile Apps',
        url: '/products/mobile',
        icon: 'fa fa-mobile'
      },
      {
        name: 'API Services',
        url: '/products/api',
        icon: 'fa fa-plug'
      },
      {
        name: 'View All Products',
        url: '/products',
        icon: 'fa fa-arrow-right'
      }
    ]
  }
};

// Menu with custom attributes (for analytics tracking)
export const WithCustomAttributes = {
  args: {
    menu_title: 'Quick Actions',
    menu_links: [
      {
        name: 'Get Started',
        url: '/signup',
        icon: 'fa fa-rocket',
        attributes: {
          'data-track': 'footer-signup',
          'data-category': 'conversion'
        }
      },
      {
        name: 'Schedule Demo',
        url: '/demo',
        icon: 'fa fa-calendar',
        attributes: {
          'data-track': 'footer-demo',
          'data-category': 'lead'
        }
      },
      {
        name: 'Download Guide',
        url: '/resources/guide.pdf',
        icon: 'fa fa-download',
        attributes: {
          'data-track': 'footer-download',
          'data-category': 'resource',
          'download': ''
        }
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu links with custom data attributes for analytics tracking'
      }
    }
  }
};


// Empty state
export const EmptyState = Template.bind({})
EmptyState.args = {
    menu_title: 'Coming Soon',
    menu_links: []
};

// Long menu with many items
export const LongMenu = {
  args: {
    menu_title: 'All Services',
    menu_links: [
      { name: 'Web Development', url: '/services/web-dev' },
      { name: 'Mobile Development', url: '/services/mobile' },
      { name: 'UI/UX Design', url: '/services/design' },
      { name: 'Digital Marketing', url: '/services/marketing' },
      { name: 'SEO Optimization', url: '/services/seo' },
      { name: 'Content Strategy', url: '/services/content' },
      { name: 'E-commerce Solutions', url: '/services/ecommerce' },
      { name: 'Cloud Migration', url: '/services/cloud' },
      { name: 'DevOps Consulting', url: '/services/devops' },
      { name: 'Security Audits', url: '/services/security' },
      { name: 'Performance Optimization', url: '/services/performance' },
      { name: 'Technical Support', url: '/services/support' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'A longer menu demonstrating how the component handles many items'
      }
    }
  }
};

// Mixed content types
export const MixedContent = {
  args: {
    menu_title: 'Resources & Support',
    menu_links: [
      {
        name: 'Documentation',
        url: '/docs',
        icon: 'fa fa-book'
      },
      {
        name: 'Download PDF Guide',
        url: '/assets/guide.pdf',
        icon: 'fa fa-file-pdf',
        attributes: {
          'download': 'guide.pdf'
        }
      },
      {
        name: 'Watch Video Tutorial',
        url: 'https://youtube.com/watch?v=example',
        icon: 'fa fa-video',
        target: '_blank'
      },
      {
        name: 'Email Support',
        url: 'mailto:support@example.com',
        icon: 'fa fa-envelope'
      },
      {
        name: 'Call Us',
        url: 'tel:+1-555-0123',
        icon: 'fa fa-phone'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Various link types including downloads, mailto, tel, and external links'
      }
    }
  }
};

// Multiple columns layout (composite story)
export const MultipleColumns = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 3rem; padding: 2rem; background: #f5f5f5;">
        <div>
          {{ include('footer-menu:footer-menu', {
            menu_title: 'Products',
            menu_links: [
              { name: 'Enterprise', url: '/products/enterprise' },
              { name: 'Small Business', url: '/products/small' },
              { name: 'Pricing', url: '/pricing' }
            ]
          }) }}
        </div>
        <div>
          {{ include('footer-menu:footer-menu', {
            menu_title: 'Company',
            menu_links: [
              { name: 'About Us', url: '/about' },
              { name: 'Careers', url: '/careers' },
              { name: 'Press', url: '/press' }
            ]
          }) }}
        </div>
        <div>
          {{ include('footer-menu:footer-menu', {
            menu_title: 'Support',
            menu_links: [
              { name: 'Help Center', url: '/help' },
              { name: 'Contact', url: '/contact' },
              { name: 'Status', url: '/status' }
            ]
          }) }}
        </div>
        <div>
          {{ include('footer-menu:footer-menu', {
            menu_title: 'Legal',
            menu_links: [
              { name: 'Privacy', url: '/privacy' },
              { name: 'Terms', url: '/terms' },
              { name: 'Cookies', url: '/cookies' }
            ]
          }) }}
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple footer menu components arranged in columns, typical footer layout'
      }
    }
  }
};

// Playground story for testing
export const Playground = {
  args: {
    menu_title: 'Customize Me',
    menu_links: [
      {
        name: 'First Link',
        url: '#first',
        icon: 'fa fa-star'
      },
      {
        name: 'Second Link',
        url: '#second'
      },
      {
        name: 'External Link',
        url: 'https://example.com',
        target: '_blank',
        icon: 'fa fa-external-link'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls to customize the footer menu component'
      }
    }
  }
};
*/
