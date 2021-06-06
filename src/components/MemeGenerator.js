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

        //binding is necessary for "this" to work in the callback
        this.handleSubmit = this.handleSubmit.bind(this)
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

    //class method that is invoked onSubmit of form element
    handleSubmit(event) {
        //since form is submitted, event.preventDefault is called so that the page is not refreshed:
        event.preventDefault()

        //picking a random integer between 0 and last index of allMemeImgs array
        const randomInt = Math.floor(Math.random() * this.state.allMemeImgs.length)
        //grabbing the url of a meme at a random index of the allMemeImgs array
        const randomMemeUrl = this.state.allMemeImgs[randomInt].url

        //setting the randomImg property to the randomly picked meme's url,
        //which will be plugged into the <img /> as a src="{randomImg}":
        this.setState(
            {
            randomImg : randomMemeUrl
            }
        )
    }

    render() {
        return (
            <>
                {/* onSubmit on form element was used vs. onClick on button (better in terms of semantic HTML) */}
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                   <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="randomly generated meme"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </>
        )
    }
}

export default MemeGenerator
