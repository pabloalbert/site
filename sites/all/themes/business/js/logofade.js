//Seleciona o elemento do tem com id "logo", o faz desvanecer e a seguir, o faz reaparecer gradualmente.

jQuery(document).ready(function (){
	jQuery("#logo").fadeOut("fast").fadeIn("slow");
});
