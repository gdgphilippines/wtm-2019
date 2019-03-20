const template = (html, self) => function () {
  const { schedule, speakers, active_speaker } = this;
  return html`

  <a name="agenda"></a>
  <div class="agenda-content">
    ${schedule ? schedule.map(item => html`
      <div class="item">
        <div class="time">
          <h2>${item.time}</h2>
          <h4>${item.timeSpan}</h4>
        </div>
        <div class="detail">
          ${item.topics.map(topic => html`
            <a class="topic-detail" @click="${e => this.showModal(topic)}">
              <h3 class="topic-title">${topic.title}</h3>
              <span class="duration">${topic.duration}</span>
              <span class="topic">${topic.topic != "" ? '/' : ''} ${topic.topic}</span>
            </a>
          `)}
        </div>
      </div>
      </a>
    `) : ''}

  </div>
  <div class="modal hidden">
    <header>
      <div class="speaker-photo"></div>
      <div class="speaker-main-detail">
        <h2 class="speaker-name">${speakers ? speakers.find(item => item.id == active_speaker).name:''}</h2>
        <h4 class="speaker-position">${speakers ? speakers.find(item => item.id == active_speaker).position:''}</h4>
      </div>
      <div class="close-button">
        <a @click="${this.hideModal.bind(this)}">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#ffffff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </a>
      </div>
    </header>
    <div class="speaker-details">
      <p style="white-space: pre-wrap">
      ${speakers ? speakers.find(item => item.id == active_speaker).bio:''}
      </p>
    </div>

  </div>
`;
}.bind(self)();

export { template };
