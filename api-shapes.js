import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `api-shapes`
 * 
 * --api-shapes-font-family
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
          display: inline-block;
          padding: 10px;
          text-align: center;
          vertical-align: middle;
          font-family: var(--api-shapes-font-family);
          color: var(--api-shapes-color, white);
        }

        .main {
          display: inline-block;
          padding: 10px;
          min-width: 40px;
          text-align: center;
          vertical-align: middle;
          font-family: var(--api-shapes-font-family);
          color: var(--api-shapes-color, white);
        }

        .get-color    { background-color: var(--api-shapes-get-color,    blue); }
        .post-color   { background-color: var(--api-shapes-post-color,   violet); }
        .put-color    { background-color: var(--api-shapes-put-color,    red); }
        .patch-color  { background-color: var(--api-shapes-patch-color,  orange); }
        .delete-color { background-color: var(--api-shapes-delete-color, grey); }

      </style>
      <div class$="[[_colorType]]">
        <span>[[_uType(method)]]</span>
      </div>
    `;
  }
  static get properties() {
    return {
      method: {
        type: String,
        value: '',
        notify: true
      },
      _colorType: {
        type: String,
        computed: '_getClass(method)',
        notify: true
      }
    };
  }

  _getClass(method) {
    return `main ${method.toLowerCase()}-color`;

  }

  _uType(method){
    return method;
  }
}

window.customElements.define('api-shapes', ApiShapes);
