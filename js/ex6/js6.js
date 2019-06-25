class ContainerClass {
  constructor () {
    let container = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)
    let addButton = document.createElement('button')
    addButton.innerHTML = 'Add a Div'
    addButton.id = 'add_button'
    container.appendChild(addButton)
  }
  addDiv () {
    let newDiv = document.createElement('div')
    newDiv.classList.add('inner')
    newDiv.appendChild(document.createTextNode(ContainerClass.kount))
    newDiv.addEventListener('click', function () {
      alert(this.innerHTML)
    })
    ContainerClass.kount++
    document.getElementsByClassName('container')[0].appendChild(newDiv)
  }
  // using closure concept
  // addDiv () {
  //   let kount = 0
  //   return () => {
  //     let newDiv = document.createElement('div')
  //     newDiv.classList.add('inner')
  //     newDiv.appendChild(document.createTextNode(kount))
  //     newDiv.addEventListener('click', function () {
  //       alert(this.innerHTML)
  //     })
  //     kount++
  //     document.getElementsByClassName('container')[0].appendChild(newDiv)
  //   }
  // }
}
ContainerClass.kount = 0
