
function Submission() {
    return (
        <div class="submission">
            <h2 class="subheader">Add a Partner</h2>
            <form class="submission-box" id="partner-form">
                <div class="submission-box-text-inputs">
                    <input type="text" id="partner-name" name="partner-name" placeholder="partner name" size="100" required></input>
                    <br></br>
                    <input type="text" id="partner-logo-src" name="partner-logo-src" placeholder="partner logo source" size="100" required></input>
                    <br></br>
                    <textarea name="partner-desc" id="partner-desc" placeholder="partner description" maxlength="1200" rows="10" cols="100" form="partner-form" required></textarea>
                </div>
                <br></br>
                <input type="checkbox" id="activity" name="activity"></input>
                <label for="acitivity">active?</label>
                <br></br>
                <input type="submit" id="partner-submit" value="submit"></input>
            </form>
        </div>
    )
}

export default Submission;