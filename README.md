# Production Resiliency Dashboard

## Overview

The Production Resiliency Dashboard is a comprehensive monitoring solution that aggregates data from multiple sources (Datadog, Grafana, ServiceNow) to provide a unified view of system health, incident management, and infrastructure performance.

This dashboard serves as a centralized platform for engineering and operations teams to:
- Monitor real-time system metrics
- Track active incidents and their status
- Visualize infrastructure performance
- Correlate alerts across systems
- Generate reports for post-mortems and planning

## Key Features

### 1. Real-time System Health Monitoring
- Live metrics from Datadog (CPU, memory, network, etc.)
- Customizable time windows for trend analysis
- Threshold-based alerting with visual indicators

### 2. Incident Management
- Integration with ServiceNow for incident tracking
- Active incident dashboard with priority sorting
- Incident state tracking and history

### 3. Infrastructure Visualization
- Embedded Grafana dashboards for deep infrastructure insights
- Custom visualization of system performance metrics
- Multi-source data correlation

### 4. Alert Correlation
- Cross-references alerts from different monitoring systems
- Identifies related incidents and metrics
- Highlights potential root causes

### 5. Report Generation
- Exportable metrics and incident data
- Custom time range reports
- Scheduled report generation

## Tech Stack

- **Frontend**: React, Material-UI, Chart.js
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (for metric aggregation)
- **Caching**: Redis
- **Monitoring Integrations**:
  - Datadog API
  - ServiceNow API
  - Grafana Embed

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18 or higher)
- Docker and Docker Compose
- Access to:
  - Datadog API credentials
  - ServiceNow instance credentials
  - Grafana URL and API token
- Git (for cloning the repository)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-org/production-resiliency-dashboard.git
cd production-resiliency-dashboard
```

## Step 2: Set Up Environment Variables

Copy the example environment file and fill in your actual credentials:

```
cd backend
cp .env.example .env
```

Edit the `.env` file with your actual credentials:

```
DATADOG_KEY=your_datadog_api_key
DATADOG_APP_KEY=your_datadog_app_key
SN_INSTANCE=your_servicenow_instance_url
SN_USER=your_servicenow_username
SN_PASS=your_servicenow_password
GRAFANA_URL=your_grafana_url
GRAFANA_TOKEN=your_grafana_api_token
```

## Step 3: Install Dependencies


# Install backend dependencies

```
cd backend
npm install
```

# Install frontend dependencies

```
cd ../frontend
npm install
```

# Step 4: Build the Frontend

```
cd frontend
npm run build
```

# Running the Application

Option 1: Using Docker (Recommended for Production)


cd ..
docker-compose up

The application will be available at:

    Frontend: http://localhost:80
    Backend API: http://localhost:3000

## Option 2: Running Locally (Development)

Start the Backend:

```
cd backend
npm start
```

Start the Frontend:

```
cd frontend
npm start
```

The application will be available at:
```
    Frontend: http://localhost:3000
    Backend API: http://localhost:3000 (or whatever port you configured)
```

## Project Structure

```
production-resiliency-dashboard/
├── backend/                  # Backend service
│   ├── server.js            # Main Express server
│   ├── package.json         # Backend dependencies
│   └── .env.example         # Environment variables template
├── frontend/                # React frontend
│   ├── public/              # Public assets
│   │   └── index.html       # HTML entry point
│   └── src/                 # Source code
│       ├── App.jsx          # Main React component
│       ├── index.js         # React entry point
│       └── components/      # React components
│           └── Dashboard.jsx # Dashboard component
├── docker-compose.yml       # Docker configuration
├── Dockerfile               # Docker build instructions
└── README.md     
```
