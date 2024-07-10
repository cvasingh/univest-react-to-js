import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './output.css';
import './input.css';
import './index.css';

export default function MainComponent() {
    const [formData, setFormData] = useState({
        countryOfResidence: '',
        studentDirectStream: '',
        program: '',
        highestEducation: '',
        englishTest: '',
        ieltsScore: '',
        pteScore: '',
        email: '',
    });

    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculations for the form points (assuming example logic)
        let total = 0;
        if (formData.program) total += Number(formData.program);
        if (formData.highestEducation) total += Number(formData.highestEducation);
        if (formData.englishTest) total += Number(formData.englishTest);
        if (formData.ieltsScore) total += Number(formData.ieltsScore);
        if (formData.pteScore) total += Number(formData.pteScore);
        setResult(total);
    };
    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        What is your country of residence? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="countryOfResidence"
                        value={formData.countryOfResidence}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select</option>
                        {/* Options */}
                        <option value="-8">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="-3">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="-3">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="-3">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="-3">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="0">Canada</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="-1">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos Islands">Cocos Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="-6">Congo</option>
                        <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaçao">Curaçao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czechia">Czechia</option>
                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="-5">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="-8">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Eswatini">Eswatini</option>
                        <option value="-6">Ethiopia</option>
                        <option value="Falkland Islands">Falkland Islands</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="-6">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="-6">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="-7">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="-6">Haiti</option>
                        <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                        <option value="Holy See">Holy See</option>
                        <option value="Honduras">Honduras</option>
                        <option value="-1">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="-3">India</option>
                        <option value="-2">Indonesia</option>
                        <option value="-7">Iran</option>
                        <option value="-9">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="-6">Kazakhstan</option>
                        <option value="-6">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                        <option value="-9">Korea, Republic of</option>
                        <option value="-4">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="-7">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="-8">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="-8">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="-1">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="-6">Mozambique</option>
                        <option value="-6">Myanmar</option>
                        <option value="-6">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="-6">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="-8">Niger</option>
                        <option value="-5">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="North Macedonia">North Macedonia</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="-7">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="-6">Palestine, State of</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="-4">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="-5">Rwanda</option>
                        <option value="Réunion">Réunion</option>
                        <option value="Saint Barthélemy">Saint Barthélemy</option>
                        <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="-7">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                        <option value="-8">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="-7">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria Arab Republic">Syria Arab Republic</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, the United Republic of">Tanzania, the United Republic of</option>
                        <option value="-4">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Türkiye">Türkiye</option>
                        <option value="US Minor Outlying Islands">US Minor Outlying Islands</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="-5">Venezuela</option>
                        <option value="-5">Vietnam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="-6">Zambia</option>
                        <option value="-6">Zimbabwe</option>
                        <option value="Åland Islands">Åland Islands</option>
                    </select>
                </div>

                <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        Will you be applying under the Student Direct Stream (SDS)? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="studentDirectStream"
                        value={formData.studentDirectStream}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select</option>
                        <option value="0">Yes</option>
                        <option value="-10">No</option>
                    </select>
                </div>

                <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        Which program are you applying for? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select</option>
                        <option value="1">Certificate</option>
                        <option value="1">Diploma</option>
                        <option value="1">Advanced Diploma</option>
                        <option value="2">Bachelors</option>
                        <option value="3">Graduate Certificate</option>
                        <option value="3">Masters</option>
                        <option value="4">PhD</option>
                    </select>
                </div>

                <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        What will be your highest education at the time of your application? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="highestEducation"
                        value={formData.highestEducation}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select</option>
                        <option value="0">Grade 12</option>
                        <option value="1">Diploma</option>
                        <option value="2">Bachelors</option>
                        <option value="3">Masters</option>
                        <option value="4">PhD</option>
                    </select>
                </div>

                <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        Which English assessment test did you appear for? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="englishTest"
                        value={formData.englishTest}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select</option>
                        <option value="0">IELTS</option>
                        <option value="-2">PTE</option>
                        <option value="-4">Other</option>
                    </select>
                </div>

                <div className={`space-y-2 overflow-hidden transition-all ${formData.englishTest === '0' ? 'max-h-20 mb-6' : 'max-h-0 mb-0'}`}>
                    <label className="block text-sm font-medium text-gray-700">
                        What is your overall IELTS score? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="ieltsScore"
                        value={formData.ieltsScore}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select your IELTS score</option>
                        <option value="0">9</option>
                        <option value="-1">8</option>
                        <option value="-4">7</option>
                        <option value="-7">6</option>
                        <option value="-20">5</option>
                        <option value="-25">4</option>
                        <option value="-30">3</option>
                        <option value="-35">2</option>
                        <option value="-38">1</option>
                    </select>
                </div>

                <div className={`space-y-2 overflow-hidden transition-all ${formData.englishTest === '-2' ? 'max-h-20 mb-6' : 'max-h-0 mb-0'}`}>
                    <label className="block text-sm font-medium text-gray-700">
                        What is your overall PTE score? <span className="text-red-500">(Required)</span>
                    </label>
                    <select
                        name="pteScore"
                        value={formData.pteScore}
                        onChange={handleChange}
                        className="h-10 block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="" className="gf_placeholder">Please select your PTE score</option>
                        <option value="0">85-90</option>
                        <option value="-2">76-84</option>
                        <option value="-5">59-75</option>
                        <option value="-7">43-58</option>
                        <option value="-10">30-42</option>
                        <option value="-10">10-29</option>
                    </select>
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
        </div>
    )
}

// window.addEventListener('load', () => {
//     ReactDOM.render(<MainComponent />, document.getElementById('study-permit'));
// });