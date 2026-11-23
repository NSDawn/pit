/* ## ## ## ## ## ## ## ## ## ## ##
##.ACHIEVEMENTS                  ## 
## ## ## ## ## ## ## ## ## ## ## */

// This script redirects the user to the specified site without maintaining the current page's history.
// Example usage:
// <a href="https://example.com" onclick="return quietRedirect(this.href)">Click me</a>

// The `return` keyword is really important! Returning false prevents the a tag from executing its default behavior.

function quietRedirect(url) {
    try {
        window.location.replace(url);
        return false;
    } catch (error) {
        return true;
    }
}

/* ## ## ## ## ## ## ## ## ## ## ##
##.ACHIEVEMENTS                  ## 
## ## ## ## ## ## ## ## ## ## ## */
// https://skinmc.net/achievement

function checkAchievementGrimyHands(v) {
    if (localStorage.getItem("pit.achievementGrimyHands") !== "1") {
        if (localStorage.getItem("pit.dirtyHands") === "1") {
            localStorage.setItem("pit.achievementGrimyHands", 1);
            notifyAchievement();
            console.log("Given achievement Grimy Hands");
        }
    }
}
/*
<div class="achievement grimy-hands hidden" aria-hidden>
    <img src="assets/grimy_hands.png">
</div>
<script>checkAchievementGrimyHands()</script>
*/

function notifyAchievement() {
    const e = document.querySelector(".achievement");
    console.log(e);
    e.classList.remove("hidden");
}

/* ## ## ## ## ## ## ## ## ## ## ##
##.OTHER LOCAL STORAGE STUFF     ## 
## ## ## ## ## ## ## ## ## ## ## */

function setDirtyHands(v) {
    localStorage.setItem("pit.dirtyHands", v);
}
