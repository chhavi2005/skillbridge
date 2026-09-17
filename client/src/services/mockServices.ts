import { applications, studentSkills } from '../data/mock';

const STORAGE_KEYS = {
  skills: 'skillbridge.skills',
  applications: 'skillbridge.applications',
  enrollments: 'skillbridge.enrollments',
  shortlisted: 'skillbridge.shortlisted',
};

function readStorage<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const studentService = {
  getSkills() {
    return readStorage(STORAGE_KEYS.skills, studentSkills);
  },

  saveSkills(skills: typeof studentSkills) {
    writeStorage(STORAGE_KEYS.skills, skills);
  },

  getApplications() {
    return readStorage(STORAGE_KEYS.applications, applications);
  },

  saveApplications(nextApplications: typeof applications) {
    writeStorage(STORAGE_KEYS.applications, nextApplications);
  },

  getEnrollments(): Record<string, string> {
    return readStorage(STORAGE_KEYS.enrollments, {});
  },

  saveEnrollments(enrollments: Record<string, string>) {
    writeStorage(STORAGE_KEYS.enrollments, enrollments);
  },
};

export const recruiterService = {
  getShortlisted(): string[] {
    return readStorage(STORAGE_KEYS.shortlisted, []);
  },

  saveShortlisted(ids: string[]) {
    writeStorage(STORAGE_KEYS.shortlisted, ids);
  },
};

export const opportunityService = {
  getOpportunities() {
    return readStorage('skillbridge.opportunities', []);
  },

  saveOpportunities(items: unknown[]) {
    writeStorage('skillbridge.opportunities', items);
  },
};

export const aiService = {
  analyze(role: string, gaps: string[]) {
    const roleAdvice: Record<string, string> = {
      'Full Stack Developer':
        'Your current profile has a strong frontend foundation. Focus next on backend depth, SQL and cloud fundamentals to become more industry-ready.',
      'Data Analyst':
        'Build stronger SQL, analytics and visualization skills, then reinforce them through practical projects.',
      'Software Engineer':
        'Strengthen problem solving, system design, backend development and database fundamentals.',
      'AI/ML Engineer':
        'Build Python, statistics, machine learning and model deployment fundamentals before moving into advanced AI systems.',
    };

    return {
      summary:
        roleAdvice[role] ||
        `Based on your current profile, focus on closing these gaps: ${gaps.join(', ')}.`,
      resources: gaps.slice(0, 3).map((gap, index) => ({
        title:
          gap === 'SQL'
            ? 'Advanced SQL for Data Analytics'
            : gap === 'AWS'
              ? 'AWS Cloud Fundamentals'
              : gap === 'Node.js'
                ? 'Node.js Backend Development'
                : gap === 'System Design'
                  ? 'System Design Fundamentals'
                  : `${gap} Fundamentals`,
        why:
          index === 0
            ? `${gap} is currently one of your highest-impact gaps for ${role}.`
            : `Improving ${gap} will increase your readiness for ${role} opportunities.`,
      })),
    };
  },
};

export const candidates = [
  {
    id: 'candidate-1',
    name: 'Aarav Mehta',
    institution: 'Delhi Technological University',
    department: 'Computer Science',
    graduation: 2027,
    skills: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
    readiness: 88,
    experience: '2 internships',
    match: 92,
    initials: 'AM',
  },
  {
    id: 'candidate-2',
    name: 'Sana Iqbal',
    institution: 'Netaji Subhas University',
    department: 'Data & Analytics',
    graduation: 2027,
    skills: ['Python', 'SQL', 'Power BI', 'Excel', 'Statistics'],
    readiness: 84,
    experience: '1 internship',
    match: 88,
    initials: 'SI',
  },
  {
    id: 'candidate-3',
    name: 'Rohan Das',
    institution: 'VIT',
    department: 'Computer Science',
    graduation: 2027,
    skills: ['React', 'TypeScript', 'JavaScript', 'Git', 'Testing'],
    readiness: 81,
    experience: '1 internship',
    match: 84,
    initials: 'RD',
  },
  {
    id: 'candidate-4',
    name: 'Meera Kapoor',
    institution: 'SRM University',
    department: 'Information Technology',
    graduation: 2026,
    skills: ['Node.js', 'MongoDB', 'Express', 'React', 'AWS'],
    readiness: 91,
    experience: '3 internships',
    match: 95,
    initials: 'MK',
  },
];