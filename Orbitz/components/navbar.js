function navbar(){
    return `<div id="navbar">
    <div id="left">
        <div id="webimage"><a href="index.html"><img id="orbitzimg" src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2
            " alt=""></a>

        </div>
        <div id="navdropdown">
            <p id="pmoretravel">More travel</p>
            <select name="More travel" id="moretravel">
                <option value="select" ></option>
                <option value="abc" ><a href=""> Stays</a></option>
                <option value=""> <a href="">Flights</a> </option>
                <option value=""> <a href="">Packages</a> </option>
                <option value=""><a href="">Cars</a> </option>
                <option value=""><a href="">Cruises</a> </option>
                <option value=""><a href="">Things to do</a> </option>
                <option value=""><a href="">Deals</a> </option>
                <option value=""><a href="">Groups & meetings</a></option>
                <option value=""> <a href="">Travel Blog</a></option>
            </select>
        </div>
    </div>
    <div id="right">
        <p><a href="">Espanol</a> </p>
        <p><a href="">List your property</a> </p>
        <p><a href="">Support</a></p>
        <p><a href="">Trips</a></p>
        <p><a href="">Sign in</a></p>
    </div>
</div>`
}

export default navbar