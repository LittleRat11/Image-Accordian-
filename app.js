const items = document.querySelectorAll(".item");
let imgURLs = [
    "./imgs/luffy.jpeg",
    "./imgs/zoro.jpeg",
    "./imgs/nami.jpeg",
    "./imgs/sanji.jpeg",
    "./imgs/usopp.jpeg",
    "./imgs/chopper.jpeg",
    "./imgs/robin.jpeg",
];

// *initial empty
let deviceType = "";
let events = {
    mouse: {
        start: "mouseover",
        end: "mouseout"
    },
    touch: {
        start: "touchstart",
        end: "touchend"
    }
}

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false
    }
}
isTouchDevice();

items.forEach((item, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imgURLs[index]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    item.appendChild(img)

    // *initial css properties for all times
    item.style.flex = "1";
    item.style.transition = "flex 0.8s ease";

    item.addEventListener(events[deviceType].start, () => {
        item.style.flex = "7" //*Expand the item
    })

    item.addEventListener(events[deviceType].end, () => {
        item.style.flex = "1";
    })
})