import jsonlint from 'jsonlint-mod'

export function isJSON(str) {
  try {
    JSON.parse(str)
    return true
  } catch (err) {
    return err
  }
}

export function isCodemirrorJSON(str) {
  try {
    jsonlint.parse(str)
    return true
  } catch (err) {
    return err
  }
}
