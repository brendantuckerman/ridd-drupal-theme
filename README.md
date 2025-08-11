#### Welcome to the Ridd Theme for Drupal Documentation ####

Author: NewTrick (Brendan Tuckerman)

TODO:
*  Add {{ attributes }} to wrapper div of each
SDC, and then test that these are passed in

### About ###

Ridd theme was designed for autismasseessementsaustralia.com.au . It is intended to be accessibile, especially for people with autism.  As such, it avoids cluttered layouts and unneeded animations. 


### Installation ###

Thanks to Alex (mophead2904) for his Vite  tooling https://github.com/mophead2904/dvitedlite/tree/main

## Theme install ##


## Storybook ##


### Dev reference ###

## Regions ##

regions:
  #...
  messages: "Message area"
  header: Header
  breadcrumb: Breadcrumb
  help: Help
  hero: Hero
  content: "Main Content"
  sidebar_first: "Sidebar first"
  sidebar_secondary: "Sidebar secondary"
  footer: Footer
  subFooter: "Sub Footer"
  disabled: "Disabled"


  ## Footer & Menu Icons ##

  Menus intended to be part of the footer should be processed forst in their 
  menu/menu-MENUNAME.html.twig first. Use menu--footer.html.twig as an example.
  
  Each menu will be added to a new column. Desktop view is set to 4 coulums (so 
  inteded for 3 menus - 'Quick Links' 'About this site', 'Contact')

  Icons for the menu items are a bit of a hack. You can use the description field
  for the class name. The theme uses font awesome Classic Regular https://fontawesome.com/search?f=classic&s=regular&ic=free&o=r. Add the full name of the icon (e.g. fa-regular fa-house) in the description field.


## CSS Layer priority ##

Set by css/layer.css:

@layer reset, base, theme, component, utilities, overrides; 

## Breakpoints ##

/* Tablet
@media screen and (min-width: 768px) and (max-width: 1023px) {

  Desktop 
  @media screen and (min-width: 1024px) {

  }

   Wide 
  @media screen and (min-width: 1440px)  {

  }
  */
