# Material & Fabrics Collection

A modern web application for managing imported materials and fabrics collections with traditional Pakistani artistry and modern elegance.

## Features

- **Product Management**: Manage crystal tissue, dull tissue, chamak net, and dull net dupattas
- **Contact Management**: Handle customer inquiries and messages
- **Analytics Dashboard**: View performance metrics and category distributions
- **Responsive Design**: Modern UI built with React, TypeScript, and Tailwind CSS
- **Real-time Updates**: Built with React Query for efficient data management

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Radix UI
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (can be extended to PostgreSQL)
- **Build Tools**: Vite, ESBuild
- **State Management**: React Query (TanStack Query)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd MailTriage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
mainfolder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities and configurations
│   └── dist/              # Built frontend assets
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schemas and types
├── dist/                   # Built backend
└── vercel.json            # Vercel deployment config
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create new contact

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
vercel --prod
```

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Push the `dist` folder to your GitHub repository
3. Enable GitHub Pages in your repository settings

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve the static files

## Environment Variables

The application uses the following environment variables:

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode (development/production)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository.
