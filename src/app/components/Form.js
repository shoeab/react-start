/**
 * Created by shoeab on 9/7/16.
 */
import React from "react";

export const Form = (props)=> {
        return(
            <div className="login">
                
                <h1>{props.formText}</h1>
                <form>
                    <input name="text" label="Email" type="text" placeholder="Email" />
                    <input name="password" label="Password" type="password" placeholder="Password"/>
                    <button type="submit" value="Login" >Login </button>
                    
                </form>
            </div>
        );
};