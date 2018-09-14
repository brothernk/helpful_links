$(document).ready(function() {

    let links = $(".content");

    for (let i = 0; i < links.length; i++){
        let link = links[i],
            children = link.children

            for (let j = 0; j <children.length; j++){
                let element = children[j]
                if (j%4 === 0){
                    element.classList.add("color");
                }
                else if (j%3 === 0){
                    element.classList.add("color-one");
                }
                else if (j%2 ===0){
                    element.classList.add("color-two");
                }
                else {
                    element.classList.add("color-three");
                }
            }
    }
});