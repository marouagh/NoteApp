const fs =  require ('fs')


const myNote = () =>{
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    
    } catch(err){
        return []
    }  
}
//addNote
const addingNote = (title, body) =>{
    
var notes = myNote()
    var note ={
                   title,
                   body
    }
    notes.push(note)
    fs.writeFileSync('notes.txt', JSON.stringify(notes))
}

//removeNote
const removingNote = (title) =>{
    var notes = myNote()
    const newNotes = notes.filter(note => title? note.title !== title: console.log('write someting to remove'))
    fs.writeFileSync('notes.txt', JSON.stringify(newNotes))
    }

//readNote
const readingNote = (title) =>{
    var notes = myNote()
    const newNotes = notes.filter(note =>note.title === title)
    console.log("-----------------------------------------------------------------------")
    console.log(`Title: ${newNotes[0].title} Body: ${newNotes[0].body}`)
    console.log("-----------------------------------------------------------------------")
    //console.log(newNotes[0])
}

//listingNote
const listingNote = () =>{
    var notes = myNote()
    notes.map(note =>{
        console.log("-----------------------------------------------------------------------")
        console.log(`Title: ${note.title} Body: ${note.body}` )
        console.log("-----------------------------------------------------------------------")
    })
    }

module.exports ={
    addingNote,
    removingNote,
    readingNote,
    listingNote
}