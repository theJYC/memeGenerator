import React from "react"

//class-based component since it will need to pull API data
//and also storing that data in state:

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => this.setState(
            {
            allMemeImgs : response.data.memes
            }
        ))
    }

    //handleChange is going to be equipped with default event parameter:
    handleChange(event) {
        let { name, value } = event.target

        this.setState(
            {
                [name]: value
            }
        )
    }

    render() {
        return (
            <>
                <form className="meme-form">

                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                   <input
                        type="text"
                        name="topText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>
            </>
        )
    }
}

export default MemeGenerator
