
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  year: string;
  category: 'Full Stack' | 'Database' | 'AI & Data' | 'Cloud';
  imageUrl: string;
  gallery?: string[];
  techStack: string[];
  features: string[];
  sourceUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'project', project: Project }
  | { type: 'journal', article: JournalArticle }
  | { type: 'contact' };
