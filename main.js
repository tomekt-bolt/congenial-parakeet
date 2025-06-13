window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

function baseVerifyPassword(expected, target) {
    const password = document.getElementById('password').value;
    if ((Array.isArray(expected) && expected.includes(password.toLowerCase())) || (typeof expected === "string" && expected.toLowerCase() === password.toLowerCase())) {
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = target;
        }, 500);
    } else {
        alert('Access denied! Please try again.');
    }
}