<aside id="fixed-sidebar" class="column is-full-touch is-full-desktop is-2-widescreen">

    <figure class="image">
        <img id="color-picture" class="circle middle" src="../assets/images/color-picture.jpg" alt="Photo de profil">
        <img id="grey-picture" class="circle middle" src="../assets/images/grey-picture.jpg" alt="Photo de profil">
    </figure>

    <h1 id="name">ALICE<br>
        <span class="name-color">DELAMAIDE</span><br>
        <small id="age">34 years old<br></small>
    </h1>

    <nav>
        <ul id="navList" class="list-unstyled">
            <a href="index.php"><li class="<?php if($currentPage =='index'){echo 'active';}?>">Home</li></a>
            <a href="experiences.php"><li class="<?php if($currentPage =='experience'){echo 'active';}?>">Experiences</li></a>
            <a href="education.php"><li class="<?php if($currentPage =='education'){echo 'active';}?>">University</li></a>
            <a href="benevolat.php"><li class="<?php if($currentPage =='benevolat'){echo 'active';}?>">Volunteering</li></a>
            <!-- <a href="realisations.php"><li class="<?php if($currentPage =='realisations'){echo 'active';}?>">Achievements</li></a> -->
            <a href="skills.php"><li class="<?php if($currentPage =='skills'){echo 'active';}?>">Languages &amp; skills</li></a>
            <a href="personnal.php"><li class="<?php if($currentPage =='personnal'){echo 'active';}?>">Personal activities</li></a>
            <a href="https://join.skype.com/invite/II99wpbBBR78" target="_blank"><li class="contact">Contact me</li></a>
            <a href="https://cloud.ofanch.me/s/zjZq82exoLn2ntp#pdfviewer" target="_blank"><li class="resume">Curriculum vitae</li></a>
        </ul>
        <div id="navToggle">
            <i id="openBtn" class="active">
                <span class=" fa fa-bars fa-lg"></span>
                <span class="name">MENU</span>
            </i>
            <i id="closeBtn">
                <span class=" fa fa-times fa-lg"></span>
                <span class="name">CLOSE</span>
            </i>
        </div>
    </nav>

</aside>