// フィルタ条件のフォーム用
(function () {
  var field;

  $(window).on('load', function () {
    $('.select').select2();
  
    $('#sample').on('click', '.btn', function () {
      console.log('clicked!');
      $('#sample').find('span').remove();
      $('#sample').find('select').select2({ multiple: true, SelectionAdapter: 'MultipleSelection', width: '100%' });
    });
    $('#sample').on('click', '.btn2', function () {
      console.log('declicked!');
      $('#sample').find('span').remove();
      $('#sample').find('select').select2({ multiple: false, SelectionAdapter: 'SingleSelection', width: '100%' });
    });
  });


})();