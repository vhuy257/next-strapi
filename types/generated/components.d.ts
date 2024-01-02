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
  };
}

export interface BrunchTestComponent extends Schema.Component {
  collectionName: 'components_brunch_test_components';
  info: {
    displayName: 'TestComponent';
    icon: 'alien';
  };
  attributes: {
    test: Attribute.String;
    pass: Attribute.Password;
    dropdown: Attribute.Enumeration<['morning', 'evening', 'lunch']>;
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
      'brunch.test-component': BrunchTestComponent;
      'main-slider.main-slider': MainSliderMainSlider;
    }
  }
}
