function add() {
    var bil1 = parseFloat(document.f1.n1.value) || 0;
    var bil2 = parseFloat(document.f1.n2.value) || 0;
    document.f1.n3.value = bil1 + bil2;
}

function sub() {
    var bil1 = parseFloat(document.f1.n1.value) || 0;
    var bil2 = parseFloat(document.f1.n2.value) || 0;
    document.f1.n3.value = bil1 - bil2;
}

function mult() {
    var bil1 = parseFloat(document.f1.n1.value) || 0;
    var bil2 = parseFloat(document.f1.n2.value) || 0;
    document.f1.n3.value = bil1 * bil2;
}

function div() {
    var bil1 = parseFloat(document.f1.n1.value) || 0;
    var bil2 = parseFloat(document.f1.n2.value) || 0;
    document.f1.n3.value = bil1 / bil2;
    if (bil2 == 0) {
        alert("Error: Kamu Tidak Dapat Membagi Dengan Nol!");
        document.f1.n3.value = "Error!";
    }
}