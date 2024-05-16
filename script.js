document.getElementById('owner-login').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('owner-page').style.display = 'block';
    document.getElementById('vet-page').style.display = 'none';
    document.getElementById('new-passport').style.display = 'none';
    document.getElementById('left-menu').style.display = 'block';
});

document.getElementById('vet-login').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('owner-page').style.display = 'none';
    document.getElementById('vet-page').style.display = 'block';
    document.getElementById('new-passport').style.display = 'none';
    document.getElementById('left-menu').style.display = 'none';
});

function showSearchPassport() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <h2>Search for Passport</h2>
        <label for="passport-number">Passport Number:</label>
        <input type="text" id="passport-number" name="passport-number">
        <button onclick="searchPassport()">Search</button>
        <button onclick="closeModal()">Close</button>
    `;
    document.body.appendChild(modal);
}

function showNewPassportForm() {
    document.getElementById('vet-page').style.display = 'none';
    document.getElementById('new-passport').style.display = 'block';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function searchPassport() {
    const passportNumber = document.getElementById('passport-number').value;
    // Implement search functionality here
    closeModal();
}
