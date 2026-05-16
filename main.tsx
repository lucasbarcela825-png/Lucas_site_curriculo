@import "tailwindcss";

@layer base {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
  }

  ::selection {
    background-color: #ffffff;
    color: #000000;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .border-line {
    border-color: rgba(255, 255, 255, 0.08);
  }

  .border-line-hover:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .bg-card {
    background-color: rgba(255, 255, 255, 0.03);
  }

  .bg-card-hover:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
}
