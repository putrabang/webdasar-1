alert("Website ini menggunakan javascript, kalian bisa mengklik foto profil saya dan lihat hasilnya di bawah")
let myProfile = document.querySelector("#myProfile");
myProfile.setAttribute("src", "assets/image/fotoProfil.jpg");
let tekanHitung = document.createElement('p');
tekanHitung.innerHTML = 'Anda menekan gambar saya <span id="count">0</span> kali';
document.getElementById("klik").appendChild(tekanHitung);
myProfile.addEventListener('click', function(event) {
    document.querySelector('#count').innerText++;
 });

