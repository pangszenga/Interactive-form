$(document).ready(function(){

  //Global Variables
  const $fields = $(":text").toArray();
  const $emailField = $("#mail")[0];
  const $title = $("#title");
  const $design = $("#design");
  const $color = $("#colors-js-puns");
  const $payment = $("#payment")

  //Setup page
  $fields[0].focus();         //focus on the first field
  $fields.push($emailField);  //array for all fields

  $("#otherTitle").hide();    //hide other title textbox
  $color.hide();              //hide colors until theme selected
  $payment.val("credit card");//default selection for payment
  $("#paypal").hide();        //hide paypal helptext
  $("#bitcoin").hide();       //hide bitcoin helptext

  //functions
  //function to update price of selected activities
  function priceTotal() {
    let price = 0;
    $("input:checked").each(function()
    {
      //look value of selected activity
      price += parseFloat(this.value);
    });//end of loop
    $('#total').val("$" + price.toFixed(2));
  }//end of function




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
  });//end of event listener

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

  });//end of event listener

  //Activity selection
  $("input").on( "change" , function (e)
  {
    let $selected = e.target;
    //activities --> boolean returned

    let frameworks = $('input[name="js-frameworks"]').is(":checked");
    let libs= $('input[name="js-libs"]').is(":checked");
    let express= $('input[name="express"]').is(":checked");
    let node = $('input[name="node"]').is(":checked");

    //conditional selection --> Looking for the selection and clashes
    if (frameworks == true)
    {
      $('[type="checkbox"][name="express"]')[0].disabled = true;
    }
    else if (frameworks == false)
    {
      $('[type="checkbox"][name="express"]')[0].disabled = false;
    }
    else if (libs == true)
    {
      $('[type="checkbox"][name="node"]')[0].disabled = true;
    }
    else if (libs == false)
    {
      $('[type="checkbox"][name="node"]')[0].disabled = false;
    }
    else if (express == true)
    {
      $('[type="checkbox"][name="js-frameworks"]')[0].disabled = true;
    }
    else if (express == false)
    {
      $('[type="checkbox"][name="js-frameworks"]')[0].disabled = false;
    }
    else if (node == true)
    {
      $('[type="checkbox"][name="js-libs"]')[0].disabled = true;
    }
    else if (node == false)
    {
      $('[type="checkbox"][name="js-libs"]')[0].disabled = false;
    };// end of conditional statement

    priceTotal();

  });//end of event listener

  //Payment section
  $payment.on( "change" , function(e)
  { //Setting booleans
    let creditCard = $('#payment option[value="credit card"]').is(":selected");
    let paypal = $('#payment option[value="paypal"]').is(":selected");
    let bitcoin = $('#payment option[value="bitcoin"]').is(":selected");

    //condtional statement to check what is selected
    if (creditCard == true)
    {
      $("#credit-card").show()
      $("#paypal").hide();
      $("#bitcoin").show();
    }
    else if (paypal == true)
    {
      $("#credit-card").hide()
      $("#paypal").show();
      $("#bitcoin").hide();
    }
    else if (bitcoin == true)
    {
      $("#credit-card").hide()
      $("#paypal").hide();
      $("#bitcoin").show();
    };//end of conditional statement

  });//end of event listener







});//end of page load
