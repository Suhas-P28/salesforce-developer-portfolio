import {
  Certification,
  CodeSnippet,
  PortfolioProject,
  SDLCStep,
  SkillItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Suhas P',
  role: 'Salesforce Developer',
  company: 'IBM',
  period: '2025 - Present',
  experience: '1.8 Years',
  headline:
    'Building scalable Salesforce solutions that connect business requirements with clean automation, custom development, and user-focused experiences.',
  tagline:
    'Salesforce Developer (4x Certified) at IBM focused on Apex, Lightning Web Components, Flow Automation, Integrations, and Agentforce AI solutions.',
  email: 'suhas123.p@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suhas-p-5a273424a',
  github: 'https://github.com/Suhas-P28',
  location: 'Bengaluru, India (Open to Remote / Hybrid)',
  status: 'Open to Opportunities',
  certificationsCount: 4,
  trailheadRank: 'Double Star Ranger',
  trailheadStars: 2,
  trailheadBadges: '200+ Badges',
  trailheadPoints: '100,000+ Points',
  trailheadLegendBadge: 'Agentblazer Legend',
  summary:
    'Salesforce Developer at IBM with 1.8 years of hands-on experience and 4x Salesforce Certifications (including Agentforce Specialist, Platform Developer I, Administrator, and Associate). Experienced in designing and enhancing enterprise solutions using Apex, Lightning Web Components (LWC), Flow, and Integration patterns. Collaborated directly with business analysts and QA teams to support SIT/UAT deployments, resolve data issues, and deliver maintainable CRM enhancements.',
};

export const SKILLS_DATA: SkillItem[] = [
  // Hands-on
  {
    name: 'Agentforce & AI Agents',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Autonomous customer agents, Topics configuration, Invocable Apex Actions for LLMs, Prompt Builder templates, CRM grounding.',
    tag: 'Certified Specialist',
  },
  {
    name: 'Integration Patterns & REST APIs',
    category: 'hands-on',
    group: 'Integration',
    description: 'HTTP callouts from Apex, JSON serialization/deserialization, Named Credentials, error retry logging, webhook endpoints.',
    tag: 'System Integration',
  },
  {
    name: 'Apex Programming',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Triggers, Service classes, Batch Apex, Queueable, Test classes with 85%+ coverage, Governor limits discipline.',
    tag: 'Core Development',
  },
  {
    name: 'Lightning Web Components (LWC)',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Wire adapters, imperative Apex calls, custom events, Lightning Design System (SLDS), reactive properties.',
    tag: 'UI Layer',
  },
  {
    name: 'Salesforce Flow Automation',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Record-Triggered Flows, Screen Flows, Auto-launched Flows, sub-flows, fault path handling, Flow trigger explorer.',
    tag: 'Automation',
  },
  {
    name: 'SOQL & SOSL',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Aggregate queries, relationship queries (parent-child, child-parent), WITH USER_MODE security enforcement, index optimization.',
    tag: 'Data Querying',
  },
  {
    name: 'Salesforce Administration & Configuration',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Custom Objects, Validation Rules, Page Layouts, Lightning Record Pages (FlexiPages), Permission Sets, Field-Level Security.',
    tag: 'Configuration',
  },
  {
    name: 'Reports & Dashboards',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Custom report types, summary & matrix reports, dynamic dashboard filters, executive KPIs.',
    tag: 'Analytics',
  },
  {
    name: 'Data Operations & Fixes',
    category: 'hands-on',
    group: 'Salesforce',
    description: 'Data Loader, Workbench, bulk data fixes, orphan record cleanup, sandboxing data refresh support.',
    tag: 'Data Ops',
  },

  // Working Knowledge
  {
    name: 'JavaScript (ES6+)',
    category: 'working-knowledge',
    group: 'Frontend',
    description: 'Promises, async/await, array transformations, DOM lifecycle, event bubbling in LWC.',
    tag: 'Client Scripting',
  },
  {
    name: 'Git & Version Control',
    category: 'working-knowledge',
    group: 'DevOps & Tools',
    description: 'Feature branching, pull request reviews, merge conflict resolution, repository hygiene.',
    tag: 'Source Control',
  },
  {
    name: 'Azure DevOps & CI/CD',
    category: 'working-knowledge',
    group: 'DevOps & Tools',
    description: 'User story tracking, sprint boards, pipeline execution, deployment package verification.',
    tag: 'ALM & Tracking',
  },
  {
    name: 'SIT / UAT Deployment Support',
    category: 'working-knowledge',
    group: 'DevOps & Tools',
    description: 'Change sets, metadata deployment, post-deployment manual steps, smoke testing, test script execution.',
    tag: 'Release Management',
  },
  {
    name: 'Platform Events Basics',
    category: 'working-knowledge',
    group: 'Integration',
    description: 'Publishing and subscribing to event-driven architectures inside Salesforce.',
    tag: 'Event Driven',
  },

  // Currently Exploring
  {
    name: 'Data Cloud',
    category: 'currently-exploring',
    group: 'Salesforce',
    description: 'Data Lake Objects (DLO), Data Model Objects (DMO), identity resolution, calculated insights.',
    tag: 'Data Architecture',
  },
  {
    name: 'Advanced LWC Architecture',
    category: 'currently-exploring',
    group: 'Frontend',
    description: 'Lightning Message Service (LMS), headless components, custom property editors for Flow Screens.',
    tag: 'Modern UI',
  },
  {
    name: 'Enterprise Scale Architectures',
    category: 'currently-exploring',
    group: 'Salesforce',
    description: 'Large Data Volume (LDV) patterns, multi-tier frameworks, composite transactions.',
    tag: 'Architecture',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'agentforce-specialist',
    name: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    status: 'Certified',
    issueDate: '2025',
    credentialId: 'SF-AGF-5829104',
    badgeColor: 'from-sky-500 via-blue-600 to-indigo-700',
    description:
      'Validates specialized capability in architecting, configuring, and grounding autonomous AI agents with Agentforce. Encompasses Topics classification, Invocable Apex Actions, Prompt Templates, CRM grounding, and trust guardrails.',
    skillsValidated: [
      'Agentforce Topics & Intent Classification',
      'Invocable Apex Actions with DTO Schemas',
      'Prompt Builder & CRM Grounding',
      'Trust Layer & Guardrail Enforcement',
      'Autonomous Multi-Turn Conversations',
    ],
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
  },
  {
    id: 'pdi',
    name: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    status: 'Certified',
    issueDate: '2024',
    credentialId: 'SF-PDI-4921084',
    badgeColor: 'from-blue-600 to-indigo-700',
    description:
      'Validates programmatic development capability on the Lightning Platform including Apex programming, data modeling, SOQL/SOSL queries, basic LWC, governor limits management, and testing frameworks.',
    skillsValidated: [
      'Apex Triggers & Handlers',
      'Lightning Web Components',
      'SOQL / SOSL Data Operations',
      'Exception Handling & Security',
      'Unit Testing & Test Coverage',
    ],
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
  },
  {
    id: 'admin',
    name: 'Salesforce Certified Administrator',
    issuer: 'Salesforce',
    status: 'Certified',
    issueDate: '2024',
    credentialId: 'SF-ADM-3819472',
    badgeColor: 'from-cyan-600 to-blue-700',
    description:
      'Validates comprehensive knowledge of Salesforce customization, user setup, security controls (OWD, Profiles, Permission Sets), Flow automations, Reports, Dashboards, and data maintenance.',
    skillsValidated: [
      'Record-Triggered & Screen Flows',
      'Validation Rules & Formulas',
      'Page Layouts & FlexiPages',
      'Role Hierarchy & Sharing Rules',
      'Reports & Executive Dashboards',
    ],
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
  },
  {
    id: 'associate',
    name: 'Salesforce Certified Associate',
    issuer: 'Salesforce',
    status: 'Certified',
    issueDate: '2023',
    credentialId: 'SF-ASC-1934821',
    badgeColor: 'from-sky-500 to-blue-600',
    description:
      'Validates foundational understanding of Salesforce CRM architecture, core standard objects (Lead, Account, Contact, Opportunity, Case), and navigation.',
    skillsValidated: [
      'CRM Fundamentals & Ecosystem',
      'Standard Object Relationships',
      'Data Security Basics',
      'Salesforce Navigation & UI',
    ],
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
  },
];

export const TRAILHEAD_DATA = {
  rank: 'Double Star Ranger',
  stars: 2,
  badgesCount: '200+',
  pointsCount: '100,000+',
  superbadgesCount: 3,
  profileUrl: 'https://trailhead.salesforce.com',
  featuredBadge: {
    id: 'agentblazer-legend',
    title: 'Agentblazer Legend',
    category: 'Salesforce AI & Agentforce',
    awardTier: 'Premier Recognition',
    description:
      'Prestigious Trailhead credential badge recognizing proven excellence in autonomous Salesforce AI solutions, Agentforce reasoning configuration, Topics routing, Prompt Builder templates, Invocable Apex Actions, and CRM Grounding with the Einstein Trust Layer.',
    keySkills: [
      'Agentforce Autonomous Reasoning',
      'Topics & Actions Configuration',
      'Invocable Apex Integration',
      'Prompt Builder & CRM Grounding',
      'Einstein Trust Layer & Guardrails',
      'Data Cloud Grounding Patterns',
    ],
  },
  earnedBadges: [
    {
      id: 'agentblazer-legend-badge',
      title: 'Agentblazer Legend Badge',
      category: 'Agentforce / AI',
      badgeType: 'legend',
      description: 'Mastery in building, testing, and governing autonomous enterprise AI Agents on Salesforce.',
      skills: ['Agentforce', 'Prompt Builder', 'Invocable Apex', 'Trust Layer'],
    },
    {
      id: 'apex-specialist',
      title: 'Apex Specialist Superbadge',
      category: 'Programmatic Apex',
      badgeType: 'superbadge',
      description: 'Hands-on validation of bulkified triggers, SOQL optimization, and enterprise Apex test architecture.',
      skills: ['Apex Triggers', 'Unit Testing', 'Bulkification', 'Governor Limits'],
    },
    {
      id: 'process-automation-specialist',
      title: 'Process Automation Specialist Superbadge',
      category: 'Automation',
      badgeType: 'superbadge',
      description: 'End-to-end declarative business process design across Record-Triggered Flows and approval routing.',
      skills: ['Flow Builder', 'Approval Processes', 'Validation Rules'],
    },
    {
      id: 'developer-super-set',
      title: 'Developer Super Set',
      category: 'Full-Stack Salesforce',
      badgeType: 'superbadge',
      description: 'Combined mastery across programmatic Apex, Lightning Web Components, and automated workflows.',
      skills: ['LWC', 'Apex', 'Wire Adapters', 'Security'],
    },
  ],
};

export const PROJECTS_DATA: PortfolioProject[] = [
  {
    id: 'sales-ops-management',
    title: 'Salesforce Sales Operations Management System',
    subtitle: 'Comprehensive Lead-to-Opportunity Pipeline Automation & LWC Workspace',
    badge: 'Portfolio Project',
    category: ['Salesforce', 'Apex', 'LWC'],
    description:
      'A full-stack Salesforce application designed to streamline core CRM operations across Leads, Accounts, Contacts, and Opportunities. Features an interactive LWC Kanban board, dynamic stage progression, and automated task assignments.',
    problem:
      'Sales representatives frequently lose deal velocity due to manual stage tracking, disparate notes, and slow lead triage across standard record pages without clear visualization.',
    solution:
      'Engineered an integrated LWC workspace with real-time stage progression, an interactive drag-and-drop Kanban view, auto-qualified Lead routing, and clean Apex controllers enforcing USER_MODE security.',
    architecture: [
      { name: 'LWC Presentation Layer', layer: 'UI', description: 'LeadKanban & OpportunityPipeline components with reactive wire adapters' },
      { name: 'Apex Service Layer', layer: 'Server', description: 'LeadService.cls & OpportunityService.cls providing cached and transactional methods' },
      { name: 'Data Access Layer', layer: 'SOQL', description: 'Optimized SOQL with WITH USER_MODE and parent-to-child relationship subqueries' },
      { name: 'Salesforce Data Layer', layer: 'Database', description: 'Lead, Opportunity, Task, and Custom Activity audit records' },
    ],
    technologies: ['Salesforce', 'Apex', 'LWC', 'Flow', 'SOQL', 'JavaScript', 'SLDS'],
    keyConcepts: [
      'Separation of Concerns (Service layer)',
      'AuraHandledException clean errors',
      'WITH USER_MODE enforcement',
      'Wire Service & Reactive State',
      'Sales Process Automation',
    ],
    lwcComponents: ['leadKanbanBoard', 'oppPipelineSummary', 'quickActionModal', 'salesActivityTimeline'],
    apexClasses: ['LeadService.cls', 'OpportunityService.cls', 'SalesDashboardController.cls', 'LeadTriggerHandler.cls'],
    demoType: 'kanban',
    githubUrl: 'https://github.com/Suhas-P28/salesforce-sales-management',
    featured: true,
  },
  {
    id: 'smart-case-management',
    title: 'Smart Customer Support Case Management',
    subtitle: 'Automated Case Triage, Priority Calculation Engine & Service Console',
    badge: 'Portfolio Project',
    category: ['Salesforce', 'Apex', 'LWC'],
    description:
      'Service Cloud solution incorporating an intelligent Case Priority Engine callable via Flow, tiered SLA tracking, automated routing based on customer entitlement, and a modern LWC Case Console.',
    problem:
      'Support teams experienced SLA breaches when high-value accounts submitted tickets that sat in generic queues without automated tier identification.',
    solution:
      'Created an Invocable Apex engine linked to Record-Triggered Flows that dynamically calculates priority based on Account SLA tiers, assigns tickets to specialized queues, and renders real-time milestone indicators in LWC.',
    architecture: [
      { name: 'Case Submission & Webhook', layer: 'Ingestion', description: 'Standard Case creation trigger or API intake' },
      { name: 'Flow Orchestrator', layer: 'Automation', description: 'Record-Triggered Flow invoking Priority Engine' },
      { name: 'Invocable Apex Engine', layer: 'Logic', description: 'CasePriorityEngine.cls evaluating Account SLA and milestones' },
      { name: 'LWC Service Console', layer: 'UI', description: 'casePriorityBoard with SLA progress bars and quick resolve actions' },
    ],
    technologies: ['Salesforce', 'Apex', 'Flow', 'LWC', 'SOQL', 'Service Cloud'],
    keyConcepts: [
      'Invocable Methods for Flow',
      'Bulkified DML operations',
      'SLA Milestone Calculation',
      'Custom Console Navigation',
      'Queue & Entitlement Management',
    ],
    lwcComponents: ['casePriorityBoard', 'caseMilestoneBar', 'quickResponseWidget'],
    apexClasses: ['CasePriorityEngine.cls', 'CaseAssignmentService.cls', 'CaseConsoleController.cls'],
    demoType: 'case-console',
    githubUrl: 'https://github.com/Suhas-P28/smart-case-management-lwc',
    featured: true,
  },
  {
    id: 'agentforce-ai-agent',
    title: 'AI Customer Support Agent (Agentforce)',
    subtitle: 'Autonomous Order Inquiries with Topics, Invocable Actions & Grounded CRM Data',
    badge: 'Exploration / Prototype',
    category: ['Agentforce', 'Apex', 'Salesforce'],
    description:
      'Portfolio prototype demonstrating Salesforce Agentforce concepts. Implements autonomous customer assistance for order status queries, returns, and delivery tracking using Topics, Invocable Apex Actions, and structured reasoning.',
    problem:
      'Customers expect instant 24/7 order updates, while traditional chatbots lack direct transactional access to real-time Salesforce records without complex middleware.',
    solution:
      'Structured an Agentforce Topic for "Order Inquiries" with natural language instructions, connected to an Invocable Apex Action (GetOrderStatusAction.cls) that safely queries Salesforce Order__c data and returns structured answers.',
    architecture: [
      { name: 'Customer Input', layer: 'Channel', description: 'Customer requests order or shipment update via chat' },
      { name: 'Agentforce Reasoning Engine', layer: 'Agentforce', description: 'Evaluates intent, classifies into Order Inquiries Topic' },
      { name: 'Invocable Apex Action', layer: 'Action', description: 'GetOrderStatusAction receives email and order number inputs' },
      { name: 'CRM Grounded Data', layer: 'Data', description: 'Order__c and Delivery_Tracking__c queried in user context' },
      { name: 'Synthesized Response', layer: 'Delivery', description: 'Agent provides conversational, verified delivery update' },
    ],
    technologies: ['Agentforce', 'Apex Invocables', 'Topics & Actions', 'Data Cloud Concepts', 'Prompt Templates'],
    keyConcepts: [
      'InvocableVariable request/response schemas',
      'Natural Language Topic Definitions',
      'Hallucination prevention through CRM grounding',
      'Guardrails and fallback handling',
    ],
    apexClasses: ['GetOrderStatusAction.cls', 'AgentOrderService.cls', 'AgentforceActionTest.cls'],
    demoType: 'agentforce',
    githubUrl: 'https://github.com/Suhas-P28/agentforce-order-support-demo',
    featured: true,
  },
  {
    id: 'lwc-opportunity-intelligence',
    title: 'Interactive Opportunity Intelligence Dashboard',
    subtitle: 'High-Performance LWC Analytics Workspace with Aggregate SOQL',
    badge: 'Portfolio Project',
    category: ['LWC', 'Apex', 'Salesforce'],
    description:
      'Enterprise-grade Lightning Web Component dashboard rendering executive KPI cards, stage distributions, win-rate analytics, multi-column sorting, pagination, and multi-parameter filtering without external reporting delays.',
    problem:
      'Standard Salesforce Dashboards can suffer from caching delays and lack interactive inline row actions or immediate client-side filtering needed by sales managers.',
    solution:
      'Architected a responsive LWC dashboard consuming aggregate SOQL results via an optimized Apex controller, featuring client-side reactive filtering, loading skeletons, and accessible keyboard navigation.',
    architecture: [
      { name: 'LWC Analytics Grid', layer: 'UI', description: 'Modular KPI cards, responsive pipeline bar, and lightning-datatable' },
      { name: 'Apex Aggregator Controller', layer: 'Server', description: 'OppDashboardController.cls calculating SUM(Amount) and stage metrics' },
      { name: 'Aggregate SOQL', layer: 'Query', description: 'GROUP BY StageName queries with security enforcements' },
      { name: 'Client State Store', layer: 'State', description: 'Client-side pagination, search term debounce, and multi-filter criteria' },
    ],
    technologies: ['LWC', 'Apex', 'Aggregate SOQL', 'JavaScript ES6+', 'SLDS'],
    keyConcepts: [
      'Aggregate SOQL grouping in Apex',
      'Client-side search debouncing',
      'lightning-datatable custom row actions',
      'Accessible UI & loading state handling',
    ],
    lwcComponents: ['opportunityIntelligenceDashboard', 'pipelineSummaryChart', 'kpiMetricTile', 'oppFilterBar'],
    apexClasses: ['OppDashboardController.cls', 'OppDashboardService.cls', 'OppDashboardTest.cls'],
    demoType: 'lwc-dashboard',
    githubUrl: 'https://github.com/Suhas-P28/lwc-opportunity-intelligence-dashboard',
    featured: true,
  },
  {
    id: 'salesforce-external-integration',
    title: 'Salesforce External Order Integration',
    subtitle: 'Bi-Directional REST API Sync, Custom Integration Logger & Error Recovery',
    badge: 'Portfolio Project',
    category: ['Integration', 'Apex', 'Salesforce'],
    description:
      'Demonstration of Salesforce integration architecture connecting an external commerce backend with Salesforce Order and Account records. Implements REST callouts, custom Integration_Log__c audit logging, and fault-tolerant retry handling.',
    problem:
      'External fulfillment platforms need reliable status synchronization into Salesforce CRM without silent failures or untracked API timeout errors.',
    solution:
      'Built an asynchronous Apex integration engine with structured JSON request/response DTOs, HTTP callouts via Named Credentials, an IntegrationLogger utility for auditability, and clear status updates.',
    architecture: [
      { name: 'External E-Commerce API', layer: 'External', description: 'RESTful endpoint delivering fulfillment status updates' },
      { name: 'Salesforce Named Credential', layer: 'Auth & Config', description: 'Secure credential storage and endpoint routing' },
      { name: 'ExternalOrderService.cls', layer: 'Apex Engine', description: 'HTTP client, status code validation, JSON untyped parsing' },
      { name: 'IntegrationLogger.cls', layer: 'Observability', description: 'Writes structured Integration_Log__c records on failure or success' },
    ],
    technologies: ['REST API', 'Apex Callouts', 'JSON Parsing', 'Named Credentials', 'Integration Logging'],
    keyConcepts: [
      'HTTP Callouts & status code evaluation',
      'Robust JSON parsing & DTO pattern',
      'Custom Integration Logging object',
      'Graceful error handling & governor limit caution',
    ],
    apexClasses: ['ExternalOrderService.cls', 'OrderIntegrationController.cls', 'IntegrationLogger.cls', 'ExternalOrderMock.cls'],
    demoType: 'rest-mock',
    githubUrl: 'https://github.com/Suhas-P28/salesforce-rest-order-integration',
    featured: false,
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'agentforce-invocable',
    title: 'GetOrderStatusAction.cls — Agentforce Invocable Action',
    category: 'Agentforce',
    language: 'apex',
    description:
      'Autonomous AI Agent integration pattern using @InvocableMethod and @InvocableVariable schemas to safely ground Salesforce CRM records for Agentforce reasoning.',
    bestPractices: [
      'Strict input/output DTO parameterization for Agentforce LLM schema discovery',
      'Clear descriptive labels and descriptions guiding Agentforce prompt planning',
      'Safe bounded SOQL query preventing unauthorized cross-tenant data leaks',
      'Bulkified signature accepting List<OrderRequest> per platform standards',
    ],
    code: `/**
 * @description Invocable Apex Action providing real-time order status grounding
 * to Agentforce AI Agents for customer support inquiries.
 * @author Suhas P
 */
public with sharing class GetOrderStatusAction {

    public class OrderRequest {
        @InvocableVariable(
            label='Customer Email' 
            description='The verified email address of the inquiring customer' 
            required=true
        )
        public String customerEmail;

        @InvocableVariable(
            label='Order Number' 
            description='The unique identifier for the order (e.g. ORD-1024)' 
            required=true
        )
        public String orderNumber;
    }

    public class OrderResponse {
        @InvocableVariable(
            label='Status Summary' 
            description='Natural language summary of current order progress'
        )
        public String statusSummary;

        @InvocableVariable(
            label='Estimated Delivery Date' 
            description='Estimated delivery date for the shipment'
        )
        public Date deliveryDate;

        @InvocableVariable(
            label='Tracking Number' 
            description='Carrier tracking reference if dispatched'
        )
        public String trackingNumber;
    }

    @InvocableMethod(
        label='Get Order Status for Agentforce' 
        description='Retrieves order status, shipping carrier, and estimated arrival from CRM'
        category='Order Management'
    )
    public static List<OrderResponse> getStatus(List<OrderRequest> requests) {
        List<OrderResponse> responses = new List<OrderResponse>();
        
        for (OrderRequest req : requests) {
            OrderResponse res = new OrderResponse();
            
            List<Order__c> matchingOrders = [
                SELECT Id, Status__c, Estimated_Delivery__c, Tracking_Number__c, Carrier__c
                FROM Order__c 
                WHERE Order_Number__c = :req.orderNumber 
                AND Customer_Email__c = :req.customerEmail 
                WITH USER_MODE 
                LIMIT 1
            ];

            if (!matchingOrders.isEmpty()) {
                Order__c ord = matchingOrders[0];
                res.statusSummary = 'Order ' + req.orderNumber + ' is ' + ord.Status__c + 
                                    (ord.Carrier__c != null ? ' via ' + ord.Carrier__c : '');
                res.deliveryDate = ord.Estimated_Delivery__c;
                res.trackingNumber = ord.Tracking_Number__c;
            } else {
                res.statusSummary = 'No active order found matching the provided reference and email.';
            }

            responses.add(res);
        }
        return responses;
    }
}`,
  },
  {
    id: 'lead-service',
    title: 'LeadService.cls — Secure Caching & USER_MODE SOQL',
    category: 'Apex',
    language: 'apex',
    description:
      'Production-style Apex service class illustrating clean separation of concerns, CRUD/FLS permission checks, @AuraEnabled(cacheable=true) for LWC performance, and WITH USER_MODE security.',
    bestPractices: [
      'Enforces \`with sharing\` to respect Org-Wide Defaults and sharing rules',
      'Uses \`WITH USER_MODE\` for modern runtime field & object accessibility enforcement',
      'Implements \`@AuraEnabled(cacheable=true)\` for client-side LDS caching',
      'Wraps operations in try-catch returning clean \`AuraHandledException\`',
    ],
    code: `/**
 * @description Service class for Lead-related operations used in the Sales Ops Dashboard.
 * @author Suhas P
 */
public with sharing class LeadService {
    
    @AuraEnabled(cacheable=true)
    public static List<Lead> getRecentLeadsByStatus(String status) {
        try {
            // Explicit schema access verification prior to execution
            if (!Schema.sObjectType.Lead.isAccessible()) {
                throw new AuraHandledException('Insufficient permissions to access Lead records.');
            }

            // Clean SOQL query using WITH USER_MODE and bind variable
            return [
                SELECT Id, Name, Company, Status, Email, Phone, CreatedDate 
                FROM Lead 
                WHERE Status = :status 
                WITH USER_MODE 
                ORDER BY CreatedDate DESC 
                LIMIT 15
            ];
        } catch (Exception ex) {
            // Log server-side and throw user-friendly exception to client
            System.debug(LoggingLevel.ERROR, 'LeadService.getRecentLeadsByStatus error: ' + ex.getMessage());
            throw new AuraHandledException('Unable to load leads at this time. Please try again.');
        }
    }

    @AuraEnabled
    public static void updateLeadStatus(Id leadId, String newStatus) {
        try {
            if (!Schema.sObjectType.Lead.fields.Status.isUpdateable()) {
                throw new AuraHandledException('You do not have permission to edit Lead status.');
            }

            Lead targetLead = new Lead(Id = leadId, Status = newStatus);
            update as user targetLead;
        } catch (Exception ex) {
            throw new AuraHandledException('Failed to update lead status: ' + ex.getMessage());
        }
    }
}`,
  },
  {
    id: 'lwc-lead-quickview',
    title: 'leadQuickView.js — Reactive LWC with Wire Service',
    category: 'LWC',
    language: 'javascript',
    description:
      'Modern Lightning Web Component JavaScript controller showcasing reactive @api properties, @wire adapter integration, error state handling, and custom event dispatching.',
    bestPractices: [
      'Leverages \`@wire\` adapter for automated reactive data synchronization',
      'Handles both data and error states explicitly to prevent blank screens',
      'Dispatches standard custom events for child-to-parent communication',
      'Uses clean ES6 destructuring and reactive \`@api\` public properties',
    ],
    code: `import { LightningElement, api, wire, track } from 'lwc';
import getRecentLeadsByStatus from '@salesforce/apex/LeadService.getRecentLeadsByStatus';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LeadQuickView extends LightningElement {
    @api status = 'Open - Not Contacted';
    @track selectedLeadId;
    
    leads = [];
    isLoading = true;
    errorMessage = '';

    // Wired Apex call with reactive parameter dependency '$status'
    @wire(getRecentLeadsByStatus, { status: '$status' })
    wiredLeads({ error, data }) {
        this.isLoading = false;
        if (data) {
            this.leads = data;
            this.errorMessage = '';
        } else if (error) {
            this.errorMessage = error.body ? error.body.message : 'Error retrieving leads';
            this.leads = [];
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error Loading Leads',
                    message: this.errorMessage,
                    variant: 'error'
                })
            );
        }
    }

    handleSelectLead(event) {
        this.selectedLeadId = event.currentTarget.dataset.id;
        // Fire custom event to notify parent dashboard
        this.dispatchEvent(new CustomEvent('leadselect', {
            detail: { leadId: this.selectedLeadId }
        }));
    }
}`,
  },
  {
    id: 'case-priority-engine',
    title: 'CasePriorityEngine.cls — Invocable Flow Priority Calculator',
    category: 'Flow & Integration',
    language: 'apex',
    description:
      'Bulkified Apex engine invoked by Record-Triggered Flows to compute support priority based on Account SLA and open escalated milestone metrics.',
    bestPractices: [
      'Bulkified input processing to avoid governor limit breaches during batch updates',
      'Clean separation between logic evaluation and DML execution',
      'Provides rich output list compatible with Flow decision nodes',
    ],
    code: `public with sharing class CasePriorityEngine {
    
    @InvocableMethod(
        label='Calculate Case Priority' 
        description='Evaluates Account SLA tier and case criteria to assign appropriate priority'
        category='Case Automation'
    )
    public static List<String> calculatePriority(List<Id> caseIds) {
        if (caseIds == null || caseIds.isEmpty()) {
            return new List<String>();
        }

        List<Case> casesToUpdate = [
            SELECT Id, Priority, Account.SLA__c, Account.Type, Subject 
            FROM Case 
            WHERE Id IN :caseIds 
            WITH USER_MODE
        ];
        
        List<String> results = new List<String>();

        for (Case c : casesToUpdate) {
            String slaTier = c.Account != null ? c.Account.SLA__c : 'Standard';
            
            if (slaTier == 'Platinum' || slaTier == 'Gold') {
                c.Priority = 'High';
            } else if (slaTier == 'Silver') {
                c.Priority = 'Medium';
            } else {
                c.Priority = 'Low';
            }
            results.add('Case ' + c.Id + ' priority evaluated to: ' + c.Priority);
        }
        
        if (!casesToUpdate.isEmpty()) {
            update as user casesToUpdate;
        }

        return results;
    }
}`,
  },
  {
    id: 'rest-callout-service',
    title: 'ExternalOrderService.cls — Resilient REST API Callouts',
    category: 'Flow & Integration',
    language: 'apex',
    description:
      'Integration class performing external HTTP REST calls, utilizing Named Credentials, parsing dynamic JSON responses, and recording logs on failure.',
    bestPractices: [
      'Uses Named Credentials (\`callout:Order_System_API\`) to avoid hardcoded secrets/URLs',
      'Validates HTTP response status codes before attempting serialization',
      'Uses safe try-catch logging patterns that do not swallow critical runtime exceptions',
      'Respects callout timeout boundaries and Governor limit quotas',
    ],
    code: `public with sharing class ExternalOrderService {
    
    public static void syncOrderStatus(String orderRecordId, String externalOrderId) {
        Http httpClient = new Http();
        HttpRequest request = new HttpRequest();
        // Secure callout using Salesforce Named Credentials
        request.setEndpoint('callout:ECommerce_Fulfillment_API/v1/orders/' + EncodingUtil.urlEncode(externalOrderId, 'UTF-8'));
        request.setMethod('GET');
        request.setHeader('Accept', 'application/json');
        request.setTimeout(15000); // 15-second graceful timeout

        try {
            HttpResponse response = httpClient.send(request);
            
            if (response.getStatusCode() == 200) {
                Map<String, Object> payload = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                String externalStatus = (String) payload.get('status');
                
                Order__c orderToUpdate = new Order__c(
                    Id = orderRecordId,
                    External_Status__c = externalStatus,
                    Last_Sync_Date__c = System.now()
                );
                update as user orderToUpdate;
            } else {
                // Log non-200 HTTP response for operational triage
                System.debug(LoggingLevel.WARN, 'Sync failed with status code: ' + response.getStatusCode());
                IntegrationLogger.logError('ExternalOrderService', 'syncOrderStatus', response.getStatusCode(), response.getBody());
            }
        } catch (System.CalloutException calloutEx) {
            System.debug(LoggingLevel.ERROR, 'Callout network failure: ' + calloutEx.getMessage());
            IntegrationLogger.logException('ExternalOrderService', 'CalloutException', calloutEx);
        }
    }
}`,
  },
];

export const SDLC_STEPS: SDLCStep[] = [
  {
    stepNumber: '01',
    title: 'Requirement & Analysis',
    subtitle: 'Business Process Mapping',
    description:
      'Participate in refinement discussions with Business Analysts and Product Owners to analyze user stories, object relationships, and data dependencies before committing to code.',
    tools: ['Azure DevOps Boards', 'Lucidchart / Miro', 'Confluence', 'User Stories'],
    responsibilities: [
      'Evaluate declarative vs. programmatic tradeoffs',
      'Identify Governor limit implications and data volumes',
      'Define clear acceptance criteria and data model fields',
    ],
  },
  {
    stepNumber: '02',
    title: 'Development & Sandbox Build',
    subtitle: 'Clean Configuration & Code',
    description:
      'Build features in isolated Developer sandboxes adhering strictly to Salesforce separation of concerns, bulkification standards, and SLDS design guidelines.',
    tools: ['VS Code', 'Salesforce CLI (sf)', 'Apex / LWC', 'Flow Builder'],
    responsibilities: [
      'Create custom fields, validation rules, and FlexiPages',
      'Write reusable Apex service classes and LWC components',
      'Achieve 85%+ test class coverage with realistic mock assertions',
    ],
  },
  {
    stepNumber: '03',
    title: 'Code Review & Static Analysis',
    subtitle: 'Quality & Governance',
    description:
      'Submit Pull Requests on Git, participate in peer code reviews, and verify compliance with naming conventions, security checks (WITH USER_MODE), and trigger frameworks.',
    tools: ['Git / GitHub', 'Azure Repos', 'PMD Apex Analyzer', 'SonarQube'],
    responsibilities: [
      'Ensure zero SOQL/DML inside loops (bulkification)',
      'Verify CRUD/FLS permission checks and error handling',
      'Check adherence to enterprise naming standards',
    ],
  },
  {
    stepNumber: '04',
    title: 'SIT & UAT Deployment',
    subtitle: 'Staging & Package Verification',
    description:
      'Prepare deployment manifests, validate change sets or metadata packages against target sandbox environments, and execute post-deployment configuration steps.',
    tools: ['Change Sets', 'Salesforce DevOps Center', 'Workbench', 'Data Loader'],
    responsibilities: [
      'Deploy packages into SIT environment for QA regression runs',
      'Execute data fixes and record seeding for testing teams',
      'Support UAT test execution and resolve edge-case defect tickets',
    ],
  },
  {
    stepNumber: '05',
    title: 'Production Release & Support',
    subtitle: 'Go-Live & Hypercare',
    description:
      'Execute weekend/off-hours release cutover plans, verify production smoke test cases, monitor debug logs, and assist business users through initial adoption.',
    tools: ['Setup Audit Trail', 'Apex Debug Logs', 'Email Alerts', 'DevOps Releases'],
    responsibilities: [
      'Verify production validation rules and active flow versions',
      'Monitor error logs and exception notifications',
      'Assist support teams with operational data fixes',
    ],
  },
];

export const ARCHITECTURE_LAB_COMPONENTS = [
  {
    id: 'agentforce',
    name: 'Agentforce AI Actions & Topics',
    category: 'Autonomous AI Layer',
    purpose: 'Allows autonomous AI agents to execute trusted actions directly against CRM data.',
    whenToUse:
      'Building 24/7 customer and employee agents that understand natural language intents and need to query or update Salesforce safely.',
    example: 'Customer order lookup agent, case resolution assistant, lead qualification copilot.',
    bestPractices: [
      'Structure granular Invocable Actions with clear descriptions so the LLM understands intent',
      'Enforce USER_MODE to prevent AI agents from leaking confidential records',
      'Supply fallback instructions for edge cases when intent is ambiguous',
      'Anchor prompts using grounded CRM data rather than open web parameters',
    ],
    codeSnippet: `// Agentforce Invocable Action Signature
@InvocableMethod(label='Check Order Status', description='Provides real-time order status and shipment ETA')
public static List<OrderResponse> getStatus(List<OrderRequest> reqs) {
    // Safely queries Order__c records in user context
}`,
  },
  {
    id: 'lwc',
    name: 'Lightning Web Components (LWC)',
    category: 'Client / UI Layer',
    purpose: 'Used for custom, reusable, high-performance, and responsive user interfaces on the Lightning Platform.',
    whenToUse:
      'When declarative Lightning App Builder pages cannot deliver the interactive UX, dynamic filtering, or custom layouts demanded by users.',
    example: 'Custom Kanban boards, executive pipeline dashboards, multi-step guided wizards.',
    bestPractices: [
      'Always use Lightning Design System (SLDS) utility classes',
      'Prefer @wire adapter over imperative Apex whenever caching is viable',
      'Communicate between independent components using Lightning Message Service (LMS)',
      'Keep components decoupled with granular single responsibility',
    ],
    codeSnippet: `// Modern LWC Wire pattern
import { LightningElement, wire, api } from 'lwc';
import getAccountDetails from '@salesforce/apex/AccountService.getAccountDetails';

export default class AccountSummaryCard extends LightningElement {
    @api recordId;

    @wire(getAccountDetails, { accountId: '$recordId' })
    account;
}`,
  },
  {
    id: 'apex',
    name: 'Apex Programming',
    category: 'Server / Business Logic',
    purpose: 'Used when business logic requires transactional processing, complex algorithms, or custom API endpoints.',
    whenToUse:
      'When declarative tools hit functional limitations, high-volume transactions occur, or complex multi-object calculations are required.',
    example: 'Trigger frameworks, batch data processing, custom REST endpoints, integrations.',
    bestPractices: [
      'Always specify "with sharing" or "inherited sharing"',
      'Strict bulkification: Zero SOQL or DML statements inside loops',
      'Use "WITH USER_MODE" to respect object and field level security',
      'Achieve 85%+ test coverage testing positive, negative, and bulk scenarios',
    ],
    codeSnippet: `public with sharing class OpportunityService {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpenPipeline() {
        return [
            SELECT Id, Name, StageName, Amount, CloseDate
            FROM Opportunity
            WHERE IsClosed = false
            WITH USER_MODE
            ORDER BY CloseDate ASC
        ];
    }
}`,
  },
  {
    id: 'flow',
    name: 'Salesforce Flow Automation',
    category: 'Declarative Automation',
    purpose: 'Used for declarative business process automation without writing server-side code.',
    whenToUse:
      'When automation rules need to be easily maintained, updated by admins, or when building interactive screen flows for guided data entry.',
    example: 'Record-triggered notifications, multi-object field updates, guided screen surveys, approval routing.',
    bestPractices: [
      'One record-triggered flow per object per trigger event (Before Save vs. After Save)',
      'Use Fast Field Updates (Before Save) for same-record updates to minimize CPU time',
      'Always implement fault connectors on data operations for error handling',
      'Avoid hardcoding record IDs or profile names directly in flow elements',
    ],
    codeSnippet: `<!-- Flow Execution Architecture -->
Triggering Record Created/Updated
  ↓
Evaluate Entry Criteria (e.g. Stage = 'Closed Won')
  ↓
Run Subflow / Invocable Action
  ↓
Fault Path Handler -> Send Notification to Admin on Error`,
  },
  {
    id: 'objects',
    name: 'Salesforce Data Model & Objects',
    category: 'Database / Relational Model',
    purpose: 'Underpins the entire multi-tenant CRM database with standard and custom objects.',
    whenToUse:
      'Designing the core entity schema representing real-world business accounts, contacts, deals, and custom domain entities.',
    example: 'Account-Opportunity relationships, junction objects for Many-to-Many models, roll-up summaries.',
    bestPractices: [
      'Choose Master-Detail relationships only when tight cascade-delete and roll-ups are required',
      'Use Lookup relationships for loosely coupled entities to avoid locking issues',
      'Create custom index fields for high-volume lookup filters',
      'Establish clean naming conventions for API names and field labels',
    ],
    codeSnippet: `// Master-Detail Relationship Example
Custom Object: Project__c
  └── Child Object: Project_Milestone__c (Master-Detail)
        ├── Roll-up Summary: Total_Budget__c (SUM of Milestone amounts)
        └── Enforces cascading security from parent Project__c`,
  },
  {
    id: 'platform-events',
    name: 'Platform Events & Messaging',
    category: 'Event-Driven Architecture',
    purpose: 'Enables decoupled, asynchronous event-driven communication inside and outside Salesforce.',
    whenToUse:
      'When distinct business processes need to notify other components or external systems without blocking current user transactions.',
    example: 'Order status broadcast, external webhook notifications, real-time UI refresh triggers via empApi.',
    bestPractices: [
      'Publish After Commit to ensure transactions succeed before broadcasting',
      'Subscribe via Apex triggers or LWC empApi for immediate UI reactivity',
      'Keep event payload lightweight; transmit IDs rather than heavy record blobs',
    ],
    codeSnippet: `// Publishing an event in Apex
Order_Event__e event = new Order_Event__e(
    Order_Number__c = 'ORD-9821',
    Status__c = 'Dispatched'
);
EventBus.publish(event);`,
  },
  {
    id: 'rest-api',
    name: 'REST APIs & Integrations',
    category: 'System Integration',
    purpose: 'Integrates Salesforce with third-party ERPs, payment gateways, marketing systems, and databases.',
    whenToUse:
      'Syncing order fulfillment statuses, authenticating external client applications, or triggering webhooks.',
    example: 'E-commerce cart checkout to Salesforce Order sync, ERP billing synchronization.',
    bestPractices: [
      'Store endpoints and authentication in Named Credentials (never in code)',
      'Implement mock HTTP responses in test classes via HttpCalloutMock',
      'Handle HTTP 4xx and 5xx errors gracefully with retry queues and audit logs',
      'Respect API rate limits and maximum callout timeout windows (120s max)',
    ],
    codeSnippet: `HttpRequest req = new HttpRequest();
req.setEndpoint('callout:Billing_Gateway_NC/invoices');
req.setMethod('POST');
req.setHeader('Content-Type', 'application/json');
HttpResponse res = new Http().send(req);`,
  },
];

export const GITHUB_REPOSITORIES = [
  {
    name: 'agentforce-order-support-demo',
    description: 'Salesforce Agentforce demonstration featuring Invocable Apex Actions, Topics configuration, and order retrieval.',
    language: 'Apex',
    stars: 24,
    updated: 'Recently updated',
    topics: ['agentforce', 'salesforce-ai', 'invocable-apex', 'prompts'],
    url: 'https://github.com/Suhas-P28/agentforce-order-support-demo',
  },
  {
    name: 'salesforce-sales-management',
    description: 'Full-stack Salesforce Sales Ops application with LWC Kanban, Lead qualification service, and pipeline analytics.',
    language: 'Apex / LWC',
    stars: 18,
    updated: 'Recently updated',
    topics: ['salesforce', 'apex', 'lwc', 'flow', 'enterprise-crm'],
    url: 'https://github.com/Suhas-P28/salesforce-sales-management',
  },
  {
    name: 'lwc-opportunity-intelligence',
    description: 'High-performance interactive Opportunity analytics dashboard built with Lightning Web Components & Aggregate SOQL.',
    language: 'JavaScript / LWC',
    stars: 19,
    updated: 'Recently updated',
    topics: ['lwc', 'salesforce-developer', 'soql', 'analytics'],
    url: 'https://github.com/Suhas-P28/lwc-opportunity-intelligence-dashboard',
  },
  {
    name: 'salesforce-rest-order-integration',
    description: 'Bi-directional REST API integration sample with Named Credentials, error retry handler, and IntegrationLogger utility.',
    language: 'Apex',
    stars: 15,
    updated: 'Recently updated',
    topics: ['rest-api', 'named-credentials', 'integration-logging'],
    url: 'https://github.com/Suhas-P28/salesforce-rest-order-integration',
  },
];
