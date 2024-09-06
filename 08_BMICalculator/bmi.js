const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height`;
        console.log(height);
        
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight`;
    } else {
        const bmi = (weight / ((height*height)/1000)).toFixed(2)
        if(bmi < 18.6) {
            results.innerHTML = `${bmi} <br /> Under Weight: Less than 18.6`
        } else if(bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `${bmi} <br /> Normal Range: 18.6 to 24.9`
        }
        else {
            results.innerHTML = `${bmi} <br /> Overweight: Greater than 24.9`
        }
    }
})