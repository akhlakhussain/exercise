class MoveCountry {
  constructor() {
    const listOfCountries = [
      "India",
      "Sri Lanka",
      "Afghanistan",
      "Bangladesh",
      "New Zealand",
      "England",
      "Australia",
      "South Africa"
    ];
    const container = document.getElementById("container");

    // create left container
    const leftContainer = document.createElement("div");
    leftContainer.id = "leftContainer";
    container.appendChild(leftContainer);

    // create middle container
    const middleContainer = document.createElement("div");
    middleContainer.id = "middleContainer";
    container.appendChild(middleContainer);

    // create add button
    const addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.innerHTML = "Add";
    middleContainer.appendChild(addButton);

    // create remove button
    const removeButton = document.createElement("button");
    removeButton.id = "removeButton";
    removeButton.innerHTML = "Remove";
    middleContainer.appendChild(removeButton);

    // create right container
    const rightContainer = document.createElement("div");
    rightContainer.id = "rightContainer";
    container.appendChild(rightContainer);

    // create dropbox for countries
    const selectionBoxForCountries = document.createElement("select");
    selectionBoxForCountries.size = 5;
    selectionBoxForCountries.id = "selectionBoxForCountries";
    selectionBoxForCountries.multiple = true;
    leftContainer.appendChild(selectionBoxForCountries);
    for (let i = 0; i < 8; i += 1) {
      const boxElement = document.createElement("option");
      boxElement.value = listOfCountries[i];
      boxElement.text = listOfCountries[i];
      selectionBoxForCountries.appendChild(boxElement);
    }

    // create empty box
    const emptySelectionBox = document.createElement("select");
    emptySelectionBox.size = 5;
    emptySelectionBox.id = "emptySelectionBox";
    emptySelectionBox.multiple = true;
    rightContainer.appendChild(emptySelectionBox);
  }

  static addElement() {
    const emptyBox = document.getElementById("emptySelectionBox");
    const selectionBoxForCountries = document.getElementById(
      "selectionBoxForCountries"
    );

    // find selected options and remove

    for (let i = 0; i < selectionBoxForCountries.options.length; i += 1) {
      if (selectionBoxForCountries.options[i].selected) {
        const newOption = document.createElement("option");
        newOption.value = selectionBoxForCountries.options[i].value;
        newOption.text = selectionBoxForCountries.options[i].value;
        emptyBox.appendChild(newOption);
      }
    }
    while (true) {
      if (selectionBoxForCountries.options.selectedIndex === -1) {
        break;
      }
      selectionBoxForCountries.options[
        selectionBoxForCountries.selectedIndex
      ].remove();
    }
  }

  static removeElement() {
    const emptyBox = document.getElementById("emptySelectionBox");
    const selectionBoxForCountries = document.getElementById(
      "selectionBoxForCountries"
    );

    // find selected option and remove
    for (let i = 0; i < emptyBox.options.length; i += 1) {
      if (emptyBox.options[i].selected) {
        const newOption = document.createElement("option");
        newOption.value = emptyBox.options[i].value;
        newOption.text = emptyBox.options[i].value;
        selectionBoxForCountries.appendChild(newOption);
      }
    }
    while (true) {
      if (emptyBox.options.selectedIndex === -1) {
        break;
      }
      emptyBox.options[emptyBox.options.selectedIndex].remove();
    }
  }
}
