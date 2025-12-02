document.addEventListener('DOMContentLoaded', () => {
    const infoCards = document.querySelectorAll('.info-card');

    // Fungsi untuk menyamakan tinggi kartu
    const equalizeCardHeights = () => {
        infoCards.forEach(card => card.style.height = 'auto');

        if (window.innerWidth > 768) {

            
            let maxHeightRow1 = 0;
            
            const row1 = [infoCards[0], infoCards[1]].filter(Boolean);
            row1.forEach(card => {
                maxHeightRow1 = Math.max(maxHeightRow1, card.offsetHeight);
            });
            row1.forEach(card => {
                card.style.height = `${maxHeightRow1}px`;
            });
        }
    };

    // Panggil fungsi saat dokumen selesai dimuat
    equalizeCardHeights();
    // Panggil fungsi setiap kali ukuran jendela diubah
    window.addEventListener('resize', equalizeCardHeights);

    // [Kode Hover dan Klik tetap sama]
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-effect');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-effect');
        });

        // Fungsionalitas klik untuk pindah halaman
        card.addEventListener('click', function (event) {
            if (event.target.classList.contains('read-more-btn')) {
                return;
            }
            const linkElement = card.querySelector('.read-more-btn');
            if (linkElement && linkElement.href) {
                window.location.href = linkElement.href;
            }
        });
    });
});