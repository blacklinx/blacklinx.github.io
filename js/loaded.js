let p1 = document.getElementsByClassName("p1");
let p2 = document.getElementsByClassName("p2");
let p3 = document.getElementsByClassName("p3");
let p4 = document.getElementsByClassName("p4");

//Disable right clicking
document.addEventListener("contextmenu", event => event.preventDefault());

//Draw matrix effect
setInterval(draw, 35);

//Set custom cursor
document.body.style.cursor = "url('/assets/cursor.png'), auto";

/*   setTimeout(function() {
    $(".banner").show();
  }, 6500);
  
  setTimeout(function() {
    $(".bannertitle").show();
  }, 7000);
  
  setTimeout(function() {
    $(".nav").show();
  }, 8000);
  
  setTimeout(function() {
    $(".container").show();
    $(".footer").show();
  }, 9000); */

$(window).on("resize", function() {
    resizeCanvas();
});

//Dynamically resizes the canvas to the width and height of the viewport
function resizeCanvas() {
    let canvas = $("#c");
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
}

//Show paragraph when mouse hovers over grid boxes, hide when the mouse leaves
$(".box1").mouseenter(function() {
    p1[0].style.visibility = "visible";
});
$(".box1").mouseleave(function() {
    p1[0].style.visibility = "hidden";
});

$(".box2").mouseenter(function() {
    p2[0].style.visibility = "visible";
});
$(".box2").mouseleave(function() {
    p2[0].style.visibility = "hidden";
});

$(".box3").mouseenter(function() {
    p3[0].style.visibility = "visible";
});
$(".box3").mouseleave(function() {
    p3[0].style.visibility = "hidden";
});

$(".box4").mouseenter(function() {
    p4[0].style.visibility = "visible";
});
$(".box4").mouseleave(function() {
    p4[0].style.visibility = "hidden";
});

//Credit: Techgokul (https://gist.github.com/Techgokul)
//#region MATRIX
let c = document.getElementById("c");
let ctx = c.getContext("2d");

//Make the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//The letters to be used
let letters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝZ012345789:・.=*+-<>¦｜çﾘｸ";

//Converting the string into an array of single characters
letters = letters.split("");

let font_size = 15;

//Number of columns for the rain
let columns = c.width / font_size;

//An array of drops, one per column
let drops = [];

//X below is the Y coordinate
//1 = y co-ordinate of the drop (same for every drop initially)
for (let x = 0; x < columns; x++) drops[x] = 1;
//Drawing the characters
function draw() {
    //Black BG for the canvas
    //Translucent background to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0"; //Green text
    ctx.font = font_size + "px arial";

    //Looping over drops
    for (let i = 0; i < drops.length; i++) {
        //A random letter to print
        let text = letters[Math.floor(Math.random() * letters.length)];

        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //Sending the drop back to the top randomly after it has crossed the screen
        //Make the drops randomly scatter across the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

        //Incrementing Y coordinate
        drops[i]++;
    }
}
//#endregion

/* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
/* function marqueeTitle(c, a, m) {
  let title = (c || document.title) + " " + (a || "-") + " ";
  setInterval(function() {
    title = title.substring(1) + title.charAt(0);
    document.title = title;
  }, m || 100);
} */