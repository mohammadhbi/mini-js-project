// function counterObject(obj){
//     let counter = 0;
//     for (let key in obj){
//         if(Object.hasOwn(obj,key)){
//             if(typeof obj[key]==="object" && obj[key] !== null){
//                 counter += counterObject(obj[key]);
//             }
//             counter++;
//         }

//     }
//     return counter;
// }
// function counterproperties(){
//     const input =document.getElementById("arrayInput").value;

//     try{
//         const arr =JSON.parse(input);
//         const result = counterObject(arr);
//         document.getElementById("output").innerHTML=`Number of properties: ${result}`;

//     }catch (error) {
//         document.getElementById('output').innerText = 'Please enter a valid array.';
//     }
// }
function counterObject(obj) {
    let counter = 0;
    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                counter += counterObject(obj[key]);
            }
            counter++;
        }
    }
    return counter;
}

function counterproperties() {
    const input = document.getElementById("arrayInput").value;  // اصلاح شد به 'value'

    try {
        const arr = JSON.parse(input);
        const result = counterObject(arr);
        document.getElementById("output").innerHTML = `Number of properties: ${result}`;
    } catch (error) {
        document.getElementById('output').innerText = 'Please enter a valid array.';
    }
}
