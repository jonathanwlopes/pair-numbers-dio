function pairChange(list) {
  if (!list) return
  if (list.length === 0) return -1
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0 && list[i] !== 0) {
      list[i] = 0
    }
  }

  return list
}

const list = [1, 2, 4, 6, 7, 11]
const result = pairChange(list)
console.log(result)

function pairChangeSecondVersion(list) {
  if (!list) return "Envie uma Lista"
  const isEmpty = list.length === 0
  if (isEmpty) return -1

  const newList = list.map((item) => {
    if (item % 2 === 0) item = 0

    return item
  })

  return newList
}

const secondList = [0, 2, 4, 6, 1, 5, 0, 10]
const secondVersionResult = pairChangeSecondVersion(secondList)
console.log(secondVersionResult)
