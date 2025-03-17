document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [ 
            { id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000, desc: 'Kopi robusta khas Brazil.' },
            { id: 2, name: 'Arabica Blend', img: '2.jpg', price: 25000, desc: 'Campuran arabika berkualitas tinggi.' },
            { id: 3, name: 'Primo Passo', img: '3.jpg', price: 30000, desc: 'Rasa eksklusif dari Primo Passo.' },
            { id: 4, name: 'Aceh Gayo', img: '4.jpg', price: 35000, desc: 'Kopi khas Aceh dengan aroma kuat.' },
            { id: 5, name: 'Sumatra Mandheling', img: '5.jpg', price: 40000, desc: 'Kopi Sumatra dengan keasaman rendah.' },
            { id: 6, name: 'Robusta Brazil', img: '1.jpg', price: 20000, desc: 'Kopi robusta khas Brazil.' },
            { id: 7, name: 'Arabica Blend', img: '2.jpg', price: 25000, desc: 'Campuran arabika berkualitas tinggi.' },
            { id: 8, name: 'Primo Passo', img: '3.jpg', price: 30000, desc: 'Rasa eksklusif dari Primo Passo.' },
            { id: 9, name: 'Aceh Gayo', img: '4.jpg', price: 35000, desc: 'Kopi khas Aceh dengan aroma kuat.' },
            { id: 10, name: 'Sumatra Mandheling', img: '5.jpg', price: 40000, desc: 'Kopi Sumatra dengan keasaman rendah.' },
        ],

        //isModalOpen: false, 
        selectedItem: null,

        openModal(item) {
            this.selectedItem = item;
            this.isModalOpen = true;
        },

        closeModal() {
            const modal = document.querySelector('.modal-container'); // Ambil modal container
            modal.classList.add('closing'); // Tambahkan animasi closing

            setTimeout(() => {
                this.isModalOpen = false;
                this.selectedItem = null;
                modal.classList.remove('closing'); // Hapus class setelah animasi selesai
            }, 300); // Harus sesuai dengan durasi animasi di CSS
        }
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,

        add(newItem) {
            const cartItem = this.items.find((item) => item.id == newItem.id);

            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    if (item.id != newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },

        remove(id) {
            const cartItem = this.items.find((item) => item.id == id);

            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id != id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity == 1) {
                this.items = this.items.filter((item) => item.id != id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.data('menu', () => ({
        items: [ 
            { id: 1, name: 'Espresso', img: '1.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Kopi robusta khas Brazil.' },
            { id: 2, name: 'Latte', img: '2.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Campuran arabika berkualitas tinggi.' },
            { id: 3, name: 'Cappuccino', img: '3.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Rasa eksklusif dari Primo Passo.' },
            { id: 4, name: 'Coffee Original', img: '4.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Kopi khas Aceh dengan aroma kuat.' },
            { id: 5, name: 'Cappuccino', img: '5.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Kopi Sumatra dengan keasaman rendah.' },
            { id: 6, name: 'Espresso', img: '1.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Kopi robusta khas Brazil.' },
            { id: 7, name: 'Latte', img: '2.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Campuran arabika berkualitas tinggi.' },
            { id: 8, name: 'Cappuccino', img: '3.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Rasa eksklusif dari Primo Passo.' },
            { id: 9, name: 'Coffee Original', img: '4.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Kopi khas Aceh dengan aroma kuat.' },
            { id: 10, name: 'Cappuccino', img: '5.jpg', desc: 'Nikmat Dan Segar Selalu. Indahnya Coffee.', desc: 'Kopi Sumatra dengan keasaman rendah.' },
        ],

        //isModalOpen: false, 
        selectedItem: null,

        openModal(item) {
            this.selectedItem = item;
            this.isModalOpen = true;
        },

        closeModal() {
            const modal = document.querySelector('.modal-container'); // Ambil modal container
            modal.classList.add('closing'); // Tambahkan animasi closing

            setTimeout(() => {
                this.isModalOpen = false;
                this.selectedItem = null;
                modal.classList.remove('closing'); // Hapus class setelah animasi selesai
            }, 300); // Harus sesuai dengan durasi animasi di CSS
        }
    }));
});

// Konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};