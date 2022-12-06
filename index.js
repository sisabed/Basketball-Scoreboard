let scoreHomeEl = document.getElementById("scoreHome-el")
let scoreGuestEl = document.getElementById("scoreGuest-el")
// let freeThrowEl = document.getElementById("freeThrow-el")
// let fieldGoalsEl = document.getElementById("fieldGoals-el")
// let threePointerEl = document.getElementById("threePointer-el")

let countH = 0
let countG = 0
// for Home
function freeThrowH()
{
    countH += 1
    scoreHomeEl.textContent = countH
}
function fieldGoalsH()
{
    countH += 2
    scoreHomeEl.textContent = countH
}
function threePointerH()
{
    countH += 3
    scoreHomeEl.textContent = countH
}

//For Guest
function freeThrowG()
{
    countG += 1
    scoreGuestEl.textContent = countG
}
function fieldGoalsG()
{
    countG += 2
    scoreGuestEl.textContent = countG
}
function threePointerG()
{
    countG += 3
    scoreGuestEl.textContent = countG
}
let saveCountHome=0
let saveCountGuest=0
let saveScoreGuest = document.getElementById("guestCount")
let saveScoreHome = document.getElementById("homeCount")
function saveScore()
{
    saveCountHome = countH + " - "
    saveScoreHome.textContent += saveCountHome
    saveCountGuest = countG + " - "
    saveScoreGuest.textContent += saveCountGuest
    countH=0
    scoreHomeEl.textContent=countH
    countG=0
    scoreGuestEl.textContent=countG


}