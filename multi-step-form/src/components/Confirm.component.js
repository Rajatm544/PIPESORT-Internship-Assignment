import React from "react";

const Confirm = (props) => {
    const { values } = props;
    let jobTypes = "";
    values.workFull ? (jobTypes += "Full Time, ") : (jobTypes += "");
    values.workPart ? (jobTypes += "Part Time, ") : (jobTypes += "");
    values.workRemote ? (jobTypes += "Remote, ") : (jobTypes += "");
    jobTypes = jobTypes.replace(/,\s*$/, "");
    return (
        <div>
            <h3>The Details you have entered are as follows:</h3>
            <h4>Name:</h4> <p>{values.firstName + " " + values.lastName}</p>
            <h4>Gender:</h4> <p>{values.gender}</p>
            <h4>Job Title:</h4> <p>{values.jobTitle}</p>
            <h4>Years of Experience:</h4> <p>{values.yearsExp}</p>
            <h4>Present location:</h4> <p>{values.location}</p>
            <h4>Preferred Job Type:</h4> <p>{jobTypes} </p>
            <h4>About yourself:</h4> <p>{values.about}</p>
        </div>
    );
};

export default Confirm;
