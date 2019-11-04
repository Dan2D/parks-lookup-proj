import React, {useState} from 'react';

function Searchbar({dropdown}) {
    const [select, setSelect] = useState('state');
    const [toggleDropdown, setToggleDropdown] = useState(false);

    function handleDropdownSelect(e) {
        setSelect(e.target.dataset.value);
        document.querySelector(".dropdown--hero").blur();
    }

    return (
        <div className="searchbar-container">
            <input type="search" name="hero-searchbar" className="searchbar searchbar--hero"/>
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
        </div>
    )
}

export default Searchbar
