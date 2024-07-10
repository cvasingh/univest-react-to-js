import React from 'react'
import ReactDOM from 'react-dom';
import './output.css';
import './input.css';
import './index.css';
import { useState } from 'react';
export default function MainComponent() {
    const [formData, setFormData] = useState({
        programType: '',
        studyPermitExtension: '',
        visitingStudent: '',
        workPermit: '',
        prerequisiteCourse: '',
        residentPermit: '',
        familyMember: '',
    });

    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = Object.values(formData).reduce((acc, val) => acc + Number(val), 0);
        setResult(total);
    };
    return (
        <form onSubmit={handleSubmit} className="">
            <div className="space-y-2 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Please select the type of program you are applying for?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="programType"
                    value={formData.programType}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Preschool</option>
                    <option value="1">Primary school</option>
                    <option value="1">Secondary school</option>
                    <option value="0">Certificate</option>
                    <option value="0">Diploma</option>
                    <option value="0">Advanced Diploma</option>
                    <option value="0">Bachelors</option>
                    <option value="0">Graduate Certificate</option>
                    <option value="1">Masters</option>
                    <option value="1">PhD</option>
                </select>
            </div>

            <div className="space-y-2 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Are you applying for study permit extension?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="studyPermitExtension"
                    value={formData.studyPermitExtension}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>

            <div className="space-y-2 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Are you a visiting or exchange student studying at a DLI?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="visitingStudent"
                    value={formData.visitingStudent}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <p className="text-xs text-gray-500">DLI = Designated Learning Institution</p>
            </div>

            <div className={`space-y-2 overflow-hidden transition-all ${formData.studyPermitExtension === '1' ? 'max-h-0 mb-0' : 'max-h-20 mb-6'}`}>
                <label className="block text-sm font-medium text-gray-700">
                    Do you have a valid work permit?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="workPermit"
                    value={formData.workPermit}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled={formData.studyPermitExtension === '1'}
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>

            <div className="space-y-2 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Have you completed a course that is a prerequisite to you enrolling at a DLI?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="prerequisiteCourse"
                    value={formData.prerequisiteCourse}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <p className="text-xs text-gray-500">DLI = Designated Learning Institution</p>
            </div>

            <div className="space-y-2 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Do you have a valid temporary resident permit for at least 6 months?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="residentPermit"
                    value={formData.residentPermit}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>

            <div className="space-y-2 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Do you have a family member who is a temporary resident of Canada?
                    <span className="text-red-500"> (Required)</span>
                </label>
                <select
                    name="familyMember"
                    value={formData.familyMember}
                    onChange={handleChange}
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="" className="gf_placeholder">Please select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <p className="text-xs text-gray-500">A family member is a spouse, common-law partner, dependent child or dependent grandchild</p>
            </div>

            <div className="space-y-2 mb-6 hidden">
                <label className="block text-sm font-medium text-gray-700">
                    Result
                    <span className="text-red-500"> (Required)</span>
                </label>
                <input
                    type="text"
                    className="h-10 block w-full mt-1 border shodow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    readOnly
                    value={result}
                />
            </div>

            <div className="space-y-2 mb-6">
                <button
                    type="submit"
                    className="px-10 py-3 font-medium text-white bg-[#0462FE] rounded-full hover:bg-[#0464fee0] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>

            {result && (
                <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-gray-700">Total Value: {result}</p>
                </div>
            )}
        </form>
    )
}
window.addEventListener('load', () => {
    ReactDOM.render(<MainComponent />, document.getElementById('pal-form'));
});