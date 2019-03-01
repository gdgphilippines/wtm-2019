import { TemplateLite } from '@tjmonsi/element-lite/mixins/template-lite.js';
import { PropertiesLite } from '@tjmonsi/element-lite/mixins/properties-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends TemplateLite(PropertiesLite(HTMLElement)) {
  static get is () { return 'section-footer'; }


  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
