<?php
$currentPage = 'contact';
include('assets/php/partials/head.php');
?>

<div class="col-md-10">
    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Prendre contact</h2>

            <div class="row">

                <div class="col-sm-4">
                    <button data-toggle="collapse" data-target="#mailForm" class="btn btn-mail btn-lg"><i class="fas fa-paper-plane"></i>&nbsp; Email</button>
                </div>
                <div class="col-sm-4">
                    <button onclick="window.location.href = 'https://join.skype.com/invite/o8a7Gb21ckeS';" class="btn btn-skype btn-lg"><i class="fab fa-skype fa-lg"></i>&nbsp; Skype</button>
                </div>
                <div class="col-sm-4">
                    <button data-toggle="collapse" data-target="#sessionForm" class="btn btn-session btn-lg"><i class="fab fa-keycdn"></i>&nbsp; Session</button>
                </div>
            </div>
        </div>
    </div>

    <div id="mailForm" class="collapse card startwith-h2">
        <div class="card-container">
            <h2>Formulaire de contact</h2>
            <div class="reply-form">
                <div class="alert alert-success hidden" id="contactSuccess">
                    <strong>Réussite!</strong> Votre message a été envoyé.
                </div>

                <div class="alert alert-danger hidden" id="contactError">
                    <strong>Erreur!</strong> Le processus a rencontré un problème.
                </div>
                <form id="contactForm" action="assets/php/tools/contact-form.php" method="post">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nom et prénom *" data-msg-required="Merci d'entrer votre nom." minlength="2" id="name" name="name">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email *" data-msg-required="Merci d'entrer votre adresse email." data-msg-email="Merci d'entrer une adresse email valide." maxlength="100" id="email" name="email">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <textarea class="form-control" rows="4" placeholder="Message *" maxlength="5000" data-msg-required="Merci d'entrer votre message." name="message" id="message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-mail">Envoyer</button>
                </form>
            </div>
        </div>
    </div>

    <div id="sessionForm" class="collapse card startwith-h2">
        <div class="card-container">
            <div class="col-md-7">
                <img src="https://getsession.org/wp-content/uploads/2019/12/sitelogo-1.png">
                <br><br><br>
                <div class="col-md-6">
                    <a href="https://getsession.org/android" target="_blank" class="btn btn-session btn-lg"><i class="fab fa-android"></i>&nbsp;&nbsp; Android</a>
                    <br><br><br>
                    <a href="https://getsession.org/download/" target="_blank" class="btn btn-session btn-lg"><i class="far fa-desktop"></i>&nbsp;&nbsp; Desktop</a>
                </div>
                <div class="col-md-6">
                    <a href="https://getsession.org/iphone" target="_blank" class="btn btn-session btn-lg"><i class="fab fa-apple"></i>&nbsp;&nbsp; iPhone</a>
                    <br><br><br>
                    <a href="https://github.com/loki-project/session-android/releases" target="_blank" class="btn btn-session btn-lg"><i class="fab fa-android"></i>&nbsp;&nbsp; Apk</a>
                </div>
            </div>
            <div class="col-md-5">
                <img src="assets/images/session.png">
            </div>
        </div>
    </div>
</div>


<script type="text/javascript">
    <!--
    function toggle_visibility(mailform) {
        var e = document.getElementById(id);
        if (e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }
    //

    -->
</script>
<?php include('assets/php/partials/end.php'); ?>
