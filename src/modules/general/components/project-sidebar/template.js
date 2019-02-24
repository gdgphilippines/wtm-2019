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
            <li><a href="/?id=home" id="home-link" @click="${close.bind(this)}" class="active"><span>Home</span></a></li>
            <li><a href="/?id=event-details" id="event-details-link" @click="${close.bind(this)}"><span>Event Details</span></a></li>
            <li><a href="/?id=agenda" id="agenda-link" @click="${close.bind(this)}"><span>Agenda</span></a></li>
            <li><a href="/?id=about-wtm" id="about-wtm-link" @click="${close.bind(this)}"><span>About WTM</span></a></li>
            <li><a href="https://www.meetup.com/gdgphilippines/events/258563356/" target="_blank" rel="noopener" @click="${close.bind(this)}"><span>Cloud Study Jams</span></a></li>
            <li><a href="https://docs.google.com/forms/d/1OFo4v-vKU_FNRr8Owuo0mCZMAkHHKl7rbyfumOSDb-A/edit?usp=drive_open" target="_blank" rel="noopener" class="active"><span>Register to Attend</span></a></li>
          </ul>
        </side-navigation>
      </navigation-wrapper>
    </aside>
  `;
}.bind(self)();

export { template };
