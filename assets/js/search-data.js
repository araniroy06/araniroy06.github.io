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
            },},{id: "news-left-samsung-r-amp-amp-d-bengaluru-after-3-years-to-the-next-exciting-adventure-phd-purdue-university",
          title: 'Left Samsung R&amp;amp;amp;D, Bengaluru after 3 years. To the next exciting adventure, PhD,...',
          description: "",
          section: "News",},{id: "news-i-started-as-a-graduate-research-assistant-fellow-andrews-fellowship-at-purdue-university",
          title: 'I started as a Graduate Research Assistant/Fellow (Andrews Fellowship) at Purdue University!',
          description: "",
          section: "News",},{id: "news-our-paper-on-local-learning-rules-lls-local-learning-rule-for-deep-neural-networks-inspired-by-neural-activity-synchronization-was-presented-at-wacv-2025",
          title: 'Our paper on local learning rules, LLS: Local Learning Rule for Deep Neural...',
          description: "",
          section: "News",},{id: "news-our-work-alphablend-hardware-algorithm-co-design-with-mixed-alphabet-set-multipliers-for-dnn-workloads-has-finally-been-presented-at-iscas-2025",
          title: 'Our work AlphaBlend: Hardware-Algorithm Co-design with Mixed-Alphabet Set Multipliers for DNN Workloads has...',
          description: "",
          section: "News",},{id: "news-presented-our-poster-local-learning-in-low-rank-space-a-feedback-alignment-perspective-at-cvprw-2025-in-the-wicv-workshop",
          title: 'Presented our poster Local Learning in Low-Rank Space: a Feedback Alignment Perspective at...',
          description: "",
          section: "News",},{id: "news-our-paper-cure-on-efficient-subspace-based-unlearning-for-safer-diffusion-models-has-been-accepted-to-neurips-2025-as-a-spotlight-paper",
          title: 'Our paper, CURE, on efficient subspace-based unlearning for safer diffusion models has been...',
          description: "",
          section: "News",},{id: "news-our-work-slimdiff-on-training-free-activation-guided-hands-free-slimming-of-diffusion-models-is-now-available-on-arxiv",
          title: 'Our work, SlimDiff, on training-free, activation-guided hands-free slimming of diffusion models, is now...',
          description: "",
          section: "News",},{id: "news-pleased-to-announce-that-our-work-feedback-alignment-meets-low-rank-manifolds-a-structured-recipe-for-local-learning-has-been-accepted-to-wacv-2026-as-a-highlight",
          title: 'Pleased to announce that our work Feedback Alignment Meets Low-Rank Manifolds: A Structured...',
          description: "",
          section: "News",},{id: "news-successfully-did-my-phd-prelims-finally-a-candidate",
          title: 'Successfully did my PhD Prelims. Finally a candidate!',
          description: "",
          section: "News",},{id: "news-absolutely-thrilled-to-share-that-our-paper-feedback-alignment-meets-low-rank-manifolds-a-structured-recipe-for-local-learning-was-presented-as-an-oral-at-wacv-2026-and-received-the-best-student-paper-award-algorithms-award",
          title: 'Absolutely thrilled to share that our paper Feedback Alignment Meets Low-Rank Manifolds: A...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-paper-now-you-see-it-now-you-don-t-instant-concept-erasure-ice-for-safe-text-to-image-and-video-generation-on-theoretically-grounded-instant-concept-erasure-for-safe-text-to-image-and-video-generation-was-accepted-to-cvpr-findings-2026",
          title: 'Excited to share that our paper, Now You See It, Now You Don’t...',
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
