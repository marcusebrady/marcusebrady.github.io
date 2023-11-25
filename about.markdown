---
layout: page
title: Research 
permalink: /research/
---
<h2  style="font-family: 'Courier Prime', monospace;">Research Interests </h2>

Since my undergraduate I have developed an interest in the use of AI and Machine Learning within the chemical and physical sciences. Starting with it's use in crystal structure prediction and now actively using Machine Learning Techniques within Chemical Transport Models (CTMs). My current interests are within the methodology and the development of the methodology/mathematics itself, using domain knowledge, physical laws, chemical laws and incorporating it all into a model. I would be happy to talk more about this. 

<h2  style="font-family: 'Courier Prime', monospace;">Research Experience</h2>
<h3  style="font-family: 'Courier Prime', monospace;">Masters Project - Paramterisation of Photolysis Rates</h3>

<h3  style="font-family: 'Courier Prime', monospace;">Personal Project - Graph-NNs for RNA reactivity prediction</h3>

A kaggle competition I used to hone my skills for different type of NNs. The most succesful in the competition I believe was a transformer based architecture, this of course makes sense. Instead of this I tried something a bit more interesting (at least to me).
Since all we had to go off was the RNA sequence and the relative reactivity, transformers would be the most obvious approach, instead I tried to exploit the graphical nature of RNA using GNNs. Using PyTorch Geomtric I developed two main approaches:
1. A SageConv Model
2. A GIN Model

Using techniques like Sinusoidal Positional Encoding and defining adjacency functions for the edges, I trained it on the vast dataset provided with GPUs.

