import React, { useState } from 'react';
import { AiOutlineFolderOpen, AiOutlinePlus } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';
import FileInputField from '../FileInputField/FileInputField';
import { v4 as uuidv4 } from 'uuid';
import Folder from '../Folder/Folder';
import File from '../File/File';
import FolderInputField from '../FolderInputField/FolderInputField';

const RootFolder = ({ Fol, handleDelete }) => {
    const [newFile, setNewFile] = useState('');
    const [file, setFile] = useState([]);
    const [newFolder, setNewFolder] = useState('');
    const [folder, setFolder] = useState([]);

    const addButton = () => {
        const addButtonDiv = document.getElementById(`button-${Fol[0].id}`);
        addButtonDiv.style.display = "block";
    };
    const handleFile = () => {
        const addFileButtonDiv = document.getElementById(`button-${Fol[0].id}`);
        addFileButtonDiv.style.display = "none";
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
        const fileName = form.value;
        const folder = {
            id: uuidv4(),
            rootFolder: fileName,
            children: [file]
        }
        setNewFile([folder]);
    };
    const handleCross = () => {
        const fileInputFieldDiv = document.getElementById(`fileInput-${Fol[0].id}`);
        fileInputFieldDiv.style.display = "none";
        document.getElementById("fileForm").reset();
        const folderInputFieldDiv = document.getElementById(`folderInput-${Fol[0].id}`);
        folderInputFieldDiv.style.display = "none";
        document.getElementById("folderForm").reset();
    };
    const handleDel = (id) => {
        const remainingFile = file.filter(fil => fil[0].id !== id);
        setFile(remainingFile);
        const remainingFolder = folder.filter(fold => fold[0].id !== id);
        setFolder(remainingFolder);
    };
    const handleFolder = () => {
        const addFolderDiv = document.getElementById(`button-${Fol[0].id}`);
        addFolderDiv.style.display = "none";
        const fileInputFieldDiv = document.getElementById(`folderInput-${Fol[0].id}`);
        fileInputFieldDiv.style.display = "block";
    };
    const handleFolderSubmit = (event) => {
        event.preventDefault();
        const folderInputFieldDiv = document.getElementById(`folderInput-${Fol[0].id}`);
        folderInputFieldDiv.style.display = "none";
        setFolder([...folder, newFolder]);
        const form = event.target;
        form.reset();
    };
    const handleFolderCheck = (event) => {
        const form = event.target;
        const folderName = form.value;
        const folder = {
            id: uuidv4(),
            rootFolder: folderName,
            children: [file]
        }
        setNewFolder([folder]);
    };

    return (
        <div className='p-2 text-xl font-medium'>
            <div className='group/item '>
                <div className='flex items-center gap-3'>
                    <AiOutlineFolderOpen className='text-2xl' />
                    <p>{Fol[0].rootFolder}</p>
                    <div className="group/edit invisible group-hover/item:visible ...">
                        <div className='flex items-center gap-3 '>
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
            <ul className='block ml-6'>
                <li className=''>
                    {
                        file.map(fil => <File
                            key={fil[0].id}
                            fil={fil}
                            handleDel={handleDel}
                        />)
                    }
                </li>
                <li className=''>
                    {
                        folder.map(fold => <Folder
                            key={fold[0].id}
                            fold={fold}
                            handleDel={handleDel}
                        />)
                    }
                </li>
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
                    handleFileCheck={handleFileCheck}
                />
            </div>
            <div id={`folderInput-${Fol[0].id}`} className='hidden'>
                <FolderInputField
                    handleFolderSubmit={handleFolderSubmit}
                    handleCross={handleCross}
                    handleFolderCheck={handleFolderCheck}
                />
            </div>
        </div>
    );
};

export default RootFolder;