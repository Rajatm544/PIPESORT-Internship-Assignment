import React from "react";

const Step3 = (props) => {
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
                    <label>What types of job offer are you looking for?</label>{" "}
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="workFull"
                            checked={props.values.workFull}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Full-time</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="workPart"
                            checked={props.values.workPart}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Part-time</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="workRemote"
                            checked={props.values.workRemote}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Remote</label>
                    </div>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        name="about"
                        value={props.values.about}
                        onChange={handleChange}
                        placeholder="Tell Us About Yourself..."
                        rows="5"
                        required
                    />
                </div>
                <button className="btn btn-lg btn-next" type="submit">
                    Confirm
                </button>
                <button
                    className="btn btn-lg btn-back"
                    type="button"
                    onClick={() => props.setStep(props.step - 1)}
                >
                    Back
                </button>
            </form>
        </div>
    );
};

export default Step3;
