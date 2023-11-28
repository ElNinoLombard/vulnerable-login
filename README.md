# Projet de Sécurité - Protection contre les Injections SQL

Ce projet vise à créer une page de connexion sécurisée et à se prémunir contre les attaques par injection SQL.

## Description du Projet

Ce projet est une application de démonstration permettant aux utilisateurs de se connecter en utilisant un nom d'utilisateur et un mot de passe. L'application utilise une base de données SQLite pour stocker les informations des utilisateurs.

## Sécurité Implémentée

### Utilisation des Requêtes Préparées

Le mécanisme de sécurité principal implémenté dans ce projet est l'utilisation de requêtes préparées pour gérer les requêtes SQL. Cela devrait empêcher les attaques par injection SQL, car les paramètres sont traités comme des données et non comme du code SQL exécutable.

### Gestion des Erreurs

Le code gère les erreurs potentielles lors de l'exécution des requêtes SQL et fournit des réponses adaptées pour les scénarios d'erreurs.

## Comment Exécuter le Projet

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/votre-projet.git`
3. Accédez au répertoire du projet : `cd votre-projet`
4. Installez les dépendances : `npm install`
5. Initialisez la base de données : `node server.js`
6. Démarrez le serveur : `npm start`
7. Accédez à l'application via votre navigateur : `http://localhost:3000`

## Remarques Importantes

- Assurez-vous de ne pas utiliser les pratiques de stockage de mots de passe en texte brut en production. Utilisez des méthodes de hachage sécurisé pour stocker les mots de passe.
- Ce projet est conçu à des fins éducatives pour démontrer les principes de sécurité et n'est pas recommandé pour un déploiement en production tel quel.

## Contact

Pour toute question ou clarification supplémentaire, veuillez me contacter à [maxime.lombard@live.com.mx].

---

