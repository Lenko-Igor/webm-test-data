export default class Header {
  constructor(data) {
    this.data = data;
  }

  fillH1() {
    const h1 = document.querySelector('h1')

    h1.innerHTML = this.data.page_meta.h1
  }

  fillNavi() {
    const items = document.querySelectorAll('.nav-link')

    items.forEach((elem, i) => {
      elem.innerHTML = this.data.nav[i].text
      elem.href = this.data.nav[i].href
    })
  }
}