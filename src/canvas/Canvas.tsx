import * as React from 'react'
import {CanvasState} from './module'
import {ActionDispatcher} from './Container'

interface Props {
    value: CanvasState
    actions: ActionDispatcher
}

export class Canvas extends React.Component<Props, {}> {

    private _canvas: any;
    private _ctx: CanvasRenderingContext2D;

    componentDidMount() {
        this._canvas = this.refs.canvas
        this._ctx = this._canvas.getContext('2d')
        this._ctx.font = '24px sans-serif'
        this._ctx.textAlign = 'center'
        this._ctx.fillText('', 50, 50)
    }

    shouldComponentUpdate () {
        this._ctx.clearRect(0, 0, 100, 100)
        this._ctx.fillText(this.props.value.text, 50, 50)
        return false
    }

    render() {
        return (
            <div>
                <canvas ref='canvas' width='100' height='100' />
                <br />
                <input onChange={(e) => this.props.actions.changeText(e.target.value)} />
            </div>
        )
    }
}
