# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install` to install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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

