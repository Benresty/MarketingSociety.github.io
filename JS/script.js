document.addEventListener('DOMContentLoaded', () => {
    /* ========== 导航栏 & 语言切换相关 ========== */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const langToggleBtn = document.getElementById('langToggleBtn');

    // 点击汉堡菜单，切换导航栏在移动端的显示
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 定义中英文翻译内容
    const translations = {
        en: {
            // ----- 导航 & Logo -----
            logoText: "Newcastle University Marketing Society",
            navAbout: "About",
            navActivities: "Activities",
            navJoinUs: "Join Us",
            navContact: "Contact",

            // ----- Hero 区域 -----
            heroTitle: "Welcome to the Marketing Society",
            heroDesc: "Explore, learn, and grow with us.",
            heroCtaBtn: "Learn More",

            // ----- About Us -----
            aboutTitle: "About Us",
            aboutDesc: "The Marketing Society is dedicated to fostering innovation, collaboration, and creativity in the field of marketing. Our mission is to connect students, professionals, and enthusiasts through enriching activities and experiences.",

            // ----- Activities -----
            activitiesTitle: "What We Do",
            activity1Title: "Workshops",
            // 这里注意：你的 HTML 中的活动1描述可能有段长文本
            // 如果想让多语言也能切换，请把原英文文本粘过来
            // 先示例写简短，也可粘贴长文
            activity1Desc: "Marketing society holds regular academic seminar events, ...",
            activity2Title: "Networking Events",
            activity2Desc: "Meet industry experts and build valuable connections.",
            activity3Title: "Competitions",
            activity3Desc: "Showcase your creativity in exciting challenges.",

            // ----- Join Us (第一块) -----
            joinTitle: "Get started and Join Us",
            joinDesc: "Sign up to receive updates and participate in our events. This link will directly bring you to our official NUSU page.",
            joinCtaBtn: "Sign Up",

            // ----- Membership information (第二块) -----
            membershipTitle: "Membership information submission",
            membershipDesc: "If you have already made your payment, we kindly ask that you complete this questionnaire to facilitate a smoother integration into the community.",
            membershipCtaBtn: "Submit here",

            // ----- Footer -----
            contactTitle: "Contact Us",
            contactEmail: "Email: NUBS.MarketingSociety@outlook.com",
            contactPhone: "Official website page: https://nusu.co.uk/activities/view-society/374",
            contactFollow: "Follow us on social media:",
            contactInstagram: "Instagram"
        },
        zh: {
            // ----- 导航 & Logo -----
            logoText: "纽卡斯尔大学市场营销协会",
            navAbout: "关于",
            navActivities: "活动",
            navJoinUs: "加入我们",
            navContact: "联系",

            // ----- Hero 区域 -----
            heroTitle: "欢迎来到市场营销协会",
            heroDesc: "与我们一起探索、学习并成长。",
            heroCtaBtn: "了解更多",

            // ----- About Us -----
            aboutTitle: "关于我们",
            aboutDesc: "市场营销协会致力于在营销领域促进创新、协作和创造力。我们的使命是通过丰富多样的活动与体验，将学生、专业人士和爱好者紧密联系在一起。",

            // ----- Activities -----
            activitiesTitle: "我们在做什么",
            activity1Title: "研讨会",
            activity1Desc: "市场营销协会定期举办学术研讨活动，讨论特定市场的表现及其营销方式。",
            activity2Title: "社交活动",
            activity2Desc: "与行业专家会面，建立宝贵的人脉。",
            activity3Title: "竞赛",
            activity3Desc: "在精彩的挑战中展示你的创意。",

            // ----- Join Us (第一块) -----
            joinTitle: "开始并加入我们",
            joinDesc: "注册即可收到更新并参与我们的活动，此链接将直接带您前往官方 NUSU 页面。",
            joinCtaBtn: "立即加入",

            // ----- Membership information (第二块) -----
            membershipTitle: "会员信息提交",
            membershipDesc: "如果您已经完成付款，请填写此调查问卷，以便更好地融入社区。",
            membershipCtaBtn: "提交",

            // ----- Footer -----
            contactTitle: "联系我们",
            contactEmail: "邮箱: NUBS.MarketingSociety@outlook.com",
            contactPhone: "官方网站: https://nusu.co.uk/activities/view-society/374",
            contactFollow: "关注我们的社交媒体：",
            contactInstagram: "Instagram",
            contactXiaohongshu: "小红书"
        }
    };

    // 默认语言
    let currentLang = "en";

    function toggleLanguage() {
        // 切换语言
        currentLang = (currentLang === "en") ? "zh" : "en";

        // 遍历页面上所有含 data-key 的元素
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            // 如果在 translations[currentLang] 里存在该 key，就替换文本
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });

        // 切换按钮文字
        if (currentLang === "en") {
            langToggleBtn.textContent = "中 / EN";
        } else {
            langToggleBtn.textContent = "EN / 中";
        }
    }

    // 点击按钮时切换
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }

    /* ========== 图集切换功能 ========== */
    document.querySelectorAll('.image-gallery').forEach((gallery) => {
        let currentIndex = 0;
        const images = gallery.querySelectorAll('.gallery-images img');
        const totalImages = images.length;
        const galleryImages = gallery.querySelector('.gallery-images');

        function updateGallery() {
            galleryImages.style.transform = `translateX(-${currentIndex * 100}%)`;
            galleryImages.style.transition = 'transform 0.3s ease-in-out';
        }

        gallery.querySelector('.prev')?.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateGallery();
        });

        gallery.querySelector('.next')?.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateGallery();
        });
    });

    /* ========== 视频预加载与 Preloader ========== */
    const video = document.getElementById('hero-video');
    const preloader = document.getElementById('preloader');

    if (video) {
        // 视频可以播放时，隐藏 preloader
        video.addEventListener('canplaythrough', () => {
            if (preloader) {
                preloader.style.display = 'none';
            }
        });
    }
});
