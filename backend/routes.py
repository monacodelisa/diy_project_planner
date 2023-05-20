from app import app, db
from controllers import get_projects, create_project, get_project

@app.route('/')
def index():
    return 'Hello, Flask! by Esther White'

@app.route('/projects', methods=['GET'])
def get_all_projects():
    return get_projects()

@app.route('/projects', methods=['POST'])
def create_new_project():
    return create_project()

@app.route('/projects/<project_id>', methods=['GET'])
def get_single_project(project_id):
    return get_project(project_id)
