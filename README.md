
# IPL Social

## Informations étudiant
- **Nom** : Takhtoukh
- **Prénom** : Ahmed
- **Email Vinci** : ahmed.takhtoukh@student.vinci.be

## Dépôt GitHub
https://github.com/ahmed-takhtoukh-vinci/IPL-social

## Description du projet
Le projet IPL Social contient une fonction TypeScript permettant de valider une adresse email
selon les règles fournies dans l’énoncé.

Une adresse est considérée comme valide si :
- elle contient exactement un caractère `@`,
- il y a du texte avant et après le `@`,
- elle ne contient aucun espace,
- la partie domaine contient au moins un point (`.`),
- le point ne peut pas être le dernier caractère de l’adresse.

Le développement a été réalisé en suivant l’approche **TDD (Test Driven Development)**,
avec des tests écrits et exécutés à l’aide du framework **Jest**.
Une pipeline d’intégration continue (CI) est mise en place via **GitHub Actions**
afin d’exécuter automatiquement les tests à chaque push.

## Exécution des tests

npm test
