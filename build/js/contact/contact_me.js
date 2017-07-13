$(document).ready(function(){

  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {},
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      prepareEmail($form, event);
    },
    filter: function() {
      return $(this).is(":visible");
    }
  });

  /*
  $('#contact-form').on('submit', function(e){
    sendEmail($(this).serialize(), false);
    return false;
  });

  $('#modal-form').on('submit','hide.bs.modal',function(e){
    return false;
  });*/

  /*When clicking on Full hide fail/success boxes */
  $('#form-first-name').focus(function() {
    $('#success').html('');
  });

});

function prepareEmail(form, event){
  // get values from FORM
  var thisForm = event.target.getAttribute('id');
  var name = $('#' + thisForm).find("input.name-input").val();
  var email = $('#' + thisForm).find("input.email-input").val();
  var message = $('#' + thisForm).find("textarea.textarea").val();
  sendEmail(new Email(email,name,message), thisForm);
}

/**
 * send email via ajax
 * @param values to send
 * @param isModal to case true close modal
 */
function sendEmail(values, idForm){
  // TODO: add error behavior with modal
  $.ajax({
    url: "././mail/contact_me.php",
    type: "POST",
    dataType: 'json',
    data: {
      name: values.name,
      email: values.email,
      message: values.message
    },
    cache: false,
    beforeSend: function () {
      $('input[type=submit]').attr("disabled","disabled");
    },
    success: function (data) {
      if(data.error){
        console.error('error');
      }
      else if(data.success){
        // Success message
        $('#send-message-modal').modal();
        cleanForm(idForm);
        //close contact modal
        $('#contact-me-modal').modal("hide");
      }
    }, complete: function () {
      $('input[type=submit]').removeAttr("disabled");
    }
  });
}

/**
 * Clean Form after to send an email
 * @param idForm
 */
function cleanForm(idForm){
  $('#' + idForm).trigger("reset");
  $('#' + idForm).find('.form-group').removeClass('success');
}

/**
 * Model Email
 * @param email
 * @param name
 * @param message
 * @constructor
 */
function Email(email, name, message){
  this.email = email;
  this.name = name;
  this.message = message;
  this.toString = function(){
    console.log(this);
  }
}
