import React from "react";

const Step2 = (props) => {
    const handleChange = (event) => {
        props.onChange(event);
    };

    const handleSubmit = (event) => {
        props.onSubmit(event);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="jobTitle"
                        value={props.values.jobTitle}
                        onChange={handleChange}
                        required
                    >
                        <option value="" selected disabled hidden>
                            Choose your Job Title
                        </option>
                        <option value="Web Dev">
                            Full Stack Web Developer
                        </option>
                        <option value="Frontend Dev">Frontend Developer</option>
                        <option value="Backend Dev">Backend Developer</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="AI Engineer">AI Engineer</option>
                        <option value="Graphics Designer">
                            Graphics Designer
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="location"
                        value={props.values.location}
                        onChange={handleChange}
                        placeholder="Enter Your City"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="number"
                        name="yearsExp"
                        value={props.values.yearsExp}
                        onChange={handleChange}
                        min="0"
                        max="20"
                        placeholder="Enter Years of Experience"
                        required
                    />
                </div>
                <button className="btn btn-lg btn-next" type="submit">
                    Next
                </button>
                <button
                    className="btn btn-lg btn-back"
                    onClick={() => props.setStep(props.step - 1)}
                >
                    Back
                </button>
            </form>
        </div>
    );
};

export default Step2;
