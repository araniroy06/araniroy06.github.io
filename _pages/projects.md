---
layout: page
title: Projects
permalink: /projects/
description: Current and selected research projects.
nav: true
nav_order: 3
---

My research projects span controllable and geometry-aware generative models, machine unlearning, efficient generative AI and reasoning, and backpropagation-free learning.

## Current Projects

### ARC — Aligned Riemannian Concept Erasure in Diffusion Models

Developing a geometry-aware concept and feature unlearning framework that models diffusion-model text representations on a hyperspherical manifold and derives geodesic projection operators for localized, training-free concept and feature removal while preserving neighboring semantics.

### Feature and Concept Unlearning in Large Language Models

Analyzing how semantic features, concepts, and task-specific knowledge are encoded and disentangled across transformer layers, with the goal of enabling localized, concept-level, and sequential-task unlearning while preserving unrelated model capabilities.

### Semantic Reconstruction and Parallel Reasoning in Diffusion Language Models

Developing position-relaxed reconstruction objectives for masked diffusion language models to improve deep-mask semantic reconstruction and enable more effective parallel decoding on language and reasoning tasks.

### Model- and Task-Aware Data Curation for Multimodal Learning

Developing data curation methods that select samples jointly with respect to the target model, task, dataset composition, and modality gap, with the goal of improving cross-modal alignment and data efficiency.

---

## Selected Completed / Published Projects

### HEART — Geometry-Aware Controllable Diffusion Generation

A training-free framework for fine-grained subject and attribute control that models text embeddings on their intrinsic hyperspherical geometry and uses Kent-representation traversal instead of conventional Euclidean semantic edits. The method supports UNet- and DiT-based diffusion models with strong scene preservation.  
[Paper](https://arxiv.org/abs/2605.07973) · **NeurIPS 2026**

### CURE — Training-Free Concept Unlearning in Diffusion Models

A fast, training-free concept-unlearning framework based on closed-form cross-attention weight editing, orthogonal projection, and spectral representation geometry.  
[Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/769736dfbf6a1f64b4d2ab5c82c3d5e2-Abstract-Conference.html) · **NeurIPS 2025 Spotlight**

### SlimDiff — Training-Free Diffusion Model Compression

An activation-guided, timestep-aware diffusion compression framework using operator-aware low-rank decomposition. The work achieves approximately 35% faster inference and about 100M parameter reduction while preserving generation quality.  
[Paper](https://arxiv.org/abs/2509.21498)

### Backpropagation-Free Learning via Structured Low-Rank Geometry

Local learning methods combining Direct Feedback Alignment with structured low-rank manifold constraints and orthogonality-preserving updates. The work scales to deeper convolutional networks and ImageNet-scale settings.  
[WACV 2026 Paper](https://openaccess.thecvf.com/content/WACV2026/html/Roy_Feedback_Alignment_Meets_Low-Rank_Manifolds_A_Structured_Recipe_for_Local_WACV_2026_paper.html) · [WiCV / CVPRW 2025](https://sites.google.com/view/wicv-cvpr-2025/program/accepted-papers)

### AlphaBlend — Hardware-Algorithm Co-design for Efficient Neural Networks

A hardware-algorithm co-design framework using mixed-alphabet set multipliers and quantization strategies for efficient DNN workloads.  
[Paper](https://doi.org/10.1109/ISCAS56072.2025.11043242) · **ISCAS 2025**
