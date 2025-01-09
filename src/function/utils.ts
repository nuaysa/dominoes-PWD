//data source 
const source = [[1,6],[4, 3],[5, 1], [3, 4], [1, 1], [3, 4], [1, 2]]

const DoubleNumber = (source : number[][]) => {
    let count = 0
    source.forEach((data) => {
        if (data[0] === data[1]) {
            count ++
        }
    })
    return count
}

//ordering data (asc and desc)
//Users can sort the domino cards in ascending or descending order.

//asc 
const orderAsc = (source : number[][]) => {
    let sortedSource = [...source].sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]) || a[0] - b[0]);
  
    return sortedSource
}

//desc
const orderDesc = (source : number[][]) => {
        let sortedSource = [...source].sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]) || b[0] - a[0]);

    return sortedSource
}

//remove Duplicate
//Users can remove domino cards with the same total number and number combination
const removeDuplicate = (source : number[][]) => {
    let sortedSource = source.map(([a, b]) => (a <= b ? [a, b]: [b, a])).sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]) || a[0] - b[0])

    const freq = new Map<string, number>()
    for (const data of sortedSource) {
        const key = data.join(",")
        freq.set(key, (freq.get(key) || 0 ) + 1)
    }

    const unique = sortedSource.filter((data) => freq.get(data.join(",")) === 1) 

    return unique
}

//Flip the Cards
const flipCard = (source : number[][]) => {
    let flippedSource = source.map(([a, b]) => [b, a])

    return flippedSource
}

//remove cards by total
const removeByTotal = (source : number[][], total : number | null) => {
    let filteredSource = source.filter(([a, b]) => (a + b) !== total)

    return filteredSource
}

const reset = () => {
    const source = [[1,6],[4, 3],[5, 1], [3, 4], [1, 1], [3, 4], [1, 2]]
    
    return source 
}
// console.log(orderAsc(source))
// console.log(orderDesc(source))
// console.log(removeDuplicate(source))
// console.log(flipCard(source))
// console.log(removeByTotal(source, 5))

export { orderAsc, orderDesc, removeDuplicate, flipCard, removeByTotal, reset, DoubleNumber, source }