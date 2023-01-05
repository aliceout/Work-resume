<!doctype html>
<html xml:lang="fr" lang="fr">

    <?php
    $currentPage = 'personnal';
    include('../assets/php/header.php');
    ?>

    <body>
        <div class="container">
            <div id="section" class="section">

                <div id="big-main" class="columns is-multiline">
                    <?php include('sidebar.php'); ?>
                    <main class="column">

                        <div class="columns"> 

                            <section class="column is-full is-half-desktop">
                                <div class="card">
                                    <div class="card-content">
                                        <h3><span class="color">Digital</span></h3>
                                        <p>Creation and administration of a web server, mastery of layout tools, creation of websites.<br><br>
                                            Attraction to digital policy issues, as well as to issues of data security and re-appropriation. Sensitivity to the Free Software project.<br><br> Contribution to open-source projects (feature additions, translations)</p>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-content">
                                        <h3><span class="color">Sports</span></h3>
                                        <p>Practicing mountain sports (hiking, climbing, canyoning), fintness, mountain biking, rollerblading, swimming</p>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-content">
                                        <h3><span class="color">Creative</span></h3>
                                        <p>Furniture making from reclaimed and/or recycled materials</p>
                                    </div>
                                </div>
                            </section>


                            <section class="column is-full is-half-desktop">
                                <div class="card">
                                    <div class="card-content">
                                        <h3><span class="color">Cultural</span></h3>
                                        <strong>Readings</strong> <p>Foreign novels (Middle East, Africa, Asia), science fiction, anticipation, political essays, academic essays</p><br>
                                        <strong>Music &amp; shows</strong>
                                        <p>Piano practice, electronic music creation, theater, concerts, festivals</p><br>
                                        <strong>News</strong>
                                        <p>Important news monitoring - national and international (newspapers, rss feeds, news monitoring, magazines, pure player press, documentary films)</p><br>
                                        <strong>Other</strong> 
                                        <p>Piano practice, theater, concerts, festivals</p><br>
                                        <p>Following numerous MOOCs (massive open online course), on geopolitical, international, ecological topics</p>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-content">
                                        <h3><span class="color">Volunteer</span></h3>
                                        <p>For more information, visit: <a href="benevolat.php">the volunteering page</a></p>
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