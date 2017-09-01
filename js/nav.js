$(document).ready(function() {
    $( "#pubs" ).click(function() {
      $("#links").fadeOut("slow");
      $("#pubUI").fadeIn( "slow");
    });
    $( "#work" ).click(function() {
      $( "#links").fadeOut("slow");
      $("#workUI").fadeIn( "slow");
    });
    $( "#pubback" ).click(function() {
      $( "#pubUI").fadeOut("slow");
      $("#links").fadeIn( "slow");
    });
    $( "#workback" ).click(function() {
      $( "#workUI").fadeOut("slow");
      $("#links").fadeIn( "slow");
    });
});
