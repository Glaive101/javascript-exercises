//  Remove dashes from strings

function isDash(character){
    return character !== "-";
}

function camelize(str){
    array = str.split(""); //.filter("-").join();
    const camelized = array.filter(isDash);
    return camelized.join("");
}

console.log(camelize("background-Color"));
console.log(camelize("list-style-Image"));
console.log(camelize("-webkit-Transition"));


//filter range exercise completed

function filterRange(arr, a, b){
    return arr.filter((element) => (element >= a && element <= b));
}

let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr1 ); // 5,3,8,1 (not modified)

//Sort in decreasing order

let arr2 = [5, 2, 1, -10, 8, 4, 5, 6];
// for(let i = 0; i <arr.length -1; i++){
//     for(let i = 0; i < arr.length-1; i++){
//         if(arr[i] < arr[i + 1]){
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         }
//     }
// }

arr2.sort((a, b) => b-a);

console.log(arr2);

//Shuffle array

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function shuffle(array){
    for(let i = 0; i < array.length - 1; i++){
        const newPosition = Math.floor((Math.random() * array.length)) % array.length;
        console.log(`Current Position: ${i}, New Position: ${newPosition}`);
        [array[i], array[newPosition]] = [array[newPosition], array[i]];
    }
}

shuffle(arr3)

console.log(arr3);

function unique(arr) {
    let result = [];

    for(let str of arr){
      if(!result.includes(str)){
        result.push(str);
      }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O", "Hi"
];

console.push( unique(strings) ); // Hare, Krishna, :-0
