import { TemplateLite } from '@tjmonsi/element-lite/mixins/template-lite.js';
import { PropertiesLite } from '@tjmonsi/element-lite/mixins/properties-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends TemplateLite(PropertiesLite(HTMLElement)) {
  static get is () { return 'section-agenda'; }

  static get properties () {
    return {
      schedule: {
        type: Array,
        value: [
          {
            time: '7:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Registration',
                duration: '1 hour'
              }
            ]
          },
          {
            time: '8:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Energizer',
                duration: '15 min'
              }
            ]
          },
          {
            time: '8:15',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Opening Remarks, Keynote',
                duration: '15 min',
                topic: ''
              }
            ]
          },
          {
            time: '8:30',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Inspirational Talk',
                duration: '30 min',
                topic: 'Sujin Lee'
              }
            ]
          },
          {
            time: '9:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Sponsors Talk',
                duration: '30 min',
                topic: '(Accenture Philippines)'
              }
            ]
          },
          {
            time: '9:30',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Tech Talk (Data Science)',
                duration: '30 min',
                topic: 'Engr. Charlene V. San Buenaventura, MSc., Trends'
              }
            ]
          },
          {
            time: '10:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Inspirational Talk',
                duration: '30 min',
                topic: 'Valenice Balace, CEO of Honesty Apps'
              }
            ]
          },
          {
            time: '10:30',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Morning Break',
                duration: '15 min'
              }
            ]
          },
          {
            time: '10:45',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Workshop 1: I Am Remarkable',
                duration: '1 hr, 15 min',
                topic: 'Regine Anne Quinto, Pointwest'
              }
            ]
          },
          {
            time: '12:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Lunch',
                duration: '1 hr'
              }
            ]
          },
          {
            time: '1:00',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Tech Talk',
                duration: '30 min',
                topic: 'Ria Lu, Studio Director of First Foundry'
              }
            ]
          },
          {
            time: '1:30',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Workshop 2: Cloud Study Jams',
                duration: '2 hr',
                topic: 'Bernaline Decena'
              },
              {
                title: 'Workshop 3: Machine Learning',
                duration: '2 hr',
                topic: 'Kristine Adlaon'
              },
              {
                title: 'Workshop 4: Introduce Web Toolkits to Data Visualisation in media company',
                duration: '2 hr',
                topic: 'Sujin Lee'
              },
              {
                title: 'Workshop 5',
                duration: '2 hr',
                topic: 'Michelle Ang'
              }
            ]
          },
          {
            time: '3:30',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Afternoon Break',
                duration: '30 min'
              }
            ]
          },
          {
            time: '4:00',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Awarding of Certificate to Speakers and Sponsors/ Raffle/ Games',
                duration: '30 min'
              }
            ]
          },
          {
            time: '4:30',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Closing Keynote',
                duration: '30 min'
              }
            ]
          }
        ]
      }
    };
  }

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
