const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const socket = io(urlParams.get('ws'));

let Global = {
    selectedProfile: ""
}

let GlobalProfiles = {}

socket.on('connect', () => {
    socket.emit('fetch_profiles_data')
})

socket.on('profiles', (data) => {
    GlobalProfiles = data["profiles"]
    SetupControls(GlobalProfiles)
    UpdateButtons()
})

window.addEventListener("load", () => {
    CreateButtons(socket)
})
