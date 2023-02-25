import React, { useState } from 'react';
import { AiOutlineFolderOpen, AiOutlinePlus } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';
import FileInputField from '../FileInputField/FileInputField';
import { v4 as uuidv4 } from 'uuid';
import Folder from '../Folder/Folder';

const RootFolder = ({ Fol, handleDelete }) => {
    const [newFile, setNewFile] = useState('');
    const [file, setFile] = useState([]);

    const addButton = () => {
        const addButtonDiv = document.getElementById(`button-${Fol[0].id}`);
        addButtonDiv.style.display = "block";
    };
    const handleFile = (id) => {
        const addFileButtonDiv = document.getElementById(`button-${Fol[0].id}`);
        addFileButtonDiv.style.display = "none";
        const fileInputFieldDiv = document.getElementById(`fileInput-${Fol[0].id}`);
        fileInputFieldDiv.style.display = "block";
    };
    const handleFolder = (id) => {
        const addFolderDiv = document.getElementById(`button-${Fol[0].id}`);
        addFolderDiv.style.display = "none";
        const fileInputFieldDiv = document.getElementById(`fileInput-${Fol[0].id}`);
        fileInputFieldDiv.style.display = "block";
    };

    const handleFileSubmit = (event) => {
        event.preventDefault();
        const fileInputFieldDiv = document.getElementById(`fileInput-${Fol[0].id}`);
        fileInputFieldDiv.style.display = "none";
        setFile([...file, newFile]);
        const form = event.target;
        form.reset();
    };
    const handleFileCheck = (event) => {
        const form = event.target;
        const folderName = form.value;
        const folder = {
            id: uuidv4(),
            rootFolder: folderName,
            children: [file]
        }
        setNewFile([folder]);
    };
    const handleCross = () => {
        const fileInputFieldDiv = document.getElementById(`fileInput-${Fol[0].id}`);
        fileInputFieldDiv.style.display = "none";
        document.getElementById("fileForm").reset();
    };
    const handleDel = (id) => {
        const remaining = file.filter(fil => fil[0].id !== id);
        setFile(remaining);
    }
    return (
        <div className='p-2 text-xl font-medium mb-2'>
            <div className='group/item '>
                <div className='flex items-center gap-2'>
                    <AiOutlineFolderOpen className='text-2xl' />
                    <p>{Fol[0].rootFolder}</p>
                    <div className="group/edit invisible group-hover/item:visible ...">
                        <div className='flex items-center gap-2 '>
                            <button onClick={addButton} className='border-2 border-black rounded-full p-1 bg-black'>
                                <AiOutlinePlus className='text-white text-xl font-bold' />
                            </button>
                            <button onClick={() => handleDelete(Fol[0].id)} className='border-2 border-black rounded-full p-1 bg-black'>
                                <ImBin2 className='text-white text-xl font-bold' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className='block'>
                {
                    file && <li className='p-4'>
                        {
                            file.map(fil => <Folder
                                key={fil[0].id}
                                fil={fil}
                                handleDel={handleDel}
                            />)
                        }
                    </li>
                }
            </ul>
            <div id={`button-${Fol[0].id}`} className='hidden'>
                <div className='flex items-center gap-4 mt-2 '>
                    <button onClick={() => handleFile(Fol[0].id)} className='border-2 rounded-sm border-black px-2 py-1'>File</button>
                    <button onClick={() => handleFolder(Fol[0].id)} className='border-2 rounded-sm border-black px-2 py-1'>Folder</button>
                </div>
            </div>
            <div id={`fileInput-${Fol[0].id}`} className='hidden'>
                <FileInputField
                    handleFileSubmit={handleFileSubmit}
                    handleCross={handleCross}
                    addButton={addButton}
                    handleFileCheck={handleFileCheck}
                />
            </div>
        </div>
    );
};

export default RootFolder;