var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  var array
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array;
  return array.push(element);
}

function accessElementInArray(array, index) {
  var array
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array
  array.shift()
  return array
}
