import React, { useState } from 'react';
import DragAndDropFile from '../../components/DragAndDropFile/DragAndDropFile';
import { uploadhysicalProduct } from '../../services/api/massUpload/uploadPhyscialProdcutService';

const MassUpload = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const [isChecked, setIsChecked] = useState(false); // Initialize state
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle the value
    }
    
    const uploadItem = () => {
        console.log(selectedOption);
        if (selectedOption === 'part') {
            uploadhysicalProduct(file);
        }
        else if (selectedOption === 'document') {
            console.log('Document');
        }

    }
    return (
        <div className="container">
            <div className="container mt-5" id="selectTypeDiv">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center "> {/* Add mx-auto class to center the div */}
                        <div className="form-group">
                            <label htmlFor="fileTypeSelect" className='mb-2'>Choose Operation:</label>
                            <select
                                id="fileTypeSelect"
                                className="form-control"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                <option value="">Select</option>
                                <option value="part">Part</option>
                                <option value="document">Document</option>
                                <option value="ebom">EBOM</option>
                                <option value="partdocconnect">Part Document Connect</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <a href="https://thewhitechamaleon.github.io/testrapp/images/Template.xlsx" download>Download Template</a>
                    </div>
                </div>
            </div>
            <div>
                <DragAndDropFile onchange={handleFileChange} />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked} // Bind the checkbox to state
                        onChange={handleCheckboxChange} // Handle changes
                    />Background
                </label>

            </div>
            <div className="d-flex justify-content-center m-5">
                <button className="btn btn-primary" onClick={uploadItem}>Submit</button>
            </div>
        </div>
    );
}

export default MassUpload;