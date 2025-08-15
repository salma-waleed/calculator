let input = (document.getElementById("inputBox"));
let buttons = document.querySelectorAll('button');


let str = '';
buttons.forEach(button => {
    button.addEventListener("click" , (e) => {
        let btnValue = e.target.innerHTML;

        if(btnValue === 'AC'){
            str = '';
            input.value = str;
        }


        else if(btnValue === 'DEL'){
            str = str.slice(0 , -1);
            input.value = str;
        }


        else if(btnValue === '='){
            try{
                str = eval(str);
                input.value = str;
            }catch{
                input.value = 'invalid';
                str = '';
            }
        }


        else{
            str += btnValue;
            input.value = str;
        }

    });
});