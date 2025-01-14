//Assignment 1

function createFullName(firstName, lastName) {

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    document.body.appendChild(mainDiv);

    const paragraph1 = document.createElement("p");
    paragraph1.classList.add("p1");
    mainDiv.appendChild(paragraph1);
    paragraph1.innerText = firstName;

    paragraph1.style.color = "red";
    paragraph1.style.textDecoration = "underline";


    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("p2");
    mainDiv.appendChild(paragraph2);
    paragraph2.innerText = lastName;

    paragraph2.style.fontSize = "50px"
    paragraph2.style.border = "solid 1px"
}

createFullName("Tomer", "Gaddy");



