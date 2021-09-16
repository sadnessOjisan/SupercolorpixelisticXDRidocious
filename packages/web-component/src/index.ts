export class Supercolorpixelisticxdridocious extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
      <style>
      h1{
        color: #ACB6E5;//非対応のブラウザでの文字色を設定
        background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8);//背景色にグラデーションを指定
        -webkit-background-clip: text;//テキストでくり抜く
        -webkit-text-fill-color: transparent;//くり抜いた部分は背景を表示
      }
      </style>
      <h1>
        aaajfeiwofjiewjfioewjfioewjfiojei
      </h1>
    `;
  }
}

customElements.define(
  "supercolorpixelistic-xdridocious",
  Supercolorpixelisticxdridocious
);
