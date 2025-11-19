# Local Development Setup

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Steps to Run Locally

### 1. Install Dependencies

First, try installing dependencies:
```bash
npm install --legacy-peer-deps
```

If you encounter permission issues with npm cache, try:
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

Alternatively, if you have yarn installed:
```bash
yarn install
```

### 2. Start the Development Server

Once dependencies are installed, run:
```bash
npm run dev
```

This will start the Vite development server. The server is configured to run on **port 3000**.

### 3. Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

You should see your website running locally with all the changes!

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can:
1. Stop the process using port 3000, or
2. Modify `vite.config.ts` to use a different port

### Dependency Issues
If you continue to have dependency issues:
1. Delete `node_modules` folder (if it exists)
2. Delete `package-lock.json` (if it exists)
3. Run `npm cache clean --force`
4. Run `npm install --legacy-peer-deps` again

### Hot Reload
The development server supports hot module replacement (HMR), so changes to your files will automatically refresh in the browser!

