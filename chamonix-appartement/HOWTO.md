# How-to — Site vitrine appartement Chamonix

Petit guide de référence pour ce site : qui l'a construit, comment le modifier, où il est hébergé.

## 1. Par qui il a été construit

Le site a été développé par **Claude Code** (l'agent de développement d'Anthropic), en échange avec **Charlotte Letamendia** (propriétaire du dépôt), directement dans ce dépôt GitHub [`Izaia64/Playground`](https://github.com/Izaia64/Playground).

Le contenu réel (description, équipements, informations pratiques, photos) a été repris de l'annonce de location existante sur **Gens de Confiance** :
https://gensdeconfiance.com/fr/annonce/91f25244-9c1d-4d40-bf2a-18c3e2aa7510

Les avis clients ne sont pas repris (ils sont réservés aux membres connectés sur Gens de Confiance) : la section « Avis » du site renvoie simplement vers l'annonce d'origine.

## 2. Comment modifier le site

Le site est un site **statique** (HTML/CSS/JS simple), sans framework ni étape de build. Tout se trouve dans le dossier [`chamonix-appartement/`](.) :

| Fichier | Contenu |
|---|---|
| `index.html` | Structure et texte de toutes les sections (héro, appartement, galerie, activités, localisation, avis, contact) |
| `style.css` | Habillage visuel (couleurs, typographie, mise en page responsive) |
| `script.js` | Comportements interactifs (menu mobile, onglets d'activités, formulaire de contact, année du footer) |
| `images/` | Photos de l'appartement |

### Modifier le contenu
Éditer directement `index.html` (texte, sections) et `images/` (photos) — pas besoin d'outil spécial, un éditeur de texte suffit. Ou demander à Claude Code de le faire dans une nouvelle session, en lui indiquant précisément ce qui doit changer.

### Prévisualiser en local avant de publier
Depuis la racine du dépôt :
```bash
python3 -m http.server 8123 --directory chamonix-appartement
```
puis ouvrir http://localhost:8123. (Il existe aussi une config `chamonix-appartement` dans `.claude/launch.json` pour prévisualiser directement depuis Claude Code.)

### Publier une modification
1. Créer une branche, committer les changements
2. Pousser la branche et ouvrir une Pull Request sur GitHub vers `main`
3. Fusionner la PR

**La fusion sur `main` déclenche automatiquement la republication du site en ligne** (voir section suivante) — pas d'étape manuelle supplémentaire.

## 3. Où il est hébergé

Le site est hébergé gratuitement sur **GitHub Pages**, à cette adresse :

**🌐 https://izaia64.github.io/Playground/**

Le déploiement est automatisé par un workflow **GitHub Actions** : [`.github/workflows/deploy-chamonix-pages.yml`](../.github/workflows/deploy-chamonix-pages.yml). À chaque push sur `main` qui touche le dossier `chamonix-appartement/`, le workflow publie automatiquement son contenu sur GitHub Pages (généralement en moins d'une minute).

Pour suivre un déploiement en cours ou consulter l'historique :
```bash
gh run list --workflow=deploy-chamonix-pages.yml
```
