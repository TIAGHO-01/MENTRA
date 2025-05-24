document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const mentorContainer = document.getElementById('mentorContainer');
    const mentorCards = mentorContainer.getElementsByClassName('mentor-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        Array.from(mentorCards).forEach(card => {
            const name = card.querySelector('h2').textContent.toLowerCase();
            const specialty = card.querySelector('p').textContent.toLowerCase();

            if (name.includes(searchTerm) || specialty.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});