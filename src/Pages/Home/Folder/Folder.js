import React from 'react';
import { AiOutlineFolderOpen, AiOutlinePlus } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';

const Folder = ({ fold, handleDel }) => {
    return (
        <div className='group/item p-2 pb-0 text-xl font-medium'>
            <div className='flex items-center gap-3'>
                <AiOutlineFolderOpen className='text-2xl' />
                <p>{fold[0].rootFolder}</p>
                <div className="group/edit invisible group-hover/item:visible ...">
                    <div className='flex items-center gap-2 '>
                        <button className='border-2 border-black rounded-full p-1 bg-black'>
                            <AiOutlinePlus className='text-white text-xl font-bold' />
                        </button>
                        <button onClick={() => handleDel(fold[0].id)} className='border-2 border-black rounded-full p-1 bg-black'>
                            <ImBin2 className='text-white text-xl font-bold' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Folder;