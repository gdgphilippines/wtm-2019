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
          <li><a href="/?id=home-link" class="active">Home</a></li>
          <li><a href="/?id=event-details-link">Event Details</a></li>
          <li><a href="/?id=agenda-link">Agenda</a></li>
          <li><a href="/?id=about-wtm-link">About WTM</a></li>
        </ul>
      </navigation-wrapper>
    </header>
  `;
}.bind(self)();

export { template };
