import React from "react";

const Step1 = (props) => {
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
                    {/* <label>First Name </label> */}
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="Enter Your First Name"
                        value={props.values.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Enter Your Last Name"
                        value={props.values.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.values.gender === "female"}
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.values.gender === "male"}
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="prefer not to say"
                        checked={props.values.gender === "prefer not to say"}
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label">
                        Prefer Not To Say
                    </label>
                </div>
                <br />
                <button className="btn btn-lg btn-next" type="submit">
                    Next
                </button>
            </form>
        </div>
    );
};

export default Step1;
