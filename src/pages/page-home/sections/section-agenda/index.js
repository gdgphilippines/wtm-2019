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
                duration: '1 hour',
                topic: ''
              }
            ]
          },
          {
            time: '8:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Energizer',
                duration: '15 min',
                topic: ''
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
                topic: 'Valenice Balace, CEO of Honesty Apps; Product Manager at JG Summit Holdings Inc.',
                speaker: "0"
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
                title: 'Tech Talk (Architecture and Process in Software Development)',
                duration: '30 min',
                topic: 'Ria Lu, Studio Director of First Foundry'
              }
            ]
          },
          {
            time: '10:30',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Morning Break',
                duration: '15 min',
                topic: ''
              }
            ]
          },
          {
            time: '10:45',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Talk',
                duration: '30 min',
                topic: 'Deanne Dalisay'
              }
            ]
          },
          {
            time: '11:15',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Sponsors Talk',
                duration: '30 min',
                topic: 'Eclaro Philippines'
              }
            ]
          },
          {
            time: '11:45',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Android Masters Launch',
                duration: '15 min',
                topic: 'GDG Philippines and Eclaro Philippines'
              }
            ]
          },
          {
            time: '12:00',
            timeSpan: 'AM',
            topics: [
              {
                title: 'Lunch',
                duration: '1 hr',
                topic: ''
              }
            ]
          },
          {
            time: '1:00',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Workshop Discussion',
                duration: '15 min',
                topic: 'GDG Philippines'
              }
            ]
          },
          {
            time: '1:15',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Workshop 1: I Am Remarkable',
                duration: '2 hr 15 min',
                topic: 'Regine Anne Quinto, Pointwest'
              },
              {
                title: 'Workshop 2: Cloud Study Jams',
                duration: '2 hr 15 min',
                topic: 'Berlyn Decena'
              },
              {
                title: 'Workshop 3: Machine Learning',
                duration: '2 hr 15 min',
                topic: 'Kristine Adlaon, 2017 Google Women Techmakers Scholar'
              },
              {
                title: 'Workshop 4: Introduce Web Toolkits to Data Visualisation in media company',
                duration: '2 hr 15 min',
                topic: 'Sujin Lee, Web Developer, Singapore Press'
              },
              {
                title: 'Workshop 5',
                duration: '2 hr 15 min',
                topic: 'Michie Ang, Co-Founder | Director, Women Who Code Manila'
              }
            ]
          },
          {
            time: '3:30',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Afternoon Break',
                duration: '30 min',
                topic: ''
              }
            ]
          },
          {
            time: '4:00',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Awarding of Certificate to Speakers and Sponsors/ Raffle/ Games',
                duration: '30 min',
                topic: ''
              }
            ]
          },
          {
            time: '4:30',
            timeSpan: 'PM',
            topics: [
              {
                title: 'Closing Keynote',
                duration: '30 min',
                topic: 'Myna Sabado'
              }
            ]
          }
        ]
      },
      speakers: {
        type: Array,
        value: [
          {
            id: 0,
            name: "{{ Speaker name here }}",
            position: "{{ position }}",
            picture_url: "{{ picture url }}",
            bio: `
Line 1
Line 2
Line 3
            `
          }
        ]
      },
      active_speaker: {
        type: Number,
        value: 0
      }
    };
  }

  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  hideModal(){
    this.shadowRoot.querySelector('.modal').classList.add('hidden')
  }

  showModal(topic){
    console.log(topic)
    if(topic.speaker != undefined)
      this.shadowRoot.querySelector('.modal').classList.remove('hidden')
  }

 
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
