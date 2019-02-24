import { TemplateLite } from '@tjmonsi/element-lite/mixins/template-lite.js';
import { PropertiesLite } from '@tjmonsi/element-lite/mixins/properties-lite.js';
import { render, html } from 'lit-html';
import { subscribe, unsubscribe } from '../../../../utils/state.js';
import { template } from './template.js';
import '../project-sidebar/index.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(PropertiesLite(HTMLElement)) {
  static get is () { return 'project-header'; }

  static get renderer () { return render; }

  constructor () {
    super();
    this._boundSetRoute = this._setRoute.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    subscribe('route', this._boundSetRoute);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('route', this._boundSetRoute);
  }

  set route (route) {
    this.__route = route;
    // this.requestRender();
    this.style.display = route === '/' ? '' : '';
  }

  get route () {
    return this.__route;
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  _setRoute (route) {
    this.route = route;
  }

  async openSidebar () {
    await import('../project-sidebar/index.js');
    const sidebar = document.querySelector('project-sidebar');
    setTimeout(() => sidebar.open(), 50);
  }

  async closeSidebar () {
    await import('../project-sidebar/index.js');
    const sidebar = document.querySelector('project-sidebar');
    sidebar.close();
  }

  fill () {
    const header = this.shadowRoot.querySelector('.header');
    header.classList.add('filled');
  }

  unfill () {
    const header = this.shadowRoot.querySelector('.header');
    header.classList.remove('filled');
  }

  setActive (active) {
    const links = this.shadowRoot.querySelectorAll('.links .link-item .link');
    for (let i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-id') === active) {
        links[i].classList.add('active');
      } else {
        links[i].classList.remove('active');
      }
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
