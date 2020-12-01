import React from "react";

class SchoolComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Hschools: [
                {name:"Colegiul National Calistrat Hogas",people:942},
                {name:"Colegiul National Spiru Haret",people:653},
                {name:"Colegiul National de Agricultura si Economie",people:1364}
            ]
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(name) {
        return () => {
            let arr = this.state.Hschools.slice(0);
            let loc = arr.find(a => a.name === name);
            loc.people++;
            this.setState({Hschools:arr});
        }
    }
    decrement(name) {
        return () => {
            let arr = this.state.Hschools.slice(0);
            let loc = arr.find(a => a.name === name);
            loc.people--;
            this.setState({Hschools:arr});
        }
    }
    render = () => {
        let {Hschools} = this.state;
        return (
            <div className="is-family-secondary subtitle my-3">
                {Hschools.map(
                    (item) => {
                        return (
                            <div className="has-text-centered">
                                <p className="my-4">{item.name} - <strong>{item.people} de elevi</strong></p>
                                <button className="button is-success is-rounded" onClick={this.increment(item.name)}>Adauga
                                    elevi
                                </button>
                                <button className="button is-danger is-rounded" onClick={this.decrement(item.name)}>Scoate Elevi
                                </button>
                            </div>
                        )
                    }
                )}
            </div>
        );
    }
}


export default SchoolComponent;