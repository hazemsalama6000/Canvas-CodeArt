




const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//when mouse move
// canvas.addEventListener('mousemove', function (e) {
//     ctx.strokeStyle = '#000';
//     ctx.arc(e.x, e.y, 50, Math.PI, 2 * Math.PI);
//     ctx.stroke();
// });


let atoms = [];

/* canvas.addEventListener('mousemove', function (e) {
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y));
    }
}); */

// or


class Atom {
    stepX = 0;
    stepY = 0;
    x = 0;
    y = 0;
    radius = 20;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.stepX = (Math.random() * 4) - 2; //-2 -> +2
        this.stepY = (Math.random() * 4) - 2; //-2 -> +2
    }

    move() {
        this.x += this.stepX;
        this.y += this.stepY;
        this.radius -= .1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function animate() {
    atoms.forEach((item, index) => {
        item.draw();
        item.move();
        if (item.radius < .3) {
            atoms.splice(index, 1);
        }
    });

    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    requestAnimationFrame(animate);
}

animate();

degree = 0;
x = 0;
y = 0;


//Math.cos((degree / 180) * Math.PI) // gives in range -1 --> +1

function generateAtom() {
    /*    x = Math.random() * canvas.width;
       y = Math.random() * canvas.height;
       const atomObj = new Atom(x, y);
       atoms.push(atomObj);
     */
    //cos here gives step    
    x = (canvas.width / 2) + Math.cos((degree / 180) * Math.PI * 1) * 200;
    pix = Math.cos((degree / 180) * Math.PI * 1);
    y = (canvas.height / 2) + ((pix * pix))* 0.5 * -1000;


    atoms.push(new Atom(x, y));
    degree++;
    requestAnimationFrame(generateAtom);
}

generateAtom();

