function refreshMask () {
  $('.data').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.data').datepicker({
    dateFormat:'dd/mm/yy',
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  });
  $('.telefone').mask("00000000", {placeholder:"____-____"});
  $('.ddd').mask("00", {placeholder:"__"});
  $('.cpf').mask("000.000.000-00", {placeholder:"___.___.___-__"});
  $('.cep').mask("00000-000", {placeholder:"_____-___"});
  $('.rg').mask("0.000.000", {placeholder:"_.___.___"});
  $(".hora").mask("00:00", {placeholder: "__:__"});
  $('.placa').mask("AAA-0000", {placeholder: "___-____"});
}

$(document).ready(function (){
  refreshMask();
});