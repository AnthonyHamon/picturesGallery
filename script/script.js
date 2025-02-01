let thumbnailName = []


function addThumbnail() {
    let defaultValue = "unnamed Thumbnail"
    let input = document.getElementById('thumbnailInput').value;
    if (input == '') {
        input = defaultValue;
        thumbnailName.push(defaultValue);
    } else {
        thumbnailName.push(input);
    }
    setLocalStorage();
    renderThumbnails();
}

function saveThumbnailTitle(i) {
    let thumbnailTitle = document.getElementById(`thumbnailTitle${i}`).innerHTML;
    thumbnailName.splice(i, 1, thumbnailTitle);
    setLocalStorage();
    getLocalStorage();
    toggleEditTitle(i);
}


function toggleEditTitle(i) {
    let x = document.getElementById(`thumbnailTitle${i}`);
    if (x.contentEditable == 'false') {
        x.contentEditable = 'true';
    } else {
        x.contentEditable = 'false'
    }
}

function noThumbnails(){
    if (thumbnailName.length < 1) {
        document.getElementById('thumbnailsCtn').innerHTML =
        `
        <div class="infoText">Add and sort your private galleries here.</div>
        `
    }
}

function deleteThumbnail(i) {
    thumbnailName.splice(i, 1);
    setLocalStorage();
    getLocalStorage();
    renderThumbnails();
    changeTitle(i);
}

function setLocalStorage() {
    let thumbnailNameAsText = JSON.stringify(thumbnailName);
    localStorage.setItem('thumbnailName', thumbnailNameAsText);
    let presentationArrayAsText = JSON.stringify(presentationArray);
    localStorage.setItem('presentationArray', presentationArrayAsText);
}

function getLocalStorage() {
    let thumbnailNameAsText = localStorage.getItem('thumbnailName');
    if (thumbnailNameAsText) {
        thumbnailName = JSON.parse(thumbnailNameAsText);
    }
    let presentationArrayAsText = localStorage.getItem('presentationArray');
    if (presentationArrayAsText) {
        presentationArray = JSON.parse(presentationArrayAsText);
    }
}



function renderThumbnails() {
    getLocalStorage();
    document.getElementById('thumbnailsCtn').innerHTML = '';

// !!!!!!!!!!!!!!!!!!  ONLY FOR PRESENTATION !!!!!!!!!!!!!!!!!!!!!!!!
    renderPresentation()
// /////////////////////////////////////


    for (let i = 0; i < thumbnailName.length; i++) {
        document.getElementById('thumbnailsCtn').innerHTML +=
            `
    <section onclick="changeTitle(${i})" id="thumbnail${i}" class="thumbnail">
                <div class="thumbnailTitle">
                    <span contenteditable= "false" id="thumbnailTitle${i}">${thumbnailName[i]}</span>
                    <div class= "thumbnailTitleImgCtn">
                        <img title="edit & save the Title" onclick= "saveThumbnailTitle(${i})" src="img/icons/edit-2-48.png" alt="">
                        <img onclick="deleteThumbnail(${i})" src="img/icons/trash-9-48.png">
                    </div>
                </div>
                <div onclick="renderPictures()" href="galleryPage.html" id="thumbnailImgs${i}" class="thumbnailImgs">
                    <img src="img/cubePics/hand-creative-abstract-sky-flower-finger-760381-pxhere.com.jpg" alt="">
                    <img src="img/cubePics/landscape-sea-coast-ocean-light-lighthouse-686739-pxhere.com.jpg" alt="">
                    <img src="img/cubePics/light-recreation-orange-red-color-colorful-930015-pxhere.com.jpg" alt="">
                    <img src="img/cubePics/beach-sea-coast-sand-rock-ocean-40921-pxhere.com.jpg" alt="">
                </div>
    </section>
    `;
    }
    document.getElementById('thumbnailInput').value = '';
    // noThumbnails();
}

function renderPresentation(i){
        // !!!!!!!!!!!!!!!!!!!!!!!!! ONLY FOR PRESENTATION !!!!!!!!!!!!!!!!!
        document.getElementById('galleries').innerHTML = 
        `
        <div class="inputCtn">
            <input id="thumbnailInput" placeholder="Give a name to your gallery!">
            <button onclick="addThumbnail()">Add</button>
        </div>
        <section id="thumbnailsCtn" class="thumbnailsCtn">
            <div onclick="changeTitleForPresentation()" id="thumbnail" class="thumbnail">
                <div class="thumbnailTitle">
                    <span contenteditable= "false" id="thumbnailPresentationTitle">Diving</span>
                        <div class= "thumbnailTitleImgCtn"></div>
                </div>
                <div onclick="renderPictures(), changeTitleForPresentation()" href="galleryPage.html" id="thumbnailImgs${i}" class="thumbnailImgs">
                    <img id="randomImage1" src="">
                    <img id="randomImage2" src="">
                    <img id="randomImage3" src="">
                    <img id="randomImage4" src="">
                </div>
            </div>
        </section>
        `;
        renderRandomImage();
    //  //////////////////////////////////////////////////////////////////////////////////////
}

function renderRandomImage(){
    const randomImage1 = presentationArray[Math.floor(Math.random()*presentationArray.length)];
    const randomImage2 = presentationArray[Math.floor(Math.random()*presentationArray.length)];
    const randomImage3= presentationArray[Math.floor(Math.random()*presentationArray.length)];
    const randomImage4 = presentationArray[Math.floor(Math.random()*presentationArray.length)];
    let thumbnailImage1 = document.getElementById('randomImage1');
    let thumbnailImage2 = document.getElementById('randomImage2');
    let thumbnailImage3 = document.getElementById('randomImage3');
    let thumbnailImage4 = document.getElementById('randomImage4');

    thumbnailImage1.src = randomImage1;
    thumbnailImage2.src = randomImage2;
    thumbnailImage3.src = randomImage3;
    thumbnailImage4.src = randomImage4;
}