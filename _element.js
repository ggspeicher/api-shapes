import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `api-shapes`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ApiShapes extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'api-shapes',
      },
    };
  }
}

window.customElements.define('api-shapes', ApiShapes);
