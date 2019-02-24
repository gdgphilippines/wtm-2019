import { TemplateLite } from '@tjmonsi/element-lite/mixins/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import './sections/section-landing/index.js';
import './sections/section-event-details/index.js';
import './sections/section-agenda/index.js';
import './sections/section-map/index.js';
import './sections/section-about-wtm/index.js';
import './sections/section-sponsors/index.js';
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
      homeTop: {
        type: Number
      },
      eventDetailsTop: {
        type: Number
      },
      agendaTop: {
        type: Number
      },
      aboutWtmTop: {
        type: Number
      }
    };
  }

  constructor () {
    super();
    this._boundSetQuery = this._setQuery.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    subscribe('query', this._boundSetQuery);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('query', this._boundSetQuery);
  }

  _setQuery ({ id }) {
    this.navigate(id);
  }

  navigate (string) {
    this.shadowRoot.querySelector(string).scrollIntoView();
  }

  // initializeProperties(){


  //     this.header = this.shadowRoot.querySelector('project-header').shadowRoot.querySelector('.header')
  //     this.home = this.header.querySelector('#home-link')
  //     this.eventDetails = this.header.querySelector('#event-details-link')
  //     this.agenda = this.header.querySelector('#agenda-link')
  //     this.aboutWtm = this.header.querySelector('#about-wtm-link')

  //     this.home2 = document.querySelector('project-sidebar').shadowRoot.querySelector('#home-link')
  //     this.eventDetails2 = document.querySelector('project-sidebar').shadowRoot.querySelector('#event-details-link')
  //     this.agenda2 = document.querySelector('project-sidebar').shadowRoot.querySelector('#agenda-link')
  //     this.aboutWtm2 = document.querySelector('project-sidebar').shadowRoot.querySelector('#about-wtm-link')

  //     this.home.addEventListener("click",()=>{
  //       this.navigate('section-landing')
  //     })
  //     this.eventDetails.addEventListener("click",()=>{
  //       this.navigate('section-event-details')
  //     })
  //     this.agenda.addEventListener("click",()=>{
  //       this.navigate('section-agenda')
  //     })
  //     this.aboutWtm.addEventListener("click",()=>{
  //       this.navigate('section-about-wtm')
  //     })

  //     this.home2.addEventListener("click",()=>{
  //       this.navigate('section-landing')
  //     })
  //     this.eventDetails2.addEventListener("click",()=>{
  //       this.navigate('section-event-details')
  //     })
  //     this.agenda2.addEventListener("click",()=>{
  //       this.navigate('section-agenda')
  //     })
  //     this.aboutWtm2.addEventListener("click",()=>{
  //       this.navigate('section-about-wtm')
  //     })
    //   this.vh = this.clientHeight


    // // Navigation Anchors

    //   this.homeTop = this.shadowRoot.querySelector('section-landing').offsetTop
    //   this.eventDetailsTop = this.shadowRoot.querySelector('section-event-details').offsetTop
    //   this.agendaTop = this.shadowRoot.querySelector('section-agenda').offsetTop
    //   this.aboutWtmTop = this.shadowRoot.querySelector('section-about-wtm').offsetTop

  // }

  // constructor () {
  //   super();
  //   window.addEventListener('resize', () => {
  //     this.initializeProperties()
  //   });

  //   setTimeout(()=>{
  //     try{
  //       this.initializeProperties()
  //     }
  //     catch{

  //     }
  //   },500)

    // this.addEventListener('scroll', function () {

    //   // Header Navigation
    //   if (this.header==undefined) {
    //   this.initializeProperties()
    //   }

    //   // Get current scroll position
    //   var scrollPosY = window.pageYOffset | this.scrollTop;

    //   // Toggle Header Navigation Style
    //   if (scrollPosY >= this.vh)
    //     this.header.classList.add('filled')
    //   else
    //     this.header.classList.remove('filled')

    //   // Toggle Active Links
    //   if (scrollPosY >= this.aboutWtmTop - 50) {
    //     this.home.classList.remove('active')
    //     this.eventDetails.classList.remove('active')
    //     this.agenda.classList.remove('active')
    //     this.aboutWtm.classList.add('active')
    //   }
    //   else if (scrollPosY >= this.agendaTop - 50) {
    //     this.home.classList.remove('active')
    //     this.eventDetails.classList.remove('active')
    //     this.agenda.classList.add('active')
    //     this.aboutWtm.classList.remove('active')
    //   }
    //   else if (scrollPosY >= this.eventDetailsTop - 50) {
    //     this.home.classList.remove('active')
    //     this.eventDetails.classList.add('active')
    //     this.agenda.classList.remove('active')
    //     this.aboutWtm.classList.remove('active')
    //   }
    //   else {
    //     this.home.classList.add('active')
    //     this.eventDetails.classList.remove('active')
    //     this.agenda.classList.remove('active')
    //     this.aboutWtm.classList.remove('active')
    //   }
    // })
  // }

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
