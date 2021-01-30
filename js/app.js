const result = document.querySelector(".num");
const btns = document.querySelectorAll(".btn");

let count = 0

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("minus")) {
            count--;
        }else if (styles.contains("plus")) {
            count++;
        }else {
            count = 0;
        };
        
        if(count > 0){
            result.style.color = "green";
        }
        else if(count < 0){
            result.style.color = "red";
        }
        else{
            result.style.color = "#373737";
        };
        result.textContent = count;
    });
});