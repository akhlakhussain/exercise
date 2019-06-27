class FormMethods {
  constructor() {
    const createForm = document.createElement("form");

    createForm.setAttribute("methos", "post");
    createForm.setAttribute("action", "submit.php");
    createForm.id = "cform";
    document.body.appendChild(createForm);
    const inputTag = document.createElement("input");
    inputTag.id = "textfield";
    inputTag.type = "text";
    inputTag.name = "textField";
    const labelForText = document.createElement("label");
    labelForText.innerText = "Enter Number";
    labelForText.forHTML = inputTag;
    createForm.appendChild(inputTag);
    createForm.appendChild(labelForText);
    createForm.appendChild(document.createElement("br"));
    createForm.appendChild(document.createElement("br"));
    const resultTag = document.createElement("input");
    resultTag.id = "result";
    resultTag.type = "text";
    resultTag.name = "name";
    const resultLabel = document.createElement("label");
    resultLabel.appendChild(document.createTextNode("Result"));
    resultLabel.forHTML = resultTag;
    createForm.appendChild(resultTag);
    createForm.appendChild(resultLabel);
    createForm.appendChild(document.createElement("br"));
    createForm.appendChild(document.createElement("br"));
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.name = "submit";
    submitButton.id = "submitButton";
    submitButton.value = "Submit";
    createForm.appendChild(submitButton);
  }

  static showResult(event) {
    event.preventDefault();
    const textfield = document.getElementById("textfield");
    const result = document.getElementById("result");
    if (textfield.value % 1 === 0 && textfield.value !== "") {
      result.value = "true";
    } else {
      result.value = "false";
    }
  }
}
