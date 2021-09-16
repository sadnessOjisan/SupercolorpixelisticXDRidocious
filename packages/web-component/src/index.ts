export class Supercolorpixelisticxdridocious extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    const text = this.getAttribute("text");
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
      <style>
      span{
        display: inline;
        font-size: 5em;
        background:linear-gradient(
            90deg,#2e4f8b 0%,#3e589d 35%,#8f619b 60%,#d0718f 70%);
        -webkit-background-clip: text;
        color: transparent;
      }
      </style>
      <span>
        ${text}
      </span>
    `;
  }
}

customElements.define(
  "supercolorpixelistic-xdridocious",
  Supercolorpixelisticxdridocious
);
