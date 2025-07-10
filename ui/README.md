# Dog Breed Classifier Frontend 🐕

<div align="center">
  
<img src="https://raw.githubusercontent.com/gbcbaptista/gbcbaptista/main/icon.svg" alt="Gabriel Baptista Logo" width="80" height="80" style="margin-bottom: 20px;">

</div>

A modern, responsive web interface for the Dog Breed Classifier AI application. Built with Next.js, React, and TypeScript, providing an intuitive user experience for dog breed classification with multilingual support.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Drag & Drop Upload**: Easy image uploading with drag-and-drop functionality
- **Real-time Classification**: Instant breed prediction with confidence scores
- **Multilingual Support**: English and Portuguese language options
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Results**: Visual breed information with emojis and descriptions
- **Navigation**: Multi-page application with informative sections

## 🌐 Supported Languages

- **English** (🇺🇸)
- **Português** (🇧🇷)

## 📁 Project Structure

```
ui/
├── package.json              # Project dependencies and scripts
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/           # About page
│   │   │   └── page.tsx
│   │   ├── how-it-works/    # How it works page
│   │   │   └── page.tsx
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── About.tsx        # About section component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Header navigation component
│   │   ├── HowItWorks.tsx   # How it works section
│   │   ├── ImageUpload.tsx  # Image upload component
│   │   ├── LanguageSelector.tsx # Language switcher
│   │   ├── ResultDisplay.tsx # Classification results display
│   │   ├── SupportedBreeds.tsx # Supported breeds showcase
│   │   └── Tips.tsx         # Tips section component
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx # Language context provider
│   └── store/               # State management
│       └── appStore.ts      # Zustand store for app state
└── README.md               # This file
```

## 🛠️ Technology Stack

- **Next.js 15.3.5**: React framework with App Router
- **React 19.0.0**: UI library
- **TypeScript 5**: Type safety and developer experience
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12.23.3**: Animation library
- **Zustand 5.0.6**: State management
- **Next-intl 3.0.0**: Internationalization
- **FontAwesome**: Icon library

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## 🚀 Installation & Setup

### Local Development

1. **Navigate to the UI directory:**

   ```bash
   cd ui
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

The application uses a custom color scheme defined in Tailwind CSS:

- **Primary**: Text and main content
- **Secondary**: Subtle text and descriptions
- **Accent**: Buttons, links, and highlights
- **Background**: Main background color
- **Card**: Component backgrounds

### Typography

- **Font**: Poppins (400, 600, 700 weights)
- **Responsive**: Scales appropriately across screen sizes

## 🧩 Key Components

### ImageUpload Component

- **Drag & Drop**: File upload with visual feedback
- **File Validation**: Accepts image formats only
- **Loading States**: Visual indicators during processing
- **Error Handling**: User-friendly error messages

### ResultDisplay Component

- **Breed Information**: Displays classified breed with emoji
- **Confidence Score**: Shows prediction confidence percentage
- **Breed Descriptions**: Localized breed information
- **Reset Functionality**: Allows users to try another image

### Header Component

- **Navigation**: Links to different sections
- **Language Selector**: Switch between supported languages
- **Responsive**: Mobile-friendly navigation

### SupportedBreeds Component

- **Breed Showcase**: Visual display of all supported breeds
- **Interactive Cards**: Hover effects and animations
- **Localized Content**: Breed names and descriptions in multiple languages

## 🌍 Internationalization

The application supports multiple languages through `next-intl`:

### Language Context

```typescript
const { t, language, setLanguage } = useLanguage();
```

### Translation Keys

- Navigation: `home`, `about`, `howItWorks`
- Upload: `dragAndDrop`, `selectImage`, `analyzing`
- Results: `breed`, `confidence`, `tryAnother`
- Breeds: `breeds.beagle`, `breeds.chihuahua`, etc.
- Descriptions: `breedDescriptions.beagle`, etc.

## 📊 State Management

### Zustand Store

The application uses Zustand for state management:

```typescript
interface AppState {
  imageFile: File | null;
  imageUrl: string | null;
  isLoading: boolean;
  result: {
    breed: string;
    confidence: string;
  } | null;
}
```

### Key Actions

- **setImage**: Handles image upload and API communication
- **setResult**: Updates classification results
- **reset**: Clears current state for new upload

## 🔌 API Integration

### Endpoint Configuration

```typescript
const API_URL = "http://localhost:8000/api/predict";
```

### Image Processing Flow

1. **File Upload**: User selects or drops image file
2. **FormData Creation**: Prepare file for API submission
3. **API Request**: POST request to FastAPI backend
4. **Response Handling**: Process classification results
5. **State Update**: Display results to user

## 🎯 User Experience Features

### Interactive Elements

- **Smooth Animations**: Framer Motion for engaging transitions
- **Hover Effects**: Interactive feedback on buttons and cards
- **Loading States**: Visual indicators during processing
- **Responsive Design**: Optimal experience across devices

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and structure
- **Color Contrast**: Readable text across all themes
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and descriptions

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptive Features

- **Navigation**: Mobile-friendly hamburger menu
- **Grid Layouts**: Responsive column arrangements
- **Typography**: Scalable font sizes
- **Images**: Responsive image sizing

## 🔧 Development Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Styling Architecture

### Tailwind CSS Configuration

- **Custom Colors**: Extended color palette for branding
- **Responsive Utilities**: Mobile-first design approach
- **Component Classes**: Reusable component styling
- **Animation Classes**: Custom animations and transitions

### Component Styling Patterns

- **Consistent Spacing**: Standardized padding and margins
- **Color Consistency**: Unified color usage across components
- **Interactive States**: Hover and focus states for all interactive elements
- **Loading States**: Visual feedback during async operations

## 🚀 Performance Optimizations

- **Next.js 15**: Latest performance improvements
- **Image Optimization**: Automatic image optimization and lazy loading
- **Bundle Splitting**: Automatic code splitting for optimal loading
- **State Management**: Efficient state updates with Zustand

## 🔄 Application Flow

1. **Landing Page**: User sees upload interface and tips
2. **Image Upload**: Drag & drop or file selection
3. **Processing**: Loading state with visual feedback
4. **Results**: Display breed classification with confidence
5. **Navigation**: Access additional information pages
