# M2-web

## Résumé des séances

### Séance du 17/09
- Cours par visio conférence de 3 heures
  - Méthodes agiles, expérience chef de projet...
- Petit TP étude de cas à finir pour la semaine suivante

### Séance du 24/09
- Intervenant GO
  - Bases de GO en 1h30 (https://tour.golang.org/welcome/1)
  - TP1 : https://sif.info-ufr.univ-montp2.fr/hmin302/go/tp1.html#prise-en-main-de-gitlab
    - Pas terminé ni même commencé
  - Explication projet, à rendre pour le 15/10
    - Projet gitlab (explication, sujet, groupes) : https://gitlab.info-ufr.univ-montp2.fr/HMIN302/go-tps/tree/master

### Séance du 01/09
- Intervenant GO
  - Suite et fin du cours (http, routines)
  - TP et projet libre

### Séance du 08/09
- Intervenant Guillaume Kulakowski
  - Blog : http://blog.kulakowski.fr/
  - Support de Cours : http://blog.kulakowski.fr/public/cours/
  - Cours de 3h sur les [Base du web](http://blog.kulakowski.fr/public/cours/um2/2015-2016/1%20-%20Les%20bases%20du%20web/Les%20bases%20du%20Web.pdf)
  	- 35 commandements pour l'optimisation
  - [Petit TP facile sur jQuery](http://blog.kulakowski.fr/public/cours/um2/2015-2016/1%20-%20Les%20bases%20du%20web/TP%20n%c2%b01.tar.gz)

### Séance du 15/10
- Intervenant Guillaume Kulakowski (2ème fois)
- Cours sur [PHP](http://blog.kulakowski.fr/public/cours/um2/2015-2016/2%20-%20Les%20bases%20de%20PHP/Les%20bases%20de%20PHP.pdf)
    - Et un peu de [git et outils de déploiment](http://blog.kulakowski.fr/public/cours/um2/2015-2016/3%20-%20D%C3%A9couverte%20de%20Symfony2/3.1%20-%20DevOps,%20Industrialisation%20&%20Symfony2.pdf) (Devops, industrialisation et Symphony)
- TP sur PHP : Classes, PHP

### Séance du 22/10
- Intervenant Guillaume Kulakowski (3ème fois)
- Cours ["À la découverte de Symphony"](http://blog.kulakowski.fr/public/cours/um2/2015-2016/3%20-%20D%C3%A9couverte%20de%20Symfony2/3.2%20-%20D%C3%A9couverte%20de%20Symfony2.pdf)

### Séance du 19/11
- Intervenant M. Pompidor, première intervention
- Cours
    - Node
        -
    - Angular
        - Un fichier angular.js à inclure pour avoir le framework
        - Des controleurs, indépendants entre eux
            - On peut leur donner des objets dans leur mémoire, "scop"
            - Ils peuvent aussi puisser dans la mémoire "rootscop"
        - Des templates (= vues)
            - Stimulées par les controleurs via les scops
    - Exemple 1
        - Hello world
    - Exemple 2
        - Ajout d'un controller pour définir une valeur par défaut à un modèle attribut
    - Exemple 3
        - Ajout de route pour faire varier le contenu en fonction de l'URL
    - Exemple 4 Appel des templates dans un dossier distant
        - -> Ça fait une requête AJAX pour récupérer le template

### Séance du 3/12

- Annonce projet
    - Sur deux séances, celle-ci incluse
        - Soutenance après les partiels
    - Soit tout seul, soit à deux
    - Pas à rendre, pas de rapport mais à soutenir pendant 10 minutes
    - Sur les interfaces responsives
        - Travail sur l'ergonomie
            - Afficher / masquer...
        - Application de type dictionnaire (voir diko de jeuxdemots)
            - On ne fait que la visualisation
            - Le contenu s'adpate (horizontale, portrait)
        - Récupérer des infos sur jeuxdemots et les afficher joliements, dynamiquement
            - Doit remplir tout l'écran
            - Une seule requête par pages
            - Requête sur l'API http://www.jeuxdemots.org/rezo-xml.php
            - Format XML, bien founis (des fois redondants mais pour que ça aille plus vite)
            - Mise en cache ?
            - Parsing à la main
            - > = rafinement
        - Technos
            - CSS3 (flex ?), Javascript
            - AJAX
            - Boostrap autorisé
            - Ce qu'on veut en fait
    - Evaluation
        - Comment on a fait
        - Ce que ça fait -> samsung galaxy S2
