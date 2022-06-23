import {Component} from "react";

interface IErrorBoundaryProps {
    ErrorComponent: typeof Component
}

interface IErrorBoundaryState {
    error: boolean,
    errorInfo: any
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = {
            error: false,
            errorInfo: null
        }
    }
    static getDerivedStateFromError(error: any) {
        return {error: true, errorInfo: error}
    }
    render() {
        if (this.state.error) {
            return (
                <this.props.ErrorComponent errorInfo={this.state.errorInfo}/>
            )
        }
        return this.props.children
    }
}