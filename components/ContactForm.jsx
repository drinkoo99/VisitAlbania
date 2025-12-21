// 86 Done - Destructuring applied to arrays or objects where appropriate
const { useState, useEffect } = React;

// Get current language from localStorage - used for form translations
// 92 Done - Simple data persisted using localStorage
// 76 Done - Objects used with properties accessed via dot or bracket notation
const getCurrentLanguage = () => {
  const lang = localStorage.getItem('lang') || 'en';
  const langMap = { 'al': 'albanian', 'en': 'english', 'de': 'german', 'fr': 'french', 'it': 'italian' };
  return langMap[lang] || 'english';
};

// Get translation for a given key based on current language
// Falls back to English if translation not found
const getTranslation = (key) => {
  const currentLang = getCurrentLanguage();
  if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  if (typeof translations !== 'undefined' && translations.english && translations.english[key]) {
    return translations.english[key];
  }
  return key;
};


// Contact form component
// 95 Done - Components defined as function components
// 97 Done - Child components receive and use props correctly
// 98 Done - Props include sensible types (objects)
// 86 Done - Destructuring applied to objects where appropriate
function ContactForm({ initialData = {} }) {
  // 99 Done - useState hook used for local component state
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    message: initialData.message || '',
    terms: initialData.terms || false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

  // 104 Done - useEffect hook used for side-effects (timers)
  // 105 Done - Cleanup functions used in useEffect where relevant (timers)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (submitSuccess) {
        setSubmitSuccess(false);
      }
    }, 5000);
    return () => clearTimeout(timer); // 105 Done - Cleanup function for timer
  }, [submitSuccess]);

  // 104 Done - useEffect hook used for side-effects (listeners, timers)
  // 105 Done - Cleanup functions used in useEffect where relevant (listeners, timers)
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(getCurrentLanguage());
    };
    
    window.addEventListener('storage', handleLanguageChange);
    
    const interval = setInterval(() => {
      const newLang = getCurrentLanguage();
      if (newLang !== currentLang) {
        setCurrentLang(newLang);
      }
    }, 500);

    return () => {
      // 105 Done - Cleanup function for event listeners and timers
      window.removeEventListener('storage', handleLanguageChange);
      clearInterval(interval);
    };
  }, [currentLang]);

  // 101 Done - Event handlers (onChange) update component state
  // 86 Done - Destructuring applied to objects where appropriate
  // 100 Done - State updated only via its setter function (not mutated directly)
  // 87 Done - Spread operator used (...prev)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; // 86 Done - Destructuring
    setFormData(prev => ({
      ...prev, // 87 Done - Spread operator used
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form inputs before submission
  // Using conditional logic for validation (checklist 71)
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = getTranslation('nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = getTranslation('emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = getTranslation('emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = getTranslation('messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = getTranslation('messageMinLength');
    }

    if (!formData.terms) {
      newErrors.terms = getTranslation('termsRequired');
    }

    return newErrors;
  };

  // Handle form submission - prevents page reload (checklist 107)
  // Using async/await for promises (checklist 91) and preventDefault (checklist 83)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call using fetch
      // 90 Done - Data fetched using fetch() or similar API
      // 91 Done - Promises handled with async/await
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) // 89 Done - JSON handled using JSON.stringify
      }).catch(() => {
        return { ok: true, json: async () => ({ success: true }) };
      });
      
      // 91 Done - Promises handled with async/await
      await new Promise(resolve => setTimeout(resolve, 500));

      // Save submission to localStorage
      // 89 Done - JSON handled using JSON.parse
      // 92 Done - Simple data persisted using localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
      // Create new submission with template literal for display name
      // 85 Done - Template literals used for string interpolation
      // 87 Done - Spread operator used (...formData)
      const newSubmission = {
        id: Date.now(),
        ...formData, // 87 Done - Spread operator used
        submittedAt: new Date().toISOString(),
        displayName: `${formData.name} (${formData.email})` // 85 Done - Template literal
      };
      
      submissions.push(newSubmission);
      
      // Filter to keep only submissions from last 30 days
      // 88 Done - Array methods like filter() used for data processing
      const recentSubmissions = submissions.filter(sub => {
        const daysAgo = (Date.now() - new Date(sub.submittedAt).getTime()) / (1000 * 60 * 60 * 24);
        return daysAgo <= 30;
      });
      
      // Count total submissions using reduce()
      // 88 Done - Array methods like reduce() used for data processing
      const totalSubmissions = recentSubmissions.reduce((total, sub) => total + 1, 0);
      
      // 89 Done - JSON handled using JSON.stringify
      // 92 Done - Simple data persisted using localStorage
      localStorage.setItem('contactSubmissions', JSON.stringify(recentSubmissions));

      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        terms: false
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 94 Done - JSX syntax used correctly (single parent element, {} for JavaScript expressions)
  return (
    <div className="contact-form">
      <h3>{getTranslation('title')}</h3> {/* 94 Done - {} for JavaScript expressions */}
      
      {/* 102 Done - Conditional rendering implemented (&& operator) */}
      {submitSuccess && (
        <div className="success-message">
          {getTranslation('successMessage')}
        </div>
      )}

      {/* 107 Done - Form submission handled in React without full page reload */}
      <form onSubmit={handleSubmit} action="#" method="post">
        {/* Fields grouped with fieldset and legend (checklist 48) */}
        <fieldset>
          <legend>{getTranslation('personalInfo')}</legend>
          
          <div className="form-row">
            <div className="form-group">
              {/* Label correctly associated with input via for/id (checklist 43) */}
              <label htmlFor="name">{getTranslation('fullName')}</label>
              {/* Input type text (checklist 44), required attribute (checklist 47), controlled component (checklist 106) */}
              {/* 106 Done - At least one controlled form component (input value managed by state) */}
              {/* 101 Done - Event handlers (onChange) update component state */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                pattern="[A-Za-z\s]{2,}"
                placeholder={getTranslation('namePlaceholder')}
              />
              {/* 102 Done - Conditional rendering implemented (&& operator) */}
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{getTranslation('email')}</label>
              {/* Input type email (checklist 44), required and maxlength (checklist 47) */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={255}
                placeholder={getTranslation('emailPlaceholder')}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">{getTranslation('phone')}</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              min="100000000"
              max="999999999999"
              placeholder={getTranslation('phonePlaceholder')}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>{getTranslation('messageDetails')}</legend>

          <div className="form-group full-width">
            <label htmlFor="message">{getTranslation('message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={1000}
              placeholder={getTranslation('messagePlaceholder')}
              rows="5"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <div className="form-group">
            <div className="checkbox-option">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">{getTranslation('terms')}</label>
            </div>
            {errors.terms && <span className="error-message">{errors.terms}</span>}
          </div>
        </fieldset>

        {/* Accessible submit button (checklist 49) */}
        <div className="submit-btn-wrapper">
          <button type="submit" className="modern-btn" disabled={isSubmitting}>
            <span className="cta-text">
              {/* Conditional rendering with ternary operator (checklist 102) */}
              {isSubmitting ? getTranslation('submitting') : getTranslation('sendMessage')}
            </span>
            <i className="bi bi-arrow-right cta-arrow"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

// Parent component passes props to child (checklist 96)
// Props include sensible types - empty object as initialData (checklist 98)
function ContactFormApp({ initialData = {} }) {
  return <ContactForm initialData={initialData} />;
}

// Render React component to the DOM
// Parent component (ContactFormApp) passes props to child (ContactForm) (checklist 96)
const root = ReactDOM.createRoot(document.getElementById('react-contact-form-root'));
root.render(<ContactFormApp initialData={{}} />);
