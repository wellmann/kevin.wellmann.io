customElements.define('current-year',
  class extends HTMLElement {
    constructor() {
      super();

      this.textContent = new Date().getFullYear();
    }
  }
);