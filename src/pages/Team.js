import React, { useState } from 'react';
import './Team.css';

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      department: 'leadership',
      avatar: '👩‍💼',
      bio: 'Visionary leader with 15+ years of experience in tech industry',
      skills: ['Leadership', 'Strategy', 'Innovation'],
      email: 'sarah@company.com',
      linkedin: 'linkedin.com/sarah',
      achievements: 'Founded 3 successful startups'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      department: 'leadership',
      avatar: '👨‍💻',
      bio: 'Tech enthusiast passionate about building scalable systems',
      skills: ['Architecture', 'Cloud', 'AI/ML'],
      email: 'michael@company.com',
      linkedin: 'linkedin.com/michael',
      achievements: 'Led teams of 100+ engineers'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      department: 'design',
      avatar: '👩‍🎨',
      bio: 'Creative designer focused on user-centered design',
      skills: ['UI/UX', 'Branding', 'Prototyping'],
      email: 'emily@company.com',
      linkedin: 'linkedin.com/emily',
      achievements: 'Won 5 international design awards'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Senior Developer',
      department: 'engineering',
      avatar: '👨‍💼',
      bio: 'Full-stack developer with expertise in modern web technologies',
      skills: ['React', 'Node.js', 'Python'],
      email: 'david@company.com',
      linkedin: 'linkedin.com/david',
      achievements: 'Contributed to 50+ open source projects'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      department: 'marketing',
      avatar: '👩‍💻',
      bio: 'Data-driven marketer specializing in growth strategies',
      skills: ['SEO', 'Content', 'Analytics'],
      email: 'lisa@company.com',
      linkedin: 'linkedin.com/lisa',
      achievements: 'Grew user base by 300% in 2 years'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Product Manager',
      department: 'product',
      avatar: '👨‍🔬',
      bio: 'Product strategist with a passion for solving user problems',
      skills: ['Product Strategy', 'Agile', 'User Research'],
      email: 'james@company.com',
      linkedin: 'linkedin.com/james',
      achievements: 'Launched 20+ successful products'
    },
    {
      id: 7,
      name: 'Sophie Martin',
      role: 'UX Researcher',
      department: 'design',
      avatar: '👩‍🔬',
      bio: 'Research expert dedicated to understanding user needs',
      skills: ['User Testing', 'Analytics', 'Surveys'],
      email: 'sophie@company.com',
      linkedin: 'linkedin.com/sophie',
      achievements: 'Conducted 200+ user studies'
    },
    {
      id: 8,
      name: 'Alex Thompson',
      role: 'DevOps Engineer',
      department: 'engineering',
      avatar: '👨‍🚀',
      bio: 'Infrastructure specialist ensuring system reliability',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      email: 'alex@company.com',
      linkedin: 'linkedin.com/alex',
      achievements: '99.99% uptime maintained'
    },
    {
      id: 9,
      name: 'Maria Garcia',
      role: 'Content Strategist',
      department: 'marketing',
      avatar: '👩‍✈️',
      bio: 'Storyteller creating compelling brand narratives',
      skills: ['Copywriting', 'SEO', 'Social Media'],
      email: 'maria@company.com',
      linkedin: 'linkedin.com/maria',
      achievements: '1M+ content impressions monthly'
    },
    {
      id: 10,
      name: 'Ryan Lee',
      role: 'Data Scientist',
      department: 'engineering',
      avatar: '👨‍🎓',
      bio: 'Analytics expert turning data into actionable insights',
      skills: ['Python', 'Machine Learning', 'Statistics'],
      email: 'ryan@company.com',
      linkedin: 'linkedin.com/ryan',
      achievements: 'Built 15+ predictive models'
    },
    {
      id: 11,
      name: 'Nina Patel',
      role: 'HR Manager',
      department: 'operations',
      avatar: '👩‍⚕️',
      bio: 'People-first HR professional building great teams',
      skills: ['Recruitment', 'Culture', 'Development'],
      email: 'nina@company.com',
      linkedin: 'linkedin.com/nina',
      achievements: 'Hired 100+ talented professionals'
    },
    {
      id: 12,
      name: 'Tom Brown',
      role: 'Sales Director',
      department: 'sales',
      avatar: '👨‍✈️',
      bio: 'Results-driven sales leader exceeding targets',
      skills: ['B2B Sales', 'Negotiation', 'CRM'],
      email: 'tom@company.com',
      linkedin: 'linkedin.com/tom',
      achievements: '$10M+ in annual revenue'
    }
  ];

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === filter);

  const departments = {
    all: 'All Team',
    leadership: 'Leadership',
    engineering: 'Engineering',
    design: 'Design',
    marketing: 'Marketing',
    product: 'Product',
    operations: 'Operations',
    sales: 'Sales'
  };

  return (
    <div className="team-page">
      <div className="team-header">
        <h1>👥 Our Team</h1>
        <p>Meet the talented people behind our success</p>
      </div>

      <div className="team-stats">
        <div className="stat-box">
          <span className="stat-icon">👨‍💼</span>
          <span className="stat-value">{teamMembers.length}</span>
          <span className="stat-label">Team Members</span>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🏢</span>
          <span className="stat-value">{Object.keys(departments).length - 1}</span>
          <span className="stat-label">Departments</span>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🌍</span>
          <span className="stat-value">15+</span>
          <span className="stat-label">Countries</span>
        </div>
        <div className="stat-box">
          <span className="stat-icon">⭐</span>
          <span className="stat-value">50+</span>
          <span className="stat-label">Awards Won</span>
        </div>
      </div>

      <div className="department-filter">
        {Object.entries(departments).map(([key, label]) => (
          <button
            key={key}
            className={filter === key ? 'active' : ''}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="team-grid">
        {filteredMembers.map(member => (
          <div 
            key={member.id} 
            className="team-card"
            onClick={() => setSelectedMember(member)}
          >
            <div className="card-avatar">{member.avatar}</div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="card-role">{member.role}</p>
              <p className="card-bio">{member.bio}</p>
              <div className="card-skills">
                {member.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>✕</button>
            
            <div className="modal-header">
              <div className="modal-avatar">{selectedMember.avatar}</div>
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
                <div className="modal-department">
                  {departments[selectedMember.department]}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <section className="modal-section">
                <h3>📝 About</h3>
                <p>{selectedMember.bio}</p>
              </section>

              <section className="modal-section">
                <h3>💪 Skills</h3>
                <div className="skills-list">
                  {selectedMember.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h3>🏆 Achievements</h3>
                <p>{selectedMember.achievements}</p>
              </section>

              <section className="modal-section">
                <h3>📧 Contact</h3>
                <div className="contact-info">
                  <a href={`mailto:${selectedMember.email}`} className="contact-link">
                    ✉️ {selectedMember.email}
                  </a>
                  <a href={`https://${selectedMember.linkedin}`} className="contact-link" target="_blank" rel="noopener noreferrer">
                    🔗 {selectedMember.linkedin}
                  </a>
                </div>
              </section>

              <div className="modal-actions">
                <button className="action-button primary">💬 Send Message</button>
                <button className="action-button">📅 Schedule Meeting</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="join-team-section">
        <h2>🚀 Join Our Team</h2>
        <p>We're always looking for talented individuals to join our mission</p>
        <button className="join-btn">View Open Positions</button>
      </div>
    </div>
  );
}

export default Team;
