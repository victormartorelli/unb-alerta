function refreshMask () {
  $('.data').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.data').datepicker({dateFormat:'dd/mm/yy'});
  $('.telefone').mask("00000000", {placeholder:"____-____"});
  $('.ddd').mask("00", {placeholder:"__"});
  $('.cpf').mask("000.000.000-00", {placeholder:"___.___.___-__"});
  $('.cep').mask("00000-000", {placeholder:"_____-___"});
  $('.rg').mask("0.000.000", {placeholder:"_.___.___"});
  $(".hora").mask("00:00", {placeholder: "__:__"});
}

$(document).ready(function (){
  refreshMask();
});