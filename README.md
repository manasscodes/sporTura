# Sportura ⚡️

Future of Play — find games, meet players, and get on court fast.

<p align="center">
  <img src="assets/icon.png" alt="Sportura" width="100" />
  <br/>
  <i>Built with Expo + MERN</i>
  <br/>
  <a href="https://expo.dev/" target="_blank"><img src="https://img.shields.io/badge/Expo-^51-000?logo=expo&logoColor=white" alt="Expo" /></a>
  <a href="https://reactnative.dev/" target="_blank"><img src="https://img.shields.io/badge/React%20Native-Mobile-61DAFB?logo=react&logoColor=white" alt="React Native" /></a>
  <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/Node.js-Backend-3C873A?logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="https://expressjs.com/" target="_blank"><img src="https://img.shields.io/badge/Express-API-000000?logo=express&logoColor=white" alt="Express" /></a>
  <a href="https://www.mongodb.com/atlas" target="_blank"><img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white" alt="MongoDB Atlas" /></a>
  <a href="LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" /></a>
  <br/>
</p>

---

## Overview 🏆

Sportura is a Playo‑like full‑stack mobile app for sports and play communities. Built with Expo (React Native) on the frontend and a MERN backend (MongoDB, Express, Node.js), Sportura makes it effortless to:

- Discover or create nearby matches
- Join games with players who match your skill and interests
- Manage your profile and sports preferences
- Receive in‑app and push notifications for game invites and updates

The MVP focuses on speed to play and a clean, modern UX for both players and organizers.

---

## MVP Features 🎯

- **Auth**
  - Email/password, Google, or phone‑based sign up and login
  - Secure sessions (JWT) and basic profile onboarding
- **Matches**
  - Create a match: sport, location, date/time, skill level, player cap
  - Join/leave matches nearby; see who’s playing
- **Profiles**
  - Public player profiles with sports interests and short bio
  - View organizer profile and mutual games
- **Notifications**
  - In‑app and push notifications for invites, reminders, updates
- **Venues (optional MVP)**
  - Browse venues, view availability, and attach a venue to a match

---

## Tech Stack 🚀

| Layer         | Technology                                           |
| ------------- | ---------------------------------------------------- |
| Mobile App    | Expo (React Native), TypeScript, NativeWind/Tailwind |
| API           | Node.js, Express, REST                               |
| Database      | MongoDB Atlas, Mongoose                              |
| Auth          | JWT; Google OAuth (optional), phone OTP (optional)   |
| Notifications | Expo Push Notifications, in‑app toasts               |

---

## Architecture

```text
[User (Sportura App)]
        |  HTTPS (REST)
        v
[Express API (Node.js)]  <---->  [Auth Providers (Google/OTP)]
        |
        |  ODM (Mongoose)
        v
   [MongoDB Atlas]
```

Or as Mermaid:

```mermaid
flowchart LR
  A[Sportura App (Expo/React Native)] -- REST/HTTPS --> B[Backend API (Node.js/Express)]
  B -- ODM (Mongoose) --> C[(MongoDB Atlas)]
  A -- Push Tokens --> D[Expo Push Service]
  D -- Notifications --> A
  A -- OAuth --> E[(Google Identity)]
```

---

## Getting Started

### 1) Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)
- An Expo account for push notifications (optional for local dev)
- A MongoDB Atlas cluster (free tier is fine)

### 2) Clone the repository

```bash
git clone https://github.com/your-username/sportura.git
cd sportura
```

### 3) Install dependencies

- Mobile (Expo app at repo root):

```bash
npm install
```

- Backend (create or navigate to `server/` if already present):

```bash
cd server
npm install
```

### 4) Environment variables

Create a `.env` file in `server/`:

```env
# server/.env
PORT=4000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/?retryWrites=true&w=majority
JWT_SECRET=super-secret-string
GOOGLE_CLIENT_ID=your_google_oauth_client_id  # optional
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret  # optional
```

Create an `.env` file for the app (Expo reads `EXPO_PUBLIC_*` at runtime):

```env
# .env (project root)
EXPO_PUBLIC_API_BASE_URL=http://localhost:4000
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=your_google_client_id  # optional
```

> Tip: On a physical device, replace `localhost` with your machine’s LAN IP.

### 5) Run the backend (Express)

```bash
cd server
npm run dev   # uses nodemon, or: node src/index.js
```

### 6) Run the mobile app (Expo)

```bash
# from repo root
npx expo start
```

Scan the QR with the Expo Go app (iOS/Android) or press `i`/`a` to open in the simulator/emulator.

---

## Usage

- **Create your profile**
  1. Sign up with email/Google/phone
  2. Add a display name, home location, preferred sports, and a short bio
- **Create a match**
  1. Tap “Create Match”
  2. Choose sport, skill level, date/time, and location/venue
  3. Set player cap and visibility (public/private)
- **Join a match**
  1. Browse nearby matches on the home feed or map
  2. Tap into a match and hit “Join”
  3. Get updates if the organizer changes time/venue
- **Notifications**
  - Enable push notifications on first launch
  - You’ll receive reminders (e.g., 2 hours before) and last‑minute updates

---

## Folder Structure

A suggested structure for the full stack. This repository currently includes the Expo app; the backend can live in `server/`.

```text
sportura/
├─ app/                        # Expo Router (if used) / screens entry
├─ assets/                     # icons, images, fonts
├─ screens/                    # React Native screens
├─ navigation/                 # navigation stack/tab setup
├─ global.css                  # NativeWind/Tailwind styles
├─ tailwind.config.ts          # Tailwind config
├─ index.ts                    # App entry / Expo
├─ App.tsx                     # Root component
├─ server/                     # Express API (create this folder for backend)
│  ├─ src/
│  │  ├─ index.ts              # Express server bootstrap
│  │  ├─ routes/               # REST routes
│  │  ├─ controllers/          # Request handlers
│  │  ├─ models/               # Mongoose schemas
│  │  ├─ middlewares/          # auth, validation, etc.
│  │  └─ services/             # notifications, external integrations
│  ├─ package.json
│  └─ .env
└─ README.md
```

---

## API Overview (MVP)

- `POST /api/auth/register` — create account
- `POST /api/auth/login` — login, returns JWT
- `GET /api/users/me` — current user profile
- `PUT /api/users/me` — update profile and interests
- `GET /api/matches` — list nearby matches (query by sport, geo)
- `POST /api/matches` — create match (auth required)
- `POST /api/matches/:id/join` — join a match (auth required)
- `POST /api/notifications/subscribe` — register Expo push token

---

## Roadmap

- **Payments & bookings**: split bills, pay‑to‑join, refundable deposits
- **Chat & groups**: real‑time chat, team groups, announcements
- **Gamification**: badges, levels, reputation, MVP of the match
- **AI recommendations**: match suggestions, skill‑based matchmaking
- **Analytics**: player stats, heatmaps, venue performance dashboards
- **Calendar sync**: Google/Apple Calendar integration
- **Advanced venues**: dynamic pricing, court availability, partner APIs

---

## Contributing 🤝

We love contributions! Please:

1. Fork the repo and create a feature branch: `feat/<short‑name>`
2. Follow the existing code style (TypeScript, ESLint/Prettier if configured)
3. Write clear commit messages (Conventional Commits encouraged)
4. Open a PR with a concise description, screenshots, and testing notes

For larger features, open a discussion or issue first to align on scope.

---

## License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

---

## Acknowledgements

- Expo & React Native teams for the superb developer experience
- MongoDB Atlas for hassle‑free database hosting

If Sportura helps you get more people playing, consider giving the repo a ⭐️!
