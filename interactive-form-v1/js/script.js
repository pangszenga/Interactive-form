$(document).ready(function(){

  //Global Variables
  const $fields = $(":text").toArray();
  const $emailField = $("#mail")[0];
  const $title = $("#title");
  const $design = $("#design");
  const $color = $("#colors-js-puns");
  const $activities = $(":checkbox");
  const $activityPrices = [ 200 , 100 , 100 , 100 , 100, 100 , 100]

  console.log($activities);
  //Setup page
  $("#otherTitle").hide();
  $color.hide();
  $fields[0].focus();
  $fields.push($emailField);

  //Title selection
  $title.on("change", function(e)
  {
    let $selected = $(this).val();

    if($selected === "other")
    {
      console.log($selected);
      $("#otherTitle").show();
    }
    else
    {
      console.log($selected);
      $("#otherTitle").hide();
    }
  });//function ends

  //Theme selection
  $design.on("change", function(e)
  {
    let $selected = $(this).val().toLowerCase();
    console.log($selected);
    if($selected === "js puns")
    {
      $color.show();
      //hide I &#9829; JS shirt only
      $('#color option[value="cornflowerblue"]').show();
      $('#color option[value="darkslategrey"]').show();
      $('#color option[value="gold"]').show();
      $('#color option[value="tomato"]').hide();
      $('#color option[value="steelblue"]').hide();
      $('#color option[value="dimgrey"]').hide();
    }
    else if($selected === "heart js")
    {
      //hide JS Puns shirt only
      $color.show();
      //hide I &#9829; JS shirt only
      $('#color option[value="tomato"]').show();
      $('#color option[value="steelblue"]').show();
      $('#color option[value="dimgrey"]').show();
      $('#color option[value="cornflowerblue"]').hide();
      $('#color option[value="darkslategrey"]').hide();
      $('#color option[value="gold"]').hide();
    }
    else
    {
      $color.hide();
    }

  });//function ends

  //Activity selection
  $("input").on( "change" , function (e)
  {
    let $selected = e.target;
    let price = [];

    if ($selected.name === "js-frameworks")
    {
      $selected.checked = true;
      $('[type="checkbox"][name="express"]')[0].disabled = true;
      price.push(100);
      console.log($selected);
    }
    else if ($selected.name === "express")
    {
      $('[type="checkbox"][name="js-frameworks"]')[0].disabled = true;
      price.push(100);
    }
    else if ($selected.name === "js-libs")
    {
      $('[type="checkbox"][name="node"]')[0].disabled = true;
      price.push(100);
    }
    else if ($selected.name === "node")
    {
      $('[type="checkbox"][name="js-libs"]')[0].disabled = true;
      price.push(100);
    }
    else if ($selected.name === "all")
    {
      price.push(200);
    }
    else if ($selected.name === "build-tools")
    {
      price.push(100);
    }
    else if ($selected.name === "npm")
    {
      price.push(100);
    }
    else
    {

    }
    console.log(price);
  });//function ends



});
