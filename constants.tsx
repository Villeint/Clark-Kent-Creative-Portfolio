import React from 'react';
import { Project, NavItem } from './types';

export interface CategoryGroup {
  id: string;
  title: string;
  projects: Project[];
}

export const CATEGORIES: CategoryGroup[] = [
  {
    id: 'digital-poster',
    title: 'Digital Poster Making',
    projects: [
      { id: 'dp1', title: 'Cyberpunk Neon', category: 'Digital Art', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800', description: '', year: '2024' },
      { id: 'dp2', title: 'Future Pulse', category: 'Poster', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', description: '', year: '2024' },
    ]
  },
  {
    id: 'poster-ads',
    title: 'Poster Ads',
    projects: [
      { id: 'pa1', title: 'Global Campaign', category: 'Advertising', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800', description: '', year: '2023' },
      { id: 'pa2', title: 'Urban Motion', category: 'Ad Design', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', description: '', year: '2023' },
    ]
  },
  {
    id: 'graphic-designs',
    title: 'Graphic Designs',
    projects: [
      { id: 'gd1', title: 'Vector Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', description: '', year: '2024' },
      { id: 'gd2', title: 'Symbolism', category: 'Logo', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128b18a?auto=format&fit=crop&q=80&w=800', description: '', year: '2024' },
    ]
  },
  {
    id: 'ojt-projects',
    title: 'OJT Projects',
    projects: [
      { id: 'ojt1', title: 'Agency Workflow', category: 'Internship', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', description: '', year: '2023' },
      { id: 'ojt2', title: 'Visual Report', category: 'Corporate', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800', description: '', year: '2023' },
    ]
  },
  {
    id: 'ui-ux',
    title: 'Ui/UX',
    projects: [
      { id: 'ux1', title: 'Fintech Dashboard', category: 'Product', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', description: '', year: '2024' },
      { id: 'ux2', title: 'Social Connect', category: 'Interface', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800', description: '', year: '2024' },
    ]
  },
  {
    id: 'school-pubs',
    title: 'School Pubs',
    projects: [
      { id: 'sp1', title: 'Varsity News', category: 'Editorial', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800', description: '', year: '2022' },
      { id: 'sp2', title: 'Student Zine', category: 'Print', image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800', description: '', year: '2022' },
    ]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' }
];

export const Icons = {
  Facebook: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  Instagram: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  ),
  LinkedIn: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  )
};