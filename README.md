# Pokémon Scout AI

Première version du site vitrine français de Pokémon Scout AI, projet communautaire indépendant et non commercial autour du Pokémon TCG. Le serveur Discord est ouvert ; les alertes automatisées sont encore en développement. Aucun lien affilié, publicité ou partenariat commercial n’est proposé.

## Technique

HTML5, CSS3 et JavaScript natif, sans framework, backend, dépendance, police distante ou outil de suivi. Le visuel radar est réalisé en CSS, sans illustration Pokémon. Les fichiers sont servis tels quels : aucune compilation nécessaire.

- `index.html` : présentation, fonctionnalités prévues, communauté, présentation neutre du projet et informations légales.
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

L’invitation officielle est `https://discord.gg/yNKcpr32WK`. Les trois boutons Discord (en-tête, accueil et communauté) ouvrent cette adresse dans un nouvel onglet avec `target="_blank"` et `rel="noopener noreferrer"`, y compris sans JavaScript.

Pour modifier l’invitation, mettre à jour les trois liens `data-discord` dans `index.html` et `SITE_CONFIG.discordInviteUrl` dans `script.js`. Formats validés par le JavaScript : `https://discord.gg/CODE` ou `https://discord.com/invite/CODE`. Ne placer aucun secret dans cette configuration publique.

Le serveur Discord existe ; les alertes automatisées sont encore en développement.

Le contact officiel est `pokemonscoutai@gmail.com`, accessible par un lien `mailto:` dans le pied de page et la section Contact, sans JavaScript.

## Informations à compléter avant publication

- Identité et coordonnées légales de l’éditeur, responsable de publication et hébergeur dans les mentions légales.
- Politique de confidentialité selon l’hébergement et les traitements réellement utilisés.
- URL canonique et métadonnées de partage lorsque l’adresse publique sera décidée.

L’affiliation pourra être étudiée ultérieurement ; elle ne fait pas partie de cette première phase. Le site indique explicitement son indépendance vis-à-vis de The Pokémon Company. Aucune identité légale ni adresse postale n’a été inventée : les informations manquantes doivent être renseignées avant toute publication.

## Compatibilité GitHub Pages

Les ressources utilisent des chemins relatifs (`./style.css`, `./script.js`) et les liens de navigation des ancres locales : le site convient à un hébergement à la racine ou sous un chemin de dépôt. `index.html` se trouve à la racine. Aucun routage serveur, variable d’environnement ou processus de build n’est nécessaire.

GitHub Pages n’est pas activé par ce travail. La branche `work` est destinée à une Pull Request vers `main` pour vérification locale ; aucun déploiement du site n’est effectué.

## Vérifications

```sh
node --check script.js
```

Contrôler également la structure HTML, l’unicité des identifiants, les cibles des ancres et la présence des ressources locales. Dans le navigateur : navigation clavier, ouverture des informations légales, affichage mobile et ordinateur, les trois liens Discord et leurs attributs de sécurité. Les fonctionnalités d’alertes décrites sont prévues et non opérationnelles.
