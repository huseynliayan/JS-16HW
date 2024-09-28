let car

let prices = {
    cars: {
        'BMW M5': 80000,
        'BMW X5': 75000,
        'BMW iX': 90000,
        'Taycan Turbo': 150000,
        'Panamera Turbo E-Hybrid': 160000,
        'Panamera Turbo ': 160000,
      },
      options: {
        'Leather Seats': 3000,
        'Premium Audio': 2500,
        'Winter Package': 2000,
      },
}

document.getElementById('Porsche').addEventListener('change', (ev) => {
    car = ev.target.value
})
 
document.getElementById('BMW').addEventListener('change', (ev) => {
    car = ev.target.value
})
 
document.getElementById('add').addEventListener('click',() => {
    let totalPrice = 0;
    console.log(car)
    document.querySelectorAll('input').forEach(element => {
        if(element.checked){
            console.log(element.parentElement.innerText)
        }
    });

    if(car){
        totalPrice+=prices.cars[car]
    }
    document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
        if (element.checked) {
          const option = element.value;
          totalPrice += prices.options[option]; 
        }
      });
      console.log(totalPrice);
      
})