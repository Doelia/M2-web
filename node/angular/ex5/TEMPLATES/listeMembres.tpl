<div id="divListeMembres">
    Filtre : <input type="text" ng-model="search.nom">
    <ul>
        <li ng-repeat="membre in membres | filter: search">
            <a href="#/listeMembres/{{$index}}">{{membre.nom}} {{membre.prenom}}</a>
        </li>
    </ul>
</div>
