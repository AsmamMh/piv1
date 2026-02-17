#!/bin/bash

# SmartSite Platform - Local Development Setup with Docker Compose

echo "🚀 Starting SmartSite Platform with Docker Compose..."

# Build all services
echo "🔨 Building services..."
docker-compose build

# Start all services
echo "▶️  Starting services..."
docker-compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 5

# Show logs
echo ""
echo "✅ All services started!"
echo ""
echo "📊 Running containers:"
docker-compose ps

echo ""
echo "🔗 Access your application:"
echo "  Frontend: http://localhost:5173"
echo "  API Gateway: http://localhost:3000/api"
echo "  Database: localhost:5432"
echo ""
echo "📝 View logs:"
echo "  docker-compose logs -f"
echo ""
echo "⛔ To stop all services:"
echo "  docker-compose down"
