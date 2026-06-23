/* ==========================================================================
   Art Drop - Main Application Controller (State, Routing, and Interactivity)
   ========================================================================== */

// --- ARTWORKS DATABASE ---
const ARTWORKS = [
    {
        id: "neon-waves",
        title: "Neon Waves",
        artist: "Kai Vance",
        category: "Digital Art",
        style: "Cyberpunk",
        medium: "Digital File & Giclée Print",
        originalPrice: 450,
        price: 280,
        rating: 4.9,
        reviews: 24,
        salesCount: 142,
        isBestSeller: true,
        image: "assets/neon_waves.png",
        description: "A premium fluid simulation capturing digital waves in high-voltage pink and electric blue colors. Captures the harmony between data flow and organic motion.",
        specs: ["Edition of 50", "Certificate of Authenticity Included", "High-Resolution TIF + 24x36 Canvas Print"]
    },
    {
        id: "quantum-echo",
        title: "Quantum Echo",
        artist: "Elena Rostova",
        category: "Paintings",
        style: "Abstract",
        medium: "Acrylic & Glow Paint on Canvas",
        originalPrice: 1200,
        price: 750,
        rating: 4.8,
        reviews: 18,
        salesCount: 98,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
        description: "A large physical painting utilizing fluorescent pigments that glow under blacklight. The heavy texture represents the chaotic yet structured nature of subatomic waves.",
        specs: ["Dimensions: 40 x 40 inches", "Signed by Artist on Reverse", "Stretched canvas on cedar stretcher bars"]
    },
    {
        id: "chrono-shade",
        title: "Chrono-Shade",
        artist: "Marcus Aurel",
        category: "Sculptures",
        style: "Modern",
        medium: "Bronze & Built-in LED Neons",
        originalPrice: 2800,
        price: 1850,
        rating: 5.0,
        reviews: 12,
        salesCount: 45,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=600&q=80",
        description: "A futuristic bronze sculpture that spirals upwards. Embedded smart LEDs dynamically shift colors, creating an ever-evolving light fixture and fine art installation.",
        specs: ["Dimensions: 14 x 14 x 36 inches", "Integrated Smart Neon app-controlled LEDs", "Bronze with dark patina finish"]
    },
    {
        id: "electric-nomad",
        title: "Electric Nomad",
        artist: "Zev Wilde",
        category: "Street Art",
        style: "Cyberpunk",
        medium: "Spray Paint & Neon Markers",
        originalPrice: 650,
        price: 390,
        rating: 4.7,
        reviews: 31,
        salesCount: 110,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
        description: "A vibrant expressionistic canvas reflecting modern street culture and cyberpunk neon aesthetic. Spray layers mixed with neon ink highlights.",
        specs: ["Dimensions: 30 x 40 inches", "Certificate of Authenticity signed by Zev Wilde", "Hand-finished edges, ready to hang"]
    },
    {
        id: "metropolis-noir",
        title: "Metropolis Noir",
        artist: "Siddharth Sen",
        category: "Photography",
        style: "Minimalist",
        medium: "Archival Pigment Print",
        originalPrice: 500,
        price: 320,
        rating: 4.9,
        reviews: 29,
        salesCount: 124,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1508189860359-777d945909ef?auto=format&fit=crop&w=600&q=80",
        description: "A long-exposure photograph captures neon streaks across a rainy Tokyo intersection, contrasting dark architectural grids with intense color trails.",
        specs: ["Edition 15 of 100", "Printed on Hahnemühle Photo Rag paper", "Framed under museum glass"]
    },
    {
        id: "hyper-flora",
        title: "Hyper-Flora",
        artist: "Aria Thorne",
        category: "Digital Art",
        style: "Surrealism",
        medium: "Digital Sculpting & C-Type Print",
        originalPrice: 380,
        price: 240,
        rating: 4.6,
        reviews: 14,
        salesCount: 88,
        isBestSeller: false,
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
        description: "A surreal, alien-like blooming digital botany design. Rendered with bioluminescent textures to highlight organic patterns.",
        specs: ["Includes 4K high-fidelity display file", "Includes 18x18 framed canvas copy", "Certified on the Ethereum Blockchain"]
    },
    {
        id: "nebula-dawn",
        title: "Nebula Dawn",
        artist: "Elena Rostova",
        category: "Abstract",
        style: "Surrealism",
        medium: "Mixed Media on Canvas",
        originalPrice: 950,
        price: 580,
        rating: 4.9,
        reviews: 16,
        salesCount: 67,
        isBestSeller: false,
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=600&q=80",
        description: "Swirls of purples, pinks, and gold dust capturing the birth of an abstract cosmic nursery. Finished with a heavy, glossy protective resin layer.",
        specs: ["Dimensions: 36 x 36 inches", "Includes premium floating wood frame", "Signed and dated by Elena Rostova"]
    },
    {
        id: "silicon-heart",
        title: "Silicon Heart",
        artist: "Marcus Aurel",
        category: "Sculptures",
        style: "Cyberpunk",
        medium: "Resin, Circuit Boards & Neon Acrylic",
        originalPrice: 1950,
        price: 1250,
        rating: 4.8,
        reviews: 9,
        salesCount: 32,
        isBestSeller: false,
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80",
        description: "An anatomical heart sculpted from recycled server motherboards and glowing pink translucent acrylic sheets. Hand-soldered fiber-optic nerves pulse with light.",
        specs: ["Dimensions: 10 x 10 x 18 inches", "Includes AC wall adaptor", "Desk-mounted display stand included"]
    },
    {
        id: "subterranean-glow",
        title: "Subterranean Glow",
        artist: "Zev Wilde",
        category: "Street Art",
        style: "Abstract",
        medium: "Stained Wood & Spray layers",
        originalPrice: 800,
        price: 490,
        rating: 4.9,
        reviews: 20,
        salesCount: 75,
        isBestSeller: false,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
        description: "Reclaimed building panels spray-painted with geometric layers of neon paints and raw wood stains, mimicking train-tunnel textures.",
        specs: ["Dimensions: 48 x 24 inches", "Heavy back brace, ready for installation", "UV-resistant outdoor protective coat"]
    },
    {
        id: "aetherial-float",
        title: "Aetherial Float",
        artist: "Siddharth Sen",
        category: "Photography",
        style: "Minimalist",
        medium: "Fine Art Print",
        originalPrice: 600,
        price: 380,
        rating: 4.7,
        reviews: 22,
        salesCount: 112,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1554188718-d807d3348252?auto=format&fit=crop&w=600&q=80",
        description: "A minimalist capture of colored mist floating over still waters. A breathtaking exploration of fog, neon color reflection, and negative space.",
        specs: ["Edition 4 of 50", "Printed with archival pigment inks", "Includes dark aluminum minimalist frame"]
    },
    {
        id: "luminant-vortex",
        title: "Luminant Vortex",
        artist: "Kai Vance",
        category: "Digital Art",
        style: "Abstract",
        medium: "Generative Code Art",
        originalPrice: 350,
        price: 210,
        rating: 4.9,
        reviews: 42,
        salesCount: 215,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        description: "A beautiful mathematical generative pattern rendering millions of digital paint splatters spiraling into a vibrant tunnel of light.",
        specs: ["Includes high-res vector file export", "Includes physical canvas canvas mount", "One-of-a-kind dynamic WebGL rendering token"]
    },
    {
        id: "cyber-deity",
        title: "Cyber Deity",
        artist: "Aria Thorne",
        category: "Sculptures",
        style: "Surrealism",
        medium: "3D Printed Ceramic & Chrome glaze",
        originalPrice: 1500,
        price: 950,
        rating: 4.9,
        reviews: 8,
        salesCount: 28,
        isBestSeller: false,
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&q=80",
        description: "A ceramic bust of a cybernetic deity finished in liquid chrome and gold. Explores the synthesis of mythology and transhumanist computing.",
        specs: ["Dimensions: 12 x 8 x 20 inches", "Hand glazed and kiln fired", "Signed Certificate with artist fingerprint stamp"]
    }
];

// --- INITIAL REVIEWS DATABASE ---
const INITIAL_REVIEWS = [
    {
        id: "rev-1",
        name: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        title: "Collector & Interior Designer",
        rating: 5,
        text: "Art Drop has completely changed how I acquire statement pieces for my clients. The neon accents on the Bronze 'Chrono-Shade' are breathtaking. Incredible customer service and fast shipping!",
        artworkId: "chrono-shade",
        date: "2026-05-14"
    },
    {
        id: "rev-2",
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        title: "Tech Entrepreneur",
        rating: 5,
        text: "I bought 'Neon Waves' as a digital asset for my screen setup, and also got the canvas print. The print quality is incredibly sharp, and the colors under dim lighting are phenomenal.",
        artworkId: "neon-waves",
        date: "2026-05-28"
    },
    {
        id: "rev-3",
        name: "Amara Okoye",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        title: "Fine Art Collector",
        rating: 4,
        text: "The 'Quantum Echo' by Elena Rostova is stunning. The glow paint highlights under UV light are mesmerizing. Marked down one star only because shipping took an extra day, but it was fully insured.",
        artworkId: "quantum-echo",
        date: "2026-06-02"
    },
    {
        id: "rev-4",
        name: "Marcus Vane",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        title: "Digital Art Enthusiast",
        rating: 5,
        text: "Luminant Vortex is a masterpiece. The geometric details are spectacular. Highly recommend Art Drop for rare deals on authentic digital art.",
        artworkId: "luminant-vortex",
        date: "2026-06-12"
    },
    {
        id: "rev-5",
        name: "Clara Dubois",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        title: "Gallery Curator",
        rating: 5,
        text: "Art Drop connects me directly with original ideas and high quality, verified artists. Siddharth Sen's long-exposure prints are exceptional. The pricing here is unbeatable.",
        artworkId: "metropolis-noir",
        date: "2026-06-18"
    }
];

// --- ARTIST VIDEOS DATABASE ---
const ARTIST_VIDEOS = [
    {
        id: "vid-1",
        artist: "Kai Vance",
        specialty: "Digital Art & Generative Code",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        youtubeId: "lLWEXRAnQd0",
        bio: "Kai Vance designs algorithmic art utilizing WebGL shaders and custom code, painting with mathematical waves."
    },
    {
        id: "vid-2",
        artist: "Elena Rostova",
        specialty: "Abstract Glow Paintings",
        thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
        youtubeId: "kPG_N9BZHQQ",
        bio: "Elena Rostova blends traditional oils with high-luminance fluorophore acrylics to create dynamic canvases that shift between light and dark."
    },
    {
        id: "vid-3",
        artist: "Marcus Aurel",
        specialty: "Cybernetic Bronze Sculptures",
        thumbnail: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=600&q=80",
        youtubeId: "1s58rW0_hXw",
        bio: "Marcus Aurel integrates cold bronze foundry casting with addressable neon hardware, producing sculptural light sculptures."
    },
    {
        id: "vid-4",
        artist: "Siddharth Sen",
        specialty: "Long Exposure Neon Photography",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        youtubeId: "S4a0l2v_T1Y",
        bio: "Siddharth captures transient light in city nights. His prints capture light trails as ribbons of glowing energy."
    },
    {
        id: "vid-5",
        artist: "Zev Wilde",
        specialty: "Subcultural Street Art",
        thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80",
        youtubeId: "y1xI2OInB-M",
        bio: "Zev Wilde works with mixed media stencils and heavy layering, bringing underground graffiti and neon tag designs to panels."
    },
    {
        id: "vid-6",
        artist: "Aria Thorne",
        specialty: "Surreal 3D Ceramics",
        thumbnail: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&q=80",
        youtubeId: "VlYjXwR6Q5I",
        bio: "Aria merges clay modeling and digital printing. She glazes detailed ceramic busts in shimmering metallic and chrome paints."
    }
];

// --- GLOBAL STATE MANAGER ---
class StateManager {
    constructor() {
        this.cart = [];
        this.wishlist = [];
        this.reviews = INITIAL_REVIEWS;
        this.activeFilters = {
            search: "",
            category: [],
            style: [],
            medium: [],
            maxPrice: 3000
        };
        this.demandEstimate = {
            size: "medium",
            medium: "canvas",
            complexity: "detailed"
        };
        this.backendUrl = "http://localhost:3000/api";
    }

    async init() {
        try {
            const response = await fetch(`${this.backendUrl}/data`);
            if (response.ok) {
                const data = await response.json();
                this.cart = data.cart || [];
                this.wishlist = data.wishlist || [];
                if (data.reviews && data.reviews.length > 0) {
                    this.reviews = data.reviews;
                }
            }
        } catch (err) {
            console.error("Failed to fetch backend data, falling back to local defaults.", err);
        }
    }

    // --- Cart Actions ---
    addToCart(artworkId, quantity = 1) {
        const existing = this.cart.find(item => item.artworkId === artworkId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.cart.push({ artworkId, quantity });
        }
        this.saveCart();
        this.updateCartBadge();
        showToast("Artwork added to Cart!", "success");
    }

    removeFromCart(artworkId) {
        this.cart = this.cart.filter(item => item.artworkId !== artworkId);
        this.saveCart();
        this.updateCartBadge();
        showToast("Item removed from Cart.", "pink");
    }

    updateQuantity(artworkId, delta) {
        const item = this.cart.find(it => it.artworkId === artworkId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeFromCart(artworkId);
                return;
            }
            this.saveCart();
            this.updateCartBadge();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartBadge();
    }

    async saveCart() {
        try {
            await fetch(`${this.backendUrl}/cart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.cart)
            });
        } catch (err) {
            console.error("Error saving cart:", err);
        }
    }

    updateCartBadge() {
        const badge = document.getElementById("global-cart-badge");
        if (badge) {
            const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = count;
            badge.classList.remove("pop");
            void badge.offsetWidth; // Trigger reflow
            badge.classList.add("pop");
        }
    }

    // --- Wishlist Actions ---
    async toggleWishlist(artworkId) {
        const index = this.wishlist.indexOf(artworkId);
        if (index > -1) {
            this.wishlist.splice(index, 1);
            showToast("Removed from Wishlist.", "pink");
        } else {
            this.wishlist.push(artworkId);
            showToast("Added to Wishlist!", "success");
        }
        
        try {
            await fetch(`${this.backendUrl}/wishlist`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.wishlist)
            });
        } catch (err) {
            console.error("Error saving wishlist:", err);
        }
        
        // Dynamic re-render inside viewport elements containing wishlist class
        document.querySelectorAll(`.wishlist-btn[data-id="${artworkId}"]`).forEach(btn => {
            btn.classList.toggle("active");
        });
    }

    // --- Review Actions ---
    async addReview(review) {
        this.reviews.unshift(review);
        try {
            await fetch(`${this.backendUrl}/reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(review)
            });
        } catch (err) {
            console.error("Error saving review:", err);
        }
        showToast("Review submitted successfully!", "success");
    }
}

const State = new StateManager();

// --- ROUTER ENGINE ---
class Router {
    constructor() {
        this.routes = {
            "home": () => this.renderHome(),
            "shop": () => this.renderShop(),
            "categories": () => this.renderCategories(),
            "bestsellers": () => this.renderBestSellers(),
            "ondemand": () => this.renderOnDemand(),
            "videos": () => this.renderVideos(),
            "founder": () => this.renderFounder(),
            "cart": () => this.renderCart(),
            "reviews": () => this.renderReviews(),
        };

        window.addEventListener("hashchange", () => this.handleRoute());
        this.handleRoute(); // Execute immediately
    }

    handleRoute() {
        const hash = window.location.hash || "#home";
        
        // Extract plain route name (e.g., "#/shop" or "#shop" -> "shop")
        let path = hash.split("?")[0].replace(/^#\/?/, "");
        if (path === "") path = "home";
        
        const renderFunc = this.routes[path] || this.routes["home"];
        
        // Close mobile nav on transition
        const navLinks = document.getElementById("main-nav-links");
        if (navLinks) {
            navLinks.classList.remove("active");
        }
        
        // Smooth scroll to top
        window.scrollTo(0, 0);
        
        // Execute render
        renderFunc();

        // Update active nav link
        document.querySelectorAll(".nav-link").forEach(link => {
            const page = link.getAttribute("data-page");
            if (page === path) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Initialize icons
        lucide.createIcons();
    }

    // --- ROUTE RENDERS ---

    // 1. HOME PAGE
    renderHome() {
        const viewport = document.getElementById("app-viewport");
        
        // Best sellers data (6 items)
        const bestSellers = ARTWORKS.slice(0, 6);
        let bestSellersHtml = "";
        bestSellers.forEach(art => {
            bestSellersHtml += renderArtworkCard(art);
        });

        // Reviews (3 item previews)
        const sampleReviews = State.reviews.slice(0, 3);
        let reviewsHtml = "";
        sampleReviews.forEach(rev => {
            reviewsHtml += `
            <div class="review-card glass-card">
                <div class="review-header">
                    <img src="${rev.avatar}" alt="${rev.name}" class="reviewer-avatar">
                    <div>
                        <h4 class="reviewer-name">${rev.name}</h4>
                        <span class="reviewer-title">${rev.title}</span>
                    </div>
                </div>
                <div class="rating-stars">
                    ${renderStars(rev.rating)}
                </div>
                <p class="review-text">"${rev.text}"</p>
            </div>
            `;
        });

        // Artist videos previews (3 items)
        const sampleVideos = ARTIST_VIDEOS.slice(0, 3);
        let videosHtml = "";
        sampleVideos.forEach(vid => {
            videosHtml += `
            <div class="video-card glass-card" onclick="openVideoPlayer('${vid.youtubeId}')">
                <div class="video-thumbnail-container">
                    <img src="${vid.thumbnail}" alt="${vid.artist}">
                    <div class="video-play-overlay">
                        <div class="play-btn-circle">
                            <i data-lucide="play" fill="currentColor"></i>
                        </div>
                    </div>
                </div>
                <div class="video-info-overlay">
                    <h3>${vid.artist}</h3>
                    <p>${vid.specialty}</p>
                </div>
            </div>
            `;
        });

        viewport.innerHTML = `
            <!-- Hero Section -->
            <section class="hero-section page-section">
                <div class="hero-content">
                    <span class="hero-subtitle">Exclusive Rare Collectibles</span>
                    <h1 class="hero-title"><span class="gradient-title">Rare Art.</span><br><span class="glow-text-pink">Real Deals.</span></h1>
                    <p class="hero-desc">Discover premium canvas paintings, glowing sculptures, digital illustrations and high-fidelity photography at unmatchable direct-from-studio discounts.</p>
                    <div style="display: flex; gap: 16px;">
                        <a href="#shop" class="btn btn-primary">Explore Drops <i data-lucide="arrow-right"></i></a>
                        <a href="#ondemand" class="btn btn-secondary">Commission Custom <i data-lucide="brush"></i></a>
                    </div>
                </div>
                <div class="hero-visuals">
                    <div class="hero-glowing-circle"></div>
                    <!-- Card 1 -->
                    <div class="floating-art-card floating-card-1" onclick="openQuickPreview('neon-waves')">
                        <img src="assets/neon_waves.png" alt="Neon Waves">
                        <div class="floating-card-info">
                            <h4>Neon Waves</h4>
                            <p>by Kai Vance</p>
                        </div>
                    </div>
                    <!-- Card 2 -->
                    <div class="floating-art-card floating-card-2" onclick="openQuickPreview('chrono-shade')">
                        <img src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=600&q=80" alt="Chrono-Shade">
                        <div class="floating-card-info">
                            <h4>Chrono-Shade</h4>
                            <p>by Marcus Aurel</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Scrolling Marquee Ticker -->
            <div class="marquee-container">
                <div class="marquee-content">
                    <span class="marquee-item">Limited Edition</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Rare Finds</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Exclusive Discounts</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Premium Art</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Museum-Grade Certificates</span><span class="marquee-dot">·</span>
                    <!-- Repeat for endless scroll effect -->
                    <span class="marquee-item">Limited Edition</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Rare Finds</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Exclusive Discounts</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Premium Art</span><span class="marquee-dot">·</span>
                    <span class="marquee-item">Museum-Grade Certificates</span><span class="marquee-dot">·</span>
                </div>
            </div>

            <!-- Featured Categories Section -->
            <section class="page-section" style="margin-bottom: 80px;">
                <div class="section-header">
                    <h2>Curated Mediums</h2>
                    <p>Select a medium to filter rare artwork drops tailored to your stylistic vision.</p>
                </div>
                <div class="categories-grid">
                    <a href="#shop?category=Paintings" class="category-card glass-card" data-style="paintings">
                        <div class="category-icon-wrapper"><i data-lucide="palette" size="32"></i></div>
                        <h3>Paintings</h3>
                    </a>
                    <a href="#shop?category=Digital Art" class="category-card glass-card" data-style="digital">
                        <div class="category-icon-wrapper"><i data-lucide="monitor" size="32"></i></div>
                        <h3>Digital Art</h3>
                    </a>
                    <a href="#shop?category=Sculptures" class="category-card glass-card" data-style="sculptures">
                        <div class="category-icon-wrapper"><i data-lucide="gem" size="32"></i></div>
                        <h3>Sculptures</h3>
                    </a>
                    <a href="#shop?category=Photography" class="category-card glass-card" data-style="photography">
                        <div class="category-icon-wrapper"><i data-lucide="camera" size="32"></i></div>
                        <h3>Photography</h3>
                    </a>
                    <a href="#shop?category=Abstract" class="category-card glass-card" data-style="abstract">
                        <div class="category-icon-wrapper"><i data-lucide="feather" size="32"></i></div>
                        <h3>Abstract</h3>
                    </a>
                    <a href="#shop?category=Street Art" class="category-card glass-card" data-style="streetart">
                        <div class="category-icon-wrapper"><i data-lucide="spray-can" class="custom-icon"></i></div>
                        <h3>Street Art</h3>
                    </a>
                </div>
            </section>

            <!-- Best Sellers Section -->
            <section class="page-section" style="margin-bottom: 80px;">
                <div class="section-header">
                    <h2>Trending Drop Deals</h2>
                    <p>Hottest designs collectors are acquiring right now. Time-limited gallery discount rates apply.</p>
                </div>
                <div class="artworks-grid">
                    ${bestSellersHtml}
                </div>
            </section>

            <!-- Videos Section: Watch Masters Create -->
            <section class="page-section" style="margin-bottom: 80px;">
                <div class="section-header">
                    <h2>Watch Masters Create</h2>
                    <p>Go inside the studios of our master curators and watch them shape raw concepts into reality.</p>
                </div>
                <div class="videos-summary-grid">
                    ${videosHtml}
                </div>
                <div style="text-align: center;">
                    <a href="#videos" class="btn btn-secondary">Watch All Masterclasses <i data-lucide="play-circle"></i></a>
                </div>
            </section>

            <!-- Customer Reviews Section -->
            <section class="page-section" style="margin-bottom: 80px;">
                <div class="section-header">
                    <h2>Collector Sentiments</h2>
                    <p>Hear from fine art collectors, gallery curators, and interior designers who buy rare pieces from Art Drop.</p>
                </div>
                <div class="reviews-summary-grid">
                    ${reviewsHtml}
                </div>
                <div style="text-align: center;">
                    <a href="#reviews" class="btn btn-secondary">Check Ratings Board <i data-lucide="star"></i></a>
                </div>
            </section>

            <!-- Newsletter Signup Section -->
            <section class="page-section">
                <div class="newsletter-box glass-card">
                    <h2 class="glow-text-blue">Join The Inner Circle</h2>
                    <p>Get notified when secret drops arrive. Members receive custom invites and up to 60% early-bird discounts.</p>
                    <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
                        <input type="email" placeholder="Enter your email address" class="newsletter-input" required id="newsletter-email">
                        <button type="submit" class="btn btn-pink">Secure Invites</button>
                    </form>
                </div>
            </section>
        `;
    }

    // 2. SHOP / CATEGORIES PAGE
    renderShop() {
        const viewport = document.getElementById("app-viewport");
        
        // Parse category filter from hash URL query params
        const hash = window.location.hash;
        if (hash.includes("?category=")) {
            const cat = decodeURIComponent(hash.split("?category=")[1]);
            State.activeFilters.category = [cat];
        }

        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>The Neon Collection</h2>
                    <p>Browse rare museum-grade pieces with glowing details. Utilize search or advanced filters to refine the catalog.</p>
                </div>
                
                <div class="shop-container">
                    <!-- Filters Sidebar -->
                    <aside class="filter-sidebar glass-card">
                        <div class="filter-group">
                            <h3>Search Title / Artist</h3>
                            <div class="search-input-wrapper">
                                <i data-lucide="search"></i>
                                <input type="text" placeholder="Search..." class="search-field" id="shop-search" value="${State.activeFilters.search}" oninput="updateShopFilters('search', this.value)">
                            </div>
                        </div>

                        <div class="filter-group">
                            <h3>Art Medium</h3>
                            <div id="filter-categories-list">
                                ${["Paintings", "Digital Art", "Sculptures", "Photography", "Abstract", "Street Art"].map(cat => `
                                    <label class="filter-option">
                                        <input type="checkbox" value="${cat}" ${State.activeFilters.category.includes(cat) ? 'checked' : ''} onchange="updateShopFilterCheckbox('category', '${cat}', this.checked)">
                                        ${cat}
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <div class="filter-group">
                            <h3>Artistic Style</h3>
                            <div>
                                ${["Cyberpunk", "Surrealism", "Modern", "Abstract", "Minimalist"].map(style => `
                                    <label class="filter-option">
                                        <input type="checkbox" value="${style}" ${State.activeFilters.style.includes(style) ? 'checked' : ''} onchange="updateShopFilterCheckbox('style', '${style}', this.checked)">
                                        ${style}
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <div class="filter-group">
                            <h3>Budget Limit</h3>
                            <div class="price-slider-container">
                                <input type="range" min="100" max="3000" step="50" class="price-range-slider" id="price-slider" value="${State.activeFilters.maxPrice}" oninput="updateShopFilters('maxPrice', this.value)">
                                <div class="price-slider-vals">
                                    <span>$100</span>
                                    <span id="price-limit-label" class="glow-text-blue">$${State.activeFilters.maxPrice}</span>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-secondary btn-small" style="width: 100%;" onclick="clearShopFilters()">Reset All Filters</button>
                    </aside>

                    <!-- Main Grid -->
                    <section class="shop-main-section">
                        <div class="shop-header-summary">
                            <p id="shop-count-label">Showing 0 artworks</p>
                            <select class="sort-select" id="shop-sort" onchange="updateShopFilters('sort', this.value)">
                                <option value="default">Sort by: Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Rating Score</option>
                            </select>
                        </div>
                        <div class="artworks-grid" id="shop-artworks-grid">
                            <!-- Injected dynamically -->
                        </div>
                    </section>
                </div>
            </div>
        `;
        
        applyShopFiltering();
    }

    // 3. CATEGORIES PAGE
    renderCategories() {
        const viewport = document.getElementById("app-viewport");
        const categories = ["Paintings", "Digital Art", "Sculptures", "Photography", "Abstract", "Street Art"];
        
        let categoriesHtml = "";
        categories.forEach(cat => {
            const catArtworks = ARTWORKS.filter(art => art.category === cat).slice(0, 3);
            let rowArtworksHtml = "";
            catArtworks.forEach(art => {
                rowArtworksHtml += renderArtworkCard(art);
            });

            categoriesHtml += `
                <div class="category-row">
                    <div class="category-row-title-row">
                        <div>
                            <h2>${cat}</h2>
                            <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Rare curated items in our ${cat} archive.</p>
                        </div>
                        <a href="#shop?category=${encodeURIComponent(cat)}" class="btn btn-secondary btn-small">Explore All <i data-lucide="arrow-up-right"></i></a>
                    </div>
                    <div class="artworks-grid">
                        ${rowArtworksHtml}
                    </div>
                </div>
            `;
        });

        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>Medium Showcase</h2>
                    <p>Discover masterworks organized by creation mechanics and texture profiles.</p>
                </div>
                <div class="categories-showcase">
                    ${categoriesHtml}
                </div>
            </div>
        `;
    }

    // 4. BEST SELLERS PAGE
    renderBestSellers() {
        const viewport = document.getElementById("app-viewport");
        
        // Top 10 sorted by salesCount
        const top10 = [...ARTWORKS].sort((a,b) => b.salesCount - a.salesCount).slice(0, 10);
        
        let top10Html = "";
        top10.forEach((art, idx) => {
            const rank = idx + 1;
            const isTop3 = rank <= 3;
            top10Html += `
            <div class="bestseller-item glass-card page-section">
                <div class="rank-badge ${isTop3 ? 'rank-top-3' : ''}">#${rank}</div>
                <img src="${art.image}" alt="${art.title}" class="bestseller-img" onclick="openQuickPreview('${art.id}')" style="cursor: pointer;">
                <div class="bestseller-details">
                    <span class="artwork-category">${art.category}</span>
                    <h3 onclick="openQuickPreview('${art.id}')" style="cursor: pointer;">${art.title}</h3>
                    <p>Artist: <strong>${art.artist}</strong></p>
                    <div class="bestseller-meta">
                        <span class="sales-badge">${art.salesCount} Direct Orders</span>
                        <div class="rating-stars" style="margin-bottom: 0;">
                            ${renderStars(art.rating)}
                            <span>(${art.reviews})</span>
                        </div>
                    </div>
                </div>
                <div class="bestseller-pricing">
                    <div class="original-price">$${art.originalPrice}</div>
                    <div class="discounted-price" style="font-size: 24px;">$${art.price}</div>
                    <button class="btn btn-pink btn-small" onclick="buyNow('${art.id}')" style="width: 100%;">Buy Now <i data-lucide="zap"></i></button>
                </div>
            </div>
            `;
        });

        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>Gallery Leaderboard</h2>
                    <p>Top 10 ranked artworks acquired by worldwide digital and physical art collectors.</p>
                </div>
                <div class="bestsellers-list">
                    ${top10Html}
                </div>
            </div>
        `;
    }

    // 5. ARTWORK ON DEMAND PAGE
    renderOnDemand() {
        const viewport = document.getElementById("app-viewport");
        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>Artwork on Demand</h2>
                    <p>Commission a tailored masterpiece directly from our senior artists. Input your sizing and medium for a quote estimate.</p>
                </div>
                
                <div id="ondemand-main-container">
                    <div class="ondemand-container">
                        <!-- Form Section -->
                        <div class="ondemand-form-section glass-card">
                            <h2>Commission Details</h2>
                            <form id="ondemand-form" onsubmit="handleOnDemandSubmit(event)">
                                <div class="form-group-row">
                                    <div class="form-group">
                                        <label for="od-name">Full Name</label>
                                        <input type="text" id="od-name" class="form-control" placeholder="Abhishek Sharma" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="od-email">Email Address</label>
                                        <input type="email" id="od-email" class="form-control" placeholder="abhishek@artdrop.com" required>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="od-desc">Artwork Vision & Concept Description</label>
                                    <textarea id="od-desc" class="form-control" placeholder="Describe your visual concept, background elements, tone, colors, and references..." required></textarea>
                                </div>
                                
                                <div class="form-group-row">
                                    <div class="form-group">
                                        <label for="od-size">Canvas Size</label>
                                        <select id="od-size" class="form-control" onchange="calculateOnDemandPrice()">
                                            <option value="small">Small Print (12" x 18")</option>
                                            <option value="medium" selected>Medium Canvas (24" x 36")</option>
                                            <option value="large">Large Stretched (36" x 48")</option>
                                            <option value="mural">Mural / Custom Installation</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="od-medium">Artistic Medium</label>
                                        <select id="od-medium" class="form-control" onchange="calculateOnDemandPrice()">
                                            <option value="digital">Pure Digital Art file (PNG/TIFF)</option>
                                            <option value="canvas" selected>Acrylic & Spray Paint on Canvas</option>
                                            <option value="sculpture">Sculptural / Installation Elements</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="form-group-row">
                                    <div class="form-group">
                                        <label for="od-style">Style Preference</label>
                                        <select id="od-style" class="form-control">
                                            <option value="cyberpunk">Cyberpunk Neon</option>
                                            <option value="abstract">Minimalist Abstract</option>
                                            <option value="surrealism">Surreal Dreamscapes</option>
                                            <option value="graffiti">Street Art & Graffiti</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="od-complexity">Design Complexity</label>
                                        <select id="od-complexity" class="form-control" onchange="calculateOnDemandPrice()">
                                            <option value="simple">Minimalist Sketch / Fast Render</option>
                                            <option value="detailed" selected>Detailed Texturing & Lighting</option>
                                            <option value="complex">Hyper-complex Layers & Glow Accents</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="od-budget">Your Budget Ceiling ($)</label>
                                    <input type="number" id="od-budget" class="form-control" placeholder="1000" min="200" required>
                                </div>
                                
                                <button type="submit" class="btn btn-primary" style="margin-top: 16px; width: 100%;">Submit Commission Request <i data-lucide="send"></i></button>
                            </form>
                        </div>
                        
                        <!-- Side Estimator Widget -->
                        <div class="price-estimator-widget glass-card">
                            <h3>Live Quote Estimator</h3>
                            <div class="estimator-breakdown-row">
                                <span>Base Dimensions cost:</span>
                                <span id="estimate-base-size">$300</span>
                            </div>
                            <div class="estimator-breakdown-row">
                                <span>Medium materials charge:</span>
                                <span id="estimate-base-medium">$250</span>
                            </div>
                            <div class="estimator-breakdown-row">
                                <span>Complexity multiplier:</span>
                                <span id="estimate-complexity">x1.4</span>
                            </div>
                            
                            <div class="estimator-total-row">
                                <h4>Estimated Pricing</h4>
                                <div class="estimator-total-price" id="estimate-total-price">$770</div>
                            </div>
                            
                            <p style="color: var(--text-muted); font-size: 12px; margin-top: 20px; line-height: 1.5;">
                                *Estimate excludes local custom frame packaging and insured freight delivery. A senior director will review this request and email you within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- How It Works Timeline -->
                <div class="how-it-works-section">
                    <div class="section-header">
                        <h2>Commission Lifecycle</h2>
                        <p>How we bring your personalized vision from the drafting canvas straight to your walls.</p>
                    </div>
                    <div class="how-it-works-steps">
                        <div class="step-card glass-card">
                            <div class="step-icon-circle">1</div>
                            <h4>Submit Request</h4>
                            <p>Outline your styling guidelines, dimensions, and visual themes using the form.</p>
                        </div>
                        <div class="step-card glass-card">
                            <div class="step-icon-circle">2</div>
                            <h4>Artist Assigned</h4>
                            <p>We match you with a senior specialist curated from our elite artist circle.</p>
                        </div>
                        <div class="step-card glass-card">
                            <div class="step-icon-circle">3</div>
                            <h4>Creation Begins</h4>
                            <p>Review digital sketches and concepts. Watch the canvas adapt as glowing pigments are laid.</p>
                        </div>
                        <div class="step-card glass-card">
                            <div class="step-icon-circle">4</div>
                            <h4>Delivered to You</h4>
                            <p>Fully insured courier transport with dynamic trackers and certificate of authenticity.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        calculateOnDemandPrice();
    }

    // 6. ARTIST VIDEOS PAGE
    renderVideos() {
        const viewport = document.getElementById("app-viewport");
        
        let videoGridHtml = "";
        ARTIST_VIDEOS.forEach(vid => {
            videoGridHtml += `
            <div class="video-detail-card glass-card page-section" onclick="openVideoPlayer('${vid.youtubeId}')">
                <div class="video-thumbnail-container">
                    <span class="artist-specialty-badge">${vid.specialty}</span>
                    <img src="${vid.thumbnail}" alt="${vid.artist}">
                    <div class="video-play-overlay">
                        <div class="play-btn-circle">
                            <i data-lucide="play" fill="currentColor"></i>
                        </div>
                    </div>
                </div>
                <div class="video-body-info">
                    <h3>${vid.artist}</h3>
                    <p class="artist-sub">Curated Studio Specialist</p>
                    <p class="artist-bio">${vid.bio}</p>
                </div>
            </div>
            `;
        });

        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>Artist Workspaces</h2>
                    <p>Go inside the private design environments of elite canvas painters, neon sculptors, and digital creators.</p>
                </div>
                <div class="videos-grid">
                    ${videoGridHtml}
                </div>
            </div>
        `;
    }

    // 7. ABOUT FOUNDER PAGE
    renderFounder() {
        const viewport = document.getElementById("app-viewport");
        viewport.innerHTML = `
            <div class="founder-container page-section">
                <div class="founder-visuals">
                    <div class="founder-glow-backing"></div>
                    <div class="founder-img-wrapper">
                        <img src="assets/founder.png" alt="Abhishek Sharma - Founder">
                    </div>
                </div>
                <div class="founder-info">
                    <h2>Abhishek Sharma</h2>
                    <p class="founder-title">Founder & Creative Director — Art Drop</p>
                    
                    <p class="founder-vision">
                        "Art Drop was born from a simple belief — that extraordinary art should be accessible to everyone. We connect the world's most talented artists with people who truly appreciate beauty."
                    </p>
                    
                    <h3 class="timeline-title">Gallery Milestones</h3>
                    <div class="founder-timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">2024</div>
                            <div class="timeline-desc">Founded Art Drop in New Delhi, establishing a curated gateway connecting neon sculptors and digital abstract creators directly to collectors.</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2025 (Q1)</div>
                            <div class="timeline-desc">First 100 senior studio artists onboarded, validating credentials and bringing certified, custom neon commissions live online.</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2025 (Q4)</div>
                            <div class="timeline-desc">Celebrated serving over 10,000 happy collectors across Europe, America, and Asia with 100% insured delivery.</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2026</div>
                            <div class="timeline-desc">Global Expansion initiative. Launched high-end physical showrooms in Tokyo and New York, integrated with virtual reality artwork catalogs.</div>
                        </div>
                    </div>

                    <div class="founder-socials">
                        <a href="https://instagram.com" class="founder-social-btn" target="_blank" rel="noopener noreferrer"><i data-lucide="instagram"></i></a>
                        <a href="https://linkedin.com" class="founder-social-btn" target="_blank" rel="noopener noreferrer"><i data-lucide="linkedin"></i></a>
                        <a href="https://twitter.com" class="founder-social-btn" target="_blank" rel="noopener noreferrer"><i data-lucide="twitter"></i></a>
                    </div>
                </div>
            </div>
        `;
    }

    // 8. CART PAGE
    renderCart() {
        const viewport = document.getElementById("app-viewport");
        
        if (State.cart.length === 0) {
            viewport.innerHTML = `
                <div class="page-section empty-cart-state glass-card">
                    <i data-lucide="shopping-bag" style="width: 72px; height: 72px; color: var(--hot-pink); margin-bottom: 24px;"></i>
                    <h2>Your Art Basket is Empty</h2>
                    <p style="max-width: 400px; margin: 0 auto 30px auto; color: var(--text-muted);">Discover rare drops and exclusive discounts on paintings, digital designs, and glowing sculptures.</p>
                    <a href="#shop" class="btn btn-primary">Browse Drops</a>
                </div>
            `;
            return;
        }

        let cartItemsHtml = "";
        let subtotal = 0;

        State.cart.forEach(item => {
            const artwork = ARTWORKS.find(art => art.id === item.artworkId);
            if (artwork) {
                const totalItemPrice = artwork.price * item.quantity;
                subtotal += totalItemPrice;
                
                cartItemsHtml += `
                <div class="cart-item glass-card">
                    <img src="${artwork.image}" alt="${artwork.title}" class="cart-item-img" onclick="openQuickPreview('${artwork.id}')" style="cursor: pointer;">
                    <div class="cart-item-details">
                        <span class="artwork-category" style="font-size: 10px;">${artwork.category}</span>
                        <h3 onclick="openQuickPreview('${artwork.id}')" style="cursor: pointer;">${artwork.title}</h3>
                        <p>Artist: ${artwork.artist}</p>
                    </div>
                    <div class="quantity-selector">
                        <button class="qty-btn" onclick="updateCartQty('${artwork.id}', -1)"><i data-lucide="minus" size="14"></i></button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQty('${artwork.id}', 1)"><i data-lucide="plus" size="14"></i></button>
                    </div>
                    <div class="cart-item-price">$${totalItemPrice}</div>
                    <button class="btn-remove-item" onclick="removeFromCart('${artwork.id}')"><i data-lucide="trash-2"></i></button>
                </div>
                `;
            }
        });

        // 10% Discount applied automatically
        const discount = Math.round(subtotal * 0.10);
        const finalTotal = subtotal - discount;

        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>Checkout Gallery</h2>
                    <p>Review items in your collection bag. Confirm quantity configurations and secure orders.</p>
                </div>
                
                <div class="cart-layout">
                    <!-- Items Column -->
                    <div class="cart-items-section">
                        ${cartItemsHtml}
                    </div>

                    <!-- Summary Widget -->
                    <div class="summary-widget glass-card">
                        <h3>Collector Order Summary</h3>
                        <div class="summary-row">
                            <span>Subtotal:</span>
                            <span>$${subtotal}</span>
                        </div>
                        <div class="summary-row discount-row">
                            <span>Collector Discount (10%):</span>
                            <span>-$${discount}</span>
                        </div>
                        <div class="summary-row">
                            <span>Packaging & Delivery:</span>
                            <span class="glow-text-blue">FREE INSURED</span>
                        </div>
                        <div class="summary-total-row">
                            <h4>Total Cost</h4>
                            <div class="summary-total-price glow-text-pink">$${finalTotal}</div>
                        </div>
                        
                        <div class="payment-methods" style="margin-bottom: 20px;">
                            <h4 style="margin-bottom: 10px; font-size: 14px; color: var(--text-muted);">Select Payment Method:</h4>
                            <div style="display: flex; gap: 10px;">
                                <label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer;">
                                    <input type="radio" name="payment_method" value="card" checked>
                                    <i data-lucide="credit-card" size="18"></i> Card
                                </label>
                                <label style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer;">
                                    <input type="radio" name="payment_method" value="upi">
                                    <i data-lucide="smartphone" size="18"></i> UPI
                                </label>
                            </div>
                        </div>

                        <button class="btn btn-pink" style="width: 100%; font-size: 18px;" onclick="simulateCheckout()">Complete Order Securely <i data-lucide="lock"></i></button>
                        <p style="color: var(--text-muted); font-size: 11px; text-align: center; margin-top: 16px;">
                            🔒 Secured with SSL 256-bit Neon Gateway. All drop products carry a 30-day authentic return guarantee.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // 9. REVIEWS PAGE
    renderReviews() {
        const viewport = document.getElementById("app-viewport");
        
        // Dynamic stats calculation
        const totalReviews = State.reviews.length;
        const avgRating = (State.reviews.reduce((sum, rev) => sum + rev.rating, 0) / totalReviews).toFixed(1);
        
        // Stars distribution count
        const starsDist = [0, 0, 0, 0, 0]; // 1 to 5 stars
        State.reviews.forEach(rev => {
            const index = Math.min(Math.max(rev.rating - 1, 0), 4);
            starsDist[index]++;
        });

        let distributionBarsHtml = "";
        for (let i = 5; i >= 1; i--) {
            const count = starsDist[i - 1];
            const pct = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
            distributionBarsHtml += `
            <div class="rating-bar-row" onclick="filterReviewsListByRating(${i})">
                <span class="bar-row-label">${i} Star</span>
                <div class="bar-track">
                    <div class="bar-fill" style="width: ${pct}%"></div>
                </div>
                <span class="bar-row-count">${count}</span>
            </div>
            `;
        }

        viewport.innerHTML = `
            <div class="page-section">
                <div class="section-header">
                    <h2>Ratings Board</h2>
                    <p>Authentic remarks left by collectors who have purchased artworks from our drop inventory.</p>
                </div>
                
                <div class="reviews-dashboard">
                    <!-- aggregate panel -->
                    <aside style="display: flex; flex-direction: column; gap: 30px;">
                        <div class="rating-aggregate-card glass-card">
                            <h3>Average Rating</h3>
                            <div class="aggregate-score-large glow-text-yellow">${avgRating}</div>
                            <div class="rating-stars" style="justify-content: center; margin-bottom: 8px;">
                                ${renderStars(Math.round(parseFloat(avgRating)))}
                            </div>
                            <p style="color: var(--text-muted); font-size: 14px;">Based on ${totalReviews} Verified Orders</p>
                            
                            <div class="rating-bar-chart">
                                ${distributionBarsHtml}
                            </div>
                        </div>

                        <!-- Add Review Portal -->
                        <div class="review-form-box glass-card">
                            <h3>Share Your Sentiment</h3>
                            <form onsubmit="handleReviewFormSubmit(event)">
                                <div class="form-group">
                                    <label>Select Rating Stars</label>
                                    <div class="star-rating-picker" id="star-picker">
                                        <i data-lucide="star" class="star-pick" data-val="1"></i>
                                        <i data-lucide="star" class="star-pick" data-val="2"></i>
                                        <i data-lucide="star" class="star-pick" data-val="3"></i>
                                        <i data-lucide="star" class="star-pick" data-val="4"></i>
                                        <i data-lucide="star" class="star-pick" data-val="5"></i>
                                    </div>
                                    <input type="hidden" id="review-rating" value="5" required>
                                </div>
                                <div class="form-group">
                                    <label for="rev-name">Your Nickname</label>
                                    <input type="text" id="rev-name" class="form-control" placeholder="Jane Doe" required>
                                </div>
                                <div class="form-group">
                                    <label for="rev-title">Subtitle / Profession</label>
                                    <input type="text" id="rev-title" class="form-control" placeholder="Art Collector" required>
                                </div>
                                <div class="form-group">
                                    <label for="rev-text">Detailed Review Text</label>
                                    <textarea id="rev-text" class="form-control" placeholder="Share your experience with the frame texture, shipping or color shine..." required></textarea>
                                </div>
                                <button type="submit" class="btn btn-pink btn-small" style="width: 100%;">Publish Sentiment</button>
                            </form>
                        </div>
                    </aside>

                    <!-- reviews listings -->
                    <section class="reviews-list-section">
                        <div class="reviews-filter-header">
                            <h3 id="reviews-board-title">All Sentiment Entries</h3>
                            <div id="reviews-filter-clear-badge" class="active-filter-badge hidden" onclick="resetReviewsFilter()">
                                Filter: <span id="active-rating-filter-num">5</span> Stars <i data-lucide="x" size="14"></i>
                            </div>
                        </div>
                        <div id="reviews-board-list" class="reviews-summary-grid" style="grid-template-columns: 1fr;">
                            <!-- Injected dynamically -->
                        </div>
                    </section>
                </div>
            </div>
        `;
        
        setupStarPicker();
        renderReviewsList();
    }
}

// --- REVIEW HELPER FUNCTIONS ---
function setupStarPicker() {
    const starPicker = document.getElementById("star-picker");
    if (!starPicker) return;
    
    const stars = starPicker.querySelectorAll(".star-pick");
    const input = document.getElementById("review-rating");
    
    // Default 5 stars
    stars.forEach(st => {
        if (parseInt(st.getAttribute("data-val")) <= 5) {
            st.classList.add("selected");
            st.setAttribute("fill", "currentColor");
        }
    });

    stars.forEach(star => {
        star.addEventListener("click", () => {
            const val = parseInt(star.getAttribute("data-val"));
            input.value = val;
            stars.forEach(st => {
                const sVal = parseInt(st.getAttribute("data-val"));
                if (sVal <= val) {
                    st.classList.add("selected");
                    st.setAttribute("fill", "currentColor");
                } else {
                    st.classList.remove("selected");
                    st.removeAttribute("fill");
                }
            });
        });
    });
}

let activeRatingFilter = null;

function filterReviewsListByRating(rating) {
    activeRatingFilter = rating;
    const badge = document.getElementById("reviews-filter-clear-badge");
    const valText = document.getElementById("active-rating-filter-num");
    if (badge && valText) {
        valText.textContent = rating;
        badge.classList.remove("hidden");
    }
    renderReviewsList();
    lucide.createIcons();
}

function resetReviewsFilter() {
    activeRatingFilter = null;
    const badge = document.getElementById("reviews-filter-clear-badge");
    if (badge) badge.classList.add("hidden");
    renderReviewsList();
    lucide.createIcons();
}

function renderReviewsList() {
    const board = document.getElementById("reviews-board-list");
    if (!board) return;

    let filtered = State.reviews;
    if (activeRatingFilter !== null) {
        filtered = State.reviews.filter(rev => rev.rating === activeRatingFilter);
    }

    if (filtered.length === 0) {
        board.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 40px;">
            <p style="color: var(--text-muted);">No reviews found with a rating of ${activeRatingFilter} stars.</p>
        </div>
        `;
        return;
    }

    let html = "";
    filtered.forEach(rev => {
        html += `
        <div class="review-card glass-card page-section" style="margin-bottom: 0;">
            <div class="review-header">
                <img src="${rev.avatar}" alt="${rev.name}" class="reviewer-avatar">
                <div>
                    <h4 class="reviewer-name">${rev.name}</h4>
                    <span class="reviewer-title">${rev.title}</span>
                </div>
            </div>
            <div class="rating-stars">
                ${renderStars(rev.rating)}
                <span style="font-size: 11px; margin-left: auto; color: var(--text-muted);">${rev.date}</span>
            </div>
            <p class="review-text">"${rev.text}"</p>
        </div>
        `;
    });
    board.innerHTML = html;
}

function handleReviewFormSubmit(event) {
    event.preventDefault();
    const rating = parseInt(document.getElementById("review-rating").value);
    const name = document.getElementById("rev-name").value;
    const title = document.getElementById("rev-title").value;
    const text = document.getElementById("rev-text").value;

    const newRev = {
        id: "rev-" + Date.now(),
        name,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80", // Default nice avatar
        title,
        rating,
        text,
        date: new Date().toISOString().split("T")[0]
    };

    State.addReview(newRev);
    
    // Clear and redraw
    document.getElementById("rev-name").value = "";
    document.getElementById("rev-title").value = "";
    document.getElementById("rev-text").value = "";
    
    // If on reviews page, refresh the aggregate dashboard
    const routerInstance = window.appRouter;
    if (routerInstance) routerInstance.renderReviews();
}

// --- ON DEMAND FORM PRICING LOGIC ---
function calculateOnDemandPrice() {
    const sizeSelect = document.getElementById("od-size");
    const mediumSelect = document.getElementById("od-medium");
    const complexitySelect = document.getElementById("od-complexity");
    
    if (!sizeSelect || !mediumSelect || !complexitySelect) return;
    
    const sizeVal = sizeSelect.value;
    const mediumVal = mediumSelect.value;
    const complexityVal = complexitySelect.value;
    
    // Pricing configurations
    let sizeCost = 300;
    if (sizeVal === "small") sizeCost = 150;
    if (sizeVal === "medium") sizeCost = 300;
    if (sizeVal === "large") sizeCost = 600;
    if (sizeVal === "mural") sizeCost = 1200;
    
    let mediumCost = 250;
    if (mediumVal === "digital") mediumCost = 100;
    if (mediumVal === "canvas") mediumCost = 250;
    if (mediumVal === "sculpture") mediumCost = 500;
    
    let multiplier = 1.4;
    if (complexityVal === "simple") multiplier = 1.0;
    if (complexityVal === "detailed") multiplier = 1.4;
    if (complexityVal === "complex") multiplier = 2.0;
    
    const calculatedTotal = Math.round((sizeCost + mediumCost) * multiplier);
    
    // Update labels in widget
    document.getElementById("estimate-base-size").textContent = `$${sizeCost}`;
    document.getElementById("estimate-base-medium").textContent = `$${mediumCost}`;
    document.getElementById("estimate-complexity").textContent = `x${multiplier.toFixed(1)}`;
    document.getElementById("estimate-total-price").textContent = `$${calculatedTotal}`;
}

async function handleOnDemandSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("od-name").value;
    const email = document.getElementById("od-email").value;
    const desc = document.getElementById("od-desc").value;
    const budget = document.getElementById("od-budget").value;
    
    const sizeText = document.getElementById("od-size").options[document.getElementById("od-size").selectedIndex].text;
    const mediumText = document.getElementById("od-medium").options[document.getElementById("od-medium").selectedIndex].text;
    const totalPrice = document.getElementById("estimate-total-price").textContent;
    
    // Create random order ID
    const orderId = "OD-" + Math.floor(100000 + Math.random() * 900000);
    
    const targetContainer = document.getElementById("ondemand-main-container");
    
    targetContainer.innerHTML = `
        <div class="success-card glass-card page-section">
            <div class="success-icon">
                <i data-lucide="check-circle" size="48"></i>
            </div>
            <h2 class="glow-text-blue">Commission Confirmed!</h2>
            <p>Thank you, <strong>${name}</strong>. Your custom request has been successfully registered with Art Drop.</p>
            <div class="order-id-box">
                Order ID: <span class="glow-text-pink">${orderId}</span>
            </div>
            
            <div style="text-align: left; margin-bottom: 30px; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                <p style="margin-bottom: 8px;"><strong>Configuration Summary:</strong></p>
                <ul style="list-style-type: none; padding-left: 0; color: var(--text-muted);">
                    <li style="margin-bottom: 4px;">• Size: ${sizeText}</li>
                    <li style="margin-bottom: 4px;">• Medium: ${mediumText}</li>
                    <li style="margin-bottom: 4px;">• Quoted Estimate: <span class="glow-text-blue">${totalPrice}</span></li>
                    <li style="margin-bottom: 4px;">• Client Budget Limit: $${budget}</li>
                    <li style="margin-bottom: 4px;">• Delivery Timeline: <strong>7–21 business days</strong></li>
                </ul>
            </div>
            
            <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 30px;">
                An email receipt with invoice details has been sent to <strong>${email}</strong>. Our designated master creator will contact you directly to approve sketches.
            </p>
            
            <a href="#shop" class="btn btn-primary">Return to Collection</a>
        </div>
    `;

    try {
        await fetch(`${State.backendUrl}/commissions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                orderId,
                name,
                email,
                desc,
                budget,
                size: sizeText,
                medium: mediumText,
                totalPrice
            })
        });
    } catch(err) {
        console.error("Error saving commission:", err);
    }
    
    lucide.createIcons();
    showToast("Commission Request Submitted!", "success");
}

// --- SHOP DYNAMIC FILTERS ---
function updateShopFilters(type, val) {
    if (type === "search") State.activeFilters.search = val.toLowerCase();
    if (type === "maxPrice") {
        State.activeFilters.maxPrice = parseInt(val);
        const label = document.getElementById("price-limit-label");
        if (label) label.textContent = `$${val}`;
    }
    applyShopFiltering();
}

function updateShopFilterCheckbox(group, key, checked) {
    const list = State.activeFilters[group];
    if (checked) {
        list.push(key);
    } else {
        const idx = list.indexOf(key);
        if (idx > -1) list.splice(idx, 1);
    }
    applyShopFiltering();
}

function clearShopFilters() {
    State.activeFilters.search = "";
    State.activeFilters.category = [];
    State.activeFilters.style = [];
    State.activeFilters.maxPrice = 3000;
    
    // Reset DOM controls
    const search = document.getElementById("shop-search");
    if (search) search.value = "";
    const slider = document.getElementById("price-slider");
    if (slider) slider.value = 3000;
    const priceLabel = document.getElementById("price-limit-label");
    if (priceLabel) priceLabel.textContent = "$3000";
    
    document.querySelectorAll(".filter-option input[type='checkbox']").forEach(chk => chk.checked = false);
    
    applyShopFiltering();
}

function applyShopFiltering() {
    const grid = document.getElementById("shop-artworks-grid");
    if (!grid) return;

    let filtered = ARTWORKS.filter(art => {
        // Search filter
        const matchSearch = art.title.toLowerCase().includes(State.activeFilters.search) || 
                            art.artist.toLowerCase().includes(State.activeFilters.search);
        // Category filter
        const matchCategory = State.activeFilters.category.length === 0 || 
                              State.activeFilters.category.includes(art.category);
        // Style filter
        const matchStyle = State.activeFilters.style.length === 0 || 
                           State.activeFilters.style.includes(art.style);
        // Price filter
        const matchPrice = art.price <= State.activeFilters.maxPrice;

        return matchSearch && matchCategory && matchStyle && matchPrice;
    });

    // Sorting
    const sortVal = document.getElementById("shop-sort") ? document.getElementById("shop-sort").value : "default";
    if (sortVal === "price-low") {
        filtered.sort((a,b) => a.price - b.price);
    } else if (sortVal === "price-high") {
        filtered.sort((a,b) => b.price - a.price);
    } else if (sortVal === "rating") {
        filtered.sort((a,b) => b.rating - a.rating);
    }

    // Render count
    const countLabel = document.getElementById("shop-count-label");
    if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${ARTWORKS.length} artworks`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <i data-lucide="compass" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 16px;"></i>
            <h3>No Artworks Match Your Filters</h3>
            <p style="color: var(--text-muted); margin-top: 8px;">Try broadening your budget slider or clearing specific categories.</p>
        </div>
        `;
        lucide.createIcons();
        return;
    }

    let html = "";
    filtered.forEach(art => {
        html += renderArtworkCard(art);
    });
    grid.innerHTML = html;
    
    lucide.createIcons();
}

// --- DYNAMIC CARD GENERATOR ---
function renderArtworkCard(art) {
    const isWishlisted = State.wishlist.includes(art.id);
    return `
    <div class="artwork-card glass-card">
        <div class="artwork-image-container">
            <span class="discount-badge">SAVE ${Math.round((1 - art.price/art.originalPrice)*100)}%</span>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${art.id}" onclick="State.toggleWishlist('${art.id}')" aria-label="Add to Wishlist">
                <i data-lucide="heart" size="18"></i>
            </button>
            <img src="${art.image}" alt="${art.title}">
            <div class="artwork-actions-overlay">
                <button class="btn btn-primary btn-small" onclick="openQuickPreview('${art.id}')">Quick View <i data-lucide="eye"></i></button>
            </div>
        </div>
        <div class="artwork-info">
            <span class="artwork-category">${art.category}</span>
            <h3 class="artwork-title" onclick="openQuickPreview('${art.id}')" style="cursor: pointer;">${art.title}</h3>
            <p class="artwork-artist">by ${art.artist}</p>
            
            <div class="rating-stars">
                ${renderStars(art.rating)}
                <span>(${art.reviews})</span>
            </div>
            
            <div class="artwork-price-row">
                <div class="price-container">
                    <span class="original-price">$${art.originalPrice}</span>
                    <span class="discounted-price">$${art.price}</span>
                </div>
                <button class="btn-add-cart" onclick="State.addToCart('${art.id}')" aria-label="Add to Cart">
                    <i data-lucide="shopping-cart" size="18"></i>
                </button>
            </div>
        </div>
    </div>
    `;
}

// --- STAR RATING GRAPHIC GENERATOR ---
function renderStars(rating) {
    let html = "";
    const floor = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= floor) {
            html += `<i data-lucide="star" fill="currentColor"></i>`;
        } else if (i === floor + 1 && hasHalf) {
            html += `<i data-lucide="star-half" fill="currentColor"></i>`;
        } else {
            html += `<i data-lucide="star"></i>`;
        }
    }
    return html;
}

// --- BUY NOW ACTIONS ---
function buyNow(artworkId) {
    State.addToCart(artworkId, 1);
    window.location.hash = "#/cart";
}

// --- CART INTERACTIVITY WRAPPERS ---
function updateCartQty(artworkId, delta) {
    State.updateQuantity(artworkId, delta);
    window.appRouter.renderCart();
    lucide.createIcons();
}

function removeFromCart(artworkId) {
    State.removeFromCart(artworkId);
    window.appRouter.renderCart();
    lucide.createIcons();
}

function simulateCheckout() {
    showToast("Processing payment gateway...", "success");
    setTimeout(() => {
        State.clearCart();
        const viewport = document.getElementById("app-viewport");
        viewport.innerHTML = `
            <div class="page-section success-card glass-card" style="border-color: var(--hot-pink); box-shadow: var(--glow-pink);">
                <div class="success-icon" style="background: rgba(255, 0, 127, 0.1); color: var(--hot-pink);">
                    <i data-lucide="heart" size="48" fill="currentColor"></i>
                </div>
                <h2 class="glow-text-pink">Collection Confirmed!</h2>
                <p>Thank you for purchasing rare pieces with Art Drop. Your payment has cleared successfully.</p>
                <div class="order-id-box" style="border-color: var(--hot-pink);">
                    Receipt Code: <span class="glow-text-blue">PAY-${Math.floor(100000 + Math.random()*900000)}</span>
                </div>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 24px;">
                    We are packaging your frames with museum-grade bubble wrap layers. Insured tracking emails will land in your box within 12 hours.
                </p>
                <a href="#shop" class="btn btn-primary">Discover More Drops</a>
            </div>
        `;
        lucide.createIcons();
        showToast("Order Placed Successfully!", "success");
    }, 1500);
}

// --- GLOBAL TOAST SYSTEM ---
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type === "pink" ? "toast-pink" : ""}`;
    
    const icon = type === "pink" ? "info" : "check-circle";
    toast.innerHTML = `
        <i data-lucide="${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    lucide.createIcons();

    // Slide out after 3.5 seconds
    setTimeout(() => {
        toast.classList.add("toast-slide-out");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 3500);
}

// --- NEWSLETTER SIGNUP ---
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    if (emailInput) {
        showToast(`Welcome! Coupon details sent to ${emailInput.value}`, "success");
        emailInput.value = "";
    }
}

// --- QUICK PREVIEW MODAL ---
function openQuickPreview(artworkId) {
    const art = ARTWORKS.find(a => a.id === artworkId);
    if (!art) return;

    const modalBody = document.getElementById("preview-modal-body");
    const modal = document.getElementById("quick-preview-modal");
    
    modalBody.innerHTML = `
        <div class="quick-view-layout">
            <div class="quick-view-img-container">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="quick-view-details">
                <div class="quick-view-header">
                    <span class="artwork-category">${art.category}</span>
                    <h2>${art.title}</h2>
                    <p class="artist-sub">Artist: <strong>${art.artist}</strong> | Style: <strong>${art.style}</strong></p>
                    <div class="rating-stars" style="margin-bottom: 12px;">
                        ${renderStars(art.rating)}
                        <span>(${art.reviews} Verified Reviews)</span>
                    </div>
                </div>
                
                <p class="quick-view-desc">${art.description}</p>
                
                <ul class="quick-view-spec-list">
                    ${art.specs.map(sp => `<li>• ${sp}</li>`).join("")}
                </ul>
                
                <div class="artwork-price-row" style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                    <div class="price-container">
                        <span class="original-price">$${art.originalPrice}</span>
                        <span class="discounted-price" style="font-size: 28px;">$${art.price}</span>
                    </div>
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-secondary" onclick="State.toggleWishlist('${art.id}'); closeQuickPreview();"><i data-lucide="heart"></i></button>
                        <button class="btn btn-primary" onclick="State.addToCart('${art.id}'); closeQuickPreview();">Add to Bag <i data-lucide="shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove("hidden");
    lucide.createIcons();
}

function closeQuickPreview() {
    document.getElementById("quick-preview-modal").classList.add("hidden");
}

// --- VIDEO PLAYER MODAL ---
function openVideoPlayer(youtubeId) {
    const iframe = document.getElementById("modal-video-iframe");
    const modal = document.getElementById("video-player-modal");
    
    // Standard embed without autoplay to maximize browser/region compatibility
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
    modal.classList.remove("hidden");
}

function closeVideoPlayer() {
    const modal = document.getElementById("video-player-modal");
    const iframe = document.getElementById("modal-video-iframe");
    
    modal.classList.add("hidden");
    iframe.src = ""; // Stop video playback
}

// --- BACKGROUND CANVAS PARTICLE ANIMATION ---
function initCanvasParticles() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    
    // Set size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle construction
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            // Colors from neon palette
            const colors = ["#8a2be2", "#00d9ff", "#ff007f", "#ffb700"];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce boundary checks
            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.shadowBlur = 6;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }
    }

    // Populating list
    function populateParticles() {
        particlesArray = [];
        const quantity = Math.floor((canvas.width * canvas.height) / 18000); // density scale
        const limit = Math.min(Math.max(quantity, 30), 100);
        for (let i = 0; i < limit; i++) {
            particlesArray.push(new Particle());
        }
    }
    populateParticles();
    window.addEventListener("resize", populateParticles);

    // Animating
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particlesArray.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections for closeness
        ctx.globalAlpha = 0.05;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const dist = Math.hypot(particlesArray[a].x - particlesArray[b].x, particlesArray[a].y - particlesArray[b].y);
                if (dist < 150) {
                    ctx.strokeStyle = particlesArray[a].color;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1.0; // reset

        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

// --- GLOBAL EVENT LISTENERS & BOOTSTRAP ---
document.addEventListener("DOMContentLoaded", async () => {
    // Wait for state to init from backend
    await State.init();

    // Router Boot
    window.appRouter = new Router();
    
    // Background Canvas Boot
    initCanvasParticles();
    
    // Initial Cart update
    State.updateCartBadge();

    // Mobile nav trigger toggler
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("main-nav-links");
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Modal dismiss hooks
    const closePrev = document.getElementById("close-preview-btn");
    const previewBackdrop = document.getElementById("quick-preview-modal");
    if (closePrev && previewBackdrop) {
        closePrev.addEventListener("click", closeQuickPreview);
        previewBackdrop.addEventListener("click", (e) => {
            if (e.target === previewBackdrop) closeQuickPreview();
        });
    }

    const closeVid = document.getElementById("close-video-btn");
    const videoBackdrop = document.getElementById("video-player-modal");
    if (closeVid && videoBackdrop) {
        closeVid.addEventListener("click", closeVideoPlayer);
        videoBackdrop.addEventListener("click", (e) => {
            if (e.target === videoBackdrop) closeVideoPlayer();
        });
    }

    // Escape key listener for modals
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeQuickPreview();
            closeVideoPlayer();
        }
    });
});
