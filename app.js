const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // ici nous allons faire une boucle 
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
             if(checkbox === this || checkbox === lastChecked){
                 inBetween = !inBetween;
                 console.log('starting something');
             }

             
             if(inBetween) {
                 checkbox.checked = true;
             }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));