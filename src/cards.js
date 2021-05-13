export default class Cards {
  constructor(wrap, data) {
    this.data = data;
    this.wrap = wrap;
  }

  makeCards() {
    const arrCards = this.data.stock.map((elem, i) => {
      const imgSrc = `../src/images/${elem.image}`
      return `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <a href=${elem.href} class="col-md-4">
            <img src="${imgSrc}" alt="${elem.title}">
          </a href="">
          <div class="col-md-8">
            <div class="card-body">
              <div class="card-header">
                <h5 class="card-title">${elem.title}</h5>
                <h4 class="card-price">${elem.price} ${elem.price_currency}</h4>              
              </div>
              <div class="card-main">
                <h6 class="card-main__title">${elem.make} ${elem.model}</h6>
                <p class="card-text">${elem.type}</p>   
                <ul>
                  <li class="card-text">
                    <p>power: <span>${elem.power} ${elem.power_measure}</span></p>
                  </li>
                  <li class="card-text">
                    <p>payload: <span>${elem.payload}</span></p>
                  </li>
                  <li class="card-text">
                    <p>gross weight: <span>${elem.gross_weight}</span></p>
                  </li>
                </ul>
              </div>
              <div class="card-footer">
                <ul class="card-footer__items">
                  <li class="card-text"><small class="text-muted">${elem.year}</small></li>  
                  <li class="card-text"><small class="text-muted">${elem.mileage} ${elem.mileage_measure}</small></li> 
                  <li class="card-text"><small class="text-muted">${elem.axle_configuration}</small></li>               
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    }).join('')

    this.wrap.innerHTML = arrCards 
  }
}