class CheckBoxesClass {
  constructor() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "None"
    ];
    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
    for (let i = 0; i < 8; i += 1) {
      const inputTag = document.createElement("input");
      inputTag.type = "checkbox";
      inputTag.classList.add("checkBoxes");
      inputTag.value = week[i];
      inputTag.name = "checkBox";
      const labelForCheckbox = document.createElement("label");
      labelForCheckbox.appendChild(document.createTextNode(week[i]));
      labelForCheckbox.forHTML = inputTag;
      container.appendChild(inputTag);
      container.appendChild(labelForCheckbox);
      container.appendChild(document.createElement("br"));
    }
  }

  static increaseKount() {
    this.kount += 1;
  }

  static decreaseKount() {
    this.kount -= 1;
  }

  static getKount() {
    return this.kount;
  }

  static setKount() {
    this.kount = 0;
  }

  checkboxSelector() {
    if (CheckBoxesClass.selectedCheckboxes.indexOf(this) !== -1) {
      const index = CheckBoxesClass.selectedCheckboxes.indexOf(this);
      CheckBoxesClass.selectedCheckboxes[index].checked = false;
      CheckBoxesClass.selectedCheckboxes.splice(index, 1);
      CheckBoxesClass.decreaseKount();
    } else if (this.value === "None") {
      CheckBoxesClass.noneCheckbox = this;
      if (CheckBoxesClass.getKount() > 0) {
        for (let i = 0; i < CheckBoxesClass.selectedCheckboxes.length; i += 1) {
          CheckBoxesClass.selectedCheckboxes[i].checked = false;
        }
        CheckBoxesClass.selectedCheckboxes = [];
      }
      CheckBoxesClass.setKount();
    } else {
      if (CheckBoxesClass.noneCheckbox !== "") {
        CheckBoxesClass.noneCheckbox.checked = false;
      }
      if (CheckBoxesClass.getKount() < 3) {
        CheckBoxesClass.increaseKount();
        CheckBoxesClass.selectedCheckboxes.push(this);
      } else {
        this.checked = false;
        alert(
          `Only 3 days can be selected.You have already selected ${CheckBoxesClass.selectedCheckboxes[0].value},${CheckBoxesClass.selectedCheckboxes[1].value} and ${CheckBoxesClass.selectedCheckboxes[2].value}`
        );
      }
    }
  }
}
CheckBoxesClass.kount = 0;
CheckBoxesClass.selectedCheckboxes = [];
CheckBoxesClass.noneCheckbox = "";
