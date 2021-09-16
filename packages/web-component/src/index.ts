export class Supercolorpixelisticxdridocious extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
      <style>
      .wrapper{
       color: red;
      }
      </style>
      <div class="wrapper">
        aaa
      </div>
    `;
  }
}

customElements.define(
  "supercolorpixelistic-xdridocious",
  Supercolorpixelisticxdridocious
);
