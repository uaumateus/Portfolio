import React, {useState, useEffect} from 'react';
import './styles.css';

function NavBar() {
    const [buttonClass, setButtonClass] = useState("");
    const [navbarClass, setNavbarClass] = useState("");

    function toggleClassButton () {
        if(buttonClass === ""){
            setNavbarClass("show");
            setButtonClass("open");
        }else{
            setNavbarClass("hide");
            setButtonClass("");
        }
    }

    return (
        <div className={"Navbar " + navbarClass}>
            <div className="topContainer">
                <p>Mateus Santos</p>
                <div className={"hamburger " + buttonClass} onClick={toggleClassButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {navbarClass === "show" &&
                <div className="content">
                    <div className="box-1">
                        <div className="btn btn-one">
                            <span>Início</span>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="btn btn-one">
                            <span>Sobre</span>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="btn btn-one">
                            <span>Habilidades</span>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="btn btn-one">
                            <span>Trabalhos</span>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="btn btn-one">
                            <span>Sobre</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default NavBar;
