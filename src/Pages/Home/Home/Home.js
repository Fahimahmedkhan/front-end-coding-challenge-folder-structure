import React, { useEffect, useState } from 'react';
import RootFolder from '../RootFolder/RootFolder';
import RootInputField from '../RootInputField/RootInputField';


const Home = () => {
    const [newFolder, setNewFolder] = useState('');
    const [Folder, setFolder] = useState([]);
    useEffect(() => {

    });

    const handleAddAFolderToRoot = () => {
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "block";

    };

    const handleSubmit = event => {
        event.preventDefault();
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "none";
        setFolder([...Folder, newFolder]);
        const form = event.target;
        form.reset();
    };

    const handleCheck = event => {
        const form = event.target;
        const rootFolderName = form.value;
        const root = {
            id: Math.floor(Math.random() * 100),
            rootFolder: rootFolderName
        }
        setNewFolder([root]);
    }

    const handleCross = () => {
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "none";
        document.getElementById("form").reset();
    };

    const handleDelete = (id) => {
        console.log(id);
        const remaining = Folder.filter(Fol => Fol[0].id !== id);
        setFolder(remaining);
    }
    return (
        <div className='mt-4 px-8'>
            <button className='text-xl font-medium text-white p-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg' onClick={handleAddAFolderToRoot}>Add A Folder To Root</button>
            <ul className='block'>
                {
                    Folder && <li className='p-4'>
                        {
                            Folder.map(Fol => <RootFolder
                                key={Fol[0].id}
                                Fol={Fol}
                                handleDelete={handleDelete}
                            />)
                        }
                    </li>
                }
            </ul>

            <RootInputField
                handleSubmit={handleSubmit}
                handleCheck={handleCheck}
                handleCross={handleCross}
            />
        </div>
    );
};

export default Home;