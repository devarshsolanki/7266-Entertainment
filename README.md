# 7266 Entertainment Solutions

## Overview
7266 Entertainment Solutions is a professional event management and entertainment service provider based in Winnipeg, MB, Canada. This website showcases the services, packages, and equipment offered by the company to make events unforgettable. It is built using modern web technologies like React, Vite, and TailwindCSS.

## Features
1. **Responsive Design**: The website is fully responsive and optimized for all devices, ensuring a seamless user experience.
2. **Interactive Animations**: Smooth animations and transitions enhance the visual appeal of the website.
3. **Dynamic Content**: The website dynamically displays information about services, packages, and gear using React components.
4. **Contact Form**: A fully functional contact form integrated with EmailJS for sending inquiries directly to the company.
5. **WhatsApp Integration**: A floating WhatsApp button allows users to contact the company instantly.
6. **SEO-Friendly**: The website is designed with SEO best practices to improve visibility on search engines.

## Pages
### 1. **Home**
   - Provides an overview of the company and its services.
   - Includes interactive images with descriptions of key offerings.

### 2. **Gear**
   - Displays a detailed list of equipment available for events, such as sound systems, lighting, dance floors, and more.
   - Features animations triggered by scrolling.

### 3. **Packages**
   - Lists three customizable packages: Silver, Gold, and Diamond.
   - Each package includes a description, pricing, and features.

### 4. **Contact**
   - A form for users to submit inquiries, including fields for name, email, phone, package selection, event date, and additional details.
   - Integrated with EmailJS for email notifications.
   - Includes a FAQ section to address common questions.

### 5. **Footer**
   - Displays contact information, social media links, and quick navigation links.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **TailwindCSS**: For styling and responsive design.
- **EmailJS**: For handling form submissions and sending emails.
- **React DatePicker**: For selecting event dates in the contact form.

## Project Structure
The project is organized as follows:
- `src/component`: Contains reusable components like the navigation bar (`nave.jsx`) and footer (`footar.jsx`).
- `src/pages`: Contains individual pages such as `home.jsx`, `gear.jsx`, `packages.jsx`, and `Contact.jsx`.
- `public`: Stores static assets like images and logos.
- `src/assets`: Stores additional assets like SVGs.

## Environment Variables
The project uses the following environment variables stored in the `.env` file:
- `VITE_SERVICE_ID`: EmailJS service ID.
- `VITE_TEMPLATE_ID`: EmailJS template ID.
- `VITE_PUBLIC_KEY`: EmailJS public key.

Ensure these variables are correctly configured for the contact form to work.

## How to Run the Project
1. Clone the repository to your local machine.
2. Install dependencies:
   ```bash
   npm install