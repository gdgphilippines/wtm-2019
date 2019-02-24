const template = (html, self) => function () {
  const { openSidebar } = this;
  return html`
    <header class="header">
      <button class="button mobile-and-tablet-only" @click=${openSidebar} aria-label="Open Sidebar">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <h1 class="title not-tablet-and-mobile">
        <span>Women Techmakers</span>
        <span style="font-weight: lighter">Manila 2019</span>
      </h1>
      <div class="spacer">
      </div>
      <navigation-wrapper>
        <ul class="links not-mobile">
          <li><a id="home-link" class="active"><span>Home</span></a></li>
          <li><a id="event-details-link"><span>Event Details</span></a></li>
          <li><a id="agenda-link"><span>Agenda</span></a></li>
          <li><a id="about-wtm-link"><span>About WTM</span></a></li>
        </ul>
      </navigation-wrapper>
    </header>
  `;
}.bind(self)();

export { template };
