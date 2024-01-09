import type { Schema, Attribute } from '@strapi/strapi';

export interface BrunchAboutUs extends Schema.Component {
  collectionName: 'components_brunch_about_uses';
  info: {
    displayName: 'About us';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    main_image: Attribute.Media;
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

export interface BrunchMainSlider extends Schema.Component {
  collectionName: 'components_main_slider_main_sliders';
  info: {
    displayName: 'Main Slider';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    home_page_slides: Attribute.Relation<
      'brunch.main-slider',
      'oneToMany',
      'api::home-page-slide.home-page-slide'
    >;
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

export interface BrunchReservations extends Schema.Component {
  collectionName: 'components_brunch_reservations';
  info: {
    displayName: 'Reservations';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    bg_image: Attribute.Media;
    btn_text: Attribute.String;
    image_1: Attribute.Media;
    image_2: Attribute.Media;
    image_3: Attribute.Media;
  };
}

export interface BrunchSiteInfo extends Schema.Component {
  collectionName: 'components_brunch_site_infos';
  info: {
    displayName: 'Site Info';
  };
  attributes: {
    phone: Attribute.String;
    email: Attribute.String;
    address: Attribute.String;
    country: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brunch.about-us': BrunchAboutUs;
      'brunch.inspiration': BrunchInspiration;
      'brunch.main-slider': BrunchMainSlider;
      'brunch.menu': BrunchMenu;
      'brunch.reservations': BrunchReservations;
      'brunch.site-info': BrunchSiteInfo;
    }
  }
}
