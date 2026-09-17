export type Role = 'student' | 'institution' | 'industry' | 'admin';

export const roleMeta = {
  student: {
    name: 'Aarav Mehta',
    label: 'Student',
    short: 'AM',
    color: 'bg-indigo-100 text-indigo-700',
  },
  institution: {
    name: 'Dr. Rao',
    label: 'Institution / Faculty',
    short: 'DR',
    color: 'bg-emerald-100 text-emerald-700',
  },
  industry: {
    name: 'Priya Sharma',
    label: 'Industry / Recruiter',
    short: 'PS',
    color: 'bg-amber-100 text-amber-700',
  },
  admin: {
    name: 'Admin',
    label: 'Platform Administrator',
    short: 'AD',
    color: 'bg-slate-200 text-slate-700',
  },
} satisfies Record<Role, {
  name: string;
  label: string;
  short: string;
  color: string;
}>;

export const navByRole: Record<
  Role,
  { page: string; label: string; icon: string }[]
> = {
  student: [
    { page: 'dashboard', label: 'Dashboard', icon: 'layout' },
    { page: 'skills', label: 'My Skills', icon: 'sparkles' },
    { page: 'skill-gap', label: 'Skill Gap', icon: 'scan' },
    { page: 'learning', label: 'Learning & Courses', icon: 'book' },
    { page: 'internships', label: 'Internships', icon: 'briefcase' },
    { page: 'applications', label: 'Applications', icon: 'kanban' },
    { page: 'readiness', label: 'Career Readiness', icon: 'target' },
  ],

  institution: [
    { page: 'dashboard', label: 'Dashboard', icon: 'layout' },
    { page: 'students', label: 'Students', icon: 'users' },
    { page: 'analytics', label: 'Skill Analytics', icon: 'chart' },
    { page: 'training', label: 'Training Programs', icon: 'book' },
    { page: 'placement', label: 'Placements', icon: 'target' },
    { page: 'partners', label: 'Industry Partners', icon: 'building' },
  ],

  industry: [
    { page: 'dashboard', label: 'Dashboard', icon: 'layout' },
    { page: 'opportunities', label: 'Opportunities', icon: 'briefcase' },
    { page: 'talent', label: 'Talent Search', icon: 'users' },
    { page: 'applications', label: 'Applications', icon: 'kanban' },
    { page: 'analytics', label: 'Hiring Analytics', icon: 'chart' },
  ],

  admin: [
    { page: 'dashboard', label: 'Dashboard', icon: 'layout' },
    { page: 'institutions', label: 'Institutions', icon: 'building' },
    { page: 'companies', label: 'Companies', icon: 'building' },
    { page: 'students', label: 'Students', icon: 'users' },
    { page: 'opportunities', label: 'Opportunities', icon: 'briefcase' },
    { page: 'reports', label: 'Reports', icon: 'chart' },
  ],
};

export const studentSkills = [
  {
    name: 'React',
    value: 82,
    group: 'Technical',
    level: 'Advanced',
  },
  {
    name: 'JavaScript',
    value: 86,
    group: 'Technical',
    level: 'Advanced',
  },
  {
    name: 'Node.js',
    value: 65,
    group: 'Technical',
    level: 'Intermediate',
  },
  {
    name: 'MongoDB',
    value: 72,
    group: 'Technical',
    level: 'Intermediate',
  },
  {
    name: 'SQL',
    value: 45,
    group: 'Technical',
    level: 'Beginner',
  },
  {
    name: 'Communication',
    value: 68,
    group: 'Soft skill',
    level: 'Intermediate',
  },
];

export const skillGaps = [
  {
    name: 'System Design',
    current: 30,
    required: 70,
    priority: 'High',
  },
  {
    name: 'SQL',
    current: 45,
    required: 80,
    priority: 'High',
  },
  {
    name: 'AWS',
    current: 30,
    required: 65,
    priority: 'Medium',
  },
  {
    name: 'Node.js',
    current: 65,
    required: 85,
    priority: 'Medium',
  },
];

export const courses = [
  {
    title: 'Advanced SQL for Data Analytics',
    provider: 'SkillBridge Academy',
    duration: '8h 20m',
    skill: 'SQL',
    level: 'Intermediate',
    rating: 4.8,
    progress: 0,
    color: 'bg-indigo-600',
  },
  {
    title: 'Node.js Backend Development',
    provider: 'SkillBridge Academy',
    duration: '12h',
    skill: 'Node.js',
    level: 'Intermediate',
    rating: 4.7,
    progress: 25,
    color: 'bg-emerald-600',
  },
  {
    title: 'AWS Cloud Fundamentals',
    provider: 'CloudPath',
    duration: '6h 40m',
    skill: 'AWS',
    level: 'Beginner',
    rating: 4.6,
    progress: 0,
    color: 'bg-amber-500',
  },
  {
    title: 'System Design Fundamentals',
    provider: 'TechPrep',
    duration: '10h',
    skill: 'System Design',
    level: 'Intermediate',
    rating: 4.9,
    progress: 15,
    color: 'bg-violet-600',
  },
  {
    title: 'React & Frontend Engineering',
    provider: 'SkillBridge Academy',
    duration: '14h',
    skill: 'React',
    level: 'Advanced',
    rating: 4.8,
    progress: 40,
    color: 'bg-indigo-600',
  },
  {
    title: 'Professional Communication',
    provider: 'CareerReady',
    duration: '3h 30m',
    skill: 'Communication',
    level: 'Beginner',
    rating: 4.5,
    progress: 0,
    color: 'bg-emerald-600',
  },
];

export const opportunities = [
  {
    id: 'opp-1',
    title: 'Frontend Developer Intern',
    company: 'TechNova Solutions',
    location: 'Bengaluru',
    mode: 'Remote',
    duration: '6 months',
    stipend: '₹20,000/mo',
    tags: ['React', 'JavaScript', 'Git', 'TypeScript', 'Testing'],
    match: 82,
    initials: 'TN',
    accent: '#4f46e5',
  },
  {
    id: 'opp-2',
    title: 'Full Stack Developer Intern',
    company: 'NovaWorks',
    location: 'Hyderabad',
    mode: 'Hybrid',
    duration: '6 months',
    stipend: '₹25,000/mo',
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    match: 88,
    initials: 'NW',
    accent: '#059669',
  },
  {
    id: 'opp-3',
    title: 'Data Analyst Intern',
    company: 'Insight Labs',
    location: 'Pune',
    mode: 'Hybrid',
    duration: '4 months',
    stipend: '₹18,000/mo',
    tags: ['SQL', 'Python', 'Power BI', 'Excel'],
    match: 67,
    initials: 'IL',
    accent: '#d97706',
  },
  {
    id: 'opp-4',
    title: 'Software Engineer Intern',
    company: 'CodeOrbit',
    location: 'Delhi NCR',
    mode: 'On-site',
    duration: '6 months',
    stipend: '₹30,000/mo',
    tags: ['Java', 'DSA', 'SQL', 'Git'],
    match: 61,
    initials: 'CO',
    accent: '#7c3aed',
  },
];

export const applications = [
  {
    company: 'TechNova Solutions',
    role: 'Frontend Developer Intern',
    applied: '17 Sep 2026',
    status: 'Technical assessment',
    next: 'Complete technical assessment',
    initials: 'TN',
    accent: '#4f46e5',
  },
  {
    company: 'Airtel Digital',
    role: 'Frontend Engineering Intern',
    applied: '12 Sep 2026',
    status: 'Shortlisted',
    next: 'Prepare for technical interview',
    initials: 'AD',
    accent: '#ef4444',
  },
  {
    company: 'NovaWorks',
    role: 'Full Stack Developer Intern',
    applied: '10 Sep 2026',
    status: 'Applied',
    next: 'Application under review',
    initials: 'NW',
    accent: '#059669',
  },
  {
    company: 'Insight Labs',
    role: 'Data Analyst Intern',
    applied: '8 Sep 2026',
    status: 'Applied',
    next: 'Await recruiter response',
    initials: 'IL',
    accent: '#d97706',
  },
  {
    company: 'CodeOrbit',
    role: 'Software Engineer Intern',
    applied: '5 Sep 2026',
    status: 'Shortlisted',
    next: 'Technical interview',
    initials: 'CO',
    accent: '#7c3aed',
  },
  {
    company: 'CloudWorks',
    role: 'Cloud Engineering Intern',
    applied: '2 Sep 2026',
    status: 'Applied',
    next: 'Application under review',
    initials: 'CW',
    accent: '#0891b2',
  },
];