let height = document.getElementById('height')
let weight = document.getElementById('weight')
let calculateBtn = document.getElementById('calculate')

let bmiPoint = document.querySelectorAll('.bmiPoint')
let report = document.getElementById('report')
report.style.display = 'none'

let conditions = document.querySelectorAll('.condition')

let tdmark = document.querySelectorAll('.uw, .nw, .ow, .ob1, .ob2, .ob3')





function tableMark(className) {
    tdmark.forEach(item => {
        let clss = item.classList;
        clss.forEach(cls => {
            if (className == cls) {
                clss.add('bg-red-300')
            }
        })
    })
}


const redItem = document.querySelectorAll('.bg-red-300')
console.log(redItem)



calculateBtn.addEventListener('click', function () {
    let bmi = weight.value / (height.value * height.value)
    let FinalBmi = bmi.toFixed(1)
    let finalCondition;

    document.querySelectorAll('tr').forEach(tr => {
        console.log(tr.classList.remove('bg-red-300'));
    });

    conditions.forEach(condition => {
        if (FinalBmi < 18.5) {
            condition.innerHTML = 'Under-Weight'
            tableMark('uw')
        } else if (FinalBmi < 24.9) {
            condition.innerHTML = 'Normal'
            tableMark('nw')
        } else if (FinalBmi < 29.9) {
            condition.innerHTML = 'Overweight'
            tableMark('ow')
        } else if (FinalBmi < 34.9) {
            condition.innerHTML = 'Obese (Class-1)'
            tableMark('ob1')
        } else if (FinalBmi < 39.9) {
            condition.innerHTML = 'Obese (Class-2)'
            tableMark('ob2')
        } else {
            condition.innerHTML = 'Obese (Class-3)'
            tableMark('ob3')
        }
    })






    bmiPoint.forEach(point => {
        point.innerText = FinalBmi
    });


    report.style.display = 'block'
})

