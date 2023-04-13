import React, { useState } from 'react';

function Wordcount() {
    const [word,setWordCount] = useState(0);
    const [letter,setLetterCount] = useState(0);
    const [paragraph,setParagraphCount] = useState(0);
    const [text,setText] =useState(" ");

    const handleChange = (e) => {
        const newText = e.target.value.trim();
        setText(newText);
        setWordCount(newText.length);
        
          

        const newLetter = newText.split(" ");
        const filterNewLetter = newLetter.filter((words) => words !== "")
        setLetterCount(filterNewLetter.length)

  
    } 
    
    const handleChangeParagraph = (e) => {
        if(e.target.value === " "){
            setParagraphCount(0)
        } else{
            setParagraphCount (e.target.value.split('\n').length);
        }
    }

    return (
        <div className='container'>
            <h1><i class="fa-solid fa-book"></i>Work Counter</h1>
            <div className='item'>
            <p><i class="fa-sharp fa-solid fa-pen-nib"></i> Word : {word} </p>
            <p><i class="fa-sharp fa-solid fa-pen"></i> Letter : {letter}</p>
            <p><i class="fa-solid fa-copy"></i> Paragraph : {paragraph}</p>
            </div>
            <textarea
             onChange={ (e) => {
             handleChange (e)
             handleChangeParagraph (e)
            }
            }
             id="textInput"
             cols="30"
             rows="10"
             placeholder='Enter/Paster text here '
             > 
            </textarea>
            <div className='btn'>
                <button>Click to Uppercase</button>
                <button>Click to Lowpercase</button>
            </div>
        </div>
    );
}

export default Wordcount;