<?php
$currentPage = 'personnal';
include('start.php');
?>

<div class="col-md-5">
    <aside>
        <div class="card ">
            <h3><span class="color">Numériques</span></h3>
            <p>Création et administration d’un serveur web, maitrise outils de mise en page, création de sites web.<br>
                Attrait pour les questions de politques numériques, ainsi que pour les questions de sécurisation et de réapropriation des données. Sensibilité au projet du Logiciel Libre.<br>
                Contribution à des projets open-source (ajouts fonctionnalités, traductions)</p>
        </div>
        <div class="card">
            <h3><span class="color">Sportives</span></h3>
            <p>Pratique de sports de montagne (randonnée, escalade, canyoning), VTT, roller, natation</p>
        </div>
        <div class="card">
            <h3><span class="color">Créatives</span></h3>
            <p>Fabrication de meubles à partir de matériaux de récupération et/ou recyclés</p>
        </div>
    </aside>
</div>

<div class="col-md-5">
    <aside>
        <div class="card ">
            <h3><span class="color">Culturelles</span></h3>
            <strong>Lectures</strong>
            <p>Romans étrangers (Moyen-Orient, Afrique, Asie), <span onclick="link_fanch()">anticipation</span>, science-fiction, essais politiques, essais universitaires</p><br>
            <strong>Actualité</strong>
            <p>Suivi actualité - nationale et internationale - important (journaux, flux rss, veille informationnelle, magazines, presse pure player, films documentaires). Écriture de notes de veille et revues de presse dans cadre <span onclick="link_vault()">associatif</span></p><br>
            <strong>Apprentissage continu</strong>
            <p>Suivi de nombreux MOOC (massive open online course), sur des thèmes géopolitique, internationaux, religieux, <span onclick="link_znouk()">écologique</span></p>
        </div>
        <div class="card ">
            <h3><span class="color">Bénevolat</span></h3>
            <p>Pour plus d'informations, consulter : <a href="benevolat.php">la page Bénevolat</a></p>
        </div>
    </aside>
</div>

<?php include('assets/php/link/link_emergency.php'); ?>
<?php include('end.php'); ?>
