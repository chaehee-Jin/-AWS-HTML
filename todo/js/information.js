class InformationEvent {
    static #instance = null;
    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new InformationEvent();

        }
        return this.#instance;
    }
    addEventPhotoChangeClick() {
        const infoPhoto = document.querySelector(".info-photo");
        infoPhoto.onclick = () => {
            const photoFile = document.querySelector(".photo-file");
            photoFile.click();
        }
    }
    addEventPhotoChange() {
        const photoFile = document.querySelector(".photo-file");
        photoFile.onchange = () => {
            FileService.getInstance().changePhoto();


        }
    }
    addEventAboutMeModifyClick() {
        const aboutMeModifyButton = document.querySelector(".m-aboutme");
        aboutMeModifyButton.onclick = () => {
            const aboutMeSaveButton = document.querySelector(".s-aboutme");
            aboutMeSaveButton.classList.remove("button-hidden");
            aboutMeModifyButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelectorAll(".info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = false;

            });


        }

    }
    addEventAboutMeSaveClick() {
        const aboutMeSaveButton = document.querySelector(".s-aboutme");
        aboutMeSaveButton.onclick = () => {
            const aboutMeModifyButton = document.querySelector(".m-aboutme");
            aboutMeSaveButton.classList.remove("button-hidden");
            aboutMeModifyButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelectorAll(".info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = true;
            });
        }
    }
    addEventIntroduceModifyClick() {
        const IntroduceModifyButton = document.querySelector(".m-introduce");
        IntroduceModifyButton.onclick = () => {
            const IntroduceSaveButton = document.querySelector(".s-introduce");
            IntroduceSaveButton.classList.remove("button-hidden");
            IntroduceModifyButton.classList.add("button-hidden");
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = false;

        }

    }
    addEventIntroduceSaveClick() {
        const IntroduceSaveButton = document.querySelector(".s-introduce");
        IntroduceSaveButton.onclick = () => {
            const IntroduceModifyButton = document.querySelector(".m-introduce");
            IntroduceSaveButton.classList.remove("button-hidden");
            IntroduceModifyButton.classList.add("button-hidden");
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = true;
        }
    }
}
class FileService {
    static #instance = null;
    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new FileService();

        }
        return this.#instance;
    }
    changePhoto() {
        const photoForm = document.querySelector(".photo-form");
        const formData = new FormData(photoForm);
        const fileValue = formData.get("file");
        this.showPreview(fileValue);


    }
    showPreview(fileValue) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(fileValue);

        fileReader.onload = (e) => {
            const photoimg = document.querySelector(".info-photo img");
            photoimg.src = e.target.result;


        }
    }
}
