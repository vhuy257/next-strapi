import type { Schema, Attribute } from '@strapi/strapi';

export interface BrunchAboutUs extends Schema.Component {
  collectionName: 'components_brunch_about_uses';
  info: {
    displayName: 'about-us';
    description: '';
  };
  attributes: {
    main_image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.RichText;
    image_1: Attribute.Media;
    image_2: Attribute.Media;
    image_3: Attribute.Media;
  };
}

export interface BrunchInspiration extends Schema.Component {
  collectionName: 'components_brunch_inspirations';
  info: {
    displayName: 'inspiration';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    swiper_inspiration: Attribute.Media;
    description: Attribute.RichText;
    button_gallery: Attribute.String;
  };
}

export interface BrunchMenu extends Schema.Component {
  collectionName: 'components_brunch_menus';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    menu_image: Attribute.Media;
    bg_image_1: Attribute.Media;
    bg_image_2: Attribute.Media;
    menu_items: Attribute.Relation<
      'brunch.menu',
      'oneToMany',
      'api::menu-item.menu-item'
    >;
  };
}

export interface MainSliderMainSlider extends Schema.Component {
  collectionName: 'components_main_slider_main_sliders';
  info: {
    displayName: 'Main Slider';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    home_page_slides: Attribute.Relation<
      'main-slider.main-slider',
      'oneToMany',
      'api::home-page-slide.home-page-slide'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brunch.about-us': BrunchAboutUs;
      'brunch.inspiration': BrunchInspiration;
      'brunch.menu': BrunchMenu;
      'main-slider.main-slider': MainSliderMainSlider;
    }
  }
}
