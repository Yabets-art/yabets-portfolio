# Yabets Desalegn - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my work as a Full-Stack Developer and Technical Innovator.

## 🚀 Live Demo

Visit the live site: [https://yabetsdtech.netlify.app](https://yabetsdtech.netlify.app)

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **Contact Form**: Working contact form with Laravel backend integration
- **Project Showcase**: Detailed project cards with modal views
- **Skills Section**: Interactive skills display with progress bars
- **Testimonials**: Client testimonials carousel
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

### Backend (Optional)
- **Laravel** - PHP framework for API
- **MySQL** - Database for contact form submissions
- **Email Integration** - Automated email notifications

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects/
│   │       ├── Testimonials.tsx
│   │       └── Contact.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   └── useIntersectionObserver.ts
│   ├── data/
│   │   └── portfolio.ts
│   └── config/
│       └── api.ts
├── backend/ (Laravel API)
├── public/
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yabets-portfolio.git
   cd yabets-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your API URL if using the backend.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Backend Setup (Optional)

If you want to use the contact form functionality:

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install Laravel dependencies**
   ```bash
   composer install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Configure database and email settings in `.env`**

5. **Run migrations**
   ```bash
   php artisan migrate
   ```

6. **Start Laravel server**
   ```bash
   php artisan serve
   ```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Frontend (Netlify)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Backend (Various Options)
- **Shared Hosting**: Upload Laravel files to your hosting provider
- **VPS**: Deploy on DigitalOcean, AWS, etc.
- **Laravel Forge**: Automated Laravel deployment

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:
- Name, role, and contact details
- Skills and technologies
- Projects and testimonials
- Social media links

### Styling
- Colors: Modify Tailwind config in `tailwind.config.js`
- Fonts: Update font imports in `index.html`
- Animations: Customize Framer Motion animations in components

### Content
- **Hero Section**: Update intro text and animations
- **About Section**: Modify bio and highlights
- **Projects**: Add your own projects with screenshots
- **Skills**: Update your skill levels and categories

## 📱 Features in Detail

### Dark/Light Mode
Automatic theme detection with manual toggle, persisted in localStorage.

### Contact Form
- Form validation
- Email notifications
- Database storage
- Success/error handling

### Project Showcase
- Filterable by category
- Modal with detailed view
- Screenshots carousel
- Live demo and GitHub links

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yabets Desalegn**
- Website: [https://yabetsdtech.netlify.app](https://yabetsdtech.netlify.app)
- Email: yabetsd29@gmail.com
- LinkedIn: [Yabets Desalegn](https://www.linkedin.com/in/yabets-desalegn-b01664255)
- GitHub: [Yabets-arts](https://github.com/Yabets-arts)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Images from [Pexels](https://pexels.com/)
- Animations powered by [Framer Motion](https://framer.com/motion/)

---

⭐ Star this repository if you found it helpful!