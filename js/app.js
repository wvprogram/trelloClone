// variable for accordion 1 item
let accordionBackgroundOne = document.getElementsByClassName("accordion__item-background--off")[0];
let accordionDetailOne = document.getElementsByClassName("accordion__item-detail--off")[0];

// variable for accordion 2 item
let accordionBackgroundTwo = document.getElementsByClassName("accordion__item-background--off")[1];
let accordionDetailTwo = document.getElementsByClassName("accordion__item-detail--off")[1];

// variable for accordion 3 item
let accordionBackgroundThree = document.getElementsByClassName("accordion__item-background--off")[2];
let accordionDetailThree = document.getElementsByClassName("accordion__item-detail--off")[2];

// variable for accordion images
let accordionImgOne = document.getElementsByClassName("accordion__item-img-hidden")[0];
let accordionImgTwo = document.getElementsByClassName("accordion__item-img-hidden")[1];
let accordionImgThree = document.getElementsByClassName("accordion__item-img-hidden")[2];

// turn on accordion 1 and turn off 2 and 3
let accordionOneOn = () => {
    accordionBackgroundOne.addEventListener("click", () => {
        // remove off and add on css styling for item 1
        accordionBackgroundOne.classList.remove("accordion__item-background--off");
        accordionBackgroundOne.classList.add("accordion__item-background--on");
        accordionDetailOne.classList.remove("accordion__item-detail--off");
        accordionDetailOne.classList.add("accordion__item-detail--on");

        // remove on and add off css styling for item 2 and 3
        accordionBackgroundTwo.classList.remove("accordion__item-background--on");
        accordionDetailTwo.classList.remove("accordion__item-detail--on");
        accordionBackgroundTwo.classList.add("accordion__item-background--off");
        accordionDetailTwo.classList.add("accordion__item-detail--off");

        accordionBackgroundThree.classList.remove("accordion__item-background--on");
        accordionDetailThree.classList.remove("accordion__item-detail--on");
        accordionBackgroundThree.classList.add("accordion__item-background--off");
        accordionDetailThree.classList.add("accordion__item-detail--off");

        // remove hidden and add on visible css styling for image 1
        accordionImgOne.classList.remove("accordion__item-img-hidden");
        accordionImgOne.classList.remove("accordion__item-img-visible");

        // remove visible and add hidden css styling to image 2 and 3
        accordionImgTwo.classList.remove("accordion__item-img-visible");
        accordionImgTwo.classList.add("accordion__item-img-hidden");
        accordionImgThree.classList.remove("accordion__item-img-visible");
        accordionImgThree.classList.add("accordion__item-img-hidden");

        accordionImgOne.classList.remove("image-onload");
    })
}

// turn on accordion 2 and turn off 1 and 3
let accordionTwoOn = () => {
    accordionBackgroundTwo.addEventListener("click", () => {
        // remove off and add on css styling for item 2
        accordionBackgroundTwo.classList.remove("accordion__item-background--off");
        accordionBackgroundTwo.classList.add("accordion__item-background--on");    
        accordionDetailTwo.classList.remove("accordion__item-detail--off");
        accordionDetailTwo.classList.add("accordion__item-detail--on");

        // remove on and add off css styling for item 1 and 3
        accordionBackgroundOne.classList.remove("accordion__item-background--on");
        accordionDetailOne.classList.remove("accordion__item-detail--on");
        accordionBackgroundOne.classList.add("accordion__item-background--off");
        accordionDetailOne.classList.add("accordion__item-detail--off");

        accordionBackgroundThree.classList.remove("accordion__item-background--on");
        accordionDetailThree.classList.remove("accordion__item-detail--on");
        accordionBackgroundThree.classList.add("accordion__item-background--off");
        accordionDetailThree.classList.add("accordion__item-detail--off");

        // remove hidden and add on visible css styling for image 2
        accordionImgTwo.classList.remove("accordion__item-img-hidden");
        accordionImgTwo.classList.remove("accordion__item-img-visible");

        // remove visible and add hidden css styling to image 1 and 3
        accordionImgOne.classList.remove("accordion__item-img-visible");
        accordionImgOne.classList.add("accordion__item-img-hidden");
        accordionImgThree.classList.remove("accordion__item-img-visible");
        accordionImgThree.classList.add("accordion__item-img-hidden");

        ccordionImgOne.classList.remove("image-onload");
    })
}

// turn on accordion 3 and turn off 1 and 2
let accordionThreeOn = () => {
    accordionBackgroundThree.addEventListener("click", () => {
        // remove off and add on css styling for item 3
        accordionBackgroundThree.classList.remove("accordion__item-background--off");
        accordionBackgroundThree.classList.add("accordion__item-background--on");
        accordionDetailThree.classList.remove("accordion__item-detail--off");
        accordionDetailThree.classList.add("accordion__item-detail--on");

        // remove on and add off css styling for item 1 and 2
        accordionBackgroundOne.classList.remove("accordion__item-background--on");
        accordionDetailOne.classList.remove("accordion__item-detail--on");
        accordionBackgroundOne.classList.add("accordion__item-background--off");
        accordionDetailOne.classList.add("accordion__item-detail--off");

        accordionBackgroundTwo.classList.remove("accordion__item-background--on");
        accordionDetailTwo.classList.remove("accordion__item-detail--on");
        accordionBackgroundTwo.classList.add("accordion__item-background--off");
        accordionDetailTwo.classList.add("accordion__item-detail--off");

        // remove hidden and add on visible css styling for image 3
        accordionImgThree.classList.remove("accordion__item-img-hidden");
        accordionImgThree.classList.remove("accordion__item-img-visible");

        // remove visible and add hidden css styling to image 1 and 2
        accordionImgOne.classList.remove("accordion__item-img-visible");
        accordionImgOne.classList.add("accordion__item-img-hidden");
        accordionImgTwo.classList.remove("accordion__item-img-visible");
        accordionImgTwo.classList.add("accordion__item-img-hidden");

        accordionImgOne.classList.remove("image-onload");
    })
}

// function to run the accordion
let accordionSelected = () => {
    accordionOneOn();
    accordionTwoOn();
    accordionThreeOn();
}

// run accordion
accordionSelected();