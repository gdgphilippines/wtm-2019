import { TemplateLite } from '@tjmonsi/element-lite/mixins/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends TemplateLite(HTMLElement) {
  static get is () { return 'section-landing'; }

  static get renderer () { return render; }

  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback();

    this.runSlideshow()
  }

  runSlideshow(){
    var current = 0,
    slides = this.shadowRoot.querySelectorAll("lazy-picture");

    setInterval(function() {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
      }
      current = (current != slides.length - 1) ? current + 1 : 0;
      slides[current].style.opacity = 1;
    }, 3000);
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
