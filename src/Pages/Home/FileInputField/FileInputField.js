import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

const FileInputField = ({ handleFileSubmit, handleFileCheck, handleCross }) => {
    return (
        <section id='AddFolder' className=''>
            <div className='border-2 border-black rounded-sm w-fit m-2 p-2 flex items-center gap-2'>
                <form id='fileForm' className='flex items-center gap-2' onSubmit={handleFileSubmit}>
                    <input name='folderName' onChange={handleFileCheck} id='input' type="text" className='border-2 border-orange-400 p-2 rounded-sm w-60 text-lg' required />
                    <button type='submit' className='bg-black p-1 border-2 border-black rounded-sm'>
                        <BsCheckLg className='text-white text-2xl' />
                    </button>
                </form>
                <button className='border-2 border-black rounded-sm p-1' onClick={handleCross}>
                    <RxCross1 className='text-black text-2xl' />
                </button>
            </div>
        </section>
    );
};

export default FileInputField;