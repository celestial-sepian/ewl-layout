


const scroll100 = function() {
    let y = 0;

    const upButton = document.querySelector(".up");
    const downButton = document.querySelector(".down");


    upButton.addEventListener('click', () => {
        console.log("up 200", y);
        
        if (y > 0) {
            y-=200;
            window.scrollTo({
                top: y,
                left: 0,
                behavior: "smooth"
            });
        }
    })


    downButton.addEventListener('click', () => {
        console.log("down 200", y);

        if (y < document.body.scrollHeight) {
            y+=200;
            window.scrollTo({
                top: y,
                left: 0,
                behavior: "smooth"
            })
            
        }
        
    })
};


const scrollFull = () => {
    const upButton = document.querySelector(".up");
    const downButton = document.querySelector(".down");

    upButton.addEventListener('click', () => {
        console.log("up");

        // 
        // scroll to top
        // 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })


    downButton.addEventListener('click', () => {
        console.log("down");
        
        // 
        // // scroll to bottom
        // 
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        })  
        // 

    })
}


scroll100();