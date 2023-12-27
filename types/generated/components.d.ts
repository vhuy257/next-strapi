import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brunch.test-component': BrunchTestComponent;
    }
  }
}
