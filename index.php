<html>
<head></head>
   <body>
      <?php
        date_default_timezone_set("Asia/Jakarta");
         $d = date("l");
         
         if ($d == "Saturday")
            echo "Today is " . $d  . "<br>so Have a nice weekend!"; 
         
         else
            echo "Today is " . $d  . "<br>so Have a nice day!"; 
      ?>
   
   </body>
</html>
