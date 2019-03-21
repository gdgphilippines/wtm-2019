const template = html => html`
<a name="landing"></a>
<div class="revealer"></div>
<div class="slideshow-container">
  <lazy-picture
      class="slideshow-banner"
      cover center
      src="/assets/images/accenture.jpg"
      alt="Accenture">
  </lazy-picture>
  <lazy-picture
      class="slideshow-banner"
      cover center
      src="/assets/images/participants.jpg"
      alt="WTM Participants">
  </lazy-picture>
  <lazy-picture
      class="slideshow-banner"
      cover center
      src="/assets/images/speakers.jpg"
      alt="WTM Speakers">
  </lazy-picture>
</div>
<div class="overlay">
</div>
<div class="content">
  <div class="overlay-content">
    <p class="landing-title">
      Google's <b>Women Techmakers</b> program provides visibility,
      community, and resources for women in technology
    </p>
    <a class="button" target="_blank" rel="noopener" href="https://docs.google.com/forms/d/e/1FAIpQLSdEh9FurGJzLTziQaoUXhjMjkKCWlkSxmlIn4fWaBS1mX7I3g/viewform
">
      Register
    </a>
    <!-- https://www.meetup.com/gdgphilippines/events/258563356/ -->
  </div>
</div>


`;

export { template };
