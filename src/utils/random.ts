const random = (array: number[]): number => {
    let result = Math.floor(Math.random() * array.length); 
    return  array[result]
}

export default random