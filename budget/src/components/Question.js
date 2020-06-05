import React, { Fragment, useState } from "react";

import Error from './Error'

const Question = () => {
 
    const [bugdet, setBudget] = useState(0);  

    const [error, setError] = useState(false);

    const defineBudget = e => {
        setBudget( parseInt (e.target.value) )
    }

    const addBudget = e => {
        e.preventDefault();

        if(bugdet < 1 || isNaN ( bugdet )){
            setError(true);
            return;
        }

        setError(false);
    }

    return (
        <Fragment>
            <h2>Put your budget</h2>

            { error ? <Error message= "The budget is incorrect" /> : null}

            <form onSubmit= {addBudget} >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Set your budget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define your Budget"
                />
            </form>
        </Fragment>
    );
};

export default Question;
