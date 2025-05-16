const BASE_PRICE = 100; // Base price per pair in dollars

function calculateTotal() {
    const offer = document.querySelector('input[name="offer"]:checked');
    let total = 0;
    let selectedOffer = '';

    // Reset all boxes and dropdowns
    document.querySelectorAll('.box').forEach(box => box.classList.remove('active'));
    document.querySelectorAll('.dropdown-container').forEach(container => container.classList.remove('active'));

    if (offer) {
        const boxId = offer.value === 'offer1' ? 'box1' : offer.value === 'offer2' ? 'box2' : 'box3';
        const dropdownId = offer.value === 'offer1' ? 'dropdown1' : offer.value === 'offer2' ? 'dropdown2' : 'dropdown3';

        // Activate selected box and dropdowns
        document.getElementById(boxId).classList.add('active');
        document.getElementById(dropdownId).classList.add('active');

        if (offer.value === 'offer1') {
            const size1 = document.getElementById('size1a').value;
            const size2 = document.getElementById('size1b').value;
            const color1 = document.getElementById('color1a').value;
            const color2 = document.getElementById('color1b').value;

            if (size1 && size2 && color1 && color2) {
                total = BASE_PRICE * 1 * 0.5; // 1 pair, 50% off
                selectedOffer = `Running Shoe (1 Pair, Sizes: ${size1}, ${size2}, Colors: ${color1}, ${color2})`;
            }
        } else if (offer.value === 'offer2') {
            const size1 = document.getElementById('size2a').value;
            const size2 = document.getElementById('size2b').value;
            const color1 = document.getElementById('color2a').value;
            const color2 = document.getElementById('color2b').value;

            if (size1 && size2 && color1 && color2) {
                total = BASE_PRICE * 2 * 0.6; // 2 pairs, 40% off
                selectedOffer = `Casual Shoe (2 Pairs, Sizes: ${size1}, ${size2}, Colors: ${color1}, ${color2})`;
            }
        } else if (offer.value === 'offer3') {
            const size1 = document.getElementById('size3a').value;
            const size2 = document.getElementById('size3b').value;
            const color1 = document.getElementById('color3a').value;
            const color2 = document.getElementById('color3b').value;

            if (size1 && size2 && color1 && color2) {
                total = BASE_PRICE * 2 * 0.4; // 2 pairs, 60% off
                selectedOffer = `Sports Shoe (2 Pairs, Sizes: ${size1}, ${size2}, Colors: ${color1}, ${color2})`;
            }
        }
    }

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
    return { total, selectedOffer };
}

function addToCart() {
    const { total, selectedOffer } = calculateTotal();
    if (total === 0 || !selectedOffer) {
        alert('Please select an offer and all sizes and colors.');
        return;
    }
    alert(`Added to Cart: ${selectedOffer}\nTotal: $${total.toFixed(2)}`);
}