// Cambia los precios de los planes entre mensual y anual.
(function () {
  var botones = document.querySelectorAll('.carnets-sel button');
  botones.forEach(function (b) {
    b.addEventListener('click', function () {
      var anual = b.dataset.p === 'anio', per = anual ? '/año' : '/mes';
      botones.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      document.querySelectorAll('#planes .carnet .px').forEach(function (p) { p.innerHTML = '$' + (anual ? p.dataset.anio : p.dataset.mes) + '<small style="font-size:12px">' + per + '</small>'; });
      document.querySelectorAll('#planes .tot span').forEach(function (p) { p.innerHTML = '$' + (anual ? p.dataset.anio : p.dataset.mes) + '<i>' + per + '</i>'; });
      document.querySelectorAll('#planes .equiv').forEach(function (e) { e.textContent = anual ? e.dataset.anio : ''; });
    });
  });
})();
