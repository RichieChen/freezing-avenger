// JavaScript Document
function json(params, location, success){
	// json request function
  $.ajax({
    type: 'POST',
    url: location,
    data: JSON.stringify(params),
    contentType: "application/json",
    dataType: "json",
    success: success,
    error: function(errorThrown) {return requestError();  }
  });
}