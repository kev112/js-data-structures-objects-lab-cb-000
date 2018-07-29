// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = Object.assign({}, obj, {[key]: value});
  return newObj;
}