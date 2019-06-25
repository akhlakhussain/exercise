class HiddenCheckboxes {
  constructor() {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    const parentCheckboxes = ['Color', 'Drinks', 'Movies', 'Bikes'];
    const childCheckboxes = [['Red', 'Yellow', 'Green', 'Blue'], ['Whisky', 'Brandy', 'Vodka', 'Rum'],
      ['Die Hard IV', 'Pirates Of The Caribbean', 'Veer-Zara', 'Kal Ho Na Ho'], ['KTM', 'Royal Enfield', 'TVS Apache', 'Yamah YZF']];
    for (let i = 0; i < 4; i += 1) {
      const parentCheckbox = document.createElement('input');
      parentCheckbox.type = 'checkbox';
      parentCheckbox.classList.add('parentCheckbox');
      parentCheckbox.value = parentCheckboxes[i];
      parentCheckbox.name = 'parent';
      const labelTag = document.createElement('label');
      labelTag.appendChild(document.createTextNode(parentCheckboxes[i]));
      labelTag.forHTML = parentCheckbox;
      container.appendChild(parentCheckbox);
      container.appendChild(labelTag);
      container.appendChild(document.createElement('br'));
      const childContainer = document.createElement('div');
      childContainer.id = parentCheckboxes[i];
      childContainer.style.display = 'none';
      container.appendChild(childContainer);
      for (let j = 0; j < 4; j += 1) {
        const childCheckbox = document.createElement('input');
        childCheckbox.type = 'checkbox';
        childCheckbox.name = parentCheckboxes[i];
        const childLabel = document.createElement('label');
        childLabel.appendChild(document.createTextNode(childCheckboxes[i][j]));
        childLabel.forHTML = childCheckbox;
        childContainer.appendChild(childCheckbox);
        childContainer.appendChild(childLabel);
        childContainer.appendChild(document.createElement('br'));
      }
    }
  }

  showHiddenChilds() {
    const selectedCheckbox = document.getElementById(this.value);
    const container = document.getElementById('container');
    if (this.checked === true) {
      selectedCheckbox.style.display = 'block';
      if (this.value === 'Color'){
      	container.scrollTo(0,2);
      } else if (this.value === 'Drinks'){
      	container.scrollTo(0,22);
      } else if (this.value === 'Movies'){
      	container.scrollTo(0,44);
      } else {
      	container.scrollTo(0,62);
      }

    } else {
      for (let i = 0; i < selectedCheckbox.childNodes.length; i += 1) {
        selectedCheckbox.childNodes[i].checked = false;
      }
      selectedCheckbox.style.display = 'none';
    }
  }
}
