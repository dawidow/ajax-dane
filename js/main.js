$(function() {
	$('button').click(function(){
		$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
			$('body').append('<div id="dane-programisty">Użytkownik: ' + data.imie +' '+ data.nazwisko + ', zawód: ' + data.zawod + ', firma: ' + data.firma +'</div>');
		})		
	})	
})