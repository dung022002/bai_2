// var text = '////laptrinh//////code//////chuanhoa/////'                  
// var arr = text.split('/')                                // tách chuỗi thành mảng có các element rỗng và có kí tự
// var arr1 = []
// for(var i = 0; i < arr.length; i++){                     // tạo mảng mới không chứa phần tử rỗng 
//     if (arr[i].length > 0){
//          arr1.push(arr[i])
//     }
// }
// var path = arr1.join('/')                                // ghép các phần tử mảng thành chuỗi ngăn cách nhau bằng /
// console.log(path)

function fix() {
 // b1: thu thap du lieu
    var text = document.getElementById('input').value

 // b2: kiem tra du lieu
 // b3: xu ly du lieu
    var arr = text.split('/')
    var arr1 = []
    for(var i = 0; i < arr.length; i++){
        if (arr[i].length > 0){
            arr1.push(arr[i])
        }
    }
    var path = arr1.join('/') 
    
 // b4 xu li hien thi
    var result = document.getElementById('output')
    result.innerHTML = 'chuỗi đúng là: ' + path
    
}



 

