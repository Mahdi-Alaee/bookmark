function ExtentionBox() {
    return ( 
        <div>
            {/* image */}
            <img className="mb-12" src="/images/logo-chrome.svg" alt="browser logo" />

            {/* title */}
            <h5>Add to Chrome</h5>

            {/* version */}
            <p>Minimum Version 62</p>

            {/* dots & button */}
            <div>
                <a href="#">Add & Install Extension</a>
            </div>
        </div>
     );
}

export default ExtentionBox;