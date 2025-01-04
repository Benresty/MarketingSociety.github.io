// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const langToggleBtn = document.getElementById('langToggleBtn');
    
    // 点击汉堡菜单，切换导航栏在移动端的显示
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 定义中英文翻译内容
    const translations = {
        en: {
            logoText: "Marketing Society",
            navAbout: "About",
            navActivities: "Activities",
            navJoinUs: "Join Us",
            navContact: "Contact",

            heroTitle: "Welcome to the Marketing Society",
            heroDesc: "Explore, learn, and grow with us.",
            heroCtaBtn: "Learn More",

            aboutTitle: "About Us",
            aboutDesc: "The Marketing Society is dedicated to fostering innovation, collaboration, and creativity in the field of marketing. Our mission is to connect students, professionals, and enthusiasts through enriching activities and experiences.",

            activitiesTitle: "What We Do",
            activity1Title: "Workshops",
            activity1Desc: "Hands-on workshops to sharpen your marketing skills.",
            activity2Title: "Networking Events",
            activity2Desc: "Meet industry experts and build valuable connections.",
            activity3Title: "Competitions",
            activity3Desc: "Showcase your creativity in exciting challenges.",

            joinTitle: "Join Us",
            joinDesc: "Become a part of our vibrant community. Sign up to receive updates and participate in our events.",
            joinCtaBtn: "Sign Up",

            contactTitle: "Contact Us",
            contactEmail: "Email: marketing_society@example.com",
            contactPhone: "Phone: +123 456 7890",
            contactFollow: "Follow us on social media:",
            contactFacebook: "Facebook",
            contactTwitter: "Twitter",
            contactInstagram: "Instagram"
        },
        zh: {
            logoText: "市场营销协会",
            navAbout: "关于",
            navActivities: "活动",
            navJoinUs: "加入我们",
            navContact: "联系",

            heroTitle: "欢迎来到市场营销协会",
            heroDesc: "与我们一起探索、学习并成长。",
            heroCtaBtn: "了解更多",

            aboutTitle: "关于我们",
            aboutDesc: "市场营销协会致力于在营销领域促进创新、协作和创造力。我们的使命是通过丰富的活动与体验，将学生、专业人士和爱好者联系在一起。",

            activitiesTitle: "我们在做什么",
            activity1Title: "研讨会",
            activity1Desc: "动手实践的研讨会，帮你提升营销技能。",
            activity2Title: "社交活动",
            activity2Desc: "与行业专家会面，建立宝贵的人脉。",
            activity3Title: "竞赛",
            activity3Desc: "在精彩的挑战中展示你的创意。",

            joinTitle: "加入我们",
            joinDesc: "成为我们充满活力的社区一员。报名可接收最新消息并参与各种活动。",
            joinCtaBtn: "立即报名",

            contactTitle: "联系我们",
            contactEmail: "邮箱: marketing_society@example.com",
            contactPhone: "电话: +123 456 7890",
            contactFollow: "关注我们的社交媒体：",
            contactFacebook: "Facebook",
            contactTwitter: "Twitter",
            contactInstagram: "Instagram"
        }
    };

    // 当前语言，默认设为英文
    let currentLang = "en";

    // 切换语言函数
    function toggleLanguage() {
        // 如果当前是英文，则切到中文，否则切回英文
        currentLang = (currentLang === "en") ? "zh" : "en";
        
        // 遍历页面上所有带 data-key 的元素，更新其文本
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            // 如果有对应的翻译文本，就替换
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
        
        // 同时更新切换按钮本身的文字
        if (currentLang === "en") {
            langToggleBtn.textContent = "中 / EN";
        } else {
            langToggleBtn.textContent = "EN / 中";
        }
    }

    // 点击语言切换按钮时调用 toggleLanguage
    langToggleBtn.addEventListener('click', toggleLanguage);
});

// 图集切换功能
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const langToggleBtn = document.getElementById('langToggleBtn');

    // 点击汉堡菜单，切换导航栏在移动端的显示
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 定义中英文翻译内容（保留原来的翻译功能）
    const translations = { /* ... */ }; // 省略翻译部分，与你现有代码保持一致

    let currentLang = "en";
    function toggleLanguage() { /* ... */ } // 省略语言切换函数

    langToggleBtn.addEventListener('click', toggleLanguage);

    // 图集切换功能
    document.querySelectorAll('.image-gallery').forEach((gallery) => {
        let currentIndex = 0; // 当前图像索引
        const images = gallery.querySelectorAll('.gallery-images img');
        const totalImages = images.length;
        const galleryImages = gallery.querySelector('.gallery-images');

        // 更新显示的图片
        function updateGallery() {
            galleryImages.style.transform = `translateX(-${currentIndex * 100}%)`;
            galleryImages.style.transition = 'transform 0.3s ease-in-out';
        }

        // 添加按钮事件监听
        gallery.querySelector('.prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateGallery();
        });

        gallery.querySelector('.next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateGallery();
        });
    });
});


