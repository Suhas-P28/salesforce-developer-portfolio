export type SkillCategory = 'hands-on' | 'working-knowledge' | 'currently-exploring';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  group: 'Salesforce' | 'Frontend' | 'Backend' | 'Integration' | 'DevOps & Tools';
  description: string;
  tag?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: 'Certified' | 'Active';
  issueDate: string;
  credentialId: string;
  badgeColor: string;
  description: string;
  skillsValidated: string[];
  verificationUrl: string;
}

export type ProjectCategory = 'all' | 'Salesforce' | 'Apex' | 'LWC' | 'Agentforce' | 'Integration';

export interface ProjectArchitectureStep {
  name: string;
  layer: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  badge: 'Portfolio Project' | 'Exploration / Prototype';
  category: ProjectCategory[];
  description: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitectureStep[];
  technologies: string[];
  keyConcepts: string[];
  lwcComponents?: string[];
  apexClasses?: string[];
  demoType?: 'agentforce' | 'lwc-dashboard' | 'case-console' | 'rest-mock' | 'kanban';
  githubUrl: string;
  featured: boolean;
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: 'apex' | 'javascript' | 'html' | 'soql' | 'json';
  category: 'Apex' | 'LWC' | 'SOQL' | 'Flow & Integration' | 'Agentforce';
  description: string;
  bestPractices: string[];
  code: string;
}

export interface SDLCStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  responsibilities: string[];
}

export interface TrailheadBadge {
  id: string;
  title: string;
  category: string;
  badgeType: 'special' | 'superbadge' | 'legend';
  description: string;
  skills: string[];
  date?: string;
}

export interface TrailheadProfile {
  rank: string;
  stars: number;
  badgesCount: string;
  pointsCount: string;
  superbadgesCount: number;
  featuredBadge: string;
  profileUrl: string;
  badges: TrailheadBadge[];
}
