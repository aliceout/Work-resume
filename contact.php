<?php
$currentPage = 'contact';
include('assets/php/partials/head.php');
?>

<div class="col-md-10">
    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Me contacter</h2>

            <div class="row">
                <div class="col-sm-6">
                    <button onclick="window.location.href = 'https://join.skype.com/invite/o8a7Gb21ckeS';" class="btn btn-skype btn-lg"><i class="fab fa-skype fa-lg"></i> Contacter moi par Skype</button>
                </div>
            </div>
        </div>
    </div>

    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Formulaire de contact</h2>
            <div class="reply-form">
                <form role="form" method="post" id="reused_form">

                    <div class="form-group">
                        <textarea class="form-control" type="textarea" rows="4" placeholder="Votre message" maxlength="5000" data-msg-required="Merci d'entrer votre message." name="message" id="message"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Votre nom" data-msg-required="Merci d'entrer votre nom." minlength="3" maxlength="50" id="name" name="name">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Votre email" data-msg-required="Merci d'entrer votre adresse email." data-msg-email="Merci d'entrer une adresse email valide." minlength="7" maxlength="100" id="email" name="email">
                            </div>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="assets/php/contact-form/captcha.php" id="captcha_image" />
                            <span class="icon is-large">
                                <a id="captcha_reload" href="#"><i class="far fa-redo fa-lg"></i></a>
                            </span>
                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" required id="captcha" name="captcha" placeholder="Captcha code">
                        </div>
                        <div class="col-sm-3">
                            <button type="submit" class="btn btn-primary btn-lg btn-success " id="btnContactUs"><i class="fas fa-paper-plane"></i> Envoyer moi un email</button>
                        </div>
                    </div>
                </form>

                <div id="success_message" style="width:100%; height:100%; display:none; ">
                    <h3>Sent your message successfully!</h3>
                </div>
                <div id="error_message" style="width:100%; height:100%; display:none; ">
                    <h3>Error</h3> Sorry there was an error sending your form.
                </div>
            </div>
        </div>
    </div>
    <?php include('assets/php/partials/end.php'); ?>
