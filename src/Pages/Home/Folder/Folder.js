import React from 'react';
import { AiOutlineFolderOpen, AiOutlinePlus } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';

const Folder = ({ fil, handleDel }) => {
    return (
        <div className='group/item p-2 text-xl font-medium mb-2'>
            <div className='flex items-center gap-2'>
                <AiOutlineFolderOpen className='text-2xl' />
                <p>{fil[0].rootFolder}</p>
                <div className="group/edit invisible group-hover/item:visible ...">
                    <div className='flex items-center gap-2 '>
                        <button className='border-2 border-black rounded-full p-1 bg-black'>
                            <AiOutlinePlus className='text-white text-xl font-bold' />
                        </button>
                        <button onClick={() => handleDel(fil[0].id)} className='border-2 border-black rounded-full p-1 bg-black'>
                            <ImBin2 className='text-white text-xl font-bold' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Folder;