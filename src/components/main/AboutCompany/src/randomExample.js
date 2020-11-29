export const getRandomExample = massItem => {
    let massOf5 = [];
    let count;
    massItem.length>4 ? count=5 : count = massItem.length;
    for(let i = 0 ; i < count; i++){
        let random = randomInteger(0,massItem.length-1);
        if(!massOf5.includes(massItem[random])) {
            massOf5.push(massItem[random])
        } else {
            i--;
        }
    }
    return massOf5;
}

export function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}