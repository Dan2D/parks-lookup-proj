import React, {useState} from 'react';
import {setState} from "../../actions/parksDataActions";
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      setState: (state, stateFull) => {
          dispatch(setState(state, stateFull));
      }
    }
  }

//   TODO(Set explore btn to link and setup react router, then do prevent default on handle search)
function Searchbar({dropdown, states, setState}) {
    const [select, setSelect] = useState('state');
    const [toggleDropdown, setToggleDropdown] = useState(false);

    let statesArr = [];
    Object.keys(states).forEach(key => {
        statesArr.push(
            <option key={key} value={key} className="hero-option hero-option--state">
                {states[key].name}
            </option>
        )
    })

    function handleSearch() {
        if (select === "state"){
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

    return (
        <div className="searchbar-container">
            {select === "state" ? 
                <select name="state-selection" id="state-select" class="hero-select hero-select--state">
                    {statesArr}
                </select> :
                <input type="search" name="hero-searchbar" className="searchbar searchbar--hero"/>
            }
            <div class="dropdown dropdown--hero" tabIndex="-1" onClick={() => setToggleDropdown(!toggleDropdown)} onBlur={() => setToggleDropdown(!toggleDropdown)}>
                <span>{select}</span>
                <img class="dropdown__btn" src={require("../../assets/images/arrow-down.png")} alt=""/>
               {toggleDropdown && 
                    <div class="dropdown__menu">
                        <div class="dropdown__option" data-value="state" onClick={(e) => handleDropdownSelect(e)}>STATE</div>
                        <div class="dropdown__option" data-value="parks" onClick={(e) => handleDropdownSelect(e)}>PARKS</div>
                    </div>
                }
            </div>
            <button class="btn btn--hero-go" onClick={() => handleSearch()}>EXPLORE</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        states: state.parksData.states.byId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
