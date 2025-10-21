import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeView, setActiveView] = useState('grid');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    tech: [],
    status: 'planning'
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform',
      description: '완전한 기능을 갖춘 온라인 쇼핑몰 플랫폼',
      status: 'active',
      progress: 75,
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      team: ['👨‍💻', '👩‍🎨', '👨‍💼'],
      deadline: '2024-12-31',
      tasks: { total: 48, completed: 36 }
    },
    {
      id: 2,
      name: 'Social Media Dashboard',
      description: '소셜 미디어 분석 및 관리 대시보드',
      status: 'active',
      progress: 60,
      tech: ['Vue.js', 'Firebase', 'Chart.js'],
      team: ['👩‍💻', '👨‍🔧'],
      deadline: '2024-11-30',
      tasks: { total: 32, completed: 19 }
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: '개인 포트폴리오 웹사이트',
      status: 'completed',
      progress: 100,
      tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
      team: ['👨‍🎨'],
      deadline: '2024-10-15',
      tasks: { total: 24, completed: 24 }
    },
    {
      id: 4,
      name: 'Blog CMS',
      description: '블로그 콘텐츠 관리 시스템',
      status: 'planning',
      progress: 15,
      tech: ['Gatsby', 'GraphQL', 'Contentful'],
      team: ['👩‍💼', '👨‍💻'],
      deadline: '2025-02-28',
      tasks: { total: 40, completed: 6 }
    },
    {
      id: 5,
      name: 'Mobile App',
      description: 'React Native 모바일 애플리케이션',
      status: 'active',
      progress: 45,
      tech: ['React Native', 'Expo', 'Redux'],
      team: ['👨‍💻', '👩‍🎨', '👨‍🔧'],
      deadline: '2025-01-31',
      tasks: { total: 56, completed: 25 }
    },
    {
      id: 6,
      name: 'API Gateway',
      description: '마이크로서비스 API 게이트웨이',
      status: 'paused',
      progress: 30,
      tech: ['Node.js', 'Express', 'Redis', 'Docker'],
      team: ['👨‍💼', '👩‍💻'],
      deadline: '2025-03-31',
      tasks: { total: 28, completed: 8 }
    }
  ]);

  const filteredProjects = filterStatus === 'all' 
    ? projects 
    : projects.filter(p => p.status === filterStatus);

  const getStatusColor = (status) => {
    const colors = {
      active: '#28a745',
      completed: '#007bff',
      planning: '#ffc107',
      paused: '#6c757d'
    };
    return colors[status] || '#6c757d';
  };

  const getStatusText = (status) => {
    const texts = {
      active: '진행중',
      completed: '완료',
      planning: '계획중',
      paused: '일시중지'
    };
    return texts[status] || status;
  };

  const handleCreateProject = () => {
    if (newProject.name && newProject.description) {
      const project = {
        id: projects.length + 1,
        ...newProject,
        progress: 0,
        team: ['👤'],
        deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        tasks: { total: 0, completed: 0 }
      };
      setProjects([...projects, project]);
      setNewProject({ name: '', description: '', tech: [], status: 'planning' });
      setShowNewProject(false);
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="header-left">
          <h1>📁 프로젝트 관리</h1>
          <p>{projects.length}개의 프로젝트</p>
        </div>
        <button className="btn-new-project" onClick={() => setShowNewProject(true)}>
          + 새 프로젝트
        </button>
      </div>

      <div className="projects-controls">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStatus('all')}
          >
            전체 ({projects.length})
          </button>
          <button 
            className={`filter-btn ${filterStatus === 'active' ? 'active' : ''}`}
            onClick={() => setFilterStatus('active')}
          >
            진행중 ({projects.filter(p => p.status === 'active').length})
          </button>
          <button 
            className={`filter-btn ${filterStatus === 'completed' ? 'active' : ''}`}
            onClick={() => setFilterStatus('completed')}
          >
            완료 ({projects.filter(p => p.status === 'completed').length})
          </button>
          <button 
            className={`filter-btn ${filterStatus === 'planning' ? 'active' : ''}`}
            onClick={() => setFilterStatus('planning')}
          >
            계획중 ({projects.filter(p => p.status === 'planning').length})
          </button>
        </div>

        <div className="view-toggles">
          <button 
            className={`view-btn ${activeView === 'grid' ? 'active' : ''}`}
            onClick={() => setActiveView('grid')}
          >
            ⊞
          </button>
          <button 
            className={`view-btn ${activeView === 'list' ? 'active' : ''}`}
            onClick={() => setActiveView('list')}
          >
            ☰
          </button>
        </div>
      </div>

      <div className={`projects-container ${activeView}`}>
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span 
                className="status-badge" 
                style={{ background: getStatusColor(project.status) }}
              >
                {getStatusText(project.status)}
              </span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-progress">
              <div className="progress-header">
                <span>진행률</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${project.progress}%`,
                    background: getStatusColor(project.status)
                  }}
                ></div>
              </div>
            </div>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-footer">
              <div className="project-team">
                {project.team.map((member, i) => (
                  <span key={i} className="team-member">{member}</span>
                ))}
              </div>
              <div className="project-meta">
                <span className="tasks-count">
                  ✓ {project.tasks.completed}/{project.tasks.total}
                </span>
                <span className="deadline">📅 {project.deadline}</span>
              </div>
            </div>

            <div className="project-actions">
              <button className="btn-view">보기</button>
              <button className="btn-edit">수정</button>
              <button className="btn-more">⋯</button>
            </div>
          </div>
        ))}
      </div>

      {showNewProject && (
        <div className="modal-overlay" onClick={() => setShowNewProject(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>새 프로젝트 만들기</h2>
            
            <div className="form-group">
              <label>프로젝트 이름</label>
              <input
                type="text"
                value={newProject.name}
                onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                placeholder="프로젝트 이름을 입력하세요"
              />
            </div>

            <div className="form-group">
              <label>설명</label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                placeholder="프로젝트 설명을 입력하세요"
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>상태</label>
              <select
                value={newProject.status}
                onChange={(e) => setNewProject({...newProject, status: e.target.value})}
              >
                <option value="planning">계획중</option>
                <option value="active">진행중</option>
                <option value="paused">일시중지</option>
                <option value="completed">완료</option>
              </select>
            </div>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowNewProject(false)}>
                취소
              </button>
              <button className="btn-create" onClick={handleCreateProject}>
                생성
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
