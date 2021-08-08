import * as React from "react";
import './component.css'

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            break: <br></br>,
            disabled: '',
            disabledLabel: 'block',
            disabledLabelInfo: 'inline'
        }

    }
   
    render(){
        const globalStyle = {
            display: this.state.display,
        }
        const labelDisplay = {
            display: this.state.disabledLabel
        }
        const labelDisplayInfo = {
            display: this.state.disabledLabelInfo
        }
        return(
            <div className="container">
                <div style={globalStyle} className="labelContainer">
                    <form>
                        <div>
                        <label><span style={labelDisplay}>Label<span style={labelDisplayInfo}>(Required)</span></span> 

                            <input  type='text'  disabled={this.state.disabled} ></input>
                        
                            
                                <label style={labelDisplay}><span style={labelDisplay}>Label<span style={labelDisplayInfo}>(Required)</span></span></label>
                                
                                <label className="switch">
                                    <input disabled={this.state.disabled} type="checkbox">
                                    </input>
                                    <span className="slider round">
                                    </span>
                                </label>
                                
                                <label>Engage the Hyperdrive</label>
                                
                            <div>
                        
                            <label className="switch">
                                <input disabled={this.state.disabled} type="checkbox">
                                </input>
                                <span className="slider round">
                                </span>
                            </label>
                            <label>Initiate the Thrusters</label>
                            </div>
                        </label>
                        </div>
                    </form>
                </div>
                <div className="controlContainer">
                    <h5>Props</h5>
                    <form>
                        <label className="switch">
                            <input onChange={this.onDisable}type="checkbox">
                            </input>
                            <span className="slider round">
                            </span>
                        </label>
                        <label>Disabled</label>
                    </form>
                    <form>
                        <label className="switch">
                            <input onChange={this.onInline} type="checkbox">
                            </input>
                            <span className="slider round">
                            </span>
                        </label>
                        <label>Inline</label>
                    </form>
                    <form>
                        <label className="switch">
                            <input type="checkbox">
                            </input>
                            <span className="slider round">
                            </span>
                        </label>
                        <label>Show Helper Text</label>
                    </form>
                    <form>
                        <label className="switch">
                            <input onChange={this.onLabel} type="checkbox">
                            </input>
                            <span className="slider round">
                            </span>
                        </label>
                        <label>Show Label</label>
                    </form>
                    <form>
                        <label className="switch">
                            <input onChange={this.onLabelInfo} type="checkbox">
                            </input>
                            <span className="slider round">
                            </span>
                        </label>
                        <label>Show Label Info</label>
                    </form>
                </div>
            </div>
        )
    }
    onDisable = () => {
        if(this.state.disabled ==''){
            this.setState({disabled: 'disabled'})
        } else {
            this.setState({disabled: ''})
        }
        console.log(this.state.disabled)
    }
    onInline = () => {
        if(this.state.disabledLabel =='block'){
            this.setState({disabledLabel: 'inline'})
        } else{
            this.setState({disabledLabel: 'block'})
        }
        console.log("trigger")
    }
    onLabel =() =>{
        if(this.state.disabledLabel =='block'){
            this.setState({disabledLabel: 'none'})
        } else{
            this.setState({disabledLabel: 'block'})
        }
        console.log("trigger")
    }
    onLabelInfo =() =>{
        if(this.state.disabledLabelInfo =='inline'){
            this.setState({disabledLabelInfo: 'none'})
        } else{
            this.setState({disabledLabelInfo: 'inline'})
        }
        console.log(this.state.disabledLabelInfo)
    }
}

export default Component;