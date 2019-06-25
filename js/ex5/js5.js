class MoveCountry {
  constructor() {
    const listOfCountries = ['India', 'Sri Lanka', 'Afghanistan', 'Bangladesh', 'New Zealand', 'England', 'Australia', 'South Africa'];
    const container = document.getElementById('container');

    // create left container
    const leftContainer = document.createElement('div');
    leftContainer.id = 'leftContainer';
    container.appendChild(leftContainer);

    // create middle container
    const middleContainer = document.createElement('div');
    middleContainer.id = 'middleContainer';
    container.appendChild(middleContainer);

    // create add button
    const addButton = document.createElement('button');
    addButton.id = 'addButton';
    addButton.innerHTML = 'Add';
    middleContainer.appendChild(addButton);

    // create remove button
    const removeButton = document.createElement('button');
    removeButton.id = 'removeButton';
    removeButton.innerHTML = 'Remove';
    middleContainer.appendChild(removeButton);

    // create right container
    const rightContainer = document.createElement('div');
    rightContainer.id = 'rightContainer';
    container.appendChild(rightContainer);

    // create dropbox for countries
    const selectionBoxForCountries = document.createElement('select');
    selectionBoxForCountries.size = 5;
    selectionBoxForCountries.id = 'selectionBoxForCountries';
    leftContainer.appendChild(selectionBoxForCountries);
    for (let i = 0; i < 8; i += 1) {
      const boxElement = document.createElement('option');
      boxElement.value = listOfCountries[i];
      boxElement.text = listOfCountries[i];
      selectionBoxForCountries.appendChild(boxElement);
    }

    // create empty box
    const emptySelectionBox = document.createElement('select');
    emptySelectionBox.size = 5;
    emptySelectionBox.id = 'emptySelectionBox';
    rightContainer.appendChild(emptySelectionBox);
  }

  static addElement() {
    const emptyBox = document.getElementById('emptySelectionBox');
    const selectionBoxForCountries = document.getElementById('selectionBoxForCountries');

    // find index of selected option
    const indexOfCountry = selectionBoxForCountries.selectedIndex;

    // find value of option
    const optionsArray = selectionBoxForCountries.options;
    const countryName = optionsArray[indexOfCountry].value;

    // create new option
    const newOption = document.createElement('option');
    newOption.value = countryName;
    newOption.text = countryName;

    // add into other box
    emptyBox.appendChild(newOption);
    optionsArray[indexOfCountry] = null;
  }

  static removeElement() {
    const emptyBox = document.getElementById('emptySelectionBox');
    const selectionBoxForCountries = document.getElementById('selectionBoxForCountries');

    // find index of selected option
    const indexOfCountry = emptyBox.selectedIndex;

    // find value of option
    const optionsArray = emptyBox.options;
    const countryName = optionsArray[indexOfCountry].value;

    // create new option
    const newOption = document.createElement('option');
    newOption.value = countryName;
    newOption.text = countryName;

    // add into other box
    selectionBoxForCountries.appendChild(newOption);
    optionsArray[indexOfCountry] = null;
  }
}
