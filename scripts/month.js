let bulan;
switch (new Date().getMonth()){
case 0:
bulan = "Januari";
break;
case 1:
bulan = "Februari";
break;
case 2:
bulan = "Maret";
break;
case 3:
bulan = "April";
break;
case 4:
bulan = "Mei";
break;
case 5:
bulan = "Juni";
break;
case 6:
bulan = "Juli";
break;
case 7:
bulan = "Agustus";
break;
case 8:
bulan = "September";
break;
case 9:
bulan = "Oktober";
break;
case 10:
bulan = "Nopember";
break;
case 11:
bulan = "Desember";
break;
}
document.getElementById("Month").innerHTML=bulan;
