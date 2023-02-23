import React from 'react';
import { AiOutlineFolderOpen, AiOutlinePlus } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';
import FileInputField from '../FileInputField/FileInputField';

const RootFolder = ({ Fol, handleDelete, handleCross }) => {
    const addButton = (event) => {
        event.preventDefault();
        const addAFolderToRootDiv = document.getElementById("AddFolder");
        addAFolderToRootDiv.style.display = "flex";

    }
    const handleFile = (id) => {
        const addAFolderToRootDiv = document.getElementById("plus");
        addAFolderToRootDiv.style.display = "flex";
        addAFolderToRootDiv.style.gap = "4px";
    }
    return (
        <div className='group/item p-2 text-xl font-medium'>
            <div className='flex items-center gap-2'>
                <AiOutlineFolderOpen className='text-2xl' />
                <p>{Fol[0].rootFolder}</p>
                <div className="group/edit invisible group-hover/item:visible ...">
                    <div className='flex items-center gap-2 '>
                        <button onClick={() => addButton} className='border-2 border-black rounded-full p-1 bg-black'>
                            <AiOutlinePlus className='text-white text-xl font-bold' />
                        </button>
                        <button onClick={() => handleDelete(Fol[0].id)} className='border-2 border-black rounded-full p-1 bg-black'>
                            <ImBin2 className='text-white text-xl font-bold' />
                        </button>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* Child */}
                <div id='plus' className='flex items-center gap-4 mt-2 '>
                    <button onClick={() => handleFile(Fol[0].id)} className='border-2 rounded-sm border-black px-2 py-1'>File</button>
                    <button className='border-2 rounded-sm border-black px-2 py-1'>Folder</button>
                </div>
            </div>
            <FileInputField
                handleCross={handleCross}
                addButton={addButton}
                handleFile={handleFile}
            />
        </div>
    );
};

export default RootFolder;