<div class="col-md-2">
    <div class="fixed-sidebar">

        <header>

            <figure>
                <img src="assets/images/my-photo.png" class="circle middle" alt="">
            </figure>

            <h1>FRANÇOIS <span class="color">DELAMAIDE</span><small>31 ans<br></small></h1>

            <nav>
                <ul class="list-unstyled">
                    <li class="<?php if($currentPage =='index'){echo 'active';}?>"><a href="index.php">Accueil</a></li>
                    <li class="<?php if($currentPage =='experience'){echo 'active';}?>"><a href="experiences.php">Expériences</a></li>
                    <li class="<?php if($currentPage =='education'){echo 'active';}?>"><a href="education.php">Cursus universitaire</a></li>
                    <li class="<?php if($currentPage =='realisations'){echo 'active';}?>"><a href="realisations.php">Réalisations</a></li>
                    <li class="<?php if($currentPage =='benevolat'){echo 'active';}?>"><a href="benevolat.php">Benevolat</a></li>
                    <li class="<?php if($currentPage =='competences'){echo 'active';}?>"><a href="competences.php">Langues & compétences</a></li>
                    <li class="<?php if($currentPage =='personnal'){echo 'active';}?>"><a href="personnal.php">Activités personnelles</a></li>
                    <li><a href="" onclick="linkpdf()">Curriculum <span class="label label-primary">pdf</span></a></li>
                </ul>
                <br>
                <div class="nav-toggle visible-sm visible-xs">
                    <i class="material-icons menu">menu</i>
                    <i class="material-icons close-menu">close</i>
                </div>
            </nav>

        </header>

    </div>
</div>

<?php include('assets/php/link/link.php'); ?>
