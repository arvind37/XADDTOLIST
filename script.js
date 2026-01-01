const nameInputEle = document.querySelector('.name-input');
const addbtnEle = document.querySelector('.addbtn');
const nonRenderedEle = document.querySelector('.non-rendered-text');
const renderedEle = document.querySelector('.rendered-details');
const renderBodyEle = document.querySelector('.render-body');

function getDetails() {
  const nameValue = nameInputEle.value;

  nonRenderedEle.classList.add('hide');
  renderedEle.classList.remove('hide');

  renderBodyEle.innerHTML += `
          <div class="render-names">
            <div class="name">${nameValue}</div>
            <button class="btn removebtn">Remove</button>
          </div>
  `;

}

addbtnEle.addEventListener('click', getDetails);

renderBodyEle.addEventListener('click', (event) => {
  if(event.target.classList.contains('removebtn')){
    const row = event.target.closest('.render-names');
    row.remove();
  }

  if(renderBodyEle.children.length === 0) {
    renderedEle.classList.add('hide');
    nonRenderedEle.classList.remove('hide');
  }
});