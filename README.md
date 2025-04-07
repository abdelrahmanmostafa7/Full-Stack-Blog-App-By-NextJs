
# Full-Stack Blog App with Next.js

This is a **modern, feature-rich full-stack blog application** built using **Next.js**, **Prisma**, **MongoDB**, and **NextAuth**. The application is designed to provide a seamless blogging experience with a focus on performance, scalability, and user experience. It allows users to browse blog posts, explore categories, write and edit posts, and manage authentication via Google and GitHub.

## Key Features

### 1. **Dynamic Theming**
- Toggle between **light** and **dark modes** using a custom `ThemeContext`.
- Theme preference is stored persistently for a personalized user experience.

### 2. **Authentication**
- Secure and seamless user authentication powered by **NextAuth**.
- Supports **Google** and **GitHub** OAuth providers.
- Session management with automatic token refresh for a smooth user experience.

### 3. **Rich Text Editor**
- Create and edit blog posts with a **rich text editor** powered by `ReactQuill`.
- Supports formatting options like bold, italic, headings, lists, and more.
- Auto-save drafts to prevent data loss during post creation.

### 4. **Category Management**
- Organize blog posts into **categories** for better discoverability.
- Dynamic category pages with server-side rendering for improved SEO.
- Admins can create, update, and delete categories.

### 5. **Responsive Design**
- Fully responsive UI optimized for **desktop**, **tablet**, and **mobile** devices.
- Built with modern CSS techniques for a consistent look and feel across devices.

### 6. **Prisma ORM**
- Database management using **Prisma** with a **MongoDB** backend.
- Schema includes models for `User`, `Post`, `Category`, and `Comment`.
- Efficient data fetching with Prisma's query optimization.

### 7. **Server-Side Rendering (SSR)**
- Optimized for **SEO** and **performance** with Next.js' SSR capabilities.
- Pre-renders pages on the server to improve load times and search engine rankings.

### 8. **Comment System**
- Users can leave comments on blog posts.
- Nested comment support for threaded discussions.
- Moderation tools for admins to manage comments.

### 10. **Search and Filtering**
- Full-text search functionality to quickly find blog posts.
- Filter posts by categories, tags, or publication date.

### 11. **Image Uploads**
- Upload and manage images for blog posts using **Cloudinary** or local storage.
- Automatic image optimization for faster load times.

