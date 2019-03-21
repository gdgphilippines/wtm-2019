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
    <a onclick="window.scrollTo(0, window.innerHeight)" class="button">KNOW MORE ABOUT THE EVENT</a>
    <!-- https://www.meetup.com/gdgphilippines/events/258563356/ -->
  </div>
</div>


`;

export { template };
