# 🚀 Modern Angular Todo Application

A feature-rich, modern todo application built with **Angular 19** using the latest web technologies. This application demonstrates modern Angular development patterns, responsive design, and best practices for building production-ready applications.

![Angular Todo App](https://img.shields.io/badge/Angular-19.1.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-CSS%20Preprocessor-pink?style=for-the-badge&logo=sass)

## ✨ Features

### 🎯 Core Functionality
- **Create, Edit, Delete Todos** - Full CRUD operations with intuitive interface
- **Real-time Search** - Instant search through your todos
- **Smart Filtering** - Filter by All, Pending, or Completed status
- **Local Storage** - Automatic data persistence in browser storage
- **Offline Support** - Works offline with cached data

### 🎨 Modern UI/UX
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Modern Design System** - Consistent theming with CSS variables
- **Smooth Animations** - Delightful transitions and hover effects
- **Professional Layout** - Clean, intuitive interface design
- **Accessibility** - Keyboard navigation and screen reader support

### 🔧 Technical Excellence
- **Angular 19** - Latest features including signals and standalone components
- **TypeScript** - Full type safety and modern JavaScript features
- **SCSS** - Advanced styling with CSS variables and mixins
- **Performance Optimized** - Efficient rendering and state management
- **Error Handling** - Graceful error states and user feedback

## 🛠️ Technology Stack

- **Frontend Framework:** Angular 19.1.0
- **Language:** TypeScript 5.7.2
- **Styling:** SCSS with CSS Variables
- **State Management:** Angular Signals
- **Data Persistence:** Local Storage
- **API Integration:** JSONPlaceholder (demo data)
- **Build Tool:** Angular CLI 19.1.2

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/angular-todo-app.git
   cd angular-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📱 Application Structure

```
src/
├── app/
│   ├── component/           # Reusable UI components
│   │   ├── header/         # Navigation header
│   │   ├── todoes-item/    # Individual todo item
│   │   ├── greeting/       # Greeting component
│   │   └── counter/        # Counter component
│   ├── home/               # Home page component
│   ├── todoes/             # Main todos management
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── service/            # Data services
│   ├── model/              # TypeScript interfaces
│   └── directives/         # Custom directives
├── styles.scss             # Global styles and design system
└── main.ts                 # Application entry point
```

## 🎯 Key Features Explained

### Todo Management
- **Add New Todos:** Use the form at the top of the todos page
- **Edit Todos:** Click the edit button (✏️) on any todo
- **Delete Todos:** Click the delete button (🗑️) to remove
- **Toggle Status:** Use checkboxes to mark as complete/incomplete

### Search & Filter
- **Real-time Search:** Type to instantly filter todos
- **Status Filtering:** Filter by All, Pending, or Completed
- **Live Statistics:** See counts for total, completed, and pending todos

### Data Persistence
- **Automatic Saving:** Changes are saved to local storage
- **Offline Support:** Works without internet connection
- **Data Recovery:** Fallback to cached data if API fails

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette:** Primary, secondary, and semantic colors
- **Typography:** Consistent font hierarchy and spacing
- **Spacing:** Standardized spacing using CSS variables
- **Components:** Reusable UI components with consistent styling
- **Responsive Breakpoints:** Mobile-first responsive design

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run linting
npm run lint
```

### Code Quality
- **TypeScript:** Full type safety throughout the application
- **ESLint:** Code linting and style enforcement
- **Angular Standards:** Follows Angular style guide and best practices

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop:** Full-featured experience with all controls
- **Tablet:** Optimized layout for medium screens
- **Mobile:** Touch-friendly interface with simplified navigation

## 🚀 Performance Features

- **Lazy Loading:** Components load on demand
- **Signal-based State:** Efficient reactive state management
- **Optimized Bundles:** Tree-shaking and code splitting
- **Fast Rendering:** Minimal DOM manipulation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Angular Team** for the amazing framework
- **JSONPlaceholder** for providing demo API data
- **Angular CLI** for the excellent development tools

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [About page](http://localhost:4200/about) for more information
- Use the [Contact form](http://localhost:4200/contact) to reach out

---

**Built with ❤️ using Angular 19**
