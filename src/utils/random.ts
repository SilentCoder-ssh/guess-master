const random = (array: number[]) => {
    let result = Math.floor(Math.random() * array.length);

    if (!array) {
        return console.log("Le tableau est vide.")
    }
    return  array[result]
}




export default random