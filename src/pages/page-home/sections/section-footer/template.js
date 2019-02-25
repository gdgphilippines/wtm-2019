const template = (html, self) => function () {
  const { schedule } = this;
  return html`
  <div class="footer-content">
    <div>Women Techmakers Manila 2019</div>
    <div>
      <img src="/assets/images/gdgph.png">
    </div>
  
  </div>
  
`;
}.bind(self)();

export { template };
