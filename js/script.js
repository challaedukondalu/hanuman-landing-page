// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = 'none';
    }
});

// Product card hover effect with enhanced animation
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// Add lazy loading for images
document.querySelectorAll('img').forEach(img => {
    img.loading = 'lazy';
});

// --- Translation and Language Switcher Logic ---
const translations = {
    en: {
        'site-title': 'Hanuman Traders',
        'site-title-footer': 'Hanuman Traders',
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-jsw-paints': 'JSW Paints',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        'hero-heading': 'Authorized JSW Paints Dealer',
        'hero-subheading': 'Welcome to Hanuman Traders - Your one-stop solution for all JSW Paints and painting tools at the best prices. We offer both retail and wholesale services with expert guidance.',
        'view-products-button': 'View Products',
        'contact-us-button': 'Contact Us',
        'what-we-offer-title': 'What We Offer',
        'offer-paints-heading': 'JSW Emulsion & Enamel Paints',
        'offer-paints-description': 'Premium quality interior and exterior paints for all your needs.',
        'offer-tools-heading': 'Painting Tools',
        'offer-tools-description': 'Professional brushes, rollers, sprayers and more for perfect finishes.',
        'offer-putty-primers-heading': 'Wall Putty & Primers',
        'offer-putty-primers-description': 'Essential base materials for durable and smooth wall finishes.',
        'offer-safety-gear-heading': 'Safety Gear',
        'offer-safety-gear-description': 'Complete safety equipment for professional painters and DIY enthusiasts.',
        'offer-quality-heading': 'Quality Products',
        'offer-quality-description': 'We guarantee high-quality JSW Paints products for lasting results.',
        'jsw-showcase-title': 'JSW Paints Showcase',
        'product-wood-coat-heading': 'Wood Coat',
        'product-wood-coat-description': 'Premium wood coating solution for long-lasting protection',
        'product-metal-guard-heading': 'Metal Guard',
        'product-metal-guard-description': 'Advanced protection for metal surfaces',
        'product-enamel-shine-heading': 'Enamel Shine',
        'product-enamel-shine-description': 'High-gloss enamel paint for superior finish',
        'product-prep-x-heading': 'Prep X',
        'product-prep-x-description': 'Professional surface preparation solution',
        'product-wall-prime-heading': 'Wall Prime',
        'product-wall-prime-description': 'Premium wall primer for perfect adhesion',
        'product-wonder-wall-putty-heading': 'Wonder Wall Putty',
        'product-wonder-wall-putty-description': 'High-quality wall putty for smooth surfaces',
        'product-allweather-coat-heading': 'AllWeather Coat',
        'product-allweather-coat-description': 'Weather-resistant exterior coating',
        'product-halo-advanced-heading': 'Halo Advanced',
        'product-halo-advanced-description': 'Advanced interior wall paint with superior finish',
        'product-aura-emulsion-heading': 'Aura Emulsion',
        'product-aura-emulsion-description': 'Premium wall emulsion for beautiful interiors',
        'view-full-catalog-button': 'View Full Catalog',
        'why-choose-us-title': 'Why Choose Hanuman Traders?',
        'feature-1-title': 'Official JSW Paints Distributor',
        'feature-1-desc': 'We are an authorized dealer of JSW Paints, ensuring authentic products.',
        'feature-2-title': 'Competitive Pricing',
        'feature-2-desc': 'We offer the best prices for both retail and bulk purchases.',
        'feature-3-title': 'All Painting Materials Available',
        'feature-3-desc': 'One-stop solution for all your painting needs.',
        'feature-4-title': 'Guidance for Color Selection',
        'feature-4-desc': 'Expert advice on choosing the right colors and products.',
        'feature-5-title': 'GST Billing Available',
        'feature-5-desc': 'Proper documentation and GST billing for all purchases.',
        'feature-6-title': 'Customer Support',
        'feature-6-desc': 'Dedicated support for all your queries and concerns.',
        'about-us-title': 'About Hanuman Traders',
        'about-text-1': 'Hanuman Traders is your trusted destination for everything related to painting – from premium JSW Paints to high-quality brushes, tools, primers, putty, and coatings. As an authorized JSW Paints dealer, we are committed to offering only genuine and top-grade painting materials.',
        'about-text-2': 'At Hanuman Traders, we combine the trusted performance of JSW Paints with our experience in guiding customers to the best products for their unique needs. Whether it\'s interiors, exteriors, metal, or wood – JSW\'s innovative paint technologies ensure beauty, durability, and satisfaction in every coat.',
        'about-text-3': 'We believe in building lasting relationships with our customers by ensuring trust, quality, and consistent service. That\'s why homeowners, painters, and contractors continue to choose us for all their painting needs.',
        'get-in-touch-button': 'Get In Touch',
        'contact-us-title': 'Contact Us',
        'location-heading': 'Our Location',
        'location-address': 'Door No. 8-84, Krishnahal Road, Balaji City Scan Eduru, Chilakaluripeta',
        'call-us-heading': 'Call Us',
        'email-us-heading': 'Email Us',
        'email-address': 'challaedukondalu2019@gmail.com',
        'opening-hours-heading': 'Opening Hours',
        'opening-hours-weekday': 'Monday to Saturday: 8:30 AM - 8:30 PM',
        'opening-hours-sunday': 'Sunday: 9:00 AM - 12:00 PM',
        'send-message-heading': 'Send us a message',
        'your-message-label': 'Your Message',
        'send-message-button': 'Send Message',
        'footer-description': 'Your trusted partner for all painting needs. Authorized dealer of JSW Paints offering quality products and services.',
        'quick-links-heading': 'Quick Links',
        'footer-products-heading': 'Products',
        'footer-interior-paints': 'Interior Paints',
        'footer-exterior-paints': 'Exterior Paints',
        'footer-wall-putty': 'Wall Putty',
        'footer-primers': 'Primers',
        'footer-painting-tools': 'Painting Tools',
        'footer-contact-heading': 'Contact',
        'footer-location-address': 'Door No. 8-84, Krishnahal Road, Balaji City Scan Eduru, Chilakaluripeta',
        'copyright-text': '&copy; 2025 Hanuman Traders. All Rights Reserved.',
        'call-now-button': 'Call Now',
        'whatsapp-button': 'WhatsApp',
        'offer-summer-cooling-heading': 'Summer Cooling Solutions',
        'offer-summer-cooling-description': 'Special cooling paints and coatings to keep your space comfortable during summer.',
    },
    te: {
        'site-title': 'హనుమాన్ ట్రేడర్స్',
        'site-title-footer': 'హనుమాన్ ట్రేడర్స్',
        'nav-home': 'హోమ్',
        'nav-products': 'ఉత్పత్తులు',
        'nav-jsw-paints': 'JSW పెయింట్స్',
        'nav-about': 'మా గురించి',
        'nav-contact': 'సంప్రదించండి',
        'hero-heading': 'అధీకృత JSW పెయింట్స్ డీలర్',
        'hero-subheading': 'హనుమాన్ ట్రేడర్స్‌కు స్వాగతం – JSW పెయింట్స్ మరియు పెయింటింగ్ పరికరాల కోసం మీ ఒకే ఒక్క స్థలం. రిటైల్ మరియు హోల్‌సేల్‌కి మంచి ధరలతో మా సేవలు అందుబాటులో ఉన్నాయి.',
        'view-products-button': 'ఉత్పత్తులను చూడండి',
        'contact-us-button': 'మమ్మల్ని సంప్రదించండి',
        'what-we-offer-title': 'మేము ఏమి అందిస్తున్నాము',
        'offer-paints-heading': 'JSW ఎమల్షన్ & ఎనామెల్ పెయింట్స్',
        'offer-paints-description': 'మీ పెయింటింగ్ అవసరాలన్నిటికీ ప్రీమియం నాణ్యత గల ఇంటీరియర్ మరియు ఎక్స్టీరియర్ పెయింట్లు',
        'offer-tools-heading': 'పెయింటింగ్ పరికరాలు',
        'offer-tools-description': 'సరిగ్గా, అందంగా ముగించేందుకు ప్రొఫెషనల్ బ్రష్‌లు, రోలర్లు మరియు ఇతర అవసరమైన పరికరాలు అందుబాటులో ఉన్నాయి',
        'offer-putty-primers-heading': 'వాల్ పుట్టి & ప్రైమర్లు',
        'offer-putty-primers-description': 'గోడలు మృదువుగా, అందంగా కనిపించేందుకు అవసరమైన బేస్ మెటీరియల్స్.',
        'offer-safety-gear-heading': 'సేఫ్టీ గేర్',
        'offer-safety-gear-description': 'పెయింటింగ్ చేస్తున్న ప్రతి ఒక్కరి భద్రత కోసం అవసరమైన అన్ని రకాల సురక్షిత పరికరాలు.',
        'offer-quality-heading': 'నాణ్యమైన ఉత్పత్తులు',
        'offer-quality-description': 'మేము మీ పెయింటింగ్ అవసరాల కోసం అత్యుత్తమ నాణ్యత గల JSW పెయింట్లు మాత్రమే అందిస్తున్నాము',
        'jsw-showcase-title': 'JSW పెయింట్స్ షోకేస్',
        'product-wood-coat-heading': 'వుడ్ కోట్',
        'product-wood-coat-description': 'వెదురు మరియు తాడి మొదలైన కఠిన వుడ్ కోసం దీర్ఘకాల రక్షణ కలిగిన ప్రీమియం కోటింగ్.',
        'product-metal-guard-heading': 'మెటల్ గార్డ్',
        'product-metal-guard-description': 'ఇనుము, ఉక్కు వంటి లోహ ఉపరితలాలకు భరోసా గల రక్షణ.',
        'product-enamel-shine-heading': 'ఎనామెల్ షైన్',
        'product-enamel-shine-description': 'చక్కటి మెరుపుతో ఇంటీరియర్‌కు స్టైలిష్ ముగింపు ఇచ్చే ఎనామెల్ పెయింట్.',
        'product-prep-x-heading': 'ప్రెప్ X',
        'product-prep-x-description': 'వృత్తిపరంగా ఉపరితలాలను సిద్ధం చేయడానికి ప్రత్యేకంగా రూపొందించబడిన పరిష్కారం.',
        'product-wall-prime-heading': 'వాల్ ప్రైమ్',
        'product-wall-prime-description': 'పెయింట్ బాగా అతికిపడేందుకు రూపొందించిన ప్రీమియం వాల్ ప్రైమర్.',
        'product-wonder-wall-putty-heading': 'వండర్ వాల్ పుట్టి',
        'product-wonder-wall-putty-description': 'గోడలు నునుపుగా, సుడులు లేకుండా ఉండేందుకు అధిక నాణ్యత గల పుట్టి.',
        'product-allweather-coat-heading': 'ఆల్ వెదర్ కోట్',
        'product-allweather-coat-description': 'ఎలాంటి వాతావరణాన్ని అయినా తట్టుకునే బాహ్య గోడల కోటింగ్.',
        'product-halo-advanced-heading': 'హాలో అడ్వాన్స్‌డ్',
        'product-halo-advanced-description': 'వేడిమి, చల్లదనం, చీటింగ్‌లకు ప్రతిఘటించే ఇంటీరియర్ వాల్ పెయింట్.',
        'product-aura-emulsion-heading': 'అరోరా ఎమల్షన్',
        'product-aura-emulsion-description': 'ఇంటీరియర్లకు గ్లామర్ లుక్ ఇవ్వడానికి ప్రీమియం వాల్ ఎమల్షన్.',
        'view-full-catalog-button': 'పూర్తి ఉత్పత్తుల జాబితాను చూడండి',
        'why-choose-us-title': 'హనుమాన్ ట్రేడర్స్‌ను ఎందుకు ఎంచుకోవాలి?',
        'feature-1-title': 'అధీకృత JSW పెయింట్స్ డీలర్',
        'feature-1-desc': 'మేము JSW పెయింట్స్ యొక్క అధికారిక డీలర్‌గా, ఖచ్చితంగా ఒరిజినల్ ఉత్పత్తులు అందిస్తాము.',
        'feature-2-title': 'పోటీ ధరలు',
        'feature-2-desc': 'రిటైల్ మరియు హోల్‌సేల్ కొనుగోళ్లకు మార్కెట్‌లో ఉత్తమ ధరలు అందిస్తాము.',
        'feature-3-title': 'పెయింటింగ్‌కు కావాల్సిన అన్ని పదార్థాలు',
        'feature-3-desc': 'బ్రష్‌ల నుంచి స్ప్రేయర్ల దాకా — ఒకే చోట అన్ని పెయింటింగ్ సామగ్రి.',
        'feature-4-title': 'రంగుల ఎంపికకు నిపుణుల మార్గదర్శనం',
        'feature-4-desc': 'మీ గోడలకు తగిన రంగులను ఎంచుకోవడంలో మా నిపుణుల సహాయం పొందండి.',
        'feature-5-title': 'GST బిల్లింగ్ సౌకర్యం',
        'feature-5-desc': 'అన్ని కొనుగోళ్లకు సరైన బిల్లింగ్, డాక్యుమెంటేషన్ అందుబాటులో ఉంది.',
        'feature-6-title': 'కస్టమర్ సపోర్ట్',
        'feature-6-desc': 'మీ ప్రశ్నలు, ఆందోళనలకు త్వరిత స్పందనతో సహాయం అందిస్తాము.',
        'about-us-title': 'హనుమాన్ ట్రేడర్స్ గురించి',
        'about-text-1': 'హనుమాన్ ట్రేడర్స్ మీ పెయింటింగ్ అవసరాల కోసం నమ్మకమైన స్థలం. మేము అధీకృత JSW పెయింట్స్ డీలర్, అధిక నాణ్యత కలిగిన పెయింట్లు, బ్రష్లు, ప్రైమర్లు, వాల్ పుట్టీ, కోటింగ్స్ మరియు పెయింటింగ్ పరికరాల పూర్తి శ్రేణిని అందిస్తున్నాము.',
        'about-text-2': 'JSW పెయింట్స్ మంచి రంగులు, మన్నికైన ఫినిష్ మరియు దీర్ఘకాలిక నాణ్యతకు ప్రసిద్ధి. మా అనుభవంతో కలిపి, మీ ఇంటి లేదా ప్రాజెక్టుకు సరైన ఉత్పత్తులు ఎంచుకునేలా మేము మీకు సహాయపడతాము. మీరు ఇంటీరియర్ పెయింటింగ్ చేస్తున్నా, ఎక్స్టీరియర్ అయినా, మెటల్ లేదా వుడ్ అయినా – JSW పెయింట్స్ ప్రతి వాడకంలో అద్భుతమైన ఫలితాలు ఇస్తాయి.',
        'about-text-3': 'మేము నమ్మకంతో కూడిన సేవను అందిస్తూ, కస్టమర్లతో దీర్ఘకాలిక సంబంధాలను నిర్మించడంపై నిబద్ధత కలిగి ఉన్నాము. అందుకే, హోమ్ ఓనర్లు, పెయింటర్లు, కాంట్రాక్టర్లు అందరూ హనుమాన్ ట్రేడర్స్‌ను వారి మొదటి ఎంపికగా ఉంచుతున్నారు.',
        'get-in-touch-button': 'మమ్మల్ని సంప్రదించండి',
        'contact-us-title': 'మమ్మల్ని సంప్రదించండి',
        'location-heading': 'మా చిరునామా',
        'location-address': 'డోర్ నెం. 8-84, కృష్ణహాల్ రోడ్, బాలాజీ సిటీ స్కాన్ ఎదురు, చిలకలూరిపేట',
        'call-us-heading': 'ఫోన్ ద్వారా సంప్రదించండి',
        'email-us-heading': 'ఇమెయిల్ పంపండి',
        'email-address': 'challaedukondalu2019@gmail.com',
        'opening-hours-heading': 'పని గంటలు',
        'opening-hours-weekday': 'సోమవారం నుండి శనివారం: ఉదయం 8:30 నుండి రాత్రి 8:30 వరకు',
        'opening-hours-sunday': 'ఆదివారం: ఉదయం 9:00 నుండి మధ్యాహ్నం 12:00 వరకు',
        'send-message-heading': 'మీ సందేశాన్ని పంపండి',
        'your-message-label': 'ఇక్కడ మీ సందేశం రాయండి',
        'send-message-button': 'పంపించండి',
        'footer-description': 'మీ పెయింటింగ్ అవసరాలకు నాణ్యమైన ఉత్పత్తులు మరియు సేవలను అందించే నమ్మకమైన డీలర్.',
        'quick-links-heading': 'శీఘ్ర లింకులు',
        'footer-products-heading': 'ఉత్పత్తులు',
        'footer-interior-paints': 'ఇంటీరియర్ పెయింట్స్',
        'footer-exterior-paints': 'ఎక్స్టీరియర్ పెయింట్స్',
        'footer-wall-putty': 'వాల్ పుట్టి',
        'footer-primers': 'ప్రైమర్లు',
        'footer-painting-tools': 'పెయింటింగ్ టూల్స్',
        'footer-contact-heading': 'సంప్రదించండి',
        'footer-location-address': 'డోర్ నెం. 8-84, కృష్ణహాల్ రోడ్, చిలకలూరిపేట',
        'copyright-text': '&copy; 2025 హనుమాన్ ట్రేడర్స్. అన్ని హక్కులు రక్షించబడ్డాయి.',
        'call-now-button': 'ఇప్పుడు కాల్ చేయండి',
        'whatsapp-button': 'వాట్సాప్',
        'offer-summer-cooling-heading': 'వేసవి చల్లదన పరిష్కారాలు',
        'offer-summer-cooling-description': 'వేసవి కాలంలో ఉష్ణాన్ని తగ్గించేందుకు ప్రత్యేక కూలింగ్ పెయింట్లు – మీ స్థలాన్ని చల్లగా ఉంచేందుకు సహాయపడతాయి',
    }
};

function applyTranslations(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.placeholder) {
            if (translations[language] && translations[language][key + '-placeholder']) {
                element.placeholder = translations[language][key + '-placeholder'];
            } else if (translations['en'][key + '-placeholder']) {
                element.placeholder = translations['en'][key + '-placeholder'];
            } else if (translations[language] && translations[language][key]) {
                element.placeholder = translations[language][key];
            } else if (translations['en'][key]) {
                element.placeholder = translations['en'][key];
            }
        }
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        } else if (translations['en'] && translations['en'][key]) {
            element.textContent = translations['en'][key];
        }
    });
}

// Set initial language (check local storage or default to English)
let currentLang = localStorage.getItem('websiteLang') || 'en';
applyTranslations(currentLang);

// Add active class to current language button
function updateLangButtons() {
    document.querySelectorAll('.lang-button').forEach(button => {
        if (button.getAttribute('data-lang') === currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
updateLangButtons();

// Language switcher click handler

document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', () => {
        currentLang = button.getAttribute('data-lang');
        localStorage.setItem('websiteLang', currentLang);
        applyTranslations(currentLang);
        updateLangButtons();
    });
});

// Slider functionality for What We Offer section
const sliderContainer = document.querySelector('.offers-slider-container');
const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');

if (sliderContainer && slideLeft && slideRight) {
    const cardWidth = 330; // Width of card + gap
    const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time

    slideLeft.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    slideRight.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Hide/show arrows based on scroll position
    sliderContainer.addEventListener('scroll', () => {
        const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
        slideLeft.style.opacity = sliderContainer.scrollLeft > 0 ? '1' : '0.5';
        slideRight.style.opacity = sliderContainer.scrollLeft < maxScroll ? '1' : '0.5';
    });

    // Initial arrow state
    slideLeft.style.opacity = '0.5';
}

// Catalog view functionality
const viewCatalogBtn = document.getElementById('viewCatalogBtn');
const hiddenProducts = document.querySelectorAll('.hidden-product');
let isExpanded = false;

if (viewCatalogBtn) {
    viewCatalogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isExpanded = !isExpanded;
        
        hiddenProducts.forEach(product => {
            product.style.display = isExpanded ? 'flex' : 'none';
        });
        
        // Update button text based on state
        const buttonText = isExpanded ? 'Show Less' : 'View Full Catalog';
        viewCatalogBtn.innerHTML = `<i class="fas fa-book-open"></i> ${buttonText}`;
        
        // Scroll to the top of the products section if collapsing
        if (!isExpanded) {
            document.getElementById('jsw-paints').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Floating contact button functionality
const floatBtn = document.getElementById('floatBtn');
const floatOptions = document.getElementById('floatOptions');

if (floatBtn && floatOptions) {
    floatBtn.addEventListener('click', () => {
        floatOptions.classList.toggle('active');
        floatBtn.classList.toggle('active');
    });

    // Close options when clicking outside
    document.addEventListener('click', (e) => {
        if (!floatBtn.contains(e.target) && !floatOptions.contains(e.target)) {
            floatOptions.classList.remove('active');
            floatBtn.classList.remove('active');
        }
    });
}

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
} 