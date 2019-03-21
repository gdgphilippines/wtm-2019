import { TemplateLite } from '@tjmonsi/element-lite/mixins/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import './sections/section-landing/index.js';
import './sections/section-event-details/index.js';
import './sections/section-agenda/index.js';
import './sections/section-map/index.js';
import './sections/section-about-wtm/index.js';
import './sections/section-csj/index.js';
import './sections/section-sponsors/index.js';
import './sections/section-footer/index.js';
import '../../modules/general/components/lazy-picture/index.js';
import { subscribe, unsubscribe } from '../../utils/state';

const { HTMLElement, customElements } = window;

class Page extends TemplateLite(HTMLElement) {
  static get is () { return 'page-home'; }

  static get properties () {
    return {
      vh: {
        type: Number
      },
      scrollCalc: {
        type: Boolean
      },
      header: {
        type: HTMLElement
      }
    };
  }

  constructor () {
    super();
    this._boundSetQuery = this._setQuery.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();

    // To prevent page reload when clicking links from navigation bar
    this.initializeQueryNavigation();

    /* To avoid wrong values (e.g. offsetTop) reported by components on initialization,
     I inserted the initialization methods in setTimeout(()=>)
     */
    setTimeout(() => {
      subscribe('query', this._boundSetQuery);
      this.header = this.shadowRoot.querySelector('project-header');

      this.components = {
        'section-landing': 0,
        'section-event-details': 0,
        'section-agenda': 0,
        'section-about-wtm': 0
      };

      for (let i in this.components) {
        this.components[i] = this.shadowRoot.querySelector(i).offsetTop;
      }
      this.scrollCalc = false;

      // Early check (Temporary Hack)
      const vh = window.innerHeight;
      const scrollPosY = window.pageYOffset || this.scrollTop;
      this.header = this.shadowRoot.querySelector('project-header');
      if (scrollPosY >= vh - 50) {
        this.header.fill();
      } else {
        this.header.unfill();
      }

      window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
          // Scroll Method (Temporary Hack)
          if (!this.scrollCalc) {
            this.scrollCalc = true;
            const vh = window.innerHeight;
            const scrollPosY = window.pageYOffset || this.scrollTop;
            this.header = this.shadowRoot.querySelector('project-header');
            if (scrollPosY >= vh - 50) {
              this.header.fill();
            } else {
              this.header.unfill();
            }
            for (let i in this.components) {
              if (scrollPosY > this.components[i] - 100) {
                this.header.setActive(i);
              }
            }
            setTimeout(() => {
              this.scrollCalc = false;
            }, 125);
          }
        });
      });
    }, 250);
  }

  // To prevent page reload when clicking links from navigation bar
  initializeQueryNavigation () {
    window.onload = (e) => {
      var urlString = window.location.href;
      var url = new URL(urlString);
      var page = url.searchParams.get('id');

      if (page != null) {
        this.navigate(page);
      }
      
    };
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('query', this._boundSetQuery);
  }

  _setQuery ({ id }) {
    // initializeQueryNavigation as alternative to prevent page reload when clicking links from navigation bar
    //  this.navigate(id);
  }

  navigate (string) {
    if (string) {
      const el = this.shadowRoot.querySelector(`.${string}`);
      if (el) el.scrollIntoView();
    }
    if (this.scroll) {
      this.scroll();
    }
  }

  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
