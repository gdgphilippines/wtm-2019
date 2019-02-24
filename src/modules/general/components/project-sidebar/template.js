const template = (html, self) => function () {
  const { close } = this;
  return html`
    <aside class="sidebar">
      <h1 class="title">
        Logo
      </h1>
      <div class="spacer">
      </div>
      <navigation-wrapper>
        <side-navigation @close-sidebar=${close.bind(this)}>
          <ul class="links">
            <li><a id="home-link" @click="${close.bind(this)}" class="active"><span>Home</span></a></li>
            <li><a id="event-details-link" @click="${close.bind(this)}"><span>Event Details</span></a></li>
            <li><a id="agenda-link" @click="${close.bind(this)}"><span>Agenda</span></a></li>
            <li><a id="about-wtm-link" @click="${close.bind(this)}"><span>About WTM</span></a></li>
          </ul>
          <ul class="links">
            <li><a id="home-link" class="active"><span>Register to Attend</span></a></li>
            <li><a id="home-link" class="active"><span>Apply as Speaker</span></a></li>
          </ul>
        </side-navigation>
      </navigation-wrapper>
    </aside>
  `;
}.bind(self)();

export { template };
