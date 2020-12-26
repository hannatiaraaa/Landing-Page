function getDomAll(selector, type) {
    if(type === 'all') {
        return document.querySelectorAll(selector);
    } else {
        return document.querySelector(selector);
    }
}

const getActiveClass = getDomAll('.navAction', 'all'); 

getActiveClass.forEach((value) => {
    value.addEventListener('click', () => {
        const activeNav = getDomAll('.navBar a.active');
        if (activeNav !== null) {
            activeNav.classList.remove('active');
        }
        value.classList.add('active');
    })
})

const imageProfile = getDomAll('#image');

imageProfile.addEventListener('click', () => {
    if (imageProfile.getAttributeNode('src').value === '../Assets/Images/white.png') {
        imageProfile.getAttributeNode('src').value = '../Assets/Images/black.png';
    } else {
        imageProfile.getAttributeNode('src').value = '../Assets/Images/white.png';
    }
})