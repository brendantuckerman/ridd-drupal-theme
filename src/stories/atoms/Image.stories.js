
export default {
  title: 'Ridd/Atoms/Images',
    tags: ['autodocs'],
  argTypes: {
    source: {
      control: 'text',
      description: 'The url for the image',
    },
    variant: {
      control: 'text',
      description: 'Label to control shape of image'
    },

  }
}

const Template =  ({source, variant}) => {
  const classes = [
    'ridd-image',
    `ridd-image--${variant}`,
  ].filter(Boolean).join(' ');

  return `<img src="${source}" class="${classes}"></img>`
}

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  source: "../../../images/theme-logo.jpg",
  variant: "circle"
}
