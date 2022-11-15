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
                                                Forte de six années d'expérience dans le domaine du transport de marchandises, et ayant acquis de nombreuses compétences transversales, j'ai décidé en 2013, de reprendre mes études.
                                                <br><br>
                                                Engagée de longue date dans le milieu associatif, sur les questions de défense droit des étrangers et de politiques migratoire, sensibilisée à de nombreuses problématiques sociales, internationales, et environnementales, j'ai pris la décision de me réorienter, afin de me diriger vers un cadre professionnel me permetant d'y trouver un sens, et correspondant aux valeurs qui sont miennes.
                                                <br><br>
                                                Après plusieurs expériences associatives à l’étranger (Maroc, Tunisie, RDC, RCA), dans des fonctions liées à logistique, au juridique, ou encore de gestion de projet, j'ai décidé de réorienter mon action professionnelle, au sein de programmes en France ou en Europe, plus ancrés dans l'engagement militant, et sur des postes en lien avec la gestion de projets, et la coordination.
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
                                                <h3>Dernière formation</h3>
                                                <h5>Concevoir et piloter un projet humanitaire</h5>
                                                <h6>INSTITUT BIOFORCE<br>2021</h6>
                                            </div>
                                            <div class="media-left">
                                                <figure>
                                                    <div class="logo"><img src="../assets/images/bioforce.png" alt="Bioforce"></div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div class="content">
                                            Cycle de projets, outils de suivi et de gestion de projets
                                            <br>
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