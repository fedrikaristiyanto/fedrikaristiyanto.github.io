const Me = {
  Nama_depan:"Fedrik",
  Nama_belakang:"Aristiyanto",
  Nama_lengkap: function() {
   return this.Nama_depan + " " + this.Nama_belakang;
 }
};

document.getElementById("Me").innerHTML= Me.Nama_lengkap();
