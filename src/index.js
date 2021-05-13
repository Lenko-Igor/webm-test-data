import './styles/styles.css'
import data from '../data.json'
import Header from './header.js'
import Cards from './cards.js'


const wrapCards = document.querySelector('.cards__wrapper')
const title = document.querySelector('title')
const meta = document.querySelectorAll('meta')
const header = new Header(data);
const cards = new Cards(wrapCards, data)
const contentWrap = document.querySelector('.content__wrapper')

title.innerHTML = data.page_meta.title
meta.forEach(elem => {
  if (elem.name === 'keywords') {
    elem.content = data.page_meta.meta_keywords
  }
  if (elem.name === 'description') {
    elem.content = data.page_meta.meta_description
  }
})

header.fillH1()
header.fillNavi()
cards.makeCards()

const arrContent = contentWrap.querySelectorAll('p')

arrContent.forEach((elem, i) => {
  elem.innerHTML = data.page_text[i].content
})