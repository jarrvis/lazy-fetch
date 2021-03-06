/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  StFetch as StFetch
} from './components/st-fetch/st-fetch';

declare global {
  interface HTMLStFetchElement extends StFetch, HTMLElement {
  }
  var HTMLStFetchElement: {
    prototype: HTMLStFetchElement;
    new (): HTMLStFetchElement;
  };
  interface HTMLElementTagNameMap {
    "st-fetch": HTMLStFetchElement;
  }
  interface ElementTagNameMap {
    "st-fetch": HTMLStFetchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "st-fetch": JSXElements.StFetchAttributes;
    }
  }
  namespace JSXElements {
    export interface StFetchAttributes extends HTMLAttributes {
      buttonLabel?: string;
      headers?: Headers;
      method?: string;
      url?: string;
    }
  }
}

