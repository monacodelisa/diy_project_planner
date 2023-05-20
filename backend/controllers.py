from app import db
from models import User, Project, Material
from flask import jsonify

def get_projects():
    projects = Project.query.all()
    # Convert the projects data into a serializable format (e.g., list of dictionaries)
    projects_data = [{'id': project.id, 'name': project.name, 'description': project.description} for project in projects]
    return jsonify(projects_data)

def create_project():
    # Extract the data from the request and create a new project
    # Save the new project to the database using SQLAlchemy
    # Return the response indicating the success or failure of the operation
    return jsonify({'message': 'Project created successfully'})

def get_project(project_id):
    project = Project.query.get(project_id)
    if project:
        project_data = {'id': project.id, 'name': project.name, 'description': project.description}
        return jsonify(project_data)
    else:
        return jsonify({'message': 'Project not found'})
