# Cours de developpement Node js / Meteor.js

## Instalation de Meteor  
Sur meteor.com --> la doc  

Pour les systèmes basés sur unix  
curl https://install.meteor.com/ | sh

Pour rappel : curl permet d'appeler des système distant
Typiquement des appels d'URL  

Pour Microsoft, il faut installer Chocolatey qui permet de "compiler" meteor  
Install de chocolatey : choco install meteor

Chocolatey se charge de l'install de meteor et des paquets

# Lancement d'un nouveau projet  

Meteor create --bare NOM_APP  
Ex : meteor create --bare pascherpascher  

meteor create --react NOM_APP  
meteor create NOM_APP  

# Installation de paquets de base  
### React  
npm i react react-dom react-router react-router-dom  

react : coule de source  
react-dom paquet qui permet a react de manipuler le dom d'une page  
react-router : permet de créer les routes de l'appli  
react-router-dom : Tous les composants React pour gérer les routes par ex : Route , Switch , BrowserRouter...  

### Systeme de gestion des utilisateurs  
Ce systeme il est
