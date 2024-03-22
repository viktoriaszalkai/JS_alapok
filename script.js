window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
});

function elemekElerese1() {
  const ELEM = $("section h2")[0];
  console.log(ELEM);
}
function elemekElerese2() {
  const ELEM = $("#ide");
  ELEM.eq(0).append("Jó reggelt!");
}
function elemekElerese3() {
  const ELEM = $(".ide");
  ELEM.eq(0).append("<p>Jó reggelt!</p>");
}

function elemekElerese4() {
  const LISTA = $(".lista");

  let txt = "<ul>";
  for (let i = 0; i < 5; i++) {
    txt += `<li>${Math.floor(Math.random() * 20 + 10)}</li>`;
  }
  txt += "</ul>";
  console.log(txt);
  LISTA.eq(0).html(txt);
  return LISTA;
}

function elemekFormazasa1() {
  const LISTA = $(".lista");
  LISTA.eq(0).addClass("formazott");
}

function esemenykezeles1() {
  const LISTA = $(".lista");
  const KATTINTESUTAN = $(".kattintasutan");
  LISTA.on("click", function () {
    KATTINTESUTAN.eq(0).html(LISTA.html())
    LISTA.empty();

  });
}

function esemenykezeles2(){
  const ELSOFELADAT = $("#f1")
}