<?php
$currentPage = 'index';
include('start-index.php');
?>

<div class="col-md-5">
    <aside>
        <div class="card blue ">
            <div class="about">
                <h4>Bonjour,</h4>
                <p class="text-justify">
                    <small>
                        Fort de six années d'expérience dans le domaine du transport de marchandises, j'ai décidé en 2013, de reprendre mes études.
                        <br><br>
                        En effet, engagé de longue date à titre militant, dans le milieu associatif, sensibilisé à de nombreuses problèmatiques sociales, internationales, et environnementale, j'ai pris la décision de me réorienter, afin de me diriger vers un cadre professionnel correspondant aux valeurs qui sont les miennes.
                        <br><br>
                        De plus, ayant toujours eu un fort attrait pour les questions de politiques et d'actualités internationales c'est tout naturellement que ma reprise d'études c'est d'abord orienté vers un parcours juridique, me permettant d'acquérir les bases nécessaires à la poursuite de mes études, au sein d'une maîtrise de relations internationales et d'un master de politiques publiques en aide humanitaire internationale.
                    </small>
                    <br>
                </p>
            </div>
        </div>

        <div class="card text-center card-cv">
            <div class="card-container">
                <div class="downloadcv">
                    <a href="" onclick="link_skype()" class="btn btn-primary">Me contacter · via Skype</a>
                </div>
            </div>
        </div>
    </aside>
</div>

<div class="col-md-5">
    <aside>
        <div class="card">
            <h3>Dernière formation</h3>
            <div class="education">
                <div class="graduation">
                    <div class="row">
                        <div class="col-md-9 col-sm-9 col-xs-9">
                            <h5><span class="color">Master II · Droit & Action Humanitaire</span></h5>
                            <small>Université Aix-Marseille</small>
                            <div class="date">2019 - 2020 (En cours)</div>
                        </div>
                        <div class="col-md-1">
                            <div class="logo-petit"><img src="assets/images/aix.png"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p><strong>Diplôme d'études supérieures universitaires </strong><br>Juriste internationaliste et humanitaire de terrain<br><br>
                                <a href="education.php">En savoir plus</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h3>Dernier stage</h3>
            <div class="experience">
                <div class="job-position">
                    <div class="row">
                        <div class="col-md-9 col-sm-9 col-xs-9">
                            <small><span class="color">HUMANITÉ &amp; INCLUSION</span></small>
                            <h5>Stagiaire en appui juridique aux études et diagnostiques</h5>
                            <div class="date">2019 · 5 mois</div>
                        </div>
                        <div class="col-md-1">
                            <div class="logo-petit"><img src="assets/images/hi.png"></div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <p>Particpation à la réalisation d'une mission exploratoire, et travail d'analyse du cadre l'égal, pour la réalisation de deux diagnostiques<br><br>
                                <a href="experiences.php">En savoir plus</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</div>
<?php include('assets/php/link/link_skype.php'); ?>
<?php include('end.php'); ?>
