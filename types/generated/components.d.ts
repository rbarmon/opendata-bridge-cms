import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectRecipe extends Schema.Component {
  collectionName: 'components_project_recipes';
  info: {
    displayName: 'recipe';
    icon: 'file';
    description: '';
  };
  attributes: {
    prompt: Attribute.Text;
    script: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.recipe': ProjectRecipe;
    }
  }
}
