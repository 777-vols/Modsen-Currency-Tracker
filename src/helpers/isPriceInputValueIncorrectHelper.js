export function isLowPriceInputValueIncorrect(inputValue, modalInputsData, day) {
  if (
    !Number.isFinite(Number(inputValue)) ||
    (inputValue.length > 1 && Number(inputValue) === 0 && !inputValue.includes('.')) ||
    modalInputsData[day] === undefined ||
    (Number(modalInputsData[day].highPrice) <= Number(inputValue) &&
      Number(modalInputsData[day].lowPrice) < Number(inputValue)) ||
    Number(inputValue < 0) ||
    Number(inputValue > 10000)
  ) {
    return true;
  }
  return false;
}

export function isHighInputValueIncorrect(inputValue) {
  if (
    !Number.isFinite(Number(inputValue)) ||
    (inputValue.length > 1 && Number(inputValue) === 0 && !inputValue.includes('.')) ||
    Number(inputValue < 0) ||
    Number(inputValue > 10000)
  ) {
    return true;
  }
  return false;
}
