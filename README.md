# Horizon Banking Platform

<div align="center">
  <br />
    <a href="https://youtu.be/PuOVqP_cjkE?feature=shared" target="_blank">
      <img src="https://github.com/adrianhajdin/banking/assets/151519281/3c03519c-7ebd-4539-b598-49e63d1770b4" alt="Horizon Banking Platform">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">Modern Fintech Banking Application</h3>

   <div align="center">
     A comprehensive financial SaaS platform built with cutting-edge technologies for seamless banking experience.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code Snippets](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether. 

This project demonstrates modern web development practices with secure authentication, real-time data processing, and seamless user experience across all devices.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Appwrite** - Backend-as-a-Service platform
- **Plaid** - Financial data API integration
- **Dwolla** - Payment processing
- **React Hook Form** - Form state management
- **Zod** - Runtime type validation
- **TailwindCSS** - Utility-first CSS framework
- **Chart.js** - Data visualization
- **ShadCN** - Modern UI component library

## <a name="features">🔋 Features</a>

👉 **Ultra-Secure Authentication**: Server-side rendering authentication with comprehensive validations and authorization

👉 **Multi-Bank Integration**: Seamlessly connects with Plaid for linking multiple bank accounts

👉 **Comprehensive Dashboard**: Overview of user accounts showing total balance from all connected banks, recent transactions, spending analytics by categories

👉 **Bank Management**: Complete list of all connected banks with respective balances and detailed account information

👉 **Advanced Transaction History**: Includes pagination and filtering options for viewing transaction history across different banks

👉 **Real-time Synchronization**: Instantly reflects changes across all relevant pages upon connecting new bank accounts

👉 **Secure Fund Transfers**: Enables users to transfer funds using Dwolla with required security fields and recipient verification

👉 **Responsive Design**: Ensures seamless adaptation across various screen sizes and devices, providing consistent user experience on desktop, tablet, and mobile platforms

👉 **Modern Architecture**: Built with scalable code architecture focusing on reusability and maintainability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (version 18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/yourusername/horizon-banking.git
cd horizon-banking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_appwrite_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_USER_COLLECTION_ID=your_user_collection_id
APPWRITE_BANK_COLLECTION_ID=your_bank_collection_id
APPWRITE_TRANSACTION_COLLECTION_ID=your_transaction_collection_id
APPWRITE_SECRET=your_appwrite_secret

# Plaid Configuration
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US,CA

# Dwolla Configuration
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on:
- [Appwrite](https://appwrite.io/)
- [Plaid](https://plaid.com/)
- [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Key Implementation Details</a>

### Authentication Flow
The application implements server-side authentication with proper session management and secure token handling.

### Bank Integration
Utilizes Plaid API for secure bank account linking with real-time transaction syncing and balance updates.

### Payment Processing
Integrates Dwolla for secure money transfers between platform users with comprehensive validation and error handling.

### Real-time Updates
Implements efficient state management to ensure all connected bank data remains synchronized across the application.

## <a name="links">🔗 Assets & Resources</a>

- [Project Assets](https://drive.google.com/file/d/1TVhdnD97LajGsyaiNa6sDs-ap-z1oerA/view?usp=sharing)
- [Live Demo](https://your-demo-link.com)
- [Documentation](https://your-docs-link.com)

## 📁 Project Structure

```
horizon-banking/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── constants/             # Application constants
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## 🚀 Deployment

This project can be deployed on various platforms:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS**

Ensure all environment variables are properly configured in your deployment platform.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/horizon-banking/issues) page
2. Create a new issue with detailed information
3. Review the documentation

## <a name="more">🚀 Advanced Features & Future Enhancements</a>

### Planned Features
- [ ] Investment portfolio tracking
- [ ] Cryptocurrency integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] AI-powered financial insights
- [ ] Multi-currency support

### Performance Optimizations
- Server-side rendering for improved SEO
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient state management

---

<div align="center">
  <p>Built with ❤️ by <a href="https://www.linkedin.com/in/pradeep-selakoti-346a57269/" target="_blank">Pradeep Selakoti</a></p>
  <p>
    <a href="https://www.linkedin.com/in/pradeep-selakoti-346a57269/" target="_blank">
      <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logoColor=white&logo=linkedin" alt="LinkedIn" />
    </a>
    <a href="https://x.com/pradeepselakoti" target="_blank">
      <img src="https://img.shields.io/badge/-Twitter-000000?style=for-the-badge&logoColor=white&logo=x" alt="Twitter" />
    </a>
  </p>
  <p>
    <a href="#table">Back to top</a>
  </p>
</div>
