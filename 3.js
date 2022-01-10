//คำนสณปริมาตรพีระมิต
//นางสาวศนัญญา หวั่งประดิษฐ์ 6135512036

function getPyramidArea(length, width, height) {
    let baseArea = length * width; //พื้นที่
    let pyramidVolume = 1/3 * baseArea * height; //สูตรคำควณ
    console.log(pyramidVolume);  
    return pyramidVolume; 
}

let Area1 = getPyramidArea(2,2,3);
let Area2 = getPyramidArea(1,5,8);
let Area3 = getPyramidArea(3,6,9);
console.log('Area 1 =' + Area1 + ', Area 2 =' + Area2 + ', Area 3 =' + Area3);