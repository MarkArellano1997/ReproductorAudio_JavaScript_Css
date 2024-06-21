const file = document.getElementById('file')
const audio = document.getElementById('audio')

const fileAdd = (file)=>{
    const audioFile = file.files[0]
    if (audioFile) {
        const objectUrl = URL.createObjectURL(audioFile)
        audio.src = objectUrl
    }
}