/* Calculator Script */

let input = document.getElementById('output');

let button = document.querySelectorAll('button');

let str = '';
let arr = Array.from(button);

arr.forEach(button=>{
    button.addEventListener('click', (ev)=>{
        if(ev.target.innerHTML == '='){
            str = eval(str);
            output.value = str;
        }else if(ev.target.innerHTML == 'C'){
            str = "";
            output.value = str;
        }else{
            str += ev.target.innerHTML;
            output.value = str;
        }

    })

})