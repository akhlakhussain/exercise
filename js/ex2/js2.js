class CheckBoxesClass {
  constructor () {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'None']
    let container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container)
    for (let i = 0; i < 8; i++) {
      let inputTag = document.createElement('input')
      inputTag.type = 'checkbox'
      inputTag.classList.add('checkBoxes')
      inputTag.value = week[i]
      inputTag.name = 'checkBox'
      let labelForCheckbox = document.createElement('label')
      labelForCheckbox.appendChild(document.createTextNode(week[i]))
      labelForCheckbox.forHTML = inputTag
      container.appendChild(inputTag)
      container.appendChild(labelForCheckbox)
      container.appendChild(document.createElement('br'))
    }
  }
  static increaseKount () {
    this.kount++
  }
  static decreaseKount () {
    this.kount--
  }
  static getKount () {
    return this.kount
  }
  static setKount () {
    this.kount = 0
  }
  checkboxSelector () {
    if (CheckBoxesClass.selectedCheckboxes.indexOf(this) !== -1) {
      let index = CheckBoxesClass.selectedCheckboxes.indexOf(this)
      CheckBoxesClass.selectedCheckboxes[index].checked = false
      CheckBoxesClass.selectedCheckboxes.splice(index, 1)
      CheckBoxesClass.decreaseKount()
    } else if (this.value === 'None') {
      CheckBoxesClass.noneCheckbox = this
      if (CheckBoxesClass.getKount() > 0) {
        for (let i = 0; i < CheckBoxesClass.selectedCheckboxes.length; i++) {
          CheckBoxesClass.selectedCheckboxes[i].checked = false
        }
        CheckBoxesClass.selectedCheckboxes = []
      }
      CheckBoxesClass.setKount()
    } else {
      if (CheckBoxesClass.noneCheckbox !== '') {
        CheckBoxesClass.noneCheckbox.checked = false
      } if (CheckBoxesClass.getKount() < 3) {
        CheckBoxesClass.increaseKount()
        CheckBoxesClass.selectedCheckboxes.push(this)
      } else {
        this.checked = false
        alert('Only 3 days can be selected.You have already selected ' + CheckBoxesClass.selectedCheckboxes[0].value +
         ',' + CheckBoxesClass.selectedCheckboxes[1].value + ' and ' + CheckBoxesClass.selectedCheckboxes[2].value)
      }
    }
  }
}
CheckBoxesClass.kount = 0
CheckBoxesClass.selectedCheckboxes = []
CheckBoxesClass.noneCheckbox = ''
