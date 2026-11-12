# Pokémon Scout AI

Première version du site vitrine français de Pokémon Scout AI, communauté indépendante dédiée aux offres et aux disponibilités de produits Pokémon TCG en France. Le serveur Discord est ouvert ; les alertes automatisées sont encore en développement. Aucun lien affilié, publicité ou partenariat commercial n’est proposé.

## Technique

HTML5, CSS3 et JavaScript natif, sans framework, backend, dépendance, police distante ou outil de suivi. Le visuel radar est réalisé en CSS, sans illustration Pokémon. Les fichiers sont servis tels quels : aucune compilation nécessaire.

- `index.html` : présentation, fonctionnalités prévues, communauté, préparation de l’affiliation et accès aux pages légales.
- `mentions-legales.html` et `confidentialite.html` : documents préparatoires reprenant le thème existant.
- `style.css` : thème sombre, responsive, états de focus et respect des préférences de mouvement réduit.
- `script.js` : configuration Discord, validation de l’invitation, année du pied de page et ouverture des informations légales.
- `package.json` : commande de prévisualisation Codex utilisant Python 3, sans dépendance npm. La prévisualisation locale est possible sans installation de dépendances.

## Prévisualiser localement

Depuis le dépôt, avec Python 3 :

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Ouvrir `http://127.0.0.1:8000`. On peut également ouvrir `index.html` directement.

## Configurer Discord

L’invitation officielle est `https://discord.gg/yNKcpr32WK`. Les trois boutons Discord (en-tête, accueil et communauté) ouvrent cette adresse dans un nouvel onglet avec `target="_blank"` et `rel="noopener noreferrer"`, y compris sans JavaScript.

L’invitation doit rester inchangée pour cette mission. Configuration existante : les trois liens `data-discord` dans `index.html` et `SITE_CONFIG.discordInviteUrl` dans `script.js`. Formats validés par le JavaScript : `https://discord.gg/CODE` ou `https://discord.com/invite/CODE`. Ne placer aucun secret dans cette configuration publique.

Le serveur Discord existe ; les alertes automatisées sont encore en développement.

Aucune adresse de contact n’est publiée dans cette version préparatoire : l’adresse précédemment affichée a été retirée par précaution pour ne pas exposer de coordonnée du propriétaire sans confirmation de son usage public pour le projet.

## Informations à compléter avant publication

- Identité et coordonnées légales de l’éditeur, responsable de publication et hébergeur dans les mentions légales.
- Politique de confidentialité selon l’hébergement et les traitements réellement utilisés.
- URL canonique et métadonnées de partage lorsque l’adresse publique sera décidée.

La section transparence prépare une future affiliation Amazon sans annoncer de partenariat actif. Aucun lien marchand, identifiant partenaire ou lien affilié fictif n’est ajouté.

La mention suivante est conservée dans un commentaire HTML de `index.html`, invisible dans la page, à l’emplacement de la section transparence :

> En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.

Ne la rendre visible qu’après validation de l’inscription et activation de l’affiliation. Vérifier alors les exigences du programme, signaler les liens concernés et adapter les documents aux traitements réels. Aucune activation automatique n’est prévue.

Les deux pages légales restent des brouillons incomplets, sans identité, adresse, SIRET ni hébergeur inventés. Le site indique explicitement son indépendance vis-à-vis de The Pokémon Company. Aucune identité légale ni adresse postale n’a été inventée : les informations manquantes doivent être renseignées avant toute publication.

## Compatibilité GitHub Pages

Les ressources utilisent des chemins relatifs (`./style.css`, `./script.js`) et les liens de navigation des ancres locales : le site convient à un hébergement à la racine ou sous un chemin de dépôt. `index.html` se trouve à la racine. Aucun routage serveur, variable d’environnement ou processus de build n’est nécessaire.

GitHub Pages n’est pas activé par ce travail. La branche `work` est destinée à une Pull Request vers `main` pour vérification locale ; aucun déploiement du site n’est effectué.

## Vérifications

```sh
node --check script.js
```

Contrôler également la structure HTML, l’unicité des identifiants, les cibles des ancres et la présence des ressources locales. Dans le navigateur : navigation clavier, ouverture des informations légales, affichage mobile et ordinateur, les trois liens Discord et leurs attributs de sécurité. Les fonctionnalités d’alertes décrites sont prévues et non opérationnelles.

## Contrôles de cette préparation à l’affiliation

Vérifications locales effectuées avec Chromium et Playwright (outils de l’environnement, sans ajout de dépendance au projet) :

- Trois pages testées aux largeurs 320, 375, 650, 768, 1024 et 1440 px : aucun débordement horizontal.
- Inspection visuelle des captures de l’accueil mobile/ordinateur et des deux pages légales sur mobile.
- Liens de pages, retour à l’accueil, ancres historiques, lien d’évitement au clavier et navigation sans JavaScript vérifiés.
- Trois liens Discord, attributs de sécurité et configuration JavaScript conservés. La validité de l’invitation côté Discord n’a pas été testée.
- Radar animé conservé ; arrêt de l’animation avec la préférence de mouvement réduit vérifié.
- Aucun cookie, stockage local/session ou appel réseau externe automatique observé ; aucune erreur JavaScript.
- Identifiants HTML uniques, cibles des ancres et ressources locales vérifiés ; CSS chargé et interprété par Chromium. Ces contrôles ne constituent pas une certification W3C.
- `node --check script.js` et `git diff --check` réussis. `script.js` et `package.json` inchangés ; styles précédents conservés intégralement, avec ajout limité aux pages légales.

Les pages légales sont préparatoires, à compléter selon la situation et l’hébergement réels. Aucun déploiement, activation de GitHub Pages ou fusion de la PR nº 1 n’est autorisé par cette étape. Toute mise en ligne attend une validation explicite.
