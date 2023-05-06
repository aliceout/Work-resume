<!doctype html>
<html xml:lang="fr" lang="fr">

    <?php
    $currentPage = 'index';
    include('../assets/php/header.php');
    ?>

    <body>
        <div class="container">
            <div id="section" class="section">

                <div id="big-main" class="columns is-multiline">
                    <?php include('sidebar.php'); ?>
                    <main class="column">
                        <div class="columns sub-main"> 
                            <section class="column">

                                <div class="card card-blue">
                                    <div class="card-content">
                                        <div class="about">
                                            <h3>Bonjour,</h3>
                                            <p>
                                            Après dix années partagées entre les domaines de la solidarité internationale et du transport de marchandises, j'ai décidé de donner un nouvel élan professionnel à ma vie, en me dirigeant vers un métier passion, correspondant à mes attentes et aspirations professionnelles et personnelles.<br><br>
                                            Forte de ces expériences et de mes précédentes formations universitaires (en droit et relations internationales) m’ayant permis d’acquérir de nombreuses compétences et savoir, j’ai décidé de débuter une reconversion professionnelle vers le milieu du développement web et web mobile.<br><br>
                                            C’est à ce titre que j'ai débuté une formation de « Développeuse Full Stack Javascript » en février 2023 au sein de l’école O’Clock.<br><br>
                                            Curieuse, créative, autonome, proactive, dynamique, organisée et habituée au travail en équipe, je sais m’adapter à toutes les situations et environnement de travail.<br><br>
                                            Passionnée par le monde de la tech depuis toujours, et développant d’ores et déjà de nombreux projets web, je suis enthousiaste des prochains défis et découvertes qui s’annoncent. 

                                                <br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="index-recent" class="column">
                                <div class="card card-index">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <h3>PROFIL GITHUB</h3>
                                                <h5><a href="https://github.com/aliceout" target="_blank">aliceout (Alice OsDel)</a></h5>
                                            </div>
                                            <div class="media-left">
                                                <figure>
                                                    <div class="logo"><img src="../assets/images/github.png" alt="Github"></div>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-index">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <h3>Formation en cours</h3>
                                                <h5>Développeuse Full Stack Javascript</h5>
                                                <h6>Ecole O'CLOCK<br>2023</h6>
                                            </div>
                                            <div class="media-left">
                                                <figure>
                                                    <div class="logo"><img src="../assets/images/oclock.png" alt="O'Clock"></div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <a href="education.php">En savoir plus</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-index">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <h3>Dernière expérience</h3>
                                                <h5>MÉDECINS DU MONDE FRANCE</h5>
                                                <h6>Coordinatrice Logistique</h6>
                                                <div class="date">2021-2022</div>
                                            </div>
                                            <div class="media-left">
                                                <figure>
                                                    <div class="logo"><img src="../assets/images/mdm.png" alt="Bioforce"></div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <p>Réponses d'urgence aux besoins de santé des populations affectées par le conflit sur le territoire centrafricain<br>
                                                <a href="experiences.php">En savoir plus</a></p>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </body>
    <?php include('../assets/php/footer.php'); ?>
</html>