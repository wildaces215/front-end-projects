$('.btn').click( function(){
  search();
});


function search(){
  var searchTitle=$(".inputText").val();
$.ajax({
  url:"//en.wikipedia.org/w/api.php",
  data: {
    action:'query',
    list:'search',
    srsearch: searchTitle,
    format:'json',
    
  },
    dataType:'jsonp',
    success:function(data){
       var html="";
  for(var x=0;x<10;x++){
    //console.log(data);
    /*create variable for html div */
   html+="<div class='well'>"; 
    //append html to div class
    html+="<h5><a href='https://en.wikipedia.org/wiki/"+data.query.search[x].title.toString()+"'>"+data.query.search[x].title+"</a></h5>"
    html+="<p>"+data.query.search[x].snippet+"</p>"
    html+="</div>"
    $('.searchTitles').html(html);
  } ;  
  
      
    }
 });
};