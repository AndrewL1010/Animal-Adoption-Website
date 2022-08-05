import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
function Documentation() {


    return (
        <div className="Documentation-page">
            <h2 className="login-header"><Link className="home" to="/home">Home</Link> Documentation</h2>

            <ul class="doc-container">
                <div class="documentation-container">
                    <h2 class="documentation-headers">Login Page</h2>
                    <ul>
                        <li>At first Load users will be brought to the Login Page, you can type any Username or Password to Login, <br></br>
                            there is an onchange listener that updates the username to display at the header</li>


                        <li>After you click Login, you will be brought to the HomePage.</li>
                    </ul>
                </div>
                <div class="documentation-container">
                    <h2 class="documentation-headers">Homepage</h2>
                    <ul>
                        <li>At first load there wil be only 6 animals displayed for adoption from an API.</li>
                        <li> Yop left will be a set of filter buttons.</li>
                        <li> Each animal will have their own "Adopt Now" and "edit details" button. And an X at the top right of the animal.</li>
                        <li>Bottom right of the page has an Add Animal" button</li>
                        <br></br><br></br>


                        <li>Adopt Now Button</li>
                        <ul>
                            <li>Clicking Adopt Now will take you to the application page</li>
                        </ul>

                        <li>Edit Details Button</li>
                        <ul>
                            <li>A modal will pop up with a form for you to edit a few animal details.</li>
                            <li>Clicking the "save changes" button will update the animal deatils</li>
                            <li>Clicking the exit button at the top right of the modal will exit the modal and will not save the changes made in the input areas.</li>

                        </ul>

                        <li>X button of each animal container</li>
                        <ul>
                            <li>Clicking the X will remove the animal from adoption.</li>
                        </ul>


                        <li>Add Animal button</li>
                        <ul>
                            <li> adds one new animal to the page by consuming information from an API</li>
                        </ul>
                    </ul>
                </div>
                <div class="documentation-container">
                    <h2 class="documentation-headers">Application Page</h2>

                    <ul>
                        <li>There will be a form for you to enter your information for the application to adopt an animal</li>
                        <li>Clicking submit will open up a modal that alerts the user that the application has been successful. When the modal closes, you will be taken back to the homepage</li>
                    </ul>
                </div>

                <div class="documentation-container">
                    <h2 class="documentation-headers">Sources</h2>
                    <ul>
                        <li>Pictures/Info of all adoptable animals</li>
                        <ul>
                            <li><a class="documentation-links" href="https://zoo-animal-api.herokuapp.com/" target="_blank">Source of the API</a></li>
                        </ul>
                        <li>Modals</li>
                        <ul>
                            <li>I used React Bootstraps Vertically Centered Modal Component found <a class="documentation-links" href="https://react-bootstrap.github.io/components/modal/" target="_blank">here</a></li>
                        </ul>
                    </ul>
                </div>

            </ul>







        </div>

    );
}

export default Documentation;