# Pokémon Scout AI

Première version du site vitrine français de Pokémon Scout AI, projet indépendant d’alertes de disponibilité Pokémon TCG en développement. Aucune alerte, donnée de stock ou offre commerciale opérationnelle n’est présentée.

## Technique

HTML5, CSS3 et JavaScript natif, sans framework, backend, dépendance, police distante ou outil de suivi. Le visuel radar est réalisé en CSS, sans illustration Pokémon. Les fichiers sont servis tels quels : aucune compilation nécessaire.

- `index.html` : présentation, fonctionnalités prévues, communauté, affiliation et informations légales.
- `style.css` : thème sombre, responsive, états de focus et respect des préférences de mouvement réduit.
- `script.js` : configuration Discord, validation de l’invitation, année du pied de page et ouverture des informations légales.
- `package.json` : commande de prévisualisation Codex utilisant Python 3, sans dépendance npm. Le relais Codex a échoué pendant les essais ; l’affichage intégré reste non validé.

## Prévisualiser localement

Depuis le dépôt, avec Python 3 :

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Ouvrir `http://127.0.0.1:8000`. On peut également ouvrir `index.html` directement.

## Configurer Discord

Dans `script.js`, renseigner `SITE_CONFIG.discordInviteUrl` avec une véritable invitation HTTPS fournie par le responsable du projet. Formats acceptés : `https://discord.gg/CODE` ou `https://discord.com/invite/CODE`.

La valeur est vide par défaut. Sans invitation valide, les boutons mènent à la section communauté et à son message d’indisponibilité. Aucun faux lien n’est utilisé. Avec une invitation valide, les deux boutons de conversion ouvrent Discord dans un nouvel onglet ; le bouton d’en-tête mène à la section communauté. Ne placer aucun secret dans cette configuration publique.

## Informations à compléter avant publication

- Identité et coordonnées légales de l’éditeur, responsable de publication et hébergeur dans les mentions légales.
- Canal de contact réel et lien Discord, lorsqu’ils sont disponibles.
- Politique de confidentialité selon l’hébergement et les traitements réellement utilisés.
- URL canonique et métadonnées de partage lorsque l’adresse publique sera décidée.

La mention d’affiliation décrit un usage futur ; tout futur lien affilié devra être signalé. Le site indique explicitement son indépendance vis-à-vis de The Pokémon Company.

## Compatibilité GitHub Pages

Les ressources utilisent des chemins relatifs (`./style.css`, `./script.js`) et les liens de navigation des ancres locales : le site convient à un hébergement à la racine ou sous un chemin de dépôt. `index.html` se trouve à la racine. Aucun routage serveur, variable d’environnement ou processus de build n’est nécessaire.

GitHub Pages n’est pas activé par ce travail. La branche `work` est destinée à une Pull Request vers `main` pour vérification locale ; aucun déploiement du site n’est effectué.

## Vérifications

```sh
node --check script.js
```

Contrôler également la structure HTML, l’unicité des identifiants, les cibles des ancres et la présence des ressources locales. Dans le navigateur : navigation clavier, ouverture des informations légales, affichage mobile et ordinateur, absence d’invitation puis configuration d’une invitation valide. Les fonctionnalités d’alertes décrites sont prévues et non opérationnelles.
