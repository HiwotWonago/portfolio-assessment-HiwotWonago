document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstName = document.querySelector('#firstName').value.trim();
        const lastName = document.querySelector('#lastName').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const age = parseInt(document.querySelector('#age').value, 10);

        const phoneErrorSpan = document.querySelector('#phoneErrorSpan');
        const ageErrorSpan = document.querySelector('#ageErrorSpan');
        const resultUIView = document.querySelector('#result-view');

        phoneErrorSpan.innerHTML = "";
        ageErrorSpan.innerHTML = "";

        if (isNaN(age) || age < 18) {
            ageErrorSpan.innerHTML = `<p style="color:red;">You must be at least 18 years old to sign up.</p>`;
            return;
        }

        if (phone.length < 10) {
            phoneErrorSpan.innerHTML = `<p style="color:red;">Phone number must be at least 10 digits long.</p>`;
            return;
        }

        const formData = {
            firstName,
            lastName,
            email,
            phone,
            age,
        };

        resultUIView.innerHTML = `
            <li><strong>First Name:</strong> ${firstName}</li>
            <li><strong>Last Name:</strong> ${lastName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Age:</strong> ${age}</li>
        `;

        console.log(formData);
        alert(`Thank you for signing up, ${firstName} ${lastName}!\nEmail: ${email}\nAge: ${age}`);
        form.reset();
    });
});
