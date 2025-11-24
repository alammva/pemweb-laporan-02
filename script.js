// Fungsi untuk toggle hide/show pada klik h3
document.querySelectorAll('h3').forEach(h3 => {
    h3.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.classList.contains('hidden')) {
            // Jika konten tersembunyi, tanya apakah ingin ditampilkan
            const confirmShow = confirm('Apakah konten ingin ditampilkan?');
            if (confirmShow) {
                content.classList.remove('hidden');
            }
        } else {
            // Jika konten terlihat, tanya apakah ingin disembunyikan
            const confirmHide = confirm('Apakah konten ingin disembunyikan?');
            if (confirmHide) {
                content.classList.add('hidden');
            }
        }
    });
});


// Fungsi untuk toggle mode
const toggleButton = document.getElementById('toggleMode');
let isRapi = true;
toggleButton.addEventListener('click', function() {
    const body = document.body;
    if (isRapi) {
        body.classList.remove('rapi');
        body.classList.add('berantakan');
        toggleButton.textContent = 'Ganti ke Mode Rapi';
    } else {
        body.classList.remove('berantakan');
        body.classList.add('rapi');
        toggleButton.textContent = 'Ganti ke Mode Berantakan';
    }
    isRapi = !isRapi;
});