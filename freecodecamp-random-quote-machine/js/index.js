function screen(){
 var quotes=["Fear and uncertiantiy relieve authority.Training is authority","Let Bt be","Hence that general is skilful in attack whose opponent does not know what to defend; and he is skilful in defense whose opponent does not know what to attack.","Somewhere, something incredible is waiting to be known.","Love is, above all, the gift of oneself."];
var people=["Ryan Holiday","The Beatles","Sun Tsu","Carl Sagan","Jean Anouilh"];

  random = Math.floor(Math.random() * quotes.length);
  $('.quote').html(quotes[random]);
  $('#the').html(people[random]);
};