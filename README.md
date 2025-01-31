# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }
  
  
  
  .job-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    background: #f8f9fa;
  }
  
  .job-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    padding: 16px;
    min-width: 100%;
    
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  
  .job-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .job-company {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .job-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .company-name {
    color: #007bff;
    font-size: 16px;
  }
  
  .job-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .job-location {
    color: #666;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .apply-btn {
    font-size: 1rem;
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .apply-btn:hover {
    background: #0056b3;
  }
  .job-tags-container {
    margin: 16px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  

  .job-tag {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 300;
  }
  
  .job-footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #555;
  }
  
  .job-salary {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 1rem;
  }
  
  .job-deadline {
    font-weight: bold;
    font-size: 1rem;
  }
  
  .job-list-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
  }

  
 
 

  
  @media (max-width: 768px) {
    .job-card {
      width: 100%;
      max-width: 100%;
    }
  
    .job-footer {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
    }
  
    .search-container {
      flex-direction: column;
      align-items: stretch;
    }
  
    .search-input {
      width: 100%;
      max-width: 100%;
    }
  
    .apply-btn {
      width: 30%;
      text-align: center;
      margin-top: 10px;
    }
  
    .job-tags {
      justify-content: flex-start;
    }
  }
  
  @media (max-width: 480px) {
    .job-title {
      font-size: 18px;
    }
  
    .company-name {
      font-size: 14px;
    }
  
    .job-location {
      font-size: 12px;
    }
  
    .job-footer {
      font-size: 12px;
    }
  
    .search-container {
      padding: 10px;
    }
  
    .search-input {
      padding: 10px;
      font-size: 14px;
    }
  
    .search-btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
  
   

  
 
  

  /* Job tags section */
  
  .job-tag {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 300;
  }
  
  /* Footer section for job card */
  
  .job-salary {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .job-deadline {
    font-weight: bold;
    font-size: 1rem;
  }
  


  .job-search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #8a7fdd, #39e3e3);
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .job-search-input {
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  
  
  .job-filter-dropdown {
    padding: 10px 20px;
    
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;
  }
  
  .job-filter-dropdown:hover {
    border-color: #6c5ce7;
  }
  
  /* Specific styles for each dropdown */
  .company-filter {
    background-color: #f8f9fa;
  }
  
  .date-filter {
    background-color: #eef2ff;
  }
  
  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    .job-card {
      width: 100%;
      max-width: 100%;
    }
  
    .job-card-footer {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
    }
  
    .apply-btn {
      width: 30%;
      text-align: center;
      margin-top: 10px;
    }
  
    .job-tags-container {
      justify-content: flex-start;
    }
  }
  
  @media (max-width: 480px) {
    .job-title {
      font-size: 18px;
    }
  
    .company-name {
      font-size: 14px;
    }
  
    .job-location {
      font-size: 12px;
    }
  
    .job-card-footer {
      font-size: 12px;
    }
  }
  









  color gradient  css 
  /* Reset and Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
}

body {
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  color: #fff;
}

/* Job Search & Filter Section */
.job-search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.job-search-input,
.job-filter-dropdown {
  padding: 12px 18px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.job-search-input {
  background: #fff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.job-filter-dropdown {
  background: #f3f3f3;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.job-search-input:focus,
.job-filter-dropdown:focus {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.job-search-btn {
  background: linear-gradient(135deg, #ff512f, #dd2476);
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
  font-size: 16px;
}

.job-search-btn:hover {
  background: linear-gradient(135deg, #dd2476, #ff512f);
  transform: scale(1.1);
}

/* Job Cards */
.job-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.job-card {
  border-radius: 10px;
  background: linear-gradient(135deg, #43cea2, #185a9d);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

.job-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-company {
  display: flex;
  align-items: center;
  gap: 12px;
}

.job-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

.company-name {
  font-size: 18px;
  font-weight: bold;
}

.job-title {
  font-size: 22px;
  font-weight: bold;
}

.job-location {
  color: #f1f1f1;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.apply-btn {
  font-size: 1rem;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
}

.apply-btn:hover {
  background: linear-gradient(135deg, #ff4b2b, #ff416c);
  transform: scale(1.05);
}

/* Job Tags */
.job-tags-container {
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.job-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Footer */
.job-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #ddd;
}

/* Responsive Design */
@media (max-width: 768px) {
  .job-search-container {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
  }

  .job-search-input,
  .job-filter-dropdown,
  .job-search-btn {
      width: 100%;
      max-width: 100%;
  }
}
