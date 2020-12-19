function Figure(figureName){
    let count = document.getElementById('count').value;
    count = parseInt(count);
    if(isNaN(count) || count < 1) {
        alert("incorrect number");
        return;
    }
    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;

    for(let i = 0; i < count; i++){
        let div = document.createElement("div");
        div.classList.add(figureName);

        let size = Math.random()*500 + 50
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;

        div.style.top = `${Math.random()*(viewHeight - size - 100) + 100}px`;
        div.style.left = `${Math.random()*(viewWidth - size)}px`;

        div.onclick = () => {
            if(div.classList.contains("one-clicked")) div.remove();
            div.classList.add("one-clicked");
        }
        document.body.append(div);
    }
}