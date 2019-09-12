 import $ from 'jquery'

$(document).ready(()=>  {
   $('#title').text('Поменяли текст');
   $('li.list_item a[data-secret]').on('click',function(e){
      e.preventDefault();// отменяет обработчик по дефолту
    console.log($(this).text())
   })


  const square=$('#square');
  const btn =$('#btn-square');

  btn.on('click',()=>{
   square.toggleClass('square-soft')
  })

   
  square.on('mouseenter',function(){
      $(this).css({
        'background-color': 'green',
         'border-radius': '40px'
        
      });
  })

  })


