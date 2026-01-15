# Dr. Medical Care - Medical Practice Website

A modern, responsive website for a medical doctor's practice built with **React.js**. Features general medicine and wellness services.

## Features

- **4 Main Pages**: Home, What We Do, About Us, Contact Us
- **Wellness Focus**: Dedicated wellness programs and coaching
- **Modern Design**: Responsive, gradient-based UI with smooth animations
- **Mobile Friendly**: Works seamlessly on all devices
- **Contact Form**: Functional inquiry form with validation
- **Interactive Elements**: Smooth scrolling and hover effects
- **React Router**: Client-side routing for seamless navigation

## Tech Stack

- **Frontend**: React 18, React Router v6
- **Styling**: CSS3 with Flexbox and CSS Grid
- **Build**: Create React App with npm
- **Deployment**: Docker + Nginx

## Running Locally (Development)

### Prerequisites
- Node.js (v16 or higher)
- npm

### Install and Run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## Building for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain the production-ready files
```

## Running with Docker

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

The website will be available at `http://localhost:3000` (or whatever port you configured)

### Using Docker CLI

Build the image:
```bash
docker build -t drrivka-medical-site .
```

Run the container:
```bash
docker run -d -p 3000:80 --name drrivka-medical-site drrivka-medical-site
```

### Changing the Port

Edit `docker-compose.yml` and change the ports line:
```yaml
ports:
  - "8080:80"  # Change 8080 to your desired port
```

## Stopping the Container

### With Docker Compose:
```bash
docker-compose down
```

### With Docker CLI:
```bash
docker stop drrivka-medical-site
docker rm drrivka-medical-site
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Navigation.js
│   ├── Footer.js
│   ├── VideoIntro.js
│   └── PageHeader.js
├── pages/            # Page components
│   ├── Home.js
│   ├── WhatWeDo.js
│   ├── AboutUs.js
│   └── ContactUs.js
├── styles/           # CSS files
│   ├── index.css
│   ├── Navigation.css
│   ├── Footer.css
│   ├── Home.css
│   ├── WhatWeDo.css
│   ├── AboutUs.css
│   └── ContactUs.css
├── App.js           # Main App component with routing
└── index.js         # React entry point

public/
└── index.html       # HTML template

package.json         # Dependencies and scripts
```

## Video Intro Setup

The homepage has a video intro section. Choose one of these options:

### Option 1: Use YouTube Video (Easiest - Already Active)
The default setup uses YouTube embedding. To change the video:
1. Find the YouTube video you want to use
2. In `src/components/VideoIntro.js`, find the iframe
3. Replace `dQw4w9WgXcQ` with your YouTube video ID
4. Done!

Example: For URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`

### Option 2: Use Your Own MP4 Video File
1. Download or create a video in MP4 format
   - Free sources: [Pexels Videos](https://www.pexels.com/videos/), [Pixabay Videos](https://www.pixabay.com/videos/)
2. Place the video file at: `public/videos/intro-video.mp4`
3. In `src/components/VideoIntro.js`, comment out the YouTube iframe and add a video tag:
```jsx
<video controls>
  <source src="/videos/intro-video.mp4" type="video/mp4" />
</video>
```

## Customization

### Update Business Information

Edit the following files to customize content:

#### In all components:
- Replace "Dr. Medical Care" with your practice name
- Update phone numbers: (555) 123-4567
- Update email: info@drmedicalcare.com
- Update address: 123 Medical Center Drive

#### In specific files:
- `src/pages/AboutUs.js` - Add doctor's name, credentials, experience
- `src/pages/ContactUs.js` - Update office hours and contact details
- `src/components/VideoIntro.js` - Change YouTube video ID

### Customize Colors

Edit `src/styles/index.css` to change the color scheme:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a86b;
    --accent-color: #ff6b6b;
    /* ... other colors ... */
}
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Prerequisites
- Docker and Docker Compose installed

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

The website will be available at `http://localhost`

### Using Docker CLI

Build the image:
```bash
docker build -t drrivka-medical-site .
```

Run the container:
```bash
docker run -d -p 80:80 --name drrivka-medical-site drrivka-medical-site
```

The website will be available at `http://localhost`

## Stopping the Container

### With Docker Compose:
```bash
docker-compose down
```

### With Docker CLI:
```bash
docker stop drrivka-medical-site
docker rm drrivka-medical-site
```

## Running Locally (Without Docker)

Simply open any of the HTML files in your web browser:
- `index.html` - Homepage
- `what-we-do.html` - Services page
- `about-us.html` - About the doctor
- `contact-us.html` - Contact information and form

## Customization

Edit the following to personalize the site:

### In all HTML files:
- Replace "Dr. Medical Care" with the actual practice name
- Update phone numbers: (555) 123-4567
- Update email: info@drmedicalcare.com
- Update address: 123 Medical Center Drive, Suite 200, Wellness City, ST 12345

### In `about-us.html`:
- Add doctor's name and credentials
- Update years of experience
- Customize mission and values
- Update testimonials

### In `styles.css`:
- Change color scheme by modifying CSS variables in `:root`
- Adjust fonts and spacing as needed

## Video Intro Setup

The homepage has a video intro section. Choose one of these options:

### Option 1: Use YouTube Video (Easiest - No Setup Required)
The default setup uses YouTube embedding. Simply:
1. Find the YouTube video you want to use
2. In `index.html`, find the YouTube iframe section (line ~34)
3. Replace `dQw4w9WgXcQ` with your YouTube video ID
4. Done!

Example: For URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`

### Option 2: Use Your Own MP4 Video File
1. Download or create a video in MP4 format
   - Free sources: [Pexels Videos](https://www.pexels.com/videos/), [Pixabay Videos](https://www.pixabay.com/videos/)
   - Or record one using OBS, ScreenFlow, or your phone
2. Place the video file at: `/home/bpaulse/projects/drrivka/videos/intro-video.mp4`
3. In `index.html`, comment out the YouTube iframe and uncomment the video tag (lines ~31-35)
4. Make sure NGINX serves the videos folder (already configured)

## Files Included

- `index.html` - Homepage with hero section and services overview
- `what-we-do.html` - Detailed services and wellness programs
- `about-us.html` - Doctor profile and testimonials
- `contact-us.html` - Contact form and information
- `styles.css` - Complete styling with responsive design
- `script.js` - Interactive elements and form handling
- `Dockerfile` - Docker configuration
- `docker-compose.yml` - Docker Compose configuration

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

All rights reserved © 2025 Dr. Medical Care
