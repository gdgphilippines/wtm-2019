const template = (html, self) => function () {
  const { schedule } = this;
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
            <div class="topic-detail">
              <h3 class="topic-title">${topic.title}</h3>
              <span class="duration">${topic.duration}</span>
              <span class="topic">${topic.topic}</span>
            </div>
          `)}
        </div>
      </div>
    `) : ''}

    <!-- <div class="item">
      <div class="time">
          <h2>9:20</h2>
          <h4>AM</h4>
      </div>
      <div class="detail">

      </div>
    </div>

    <div class="item">
      <div class="time">
          <h2>9:20</h2>
          <h4>AM</h4>
      </div>
      <div class="detail">
          <h3 class="topic-title">Keynote pre-show</h3>
          <span class="duration">40 minutes / Amphitheatre</span>
          <span class="topic">Inspirational Talk</span>
      </div>
    </div>

    <div class="item">
      <div class="time">
          <h2>9:20</h2>
          <h4>AM</h4>
      </div>
      <div class="detail">
          <h3 class="topic-title">Keynote pre-show</h3>
          <span class="duration">40 minutes / Amphitheatre</span>
          <span class="topic">Android</span>
      </div>
    </div>

    <div class="item">
      <div class="time">
          <h2>9:20</h2>
          <h4>AM</h4>
      </div>
      <div class="detail">
          <h3 class="topic-title">Keynote pre-show</h3>
          <span class="duration">40 minutes / Amphitheatre</span>
          <span class="topic">Firebase</span>
      </div>
    </div> -->

  </div>
`;
}.bind(self)();

export { template };
