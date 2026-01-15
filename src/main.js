import './style.css'

// State
let isBrandView = false;

// DOM Elements
const app = document.querySelector('#app');

function render() {
  if (isBrandView) {
    renderBrandView();
  } else {
    renderMainView();
  }
}

function renderMainView() {
  app.innerHTML = `
    <main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#FFF0F5] to-[#FDE2E8] px-4 relative overflow-hidden transition-opacity duration-700 ease-in-out">
      
      <div class="z-10 text-center max-w-2xl">
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-text-main mb-6 tracking-tight leading-tight">
          Pink Company
        </h1>
        
        <p class="font-sans text-text-sub text-lg md:text-xl font-light mb-12 max-w-lg mx-auto leading-relaxed">
          A premium brand name for a modern<br class="hidden md:block"/> consumer business.
        </p>
        
        <div class="flex flex-col items-center space-y-8">
          <a href="mailto:pinkcompany@execis.com" 
             class="inline-block px-8 py-3 border border-text-main text-text-main font-sans text-sm tracking-widest uppercase hover:bg-pink-vibrant hover:border-pink-vibrant hover:text-white transition-all duration-300 ease-out shadow-sm hover:shadow-pink-200">
            Make an acquisition enquiry
          </a>
          
          <button id="toggle-view" class="group text-sm text-gray-500 hover:text-pink-vibrant transition-colors duration-300 font-sans mt-8 flex items-center gap-2">
            See one possible expression 
            <span class="group-hover:translate-x-1 transition-transform duration-300 text-pink-accent">→</span>
          </button>
        </div>
      </div>

      <!-- Subtle background accent -->
      <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-luxury rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </main>
  `;

  document.getElementById('toggle-view').addEventListener('click', () => {
    isBrandView = true;
    render();
  });
}

function renderBrandView() {
  app.innerHTML = `
    <main class="min-h-screen bg-[#FAFAFA] text-text-main relative overflow-hidden transition-opacity duration-700 ease-in-out">
      
      <!-- Nav -->
      <nav class="absolute top-0 w-full p-8 flex justify-between items-center z-20">
        <div class="font-serif text-xl md:text-2xl tracking-tight font-bold">Pink Company</div>
        <button id="close-view" class="text-sm font-sans text-gray-500 hover:text-black uppercase tracking-widest">
          Close Preview
        </button>
      </nav>

      <!-- Content -->
      <div class="h-screen flex flex-col md:flex-row items-center">
        <!-- Text Side -->
        <div class="w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-16 z-10">
          <div class="max-w-md">
            <span class="text-xs font-sans uppercase tracking-[0.2em] text-pink-accent mb-4 block">Lifestyle & Wellness</span>
            <h2 class="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Elevate your daily ritual.
            </h2>
            <p class="font-sans text-gray-600 font-light leading-relaxed mb-8">
              Curated essentials for the mindful individual. We believe in quality over quantity, silence over noise, and pink over everything else.
            </p>
            <a href="#" class="text-sm border-b border-black pb-1 hover:text-pink-accent hover:border-pink-accent transition-colors duration-300">
              Shop Collection
            </a>
          </div>
        </div>

        <!-- Image Side (Placeholder for now) -->
        <div class="w-full md:w-1/2 h-full bg-pink-luxury relative">
             <!-- Abstract Shape or Image -->
             <div class="absolute inset-0 flex items-center justify-center opacity-20">
                <div class="w-64 h-64 bg-pink-accent rounded-full blur-2xl"></div>
             </div>
             <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=2000" 
                  alt="Minimal lifestyle" 
                  class="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
        </div>
      </div>
    </main>
  `;

  document.getElementById('close-view').addEventListener('click', () => {
    isBrandView = false;
    render();
  });
}

// Initial render
render();
