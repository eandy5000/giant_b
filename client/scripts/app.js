
//variables
var query = "";
var apikey = "7f088175f0a1a4cf059ef9e5047a62b7d63e8ec2";
var baseUrl = "http://www.giantbomb.com/api";
var results;

// construct the uri with our apikey
var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp';

// functions

function formGather (){
      formData = {};
      $.each($('#searchForm').serializeArray(), function(i, field){
          formData[field.name] = field.value;
      });
      $('#searchForm')[0].reset();
    
    return query = formData.search;
}

function callAPI () {
    $.ajax({
        url : GamesSearchUrl + '&query=' + encodeURI(query),
        dataType :'jsonp',
        crossDomain : true,
        jsonp : 'json_callback',
        success : function(data){
            console.log(data.results); 
            results = data.results;
            return showData();           
        }
    });
    
}

function showData () {
    
     $('#out').empty(); 
     
        for (var i = 0; i < results.length; i++) {
         //console.log(results[i].)
         $('#out').append('<img class="media-object" src='+ results[i].image.medium_url +' >');
         
          }
    
    var el = '<div class="media">'+
                '<div class="media-left">'+
                    '<a href="#">'+
                    '<img class="media-object" src='+ results[2].image.medium_url +' >'+
                    '</a>'+
                '</div>'+
                '<div class="media-body">'+
                    '<h4 class="media-heading">Media heading</h4>'+
                    '...'+
                '</div>'+
            '</div>';
                    
                      
}


$(document).ready(function(){
  
  //form listener
  $('#searchForm').on('submit', function(event){
      event.preventDefault();
      formGather();
      callAPI();
      
  });  
    
});




