#!/bin/bash

# SmartSite Platform - Deployment Script

echo "🚀 Deploying SmartSite Platform to Kubernetes..."

# Create namespace
kubectl create namespace smartsite --dry-run=client -o yaml | kubectl apply -f -

# Apply secrets
echo "📝 Applying secrets..."
kubectl apply -f k8s/secrets.yaml

# Apply database
echo "🗄️ Deploying database..."
kubectl apply -f k8s/database.yaml

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
kubectl rollout status statefulset/postgres -n smartsite --timeout=5m

# Apply all services
echo "🔧 Deploying services..."
kubectl apply -f k8s/api-gateway.yaml
kubectl apply -f k8s/auth-service.yaml
kubectl apply -f k8s/projects-service.yaml
kubectl apply -f k8s/team-service.yaml
kubectl apply -f k8s/finance-service.yaml
kubectl apply -f k8s/qhse-service.yaml
kubectl apply -f k8s/notifications-service.yaml

# Apply frontend
echo "🎨 Deploying frontend..."
kubectl apply -f k8s/frontend.yaml

# Get service info
echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔍 Services:"
kubectl get services -n smartsite

echo ""
echo "📊 Check the status with:"
echo "  kubectl get pods -n smartsite"
echo "  kubectl get deployments -n smartsite"
echo ""
echo "🔗 Access your application:"
echo "  Frontend: http://localhost:5173"
echo "  API Gateway: http://localhost:3000/api"
