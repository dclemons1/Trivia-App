
$(document).ready(function(){
  console.log("ready")
  let i=0;
  
  $.ajax({
    type: 'get',
    url: '/trivia',
    success: function(data){
      $(".id").val(data[i]._id).hide()
      $(".statement").html(data[i].question).show()
      $(".questions").html(data[i].hint).hide() 
      $(".answer").html(data[i].answer).hide()
      $(".carousel-control-prev").hide()
      i++ 
      $(".carousel-control-next").on("click", function(){
        $(".carousel-item img").attr("src", "http://www.hssc.us/wp-content/uploads/2017/06/Trivia.png") 
        
        
            $(".statement").html(data[i].question).show()
            $(".questions").html(data[i].hint).hide() 
            $(".answer").html(data[i].answer).hide() 
            $(".clue").show()
            $(".response").show()
            $(".carousel-control-prev").show()
            i++
            
            if(i>=data.length){
              i=0
            }
          
          })
          
          $(".carousel-control-prev").on("click", function(){
            
            $(".carousel-item img").attr("src", "http://www.hssc.us/wp-content/uploads/2017/06/Trivia.png") 
            
            $(".statement").html(data[i].question).show()
            $(".questions").html(data[i].hint).hide() 
            $(".answer").html(data[i].answer).hide() 
            $(".clue").show()
            $(".response").show()
          
            i--
                      if(i<0){
                      i=data.length
                      --i
                      }
                      console.log(i)
          
          
        })
              
          
    }
  })
  
     
      
  
$(".response").on("click",function(){
  $(".carousel-item img").attr("src", 'http://www.digitalpharmacist.com/wp-content/uploads/2018/08/Trivia.jpg')   
  
  $(".statement").hide()
  $(".questions").hide()
  $(".answer").show() 
  $(".clue").hide()
  $(".response").hide()
})
  $(".clue").on("click",function(){
    $(".clue").hide()
    $(".questions").show()
  })
  $(".newcard").on('click',function(){
    $(".form").show()
  })

  $(".reset").on("click",function(data){

    if($("input").val() === ''){
     $(".reset").off('click')
    }
        // $(".id").val(data[i]._id).show()
        $(".statement").html(data[i].question).show()
        $(".questions").html(data[i].hint).hide() 
        $(".answer").html(data[i].answer).hide() 
      
  })
  
})
