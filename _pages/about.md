---
layout: about
title: about
permalink: /
subtitle: <a href='https://engineering.purdue.edu/ECE'>Electrical &amp; Computer Engineering, Purdue University</a>. PhD researcher in the <a href='https://engineering.purdue.edu/NanoElectronics'>Nano(electronic) Research Lab</a>, advised by <a href='https://engineering.purdue.edu/NRL'>Prof. Kaushik Roy</a>.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>EE Building</p>
    <p>465 Northwestern Ave</p>
    <p>West Lafayette, IN 47907</p>

selected_papers: true
news: true
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a Ph.D. researcher at **Purdue University**, working at the intersection of **multimodal generative AI**, **diffusion models**, and **efficient computing**. My research builds *training-free, mathematically grounded* frameworks that make large generative models smaller, safer, and more controllable — without finetuning, extra data, or architectural surgery.

Recent work spans four threads:

- **Controllable diffusion generation** — geometry-aware traversal of text-embedding manifolds for fine-grained subject and attribute control across UNet and DiT backbones ([HEART](#)).
- **Diffusion model compression** — closed-form, activation-guided rank reduction with theoretical pruning-error bounds, achieving ~35% inference acceleration and ~100M parameter reduction on Stable Diffusion ([SlimDiff](https://arxiv.org/abs/2509.21498)).
- **Concept erasure & machine unlearning** — closed-form orthogonal-projection edits on cross-attention for safe text-to-image and text-to-video generation, with verified resistance to adversarial red-teaming ([CURE](https://arxiv.org/abs/2505.12677), [ICE](https://arxiv.org/abs/2511.18684)).
- **Local learning beyond backprop** — structured low-rank feedback alignment on the Stiefel manifold, scaling Direct Feedback Alignment to 32-layer ResNets on ImageNet (*SSA*, WACV 2026 **Oral** & **Best Student Paper – Algorithms**).

Before Purdue I spent three years at **Samsung Semiconductor R&D** designing standard-cell libraries from 130 nm down to 4 nm (3 US patents, Samsung President's Award), and I've interned at **Texas Instruments' Kilby Labs** on compute-in-flash architectures for DNN workloads. The hardware lineage still shows up in my research — I care about whether the math actually runs fast on real silicon.

I review for **NeurIPS, ICLR, ICML, CVPR, ICCV, ECCV, WACV**. I'm currently on the **Bilsland Dissertation Fellowship** at Purdue.
