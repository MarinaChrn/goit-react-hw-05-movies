import { useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "./Searchbox.styled";
import PropTypes from "prop-types";

const Searchbox = ({valueParams, onSubmit})=> {
    const [value, setValue] = useState(valueParams)

    const onHandleSubmit = (e)=> {
        e.preventDefault();
        if (value.length!==0) {
            onSubmit(value.toLowerCase());
            setValue('');
        }
    }

    const onHandleChange = (e) => {
        (e.target.value!==" ")&&setValue(e.target.value)
    }

    const onHandleClear = (e) =>  {
        
    }

    return (
        <StyledForm onSubmit={(e)=> {onHandleSubmit(e)}}>
            <StyledInput type="text" value={value} placeholder="Write title of film" onChange={e=>onHandleChange(e)}/>
            <StyledButton type="submit" onClick={e=>onHandleClear(e)}>Search</StyledButton>
        </StyledForm>
        
    )
}

export default Searchbox;
Searchbox.propTypes = {
    valueParams: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}