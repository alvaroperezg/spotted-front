# Surf Spotted Frontend

A modern web application for connecting surfers and photographers, built with React, TypeScript, and Clean Architecture principles.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone git@github.com:surf-spotted/spotted-frontend.git
cd surf-spotted/spotted-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up Husky (Git hooks):
```bash
npm run prepare
```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🏗️ Architecture

### Clean Architecture

Our project follows Clean Architecture principles, organizing code into distinct layers:

1. **Presentation Layer** (`src/presentation/`)
   - Components
   - Pages
   - Hooks
   - Contexts

2. **Domain Layer** (`src/domain/`)
   - Entities
   - Use Cases
   - Interfaces
   - Types

3. **Data Layer** (`src/data/`)
   - Repositories
   - API Clients
   - Data Sources

4. **Infrastructure Layer** (`src/infrastructure/`)
   - Configuration
   - Utils
   - Constants

### Atomic Design

We implement Atomic Design methodology for component organization:

1. **Atoms** (`src/presentation/components/atoms/`)
   - Basic building blocks (buttons, inputs, labels)
   - Smallest, most basic components

2. **Molecules** (`src/presentation/components/molecules/`)
   - Combinations of atoms
   - Simple, functional components

3. **Organisms** (`src/presentation/components/organisms/`)
   - Complex UI components
   - Combinations of molecules and atoms

4. **Templates** (`src/presentation/components/templates/`)
   - Page layouts
   - Component arrangements

5. **Pages** (`src/presentation/pages/`)
   - Complete pages
   - Specific instances of templates

## 💻 Development Guidelines

### Code Style

- We use ESLint and Prettier for code formatting
- TypeScript strict mode is enabled
- Follow the established folder structure
- Use meaningful component and variable names
- Write self-documenting code

### Git Workflow

1. **Branch Naming**
   - Feature: `feature/description`
   - Bugfix: `fix/description`
   - Hotfix: `hotfix/description`
   - Release: `release/version`

2. **Commit Messages**
   Follow the conventional commits format:

   ```bash
   type(scope): description
   
   [optional body]
   
   [optional footer]
   ```

   Types:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes
   - `refactor`: Code refactoring
   - `test`: Adding or modifying tests
   - `chore`: Maintenance tasks

3. **Pull Requests**
   - Create PRs for all changes
   - Include a clear description
   - Reference related issues
   - Request reviews from team members

### Code Review Guidelines

1. **Before Submitting**
   - Run tests
   - Check linting
   - Self-review your changes
   - Update documentation if needed

2. **Review Process**
   - Review for functionality
   - Check code quality
   - Verify test coverage
   - Ensure documentation is updated

## 🛠️ Tools and Technologies

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Routing**: React Router
- **Internationalization**: i18next
- **Code Quality**:
  - ESLint
  - Prettier
  - Husky (Git hooks)
  - lint-staged
