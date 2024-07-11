
// document.addEventListener("DOMContentLoaded", function () {
//     const tidakButton = document.getElementById("tidak");

//     tidakButton.addEventListener("mouseover", function () {
//         tidakButton.style.display = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const tidakButton = document.getElementById("tidak");
    const card = document.querySelector(".card");

    tidakButton.addEventListener("mouseover", function () {
        // Mendapatkan lebar dan tinggi card
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;

        // Mendapatkan lebar dan tinggi tombol "tidak"
        const buttonWidth = tidakButton.offsetWidth;
        const buttonHeight = tidakButton.offsetHeight;

        // Menghitung posisi acak untuk tombol "tidak" di dalam area card
        const randomLeft = Math.floor(Math.random() * (cardWidth - buttonWidth));
        const randomTop = Math.floor(Math.random() * (cardHeight - buttonHeight));

        // Menetapkan posisi baru untuk tombol "tidak"
        tidakButton.style.left = randomLeft + "px";
        tidakButton.style.top = randomTop + "px";
    });
});