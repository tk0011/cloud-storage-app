import React, {useState} from 'react';
import {motion} from 'framer-motion'
import {database} from '../Firebase'
import {useAuth} from '../Contexts/AuthContext'


const AddFolder = () => {

    const [name, setName] = useState('')

    const {currentUser} = useAuth()

    const handleModal = (e) => {
        e.preventDefault();
        document.getElementById('modal1').classList.toggle('open');
        document.getElementsByTagName("BODY")[0].classList.toggle('modal-open')
    }

    const handleChange = (e) => {
        setName(() => e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // if(currentFolder === null) return ;

        database.folders.add({
            name : name,
            // parentId : currentFolder.id,
            userId: currentUser.uid,
            // path  ,
            createdAt : database.getCurrentTimestamp()
        })
        setName('')
        document.getElementById('modal1').classList.remove('open')
        document.getElementsByTagName("BODY")[0].classList.remove('modal-open')

    }

    return (
        <div className="container">
         <button  onClick={handleModal} data-target="modal1" class="btn modal-trigger btn-floating btn-large waves-effect waves-light add-button"><i class="material-icons">add</i></button>
        <div
        id="modal1" class="modal">
          <form onSubmit={handleSubmit}>
                <div class="modal-content">
                <div className="input-field">
                        <input id="name" value={name} type="text" className="validate" placeholder="Folder name"  required onChange = {handleChange} />
                </div>
                </div>
                <div class="modal-footer">
                    <button classname="btn waves-effect waves-light" onClick={handleModal}>Close</button>
                    <button classname="btn waves-effect waves-light">Add Folder</button>
                </div>
          </form>
        </div>
        </div>
    )
}

export default AddFolder
