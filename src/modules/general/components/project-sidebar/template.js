const template = (html, self) => function () {
  const { close } = this;
  return html`
    <aside class="sidebar">
      <h1 class="title">
        <!-- Add sidebar logo here-->
      </h1>
      <div class="spacer">
      </div>
      <navigation-wrapper>
        <side-navigation @close-sidebar=${close.bind(this)}>
          <ul class="links">
            <li><a  @click=${e => this.triggerScroll('home')}  id="home-link" class="active"><span>Home</span></a></li>
            <li><a  @click=${e => this.triggerScroll('event-details')}  id="event-details-link"><span>Event Details</span></a></li>
            <li><a  @click=${e => this.triggerScroll('agenda')}  id="agenda-link" ><span>Agenda</span></a></li>
            <li><a  @click=${e => this.triggerScroll('about-wtm') }  id="about-wtm-link" ><span>About WTM</span></a></li>
            <!-- <li><a href="https://www.meetup.com/gdgphilippines/events/258563356/" target="_blank" rel="noopener" @click="${close.bind(this)}"><span>Cloud Study Jams</span></a></li> -->
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdEh9FurGJzLTziQaoUXhjMjkKCWlkSxmlIn4fWaBS1mX7I3g/viewform
" target="_blank" rel="noopener" class="active"><span>Register to Attend</span></a></li>
          </ul>
        </side-navigation>
      </navigation-wrapper>
    </aside>
  `;
}.bind(self)();

export { template };
