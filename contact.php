<?php
$currentPage = 'contact';
include('assets/php/partials/head.php');
?>

<div class="col-lg-9 col-xl-10">
    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Prendre contact</h2>

            <div class="row">
                <div class="col-12 col-md-4">
                    <button data-toggle="collapse" data-target="#mailForm" type="button" class="btn btn-mail btn-block"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;&nbsp; Email</button>
                </div>
                <div class="col-12 col-md-4">
                    <button onclick="window.location.href = 'https://join.skype.com/invite/o8a7Gb21ckeS';" type="button" class="btn btn-skype btn-block"><i class="fab fa-skype fa-lg"></i>&nbsp;&nbsp; Skype</button>
                </div>
                <div class="col-12 col-md-4">
                    <button data-toggle="collapse" data-target="#sessionForm" type="button" class="btn btn-session btn-block"><i class="fab fa-keycdn"></i>&nbsp;&nbsp; Session</button>
                </div>
            </div>
        </div>
    </div>

    <div id="mailForm" class="collapse card startwith-h2">
        <div class="card-container">
            <h2>Formulaire de contact</h2>
            <div class="reply-form">
                <div class="alert alert-success d-none" id="contactSuccess">
                    <strong>Réussite!</strong> Votre message a été envoyé.
                </div>

                <div class="alert alert-danger d-none" id="contactError">
                    <strong>Erreur!</strong> Le processus a rencontré un problème.
                </div>
                <form id="contactForm" action="assets/php/tools/contact-form.php" method="post">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nom et prénom *" data-msg-required="Merci d'entrer votre nom." minlength="2" id="name" name="name">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email *" data-msg-required="Merci d'entrer votre adresse email." data-msg-email="Merci d'entrer une adresse email valide." maxlength="100" id="email" name="email">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <textarea class="form-control" rows="4" placeholder="Message *" maxlength="5000" data-msg-required="Merci d'entrer votre message." name="message" id="message"></textarea>
                    </div>
                    <div class="col-12 col-md-4">
                        <button type="submit" class="btn btn-mail btn-block">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="sessionForm" class="collapse card startwith-h2">
        <div class="card-container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12">
                            <img class="img-fluid" src="https://getsession.org/wp-content/uploads/2019/12/sitelogo-1.png">
                            <br>
                            <div class="d-none d-lg-block"><br></div>
                            <div class="d-none d-xl-block"><br></div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="row">
                                <div class="col-12">
                                    <a href="https://getsession.org/android" target="_blank" style="text-decoration:none"><button type="button" class="btn btn-session btn-big btn-block"><i class="fab fa-android"></i>&nbsp;&nbsp; Android</button></a>
                                </div>
                                <div class="col-12">
                                    <a href="https://getsession.org/download" target="_blank" style="text-decoration:none"><button class="btn btn-session btn-big btn-block"> <i class="far fa-desktop"></i>&nbsp;&nbsp; Desktop</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="row">
                                <div class="col-12">
                                    <a href="https://getsession.org/iphone" target="_blank" style="text-decoration:none"><button type="button" class="btn btn-session btn-big btn-block"><i class="fab fa-apple"></i>&nbsp;&nbsp; iPhone</button></a>
                                </div>
                                <div class="col-12">
                                    <a href="https://github.com/loki-project/session-android/releases" target="_blank" style="text-decoration:none"><button class="btn btn-session btn-big btn-block"><i class="fab fa-android"></i>&nbsp;&nbsp; Apk</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 offset-lg-1 d-none d-md-block">
                    <img class="img-fluid" src="assets/images/session.png">
                </div>

                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-lg-3 div-copy">
                            <span id="tooltiptext">Copier ID</span>
                            <button onclick="copyID()" class="btn btn-session btn-copy btn-block" data-clipboard-text="05fa315c8b2c9eee0a22a82d3a53dafcb9a0cd7c3f39543c053c693c3ae1066d25">Copier ID</button>
                        </div>
                        <div class="col-11 col-lg-8 alert btn-session-id " role="alert">
                            <strong>05fa315c8b2c9eee0a22a82d3a53dafcb9a0cd7c3f39543c053c693c3ae1066d25</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script type="text/javascript">
            function toggle_visibility(mailform) {
                var e = document.getElementById(id);
                if (e.style.display == 'block')
                    e.style.display = 'none';
                else
                    e.style.display = 'block';
            }

        </script>

        <script type="text/javascript">
            var clip = new Clipboard('.btn');

            clip.on("success", function() {
                document.body.insertAdjacentHTML('beforeend');
            });
            clip.on("error", function() {
                document.body.insertAdjacentHTML('beforeend');
            });

        </script>

        <script type="text/javascript">
            function copyID() {
                var tooltip = document.getElementById("tooltiptext");
                tooltip.innerHTML = "ID copié";
            }

        </script>

        <?php include('assets/php/partials/end.php'); ?>
