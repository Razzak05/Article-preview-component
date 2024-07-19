// function shareButton() {
//     var shareContainer = document.getElementById('share-container');
//     if (shareContainer.style.display === 'none' || shareContainer.style.display === '') {
//         shareContainer.style.display = 'block';
//     } else {
//         shareContainer.style.display = 'none';
//     }
// }

function shareButton() {
    const shareContainer = document.querySelector('.share-container');
    shareContainer.classList.toggle('share-toggle');
}
