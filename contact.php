<?php
$currentPage = 'contact';
include('start.php');
?>

<div class="col-md-10">
    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Formulaire de contact</h2>
            <div class="reply-form">
                <p>Contactez moi par <a href="https://join.skype.com/invite/o8a7Gb21ckeS">Skype</a>, ou bien par email en remplissant le formulaire ci-dessous. </p>
                <div class="alert alert-success hidden" id="contactSuccess">
                    <strong>Réussite!</strong> Votre message a été envoyé.
                </div>

                <div class="alert alert-danger hidden" id="contactError">
                    <strong>Erreur!</strong> Le processus a rencontré un problème.
                </div>
                <form id="contactForm" action="assets/php/contact-form.php" method="post">
                    <div class="form-group">
                        <textarea class="form-control" rows="4" placeholder="Votre message *" maxlength="5000" data-msg-required="Merci d'entrer votre message." name="message" id="message"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Votre nom *" data-msg-required="Merci d'entrer votre nom." minlength="2" id="name" name="name">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Adresse email *" data-msg-required="Merci d'entrer votre adresse email." data-msg-email="Merci d'entrer une adresse email valide." maxlength="100" id="email" name="email">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    </div>

    <?php include('end.php'); ?>
