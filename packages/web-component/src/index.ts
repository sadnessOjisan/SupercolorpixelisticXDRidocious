export class Supercolorpixelisticxdridocious extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
      <style>
      h1{
        display: inline;
        font-size: 5em;
        background: linear-gradient( to right,  rgba(69,179,224,1) 25%, rgba(102,51,153,1) 75% );
        -webkit-background-clip: text;
        color: transparent;
      }
      </style>
      <h1>
        afwe
      </h1>
    `;
  }
}

customElements.define(
  "supercolorpixelistic-xdridocious",
  Supercolorpixelisticxdridocious
);
