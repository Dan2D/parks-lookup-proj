import React, {useState} from 'react';
import {setState} from "../../actions/parksDataActions";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      setState: (state, stateFull) => {
          dispatch(setState(state, stateFull));
      }
    }
  }

function Searchbar({dropdown, stateAbb, states, setState}) {
    const [select, setSelect] = useState('state');
    const [selectVal, setSelectVal] = useState(stateAbb ? stateAbb : 'AL');
    const [toggleDropdown, setToggleDropdown] = useState(false);

    let statesArr = [];
    Object.keys(states).forEach(key => {
        statesArr.push(
            <option key={key} value={key} className="hero-option hero-option--state">
                {states[key].name}
            </option>
        )
    })

    function handleSearch(e) {
        if (select === "state" && selectVal !== stateAbb){
            let stateVal = document.getElementById("state-select").value;
            const stateFull = (states[stateVal].name).toString();
            setState(stateVal, stateFull);
        }
        else {
            console.log("parks")
        }
    }

    function handleDropdownSelect(e) {
        setSelect(e.target.dataset.value);
        document.querySelector(".dropdown--hero").blur();
    }

    function handleStateSelect(e) {
        setSelectVal(e.target.value);
    }

    return (
        <div className="searchbar-container">
            {select === "state" ? 
                <select name="state-selection" id="state-select" value={selectVal} className="hero-select hero-select--state" onChange={(e) => handleStateSelect(e)}>
                    {statesArr}
                </select> :
                <input type="search" name="hero-searchbar" className="searchbar searchbar--hero"/>
            }
            {dropdown &&
                <div className="dropdown dropdown--hero" tabIndex="-1" onClick={() => setToggleDropdown(!toggleDropdown)} onBlur={() => setToggleDropdown(!toggleDropdown)}>
                    <span>{select}</span>
                    <img className="dropdown__btn" src={require("../../assets/images/arrow-down.png")} alt=""/>
                {toggleDropdown && 
                        <div className="dropdown__menu">
                            <div className="dropdown__option" data-value="state" onClick={(e) => handleDropdownSelect(e)}>STATE</div>
                            <div className="dropdown__option" data-value="parks" onClick={(e) => handleDropdownSelect(e)}>PARKS</div>
                        </div>
                    }
                </div>
            }
            <Link to={`/state/${selectVal}`} className="btn btn--hero-go" onClick={(e) => handleSearch(e)}>EXPLORE</Link>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        states: state.parksData.states.byId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
