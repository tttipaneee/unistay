// MOCK DATASETS

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Premium Single Room near Taylor's Lakeside",
    price: 950,
    location: "D'Latour Residency (3 mins walk to Taylor's)",
    universityCategory: "taylors",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&width=400&auto=format&fit=crop",
    verified: true,
    description: "Fully furnished premium single room with en-suite bathroom. Located in the highly sought-after D'Latour block. Comes with 100Mbps Time broadband, study desk, orthopedic mattress, and weekly cleaning.",
    amenities: ["WiFi", "Aircon", "Gym", "Pool", "Kitchen", "Security"],
    shuttleAvailable: false,
    roommateId: 1,
    availableSlots: [
      { display: "Jul 2026 - Dec 2026", months: ["Jul 26", "Aug 26", "Sep 26", "Oct 26", "Nov 26", "Dec 26"] },
      { display: "Jan 2027 - Jun 2027", months: ["Jan 27", "Feb 27", "Mar 27", "Apr 27", "May 27", "Jun 27"] }
    ]
  },
  {
    id: 2,
    title: "Cozy Shared Room in Sunway City",
    price: 550,
    location: "Nidoz Residences (5 mins shuttle to Sunway)",
    universityCategory: "sunway",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&width=400&auto=format&fit=crop",
    verified: true,
    description: "Affordable shared room for two friends. Modern shared kitchen and high-speed Wi-Fi included. Convenient shuttle bus service right at the entrance going to Sunway University and Sunway Pyramid.",
    amenities: ["WiFi", "Aircon", "Kitchen", "Security", "Shuttle"],
    shuttleAvailable: true,
    roommateId: 3,
    availableSlots: [
      { display: "Sep 2026 - Feb 2027", months: ["Sep 26", "Oct 26", "Nov 26", "Dec 26", "Jan 27", "Feb 27"] },
      { display: "Mar 2027 - Aug 2027", months: ["Mar 27", "Apr 27", "May 27", "Jun 27", "Jul 27", "Aug 27"] }
    ]
  },
  {
    id: 3,
    title: "Modern Loft Studio near Monash Campus",
    price: 1300,
    location: "Sunway GeoSense (2 mins walk to Monash)",
    universityCategory: "monash",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&width=400&auto=format&fit=crop",
    verified: true,
    description: "Stunning loft studio unit directly connected via canopy walk to Monash University. Comes with premium furniture, high-speed WiFi, gym access, infinity pool, and a fully equipped private kitchenette.",
    amenities: ["WiFi", "Aircon", "Gym", "Pool", "Kitchen", "Security", "GeoSense Link"],
    shuttleAvailable: false,
    roommateId: 2,
    availableSlots: [
      { display: "Aug 2026 - Jan 2027", months: ["Aug 26", "Sep 26", "Oct 26", "Nov 26", "Dec 26", "Jan 27"] },
      { display: "Feb 2027 - Jul 2027", months: ["Feb 27", "Mar 27", "Apr 27", "May 27", "Jun 27", "Jul 27"] }
    ]
  },
  {
    id: 4,
    title: "Budget Single Room in Subang Jaya",
    price: 450,
    location: "PJS 11 Double Storey (10 mins walk to Sunway)",
    universityCategory: "sunway",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&width=400&auto=format&fit=crop",
    verified: false,
    description: "Basic cozy room in a secure double-storey house. Rent includes all utilities except air-conditioning usage (metered). Very close to local food courts and laundry shops.",
    amenities: ["WiFi", "Kitchen", "Laundry"],
    shuttleAvailable: false,
    roommateId: 4,
    availableSlots: [
      { display: "Jul 2026 - Dec 2026", months: ["Jul 26", "Aug 26", "Sep 26", "Oct 26", "Nov 26", "Dec 26"] },
      { display: "Jan 2027 - Jun 2027", months: ["Jan 27", "Feb 27", "Mar 27", "Apr 27", "May 27", "Jun 27"] }
    ]
  },
  {
    id: 5,
    title: "Luxury Balcony Room with Lake View",
    price: 1100,
    location: "Nadayu 28 (4 mins walk to Sunway Uni)",
    universityCategory: "sunway",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&width=400&auto=format&fit=crop",
    verified: true,
    description: "Premium large room with attached private balcony overlooking Sunway Lake. Located in the popular Nadayu 28 condominium. Very spacious with study lounge inside.",
    amenities: ["WiFi", "Aircon", "Gym", "Pool", "Kitchen", "Security", "Balcony"],
    shuttleAvailable: false,
    roommateId: 5,
    availableSlots: [
      { display: "Oct 2026 - Mar 2027", months: ["Oct 26", "Nov 26", "Dec 26", "Jan 27", "Feb 27", "Mar 27"] },
      { display: "Apr 2027 - Sep 2027", months: ["Apr 27", "May 27", "Jun 27", "Jul 27", "Aug 27", "Sep 27"] }
    ]
  },
  {
    id: 6,
    title: "Quiet Study Room near Taylor's Campus",
    price: 800,
    location: "DK Senza Condominium (5 mins walk)",
    universityCategory: "taylors",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&width=400&auto=format&fit=crop",
    verified: true,
    description: "Quiet single room designed for studious students. Solid soundproof walls, custom study desk, and bookshelf. Housemates are all postgraduate students maintaining a peaceful environment.",
    amenities: ["WiFi", "Aircon", "Kitchen", "Security", "Postgrad Block"],
    shuttleAvailable: true,
    roommateId: 1,
    availableSlots: [
      { display: "Sep 2026 - Feb 2027", months: ["Sep 26", "Oct 26", "Nov 26", "Dec 26", "Jan 27", "Feb 27"] },
      { display: "Mar 2027 - Aug 2027", months: ["Mar 27", "Apr 27", "May 27", "Jun 27", "Jul 27", "Aug 27"] }
    ]
  }
];

const MOCK_ROOMMATES = [
  {
    id: 1,
    name: "Timothy Chalamet",
    university: "Taylor's University",
    year: "Year 1",
    avatar: "roommate1.jpg",
    matchPercentage: 92,
    sleepHabit: "Early Bird",
    cleanliness: "Very Clean",
    budget: "RM 800 - 1200",
    tags: ["Non-Smoker", "Quiet Study", "Taylor's Design"],
    bio: "Hey there! I am studying graphic design at Taylor's. Looking for a neat roommate who respects study hours and doesn't smoke.",
    answers: {
      "q-step-1": "Early Bird",
      "q-step-2": "Absolute Silence",
      "q-step-3": "Minimalist/Neat Freak",
      "q-step-4": "Structured Schedule",
      "q-step-5": "Daytime Guests Only",
      "q-step-6": "Friendly Co-existence",
      "q-step-7": "Moderate",
      "q-step-8": "Share with Permission",
      "q-step-9": "Minimalist & Clean",
      "q-step-10": "Natural & Bright",
      "q-step-11": "Occasional Cook",
      "q-step-12": "Neutral/Tolerant"
    }
  },
  {
    id: 2,
    name: "Kylie Jenner",
    university: "Monash University",
    year: "Year 2",
    avatar: "roommate2.png",
    matchPercentage: 88,
    sleepHabit: "Night Owl",
    cleanliness: "Moderate",
    budget: "RM 1200+",
    tags: ["Gamers", "Gym Goer", "Monash CS"],
    bio: "CS major at Monash. Usually up late coding or gaming. I hit the gym regularly and love cooking occasionally.",
    answers: {
      "q-step-1": "Night Owl",
      "q-step-2": "Moderate/Low Noise",
      "q-step-3": "Average/Casual",
      "q-step-4": "As-Needed (Fluid)",
      "q-step-5": "Flexible Night Guests",
      "q-step-6": "Best Friends",
      "q-step-7": "Cold Arctic",
      "q-step-8": "Open Sharing",
      "q-step-9": "Curated Aesthetic",
      "q-step-10": "Dim & Moody",
      "q-step-11": "Active Chef",
      "q-step-12": "Animal Lover"
    }
  },
  {
    id: 3,
    name: "Nicole Rigor",
    university: "Sunway University",
    year: "Year 2",
    avatar: "roommate3.jpg",
    matchPercentage: 85,
    sleepHabit: "Flexible",
    cleanliness: "Very Clean",
    budget: "RM 800 - 1200",
    tags: ["Quiet Study", "Non-Smoker", "Foodie"],
    bio: "Accounting student at Sunway. Looking for a clean roommate. I study a lot in the library and love exploring cafes in PJ on weekends.",
    answers: {
      "q-step-1": "Flexible/Irregular",
      "q-step-2": "Absolute Silence",
      "q-step-3": "Minimalist/Neat Freak",
      "q-step-4": "Structured Schedule",
      "q-step-5": "No Guests",
      "q-step-6": "Friendly Co-existence",
      "q-step-7": "Moderate",
      "q-step-8": "Strictly Separate",
      "q-step-9": "Minimalist & Clean",
      "q-step-10": "Natural & Bright",
      "q-step-11": "Occasional Cook",
      "q-step-12": "No Pets"
    }
  },
  {
    id: 4,
    name: "Feliz Perez",
    university: "Taylor's University",
    year: "Year 1",
    avatar: "roommate4.jpg",
    matchPercentage: 74,
    sleepHabit: "Night Owl",
    cleanliness: "Relaxed",
    budget: "RM 400 - 700",
    tags: ["Gamers", "Pets Allowed", "Music Fan"],
    bio: "Hey! Studying communications. I play acoustic guitar and listen to a lot of indie rock. Pretty chill about chores.",
    answers: {
      "q-step-1": "Night Owl",
      "q-step-2": "Social Study",
      "q-step-3": "Relaxed/Messy",
      "q-step-4": "As-Needed (Fluid)",
      "q-step-5": "Open House",
      "q-step-6": "Best Friends",
      "q-step-7": "Moderate",
      "q-step-8": "Open Sharing",
      "q-step-9": "Cozy & Lived-in",
      "q-step-10": "Dim & Moody",
      "q-step-11": "Grab-and-Go",
      "q-step-12": "Animal Lover"
    }
  },
  {
    id: 5,
    name: "Nadiem Makarim",
    university: "Sunway University",
    year: "Year 3",
    avatar: "roommate5.jpg",
    matchPercentage: 68,
    sleepHabit: "Early Bird",
    cleanliness: "Moderate",
    budget: "RM 400 - 700",
    tags: ["Gym Goer", "Sports Fan", "No Guest"],
    bio: "Final year business student. Very disciplined with sleep because of early morning gym sessions. Let's find a flat!",
    answers: {
      "q-step-1": "Early Bird",
      "q-step-2": "Absolute Silence",
      "q-step-3": "Average/Casual",
      "q-step-4": "As-Needed (Fluid)",
      "q-step-5": "No Guests",
      "q-step-6": "Strictly Practical",
      "q-step-7": "Warm/Cozy",
      "q-step-8": "Strictly Separate",
      "q-step-9": "Minimalist & Clean",
      "q-step-10": "Natural & Bright",
      "q-step-11": "Occasional Cook",
      "q-step-12": "No Pets"
    }
  }
];

const MOCK_CHATS = [
  {
    id: 1,
    name: "Taylor's Freshmen Community",
    lastMessage: "Timothy: Has anyone found a roommate for D'Latour?",
    time: "10:12 AM",
    avatarIcon: "🎒",
    status: "324 Active Students",
    messages: [
      { sender: "them", name: "Timothy", text: "Hey! I'm planning to rent a twin sharing room in D'Latour. Anyone interested?", time: "10:05 AM" },
      { sender: "them", name: "Feliz", text: "Is that the room with the luxury pool? It looks so cool but a bit pricey.", time: "10:08 AM" },
      { sender: "them", name: "Timothy", text: "Yes! Has anyone found a roommate for D'Latour yet?", time: "10:12 AM" }
    ],
    replyQueue: [
      "No way! D'Latour is super close to campus, I'd love to check it out.",
      "Awesome, let's schedule a viewing together this weekend!"
    ]
  },
  {
    id: 2,
    name: "Timothy Chalamet",
    lastMessage: "I'll create the split bill link now.",
    time: "Yesterday",
    avatarIcon: "👩",
    status: "Online roommate match",
    messages: [
      { sender: "them", name: "Timothy", text: "Hi! The roommate matcher recommended you as a 92% match. Would you be open to flat sharing?", time: "Yesterday" },
      { sender: "me", name: "Angelina", text: "Hi Timothy! Yes, I saw that. I'm looking at rooms near the campus lakeside too.", time: "Yesterday" },
      { sender: "them", name: "Timothy", text: "Perfect! I'll create the split bill link now.", time: "Yesterday" }
    ],
    replyQueue: [
      "Let me review the math. Looks completely fine by me!",
      "Great, let's lock in this unit."
    ]
  },
  {
    id: 3,
    name: "D'Latour Landlord Support",
    lastMessage: "Sure, here is a quick video tour of the single room.",
    time: "2 days ago",
    avatarIcon: "🏢",
    status: "Verified Landlord",
    messages: [
      { sender: "me", name: "Angelina", text: "hii can i get more information and some videos about this unit and such", time: "2 days ago" },
      { sender: "them", name: "Landlord", text: "Hi Angelina! Sure, here is a quick video tour of the single room. Let me know if you would like to schedule a physical viewing.", time: "2 days ago" }
    ],
    replyQueue: [
      "Perfect! That looks great, I'd like to book a viewing.",
      "Thank you, I'll discuss this with my parents first."
    ]
  }
];

// STATE MANAGEMENT
let likedProperties = [1, 5]; // Default liked ids
let userPreferences = {
  smoke: true,
  clean: true,
  night: false,
  guest: true
};
let currentScreen = "screen-home";
let activeChatId = 1;
let questionnaireAnswers = {};
let quizTaken = false;

// TIME UPDATER
function updateTime() {
  const timeElem = document.getElementById("status-time");
  if (timeElem) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timeElem.textContent = `${hours}:${minutes}`;
  }
}
setInterval(updateTime, 1000);
updateTime();

// PAGE LOAD INTRO ANIMATION TIMEOUT
setTimeout(() => {
  const splash = document.getElementById("splash-screen");
  const signupScreen = document.getElementById("signup-screen");
  if (splash && splash.style.display !== "none" && splash.classList.contains("active")) {
    // Reveal Sign Up page immediately underneath the splash screen
    if (signupScreen) {
      signupScreen.style.display = "flex";
      signupScreen.offsetHeight; // force reflow
      signupScreen.style.opacity = "1";
    }
    
    // Fade out the splash screen
    splash.style.opacity = "0";
    setTimeout(() => {
      splash.style.display = "none";
      splash.classList.remove("active");
    }, 500);
  }
}, 3500);

function skipSplash() {
  const splash = document.getElementById("splash-screen");
  const signupScreen = document.getElementById("signup-screen");
  if (splash) {
    // Reveal Sign Up page immediately underneath the splash screen
    if (signupScreen) {
      signupScreen.style.display = "flex";
      signupScreen.offsetHeight;
      signupScreen.style.opacity = "1";
    }
    
    // Fade out the splash screen
    splash.style.opacity = "0";
    setTimeout(() => {
      splash.style.display = "none";
      splash.classList.remove("active");
    }, 500);
  }
}

// SIGN UP SCREEN CONTROLS
function setupSignup() {
  const welcomePane = document.getElementById("signup-welcome-pane");
  const detailsPane = document.getElementById("signup-details-pane");
  const loadingPane = document.getElementById("signup-loading-pane");
  const loadingText = document.getElementById("loading-pane-text");
  
  const googleBtn = document.getElementById("google-signup-btn");
  const emailBtn = document.getElementById("email-signup-btn");
  const signupBtn = document.getElementById("signup-btn");
  const signupScreen = document.getElementById("signup-screen");

  if (googleBtn && welcomePane && detailsPane && loadingPane && loadingText) {
    googleBtn.addEventListener("click", () => {
      loadingText.textContent = "Connecting Google Account...";
      loadingPane.style.display = "flex";
      
      setTimeout(() => {
        loadingPane.style.display = "none";
        welcomePane.style.display = "none";
        detailsPane.style.display = "block";
        showToast("Signed in via Google successfully!");
      }, 1200);
    });
  }

  if (emailBtn && welcomePane && detailsPane && loadingPane && loadingText) {
    emailBtn.addEventListener("click", () => {
      loadingText.textContent = "Opening Registration Form...";
      loadingPane.style.display = "flex";
      
      setTimeout(() => {
        loadingPane.style.display = "none";
        welcomePane.style.display = "none";
        detailsPane.style.display = "block";
      }, 800);
    });
  }

  if (signupBtn && signupScreen && loadingPane && loadingText) {
    signupBtn.addEventListener("click", () => {
      const name = document.getElementById("signup-name").value.trim() || "Angelina Julie Herliman";
      const email = document.getElementById("signup-email").value.trim() || "angelina.herliman@student.edu.my";
      const ethnicity = document.getElementById("signup-ethnicity").value.trim() || "Indonesian";
      const uni = document.getElementById("signup-university").value;
      const year = document.getElementById("signup-year").value;
      
      // Show account setup state
      loadingText.textContent = "Creating Your Account...";
      loadingPane.style.display = "flex";
      
      setTimeout(() => {
        loadingPane.style.display = "none";
        
        // Update user profile card in DOM
        document.getElementById("profile-user-name").textContent = name;
        document.getElementById("profile-user-sub").textContent = `${uni} • ${year} • ${ethnicity}`;
        
        // Hide signup screen to reveal app dashboard
        signupScreen.style.opacity = "0";
        setTimeout(() => {
          signupScreen.style.display = "none";
          showToast("Account created successfully!");
        }, 500);
      }, 1500);
    });
  }
}

// SEARCH UTILITIES
function setupServiceSearch() {
  const serviceSearchInput = document.getElementById("service-search-input");
  const serviceSearchClearBtn = document.getElementById("service-search-clear-btn");
  if (serviceSearchInput && serviceSearchClearBtn) {
    serviceSearchInput.addEventListener("input", () => {
      const val = serviceSearchInput.value.toLowerCase().trim();
      if (val.length > 0) {
        serviceSearchClearBtn.style.display = "flex";
      } else {
        serviceSearchClearBtn.style.display = "none";
      }
      
      const cards = document.querySelectorAll(".service-tool-card");
      cards.forEach(card => {
        const title = card.querySelector(".service-tool-title").textContent.toLowerCase();
        const desc = card.querySelector(".service-tool-desc").textContent.toLowerCase();
        if (title.includes(val) || desc.includes(val)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });

    serviceSearchClearBtn.addEventListener("click", () => {
      serviceSearchInput.value = "";
      serviceSearchClearBtn.style.display = "none";
      document.querySelectorAll(".service-tool-card").forEach(c => c.style.display = "flex");
    });
  }
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderHomeProperties();
  renderRoommates();
  renderChatChannels();
  setupNav();
  setupSearch();
  setupQuestionnaire();
  setupUtilities();
  setupProfile();
  setupPropertyDrawer();
  setupChatOverlay();
  setupSignup();
  setupServiceSearch();
});

// ROUTING / NAVIGATION SWITCHER
function setupNav() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      if (target) {
        switchScreen(target);
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
      }
    });
  });
}

function switchScreen(screenId) {
  // Update header text based on screen
  const titleElem = document.getElementById("app-header-title");
  const isHost = document.getElementById("mode-toggle-switch").checked;
  
  if (titleElem) {
    if (screenId === "screen-home") {
      titleElem.innerHTML = isHost ? "UniStay <span>Host</span>" : "UniStay";
    } else if (screenId === "screen-roommate") {
      titleElem.innerHTML = "Roommates";
    } else if (screenId === "screen-chat") {
      titleElem.innerHTML = "Community";
    } else if (screenId === "screen-service") {
      titleElem.innerHTML = "Services";
    } else if (screenId === "screen-profile") {
      titleElem.innerHTML = "My Profile";
    }
  }

  // Toggle active screen visibility
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => {
    screen.classList.remove("active");
    if (screen.id === screenId) {
      screen.classList.add("active");
    }
  });

  currentScreen = screenId;
}

// TOAST NOTIFICATIONS
function showToast(message) {
  const toast = document.getElementById("success-toast");
  const toastText = document.getElementById("success-toast-message");
  if (toast && toastText) {
    toastText.textContent = message;
    toast.classList.add("active");
    setTimeout(() => {
      toast.classList.remove("active");
    }, 3000);
  }
}

// RENDERING DASHBOARD PROPERTY CARDS
function renderHomeProperties(filterCat = "all", searchQuery = "") {
  const grid = document.getElementById("properties-grid-container");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = MOCK_PROPERTIES.filter(prop => {
    // Category filter
    if (filterCat !== "all") {
      if (filterCat === "budget" && prop.price >= 700) return false;
      if (filterCat !== "budget" && prop.universityCategory !== filterCat) return false;
    }

    // Search filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = prop.title.toLowerCase().includes(q);
      const matchLoc = prop.location.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-base); font-size: 13px; font-weight: 500;">
        No verified rooms match your search criteria.
      </div>
    `;
    return;
  }

  filtered.forEach(prop => {
    const isLiked = likedProperties.includes(prop.id) ? "liked" : "";
    const badgeHTML = prop.verified ? `<div class="property-verified-badge">Verified</div>` : "";
    
    const card = document.createElement("div");
    card.className = "property-card slide-up";
    card.innerHTML = `
      <div class="property-card-image-box">
        <img src="${prop.image}" alt="${prop.title}" class="property-img">
        ${badgeHTML}
        <button class="property-like-btn ${isLiked}" data-id="${prop.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="property-details">
        <h4 class="property-price-tag">RM ${prop.price} <span style="font-size: 11px; color: var(--text-base); font-weight: 500;">/ month</span></h4>
        <h3 class="property-title">${prop.title}</h3>
        <div class="property-meta" style="flex-wrap: wrap; gap: 6px 12px;">
          <div class="property-meta-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>${prop.location}</span>
          </div>
          <div class="property-meta-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width: 14px; height: 14px;">
              <rect x="3" y="4" width="18" height="12" rx="2"/>
              <circle cx="7.5" cy="16.5" r="1.5"/>
              <circle cx="16.5" cy="16.5" r="1.5"/>
            </svg>
            <span style="color: ${prop.shuttleAvailable ? 'var(--primary)' : 'var(--text-base)'}; font-weight: ${prop.shuttleAvailable ? '700' : '500'};">${prop.shuttleAvailable ? 'Shuttle Available' : 'No Shuttle Bus'}</span>
          </div>
        </div>
      </div>
    `;

    // Like button toggle event
    const likeBtn = card.querySelector(".property-like-btn");
    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLike(prop.id, likeBtn);
    });

    // Details Modal card open event
    card.addEventListener("click", () => {
      openPropertyDrawer(prop);
    });

    grid.appendChild(card);
  });
}

function toggleLike(id, btnElem) {
  if (likedProperties.includes(id)) {
    likedProperties = likedProperties.filter(i => i !== id);
    btnElem.classList.remove("liked");
    showToast("Listing removed from Saved list");
  } else {
    likedProperties.push(id);
    btnElem.classList.add("liked");
    showToast("Listing added to Saved list");
  }
  
  // Re-render liked properties in Profile tab
  renderProfileSavedProperties();
}

// SEARCH INPUT LOGIC
function setupSearch() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  
  if (input && clearBtn) {
    input.addEventListener("input", () => {
      const val = input.value;
      if (val.length > 0) {
        clearBtn.style.display = "flex";
      } else {
        clearBtn.style.display = "none";
      }
      
      const activePill = document.querySelector(".category-pill.active");
      const activeCat = activePill ? activePill.getAttribute("data-category") : "all";
      renderHomeProperties(activeCat, val);
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.style.display = "none";
      const activePill = document.querySelector(".category-pill.active");
      const activeCat = activePill ? activePill.getAttribute("data-category") : "all";
      renderHomeProperties(activeCat, "");
    });
  }

  // Category Pill switcher
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      const cat = pill.getAttribute("data-category");
      const searchVal = input ? input.value : "";
      renderHomeProperties(cat, searchVal);
    });
  });
}

// INTERACTIVE PROPERTY DETAILS MODAL
function setupPropertyDrawer() {
  const backdrop = document.getElementById("property-drawer-backdrop");
  
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      // If clicking directly on backdrop and not panel content, close
      if (e.target === backdrop) {
        closePropertyDrawer();
      }
    });
  }
}

function openPropertyDrawer(prop) {
  const backdrop = document.getElementById("property-drawer-backdrop");
  const panel = document.getElementById("property-drawer-panel");
  const content = document.getElementById("property-drawer-content");

  if (!backdrop || !panel || !content) return;

  const isLiked = likedProperties.includes(prop.id) ? "liked" : "";
  const amenitiesListHTML = prop.amenities.map(am => `
    <div class="drawer-amenity-item">
      <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>${am}</span>
    </div>
  `).join("");

  // Generate available slots HTML
  let slotsHTML = "";
  if (prop.availableSlots && prop.availableSlots.length > 0) {
    prop.availableSlots.forEach((slot, index) => {
      slotsHTML += `
        <div class="booking-slot-card" data-index="${index}" style="padding: 10px 12px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">📅</span>
            <div style="text-align: left;">
              <div style="font-weight: 700; font-size: 12px; color: var(--text-dark);">6-Month Contract</div>
              <div style="font-size: 11px; color: var(--text-base);">${slot.display}</div>
            </div>
          </div>
          <div class="check-circle" style="width: 16px; height: 16px; border: 1px solid var(--border-color); border-radius: 50%; transition: all 0.2s; display: flex; align-items: center; justify-content: center;"></div>
        </div>
      `;
    });
  } else {
    slotsHTML = `<p style="font-size: 11px; color: var(--text-base);">No booking slots available at this moment.</p>`;
  }

  // Generate calendar months grid HTML (16 months to cover all 2026/2027 academic year options)
  const calendarMonths = [
    "Jul 26", "Aug 26", "Sep 26", "Oct 26",
    "Nov 26", "Dec 26", "Jan 27", "Feb 27",
    "Mar 27", "Apr 27", "May 27", "Jun 27",
    "Jul 27", "Aug 27", "Sep 27", "Oct 27"
  ];
  let calendarGridHTML = "";
  calendarMonths.forEach(m => {
    calendarGridHTML += `<div class="calendar-month-cell" data-month="${m}" style="height: 28px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center; color: var(--text-base); background: #fcfbfa; transition: all 0.25s ease;">${m}</div>`;
  });

  const roommate = MOCK_ROOMMATES.find(r => r.id === prop.roommateId) || MOCK_ROOMMATES[0];
  
  let roommateHTML = "";
  if (quizTaken) {
    let score = 0;
    const keys = Object.keys(roommate.answers);
    keys.forEach(k => {
      if (questionnaireAnswers[k] === roommate.answers[k]) {
        score++;
      }
    });
    const compScore = Math.round((score / keys.length) * 100);
    
    let sharedHabits = [];
    if (questionnaireAnswers["q-step-1"] === roommate.answers["q-step-1"]) sharedHabits.push(roommate.answers["q-step-1"]);
    if (questionnaireAnswers["q-step-2"] === roommate.answers["q-step-2"]) sharedHabits.push("Quiet Study");
    if (questionnaireAnswers["q-step-3"] === roommate.answers["q-step-3"]) sharedHabits.push("Cleanliness");
    if (questionnaireAnswers["q-step-12"] === roommate.answers["q-step-12"]) sharedHabits.push("Pet stance");
    
    if (sharedHabits.length === 0) sharedHabits.push("Co-living style");
    const matchDetailsText = `✔️ Matches on: ${sharedHabits.slice(0, 2).join(", ")}`;

    roommateHTML = `
      <h4 class="drawer-amenities-title" style="margin-top: 16px;">Current Roommate & Compatibility</h4>
      <div style="background: linear-gradient(135deg, rgba(236,101,101,0.08), rgba(245,194,69,0.04)); padding: 14px; border-radius: var(--border-radius-md); margin-bottom: 20px; border: 1px solid rgba(236,101,101,0.15);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${roommate.avatar}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
            <div>
              <div style="font-weight: 700; font-size: 14px; color: var(--text-dark);">${roommate.name}</div>
              <div style="font-size: 11px; color: var(--text-base);">${roommate.university} • ${roommate.year}</div>
            </div>
          </div>
          <div style="background: var(--primary); color: #fff; padding: 4px 10px; border-radius: 12px; font-weight: 700; font-size: 11px;">
            ${compScore}% Compatible
          </div>
        </div>
        <p style="font-size: 11px; color: var(--text-base); margin-bottom: 6px;">"${roommate.bio}"</p>
        <div style="font-size: 11px; color: var(--primary); font-weight: 700; display: flex; align-items: center; gap: 4px;">
          ${matchDetailsText}
        </div>
      </div>
    `;
  } else {
    roommateHTML = `
      <h4 class="drawer-amenities-title" style="margin-top: 16px;">Current Roommate & Compatibility</h4>
      <div style="background: rgba(236,101,101,0.04); padding: 16px; border-radius: var(--border-radius-md); margin-bottom: 20px; border: 1px dashed var(--primary); text-align: center;">
        <h5 style="font-size: 13px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px;">Who lives here?</h5>
        <p style="font-size: 11px; color: var(--text-base); margin-bottom: 12px;">Take the roommate compatibility quiz once to view your match percentage with ${roommate.name}!</p>
        <button class="storm-btn" id="drawer-quiz-btn" style="height: 32px; font-size: 11px; padding: 0 16px; margin: 0 auto; display: inline-flex; align-items: center; border-radius: 16px;">Start Matching Quiz</button>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="drawer-image-box">
      <img src="${prop.image}" alt="${prop.title}">
    </div>
    
    <div class="drawer-title-row">
      <div style="flex: 1; padding-right: 12px;">
        <h3 class="drawer-title">${prop.title}</h3>
        <p style="font-size: 12px; color: var(--text-base); margin-top: 3px; font-weight: 500;">${prop.location}</p>
      </div>
      <div class="drawer-price">RM ${prop.price}</div>
    </div>

    <!-- Shuttle Bus Badge/Detail -->
    <div style="display: flex; align-items: center; gap: 6px; padding: 8px 12px; background: #f0ece7; border-radius: 8px; margin-bottom: 16px; font-size: 12px; color: var(--text-dark); font-weight: 600;">
      <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="width: 16px; height: 16px; color: var(--primary);">
        <rect x="3" y="4" width="18" height="12" rx="2"/>
        <circle cx="7.5" cy="16.5" r="1.5"/>
        <circle cx="16.5" cy="16.5" r="1.5"/>
      </svg>
      <span>Transit: ${prop.shuttleAvailable ? 'Direct Shuttle Bus service' : 'Walk-in location (No shuttle bus required)'}</span>
    </div>

    <p class="drawer-description">${prop.description}</p>

    <h4 class="drawer-amenities-title">Room Amenities</h4>
    <div class="drawer-amenities-list">
      ${amenitiesListHTML}
    </div>

    ${roommateHTML}

    <!-- Book Unit Button -->
    <button class="storm-btn accent" id="drawer-book-btn" style="width: 100%; margin-top: 16px; margin-bottom: 8px;">
      Submit Request to Book Unit
    </button>

    <!-- Booking Section Panel -->
    <div id="booking-section" style="display: none; background: rgba(134, 109, 201, 0.04); padding: 14px; border-radius: var(--border-radius-md); border: 1px dashed var(--secondary); margin-top: 12px; margin-bottom: 16px; text-align: left;">
      <h4 style="font-size: 13px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px;">Choose Contract Period (6 Months)</h4>
      <p style="font-size: 11px; color: var(--text-base); margin-bottom: 12px;">Select one of the available 6-month contract periods below to view its availability on the calendar.</p>
      
      <!-- Slot Radio Buttons -->
      <div id="booking-slots-picker" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
        ${slotsHTML}
      </div>

      <!-- Mini Calendar Month Grid -->
      <div class="booking-calendar-container" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); padding: 12px; margin-bottom: 14px;">
        <div class="booking-calendar-title" style="font-size: 11px; font-weight: 700; color: var(--text-dark); margin-bottom: 8px; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;">Contract Availability Calendar</div>
        <div class="booking-calendar-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
          ${calendarGridHTML}
        </div>
      </div>

      <button class="storm-btn" id="confirm-booking-btn" style="width: 100%; height: 38px; font-size: 12px; margin-top: 0;" disabled>
        Confirm Booking Request
      </button>
    </div>

    <div class="drawer-footer-actions">
      <button class="storm-btn outline" id="drawer-like-btn" style="padding: 0; width: 48px; flex-shrink: 0; flex: none;">
        <svg viewBox="0 0 24 24" fill="${isLiked ? 'var(--primary)' : 'none'}" stroke="${isLiked ? 'var(--primary)' : 'var(--text-base)'}" stroke-width="2.5" style="width: 20px; height: 20px;">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <button class="storm-btn" id="drawer-contact-btn">Contact Landlord</button>
    </div>
  `;

  // Attach drawer actions
  const likeBtn = content.querySelector("#drawer-like-btn");
  likeBtn.addEventListener("click", () => {
    toggleLike(prop.id, likeBtn);
    const isLikedNow = likedProperties.includes(prop.id);
    const path = likeBtn.querySelector("svg");
    path.setAttribute("fill", isLikedNow ? 'var(--primary)' : 'none');
    path.setAttribute("stroke", isLikedNow ? 'var(--primary)' : 'var(--text-base)');
    const mainListBtn = document.querySelector(`.property-like-btn[data-id="${prop.id}"]`);
    if (mainListBtn) {
      if (isLikedNow) mainListBtn.classList.add("liked");
      else mainListBtn.classList.remove("liked");
    }
  });

  // Booking toggle button
  const bookBtn = content.querySelector("#drawer-book-btn");
  const bookingSection = content.querySelector("#booking-section");
  if (bookBtn && bookingSection) {
    bookBtn.addEventListener("click", () => {
      if (bookingSection.style.display === "none") {
        bookingSection.style.display = "block";
        bookBtn.textContent = "Cancel Booking Request";
        bookBtn.classList.remove("accent");
        bookBtn.classList.add("outline");
        // Scroll drawer panel to bottom
        setTimeout(() => {
          panel.scrollTop = panel.scrollHeight;
        }, 100);
      } else {
        bookingSection.style.display = "none";
        bookBtn.textContent = "Submit Request to Book Unit";
        bookBtn.classList.remove("outline");
        bookBtn.classList.add("accent");
      }
    });
  }

  // Slot selection handling
  const slotCards = content.querySelectorAll(".booking-slot-card");
  const confirmBtn = content.querySelector("#confirm-booking-btn");
  let selectedSlotObj = null;

  slotCards.forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"));
      selectedSlotObj = prop.availableSlots[idx];
      
      // Update selected card UI
      slotCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      
      // Update calendar grid highlighting
      const monthCells = content.querySelectorAll(".calendar-month-cell");
      monthCells.forEach(cell => {
        const mVal = cell.getAttribute("data-month");
        if (selectedSlotObj.months.includes(mVal)) {
          cell.classList.add("active-slot");
        } else {
          cell.classList.remove("active-slot");
        }
      });
      
      // Enable confirm button
      if (confirmBtn) {
        confirmBtn.removeAttribute("disabled");
      }
    });
  });

  // Confirm booking action
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      if (selectedSlotObj) {
        showToast(`Booking request for ${selectedSlotObj.display} submitted!`);
        closePropertyDrawer();
      }
    });
  }

  const contactBtn = content.querySelector("#drawer-contact-btn");
  contactBtn.addEventListener("click", () => {
    closePropertyDrawer();
    switchScreen("screen-chat");
    const activeNav = document.querySelector('.nav-item[data-target="screen-chat"]');
    if (activeNav) {
      document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
      activeNav.classList.add("active");
    }
    openChatWindow(3);
  });

  // Quiz trigger button (if not taken)
  const quizBtn = content.querySelector("#drawer-quiz-btn");
  if (quizBtn) {
    quizBtn.addEventListener("click", () => {
      closePropertyDrawer();
      switchScreen("screen-roommate");
      const activeNav = document.querySelector('.nav-item[data-target="screen-roommate"]');
      if (activeNav) {
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        activeNav.classList.add("active");
      }
      // Trigger matching quiz immediately
      const welcome = document.getElementById("roommate-intro-panel");
      const wizard = document.getElementById("questionnaire-wizard");
      if (welcome && wizard) {
        welcome.style.display = "none";
        wizard.style.display = "block";
        showStep(1);
      }
    });
  }

  backdrop.classList.add("active");
  panel.classList.add("active");
}

function closePropertyDrawer() {
  const backdrop = document.getElementById("property-drawer-backdrop");
  const panel = document.getElementById("property-drawer-panel");
  
  if (backdrop && panel) {
    panel.classList.remove("active");
    backdrop.classList.remove("active");
  }
}

// ROOMMATE QUIZ & MATCHING LOGIC
function setupQuestionnaire() {
  const startBtn = document.getElementById("start-questionnaire-btn");
  const wizard = document.getElementById("questionnaire-wizard");
  const welcome = document.getElementById("roommate-intro-panel");
  const nextBtn = document.getElementById("q-next-btn");
  const backBtn = document.getElementById("q-back-btn");

  let currentStep = 1;

  if (startBtn && wizard && welcome) {
    startBtn.addEventListener("click", () => {
      welcome.style.display = "none";
      wizard.style.display = "block";
      currentStep = 1;
      showStep(1);
    });
  }

  // Answer choice selector
  const options = document.querySelectorAll(".q-option-item");
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      // Unselect siblings
      const list = opt.parentElement;
      list.querySelectorAll(".q-option-item").forEach(item => item.classList.remove("selected"));
      opt.classList.add("selected");
      
      // Save answer
      const val = opt.getAttribute("data-value");
      const stepId = list.parentElement.id;
      questionnaireAnswers[stepId] = val;
    });
  });

  if (nextBtn && backBtn) {
    nextBtn.addEventListener("click", () => {
      // Verify answer selected for current step
      const currentPane = document.getElementById(`q-step-${currentStep}`);
      const selected = currentPane ? currentPane.querySelector(".q-option-item.selected") : null;
      
      if (!selected) {
        showToast("Please choose an option to continue");
        return;
      }

      if (currentStep < 12) {
        currentStep++;
        showStep(currentStep);
      } else {
        // Submit Questionnaire
        calculateMatches();
      }
    });

    backBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      } else {
        // Exit wizard
        wizard.style.display = "none";
        welcome.style.display = "block";
      }
    });
  }
}

function showStep(stepNum) {
  // Update indicators
  const dots = document.querySelectorAll(".q-step-dot");
  dots.forEach((dot, idx) => {
    if (idx < stepNum) dot.classList.add("active");
    else dot.classList.remove("active");
  });

  // Toggle panes
  const panes = document.querySelectorAll(".q-step-pane");
  panes.forEach((pane, idx) => {
    if (idx === (stepNum - 1)) pane.style.display = "block";
    else pane.style.display = "none";
  });

  // Button labels
  const nextBtn = document.getElementById("q-next-btn");
  if (nextBtn) {
    nextBtn.textContent = stepNum === 12 ? "Show My Matches" : "Next";
  }
}

function calculateMatches() {
  quizTaken = true;

  const updatedRoommates = MOCK_ROOMMATES.map(roommate => {
    let score = 0;
    const keys = Object.keys(roommate.answers);
    keys.forEach(k => {
      if (questionnaireAnswers[k] === roommate.answers[k]) {
        score++;
      }
    });
    
    // Convert to percentage
    const matchPercentage = Math.round((score / keys.length) * 100);
    return { ...roommate, matchPercentage };
  });

  // Sort by match percentage
  updatedRoommates.sort((a, b) => b.matchPercentage - a.matchPercentage);

  // Render lists
  renderRoommates(updatedRoommates);

  // Hide wizard, show success
  document.getElementById("questionnaire-wizard").style.display = "none";
  document.getElementById("roommate-intro-panel").style.display = "block";
  
  showToast("Matches calculated successfully!");
}

function renderRoommates(list = MOCK_ROOMMATES) {
  const container = document.getElementById("roommates-list-container");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(roommate => {
    const card = document.createElement("div");
    card.className = "roommate-card slide-up";
    
    const tagsHTML = roommate.tags.map(tag => `<span class="roommate-tag">${tag}</span>`).join("");
    
    card.innerHTML = `
      <div class="roommate-avatar-box">
        <img src="${roommate.avatar}" alt="${roommate.name}">
      </div>
      <div class="roommate-info">
        <div class="roommate-header-row">
          <div>
            <h4 class="roommate-name">${roommate.name}</h4>
            <p class="roommate-uni">${roommate.university} • ${roommate.year}</p>
          </div>
          <div class="roommate-match-badge">${roommate.matchPercentage}% Match</div>
        </div>
        <p style="font-size: 11px; color: var(--text-base); line-height: 1.4; margin-top: 6px;">${roommate.bio}</p>
        <div class="roommate-tag-row">
          ${tagsHTML}
        </div>
        <div class="roommate-actions">
          <button class="roommate-btn outline roommate-view-btn">Profile</button>
          <button class="roommate-btn primary-action roommate-chat-btn">Connect</button>
        </div>
      </div>
    `;

    // Connect action
    card.querySelector(".roommate-chat-btn").addEventListener("click", () => {
      // Switch to chats screen
      switchScreen("screen-chat");
      const activeNav = document.querySelector('.nav-item[data-target="screen-chat"]');
      if (activeNav) {
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        activeNav.classList.add("active");
      }
      
      // Check if chat exists or create/open Timothy Chalamet chat
      if (roommate.name.includes("Timothy")) {
        openChatWindow(2);
      } else {
        // Fallback open freshman channel with custom title
        openChatWindow(1, roommate.name);
      }
    });

    card.querySelector(".roommate-view-btn").addEventListener("click", () => {
      showToast(`Viewing details for ${roommate.name}`);
    });

    container.appendChild(card);
  });
}

// CHAT & COMMUNITY ROW BUILDERS
function renderChatChannels() {
  const container = document.getElementById("channels-list-container");
  if (!container) return;

  container.innerHTML = "";

  MOCK_CHATS.forEach(chat => {
    const item = document.createElement("div");
    item.className = "channel-item slide-up";
    item.innerHTML = `
      <div class="channel-icon">${chat.avatarIcon}</div>
      <div class="channel-details">
        <div class="channel-top-line">
          <h4 class="channel-name">${chat.name}</h4>
          <span class="channel-time">${chat.time}</span>
        </div>
        <p class="channel-last-msg">${chat.lastMessage}</p>
      </div>
    `;

    item.addEventListener("click", () => {
      openChatWindow(chat.id);
    });

    container.appendChild(item);
  });
}

function setupChatOverlay() {
  const backBtn = document.getElementById("chat-window-back-btn");
  const sendBtn = document.getElementById("chat-send-btn");
  const input = document.getElementById("chat-message-input");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      document.getElementById("chat-window-overlay").classList.remove("active");
      renderChatChannels(); // Refresh listings on return
    });
  }

  if (sendBtn && input) {
    sendBtn.addEventListener("click", () => {
      sendChatMessage();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        sendChatMessage();
      }
    });
  }
}

function openChatWindow(chatId, overrideName = null) {
  activeChatId = chatId;
  const overlay = document.getElementById("chat-window-overlay");
  const title = document.getElementById("chat-window-title");
  const status = document.getElementById("chat-window-status");
  
  const chatObj = MOCK_CHATS.find(c => c.id === chatId);
  if (!chatObj || !overlay) return;

  title.textContent = overrideName ? overrideName : chatObj.name;
  status.textContent = chatObj.status;

  renderChatMessages(chatObj);
  overlay.classList.add("active");
}

function renderChatMessages(chatObj) {
  const messagesContainer = document.getElementById("chat-messages-container");
  if (!messagesContainer) return;

  messagesContainer.innerHTML = "";

  chatObj.messages.forEach(msg => {
    const bubble = document.createElement("div");
    const isOutgoing = msg.sender === "me";
    bubble.className = `message-bubble ${isOutgoing ? 'outgoing' : 'incoming'}`;
    
    // Add small sender name header in community chats
    const nameHeader = (!isOutgoing && chatObj.id === 1) ? `<div style="font-weight: 700; font-size: 11px; margin-bottom: 2px;">${msg.name}</div>` : "";
    
    bubble.innerHTML = `${nameHeader}${msg.text}`;
    messagesContainer.appendChild(bubble);
  });

  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById("chat-message-input");
  if (!input || input.value.trim() === "") return;

  const text = input.value.trim();
  input.value = "";

  const chatObj = MOCK_CHATS.find(c => c.id === activeChatId);
  if (!chatObj) return;

  // Append user message
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const newMsg = { sender: "me", name: "Ji-Min", text: text, time: timeStr };
  chatObj.messages.push(newMsg);
  chatObj.lastMessage = `You: ${text}`;
  chatObj.time = timeStr;

  renderChatMessages(chatObj);

  // Trigger reply simulation
  if (chatObj.replyQueue && chatObj.replyQueue.length > 0) {
    const replyText = chatObj.replyQueue.shift();
    setTimeout(() => {
      const incomingMsg = { 
        sender: "them", 
        name: chatObj.id === 2 ? "Sarah" : "System Support", 
        text: replyText, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      chatObj.messages.push(incomingMsg);
      chatObj.lastMessage = `${incomingMsg.name}: ${replyText}`;
      renderChatMessages(chatObj);
    }, 1500);
  }
}

// UTILITIES / SERVICES FORMS
function setupUtilities() {
  const toolSplitter = document.getElementById("tool-splitter-card");
  const toolMaint = document.getElementById("tool-maintenance-card");
  const toolVerify = document.getElementById("tool-verify-card");

  const splitterPanel = document.getElementById("bill-splitter-panel");
  const maintPanel = document.getElementById("maintenance-ticket-panel");

  if (toolSplitter && splitterPanel) {
    toolSplitter.addEventListener("click", () => {
      splitterPanel.style.display = splitterPanel.style.display === "block" ? "none" : "block";
      maintPanel.style.display = "none";
    });
  }

  if (toolMaint && maintPanel) {
    toolMaint.addEventListener("click", () => {
      maintPanel.style.display = maintPanel.style.display === "block" ? "none" : "block";
      splitterPanel.style.display = "none";
    });
  }

  if (toolVerify) {
    toolVerify.addEventListener("click", () => {
      showToast("Flag submission form opened in drawer");
      // Simulate prompt/form submission directly
      setTimeout(() => {
        showToast("Property verification audit scheduled for inspection!");
      }, 1500);
    });
  }

  // Bill calculations
  const calcBtn = document.getElementById("calculate-bill-btn");
  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      const amtInput = document.getElementById("bill-amount");
      const membersInput = document.getElementById("bill-members");
      const descSelect = document.getElementById("bill-description");
      const resultCard = document.getElementById("bill-result-card");

      const amt = parseFloat(amtInput.value);
      const members = parseInt(membersInput.value);

      if (isNaN(amt) || isNaN(members) || members <= 0) {
        showToast("Please enter valid amounts & roommates count");
        return;
      }

      const share = (amt / members).toFixed(2);
      
      document.getElementById("bill-result-title").textContent = descSelect.value;
      document.getElementById("bill-share-amt").textContent = `RM ${share}`;
      document.getElementById("bill-total-amt").textContent = `RM ${amt.toFixed(2)}`;

      resultCard.style.display = "block";
    });
  }

  // Split bill message share btn
  const sendSplitBtn = document.getElementById("send-split-chat-btn");
  if (sendSplitBtn) {
    sendSplitBtn.addEventListener("click", () => {
      const desc = document.getElementById("bill-description").value;
      const shareAmt = document.getElementById("bill-share-amt").textContent;
      
      const billMsg = `🧾 SPLIT BILL RECEIPT: ${desc}. Each roommate owes ${shareAmt}. Please verify via payment links.`;
      
      // Inject directly into Timothy Chalamet chat (Chat id 2)
      const chatTimothy = MOCK_CHATS.find(c => c.id === 2);
      if (chatTimothy) {
        chatTimothy.messages.push({
          sender: "me",
          name: "Ji-Min",
          text: billMsg,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        chatTimothy.lastMessage = `You: Shared split receipt`;
      }

      showToast("Split bill receipt shared to Timothy Chalamet!");
      document.getElementById("bill-splitter-panel").style.display = "none";
      document.getElementById("bill-result-card").style.display = "none";
    });
  }

  // Submit repair tickets
  const submitTicketBtn = document.getElementById("submit-ticket-btn");
  if (submitTicketBtn) {
    submitTicketBtn.addEventListener("click", () => {
      const cat = document.getElementById("maint-category").value;
      const notes = document.getElementById("maint-notes").value;

      if (notes.trim() === "") {
        showToast("Please provide details for the repair technician");
        return;
      }

      showToast(`Submitted repair request: ${cat}`);
      document.getElementById("maint-notes").value = "";
      document.getElementById("maintenance-ticket-panel").style.display = "none";
    });
  }
}

// PROFILE PREFERENCES & HOST MODE SWITCHER
function setupProfile() {
  const modeSwitch = document.getElementById("mode-toggle-switch");
  
  if (modeSwitch) {
    modeSwitch.addEventListener("change", () => {
      const isChecked = modeSwitch.checked;
      const label = document.getElementById("mode-title");
      const desc = document.getElementById("mode-desc");
      const sub = document.getElementById("profile-user-sub");
      const name = document.getElementById("profile-user-name");
      const avatar = document.getElementById("profile-avatar-img");
      const prefTitle = document.querySelector(".pref-section-title");
      const checkboxRow = document.querySelector(".pref-checkbox-row");

      if (isChecked) {
        // Toggle Host Mode
        label.textContent = "Landlord Host Mode";
        desc.textContent = "You are currently listing your student properties.";
        sub.textContent = "Verified Property Owner • Sunway City";
        name.textContent = "Ms. Angelina Julie Herliman";
        avatar.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&width=150&auto=format&fit=crop";
        
        if (prefTitle && checkboxRow) {
          prefTitle.textContent = "My Property Listings Controls";
          checkboxRow.innerHTML = `
            <label class="pref-checkbox-item">
              <input type="checkbox" checked class="pref-check">
              <div class="custom-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              Boost Listings near Sunway Campus
            </label>
            <label class="pref-checkbox-item">
              <input type="checkbox" class="pref-check">
              <div class="custom-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              Send new roommate listings alert
            </label>
          `;
        }

        showToast("Switched to Landlord Host Mode!");
      } else {
        // Toggle Member Mode
        label.textContent = "Student Tenant Mode";
        desc.textContent = "You are currently searching for shared rooms and roommates.";
        sub.textContent = "Taylor's University • Year 2";
        name.textContent = "Angelina Julie Herliman";
        avatar.src = "profile.jpg";

        if (prefTitle && checkboxRow) {
          prefTitle.textContent = "My Roommate Preferences";
          checkboxRow.innerHTML = `
            <label class="pref-checkbox-item">
              <input type="checkbox" checked class="pref-check" data-pref="smoke">
              <div class="custom-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              Non-smoking roommates only
            </label>
            <label class="pref-checkbox-item">
              <input type="checkbox" checked class="pref-check" data-pref="clean">
              <div class="custom-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              Prefer daily clean/neat room
            </label>
            <label class="pref-checkbox-item">
              <input type="checkbox" class="pref-check" data-pref="night">
              <div class="custom-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              Night owl sleeping pattern
            </label>
            <label class="pref-checkbox-item">
              <input type="checkbox" checked class="pref-check" data-pref="guest">
              <div class="custom-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              No overnight guests allowed
            </label>
          `;
        }

        showToast("Switched to Student Tenant Mode!");
      }

      // Sync header and homepage displays
      const titleElem = document.getElementById("app-header-title");
      if (titleElem && currentScreen === "screen-home") {
        titleElem.innerHTML = isChecked ? "UniStay <span>Host</span>" : "UniStay";
      }

      // Reattach listener to new dynamic checkboxes if any
      attachPrefsListener();
    });
  }

  const settingsBtn = document.getElementById("profile-settings-btn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      showToast("App Settings: Dark Mode, Push Notifications & Privacy controls opened!");
    });
  }

  attachPrefsListener();
  renderProfileSavedProperties();

  // Logout button
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Reload splash page simulation
      const splash = document.getElementById("splash-screen");
      if (splash) {
        splash.style.display = "flex";
        splash.style.opacity = "1";
        showToast("Logging out student session...");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  }
}

function attachPrefsListener() {
  const checks = document.querySelectorAll(".pref-check");
  checks.forEach(check => {
    check.addEventListener("change", () => {
      const type = check.getAttribute("data-pref");
      if (type) {
        userPreferences[type] = check.checked;
        showToast(`Preferences updated: ${type} is now ${check.checked ? "Enabled" : "Disabled"}`);
      }
    });
  });
}

function renderProfileSavedProperties() {
  const container = document.getElementById("saved-properties-container");
  if (!container) return;

  container.innerHTML = "";

  const savedList = MOCK_PROPERTIES.filter(p => likedProperties.includes(p.id));

  if (savedList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; width:100%; padding: 20px 0; color: var(--text-base); font-size: 12px; font-weight:500;">
        You haven't liked any property rooms yet.
      </div>
    `;
    return;
  }

  savedList.forEach(prop => {
    const card = document.createElement("div");
    card.className = "property-card slide-up";
    const badgeHTML = prop.verified ? `<div class="property-verified-badge">Verified</div>` : "";
    
    card.innerHTML = `
      <div class="property-card-image-box">
        <img src="${prop.image}" alt="${prop.title}" class="property-img">
        ${badgeHTML}
        <button class="property-like-btn liked" data-id="${prop.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="property-details">
        <h4 class="property-price-tag">RM ${prop.price}</h4>
        <h3 class="property-title">${prop.title}</h3>
        <div class="property-meta" style="flex-wrap: wrap; gap: 4px 8px; margin-top: 4px;">
          <div class="property-meta-item" style="font-size: 11px;">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width: 12px; height: 12px;">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>${prop.location}</span>
          </div>
          <div class="property-meta-item" style="font-size: 11px;">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width: 12px; height: 12px;">
              <rect x="3" y="4" width="18" height="12" rx="2"/>
              <circle cx="7.5" cy="16.5" r="1.5"/>
              <circle cx="16.5" cy="16.5" r="1.5"/>
            </svg>
            <span style="color: ${prop.shuttleAvailable ? 'var(--primary)' : 'var(--text-base)'}; font-weight: ${prop.shuttleAvailable ? '700' : '500'};">${prop.shuttleAvailable ? 'Shuttle Available' : 'No Shuttle'}</span>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".property-like-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLike(prop.id, card.querySelector(".property-like-btn"));
      // Sync on dashboard as well
      const dashBtn = document.querySelector(`.property-like-btn[data-id="${prop.id}"]`);
      if (dashBtn) dashBtn.classList.remove("liked");
    });

    card.addEventListener("click", () => {
      openPropertyDrawer(prop);
    });

    container.appendChild(card);
  });
}
