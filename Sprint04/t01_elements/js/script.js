const ul = document.getElementById('characters');
const listItems = ul.getElementsByTagName('li');

for (let i = 0; i <= listItems.length - 1; i++) {
    console.log(listItems[i] + " ");
    if(listItems[i].attributes.class == null) {
        listItems[i].className = "unknown";
    }
    if(!(listItems[i].getAttribute("data-element"))) {
        listItems[i].setAttribute("data-element", "none");
    }
}


for (let item of listItems) {
    let info = item.getAttribute('data-element');
    let arrAttr = info.split(' ');
    let br1 = document.createElement('br');
    item.append(br1);
    
    for (let i = 0; i < arrAttr.length; i++) {
        let div = document.createElement('div');
        if (arrAttr[i] === 'none')
            item.insertAdjacentHTML("beforeend", `<div class="elem"><div class="line"></div></div>`);
        else {
            div.classList.add(arrAttr[i]);
            div.classList.add('elem');
            item.append(div);
        }
    }     
}
