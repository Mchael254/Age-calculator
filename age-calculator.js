document.querySelector('#submit').addEventListener('click', (e) => {
    const answer = document.querySelector('.answer');
    const display = document.getElementById('agebox');
    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const currentDate = new Date();

    let years;
    function age(dob, currentDate) {
        const diff = currentDate - dob;
        const ageDate = new Date(diff);

        const years = ageDate.getUTCFullYear() - 1970;
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;

        return { years, months, days };

    }

    if (name.trim() == '' || isNaN(dob.getTime())) {
        alert('Fill all inputs');
        name.value = '';
        dob.value = '';
        return;
    }
    else {
        if (dob > currentDate) {
            alert('Date of birth can not be past today');
        }
        else {
            display.innerHTML = '';
            answer.style.display = 'block';
            years = age(dob, currentDate);
            age(dob, currentDate);
            const Name = document.createElement('p');
            const ageText = `You are ${years.years} years, ${years.months} months, and ${years.days} days old.`;
            Name.textContent = name + ',\n';
            display.appendChild(Name);

            function countUp(duration, start, end, element) {
                let current = start;
                const increment = (end - start) / duration;
                const timer = setInterval(() => {
                    current += increment;
                    element.textContent = `You are ${Math.floor(current)} years, ${years.months} months, and ${years.days} days old.`;
                    if (current >= end) {
                        clearInterval(timer);
                    }
                }, 1000);
            }

            const ageNumber = document.createElement('p');
            ageNumber.textContent = `You are 0 years, ${years.months} months, and ${years.days} days old.`;
            display.appendChild(ageNumber);

            countUp(4, 0, years.years, ageNumber);
            setTimeout(() => {
                display.innerText = '';
                answer.style.display = 'none'
            }, 10000);
         


            document.getElementById("ageform").reset();
        }

    }
});




