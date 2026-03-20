document.body.onload=function(){mountainView()};

function mountainView() {
  var canvas = document.createElement("CANVAS");
    canvas.style.border="1px solid black";
canvas.setAttribute("width", "600");
canvas.setAttribute("height","400");

   
        var ctx = canvas.getContext('2d');

        // Langit biru
        ctx.fillStyle = 'skyblue';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Matahari
        ctx.beginPath();
        ctx.arc(500, 80, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill();

        // Gunung
        function drawMountain(x, y, width, height, color) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + width/2, y - height);
            ctx.lineTo(x + width, y);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.stroke();
        }

        drawMountain(50, 300, 200, 150, 'darkgreen');
        drawMountain(200, 300, 250, 180, 'green');
        drawMountain(400, 300, 200, 130, 'forestgreen');

        // Rumput
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 300, canvas.width, 100);

        // Pohon sederhana
        function drawTree(x, y) {
            // Batang
            ctx.fillStyle = 'sienna';
            ctx.fillRect(x, y - 40, 10, 40);
            // Daun
            ctx.beginPath();
            ctx.moveTo(x - 20, y - 40);
            ctx.lineTo(x + 30, y - 40);
            ctx.lineTo(x + 5, y - 80);
            ctx.closePath();
            ctx.fillStyle = 'darkgreen';
            ctx.fill();
        }

        drawTree(400, 300);
        drawTree(500, 300);

        // Burung sederhana
        function drawBird(x, y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 10, y - 5);
            ctx.lineTo(x + 20, y);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Tambahkan beberapa burung di langit
        drawBird(100, 100);
        drawBird(150, 120);
        drawBird(200, 90);
        drawBird(300, 130);
        drawBird(400, 110);
  document.body.appendChild(canvas);
}
