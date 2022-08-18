function snapCrackle(maxValue){
    let array = []

    for(let i = 1; i <= maxValue; i++){

        if(i % 5 == 0 && i % 2 == 1 ){
            array.push("SnapCrackle")
        }else if(i % 2 == 1){
            array.push("Snap")
        } else if(i % 5 == 0){
            array.push("Crackle")
        }else{
            array.push(i)
        }
    }
    return array
}
console.log(snapCrackle(12))