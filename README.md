# Journey Builder React Challenge

A Next.js application for building and managing journey workflows with a visual interface.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

### Backend Setup

1. Clone the backend repository:
```bash
git clone https://github.com/mosaic-avantos/frontendchallengeserver
cd frontendchallengeserver
```

2. Install dependencies and start the server:
```bash
npm install
npm run start
```

The backend server will start running on `http://localhost:3001` or other ports

### Frontend Setup

1. Clone this repository:
```bash
git clone https://github.com/Znerf/5c4a25
cd 5c4a25
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add:
```
NEXT_PUBLIC_API_URL= <YOUR BACKEND URL>
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000` or any other ports

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── atom/              # Basic UI components
│   ├── molecule/          # Composite components
│   └── organism/          # Complex components
├── store/                 # Redux store configuration
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

### Folder Purposes

- **app/**: Contains the main application pages and routing logic
- **components/**: 
  - **atom/**: Smallest, reusable components (buttons, inputs, etc.)
  - **molecule/**: Components composed of multiple atoms (forms, cards, etc.)
  - **organism/**: Complex components that combine molecules (modals, sections, etc.)
- **store/**: Redux store setup and slice definitions
- **types/**: TypeScript interfaces and type definitions
- **utils/**: Helper functions and utilities

## Tech Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit (RTK Query)
- **Type Safety**: TypeScript

## Project Overview

This project is a solution for the Journey Builder React Coding Challenge. It provides a visual interface for building and managing journey workflows, allowing users to:

- Create and manage nodes in a workflow
- Map fields between different nodes
- Visualize the workflow structure
- Handle prerequisites and dependencies

## Challenge Details

For more information about the challenge requirements and specifications, visit:
[Journey Builder React Coding Challenge](https://fluttering-atmosphere-1b5.notion.site/Journey-Builder-React-Coding-Challenge-190d5fe264fa80cba39ec21afc6d42ec)
