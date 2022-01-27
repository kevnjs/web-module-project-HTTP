import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
const DeleteMovieModal = (props) => {
    const { movie, setMovies } = props;
    const { id } = useParams()
    const { push } = useHistory()

    const handleServerDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:9000/api/movies/${id}`)
        .then(resp =>
            setMovies(resp.data))
        .catch(err => console.log(err))
        .finally(push('/'))
    }

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete this movie?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input onClick={handleServerDelete} type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;