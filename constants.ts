
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, JournalArticle } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Restaurant DB System',
    tagline: 'Optimizing logistics with SQL.',
    description: 'A robust relational database system designed to streamline orders, menus, and logistics for restaurant management.',
    longDescription: 'This project focused on the backend architecture of a restaurant management system. I designed and implemented a relational database with over 10 normalized tables. The core achievement was integrating order tracking and payment validation logic directly into the database structure, which resulted in a 30% reduction in manual errors.',
    year: '2023',
    category: 'Database',
    imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000',
    techStack: ['SQL (Oracle)', 'Database Normalization', 'Relational Design'],
    features: ['10+ Normalized Tables', 'Order Tracking Integration', 'Payment Validation', '30% Error Reduction'],
    sourceUrl: 'https://github.com/krishnapydev/restaurant_management_database_system'
  },
  {
    id: 'p2',
    name: 'Sales Data Analysis AI',
    tagline: 'Insights from 50,000+ rows of data.',
    description: 'An AI-powered web application that cleans and visualizes massive sales datasets for regional performance tracking.',
    longDescription: 'Leveraging Python and Pandas, I built a tool to ingest, clean, and analyze over 50,000 rows of raw sales data. The application features an interactive dashboard that allows stakeholders to track regional performance and product trends in real-time, transforming raw numbers into actionable business intelligence.',
    year: '2024',
    category: 'AI & Data',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning'],
    features: ['50k+ Rows Processed', 'Interactive Dashboard', 'Regional Performance Tracking', 'Automated Data Cleaning']
  },
  {
    id: 'p3',
    name: 'Real-time Chat App',
    tagline: 'Seamless communication with Django.',
    description: 'A real-time messaging platform built with Django, focusing on robust testing and defect resolution.',
    longDescription: 'This application enables real-time communication between users. Built on the Django framework, the project emphasized software engineering best practices, including rigorous application testing, debugging, and defect resolution to ensure a fault-tolerant user experience.',
    year: '2024',
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Django', 'Python', 'WebSocket', 'CSS', 'JavaScript'],
    features: ['Real-time Messaging', 'Defect Resolution', 'Unit Testing', 'User Authentication']
  },
  {
    id: 'p4',
    name: 'Google Cloud Facilitator',
    tagline: 'Mastering the cloud infrastructure.',
    description: 'Hands-on experience with Big Query, Vertex AI, and Cloud Run as part of the Google Cloud Arcade Facilitator Program.',
    longDescription: 'As part of Cohort 1 of the Google Cloud Arcade Facilitator Program 2025, I gained practical experience deploying and managing cloud resources. This included work with Compute Engine, IAM policies, Cloud Pub/Sub, and leveraging Vertex AI for machine learning tasks.',
    year: '2025',
    category: 'Cloud',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Google Cloud Platform', 'BigQuery', 'Vertex AI', 'Compute Engine', 'Cloud Run'],
    features: ['Cloud Infrastructure', 'IAM Management', 'Serverless Deployment', 'Data Warehousing']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Art of Normalization",
        date: "Engineering",
        excerpt: "Why organizing data into 10+ tables isn't just about rules—it's about clarity.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "In my Restaurant Management project, I learned that database design is the backbone of application stability. Normalization is often taught as a set of rigid rules (1NF, 2NF, 3NF), but in practice, it is about reducing redundancy to prevent the 'anomaly' of human error."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "By splitting the schema into over 10 distinct tables—separating orders from menus, and logistics from payments—I created a system where data integrity was enforced by design, not just by code. This structure reduced manual errors by 30%, proving that good architecture pays dividends."
            )
        )
    },
    {
        id: 2,
        title: "Scale & Simplicity",
        date: "Philosophy",
        excerpt: "Building fault-tolerant applications in an agile environment.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "My experience with the Google Cloud Arcade Facilitator program taught me that scalability isn't just about adding more servers; it's about designing stateless components. Working with Cloud Run and Pub/Sub showed me how decoupled systems allow for true fault tolerance."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Whether I'm writing Python scripts for data analysis or configuring IAM roles, my goal is always the same: simplicity. Complex systems fail in complex ways. Simple, modular systems are easier to debug, easier to test, and easier to scale."
            )
        )
    }
];

export const BRAND_NAME = 'Krishna.';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';
