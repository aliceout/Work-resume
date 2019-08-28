<?php
$currentPage = 'personnal';
include('start.php');
?>

<div class="col-md-5">
    <aside>
        <div class="card ">
            <h3><span class="color">Numériques</span></h3>
            <p><span title="Damasio 020307">Création</span> et administration d’un serveur web, maitrise outils de mise en page, création de sites web.<br>
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
            <p>Romans étrangers (Moyen-Orient, Afrique, Asie), anticipation, science-fiction, essais politiques, essais <span onclick="link_fanch()">universitaires</span></p><br>
            <strong>Actualité</strong>
            <p>Suivi actualité - nationale et internationale - important (journaux, flux rss, veille informationnelle, magazines, presse pure player, films documentaires). Écriture de notes de veille et revues de presse dans cadre associatif</p><br>
            <strong>Apprentissage continu</strong>
            <p>Suivi de nombreux MOOC (massive open online course), sur des thèmes <span  onclick="link_explain-znouk()">géopolitique</span>, <span  onclick="link_wiki-znouk()">internationaux</span>, <span onclick="link_cyber-znouk()">religieux</span>, <span onclick="link_cloud-znouk()">écologique</span></p>
        </div>
        <div class="card ">
            <h3><span class="color">Bénevolat</span></h3>
            <p>Pour plus d'informations, consulter : <a href="benevolat.php">la page Bénevolat</a></p>
        </div>
    </aside>
</div>

<?php include('assets/php/link/link_emergency.php'); ?>
<?php include('end.php'); ?>
