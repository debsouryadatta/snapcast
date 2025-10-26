# Screen Recording & Video Sharing Platform

A full-stack web application for recording your screen, uploading videos, and sharing them with others.

## Features

- **Authentication**: Secure user sign-up and sign-in with Better-Auth & Google
- **Screen Recording**: Capture your screen directly within the app
- **Video Uploading**: Upload videos with public or private visibility
- **Video Sharing**: Share videos via unique links
- **Search**: Find videos quickly with an intuitive search bar
- **Metadata**: Access video ID and URL for easy reference
- **Responsive Design**: Works seamlessly across all devices

## Tech Stack

- **[Next.js](https://nextjs.org/)** - React framework for full-stack applications
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for better code quality
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe ORM for SQL databases
- **[Better Auth](https://www.better-auth.com/)** - Authentication library
- **[Bunny.net](https://bunny.net/)** - Video delivery and storage
- **[Neon.tech](https://neon.tech/)** - Serverless PostgreSQL database
- **[Arcjet](https://arcjet.com/)** - Bot protection and rate limiting

## Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd screen_recording_sharing_app
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

## Configuration

1. Create a `.env` file in the root directory:

```env
# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Database (Neon.tech)
DATABASE_URL=your_neon_database_connection_string

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Bunny.net
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

# Arcjet
ARCJET_API_KEY=
```

2. Set up your Neon.tech database:
   - Sign up at [Neon.tech](https://neon.tech/)
   - Create a new project and get your connection string
   - Add the connection string to your `.env` file as `DATABASE_URL`

3. Obtain credentials from:
   - [Google Cloud Console](https://console.cloud.google.com/)
   - [Better-Auth](https://www.better-auth.com/)
   - [Bunny.net](https://bunny.net/)
   - [Arcjet](https://arcjet.com/)

## Usage

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


