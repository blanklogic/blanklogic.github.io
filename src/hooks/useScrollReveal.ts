import { useEffect, useRef } from 'react';

// Hook for scroll reveal functionality
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with the section-reveal class
    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

// Lazy load images hook for performance
export const useLazyLoad = () => {
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img instanceof HTMLImageElement && img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => imageObserver.observe(img));

    return () => {
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);
};

// // Main App wrapper component that applies all optimizations
// const OptimizedApp = ({ children }) => {
//   useScrollReveal();
//   useLazyLoad();

//   // Debounce scroll events for better performance
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           // Your scroll handling logic here
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return <>{children}</>;
// };

// // Example usage component showing how to integrate everything
// const ExamplePortfolioApp = () => {
//   return (
//     <OptimizedApp>
//       <div className="min-h-screen">
//         {/* Navigation */}
//         <nav className="fixed top-0 w-full glass-card z-50">
//           <div className="container mx-auto px-6 py-4">
//             <div className="flex justify-between items-center">
//               <h1 className="text-xl font-bold text-primary-dark">Jaymeson Koh</h1>
//               <div className="flex space-x-6">
//                 <a href="#about" className="text-muted-foreground hover:text-primary-dark transition-colors">About</a>
//                 <a href="#skills" className="text-muted-foreground hover:text-primary-dark transition-colors">Skills</a>
//                 <a href="#projects" className="text-muted-foreground hover:text-primary-dark transition-colors">Projects</a>
//                 <a href="#contact" className="text-muted-foreground hover:text-primary-dark transition-colors">Contact</a>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Hero Section with lazy loaded image */}
//         <section className="min-h-screen flex items-center justify-center pt-20">
//           <div className="container mx-auto px-6 section-reveal">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-7xl font-bold text-primary-dark">
//                   Jaymeson Koh
//                 </h1>
//                 <p className="text-xl text-muted-foreground">
//                   Full Stack Developer & Computer Science Student
//                 </p>
//                 <button className="px-6 py-3 bg-[hsl(var(--uranian-blue))] text-foreground rounded-lg hover-lift">
//                   Get In Touch
//                 </button>
//               </div>
//               <div>
//                 <img 
//                   data-src="/path-to-image.jpg" 
//                   alt="Hero" 
//                   className="lazy-load w-full rounded-2xl"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Other sections with section-reveal class */}
//         <section className="py-20 section-reveal">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
//               About Me
//             </h2>
//             {/* Content */}
//           </div>
//         </section>

//         {/* Add more sections with section-reveal class for scroll animations */}
//       </div>
//     </OptimizedApp>
//   );
// };

// export default OptimizedApp;

// // HOW TO USE:
// // 1. Wrap your main App component with <OptimizedApp>
// // 2. Add 'section-reveal' class to any section you want to animate on scroll
// // 3. For images, use data-src instead of src and add 'lazy-load' class
// // 4. Example: <img data-src="image.jpg" className="lazy-load" loading="lazy" />
