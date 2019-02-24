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

      <ul class="links not-mobile">
        <li class="link-item"><a href="/?id=home" data-id="section-landing" class="link active"><span class="span">Home</span></a></li>
        <li class="link-item"><a href="/?id=event-details" data-id="section-event-details" class="link"><span class="span">Event Details</span></a></li>
        <li class="link-item"><a href="/?id=agenda" data-id="section-agenda" class="link"><span class="span">Agenda</span></a></li>
        <li class="link-item"><a href="/?id=about-wtm" data-id="section-about-wtm" class="link"><span class="span">About WTM</span></a></li>
        <li class="link-item"><a href="https://www.meetup.com/gdgphilippines/events/258563356/" rel="noopener" target="_blank" class="link"><span class="span">Cloud Study Jams</span></a></li>
      </ul>

    </header>
  `;
}.bind(self)();

export { template };
