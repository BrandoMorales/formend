export function showModal() {
    const modal = document.getElementById('modal-success');
    modal.classList.remove('hidden');
}

export function hideModal() {
    const modal = document.getElementById('modal-success');
    modal.classList.add('hidden');
}