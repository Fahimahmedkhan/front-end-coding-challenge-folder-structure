import React, { useEffect, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { ImBin2 } from 'react-icons/im';
import { AiOutlineFolderOpen, AiOutlinePlus } from 'react-icons/ai';


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
        setNewFolder(form.value);

    }

    const handleCross = () => {
        const addAFolderToRootDiv = document.getElementById("AddAFolderToRoot");
        addAFolderToRootDiv.style.display = "none";
    }
    return (
        <div className='mt-4 px-8'>
            <button className='text-xl font-medium text-white p-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg' onClick={handleAddAFolderToRoot}>Add A Folder To Root</button>

            <ul className='block'>
                {
                    Folder && <li className='p-4'>
                        {
                            Folder.map(Fol => <div key={Fol} className='group/item p-2 text-xl font-medium'>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineFolderOpen className='text-2xl' />
                                    <p>{Fol}</p>
                                    <div class="flex items-center gap-2 group/edit invisible group-hover/item:visible ...">
                                        <button className='border-2 border-black rounded-full p-1 bg-black'>
                                            <AiOutlinePlus className='text-white text-xl font-bold' />
                                        </button>
                                        <button className='border-2 border-black rounded-full p-1 bg-black'>
                                            <ImBin2 className='text-white text-xl font-bold' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {/* Child */}
                                </div>
                            </div>)
                        }
                    </li>
                }
            </ul>

            <section id='AddAFolderToRoot' className='hidden'>
                <div className='border-2 border-black rounded-sm w-fit m-2 p-2 flex items-center gap-2'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input onChange={handleCheck} id='input' type="text" className='border-2 border-orange-400 p-2 rounded-sm w-60 text-lg' required />
                        <button type='submit' className='bg-black p-1 border-2 border-black rounded-sm'>
                            <BsCheckLg className='text-white text-2xl' />
                        </button>
                    </form>
                    <button className='border-2 border-black rounded-sm p-1' onClick={handleCross}>
                        <RxCross1 className='text-black text-2xl' />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;