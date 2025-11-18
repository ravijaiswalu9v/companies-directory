# 🏢 Companies Directory

A modern, responsive React application for browsing and filtering company information. Built as part of a technical assessment for Frontlines Media.

![Companies Directory](https://img.shields.io/badge/React-18.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0+-38B2AC.svg)
![Status](https://img.shields.io/badge/Status-Complete-success.svg)

## 🌟 Features

- **🔍 Advanced Filtering**
  - Search companies by name
  - Filter by location
  - Filter by industry
  - Combine multiple filters

- **📊 Multiple View Modes**
  - Card view with detailed information
  - Table view for quick scanning
  - Seamless toggle between views

- **🎯 Smart Sorting**
  - Sort by name (A-Z, Z-A)
  - Sort by employee count
  - Sort by founding year

- **📄 Pagination**
  - 6 companies per page
  - Smooth page transitions
  - Smart pagination controls

- **✨ User Experience**
  - Responsive design (mobile, tablet, desktop)
  - Loading states
  - Empty states with helpful messages
  - Smooth animations and transitions

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS 3
- **Build Tool:** Vite
- **Version Control:** Git & GitHub

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/companies-directory.git
cd companies-directory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🏗️ Project Structure
```
companies-directory/
├── src/
│   ├── components/
│   │   ├── CompanyCard.jsx      # Card view component
│   │   ├── CompanyTable.jsx     # Table view component
│   │   ├── FilterBar.jsx        # Filter controls
│   │   ├── ViewControls.jsx     # View toggle & sorting
│   │   ├── Pagination.jsx       # Pagination component
│   │   ├── LoadingSpinner.jsx   # Loading state
│   │   └── Footer.jsx           # Footer component
│   ├── data/
│   │   └── companies.js         # Mock company data
│   ├── App.jsx                  # Main application
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📱 Responsive Design

- **Mobile (< 768px):** Single column card layout
- **Tablet (768px - 1024px):** Two column grid
- **Desktop (> 1024px):** Three column grid

## 🎨 Key Components

### FilterBar
Provides search and filter functionality with real-time updates.

### CompanyCard
Displays company information in an attractive card format with hover effects.

### CompanyTable
Alternative table view for quick data scanning.

### Pagination
Smart pagination with ellipsis for large datasets.

## 🔑 Key Implementation Details

- **State Management:** React Hooks (useState, useMemo, useEffect)
- **Performance:** useMemo for expensive filtering and sorting operations
- **Code Quality:** Clean, modular component architecture
- **User Feedback:** Loading states, empty states, and smooth transitions

## 📝 Assessment Requirements

✅ React-based frontend application  
✅ Display companies in table/card layout  
✅ Filter by name, location, and industry  
✅ Loading and error states  
✅ State management with React hooks  
✅ Responsive design  
✅ **Bonus:** Pagination implemented  
✅ **Bonus:** Sorting functionality  
✅ **Bonus:** Tailwind CSS for styling  

## 🌐 Live Demo

🔗 [View Live Application](#) *(Will be updated after deployment)*

## 👨‍💻 Developer

**[Ravi Jaiswal]**
- GitHub: [@ravijaiswalu9v](https://github.com/ravijaiswalu9v)
- LinkedIn: [ravi-jaiswal-b58b77206](https://linkedin.com/in/ravi-jaiswal-b58b77206)
- Email: ravijaiswalu9v@gmail.com

## 📄 License

This project was created as part of a technical assessment for Frontlines Media.

---

**Built with ❤️ using React and Tailwind CSS**