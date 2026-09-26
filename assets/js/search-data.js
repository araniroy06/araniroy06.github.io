// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected and full publication list in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-purdue-university-as-a-ph-d-student-in-electrical-and-computer-engineering-working-with-prof-kaushik-roy-in-the-center-for-brain-inspired-computing",
          title: 'Joined Purdue University as a Ph.D. student in Electrical and Computer Engineering, working...',
          description: "",
          section: "News",},{id: "news-cure-concept-unlearning-via-orthogonal-representation-editing-in-diffusion-models-was-accepted-to-neurips-2025-as-a-spotlight",
          title: 'CURE: Concept Unlearning via Orthogonal Representation Editing in Diffusion Models was accepted to...',
          description: "",
          section: "News",},{id: "news-our-work-slimdiff-training-free-activation-guided-hands-free-slimming-of-diffusion-models-is-now-available-on-arxiv",
          title: 'Our work SlimDiff: Training-Free, Activation-Guided Hands-free Slimming of Diffusion Models is now available...',
          description: "",
          section: "News",},{id: "news-our-work-now-you-see-it-now-you-don-t-instant-concept-erasure-for-safe-text-to-image-and-video-generation-is-available-on-arxiv-and-appears-in-cvpr-2026-findings",
          title: 'Our work Now You See It, Now You Don’t: Instant Concept Erasure for...',
          description: "",
          section: "News",},{id: "news-absolutely-thrilled-to-share-that-our-paper-feedback-alignment-meets-low-rank-manifolds-a-structured-recipe-for-local-learning-was-presented-as-an-oral-at-wacv-2026-and-received-the-best-student-paper-award-algorithms-award",
          title: 'Absolutely thrilled to share that our paper Feedback Alignment Meets Low-Rank Manifolds: A...',
          description: "",
          section: "News",},{id: "news-a-huge-thank-you-to-purdue-university-for-awarding-me-the-bilsland-dissertation-fellowship-for-fall-2026",
          title: 'A huge thank you to Purdue University for awarding me the Bilsland Dissertation...',
          description: "",
          section: "News",},{id: "news-pleased-to-share-that-our-paper-heart-hyperspherical-embedding-alignment-via-kent-representation-traversal-in-diffusion-models-on-training-free-quick-fine-grained-subject-and-attribute-control-in-diffusion-models-was-accepted-to-neurips-2026",
          title: 'Pleased to share that our paper, HEART: Hyperspherical Embedding Alignment via Kent-Representation Traversal...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
