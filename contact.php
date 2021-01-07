<?php
$currentPage = 'contact';
include('assets/php/partials/head.php');
?>

<div class="col-lg-9 col-xl-10">
    <div class="card startwith-h2">
        <div class="card-container">
            <h2>Prendre contact</h2>

            <div class="row">
                <div class="col-12 col-md-6">
                    <button data-toggle="collapse" data-target="#mailForm" type="button" class="btn btn-mail btn-block"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;&nbsp; Email</button>
                </div>
                <div class="col-12 col-md-6">
                    <button onclick="window.location.href = 'https://join.skype.com/invite/o8a7Gb21ckeS';" type="button" class="btn btn-skype btn-block"><i class="fab fa-skype fa-lg"></i>&nbsp;&nbsp; Skype</button>
                </div>
            </div>
        </div>
    </div>

    <div id="mailForm" class="collapse card startwith-h2">
        <div class="card-container">
            <h2>Formulaire de contact</h2>
            <div class="cw-frm">
                <form action="" method="post">
                    <h3>Contact Form</h3>

                    <!-- Status message -->
                    <?php if(!empty($statusMsg)){ ?>
                    <p class="status-msg <?php echo $status; ?>"><?php echo $statusMsg; ?></p>
                    <?php } ?>

                    <!-- Form fields -->
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" value="<?php echo !empty($postData['name'])?$postData['name']:''; ?>" placeholder="Vos noms et prénoms" required="" />
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" value="<?php echo !empty($postData['email'])?$postData['email']:''; ?>" placeholder="Votre email" required="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <textarea name="message" class="form-control" rows="4" placeholder="Votre message" required=""><?php echo !empty($postData['message'])?$postData['message']:''; ?></textarea>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <!-- Submit button -->
                            <input type="submit" name="submit" class="btn btn-mail btn-block" value="Envoyer">
                        </div>
                        <div class="col-12 col-md-2"></div>
                        <div class="col-12 col-md-6">
                            <!-- Add hCaptcha CAPTCHA box -->
                            <div class="h-captcha" data-sitekey="71fdc48a-0d57-4cf8-b1db-152305e4c202"></div>
                        </div>
                    </div>
                </form>
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
