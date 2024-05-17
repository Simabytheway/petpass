document.getElementById('owner-login').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('owner-page').style.display = 'block';
    document.getElementById('vet-page').style.display = 'none';
    document.getElementById('new-passport').style.display = 'none';
    document.getElementById('control-body-page').style.display = 'none'; // Hide control body page
    document.getElementById('left-menu').style.display = 'block';
});

document.getElementById('vet-login').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('owner-page').style.display = 'none';
    document.getElementById('vet-page').style.display = 'block';
    document.getElementById('new-passport').style.display = 'none';
    document.getElementById('control-body-page').style.display = 'none'; // Hide control body page
    document.getElementById('left-menu').style.display = 'block'; // Show left menu for vet page
});

document.getElementById('control-login').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('owner-page').style.display = 'none';
    document.getElementById('vet-page').style.display = 'none';
    document.getElementById('new-passport').style.display = 'none';
    document.getElementById('left-menu').style.display = 'none'; // Hide left menu for control body page
    document.getElementById('control-body-page').style.display = 'block'; // Show control body page
});

function showSearchPassport() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <h2>Search for Passport</h2>
        <label for="passport-number">Passport Number:</label>
        <input type="text" id="passport-number" name="passport-number">
        <button onclick="searchPassport()">Search</button>
        <button onclick="showScanQRCode()">Scan QR Code</button>
        <button onclick="closeModal()">Close</button>
    `;
    document.body.appendChild(modal);
}

function showNewPassportForm() {
    document.getElementById('vet-page').style.display = 'none';
    document.getElementById('new-passport').style.display = 'block';
}

// Add Scan Passport QR Code action for both vet and control body pages
function showScanQRCode() {
    // Implement QR code scanning functionality here
    alert('Scan Passport QR Code action triggered!');
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
