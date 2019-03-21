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
                speaker: 6
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
                topic: 'Engr. Charlene V. San Buenaventura, MSc., Trends',
                speaker: 1
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
                topic: 'Ria Lu, Studio Director of First Foundry',
                speaker: 3
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
                topic: 'Deanne Dalisay',
                speaker: 7
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
                topic: 'Regine Anne Quinto, Pointwest',
                speaker: 5
              },
              {
                title: 'Workshop 2: Cloud Study Jams',
                duration: '2 hr 15 min',
                topic: 'Berlyn Decena',
                speaker: 4
              },
              {
                title: 'Workshop 3: Machine Learning',
                duration: '2 hr 15 min',
                topic: 'Kristine Adlaon, 2017 Google Women Techmakers Scholar',
                speaker: 9
              },
              {
                title: 'Workshop 4: Introduce Web Toolkits to Data Visualisation in media company',
                duration: '2 hr 15 min',
                topic: 'Sujin Lee, Web Developer, Singapore Press',
                speaker: 2
              },
              {
                title: 'Workshop 5',
                duration: '2 hr 15 min',
                topic: 'Michie Ang, Co-Founder | Director, Women Who Code Manila',
                speaker: 8
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
            id: 1,
            name: 'Charlene San Buenaventura',
            position: 'Data Scientist, Trends',
            pictureUrl: 'Charlene_San_Buenaventura.jpg',
            bio: 'I am a Data Scientist who specializes in Deep Learning involving Machine Vision. I worked on projects in Video Analytics, Ambient-Assisted Living for the elderly, and Inertial Sensors. I am a former instructor at the University of Santo Tomas where i gave several lectures on Deep Neural Networks. In my free time, I walk around the campus, pet animals, and hang out with friends.'
          },
          {
            id: 2,
            name: 'Sujin Lee',
            position: 'Web Developer, Singapore Press Holdings Ltd.',
            pictureUrl: 'Sujin_Lee.jpg',
            bio: 'Sujin is  currently working as a web developer at The Strait Times in Singapore. Her goal is to inspire the world with creative interactive visualisations built with code.  She has been promoting diversity by supporting women to advance in the IT industry and tech communities with Women Who Code Seoul network.'
          },
          {
            id: 3,
            name: 'Ria Lu',
            position: 'Studio Director, First Foundry Manila',
            pictureUrl: 'Ria_Lu.jpg',
            bio: 'I run First Foundry Manila, a software development company involved in various industries including games, retail and healthcare. I am also the Executive Director of the Game Developers Association of the Philippines and help in the effort to grow the industry into one that is profitable and globally-recognized. When I\'m not in tech or games, I do Japanese flower arrangement.'
          },
          {
            id: 4,
            name: 'Berlyn Anne Decena',
            position: 'Masters in Technology Management, UP Diliman',
            pictureUrl: 'Berlyn_Anne_Decena.jpg',
            bio: 'Berlyn took up her Bachelor\'s Degree in Computer Science in the University of the Philippines Diliman. Alongside her work, she went back to UP to pursue further honor and excellence by taking up Masters in Technology Management. With published outputs both on the academic and corporate side, she continues her passion for innovation as a Technology Manager by building solutions for digital transformation.'
          },
          {
            id: 5,
            name: 'Regine Anne Quinto',
            position: 'Learning and Development Specialist, Pointwest Innovations Corp',
            pictureUrl: 'Regine_Anne_Quinto.jpeg',
            bio: 'Regine Anne Quinto is an end-to-end learning solutions provider. She specializes in assessing the learning needs of an organization as well as developing, delivering, and evaluating learning interventions. Her passion is to inspire people to live courageously so they can be the best of who they are. '
          },
          {
            id: 6,
            name: 'Valenice Balace',
            position: 'Head of Product Management for JG Summit Holdings',
            pictureUrl: 'Valenice_Balace.jpg',
            bio: 'I\'ve been building applications since I was 19 :)'
          },
          {
            id: 7,
            name: 'Deanne Faye Dalisay',
            position: 'Former Head of Games at Xurpas',
            pictureUrl: 'Deanne_Dalisay.jpg',
            bio: 'Formerly lead a 38-man Android games team at Xurpas, from operations to product and project management. Delegate to Casual Connect since 2015 and actively advocates continuous learning via Project Athena, a small mentoring session for women in Makati. Still plays Plants vs. Zombies on my phone every day and finds Tsum Tsum cute and addicting.'
          },
          {
            id: 8,
            name: 'Michie Ang',
            position: 'Director, Women Who Code Manila',
            pictureUrl: 'Michie_Ang.png',
            bio: 'Michie is the Director of Women Who Code, Manila, a global non-profit organization dedicated to inspire women to excel in their tech careers. She judges, mentors, organizes hackathons and tech events. She believes that everyone should be given an opportunity to learn programming if they want too. That\'s why she helps schools integrate coding to their curriculum and also goes around public schools to introduce programming to grade 4 and up students thru her Get Ready to Code Program.'
          },
          {
            id: 9,
            name: 'Kristine Adlaon',
            position: 'De La Salle University',
            pictureUrl: 'Kristine_Mae_Adlaon.jpg',
            bio: 'A PhD in Computer Science student at De La Salle University with research interest on Natural Language Processing (NLP). Currently, she is working on Machine Translation and Word Representation. She was selected as Google Women Techmaker scholar last 2017 with the privilege to interact with other strong WTM scholars in the Asia Pacific at Google Korea. Joining her workshop will let you experience the fun and amazing field of Machine Learning for NLP with a focus on learning the whys and hows of Word Embeddings. '
          }
        ]
      },
      activeSpeaker: {
        type: Number,
        value: 1
      }
    };
  }

  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  hideModal () {
    this.shadowRoot.querySelector('.modal').classList.add('hidden');
  }

  showModal (speaker) {
    this.activeSpeaker = speaker;
    this.shadowRoot.querySelector('.modal').classList.remove('hidden');
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
