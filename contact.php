<?php
$currentPage = 'contact';
include('start.php');
?>

<div class="col-md-10">
    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Contact info</h2>

            <div class="contact-details">
                <ul class="list-unstyled">
                    <li>
                        <p>Me contacter via <a href="https://join.skype.com/invite/o8a7Gb21ckeS">Skype</a></p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card-container">
            <h2>Contactez moi par email</h2>
            <div class="reply-form">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac tellus vel orci pharetra gravida.</p>
                <div class="alert alert-success hidden" id="contactSuccess">
                    <strong>Success!</strong> Votre message a été envoyé.
                </div>

                <div class="alert alert-danger hidden" id="contactError">
                    <strong>Erreur!</strong> Le processus a rencontré un problème.
                </div>
                <form id="contactForm" action="assets/php/contact-form.php" method="post">
                    <div class="form-group">
                        <textarea class="form-control" rows="4" placeholder="Votre message..." maxlength="5000" data-msg-required="Please enter your message." name="message" id="message"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nom *" data-msg-required="Please enter your name." minlength="2" id="name" name="name">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email *" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" id="email" name="email">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    </div>

</div>

<?php include('end.php'); ?>