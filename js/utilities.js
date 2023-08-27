function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueId(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString  = textElement.innerText;
    const textElementvalue = parseFloat(textElementValueString);
    return textElementvalue;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}
