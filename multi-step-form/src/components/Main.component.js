import React, { useState } from "react";
import Step1 from "./Step1.component";
import Step2 from "./Step2.component";
import Step3 from "./Step3.component";
import Confirm from "./Confirm.component";

const Main = () => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        jobTitle: "",
        yearsExp: "",
        location: "",
        about: "",
        workRemote: false,
        workFull: false,
        workPart: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        type === "checkbox"
            ? setValues({ ...values, [name]: checked })
            : setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStep(() => step + 1);
    };

    if (step === 1) {
        return (
            <div>
                <div className="container">
                    <h2 className="accent">
                        Multi-Step Form Using React Hooks
                    </h2>
                    <h2>Step {step}</h2>
                    <Step1
                        values={values}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        );
    } else if (step === 2) {
        return (
            <div className="container">
                <h2>Step {step}</h2>
                <Step2
                    values={values}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    step={step}
                    setStep={setStep}
                />
            </div>
        );
    } else if (step === 3) {
        return (
            <div className="container">
                <h2>Step {step}</h2>
                <Step3
                    values={values}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    step={step}
                    setStep={setStep}
                />
            </div>
        );
    } else if (step === 4) {
        return (
            <div className="container">
                <Confirm step={step} values={values} />
            </div>
        );
    }
};

export default Main;
