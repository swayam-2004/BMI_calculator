document.getElementById("bmiForm").addEventListener('submit',function(e){
    e.preventDefault();
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet= parseInt(document.getElementById('height-feet').value);
    const heightInches= parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if(gender && age && heightFeet && heightInches && weight)
    {
        const heightInMetres =((heightFeet*12)+heightInches)*0.0254;
        const bmi = weight/(heightInMetres*heightInMetres);
        const resultElement = document.getElementById("result");
        let category = '';
        if(bmi <18.5)
        {
            category='Under weight';
        }
        else if(bmi>=18 && bmi<24.9)
        {
            category='Normal weight';
        }
        else if(bmi>=25 && bmi<29)
        {
            category= 'Over weight';
        }
        else
        {
            category = 'Obese';
        }
        let resultMessage = 'Your BMI :'+ bmi.toFixed(2) +'<br>';
        resultMessage += 'Category :'+ category;
        resultElement.innerHTML = resultMessage;
    }
});