import React from 'react';
import '../App.css';

const pretext = () => {
    const pre = String.raw`
---------------------------------------------------------------------
        
    ____                  _ _          ____                      
    |  _ \  ___  ___ _ __ (_| | ____ _ / ___| __ _ _ __ ___   ___ 
    | | | |/ _ \/ _ | '_ \| | |/ / _' | |  _ / _' | '_ ' _ \ / _ \
    | |_| |  __|  __| |_) | |   | (_| | |_| | (_| | | | | | |  __/
    |____/ \___|\___| .__/|_|_|\_\__,_ \____|\__,_|_| |_| |_|\___|
        
        Let's play this awesome deepika's game
        Re-type the number you see below. Ez right?
    
---------------------------------------------------------------------`;
    return(
        <div>
            <pre>
                {pre}
            </pre>
            <a className="app__author" href="https://www.facebook.com/rohan18111995" target="_blank">by @rohan</a>
        </div>
    );
};

export default pretext;