import React from "react"

//class-based component since it will need to pull API data
//and also storing that data in state:

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg"
        }
    }

    render() {
        return (
            <>
                <h1>MEME SECTION:</h1>
            </>
            )
    }
}

export default MemeGenerator
