import uuid


sessions = {}


def create_session():

    session_id = str(uuid.uuid4())

    sessions[session_id] = {}

    return session_id



def delete_session(session_id):

    if session_id in sessions:
        del sessions[session_id]



def get_session(session_id):

    return sessions.get(session_id)

