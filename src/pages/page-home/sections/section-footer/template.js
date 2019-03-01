const template = (html, self) => function () {
  const { schedule } = this;
  return html`
  <div class="footer-content">
    <div style="padding-right: 0.5rem">Women Techmakers Manila 2019</div>
    <div style="padding-left: 0.5rem">
      <img src="/assets/images/gdgph.png">
    </div>
  
  </div>
  
`;
}.bind(self)();

export { template };
