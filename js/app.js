document.addEventListener('DOMContentLoaded', () => {
    const API_BASE = 'https://f1397ab7f0ba.ngrok-free.app/api/bildirim';

    fetch(API_BASE)
        .then(res => {
            if (!res.ok) throw new Error('Ağ hatası: ' + res.status);
            return res.json();
        })
        .then(bildirimler => {
            const list = document.getElementById('notifications');
            bildirimler.forEach(b => {
                const li = document.createElement('li');
                li.textContent = `${b.baslik}: ${b.icerik}`;
                list.appendChild(li);
            });
        })
        .catch(err => console.error('Fetch hatası:', err));
});
