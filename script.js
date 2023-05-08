document.getElementById('calculateBtn').addEventListener('click', function () {
    var weight = parseFloat(document.getElementById('weightInput').value);
    var height = parseFloat(document.getElementById('heightInput').value) / 100; // Convert height from cm to meters

    if (!weight) {
        Toastify({
            text: "Please input your Weight.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "center",
            backgroundColor: "linear-gradient(to right, #0e0912f5, #2a1a38d9)",
        }).showToast();
        document.getElementById('result').innerHTML = '';
    } else if (!height) {
        Toastify({
            text: "Please input Your Height.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "center",
            backgroundColor: "linear-gradient(to right, #0e0912f5, #2a1a38d9)",
        }).showToast();
        document.getElementById('result').innerHTML = '';
    } else {
        var bmi = weight / (height * height);

        var position = '';

        if (bmi < 16) {
            position = "<span style='background-color:#c32123;'>Severe Thinness</span>";
        } else if (bmi >= 16 && bmi <= 17) {
            position = "<span style='background-color:#d88888;'>Moderate Thinness</span>";
        } else if (bmi >= 17 && bmi < 18.5) {
            position = "<span style='background-color:#ffe542;'>Mild Thinness</span>";
        } else if (bmi >= 18.5 && bmi < 25) {
            position = "<span style='background-color:green;'>Normal</span>";
        } else if (bmi >= 25 && bmi < 30) {
            position = "<span style='background-color:#ffe542;'>Overweight</span>";
        } else if (bmi >= 30 && bmi < 35) {
            position = "<span style='background-color:#d88888;'>Obese Class I</span>";
        } else if (bmi >= 35 && bmi < 40) {
            position = "<span style='background-color:#c32123;'>Obese Class II</span>";
        } else if (bmi > 40) {
            position = "<span style='background-color:#8f0205;'>Obese Class III</span>";
        }
        document.getElementById('result').innerHTML = '<p class="result-p">Your BMI is: ' + bmi.toFixed(2) + 'kg/m<sup>2</sup> ' + position + '</p>'+
        '<span class="info"><span style="font-size:28px;">&#8505;</span> This is the World Health Organizations(WHO) recommended body weight based on BMI values for both men and women</span >';
    }
});