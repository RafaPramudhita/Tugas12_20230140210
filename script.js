function kirimData() {
  var name = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var peminatan = document.querySelector("input[name=peminatan]:checked")?.value;
  var alamat = document.getElementById("alamat").value;
  var angkatan = document.getElementById("angkatan").value;
  var tanggal = document.getElementById("tanggal").value;

  // Validasi sederhana
  if (!name || !nim || !peminatan || !alamat || !angkatan || !tanggal) {
    Swal.fire({
      icon: 'warning',
      title: 'Lengkapi Semua Data!',
      text: 'Semua field wajib diisi.',
      confirmButtonColor: '#ff4b2b'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Data Berhasil Dikirim!',
    html: `
      <strong>Nama:</strong> ${name}<br>
      <strong>NIM:</strong> ${nim}<br>
      <strong>Peminatan:</strong> ${peminatan}<br>
      <strong>Alamat:</strong> ${alamat}<br>
      <strong>Angkatan:</strong> ${angkatan}<br>
      <strong>Tanggal:</strong> ${tanggal}
    `,
    confirmButtonText: 'OK',
    confirmButtonColor: '#ff4b2b'
  });
}