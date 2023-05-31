
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      var isDrawing = false;
      var lastX = 0;
      var lastY = 0;
      var brushColor = "#000000";
      var draw_width = 3;

    
      function draw(e) {
        if (!isDrawing) return;

        context.strokeStyle = brushColor;
        context.lineWidth = draw_width;

        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.lineCap='round';

    
        lastX = e.offsetX;
        lastY = e.offsetY;
      }

      canvas.addEventListener("mousedown", function(e) {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
      });

      canvas.addEventListener("mousemove", draw);

      canvas.addEventListener("mouseup", function() {
        isDrawing = false;
      });

      canvas.addEventListener("mouseout", function() {
        isDrawing = false;
      });

  
      var penButton = document.getElementById("pen");
      penButton.addEventListener("click", function() {
        brushColor = brushColorElement.value;
      });

      var brushColorElement = document.getElementById("brushColor");
      brushColorElement.addEventListener("change", function() {
        brushColor = brushColorElement.value;
      });

      var eraserButton = document.getElementById("eraser");
      eraserButton.addEventListener("click", function() {
        brushColor = "#FFFFFF";
      });

      var clearButton = document.getElementById("clear");
      clearButton.addEventListener("click", function() {
        context.clearRect(0,0,canvas.width, canvas.height);
      });
   