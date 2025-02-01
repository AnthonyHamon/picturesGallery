// let galleries = ['divingPics', 'egyptPics', 'zooPics', 'walksPics']

// let galleries = []
// let divingPics = []
// let egyptPics = []
// let zooPics = []
// let walksPics = []

let presentationArray = ['img/galleryPics/diving/diving1.webp', 'img/galleryPics/diving/diving2.webp', 'img/galleryPics/diving/diving3.webp',
    'img/galleryPics/diving/diving4.webp', 'img/galleryPics/diving/diving5.webp', 'img/galleryPics/diving/diving6.webp', 'img/galleryPics/diving/diving7.webp',
    'img/galleryPics/diving/diving8.webp', 'img/galleryPics/diving/diving9.webp', 'img/galleryPics/diving/diving10.webp', 'img/galleryPics/diving/diving11.webp',
    'img/galleryPics/diving/diving12.webp', 'img/galleryPics/diving/diving13.webp', 'img/galleryPics/diving/diving14.webp', 'img/galleryPics/diving/diving15.webp',
    'img/galleryPics/diving/diving16.webp', 'img/galleryPics/diving/diving17.webp', 'img/galleryPics/diving/diving18.webp', 'img/galleryPics/diving/diving19.webp',
    'img/galleryPics/diving/diving20.webp', 'img/galleryPics/diving/diving21.webp', 'img/galleryPics/diving/diving22.webp', 'img/galleryPics/diving/diving23.webp',
    'img/galleryPics/diving/diving24.webp', 'img/galleryPics/diving/diving25.webp', 'img/galleryPics/diving/diving26.webp', 'img/galleryPics/diving/diving27.webp',
    'img/galleryPics/diving/diving28.webp', 'img/galleryPics/diving/diving29.webp', 'img/galleryPics/diving/diving30.webp', 'img/galleryPics/diving/diving31.webp',
    'img/galleryPics/diving/diving32.webp', 'img/galleryPics/diving/diving33.webp', 'img/galleryPics/diving/diving34.webp', 'img/galleryPics/diving/diving35.webp'];

function renderPictures() {
    getLocalStorage();
    changeTitle();
    document.getElementById('galleries').innerHTML = "";
    changeClassGallery();
    for (let i = 0; i < presentationArray.length; i++) {
        document.getElementById('galleries').innerHTML +=
            `
        <img onclick="openPicture(${i})" src="${presentationArray[i]}"></img>
        `;
    }
    setLocalStorage();
}

function changeClassGallery() {
    let gallery = document.getElementById('galleries');
    gallery.classList.remove('galleries');
    gallery.classList.add('imageBox');
    let footer = document.getElementById('footer');
    footer.classList.remove('absolute');
}

function resetGalleryClass() {
    let openedPicture = document.getElementById('galleries');
    openedPicture.classList.add('imageBox');
    openedPicture.classList.remove('openedPicture');
    openedPicture.classList.remove('opacityOut');
    let hideFooter = document.getElementById('footer');
    hideFooter.classList.remove('d-none');
    let hideHeader = document.getElementById('header');
    hideHeader.classList.remove('d-none');
}

function changeOpenedPicClass() {
    let openedPicture = document.getElementById('galleries');
    openedPicture.classList.remove('imageBox');
    openedPicture.classList.add('openedPicture');
    openedPicture.classList.add('opacityOut');
    let hideHeader = document.getElementById('header');
    hideHeader.classList.add('d-none');
    let hideFooter = document.getElementById('footer');
    hideFooter.classList.add('d-none');
}

function smoothPicsRender() {
    let openedPicture = document.getElementById('galleries');
    openedPicture.classList.add('opacityOut');
}

function smoothPicChange() {
    let currentImage = document.getElementById('currentImage');
    currentImage.classList.remove('noOpacity');
}

function openPicture(i) {
    changeOpenedPicClass();
    smoothPicsRender();
    document.getElementById('galleries').innerHTML =
        `
    <section class="imgBg">
        <aside id="asideLeft" class="asides imgBg">
            <img onclick="backToGallery()" id="backArrow" src = "img/icons/back-arrow.png"> 
            <img onclick="moveToLeftPic(${i})" src="img/icons/arrow-left-white.png">
        </aside>
            <div id="openedImage" class="openedImage">
                <img id="currentImage" class="noOpacity" src="${presentationArray[i]}">
                <span id= "counter" class="counter">${[i + 1]} / ${presentationArray.length}</span>
            </div>
        <aside onclick="moveToRightPic(${i})" class="asides imgBg"> 
            <img src="img/icons/arrow-right-white.png">
        </aside>
    </section>
        `
    setTimeout(smoothPicChange, 20);
}

function backToGallery() {
    resetGalleryClass();
    renderPictures();
    changeTitleForPresentation();
}

function moveToRightPic(i) {
    i++;
    let array = presentationArray;
    let currentImage = document.getElementById('currentImage');

    if (i >= presentationArray.length) {
        i = 0;
    } else {
        currentImage.src = array[i];
    }
    openPicture(i);
}

function moveToLeftPic(i) {
    let array = presentationArray;
    let lastArrayElement = presentationArray.length - 1;
    let currentImage = document.getElementById('currentImage');

    if (i == 0) {
        i = lastArrayElement;
    } else {
        i--;
        currentImage.src = array[i];
    }
    openPicture(i);

}


function changeTitle(i) {
    document.getElementById('galleryTitle').innerHTML =
        `
    ${thumbnailName[i]}
        `;
}

// !!!!!!!!!!!!!!!!!!!!!!!!! ONLY FOR PRESENTATION !!!!!!!!!!!!!!!!!
function changeTitleForPresentation() {
    document.getElementById('galleryTitle').innerHTML =
        `
    Diving
    `
}
//  //////////////////////////////////