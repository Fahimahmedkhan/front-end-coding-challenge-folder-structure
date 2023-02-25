import React, { useState } from 'react';
import RootFolder from '../RootFolder/RootFolder';
import RootInputField from '../RootInputField/RootInputField';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [newRootFolder, setNewRootFolder] = useState('');
    const [rootFolder, setRootFolder] = useState([]);

    const [newFile, setNewFile] = useState('');
    const [file, setFile] = useState([]);

    const handleAddAFolderToRoot = () => {
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "block";

    };

    const handleSubmit = event => {
        event.preventDefault();
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "none";
        setRootFolder([...rootFolder, newRootFolder]);
        const form = event.target;
        form.reset();
    };

    const handleCheck = event => {
        const form = event.target;
        const rootFolderName = form.value;
        const root = {
            id: uuidv4(),
            rootFolder: rootFolderName,
            children: [file]
        }
        setNewRootFolder([root]);
    }

    const handleCross = () => {
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "none";
        document.getElementById("form").reset();
    };

    const handleDelete = (id) => {
        const remaining = rootFolder.filter(Fol => Fol[0].id !== id);
        setRootFolder(remaining);
    }
    return (
        <div className='mt-4 px-8'>
            <button className='text-xl font-medium text-white p-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg' onClick={handleAddAFolderToRoot}>Add A Folder To Root</button>
            <ul className='block'>
                {
                    rootFolder && <li className='p-4'>
                        {
                            rootFolder.map(Fol => <RootFolder
                                key={Fol[0].id}
                                Fol={Fol}
                                handleDelete={handleDelete}
                            />)
                        }
                    </li>
                }
            </ul>

            <RootInputField
                newFile={newFile}
                setNewFile={setNewFile}
                file={file}
                setFile={setFile}
                handleSubmit={handleSubmit}
                handleCheck={handleCheck}
                handleCross={handleCross}
            />
        </div>
    );
};

export default Home;