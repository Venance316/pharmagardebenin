# PharmaGardeBénin

Plateforme nationale pour trouver une pharmacie de garde ou ouverte au Bénin.

## Structure

```
pharmagardebenin/
├── app/                  # Pages Next.js (App Router)
├── components/           # Header, Footer, SearchBar, MapView, PharmacyCard
├── lib/                  # Données mock + utilitaires (distance, statut)
├── public/manifest.json  # Config PWA
└── backend/              # API Express + PostgreSQL/PostGIS
    ├── server.js
    ├── routes/           # auth.js, pharmacies.js
    ├── middleware/auth.js
    └── db/schema.sql
```

## Pages livrées

| Page | Fichier |
|---|---|
| Accueil | `app/page.jsx` |
| Trouver une pharmacie | `app/trouver-une-pharmacie/page.jsx` |
| Pharmacies de garde | `app/pharmacies-de-garde/page.jsx` |
| Carte interactive | `app/carte/page.jsx` |
| Toutes les pharmacies | `app/pharmacies/page.jsx` |
| À propos | `app/a-propos/page.jsx` |
| Contact | `app/contact/page.jsx` |
| FAQ | `app/faq/page.jsx` |
| Politique de confidentialité | `app/confidentialite/page.jsx` |
| Conditions d'utilisation | `app/conditions/page.jsx` |
| Tableau de bord admin | `app/admin/page.jsx` |

## Installation frontend

```bash
npm install
cp .env.local.example .env.local   # renseigner votre clé Google Maps API
npm run dev
```

## Installation backend

```bash
cd backend
npm install
cp .env.example .env               # renseigner DATABASE_URL et JWT_SECRET
psql $DATABASE_URL -f db/schema.sql
npm run dev
```

## Ce qui est déjà fonctionnel

- Toutes les pages listées ci-dessus, en français, avec le design Apple-like demandé
  (bleu #0A84FF, blanc, gris clair, noir, coins arrondis, mode sombre).
- Calcul automatique du statut (ouverte / de garde / fermée) selon l'heure (07h00–20h30).
- Recherche par nom / département / commune / arrondissement / quartier.
- Géolocalisation et calcul de distance (Haversine côté front, PostGIS côté back).
- Boutons Appeler, WhatsApp, Itinéraire Google Maps, Voir sur la carte.
- API Express sécurisée (Helmet, CORS, rate limiting, JWT, rôles) avec CRUD pharmacies.
- Schéma PostgreSQL + PostGIS prêt (table `pharmacies`, `gardes`, `utilisateurs`, `recherches`).

## À brancher pour la mise en production

1. Une vraie clé **Google Maps API** dans `.env.local`.
2. La base **PostgreSQL/PostGIS** (schéma fourni dans `backend/db/schema.sql`).
3. Remplacer les données `lib/pharmacies.js` par des appels à `NEXT_PUBLIC_API_URL`.
4. Ajouter un compte administrateur (hash bcrypt) dans la table `utilisateurs`.
5. Icônes PWA réelles dans `public/icons/` (192×192 et 512×512).
6. Configurer HTTPS et un nom de domaine pour la mise en ligne.

## Fonctionnalités futures (prévues dans l'architecture, non développées)

Disponibilité des médicaments, réservation, livraison, Mobile Money, notifications,
apps Android/iOS natives, QR code par pharmacie, historique de recherche, favoris, avis.
